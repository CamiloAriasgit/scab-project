"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Data ─── */

const steps = [
  {
    id: "01",
    title: "Diagnostico",
    desc: "Entender que debe comunicar y que debe medirse.",
  },
  {
    id: "02",
    title: "Arquitectura",
    desc: "Disenar estructura y flujo antes de escribir codigo.",
  },
  {
    id: "03",
    title: "Desarrollo",
    desc: "Construccion limpia, optimizada y preparada para crecer.",
  },
  {
    id: "04",
    title: "Entrega",
    desc: "Accesos, dominio, hosting, metricas y panel en tus manos.",
  },
] as const;

/* ─── Scroll reveal ─── */

function useReveal(threshold = 0.12) {
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

/* ─── Single step row ─── */

function StepRow({
  step,
  index,
  visible,
}: {
  step: (typeof steps)[number];
  index: number;
  visible: boolean;
}) {
  const delay = 0.15 + index * 0.1;

  return (
    <div
      className="group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {/* Divider */}
      <div
        className="h-px w-full origin-left bg-foreground/[0.06]"
        style={{
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transition: `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay - 0.05}s`,
        }}
      />

      <div className="flex flex-col gap-3 py-7 sm:gap-4 sm:py-9 lg:flex-row lg:items-baseline lg:gap-0 lg:py-11">
        {/* Number */}
        <span className="text-[11px] font-medium tabular-nums tracking-[0.2em] text-foreground/15 transition-colors duration-500 lg:w-20 lg:shrink-0 lg:group-hover:text-foreground/40">
          {step.id}
        </span>

        {/* Title */}
        <h3 className="text-[clamp(1.15rem,2.8vw,1.5rem)] font-medium leading-snug tracking-tight text-foreground/75 transition-colors duration-500 lg:w-52 lg:shrink-0 lg:group-hover:text-foreground">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-[clamp(0.825rem,1.4vw,0.925rem)] leading-relaxed text-[#5E6472]/45 transition-colors duration-500 lg:ml-auto lg:max-w-xs lg:text-right lg:group-hover:text-[#5E6472]/65">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── Main ─── */

export default function Process() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section
      ref={ref}
      id="proceso"
      className="relative w-full bg-background py-20 selection:bg-foreground/5 sm:py-28 lg:py-40"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-6">
        {/* ─── Header ─── */}
        <div className="flex flex-col items-start gap-4 pb-10 sm:pb-14 lg:pb-16">
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#5E6472]/35"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            Proceso
          </span>

          <h2
            className="text-[clamp(1.6rem,4.5vw,2.75rem)] font-medium leading-[1.1] tracking-tight text-foreground"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.08s",
            }}
          >
            Cuatro pasos.
            <br />
            <span className="text-[#5E6472]/20">Sin ruido.</span>
          </h2>
        </div>

        {/* ─── Steps ─── */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <StepRow key={step.id} step={step} index={i} visible={visible} />
          ))}

          {/* Closing divider */}
          <div
            className="h-px w-full origin-left bg-foreground/[0.06]"
            style={{
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transition:
                "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.65s",
            }}
          />
        </div>
      </div>
    </section>
  );
}
