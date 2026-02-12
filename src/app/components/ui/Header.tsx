import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full px-2 pt-2 md:pt-8 pointer-events-none">
      {/* Container Flotante: Mobile First & Estética de Precisión */}
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#5E6472]/10 bg-[#F6F8FB]/80 backdrop-blur-md transition-all duration-500 pointer-events-auto shadow-[0_8px_32px_-10px_rgba(0,0,0,0.02)]">
        
        <div className="flex h-15 items-center justify-between px-6">
          
          {/* Brand - El Monograma Técnico Destilado */}
          <div className="flex items-center gap-2 group cursor-pointer">
            
            <div className="flex flex-col">
              <span className="text-[12px] font-bold tracking-[0.1em] text-[#0B0D12] leading-none">
                SCAB
              </span>
              <span className="text-[8px] font-medium tracking-[0.1em] text-[#5E6472]/50 uppercase leading-none pt-0.5">
                Systems
              </span>
            </div>
          </div>

          {/* Navigation: Tipografía en Gray Técnico */}
          <nav className="hidden md:flex items-center gap-10">
            {["Sistemas", "Proceso", "Contacto"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-bold tracking-[0.2em] text-[#5E6472]/60 uppercase transition-colors hover:text-[#0B0D12]"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Action CTA: El único bloque de alto contraste */}
          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className="group h-10 w-30 flex items-center justify-center gap-2 rounded-xl bg-[#0B0D12] text-sm font-medium text-white transition-all hover:opacity-90 active:scale-[0.98]"
            >
              Comenzar
              <ArrowUpRight
                className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}