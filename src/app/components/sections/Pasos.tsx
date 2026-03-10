"use client";

import React from "react";
import { Pencil, Globe, ShieldCheck, Plus } from "lucide-react";

/* ─── Contenedor Base Compacto ─── */
function BentoCard({ 
  children, 
  className = "", 
  delay 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay: number;
}) {
  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm transition-all duration-1000 ${className}`}
      style={{
        animation: `fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`,
      }}
    >
      {children}
      <div className="absolute bottom-6 right-6 flex h-7 w-7 items-center justify-center rounded-full bg-[#1d1d1f] text-white transition-transform duration-300 group-hover:scale-110">
        <Plus size={16} strokeWidth={3} />
      </div>
    </div>
  );
}

export default function SistemaPasosHorizontal() {
  return (
    <section className="w-full bg-background py-16 lg:py-24 font-sans selection:bg-indigo-100">
      <div className="mx-auto max-w-[1200px] px-6">
        
        {/* Título alineado a la izquierda como en la referencia */}
        <header className="mb-12">
          <h2 className="text-[2.5rem] font-bold tracking-tight text-[#1d1d1f] md:text-[3.5rem] text-center">
            3 pasos del sistema
          </h2>
        </header>

        {/* Grid Horizontal: 3 columnas iguales en desktop */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          
          {/* Paso 1 — Edita */}
          <BentoCard delay={0.1} className="bg-[#F5F5F7]">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#1d1d1f]/50 uppercase tracking-tight">
                1 — Edita
              </span>
              <p className="text-[1.75rem] font-bold leading-[1.1] tracking-tight text-[#1d1d1f]">
                Actualiza textos desde tu panel privado.
              </p>
            </div>
            {/* Espacio para icono o gráfico pequeño si lo deseas */}
            <div className="mt-8 flex justify-center">
               <Pencil className="h-12 w-12 text-indigo-500/20" />
            </div>
          </BentoCard>

          {/* Paso 2 — Publica */}
          <BentoCard delay={0.2} className="bg-white border border-gray-100">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#1d1d1f]/50 uppercase tracking-tight">
                2 — Publica
              </span>
              <p className="text-[1.75rem] font-bold leading-[1.1] tracking-tight text-[#1d1d1f]">
                Los cambios se reflejan inmediatamente en tu sitio.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
               <Globe className="h-12 w-12 text-emerald-500/20" />
            </div>
          </BentoCard>

          {/* Paso 3 — Mantén control */}
          <BentoCard delay={0.3} className="bg-white border border-gray-100">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#1d1d1f]/50 uppercase tracking-tight">
                3 — Mantén control
              </span>
              <p className="text-[1.75rem] font-bold leading-[1.1] tracking-tight text-[#1d1d1f]">
                Tu contenido evoluciona sin romper el diseño.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
               <ShieldCheck className="h-12 w-12 text-blue-500/20" />
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}