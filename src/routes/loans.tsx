import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, CheckCircle2, Pencil, Eye, EyeOff, ChevronRight, HelpCircle } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/loans")({
  head: () => ({
    meta: [
      { title: "Personal Loan — Harbor Bank" },
      { name: "description", content: "Approved loan details, terms and conditions, and application summary." },
      { property: "og:title", content: "Personal Loan — Harbor Bank" },
      { property: "og:description", content: "Approved loan details, terms and conditions, and application summary." },
    ],
  }),
  component: LoansPage,
});

type Tab = "details" | "terms" | "application";

function Row({ label, value, sub }: { label: string; value: React.ReactNode; sub?: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        {sub && <p className="text-xs text-muted-foreground/80">{sub}</p>}
      </div>
      <p className="text-right text-sm font-bold">{value}</p>
    </div>
  );
}

function LoansPage() {
  const [tab, setTab] = useState<Tab>("details");
  const [showNo, setShowNo] = useState(false);

  return (
    <div className="mx-auto min-h-screen max-w-md bg-background pb-24">
      <header className="bg-hero border-b-4 border-accent px-4 pb-6 pt-5 text-primary-foreground">
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="Back"><ChevronLeft className="h-6 w-6" /></Link>
          <h1 className="text-lg font-bold">Personal Loan - 7731</h1>
          <span className="text-sm font-semibold">Accounts</span>
        </div>
        <div className="mt-5 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-1 text-xs font-bold text-success-foreground">
            <CheckCircle2 className="h-3.5 w-3.5" /> APPROVED
          </span>
          <p className="mt-3 text-4xl font-extrabold">
            <sup className="text-lg">$</sup>35,000<sup className="text-lg">.00</sup>
          </p>
          <div className="mx-auto mt-3 h-2 w-56 overflow-hidden rounded-full bg-primary-deep">
            <div className="h-full w-[4%] rounded-full bg-highlight" />
          </div>
          <p className="mt-2 text-xs opacity-80">Original Loan Amount: $35,000.00 · Approved Nov 3, 2026</p>
        </div>
      </header>

      <div className="sticky top-0 z-10 grid grid-cols-3 border-b bg-card text-sm font-semibold">
        {([
          ["details", "Loan Details"],
          ["terms", "Terms"],
          ["application", "Application"],
        ] as const).map(([k, l]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`border-b-2 py-3 ${tab === k ? "border-accent text-primary" : "border-transparent text-muted-foreground"}`}
          >
            {l}
          </button>
        ))}
      </div>

      {tab === "details" && (
        <section className="bg-card px-5 pb-4">
          <div className="flex items-end justify-between py-3">
            <div>
              <p className="text-sm text-muted-foreground">Account Nickname</p>
              <p className="text-lg font-bold">Personal Loan</p>
            </div>
            <Pencil className="h-5 w-5 text-link" />
          </div>
          <div className="divide-y">
            <Row
              label="Account Number"
              value={
                <button onClick={() => setShowNo(!showNo)} className="flex items-center gap-2 text-link">
                  {showNo ? "4031 8820 1177 7731" : "•••• •••• •••• 7731"}
                  {showNo ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />
            <Row label="Original Principal Amount" value="$35,000.00" />
            <Row label="Interest Rate (APR)" value="10.99%" />
            <Row label="Loan Term" value="60 months" />
            <Row label="Standard Monthly Payment" value="$760.81" />
            <Row label="First Payment Due Date" value="Dec 15, 2026" />
            <Row label="Maturity Date" value="Nov 15, 2031" />
            <Row label="Origination Fee" value="$0.00" />
            <Row label="Total Interest (est.)" value="$10,648.60" />
          </div>
          <button className="mt-2 flex w-full items-center justify-between py-3 font-bold">
            Payment Breakdown <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </section>
      )}

      {tab === "terms" && (
        <section className="space-y-4 bg-card px-5 py-5 text-sm leading-relaxed">
          <h2 className="text-base font-bold">Loan Terms &amp; Conditions</h2>
          {[
            ["1. Repayment", "You agree to repay the principal of $35,000.00 plus interest at a fixed APR of 10.99% in 60 equal monthly installments of $760.81, due on the 15th of each month."],
            ["2. Interest", "Interest accrues daily on the unpaid principal balance using a 365-day year. The rate is fixed for the life of the loan."],
            ["3. Late Payments", "A payment received more than 15 days after its due date incurs a late fee of $39.00. Late payments may be reported to credit bureaus."],
            ["4. Prepayment", "You may pay off all or part of the loan at any time without a prepayment penalty. Extra payments reduce principal first."],
            ["5. Autopay", "Enrolling in autopay from a Harbor checking account is optional and does not change your rate."],
            ["6. Default", "Failure to make three consecutive payments may result in the full balance becoming immediately due and collection activity."],
            ["7. Use of Funds", "Funds may not be used for post-secondary education, business purposes, or illegal activity."],
            ["8. Governing Law", "This agreement is governed by federal law and the laws of the state in which the account was opened."],
          ].map(([h, b]) => (
            <div key={h}>
              <h3 className="font-bold">{h}</h3>
              <p className="text-muted-foreground">{b}</p>
            </div>
          ))}
          <p className="rounded-lg bg-secondary p-3 text-xs text-secondary-foreground">
            Accepted electronically by Ada Okafor on Nov 3, 2026 at 4:12 PM.
          </p>
        </section>
      )}

      {tab === "application" && (
        <section className="bg-card px-5 pb-4">
          <h2 className="pt-4 text-base font-bold">Application Summary</h2>
          <div className="divide-y">
            <Row label="Application ID" value="APP-2026-118734" />
            <Row label="Submitted" value="Oct 28, 2026" />
            <Row label="Decision" value={<span className="text-success">Approved · Nov 3, 2026</span>} />
            <Row label="Requested Amount" value="$35,000.00" />
            <Row label="Purpose" value="Debt consolidation" />
            <Row label="Applicant" value="Ada Okafor" />
            <Row label="Employer" value="Acme Inc." />
            <Row label="Annual Income" value="$92,000.00" />
            <Row label="Housing" value="Rent · $1,450/mo" />
            <Row label="Disbursement Account" value="Checking •••• 4948" />
          </div>
          <h3 className="mt-4 text-sm font-bold">Status Timeline</h3>
          <ol className="mt-3 space-y-3 border-l-2 border-success pl-4 text-sm">
            {["Application submitted · Oct 28", "Identity verified · Oct 29", "Underwriting review · Oct 31", "Approved · Nov 3", "Funds disbursed · Nov 3"].map((s) => (
              <li key={s} className="relative">
                <span className="absolute -left-[23px] top-1 h-3 w-3 rounded-full bg-success" />
                {s}
              </li>
            ))}
          </ol>
        </section>
      )}

      <div className="px-4 py-5">
        <button className="flex w-full items-center gap-3 rounded-xl bg-card p-4 shadow-card">
          <HelpCircle className="h-6 w-6 text-accent" />
          <span className="flex-1 text-left font-semibold">View your loan guide</span>
          <ChevronRight className="h-5 w-5 text-link" />
        </button>
        <p className="mt-6 text-center text-sm font-semibold text-link">Privacy &amp; Terms | Provide Feedback</p>
        <p className="mt-2 text-center text-xs text-muted-foreground">© 2026 Harbor Bank, N.A. Member FDIC. Equal Housing Lender.</p>
      </div>
      <BottomNav />
    </div>
  );
}
