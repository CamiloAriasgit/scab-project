"use client";

import { useEffect, useRef, useState } from "react";
import { Crosshair, Layers, TrendingUp } from "lucide-react";

/* ─── Data ─── */

const tiers = [
  {
    tag: "Conversion",
    title: "Sitios operativos",
    description:
      "Para validar, comunicar y convertir sin friccion.",
    icon: Crosshair,
    accent: "bg-foreground",
  },
  {
    tag: "Logica",
    title: "Sistemas internos",
    description:
      "Cuando la operacion empieza a necesitar control y orden.",
    icon: Layers,
    accent: "bg-foreground/70",
  },
  {
    tag: "Escala",
    title: "Plataformas escalables",
    description:
      "Pensadas para crecer sin rehacerlo todo despues.",
    icon: TrendingUp,
    accent: "bg-foreground/50",
  },
] as const;

/* ─── Intersection Observer hook ─── */

function useInView(threshold = 0.15) {
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

/* ─── Section header ─── */

function SectionHeader({ visible }: { visible: boolean }) {
  return (
    <div className="flex flex-col items-center gap-5 text-center lg:gap-6">
      <div
        className="flex items-center gap-3 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
        }}
      >
        <span className="h-px w-6 bg-foreground/15 sm:w-8" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5E6472]/60">
          Soluciones
        </span>
        <span className="h-px w-6 bg-foreground/15 sm:w-8" />
      </div>

      <h2
        className="text-balance text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-foreground transition-all duration-700 delay-100"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        Cada negocio necesita
        <br />
        <span className="text-[#5E6472]/30">un sistema distinto.</span>
      </h2>

      <p
        className="max-w-sm text-pretty text-sm leading-relaxed text-[#5E6472] sm:max-w-md sm:text-[15px] lg:max-w-lg lg:text-base"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}
      >
        No todo debe escalar desde el dia uno.{" "}
        <span className="text-[#5E6472]/40">
          Pero todo debe estar preparado para hacerlo.
        </span>
      </p>
    </div>
  );
}

/* ─── Floating tier card ─── */

function TierCard({
  tier,
  index,
  visible,
}: {
  tier: (typeof tiers)[number];
  index: number;
  visible: boolean;
}) {
  const Icon = tier.icon;
  const delay = 0.3 + index * 0.12;

  return (
    <div
      className="group relative flex flex-col justify-between rounded-2xl border border-foreground/[0.04] bg-background/80 p-6 backdrop-blur-md sm:rounded-3xl sm:p-8 lg:p-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1)"
          : "translateY(32px) scale(0.97)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {/* Floating shadow — desktop only */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl transition-shadow duration-500 sm:rounded-3xl lg:group-hover:shadow-2xl lg:group-hover:shadow-foreground/[0.05]" />

      {/* Top: tag + index */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-foreground transition-all duration-500 lg:group-hover:bg-foreground lg:group-hover:text-background lg:group-hover:shadow-lg lg:group-hover:shadow-foreground/10">
            <Icon className="h-4 w-4" strokeWidth={1.8} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5E6472]/50">
            {tier.tag}
          </span>
        </div>
        <span className="text-[11px] font-medium tabular-nums text-foreground/10 transition-colors duration-500 lg:group-hover:text-foreground/30">
          0{index + 1}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 pt-8 sm:pt-10">
        <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl lg:text-2xl">
          {tier.title}
        </h3>
        <p className="max-w-xs text-sm leading-relaxed text-[#5E6472] transition-colors duration-500 sm:text-[15px] lg:group-hover:text-foreground/70">
          {tier.description}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="flex items-center gap-2 pt-8 sm:pt-10">
        <div className={`h-1.5 w-1.5 rounded-full ${tier.accent} opacity-20 transition-opacity duration-500 lg:group-hover:opacity-100`} />
        <div className="h-px w-0 bg-foreground/10 transition-all duration-700 lg:group-hover:w-12" />
      </div>
    </div>
  );
}

/* ─── Connector line between cards — desktop only ─── */

function ConnectorLine({ visible, delay }: { visible: boolean; delay: number }) {
  return (
    <div
      className="mx-auto hidden h-10 w-px origin-top lg:block"
      style={{
        background:
          "linear-gradient(to bottom, hsl(var(--foreground) / 0.08), transparent)",
        transform: visible ? "scaleY(1)" : "scaleY(0)",
        transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    />
  );
}

/* ─── Progress bar — visual indicator of tier progression ─── */

function ProgressIndicator({ visible }: { visible: boolean }) {
  return (
    <div className="mx-auto flex items-center gap-2 pt-2">
      {tiers.map((_, i) => (
        <div
          key={i}
          className="h-0.5 rounded-full bg-foreground/10 transition-all duration-700"
          style={{
            width: visible ? `${20 + i * 16}px` : "8px",
            opacity: visible ? 0.3 + i * 0.25 : 0,
            transitionDelay: `${0.7 + i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Decoration ─── */

function SolutionsDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle crosshatch pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.018]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="solutions-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.6" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#solutions-grid)" />
      </svg>

      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,transparent_0%,hsl(var(--background))_100%)]" />

      {/* Floating accent elements — large screens */}
      <div
        className="animate-hero-float absolute right-[10%] top-[15%] hidden h-24 w-24 rounded-full border border-foreground/[0.03] lg:block"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="animate-hero-float absolute bottom-[20%] left-[8%] hidden h-16 w-16 rounded-full border border-foreground/[0.02] lg:block"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="animate-hero-float absolute bottom-[35%] right-[6%] hidden h-1 w-1 rounded-full bg-foreground/10 lg:block"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}

/* ─── Main component ─── */

export default function Solutions() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-background py-20 selection:bg-foreground/5 sm:py-28 lg:py-40"
    >
      <SolutionsDecoration />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-6">
        <div className="flex flex-col gap-14 sm:gap-16 lg:gap-20">
          {/* Header */}
          <SectionHeader visible={visible} />

          {/* Cards — stacked on mobile, 3-col grid on desktop */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:grid lg:grid-cols-3 lg:gap-5">
            {tiers.map((tier, index) => (
              <TierCard
                key={tier.tag}
                tier={tier}
                index={index}
                visible={visible}
              />
            ))}
          </div>

          {/* Connector lines — visible only between cards on large screens (vertical) */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-3">
            {[0, 1, 2].map((i) => (
              <ConnectorLine key={i} visible={visible} delay={0.6 + i * 0.1} />
            ))}
          </div>

          {/* Progress indicator */}
          <ProgressIndicator visible={visible} />
        </div>
      </div>
    </section>
  );
}
