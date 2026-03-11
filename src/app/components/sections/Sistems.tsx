"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Pencil, Replace, Plus } from "lucide-react";

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
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-1000  ${className}`}
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

const ControlCard = ({ visible }: { visible: boolean }) => (
  <AppleCard visible={visible} delay={0.1} className="lg:col-span-2 bg-[#F5F5F7]">
    <div className="flex flex-col p-7 md:p-14 lg:flex-row lg:items-center justify-between gap-8 max-w-full">

      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-foreground/80">
            Contenido que evoluciona
          </h1>
        </div>
        <p className="text-sm lg:text-lg md:text-lg font-medium text-foreground/60">
          Añade nuevos proyectos, servicios o testimonios sin tocar el diseño.
        </p>
      </div>

      <div className="flex gap-2 justify-center items-end">
        <div className="h-24 w-15 bg-violet-200 rounded-full" />
        <div className="h-32 w-15 bg-violet-300 rounded-full" />
        <div className="h-48 w-15 bg-violet-400 rounded-full" />
      </div>

    </div>
  </AppleCard>
);

const FrictionCard = ({ visible }: { visible: boolean }) => (
  <AppleCard visible={visible} delay={0.25} className="bg-white overflow-hidden">
    <div className="flex items-center gap-3 mb-4 pt-12 px-10 md:px-14">
      <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-foreground/80">
        Actualización sin fricción
      </h1>
    </div>
    <p className="text-sm lg:text-lg md:text-lg font-medium text-foreground/60 px-10 md:px-14 mb-10">
      Publica contenido nuevo en segundos desde tu panel privado.
    </p>

    <div className="relative h-48 w-full flex justify-center pt-10">
      <div className="relative w-64 h-64">
        {/* 1. Cambiamos la rotación base a -120deg para situar el inicio a las 8 */}
        <svg className="w-full h-full transform -rotate-[190deg]">
          <circle
            cx="128"
            cy="128"
            r="110"
            stroke="currentColor"
            strokeWidth="28"
            fill="transparent"
            className="text-gray-100"
          />
          <motion.circle
            cx="128"
            cy="128"
            r="110"
            stroke="url(#gradient)"
            strokeWidth="28"
            fill="transparent"
            strokeDasharray="690"
            initial={{ strokeDashoffset: 690 }}
            animate={visible ? { strokeDashoffset: 400 } : { strokeDashoffset: 690 }}
            transition={{ duration: 2, ease: "circOut", delay: 0.5 }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="absolute top-0 left-1/2 w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-sm"
          initial={{ rotate: -120, x: "-50%" }}
          animate={visible ? { rotate: 30 } : { rotate: -120 }}
          style={{ originY: "128px" }}
          transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
            Optimizado
          </span>
        </div>
      </div>
    </div>
  </AppleCard>
);

const GrowthCard = ({ visible }: { visible: boolean }) => (
  <AppleCard visible={visible} delay={0.4} className="bg-white">
    <div className="flex items-center gap-3 mb-6 pt-7 md:pt-14 px-10 md:px-14">
      <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-foreground/80">
        Arquitectura que mantiene orden
      </h1>
    </div>
    <p className="text-sm lg:text-lg md:text-lg font-medium text-foreground/60 px-10 md:px-14 mb-10">
      Tu sitio está diseñado para crecer sin perder coherencia.
    </p>
  </AppleCard>
);

export default function Sistem() {
  const { ref, visible } = useReveal(0.05);

  return (
    <section ref={ref} id="sistema" className="w-full bg-background py-20 lg:py-40 font-sans">
      <div className="mx-auto max-w-[1200px] px-4 flex flex-col items-center">

        <header className="mb-15 max-w-4xl">
          <h2
            className="text-balance text-center text-[clamp(1.75rem,5vw,3.25rem)] font-medium leading-[1.05] tracking-tight text-foreground/80"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
            }}
          >
            Un sistema pensado para <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">evolucionar contigo.</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ControlCard visible={visible} />
          <FrictionCard visible={visible} />
          <GrowthCard visible={visible} />
        </div>

      </div>
    </section>
  );
}