import { createFileRoute, Link } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Profile — Happen Loans" },
      { name: "description", content: "Personal, employment and financial details for your loan." },
      { property: "og:title", content: "My Profile — Happen Loans" },
      { property: "og:description", content: "Personal, employment and financial details for your loan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProfilePage,
});

const groups: [string, [string, string][]][] = [
  ["Personal Information", [
    ["Full Legal Name", "Ada Chinwe Okafor"],
    ["Date of Birth", "Mar 14, 1990"],
    ["SSN", "•••-••-4417"],
    ["Marital Status", "Single"],
    ["Citizenship", "U.S. Citizen"],
  ]],
  ["Contact", [
    ["Email", "ada.okafor@email.com"],
    ["Mobile", "(612) 555-0148"],
    ["Home Address", "1820 Lakeview Ave, Apt 4B, Minneapolis, MN 55408"],
    ["Time at Address", "3 years, 2 months"],
  ]],
  ["Employment", [
    ["Employer", "Acme Inc."],
    ["Job Title", "Senior Product Analyst"],
    ["Employment Type", "Full-time"],
    ["Time with Employer", "5 years"],
    ["Work Phone", "(612) 555-0190"],
  ]],
  ["Financial", [
    ["Annual Income", "$92,000.00"],
    ["Housing", "Rent · $1,450/mo"],
    ["Credit Score", "742 (Good)"],
    ["Linked Bank", "Checking •••• 4948"],
  ]],
  ["Loan", [
    ["Application ID", "APP-2026-118734"],
    ["Approved Amount", "$80,000.00"],
    ["Purpose", "Personal expenses"],
    ["Status", "Approved · awaiting activation fee"],
  ]],
];

function ProfilePage() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md md:max-w-3xl lg:max-w-5xl md:border-x bg-card pb-24">
      <AppHeader back title="Home" />
      <section className="flex items-center gap-4 bg-cream px-6 pb-8 pt-6">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-xl font-extrabold text-primary-foreground">AO</span>
        <div>
          <h1 className="text-2xl font-extrabold">Ada Okafor</h1>
          <p className="text-sm text-muted-foreground">Member since Oct 2026</p>
        </div>
      </section>
      {groups.map(([title, rows]) => (
        <section key={title} className="px-6 pt-5 md:px-10">
          <h2 className="text-base font-bold">{title}</h2>
          <div className="mt-1 divide-y-2 divide-border md:grid md:grid-cols-2 md:gap-x-10 md:divide-y-0 md:[&>*]:border-b-2">
            {rows.map(([k, v]) => (
              <div key={k} className="flex min-w-0 justify-between gap-4 py-3 text-sm">
                <span className="text-muted-foreground">{k}</span>
                <span className="text-right font-bold">{v}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
      <div className="px-6 py-6 md:px-10 md:max-w-sm">
        <Link to="/login" className="flex items-center justify-center gap-2 rounded-md border-2 border-brand py-3 font-bold text-brand">
          <LogOut className="h-4 w-4" /> Log Out
        </Link>
      </div>
      <BottomNav />
    </div>
  );
}
