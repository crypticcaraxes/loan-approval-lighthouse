import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Landmark, FileSignature, BadgeCheck, Wallet, ChevronRight } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "You're Approved — Lendora Finance" },
      { name: "description", content: "Your $80,000 loan is approved. Finish a few steps to activate it." },
      { property: "og:title", content: "You're Approved — Lendora Finance" },
      { property: "og:description", content: "Your $80,000 loan is approved. Finish a few steps to activate it." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const steps: { title: string; sub: string; icon: typeof Wallet; to?: "/payment" | "/agreement" | "/profile" | "/loans" }[] = [
  { title: "Pay activation fee", sub: "$5,000.00 due by Mon, Nov 9", icon: Wallet, to: "/payment" as const },
  { title: "Set up payments", sub: "Link your bank for monthly repayments", icon: Landmark, to: "/profile" },
  { title: "Sign agreement", sub: "Review and e-sign your terms", icon: FileSignature, to: "/agreement" as const },
  { title: "Receive your funds", sub: "Released once activation is complete", icon: BadgeCheck },
];

function Index() {
  const nav = useNavigate();
  const isAuth = typeof window !== "undefined" && !!sessionStorage.getItem("lendora_auth");

  useEffect(() => {
    if (!isAuth) {
      nav({ to: "/login" });
    }
  }, [isAuth, nav]);

  if (!isAuth) return null;

  return (
    <div className="mx-auto min-h-screen w-full max-w-md md:max-w-3xl lg:max-w-5xl md:border-x bg-card pb-24">
      <AppHeader />

      <section className="bg-cream px-6 pb-10 pt-10">
        <h1 className="text-[32px] md:text-5xl font-extrabold leading-tight tracking-tight">
          Congrats, you're approved for $80,000!
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
          Complete the steps below to activate your loan. Your $5,000 activation fee is due on or before
          Monday, November 9, 2026.
        </p>
      </section>

      <ol className="px-6 py-4 md:grid md:grid-cols-2 md:gap-x-10 md:px-10">
        {steps.map(({ title, sub, icon: Icon, to }, i) => {
          const inner = (
            <>
              <span className="relative">
                <Icon className="h-10 w-10 stroke-[1.4]" />
                <span className="absolute -bottom-1 -right-1 h-3 w-5 rounded-sm bg-brand" />
              </span>
              <div className="flex-1">
                <p className="text-base font-medium">{i + 1}. {title}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </div>
              {to && <ChevronRight className="h-5 w-5 text-cta" />}
            </>
          );
          return (
            <li key={title} className="border-b-2 border-border">
              {to ? (
                <Link to={to} className="flex items-center gap-5 py-5">{inner}</Link>
              ) : (
                <div className="flex items-center gap-5 py-5">{inner}</div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Pay button — left-aligned on desktop, full-width on mobile */}
      <div className="px-6 pt-2 md:px-10">
        <Link
          to="/payment"
          className="block rounded-md bg-brand py-3.5 text-center font-bold text-primary-foreground md:inline-block md:min-w-[280px] md:px-8"
        >
          Pay $5,000 Activation Fee
        </Link>
      </div>
      <BottomNav />
    </div>
  );
}
