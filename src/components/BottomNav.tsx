import { Link } from "@tanstack/react-router";
import { Home, Landmark, CalendarClock, FileSignature, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/loans", label: "Loans", icon: Landmark },
  { to: "/payment", label: "Payments", icon: CalendarClock },
  { to: "/agreement", label: "Agreement", icon: FileSignature },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto max-w-md border-t bg-card">
      <ul className="grid grid-cols-5">
        {items.map(({ to, label, icon: Icon }) => (
          <li key={label}>
            <Link
                to={to}
                activeOptions={{ exact: true }}
                className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-muted-foreground"
                activeProps={{ className: "text-brand" }}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
