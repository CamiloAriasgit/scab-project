import { ArrowUpRight, Cpu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3">
      {/* Container Flotante con efecto Glassmorphism */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg border border-white/[0.08] bg-black/[0.2] backdrop-blur-xl transition-all duration-500 hover:border-white/[0.15]">
        
        {/* Glow interno sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />

        <div className="relative flex h-14 items-center justify-between px-2 sm:px-8">
          
          {/* Brand - El Monograma Técnico */}
          <div className="flex items-center gap-3 group cursor-default">
            <div className="relative flex h-6 w-6 items-center justify-center">
              <Cpu className="h-4 w-4 text-white/40 transition-colors group-hover:text-white" strokeWidth={1} />
              <div className="absolute inset-0 animate-pulse rounded-full bg-white/10 blur-sm group-hover:bg-white/20" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-[11px] font-light tracking-[0.3em] text-white/90 uppercase">
                SCAB
              </span>
              <span className="text-[8px] font-light tracking-[0.2em] text-white/30 uppercase leading-none">
                Systems_Core
              </span>
            </div>
          </div>

          {/* Navigation / Status (Desktop Only) */}
          <nav className="hidden md:flex items-center gap-8">
            {["sistemas", "proceso", "contacto"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-light tracking-[0.2em] text-white/40 uppercase transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Action CTA - Esculpido en bloque sólido */}
          <div className="flex items-center gap-6">
            <div className="hidden h-4 w-px bg-white/10 sm:block" />
            
            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded bg-white px-5 py-2 text-[10px] font-medium tracking-widest text-black transition-all hover:bg-[#f0f0f0] active:scale-95 uppercase"
            >
              <span className="relative z-10">Comenzar</span>
              <ArrowUpRight
                className="relative z-10 h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </a>
          </div>

        </div>
      </div>

      {/* Indicador de "System Online" debajo del header */}
      <div className="mx-auto max-w-7xl px-12 pt-2 flex justify-end">
        <div className="flex items-center gap-1.5 opacity-0 sm:opacity-100 transition-opacity duration-1000 delay-500">
           <span className="text-[7px] font-light tracking-[0.3em] text-white/10 uppercase italic">
             Ready_to_scale
           </span>
           <div className="h-[2px] w-[2px] rounded-full bg-white/20" />
        </div>
      </div>
    </header>
  );
}