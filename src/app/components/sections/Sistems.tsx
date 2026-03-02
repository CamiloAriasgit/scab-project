"use client";

import React, { useEffect, useRef, useState } from "react";
import { Pencil, Replace, Plus } from "lucide-react";

/* ─── Hook de Revelado ─── */
function useReveal(threshold = 0.1) {
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

/* ─── Contenedor Base ─── */
function AppleCard({
  children,
  className = "",
  visible,
  delay
}: {
  children: React.ReactNode;
  className?: string;
  visible: boolean;
  delay: number;
}) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-xl transition-all duration-1000 md:p-14 ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Card 1: Control inmediato (Arriba, ancho total) ─── */
const ControlCard = ({ visible }: { visible: boolean }) => (
  <AppleCard visible={visible} delay={0.1} className="lg:col-span-2 bg-[#F5F5F7]">
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Pencil className="h-5 w-5 text-indigo-600" />
        <span className="text-lg font-medium text-foreground/60">{/* Label pequeño */}
          Control inmediato
        </span>
      </div>
      <p className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-foreground/80">
        Edita textos en segundos desde tu panel privado.
      </p>
    </div>
  </AppleCard>
);

/* ─── Card 2: Actualización sin fricción (Abajo Izquierda) ─── */
const FrictionCard = ({ visible }: { visible: boolean }) => (
  <AppleCard visible={visible} delay={0.25} className="bg-white">
    <div className="flex items-center gap-3 mb-6">
      <Replace className="h-5 w-5 text-emerald-600" />
      <span className="text-lg font-medium text-foreground/60">
        Actualización sin fricción
      </span>
    </div>
    <p className="text-[2rem] md:text-[2.2rem] font-bold leading-[1.1] tracking-tight text-foreground/80">
      Reemplaza imágenes al instante, sin procesos técnicos.
    </p>
  </AppleCard>
);

/* ─── Card 3: Crecimiento estructurado (Abajo Derecha) ─── */
const GrowthCard = ({ visible }: { visible: boolean }) => (
  <AppleCard visible={visible} delay={0.4} className="bg-white">
    <div className="flex items-center gap-3 mb-6">
      <Plus className="h-5 w-5 text-blue-600" />
      <span className="text-lg font-medium text-foreground/60">
        Crecimiento estructurado
      </span>
    </div>
    <p className="text-[2rem] md:text-[2.2rem] font-bold leading-[1.1] tracking-tight text-foreground/80">
      Añade nuevos elementos dentro de una arquitectura pensada para mantener orden y coherencia.
    </p>
  </AppleCard>
);

/* ─── COMPONENTE FINAL ENSAMBLADO ─── */
export default function Sistem() {
  const { ref, visible } = useReveal(0.05);

  return (
    <section ref={ref} id="sistema" className="w-full bg-background py-20 lg:py-40 font-sans">
      <div className="mx-auto max-w-[1200px] px-6 flex flex-col items-center">

        <header className="mb-20 max-w-4xl">
          <h2
            className="text-balance text-center text-[clamp(1.75rem,5vw,3.25rem)] font-medium leading-[1.05] tracking-tight text-foreground/90"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
            }}
          >
            Un sistema diseñado para que tu web evolucione contigo.
          </h2>
        </header>

        {/* Grid Corregido: 1 arriba (span 2), 2 abajo (1 cada una) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <ControlCard visible={visible} />
          <FrictionCard visible={visible} />
          <GrowthCard visible={visible} />
        </div>

      </div>
    </section>
  );
}