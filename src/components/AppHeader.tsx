import { Link } from "@tanstack/react-router";
import { ChevronLeft, Menu } from "lucide-react";

export function Logo() {
  return (
    <span className="text-2xl font-extrabold italic tracking-tight text-brand">
      Happen<span className="ml-0.5 align-top text-[9px] not-italic">LOANS</span>
    </span>
  );
}

export function AppHeader({ back, title }: { back?: boolean; title?: string }) {
  return (
    <>
      <div className="h-1.5 bg-strip" />
      <header className="flex items-center justify-between bg-cream px-5 py-4">
        {back ? (
          <Link to="/" aria-label="Back" className="flex items-center gap-1 text-sm font-semibold">
            <ChevronLeft className="h-5 w-5" /> {title ?? "Back"}
          </Link>
        ) : (
          <Logo />
        )}
        <div className="flex items-center gap-3">
          {back && <Logo />}
          {!back && (
            <Link to="/loans" className="rounded-md bg-cta px-3 py-2 text-xs font-bold text-primary-foreground">
              View My Loan
            </Link>
          )}
          {!back && <Menu className="h-6 w-6" />}
        </div>
      </header>
    </>
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
