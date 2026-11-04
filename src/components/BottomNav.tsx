import { Link } from "@tanstack/react-router";
import { Home, Landmark, CalendarClock, HelpCircle, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/loans", label: "Loans", icon: Landmark },
  { to: null, label: "Payments", icon: CalendarClock },
  { to: null, label: "Help", icon: HelpCircle },
  { to: null, label: "Profile", icon: User },
] as const;

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto max-w-md border-t bg-card">
      <ul className="grid grid-cols-5">
        {items.map(({ to, label, icon: Icon }) => (
          <li key={label}>
            {to ? (
              <Link
                to={to}
                activeOptions={{ exact: true }}
                className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-muted-foreground"
                activeProps={{ className: "text-primary" }}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            ) : (
              <span className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-muted-foreground/60">
                <Icon className="h-5 w-5" />
                {label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
