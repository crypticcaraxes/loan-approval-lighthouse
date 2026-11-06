import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Sparkles, Loader2 } from "lucide-react";
import { AppHeader, PageIntro } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { diagnoseLayout } from "@/lib/layout-help.functions";

export const Route = createFileRoute("/layout-help")({
  head: () => ({
    meta: [
      { title: "Report a Screen Issue — Lendora Finance" },
      { name: "description", content: "Describe a screen that looks wrong and get an AI-suggested fix." },
      { property: "og:title", content: "Report a Screen Issue — Lendora Finance" },
      { property: "og:description", content: "Describe a screen that looks wrong and get an AI-suggested fix." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LayoutHelpPage,
});

const pages = ["Home", "Loans", "Payments", "Agreement", "Profile", "Log in"];
const devices = ["Phone", "Tablet", "Laptop / desktop"];

function render(md: string) {
  return md.split("\n").map((line, i) => {
    const t = line.trim();
    if (!t) return <div key={i} className="h-2" />;
    const html = t.replace(/^[-*]\s+/, "").replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/`(.+?)`/g, "<code class='rounded bg-cream px-1'>$1</code>");
    const bullet = /^[-*]\s+/.test(t);
    return <p key={i} className={bullet ? "ml-4 list-item" : ""} dangerouslySetInnerHTML={{ __html: html.replace(/<(?!\/?(b|code)\b)/g, "&lt;") }} />;
  });
}

function LayoutHelpPage() {
  const diagnose = useServerFn(diagnoseLayout);
  const [page, setPage] = useState(pages[0]);
  const [device, setDevice] = useState(devices[0]);
  const [width, setWidth] = useState<number | null>(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    setDevice(window.innerWidth < 768 ? devices[0] : window.innerWidth < 1024 ? devices[1] : devices[2]);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(null); setAnswer(null);
    try {
      const r = await diagnose({ data: { page, device, width, description } });
      if (r.ok) setAnswer(r.text); else setError(r.error);
    } catch {
      setError("Please describe the problem in at least 10 characters and try again.");
    } finally { setLoading(false); }
  };

  const field = "mt-1 w-full rounded-md border-2 border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-brand";

  return (
    <div className="mx-auto min-h-screen w-full max-w-md md:max-w-3xl lg:max-w-5xl md:border-x bg-card pb-24 md:pb-10">
      <AppHeader back title="Home" />
      <PageIntro title="Does something look wrong on your screen?">
        Tell us which page looks off and what you see. Our AI assistant will point out the likely cause and suggest a fix.
      </PageIntro>
      <div className="grid gap-8 px-6 py-6 md:grid-cols-2 md:px-10">
        <form onSubmit={submit} className="space-y-4">
          <label className="block text-sm font-semibold">Page
            <select className={field} value={page} onChange={(e) => setPage(e.target.value)}>
              {pages.map((p) => <option key={p}>{p}</option>)}
            </select>
          </label>
          <label className="block text-sm font-semibold">Device
            <select className={field} value={device} onChange={(e) => setDevice(e.target.value)}>
              {devices.map((d) => <option key={d}>{d}</option>)}
            </select>
          </label>
          {width && <p className="text-xs text-muted-foreground">Your screen width: {width}px (sent with your report)</p>}
          <label className="block text-sm font-semibold">What looks wrong?
            <textarea className={`${field} min-h-32`} value={description} onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. The payment details are cut off on the right and I have to scroll sideways." maxLength={2000} required minLength={10} />
          </label>
          <button disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-md bg-brand py-3.5 font-bold text-primary-foreground disabled:opacity-60">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            {loading ? "Analysing…" : "Find the problem"}
          </button>
        </form>
        <div className="rounded-lg border-2 border-border p-5 text-sm leading-relaxed">
          {loading && <p className="text-muted-foreground">Looking at your description…</p>}
          {error && <p className="font-semibold text-destructive">{error}</p>}
          {answer && <div className="space-y-1">{render(answer)}</div>}
          {!loading && !error && !answer && <p className="text-muted-foreground">Your suggestion will appear here.</p>}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
