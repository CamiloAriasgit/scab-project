import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#050505] text-white/60 selection:bg-white/10">
      
      {/* Top Border Line con gradiente de salida */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">

          {/* Left: Identity & Core Message */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full border border-white/20" />
              <span className="text-[10px] font-light tracking-[0.4em] text-white/20 uppercase">Core_System_2026</span>
            </div>
            
            <div className="space-y-2">
              <p className="max-w-[280px] text-sm font-light leading-relaxed text-white/80">
                Sistemas web diseñados para <br />
                <span className="text-white/40 italic">operar y escalar.</span>
              </p>
              <p className="text-[10px] font-light tracking-wider text-white/20">
                © 2026 · Arquitectura digital con propósito
              </p>
            </div>
          </div>

          {/* Right: Functional Link */}
          <div className="flex flex-col items-start md:items-end gap-6">
            {/* Metadata decorativa tipo terminal */}
            <div className="hidden lg:block">
               <p className="text-[9px] font-light text-white/10 tracking-[0.2em] leading-none">
                 LAT: 6.2442° N // LONG: 75.5812° W
               </p>
            </div>

            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-2 text-xs font-light tracking-widest text-white/50 transition-all hover:text-white uppercase"
            >
              <span className="relative">
                Hablemos de tu sistema
                <div className="absolute -bottom-1 left-0 h-px w-0 bg-white/40 transition-all group-hover:w-full" />
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 transition-colors group-hover:border-white/20 group-hover:bg-white/[0.02]">
                <ArrowUpRight
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1}
                />
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar: El remate final */}
      <div className="w-full border-t border-white/[0.02] py-6">
        <div className="mx-auto max-w-7xl px-6 flex justify-between items-center">
          <span className="text-[8px] font-light tracking-[0.8em] text-white/10 uppercase">
            Minimalism through structure
          </span>
          <div className="flex gap-4">
            <div className="h-1 w-1 bg-white/[0.05]" />
            <div className="h-1 w-1 bg-white/[0.1]" />
            <div className="h-1 w-1 bg-white/[0.05]" />
          </div>
        </div>
      </div>

    </footer>
  );
}