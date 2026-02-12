import { ArrowRight, MoveDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#F6F8FB] flex flex-col justify-center selection:bg-[#0B0D12]/5 overflow-hidden">
      
      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:py-32">
        <div className="flex flex-col items-center">
          
          <div className="max-w-4xl space-y-10 flex flex-col items-center">
            
            {/* Texto: El foco absoluto */}
            <div className="space-y-4 flex flex-col items-center">
              <h1 className="text-[30px] sm:text-[48px] lg:text-[72px] leading-[0.95] tracking-tight text-center font-medium text-[#0B0D12]">
                Sistemas web<br />
                que escalan negocios.
              </h1>

              <p className="max-w-md text-[15px] sm:text-[18px] text-center leading-relaxed text-[#5E6472] font-normal">
                Diseño y desarrollo pensados para operar, medir y crecer con claridad.
              </p>
            </div>

            {/* Acciones: Columna en Mobile, Fila en Desktop */}
            <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto gap-3">
              
              <a
                href="#contacto"
                className="group h-14 w-full sm:w-52 flex items-center justify-center gap-2 rounded-xl bg-[#0B0D12] text-[15px] font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] shadow-lg shadow-[#0B0D12]/50"
              >
                Empezar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </a>

              <a
                href="#Explorar"
                className="group h-14 w-full sm:w-52 flex items-center justify-center gap-2 rounded-xl border border-[#5E6472]/0 bg-[#F6F8FB] sm:bg-transparent text-[15px] font-medium text-[#5E6472] transition-all hover:bg-[#0B0D12]/5 active:scale-[0.98] shadow-lg shadow-[#0B0D12]/20"
              >
                Explorar más
                <MoveDown className="h-4 w-4 transition-transform group-hover:translate-y-1" strokeWidth={1.5} />
              </a>
              
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}