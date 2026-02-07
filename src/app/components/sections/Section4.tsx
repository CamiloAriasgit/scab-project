export default function Section4() {
  const steps = [
    {
      id: "I",
      title: "Entender el contexto",
      desc: "Antes de escribir una línea de código, entendemos cómo opera tu negocio y qué necesita ahora."
    },
    {
      id: "II",
      title: "Diseñar el sistema correcto",
      desc: "No todo es una web, no todo es una plataforma. Se define la estructura mínima que resuelve el problema real."
    },
    {
      id: "III",
      title: "Construir con visión de crecimiento",
      desc: "Se desarrolla pensando en operación, métricas y evolución, incluso si hoy el sistema es simple."
    },
    {
      id: "IV",
      title: "Entrega y control",
      desc: "El sistema queda en tus cuentas, con acceso, métricas y claridad total sobre lo que tienes y cómo funciona."
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-white selection:bg-white/20">
      
      {/* Background Grid Accent */}
      <div className="absolute top-0 right-0 h-full w-1/3 border-l border-white/[0.03] bg-[radial-gradient(circle_at_top_right,white/[0.02],transparent)] hidden lg:block" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:py-56">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Headline - Sticky on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-white/40" />
                <span className="text-[10px] font-light tracking-[0.4em] text-white/40 uppercase">Metodología</span>
              </div>
              <h2 className="text-5xl font-light leading-[1] tracking-tighter sm:text-6xl xl:text-7xl">
                Un proceso <br />
                <span className="text-white/20 italic">claro.</span>
              </h2>
            </div>
            
            <p className="max-w-xs text-sm font-light leading-relaxed text-white/40">
              Cada decisión técnica responde a una decisión de negocio. <br />
              <span className="text-white/60">Nada se construye porque “sí”.</span>
            </p>
          </div>

          {/* Process Timeline */}
          <div className="lg:col-span-7 space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="group relative flex gap-8 md:gap-12">
                
                {/* Visual Connector */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-light tracking-widest transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/10">
                    {step.id}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="h-full w-px bg-gradient-to-b from-white/10 to-transparent mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4 pt-1.5">
                  <h3 className="text-lg font-light tracking-wider text-white/80 group-hover:text-white transition-colors uppercase">
                    {step.title}
                  </h3>
                  <p className="max-w-xl text-sm font-light leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
                    {step.desc}
                  </p>
                  
                  {/* Technical Meta Detail */}
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <span className="text-[8px] font-light tracking-[0.3em] text-white/20 uppercase">
                      Status: Phase_0{index + 1} // Ready
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Cross-section decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}