import { ArrowRight, MoveDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#F6F8FB] flex flex-col justify-center selection:bg-[#0B0D12]/5">
      
      {/* Layout Principal: Mobile First & Responsive */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:py-32">
        <div className="flex flex-col items-center">
          
          {/* Contenedor de Texto */}
          <div className="max-w-4xl space-y-8 md:space-y-10 flex flex-col items-center">
            
            {/* Título: Near Black - Autoridad y Claridad */}
            <h1 className="text-[30px] leading-[1.1] tracking-tight text-center font-medium text-[#0B0D12] lg:text-5xl">
              Sistemas web<br />
              <span className="opacity-90">que escalan negocios.</span>
            </h1>

            {/* Subtítulo: Gray Técnico - Lectura Secundaria */}
            <p className="max-w-xl text-[13px] text-center md:text-xl leading-relaxed text-[#5E6472] font-normal">
              Diseño y desarrollo pensados para operar, medir y crecer con claridad.
            </p>

            {/* Acciones: Minimalismo Tecnológico */}
            <div className="flex flex-row items-start justify-center sm:items-center sm:justify-start gap-4 pt-4">
              
              {/* CTA Primario: Sólido y con bordes suaves (estilo Apple) */}
              <a
                href="#contacto"
                className="group h-12 w-35 flex items-center justify-center gap-2 rounded-xl bg-[#0B0D12] text-sm font-medium text-white transition-all hover:opacity-90 active:scale-[0.98]"
              >
                Empezar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </a>

              {/* CTA Secundario: Basado en contraste de bordes sutiles */}
              <a
                href="#Explorar"
                className="group h-12 w-35 flex items-center justify-center gap-2 rounded-xl border border-[#5E6472]/15 bg-transparent text-sm font-medium text-[#5E6472] transition-all hover:bg-[#0B0D12]/5 active:scale-[0.98]"
              >
                Explorar más
                <MoveDown className="h-4 w-4 transition-transform group-hover:translate-y-1" strokeWidth={1.5} />
              </a>
              
            </div>
          </div>
        </div>
      </div>

      {/* Decoración No Funcional: Eliminada. Solo queda el espacio y el aire. */}
    </section>
  );
}