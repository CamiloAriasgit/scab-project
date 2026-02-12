import { Monitor, Zap, Target } from "lucide-react";

export default function Philosophy() {
  const concepts = [
    { 
      label: "Activos", 
      text: "Una web sin estructura es un gasto. Un sistema bien pensado es un activo.",
      icon: <Zap className="h-4 w-4" />
    },
    { 
      label: "Flujo", 
      text: "Antes de escribir código, se define el flujo: qué entra, qué se mide y qué debe escalar.",
      icon: <Monitor className="h-4 w-4" />
    },
    { 
      label: "Alineación", 
      text: "La tecnología solo importa cuando está alineada con el modelo de negocio.",
      icon: <Target className="h-4 w-4" />
    }
  ];

  return (
    <section id="Explorar" className="w-full bg-[#F6F8FB] py-24 md:py-40 selection:bg-[#0B0D12]/5">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header: Tipografía Apple Style */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <h2 className="text-[38px] leading-[1.05] tracking-tight font-medium text-[#0B0D12] sm:text-6xl lg:text-7xl">
            No todo sitio web <br />
            <span className="text-[#5E6472]/30 italic">es un sistema.</span>
          </h2>
          
          <p className="mt-6 max-w-md text-[15px] md:text-[17px] leading-relaxed text-[#5E6472]">
            Existimos para operar, medir y tomar decisiones. 
            <span className="opacity-40 font-light block md:inline ml-1">Todo lo demás es solo presencia.</span>
          </p>
        </div>

        {/* Grid de Componentes Flotantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {concepts.map((item, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col justify-between p-8 min-h-[280px] rounded-[24px] bg-white border border-[#5E6472]/5 
                         /* Sombra base en móvil para feedback visual táctil */
                         shadow-xl shadow-[#0B0D12]/5 
                         /* Interacción Desktop */
                         md:shadow-none md:hover:shadow-2xl md:hover:shadow-[#0B0D12]/10 md:hover:-translate-y-2 
                         transition-all duration-500 ease-out"
            >
              <div className="space-y-6">
                {/* Header de la Card: Tech UI */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F6F8FB] text-[#0B0D12] group-hover:bg-[#0B0D12] group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#5E6472]/50 uppercase italic">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-[#0B0D12]/10 group-hover:text-[#0B0D12]/40 transition-colors">
                    0{index + 1}
                  </span>
                </div>
                
                {/* Cuerpo: Tipografía de alta legibilidad */}
                <p className="text-lg md:text-xl leading-snug text-[#5E6472] group-hover:text-[#0B0D12] transition-colors duration-500">
                  {item.text}
                </p>
              </div>

              {/* Indicador de Status (Corner Detail) */}
              <div className="flex items-center gap-2 pt-8">
                <div className="h-1 w-1 rounded-full bg-[#0B0D12]/20 group-hover:bg-[#0B0D12] transition-all" />
                <div className="h-[1px] w-0 bg-[#0B0D12]/10 group-hover:w-8 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}