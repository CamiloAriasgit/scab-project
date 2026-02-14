"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, SlidersHorizontal, BarChart3 } from "lucide-react";

/* ─── Data ─── */

const items = [
  {
    index: "01",
    label: "Web Publica",
    description:
      "Tu negocio necesita una presencia clara, rapida y profesional. Optimizada para comunicar y convertir.",
    icon: Globe,
  },
  {
    index: "02",
    label: "Panel Editable",
    description:
      "Actualiza textos, secciones o contenidos sin depender del desarrollador.",
    icon: SlidersHorizontal,
  },
  {
    index: "03",
    label: "Metricas Reales",
    description:
      "Configuracion de Google Tag Manager y GA4 desde tu propia cuenta. Control total sobre tus datos.",
    icon: BarChart3,
  },
];

/* ─── Scroll reveal hook ─── */

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
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

/* ─── Floating Card ─── */

function FloatingCard({
  item,
  visible,
  delay,
}: {
  item: (typeof items)[number];
  visible: boolean;
  delay: number;
}) {
  const Icon = item.icon;

  return (
    <div
      className="group relative flex flex-col gap-6 rounded-2xl border border-foreground/[0.04] bg-background/60 p-6 backdrop-blur-md transition-all duration-700 sm:p-8 lg:hover:-translate-y-1 lg:hover:border-foreground/[0.08] lg:hover:shadow-xl lg:hover:shadow-foreground/[0.03]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {/* Top row: index + icon */}
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] font-medium tracking-widest text-[#5E6472]/30">
          {item.index}
        </span>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/[0.05] bg-secondary/50 transition-colors duration-500 lg:group-hover:border-foreground/[0.1] lg:group-hover:bg-secondary">
          <Icon
            className="h-[18px] w-[18px] text-[#5E6472]/50 transition-colors duration-500 lg:group-hover:text-foreground/70"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Label */}
      <h3 className="text-[clamp(1.1rem,2.5vw,1.35rem)] font-medium leading-tight tracking-tight text-foreground">
        {item.label}
      </h3>

      {/* Description */}
      <p className="text-[clamp(0.825rem,1.5vw,0.9rem)] leading-relaxed text-[#5E6472]/60 transition-colors duration-500 lg:group-hover:text-[#5E6472]/80">
        {item.description}
      </p>

      {/* Bottom accent line */}
      <div className="mt-auto h-px w-0 bg-foreground/10 transition-all duration-700 lg:group-hover:w-full" />
    </div>
  );
}

/* ─── Main ─── */

export default function Philosophy() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section
      ref={ref}
      id="explorar"
      className="relative w-full overflow-hidden bg-background py-20 selection:bg-foreground/5 sm:py-28 lg:py-40"
    >
      {/* Subtle ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-[0.025]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--foreground)), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-6">
        {/* ─── Header ─── */}
        <div className="flex flex-col items-center gap-5 pb-14 text-center sm:pb-20 lg:pb-24">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-foreground/[0.06] bg-secondary/40 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5E6472]/50 backdrop-blur-sm"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.05s",
            }}
          >
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
            Sistema
          </span>

          <h2
            className="text-balance text-[clamp(1.75rem,5vw,3.25rem)] font-medium leading-[1.05] tracking-tight text-foreground"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
            }}
          >
            Sistema Web Profesional
          </h2>

          <p
            className="max-w-md text-pretty text-[clamp(0.875rem,1.8vw,1.05rem)] leading-relaxed text-[#5E6472]/50"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
            }}
          >
            No es solo una web.
            <br />
            <span className="text-foreground/70">
              Es presencia publica + control + metricas reales.
            </span>
          </p>
        </div>

        {/* ─── Cards grid ─── */}
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-5">
          {items.map((item, i) => (
            <FloatingCard
              key={item.index}
              item={item}
              visible={visible}
              delay={0.35 + i * 0.12}
            />
          ))}
        </div>

        {/* ─── Closing ─── */}
        <div
          className="flex flex-col items-center gap-4 pt-14 text-center sm:pt-20 lg:pt-24"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
          }}
        >
          <div
            className="h-px w-12 origin-center bg-foreground/[0.06]"
            style={{
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
            }}
          />
          <p className="max-w-sm text-sm leading-relaxed text-[#5E6472]/40 sm:text-[15px]">
            Tu web deja de ser un gasto.
            <br />
            <span className="text-foreground/50">
              Se convierte en una herramienta de operacion.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
