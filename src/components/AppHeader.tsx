import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { DesktopNav } from "./BottomNav";

export function Logo() {
  return (
    <span className="text-2xl font-extrabold italic tracking-tight text-brand">
      Lendora<span className="ml-0.5 align-top text-[9px] not-italic">FINANCE</span>
    </span>
  );
}

export function AppHeader({ back, title }: { back?: boolean; title?: string }) {
  return (
    <div className="sticky top-0 z-30">
      <div className="h-1.5 bg-strip" />
      <header className="flex items-center justify-between gap-4 border-b bg-cream px-5 py-4 md:px-8 md:py-3">
        <div className="flex items-center gap-2">
          {back && (
            <Link to="/" aria-label="Back" className="flex items-center gap-1 text-sm font-semibold md:hidden">
              <ChevronLeft className="h-5 w-5" /> {title ?? "Back"}
            </Link>
          )}
          <Link to="/" className={back ? "hidden md:inline" : ""}><Logo /></Link>
        </div>
        <DesktopNav />
        {back && <span className="md:hidden"><Logo /></span>}
      </header>
    </div>
  );
}

export function PageIntro({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section className="bg-cream px-6 pb-8 pt-6 md:px-10 md:pt-10">
      <h1 className="text-[28px] md:text-4xl font-extrabold leading-tight tracking-tight">{title}</h1>
      {children && <div className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{children}</div>}
    </section>
  );
}
