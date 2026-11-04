import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Logo } from "@/components/AppHeader";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log In — Happen Loans" },
      { name: "description", content: "Log in to manage your Happen loan." },
      { property: "og:title", content: "Log In — Happen Loans" },
      { property: "og:description", content: "Log in to manage your Happen loan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <div className="mx-auto min-h-screen max-w-md bg-card">
      <div className="h-1.5 bg-strip" />
      <div className="bg-cream px-6 pb-10 pt-8">
        <Logo />
        <h1 className="mt-10 text-[32px] font-extrabold leading-tight tracking-tight">Welcome back</h1>
        <p className="mt-2 text-[15px] text-muted-foreground">Log in to finish activating your loan.</p>
      </div>
      <form
        className="space-y-4 px-6 py-8"
        onSubmit={(e) => { e.preventDefault(); nav({ to: "/" }); }}
      >
        <div>
          <label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</label>
          <input id="email" type="email" required defaultValue="ada.okafor@email.com"
            className="mt-1 w-full rounded-md border-2 border-border px-3 py-3 outline-none focus:border-cta" />
        </div>
        <div>
          <label htmlFor="pw" className="text-xs font-semibold text-muted-foreground">Password</label>
          <div className="relative">
            <input id="pw" type={show ? "text" : "password"} required
              className="mt-1 w-full rounded-md border-2 border-border px-3 py-3 pr-10 outline-none focus:border-cta" />
            <button type="button" onClick={() => setShow(!show)} aria-label="Show password" className="absolute right-3 top-4 text-muted-foreground">
              {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <p className="text-right text-sm font-semibold text-cta">Forgot password?</p>
        <button className="w-full rounded-md bg-cta py-3.5 font-bold text-primary-foreground">Log In</button>
        <p className="text-center text-sm text-muted-foreground">
          New here? <Link to="/" className="font-semibold text-brand">Check your rate</Link>
        </p>
        <p className="flex items-center justify-center gap-1.5 pt-4 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" /> 256-bit encrypted · Member FDIC
        </p>
      </form>
    </div>
  );
}
