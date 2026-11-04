import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { AppHeader, PageIntro } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/agreement")({
  head: () => ({
    meta: [
      { title: "Sign Loan Agreement — Happen Loans" },
      { name: "description", content: "Review and e-sign your $80,000 personal loan agreement." },
      { property: "og:title", content: "Sign Loan Agreement — Happen Loans" },
      { property: "og:description", content: "Review and e-sign your $80,000 personal loan agreement." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AgreementPage,
});

const summary = [
  ["Borrower", "Ada Okafor"],
  ["Lender", "Happen Loans, a division of Happen Bank, N.A."],
  ["Loan Amount", "$80,000.00"],
  ["Interest Rate (APR)", "10.99% fixed"],
  ["Term", "60 months"],
  ["Monthly Payment", "$1,738.94"],
  ["Activation Fee", "$5,000.00 · due Mon, Nov 9, 2026"],
  ["First Payment", "Dec 15, 2026"],
];

const clauses = [
  ["Activation Fee", "The Borrower agrees to pay a one-time approval and activation fee of $5,000.00 on or before Monday, November 9, 2026. Funds are released only after this fee is received."],
  ["Promise to Pay", "The Borrower promises to repay $80,000.00 plus interest at 10.99% APR in 60 monthly installments of $1,738.94, due on the 15th of each month."],
  ["Late Charges", "Payments received more than 15 days late incur a $39.00 fee and may be reported to credit bureaus."],
  ["Prepayment", "The Borrower may prepay all or part of the balance at any time without penalty."],
  ["Default", "Missing three consecutive payments may make the entire balance immediately due."],
  ["Electronic Signature", "By signing below, the Borrower agrees that an electronic signature has the same legal effect as a handwritten one."],
];

function AgreementPage() {
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [signed, setSigned] = useState(false);
  const valid = agree && name.trim().toLowerCase() === "ada okafor";

  return (
    <div className="mx-auto min-h-screen max-w-md bg-card pb-24">
      <AppHeader back title="Home" />
      <PageIntro title="Sign your loan agreement">Review the key terms below, then e-sign to continue.</PageIntro>

      <section className="px-6 py-5">
        <h2 className="text-base font-bold">Loan summary</h2>
        <div className="mt-2 divide-y-2 divide-border">
          {summary.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 py-3 text-sm">
              <span className="text-muted-foreground">{k}</span>
              <span className="text-right font-bold">{v}</span>
            </div>
          ))}
        </div>

        <h2 className="mt-6 text-base font-bold">Agreement</h2>
        <div className="mt-2 max-h-72 space-y-3 overflow-y-auto rounded-lg border-2 border-border p-4 text-sm leading-relaxed">
          {clauses.map(([h, b], i) => (
            <div key={h}>
              <p className="font-bold">{i + 1}. {h}</p>
              <p className="text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>

        {signed ? (
          <div className="mt-6 rounded-lg bg-cream p-5 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-success" />
            <p className="mt-2 font-bold">Agreement signed</p>
            <p className="text-sm text-muted-foreground">Signed by Ada Okafor on Nov 4, 2026</p>
            <Link to="/payment" className="mt-4 block rounded-md bg-brand py-3 font-bold text-primary-foreground">
              Pay $5,000 Activation Fee
            </Link>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 h-4 w-4 accent-brand" />
              I have read and agree to the loan agreement and terms &amp; conditions.
            </label>
            <div>
              <label htmlFor="sig" className="text-xs font-semibold text-muted-foreground">Type your full legal name to sign</label>
              <input id="sig" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ada Okafor"
                className="mt-1 w-full rounded-md border-2 border-border bg-card px-3 py-3 text-lg italic outline-none focus:border-cta" />
            </div>
            <button disabled={!valid} onClick={() => setSigned(true)}
              className="w-full rounded-md bg-cta py-3.5 font-bold text-primary-foreground disabled:opacity-40">
              Sign Agreement
            </button>
          </div>
        )}
      </section>
      <BottomNav />
    </div>
  );
}
