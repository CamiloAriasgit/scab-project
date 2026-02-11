import { Layers, Workflow, BarChart3 } from "lucide-react";

export default function Services() {
  const systems = [
    {
      title: "Sitios operativos",
      desc: "Para validar, comunicar y convertir sin fricción.",
      tag: "Conversión",
      icon: <Workflow strokeWidth={1.2} className="h-6 w-6" />
    },
    {
      title: "Sistemas internos",
      desc: "Cuando la operación empieza a necesitar control y orden.",
      tag: "Lógica",
      icon: <Layers strokeWidth={1.2} className="h-6 w-6" />
    },
    {
      title: "Plataformas escalables",
      desc: "Pensadas para crecer sin rehacerlo todo después.",
      tag: "Escala",
      icon: <BarChart3 strokeWidth={1.2} className="h-6 w-6" />
    }
  ];

  return (
    <section id="sistemas" className="w-full bg-[#F6F8FB] py-24 selection:bg-[#0B0D12]/5">
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col space-y-20">
          
          {/* Header: Claridad ante todo */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-[#5E6472]/30" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#5E6472]/60 uppercase">
                  Modular Solutions
                </span>
              </div>
              <h2 className="text-[40px] leading-[1.1] tracking-tight font-medium text-[#0B0D12] sm:text-6xl lg:text-7xl">
                Cada negocio necesita <br />
                <span className="text-[#5E6472]/40 italic">un sistema distinto.</span>
              </h2>
            </div>
            
            <p className="max-w-xs text-base leading-relaxed text-[#5E6472]">
              No todo debe escalar desde el día uno. Pero todo debe estar preparado para hacerlo.
            </p>
          </div>

          {/* Cards: Minimalismo Tecnológico */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-px">
            {systems.map((item, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col justify-between p-0 md:p-10 transition-all duration-300"
              >
                {/* Contenido Superior */}
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-white shadow-sm border border-[#5E6472]/5 text-[#0B0D12]">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-[#5E6472]/40 uppercase border border-[#5E6472]/10 px-2 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium tracking-tight text-[#0B0D12]">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#5E6472]">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Separador sutil para Mobile */}
                <div className="mt-12 h-px w-full bg-[#5E6472]/10 md:hidden" />
              </div>
            ))}
          </div>

          {/* Footer de Sección: Eliminado el exceso, solo queda el aire */}
          <div className="pt-10 flex items-center justify-center">
            <div className="h-1 w-1 rounded-full bg-[#5E6472]/20" />
            <div className="mx-4 h-px w-12 bg-[#5E6472]/10" />
            <div className="h-1 w-1 rounded-full bg-[#5E6472]/20" />
          </div>

        </div>
      </div>
    </section>
  );
}