export default function Philosophy() {
  const concepts = [
    { label: "Activos", text: "Una web sin estructura es un gasto. Un sistema bien pensado es un activo." },
    { label: "Flujo", text: "Antes de escribir código, se define el flujo: qué entra, qué se mide y qué debe escalar." },
    { label: "Alineación", text: "La tecnología solo importa cuando está alineada con el modelo de negocio." }
  ];

  return (
    <section id="Explorar" className="w-full bg-[#F6F8FB] py-24 md:py-32 selection:bg-[#0B0D12]/5">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header de Sección: Mobile First */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 md:mb-32">
          <div className="max-w-4xl">
            <h2 className="text-[40px] leading-[1] tracking-tight font-medium text-[#0B0D12] sm:text-6xl lg:text-8xl">
              No todo sitio web <br />
              <span className="text-[#5E6472]/40 italic">es un sistema.</span>
            </h2>
          </div>
          
          <div className="lg:max-w-xs w-full border-l border-[#5E6472]/20 pl-6 py-2">
            <p className="text-sm leading-relaxed text-[#5E6472]">
              Un sistema web existe para operar, medir y tomar decisiones. 
              <span className="block mt-2 opacity-50">Todo lo demás es solo presencia.</span>
            </p>
          </div>
        </div>

        {/* Grid de Conceptos: Limpieza y Proporción */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-px md:bg-[#5E6472]/15 border-y md:border-x border-[#5E6472]/15 overflow-hidden">
          {concepts.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#F6F8FB] py-12 md:p-12 transition-colors duration-300 hover:bg-white"
            >
              <div className="space-y-12">
                {/* Indicador Numérico y Label */}
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#0B0D12] uppercase">
                    0{index + 1}
                  </span>
                  <div className="h-[1px] w-4 bg-[#5E6472]/30" />
                  <span className="text-[11px] font-medium tracking-widest text-[#5E6472] uppercase">
                    {item.label}
                  </span>
                </div>
                
                {/* Texto: Gray Técnico */}
                <p className="text-lg md:text-xl leading-relaxed text-[#5E6472] font-normal">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}