import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Copy, Check, AlertCircle } from "lucide-react";
import { AppHeader, PageIntro } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Pay Activation Fee — Lendora Finance" },
      { name: "description", content: "Bank transfer details for your $5,000 loan activation fee." },
      { property: "og:title", content: "Pay Activation Fee — Lendora Finance" },
      { property: "og:description", content: "Bank transfer details for your $5,000 loan activation fee." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PaymentPage,
});

const details: [string, string][] = [
  ["Bank Name", "Lendora Finance, N.A."],
  ["Account Name", "Lendora Finance Activation Escrow"],
  ["Account Number", "722 9255 026"],
  ["Wire Routing Number", "026 009 593"],
  ["Account Type", "Everyday Checking"],
  ["Payment Reference", "APP-2026-118734"],
  ["Bank Address", "400 Market St, Minneapolis, MN 55402"],
];

function PaymentPage() {
  const nav = useNavigate();
  const [copied, setCopied] = useState<string | null>(null);
  const isAuth = typeof window !== "undefined" && !!sessionStorage.getItem("lendora_auth");

  useEffect(() => {
    if (!isAuth) {
      nav({ to: "/login" });
    }
  }, [isAuth, nav]);

  if (!isAuth) return null;

  const copy = (k: string, v: string) => {
    navigator.clipboard?.writeText(v.replace(/\s/g, k === "Bank Address" || k.includes("Name") ? " " : ""));
    setCopied(k);
    setTimeout(() => setCopied(null), 1500);
  };
  return (
    <div className="mx-auto min-h-screen w-full max-w-md md:max-w-3xl lg:max-w-5xl md:border-x bg-card pb-24">
      <AppHeader back title="Home" />
      <PageIntro title="Pay your $5,000 activation fee">
        Send the fee by bank transfer to the account below on or before <b className="text-foreground">Monday, November 9, 2026</b>.
      </PageIntro>

      <section className="px-6 py-5 md:px-10">
        <div className="rounded-lg border-2 border-border p-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Amount due</p>
          <p className="text-3xl font-extrabold">$5,000.00</p>
          <p className="mt-1 text-xs font-semibold text-brand">Due Mon, Nov 9, 2026</p>
        </div>

        <h2 className="mt-6 text-base font-bold">Transfer details</h2>
        <div className="mt-2 divide-y-2 divide-border md:grid md:grid-cols-2 md:gap-x-10 md:divide-y-0 md:[&>*]:border-b-2">
          {details.map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-3 py-3">
              <div>
                <p className="text-xs text-muted-foreground">{k}</p>
                <p className="text-sm font-bold">{v}</p>
              </div>
              <button onClick={() => copy(k, v)} aria-label={`Copy ${k}`} className="text-cta">
                {copied === k ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-5 flex gap-3 rounded-lg bg-cream p-4 text-sm">
          <AlertCircle className="h-5 w-5 shrink-0 text-brand" />
          <p>Include your payment reference <b>APP-2026-118734</b> so we can match your transfer. Your loan of $80,000 is released within 1 business day of receipt.</p>
        </div>
      </section>
      <BottomNav />
    </div>
  );
}
