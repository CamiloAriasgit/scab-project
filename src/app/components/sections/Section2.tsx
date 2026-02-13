"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Data ─── */

const concepts = [
  {
    keyword: "Activo",
    statement:
      "Una web sin estructura es un gasto. Un sistema bien pensado es un activo.",
  },
  {
    keyword: "Flujo",
    statement:
      "Antes de escribir codigo, se define el flujo: que entra, que se mide y que debe escalar.",
  },
  {
    keyword: "Alineacion",
    statement:
      "La tecnologia solo importa cuando esta alineada con el modelo de negocio.",
  },
];

/* ─── Scroll-triggered reveal ─── */

function useReveal(threshold = 0.25) {
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

/* ─── Single concept row ─── */

function ConceptRow({
  concept,
  index,
  visible,
}: {
  concept: (typeof concepts)[number];
  index: number;
  visible: boolean;
}) {
  const delay = 0.35 + index * 0.15;

  return (
    <div
      className="group flex flex-col gap-6 py-10 sm:py-14 lg:flex-row lg:items-baseline lg:gap-16 lg:py-16"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {/* Left: keyword + index */}
      <div className="flex items-baseline gap-4 lg:w-48 lg:shrink-0 lg:justify-between">
        <span className="text-[clamp(0.8rem,1.2vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-[#5E6472]/40">
          {concept.keyword}
        </span>
        <span className="text-xs tabular-nums text-foreground/[0.08] lg:text-sm">
          0{index + 1}
        </span>
      </div>

      {/* Right: statement */}
      <p className="text-[clamp(1.25rem,3vw,2rem)] font-normal leading-[1.35] tracking-tight text-foreground/80 transition-colors duration-700 lg:group-hover:text-foreground">
        {concept.statement}
      </p>
    </div>
  );
}

/* ─── Divider ─── */

function Divider({
  visible,
  delay,
}: {
  visible: boolean;
  delay: number;
}) {
  return (
    <div
      className="h-px origin-left bg-foreground/[0.06]"
      style={{
        transform: visible ? "scaleX(1)" : "scaleX(0)",
        transition: `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    />
  );
}

/* ─── Main component ─── */

export default function Philosophy() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section
      ref={ref}
      id="explorar"
      className="relative w-full bg-background py-20 selection:bg-foreground/5 sm:py-28 lg:py-40"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-6">
        {/* Header */}
        <div className="flex flex-col gap-5 pb-16 sm:pb-20 lg:pb-28">
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#5E6472]/40"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.05s",
            }}
          >
            Filosofia
          </span>

          <h2
            className="text-balance text-[clamp(2rem,5.5vw,4rem)] font-medium leading-[1] tracking-tight text-foreground"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
            }}
          >
            No todo sitio web
            <br />
            <span className="text-[#5E6472]/25">es un sistema.</span>
          </h2>
        </div>

        {/* Concepts list */}
        <div className="flex flex-col">
          <Divider visible={visible} delay={0.3} />

          {concepts.map((concept, index) => (
            <div key={concept.keyword}>
              <ConceptRow
                concept={concept}
                index={index}
                visible={visible}
              />
              <Divider visible={visible} delay={0.4 + index * 0.12} />
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p
          className="pt-14 text-sm leading-relaxed text-[#5E6472]/50 sm:pt-16 sm:text-[15px] lg:pt-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
          }}
        >
          Existimos para operar, medir y tomar decisiones.
          <br className="hidden sm:block" />
          <span className="text-[#5E6472]/30">
            {" "}Todo lo demas es solo presencia.
          </span>
        </p>
      </div>
    </section>
  );
}
