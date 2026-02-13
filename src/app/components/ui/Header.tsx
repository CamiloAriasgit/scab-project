"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  Scroll-reactive header with morphing states + mobile drawer       */
/* ------------------------------------------------------------------ */

const NAV_ITEMS = ["Sistemas", "Proceso", "Contacto"] as const;

function Logo() {
  return (
    <a href="#" className="group flex items-center gap-2.5" aria-label="SCAB Systems home">
      {/* Animated logo mark */}
      <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-foreground transition-all duration-500 group-hover:rounded-xl">
        <span className="text-[10px] font-bold tracking-widest text-background">S</span>
        {/* Sweep shine */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </div>
      <div className="flex flex-col">
        <span className="text-[12px] font-bold leading-none tracking-[0.12em] text-foreground">
          SCAB
        </span>
        <span className="pt-px text-[8px] font-medium uppercase leading-none tracking-[0.15em] text-muted-foreground/50">
          Systems
        </span>
      </div>
    </a>
  );
}

function DesktopNav({ activeSection }: { activeSection: string | null }) {
  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.toLowerCase();
        return (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="group relative flex h-9 items-center rounded-lg px-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300"
          >
            {/* Background pill on hover/active */}
            <span
              className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-foreground/[0.05]"
                  : "bg-transparent group-hover:bg-foreground/[0.03]"
              }`}
            />
            <span
              className={`relative transition-colors duration-300 ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground/60 group-hover:text-foreground"
              }`}
            >
              {item}
            </span>
            {/* Active indicator dot */}
            {isActive && (
              <span className="absolute -bottom-0.5 left-1/2 h-px w-3 -translate-x-1/2 bg-foreground/40 transition-all" />
            )}
          </a>
        );
      })}
    </nav>
  );
}

function CTAButton({ compact }: { compact: boolean }) {
  return (
    <a
      href="#contacto"
      className={`group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-foreground font-medium text-background transition-all duration-500 active:scale-[0.97] ${
        compact ? "h-9 px-4 text-[12px]" : "h-10 px-5 text-[13px]"
      }`}
    >
      <span className="relative z-10 flex items-center gap-1.5">
        Comenzar
        <ArrowUpRight
          className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px"
          strokeWidth={2.5}
        />
      </span>
      {/* Hover sweep */}
      <span className="absolute inset-0 -translate-x-full bg-background/10 transition-transform duration-500 group-hover:translate-x-full" />
    </a>
  );
}

function MobileMenuButton({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <button
      onClick={toggle}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-foreground/[0.04] md:hidden"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <div className="flex w-4 flex-col items-end gap-[5px]">
        <span
          className={`block h-[1.5px] rounded-full bg-foreground transition-all duration-300 ${
            isOpen ? "w-4 translate-y-[6.5px] rotate-45" : "w-4"
          }`}
        />
        <span
          className={`block h-[1.5px] rounded-full bg-foreground transition-all duration-300 ${
            isOpen ? "w-0 opacity-0" : "w-2.5"
          }`}
        />
        <span
          className={`block h-[1.5px] rounded-full bg-foreground transition-all duration-300 ${
            isOpen ? "w-4 -translate-y-[6.5px] -rotate-45" : "w-3.5"
          }`}
        />
      </div>
    </button>
  );
}

function MobileDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-foreground/5 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed inset-x-0 top-0 z-50 px-2 pt-2 transition-all duration-500 md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-foreground/[0.06] bg-background/95 shadow-2xl shadow-foreground/10 backdrop-blur-xl">
          {/* Drawer header */}
          <div className="flex h-14 items-center justify-between px-5">
            <Logo />
            <MobileMenuButton isOpen={isOpen} toggle={onClose} />
          </div>

          {/* Separator */}
          <div className="mx-5 h-px bg-foreground/[0.06]" />

          {/* Nav links */}
          <nav className="flex flex-col px-3 py-3" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={onClose}
                className="group flex items-center justify-between rounded-xl px-3 py-3.5 transition-colors active:bg-foreground/[0.03]"
                style={{
                  animationDelay: `${i * 50}ms`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.04]">
                    <span className="text-[10px] font-bold tabular-nums text-muted-foreground/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 transition-all group-active:text-foreground" strokeWidth={2} />
              </a>
            ))}
          </nav>

          {/* Separator */}
          <div className="mx-5 h-px bg-foreground/[0.06]" />

          {/* Mobile CTA */}
          <div className="p-3">
            <a
              href="#contacto"
              onClick={onClose}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-foreground text-sm font-semibold text-background transition-all active:scale-[0.98]"
            >
              Comenzar proyecto
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.toLowerCase())
    ).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full px-2 transition-all duration-700 pointer-events-none ${
          scrolled ? "pt-2" : "pt-3 md:pt-5"
        }`}
      >
        <div
          className={`pointer-events-auto relative mx-auto overflow-hidden transition-all duration-700 ${
            scrolled
              ? "max-w-3xl rounded-2xl border border-foreground/[0.06] bg-background/80 shadow-lg shadow-foreground/[0.06] backdrop-blur-xl"
              : "max-w-5xl rounded-2xl border border-transparent bg-background/50 shadow-none backdrop-blur-sm"
          }`}
        >
          {/* Subtle top border glow when scrolled */}
          <div
            className={`absolute inset-x-0 top-0 h-px transition-opacity duration-700 ${
              scrolled
                ? "bg-gradient-to-r from-transparent via-foreground/[0.08] to-transparent opacity-100"
                : "opacity-0"
            }`}
          />

          <div
            className={`flex items-center justify-between transition-all duration-700 ${
              scrolled ? "h-12 px-4 md:px-5" : "h-14 px-5 md:h-16 md:px-6"
            }`}
          >
            <Logo />
            <DesktopNav activeSection={activeSection} />

            <div className="flex items-center gap-2">
              <CTAButton compact={scrolled} />
              <MobileMenuButton
                isOpen={mobileOpen}
                toggle={() => setMobileOpen((v) => !v)}
              />
            </div>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
