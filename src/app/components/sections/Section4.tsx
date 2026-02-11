export default function Process() {
  const steps = [
    {
      id: "01",
      title: "Entender el contexto",
      desc: "Antes de escribir una línea de código, entendemos cómo opera tu negocio y qué necesita ahora."
    },
    {
      id: "02",
      title: "Diseñar el sistema correcto",
      desc: "No todo es una web, no todo es una plataforma. Se define la estructura mínima que resuelve el problema real."
    },
    {
      id: "03",
      title: "Construir con visión de crecimiento",
      desc: "Se desarrolla pensando en operación, métricas y evolución, incluso si hoy el sistema es simple."
    },
    {
      id: "04",
      title: "Entrega y control",
      desc: "El sistema queda en tus cuentas, con acceso, métricas y claridad total sobre lo que tienes y cómo funciona."
    }
  ];

  return (
    <section id="proceso" className="w-full bg-[#F6F8FB] py-24 md:py-32 selection:bg-[#0B0D12]/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Headline - Sticky en Desktop para mantener contexto */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="h-px w-8 bg-[#5E6472]/30" />
                <span className="text-[11px] font-bold tracking-[0.3em] text-[#5E6472]/60 uppercase">Metodología</span>
              </div>
              <h2 className="text-[40px] leading-[1] tracking-tight font-medium text-[#0B0D12] sm:text-6xl xl:text-7xl">
                Un proceso <br />
                <span className="text-[#5E6472]/40 italic">claro.</span>
              </h2>
            </div>
            
            <p className="max-w-xs text-lg leading-relaxed text-[#5E6472]">
              Cada decisión técnica responde a una decisión de negocio. <br />
              <span className="text-[#0B0D12] font-medium">Nada se construye porque sí.</span>
            </p>
          </div>

          {/* Listado de Pasos - Limpio y Vertical */}
          <div className="lg:col-span-7 space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="group relative flex gap-8 md:gap-12">
                
                {/* Indicador Numérico - Estilo Minimalista Apple */}
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#5E6472]/10 bg-white text-[13px] font-bold text-[#0B0D12] shadow-sm transition-all duration-300 group-hover:border-[#0B0D12]/20 group-hover:shadow-md">
                    {step.id}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="h-full w-px bg-[#5E6472]/10 mt-6" />
                  )}
                </div>

                {/* Contenido de texto */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#0B0D12]">
                    {step.title}
                  </h3>
                  <p className="max-w-xl text-base md:text-lg leading-relaxed text-[#5E6472]">
                    {step.desc}
                  </p>
                  
                  {/* Elemento visual de apoyo sutil */}
                  <div className="pt-4 overflow-hidden">
                    <div className="h-[2px] w-0 bg-[#0B0D12]/10 transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}