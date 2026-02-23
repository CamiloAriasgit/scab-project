"use client";

import { useEffect, useRef, useState } from "react";
import { Pencil, Replace, Plus } from "lucide-react";

/* ─── Data ─── */

const items = [
  {
    index: "01",
    label: "Edita tu contenido en segundos",
    description:
      "Actualiza títulos, textos y secciones desde tu panel privado, sin conocimientos técnicos.",
    icon: Pencil,
  },
  {
    index: "02",
    label: "Reemplaza imágenes al instante",
    description:
      "Mantén tu sitio actualizado cambiando fotos y gráficos cuando lo necesites.",
    icon: Replace,
  },
  {
    index: "03",
    label: "Amplía tu contenido sin romper el diseño",
    description:
      "Añade nuevos servicios, preguntas o publicaciones dentro de una estructura pensada para mantener coherencia y orden.",
    icon: Plus,
  },
];

/* ─── Visual Animations ─── */

const VisualAnimation = ({ index }: { index: string }) => {
  if (index === "01") {
    return (
      <div className="relative mb-4 flex h-24 w-full items-center justify-center overflow-hidden rounded-xl bg-indigo-500/5 border border-indigo-500/10">
        <div className="flex flex-col gap-2 w-1/2">
          <div className="h-2 w-full overflow-hidden rounded-full bg-indigo-500/20">
            <div className="h-full w-full origin-left animate-[edit-line_3s_infinite] bg-indigo-500/40" />
          </div>
          <div className="h-2 w-2/3 overflow-hidden rounded-full bg-indigo-500/10">
            <div className="h-full w-full origin-left animate-[edit-line_3s_infinite_0.5s] bg-indigo-500/30" />
          </div>
        </div>
        <style jsx>{`
          @keyframes edit-line {
            0% { transform: scaleX(0); opacity: 0; }
            30% { transform: scaleX(1); opacity: 1; }
            70% { transform: scaleX(1); opacity: 1; }
            100% { transform: scaleX(1); opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  if (index === "02") {
    return (
      <div className="relative mb-4 flex h-24 w-full items-center justify-center overflow-hidden rounded-xl bg-indigo-500/5 border border-indigo-500/10">
        <div className="relative h-12 w-16 rounded-md border-2 border-indigo-500/20 bg-indigo-500/5 overflow-hidden">
          {/* Placeholder para la URL de la imagen si se desea: <img src="" /> */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="h-8 w-10 animate-pulse rounded bg-indigo-500/20" />
          </div>
          <div className="absolute -bottom-1 -right-1 h-6 w-6 animate-bounce rounded-full bg-indigo-500 shadow-lg flex items-center justify-center">
            <Replace className="h-3 w-3 text-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mb-4 flex h-24 w-full items-center justify-center overflow-hidden rounded-xl bg-indigo-500/5 border border-indigo-500/10">
      <div className="grid grid-cols-2 gap-2 w-20">
        <div className="h-6 w-full rounded bg-indigo-500/20" />
        <div className="h-6 w-full rounded bg-indigo-500/20" />
        <div className="col-span-2 h-6 w-full animate-[expand-box_4s_infinite] rounded border-2 border-dashed border-indigo-500/40 bg-indigo-500/5" />
      </div>
      <style jsx>{`
        @keyframes expand-box {
          0%, 10% { transform: scale(0.8); opacity: 0; }
          30%, 80% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.1); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

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
      className="group relative flex flex-col items-center gap-6 rounded-2xl border border-transparent bg-background/60 p-6 backdrop-blur-md transition-all duration-700 sm:p-8 shadow-xl lg:hover:-translate-y-1 lg:hover:border-indigo-500/20 lg:hover:shadow-indigo-500/5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {/* Visual Animation Component */}
      <VisualAnimation index={item.index} />

      {/* Row: index + icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 transition-colors duration-500 lg:group-hover:bg-indigo-500/20">
        <Icon
          className="h-[18px] w-[18px] text-indigo-500 transition-colors duration-500"
          strokeWidth={1.5}
        />
      </div>

      {/* Label */}
      <h3 className="text-[clamp(1.1rem,2.5vw,1.35rem)] font-medium leading-tight tracking-tight text-center text-foreground/80">
        {item.label}
      </h3>

      {/* Description */}
      <p className="text-[clamp(0.825rem,1.5vw,0.9rem)] text-center leading-relaxed text-[#5E6472]/70 transition-colors duration-500 lg:group-hover:text-[#5E6472]/80">
        {item.description}
      </p>
    </div>
  );
}

/* ─── Main ─── */

export default function Sistem() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section
      ref={ref}
      id="sistema"
      className="relative w-full overflow-hidden bg-background py-20 selection:bg-foreground/5 sm:py-28 lg:py-40"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-[0.025]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--foreground)), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-6">
        <div className="flex flex-col items-center gap-5 pb-10 text-center sm:pb-20 lg:pb-20">
          <h2
            className="text-balance text-[clamp(1.75rem,5vw,3.25rem)] font-medium leading-[1.05] tracking-tight text-foreground/90"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
            }}
          >
            No es solo una web.<br />Es independencia.
          </h2>
        </div>

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

        <div
          className="flex flex-col items-center gap-4 pt-14 text-center sm:pt-20 lg:pt-24"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
          }}
        >
          <p className="max-w-sm text-sm leading-relaxed text-foreground/70 sm:text-[15px]">
            Un sistema de edición privado, diseñado para que tu web evolucione contigo.
          </p>
        </div>
      </div>
    </section>
  );
}