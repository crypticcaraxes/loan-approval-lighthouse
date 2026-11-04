import { createFileRoute, Link } from "@tanstack/react-router";
import { Menu, Landmark, FileSignature, BadgeCheck, Wallet, ChevronRight } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "You're Approved — Happen Loans" },
      { name: "description", content: "Your $80,000 loan is approved. Finish a few steps to activate it." },
      { property: "og:title", content: "You're Approved — Happen Loans" },
      { property: "og:description", content: "Your $80,000 loan is approved. Finish a few steps to activate it." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const steps = [
  { title: "Pay activation fee", sub: "$5,000.00 due by Mon, Nov 9", icon: Wallet, to: "/loans" as const },
  { title: "Set up payments", sub: "Link your bank for monthly repayments", icon: Landmark },
  { title: "Sign loan agreement", sub: "Review and e-sign your terms", icon: FileSignature, to: "/loans" as const },
  { title: "Receive your funds", sub: "Released once activation is complete", icon: BadgeCheck },
];

function Index() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-card pb-24">
      <div className="h-1.5 bg-strip" />
      <header className="flex items-center justify-between bg-cream px-5 py-4">
        <span className="text-2xl font-extrabold italic tracking-tight text-brand">
          Happen<span className="ml-0.5 align-top text-[9px] not-italic">LOANS</span>
        </span>
        <div className="flex items-center gap-3">
          <Link to="/loans" className="rounded-md bg-cta px-3 py-2 text-xs font-bold text-primary-foreground">
            View My Loan
          </Link>
          <Menu className="h-6 w-6" />
        </div>
      </header>

      <section className="bg-cream px-6 pb-10 pt-10">
        <h1 className="text-[32px] font-extrabold leading-tight tracking-tight">
          Congrats, you're approved for $80,000!
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
          Complete the steps below to activate your loan. Your $5,000 activation fee is due on or before
          Monday, November 9, 2026.
        </p>
      </section>

      <ol className="px-6 py-4">
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
            <li key={title} className="border-b-2 border-border last:border-0">
              {to ? (
                <Link to={to} className="flex items-center gap-5 py-5">{inner}</Link>
              ) : (
                <div className="flex items-center gap-5 py-5">{inner}</div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="px-6">
        <Link to="/loans" className="block rounded-md bg-brand py-3.5 text-center font-bold text-primary-foreground">
          Pay $5,000 Activation Fee
        </Link>
      </div>
      <BottomNav />
    </div>
  );
}
