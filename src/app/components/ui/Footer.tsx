"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Scroll reveal ─── */

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── Data ─── */

const NAV_LINKS = [
  { label: "Inicio", href: "#" },
  { label: "Sistemas", href: "#sistemas" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
] as const;

const CURRENT_YEAR = new Date().getFullYear();

/* ─── Main ─── */

export default function Footer() {
  const { ref, visible } = useReveal(0.1);

  return (
    <footer
      ref={ref}
      className="relative w-full bg-foreground selection:bg-background/10"
    >
      {/* ─── Container ─── */}
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-6">

        {/* ─── Top divider ─── */}
        <div
          className="h-px w-full origin-left bg-background/[0.06]"
          style={{
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        />

        {/* ─── Main footer content ─── */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8">

            {/* ─── Brand column ─── */}
            <div
              className="flex flex-col gap-6"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-background/[0.08] bg-background/[0.06]">
                  <span className="text-[10px] font-bold tracking-widest text-background/80">
                    S
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold leading-none tracking-[0.12em] text-background/90">
                    SCAB
                  </span>
                  <span className="pt-px text-[8px] font-medium uppercase leading-none tracking-[0.15em] text-background/30">
                    Systems
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <p className="max-w-xs text-[13px] leading-relaxed text-background/25">
                Sistemas web profesionales pensados para operar, medir y crecer.
              </p>
            </div>

            {/* ─── Navigation ─── */}
            <nav
              className="flex flex-col gap-0"
              aria-label="Footer navigation"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
              }}
            >
              <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-background/20">
                Navegacion
              </span>
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-3 py-2 transition-all duration-300"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-8px)",
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.06}s`,
                  }}
                >
                  <span className="h-px w-0 bg-background/30 transition-all duration-300 lg:group-hover:w-4" />
                  <span className="text-[13px] text-background/35 transition-colors duration-300 lg:group-hover:text-background/70">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>

            {/* ─── Status column ─── */}
            <div
              className="flex flex-col gap-5"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
              }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-background/20">
                Estado
              </span>

              {/* Status pill */}
              <div className="flex items-center gap-2.5 rounded-full border border-background/[0.06] bg-background/[0.04] px-3.5 py-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[11px] font-medium tracking-wide text-background/40">
                  Disponible para proyectos
                </span>
              </div>

              {/* Contact hint */}
              <a
                href="#contacto"
                className="group flex items-center gap-2 text-[12px] text-background/25 transition-colors duration-300 lg:hover:text-background/50"
              >
                <span className="h-px w-3 bg-background/10 transition-all duration-300 lg:group-hover:w-5 lg:group-hover:bg-background/25" />
                Iniciar proyecto
              </a>
            </div>
          </div>
        </div>

        {/* ─── Bottom bar divider ─── */}
        <div
          className="h-px w-full origin-left bg-background/[0.06]"
          style={{
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
          }}
        />

        {/* ─── Bottom bar ─── */}
        <div
          className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row sm:py-8"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.7s",
          }}
        >
          <p className="text-[11px] text-background/15">
            {CURRENT_YEAR} SCAB Systems. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[11px] text-background/15 transition-colors duration-300 lg:hover:text-background/35"
            >
              Privacidad
            </a>
            <span className="h-2.5 w-px bg-background/[0.06]" />
            <a
              href="#"
              className="text-[11px] text-background/15 transition-colors duration-300 lg:hover:text-background/35"
            >
              Terminos
            </a>
          </div>
        </div>
      </div>

      {/* ─── Decorative: large watermark ─── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pb-24 sm:pb-28 lg:pb-32"
        aria-hidden="true"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1.2s ease 0.8s",
        }}
      >
        <span
          className="select-none text-[clamp(4rem,18vw,12rem)] font-bold leading-none tracking-tight text-background/[0.015]"
        >
          SCAB
        </span>
      </div>
    </footer>
  );
}
