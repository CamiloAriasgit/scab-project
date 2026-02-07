export default function Section2() {
  const concepts = [
    { label: "Activos", text: "Una web sin estructura es un gasto. Un sistema bien pensado es un activo." },
    { label: "Flujo", text: "Antes de escribir código, se define el flujo: qué entra, qué se mide y qué debe escalar." },
    { label: "Alineación", text: "La tecnología solo importa cuando está alineada con el modelo de negocio." }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-white selection:bg-white/20">
      
      {/* Elementos de "Ingeniería" - Decoración técnica */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-0 left-10 h-20 w-px bg-gradient-to-b from-white/20 to-transparent" />
        <div className="absolute top-10 left-8 text-[9px] font-light tracking-[0.3em] text-white/40 uppercase rotate-90">
          Core_Philosophy
        </div>
        {/* Círculos concéntricos muy tenues en el fondo para dar profundidad */}
        <div className="absolute -right-64 top-1/2 h-[800px] w-[800px] -translate-y-1/2 rounded-full border border-white/[0.03]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:py-25">
        <div className="flex flex-col gap-24">
          
          {/* Headline Section - Layout expansivo */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <h2 className="text-5xl font-light leading-[1] tracking-tighter sm:text-7xl lg:text-8xl">
                No todo sitio web <br />
                es un <span className="text-white/20 italic">sistema.</span>
              </h2>
            </div>
            <div className="flex items-end lg:col-span-4 lg:pb-4">
              <p className="max-w-xs text-sm font-light leading-relaxed text-white/40 border-l border-white/20 pl-6">
                Un sistema web existe para operar, medir y tomar decisiones. 
                <span className="block mt-2 text-white/20">Todo lo demás es solo presencia.</span>
              </p>
            </div>
          </div>

          {/* Cards / Concept Section - No es una lista, es una rejilla técnica */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-sm">
            {concepts.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-[#050505] p-10 transition-all duration-500 hover:bg-white/[0.02]"
              >
                {/* Glow efecto hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="relative space-y-16">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-light tracking-widest text-white/30 uppercase">
                      {item.label}
                    </span>
                    <span className="text-[9px] font-light text-white/10 tracking-tighter">
                      0{index + 1} // SYST_MOD_0{index + 1}
                    </span>
                  </div>
                  
                  <p className="text-base font-light leading-relaxed text-white/60 transition-colors group-hover:text-white/90">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer de sección sutil */}
          <div className="flex justify-between items-center text-[10px] font-light tracking-[0.2em] text-white/20 uppercase">
            <span>Systems Engineering</span>
            <div className="h-px w-24 bg-white/10" />
            <span>Scale Ready</span>
          </div>

        </div>
      </div>
    </section>
  );
}