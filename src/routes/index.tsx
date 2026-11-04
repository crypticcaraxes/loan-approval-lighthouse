import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, Eye, ChevronRight, Send, Download, Receipt, MapPin, Landmark, CheckCircle2 } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — Harbor Bank" },
      { name: "description", content: "Your accounts, balances and recent activity at a glance." },
      { property: "og:title", content: "Home — Harbor Bank" },
      { property: "og:description", content: "Your accounts, balances and recent activity at a glance." },
    ],
  }),
  component: Index,
});

const actions = [
  { label: "Transfer", icon: Send },
  { label: "Deposit", icon: Download },
  { label: "Pay Bills", icon: Receipt },
  { label: "Find ATM", icon: MapPin },
];

const activity = [
  { name: "Loan disbursement", date: "Nov 3", amount: "+$35,000.00", positive: true },
  { name: "Whole Foods Market", date: "Nov 2", amount: "-$84.21" },
  { name: "Payroll — Acme Inc.", date: "Oct 31", amount: "+$3,240.00", positive: true },
  { name: "Netflix", date: "Oct 29", amount: "-$15.49" },
];

function Index() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-background pb-24">
      <header className="bg-hero border-b-4 border-accent px-5 pb-8 pt-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-80">Good evening,</p>
            <h1 className="text-xl font-bold">Ada Okafor</h1>
          </div>
          <button aria-label="Notifications" className="rounded-full bg-primary-foreground/10 p-2">
            <Bell className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="flex items-center justify-center gap-2 text-sm opacity-80">
            <span className="h-2 w-2 rounded-full bg-highlight" /> Total Balance <Eye className="h-4 w-4" />
          </p>
          <p className="mt-1 text-4xl font-extrabold tracking-tight">
            <sup className="text-lg">$</sup>42,819<sup className="text-lg">.68</sup>
          </p>
          <p className="mt-1 text-xs opacity-70">Checking •••• 4948</p>
        </div>
      </header>

      <section className="-mt-5 px-4">
        <div className="grid grid-cols-4 gap-2 rounded-xl bg-card p-3 shadow-card">
          {actions.map(({ label, icon: Icon }) => (
            <button key={label} className="flex flex-col items-center gap-1.5 py-1 text-[11px] font-semibold text-foreground">
              <span className="rounded-full bg-secondary p-2.5 text-primary"><Icon className="h-5 w-5" /></span>
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-5 px-4">
        <Link to="/loans" className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-card">
          <span className="rounded-full bg-success/15 p-2 text-success"><CheckCircle2 className="h-5 w-5" /></span>
          <div className="flex-1">
            <p className="text-sm font-bold">Your personal loan is approved</p>
            <p className="text-xs text-muted-foreground">$35,000.00 at 10.99% APR · View details</p>
          </div>
          <ChevronRight className="h-5 w-5 text-link" />
        </Link>
      </section>

      <section className="mt-6 px-4">
        <h2 className="mb-2 px-1 text-sm font-bold text-muted-foreground">Accounts</h2>
        <div className="divide-y rounded-xl bg-card shadow-card">
          {[
            { name: "Everyday Checking", no: "4948", bal: "$7,819.68" },
            { name: "High-Yield Savings", no: "2210", bal: "$35,000.00" },
            { name: "Personal Loan", no: "7731", bal: "$35,000.00", loan: true },
          ].map((a) => (
            <Link key={a.no} to={a.loan ? "/loans" : "/"} className="flex items-center justify-between px-4 py-3.5">
              <div className="flex items-center gap-3">
                <Landmark className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">{a.name}</p>
                  <p className="text-xs text-muted-foreground">•••• {a.no}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold">{a.bal}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6 px-4">
        <h2 className="mb-2 px-1 text-sm font-bold text-muted-foreground">Recent Activity</h2>
        <div className="divide-y rounded-xl bg-card shadow-card">
          {activity.map((t) => (
            <div key={t.name} className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.date}</p>
              </div>
              <span className={`text-sm font-bold ${t.positive ? "text-success" : "text-foreground"}`}>{t.amount}</span>
            </div>
          ))}
        </div>
      </section>
      <BottomNav />
    </div>
  );
}
