import { ArrowRight, MoveDown } from "lucide-react";
import { SystemMockup } from "../ui/system-mockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#F6F8FB] flex flex-col justify-center selection:bg-[#0B0D12]/5 overflow-hidden">
      
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 md:py-32">
        <div className="flex flex-col items-center">
          
          <div className="max-w-4xl space-y-8 flex flex-col items-center">
            
            {/* Mensaje Central */}
            <div className="space-y-4 flex flex-col items-center">
              <h1 className="text-[34px] leading-[1] tracking-tight text-center font-medium text-[#0B0D12] lg:text-7xl">
                Sistemas web<br />
                que escalan negocios.
              </h1>
              <p className="max-w-xl text-[14px] text-center md:text-[18px] leading-relaxed text-[#5E6472] font-normal">
                Diseño y desarrollo pensados para operar,<br className="hidden md:block" /> medir y crecer con claridad.
              </p>
            </div>

            {/* Representación Gráfica (UI) */}
            <SystemMockup />

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-md gap-3 pt-4">
              <a
                href="#contacto"
                className="group h-12 w-full flex items-center justify-center gap-2 rounded-xl bg-[#0B0D12] text-sm font-bold text-white transition-all hover:opacity-95 active:scale-[0.98]"
              >
                Empezar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </a>

              <a
                href="#Explorar"
                className="group h-12 w-full flex items-center justify-center gap-2 rounded-xl border border-[#5E6472]/15 bg-white text-sm font-medium text-[#5E6472] transition-all hover:bg-[#0B0D12]/5 active:scale-[0.98]"
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