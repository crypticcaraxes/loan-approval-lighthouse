import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Logo } from "@/components/AppHeader";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log In — Lendora Finance" },
      { name: "description", content: "Log in to manage your Lendora Finance loan." },
      { property: "og:title", content: "Log In — Lendora Finance" },
      { property: "og:description", content: "Log in to manage your Lendora Finance loan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LoginPage,
});

const CREDENTIALS = { email: "eve.clinton@email.com", password: "Lendora2026!" };

const BG_IMAGES = [
  "/family-sitting-on-boat-ready-to-swim.avif",
  "/groom-holding-bride-at-wedding.avif",
  "/Marquee_couple_dog_720x440_Desktop.avif",
];

function LoginPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("eve.clinton@email.com");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((i) => (i + 1) % BG_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email === CREDENTIALS.email && password === CREDENTIALS.password) {
      sessionStorage.setItem("lendora_auth", "1");
      nav({ to: "/" });
    } else {
      setError("Incorrect email or password. Please try again.");
    }
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Slideshow background */}
      {BG_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === bgIndex ? 1 : 0,
          }}
        />
      ))}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Login card */}
      <div className="relative z-10 mx-auto w-full max-w-md bg-card md:overflow-hidden md:rounded-xl md:border shadow-2xl">
        <div className="h-1.5 bg-strip" />
        <div className="bg-cream px-6 pb-10 pt-8">
          <Logo />
          <h1 className="mt-10 text-[32px] font-extrabold leading-tight tracking-tight">Welcome back</h1>
          <p className="mt-2 text-[15px] text-muted-foreground">Log in to finish activating your loan.</p>
        </div>
        <form className="space-y-4 px-6 py-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              className="mt-1 w-full rounded-md border-2 border-border px-3 py-3 outline-none focus:border-cta"
            />
          </div>
          <div>
            <label htmlFor="pw" className="text-xs font-semibold text-muted-foreground">Password</label>
            <div className="relative">
              <input
                id="pw"
                type={show ? "text" : "password"}
                required
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                className="mt-1 w-full rounded-md border-2 border-border px-3 py-3 pr-10 outline-none focus:border-cta"
              />
              <button type="button" onClick={() => setShow(!show)} aria-label="Show password" className="absolute right-3 top-4 text-muted-foreground">
                {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          {error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-600">{error}</p>}
          <p className="text-right text-sm font-semibold text-cta">Forgot password?</p>
          <button type="submit" className="w-full rounded-md bg-cta py-3.5 font-bold text-primary-foreground">Log In</button>
          <p className="flex items-center justify-center gap-1.5 pt-4 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" /> 256-bit encrypted · Member FDIC
          </p>
        </form>
      </div>
    </div>
  );
}
