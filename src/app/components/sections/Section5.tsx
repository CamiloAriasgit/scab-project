import { ArrowRight, Terminal } from "lucide-react";

export default function Section5() {
  const criteria = [
    "Tu negocio ya está operando y quieres orden, control y claridad.",
    "No buscas solo “una web bonita”, sino una herramienta que funcione.",
    "Entiendes que lo técnico debe servir a lo estratégico.",
    "Prefieres construir algo bien pensado antes que rehacerlo luego."
  ];

  return (
    <section id="contacto" className="relative w-full overflow-hidden bg-[#050505] text-white selection:bg-white/20">
      
      {/* Background Finish - Una luz cenital muy tenue */}
      <div className="absolute top-0 left-1/2 h-[1px] w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="relative mx-auto w-full max-w-7xl px-6 py-10 lg:py-20 lg:pb-30">
        <div className="flex flex-col items-center">
          
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
              
              {/* Left Side: The Filter */}
              <div className="lg:col-span-7 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Terminal className="h-4 w-4 text-white/20" strokeWidth={1} />
                    <span className="text-[10px] font-light tracking-[0.4em] text-white/30 uppercase">Qualification</span>
                  </div>
                  <h2 className="text-5xl font-light leading-[1] tracking-tighter sm:text-6xl lg:text-7xl">
                    Esto tiene <br />
                    sentido <span className="text-white/20 italic">si…</span>
                  </h2>
                  <p className="max-w-sm text-sm font-light leading-relaxed text-white/40">
                    No todos los negocios necesitan un sistema web. Algunos sí, y lo saben.
                  </p>
                </div>

                <div className="space-y-6">
                  {criteria.map((item, i) => (
                    <div key={i} className="group flex items-start gap-4">
                      <span className="mt-2.5 h-[1px] w-4 bg-white/20 transition-all group-hover:w-8 group-hover:bg-white/60" />
                      <p className="text-sm font-light leading-relaxed text-white/60 transition-colors group-hover:text-white">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: The Box (CTA) */}
              <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
                <div className="relative group w-full max-w-sm aspect-square flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.01] transition-all duration-700 hover:border-white/20 hover:bg-white/[0.03]">
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-8 left-8 h-2 w-2 border-t border-l border-white/10" />
                  <div className="absolute bottom-8 right-8 h-2 w-2 border-b border-r border-white/10" />

                  <div className="text-center space-y-8 p-12">
                    <p className="text-[10px] font-light tracking-[0.5em] text-white/20 uppercase">Next Step</p>
                    <h3 className="text-2xl font-light tracking-tight text-white/80">
                      ¿Construimos <br /> tu activo?
                    </h3>
                    <a
                      href="#contacto"
                      className="inline-flex h-12 items-center justify-center rounded bg-white px-8 text-sm font-medium text-black transition-all hover:scale-105 active:scale-95"
                    >
                      Iniciar conversación
                    </a>
                    <div className="pt-2">
                       <p className="text-[9px] font-light text-white/10 tracking-widest">EST_DISPONIBILIDAD: Q1 2024</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}