export default function Philosophy() {
  const concepts = [
    { label: "Activos", text: "Una web sin estructura es un gasto. Un sistema bien pensado es un activo." },
    { label: "Flujo", text: "Antes de escribir código, se define el flujo: qué entra, qué se mide y qué debe escalar." },
    { label: "Alineación", text: "La tecnología solo importa cuando está alineada con el modelo de negocio." }
  ];

  return (
    <section id="Explorar" className="w-full bg-[#F6F8FB] py-24 md:py-40 selection:bg-[#0B0D12]/5">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header: El contraste es el protagonista */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <h2 className="text-[34px] leading-[1.1] tracking-tight font-medium text-[#0B0D12] sm:text-6xl lg:text-8xl">
            No todo sitio web <br />
            <span className="text-[#5E6472]/30 italic">es un sistema.</span>
          </h2>
          
          {/* Bajada de texto más integrada */}
          <p className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-[#5E6472]">
            Existimos para operar, medir y tomar decisiones. 
            <span className="opacity-40 font-light"> Todo lo demás es solo presencia.</span>
          </p>
        </div>

        {/* Conceptos: Sin bordes, solo tipografía y ritmo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
          {concepts.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col space-y-6"
            >
              {/* Indicador Numérico sutil */}
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#0B0D12] opacity-20 group-hover:opacity-100 transition-opacity">
                  0{index + 1}
                </span>
                <div className="h-px w-4 bg-[#5E6472]/20" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#5E6472]/50 uppercase">
                  {item.label}
                </span>
              </div>
              
              {/* El texto gana aire y tamaño */}
              <p className="text-lg md:text-xl leading-relaxed text-[#5E6472] group-hover:text-[#0B0D12] transition-colors duration-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}