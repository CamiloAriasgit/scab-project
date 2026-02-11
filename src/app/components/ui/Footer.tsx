import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0D12] text-white/60 selection:bg-white/10">
      
      {/* Línea de separación superior - Minimalismo puro */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-white/5" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="flex flex-col gap-16 md:flex-row md:items-end md:justify-between">

          {/* Izquierda: Identidad y Propósito */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
              <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
                2026 Edition
              </span>
            </div>
            
            <div className="space-y-4">
              <p className="max-w-[320px] text-lg md:text-xl font-normal leading-tight text-white/90">
                Sistemas web diseñados para <br />
                <span className="text-white/40 italic font-light">operar y escalar.</span>
              </p>
              <p className="text-[11px] font-medium tracking-wider text-white/20 uppercase">
                © 2026 · Arquitectura digital con propósito
              </p>
            </div>
          </div>

          {/* Derecha: Acción Funcional */}
          <div className="flex flex-col items-start md:items-end gap-8">
            <a
              href="#contacto"
              className="group flex items-center gap-4 text-sm font-medium tracking-widest text-white/60 transition-all hover:text-white uppercase"
            >
              <span className="relative">
                Hablemos de tu sistema
                <div className="absolute -bottom-2 left-0 h-px w-0 bg-white/60 transition-all duration-500 group-hover:w-full" />
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/5">
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Barra Inferior: El remate final sin ruido */}
      <div className="w-full border-t border-white/5 py-8">
        <div className="mx-auto max-w-7xl px-6 flex justify-between items-center">
          <span className="text-[9px] font-bold tracking-[0.5em] text-white/10 uppercase">
            Minimalism through structure
          </span>
          <div className="h-[1px] w-12 bg-white/10" />
        </div>
      </div>

    </footer>
  );
}