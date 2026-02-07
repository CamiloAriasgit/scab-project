import { Layers, Workflow, BarChart3 } from "lucide-react";

export default function Section3() {
  const systems = [
    {
      title: "Sitios operativos",
      desc: "Para validar, comunicar y convertir sin fricción.",
      tag: "Conversion_Focused",
      icon: <Workflow strokeWidth={1} className="h-5 w-5" />
    },
    {
      title: "Sistemas internos",
      desc: "Cuando la operación empieza a necesitar control y orden.",
      tag: "Internal_Logic",
      icon: <Layers strokeWidth={1} className="h-5 w-5" />
    },
    {
      title: "Plataformas escalables",
      desc: "Pensadas para crecer sin rehacerlo todo después.",
      tag: "Global_Scale",
      icon: <BarChart3 strokeWidth={1} className="h-5 w-5" />
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-white selection:bg-white/20">
      
      {/* Background Decor - Linea técnica superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-15 lg:py-15">
        <div className="flex flex-col space-y-24">
          
          {/* Header con estructura de terminal */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-white/30" />
                <span className="text-[10px] font-light tracking-[0.4em] text-white/30 uppercase">
                  Modular Solutions
                </span>
              </div>
              <h2 className="text-4xl font-light leading-[1.1] tracking-tighter sm:text-6xl lg:text-7xl">
                Cada negocio necesita <br />
                un <span className="text-white/35 italic">sistema distinto.</span>
              </h2>
            </div>
            
            <p className="max-w-xs text-sm font-light leading-relaxed text-white/40">
              No todo debe escalar desde el día uno. Pero todo debe estar preparado para hacerlo.
            </p>
          </div>

          {/* System Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {systems.map((item, index) => (
              <div 
                key={index} 
                className={`group relative p-8 lg:p-12 border-white/5 transition-all duration-500 hover:bg-white/[0.01]
                  ${index !== 2 ? "md:border-r" : ""} 
                  ${index === 0 ? "border-y md:border-y-0" : "border-b md:border-b-0"}
                `}
              >
                {/* Decorative corner (Top-left) */}
                <div className="absolute top-0 left-0 h-2 w-px bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute top-0 left-0 w-2 h-px bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="space-y-12">
                  <div className="flex items-center justify-between text-white/20 group-hover:text-white/50 transition-colors">
                    {item.icon}
                    <span className="text-[9px] font-light tracking-widest uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-light tracking-tight text-white/80 group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-white/40 group-hover:text-white/50 transition-colors">
                      {item.desc}
                    </p>
                  </div>

                  {/* Detalle de "System_Status" solo visible en hover sutil */}
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-white/40 animate-pulse" />
                      <span className="text-[8px] font-light tracking-[0.2em] text-white/20 uppercase">Ready to deploy</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Technical Footer for Section */}
          <div className="flex items-center justify-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/5" />
            <div className="mx-8 px-4 py-1 border border-white/5 rounded-full">
               <span className="text-[9px] font-light tracking-[0.5em] text-white/20 uppercase">Versatility_Core</span>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/5" />
          </div>

        </div>
      </div>
    </section>
  );
}