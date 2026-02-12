import { ArrowRight, MoveDown } from "lucide-react";
import { SystemMockup } from "../ui/system-mockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#F6F8FB] flex flex-col justify-center selection:bg-[#0B0D12]/5 overflow-hidden">
      
      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:py-32">
        {/* Grid de 12 columnas en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* BLOQUE TEXTO: Título y Párrafo */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-1">
            <h1 className="text-[32px] sm:text-[40px] leading-[1] tracking-tight font-medium text-[#0B0D12] lg:text-6xl xl:text-7xl">
              Sistemas web<br />
              que escalan negocios.
            </h1>
            <p className="max-w-xl text-[14px] md:text-[18px] leading-relaxed text-[#5E6472] font-normal">
              Diseño y desarrollo pensados para operar,<br className="hidden md:block" /> medir y crecer con claridad.
            </p>
          </div>

          {/* BLOQUE MAQUETA: Aparece segundo en móvil */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end order-2">
            <div className="w-full max-w-[540px] lg:max-w-none">
              <SystemMockup />
            </div>
          </div>

          {/* BLOQUE BOTONES: Tercero en móvil (accesible al pulgar), 
              en Desktop lo posicionamos visualmente bajo el texto mediante grid positioning o margen negativo */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start w-full max-w-md gap-3 order-3 lg:mt-[-40px]">
            <a
              href="#contacto"
              className="group h-12 w-full sm:w-auto sm:px-10 flex items-center justify-center gap-2 rounded-xl bg-[#0B0D12] text-sm font-bold text-white transition-all hover:opacity-95 active:scale-[0.98]"
            >
              Empezar
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </a>

            <a
              href="#Explorar"
              className="group h-12 w-full sm:w-auto sm:px-10 flex items-center justify-center gap-2 rounded-xl border border-[#5E6472]/15 bg-white text-sm font-medium text-[#5E6472] transition-all hover:bg-[#0B0D12]/5 active:scale-[0.98]"
            >
              Explorar más
              <MoveDown className="h-4 w-4 transition-transform group-hover:translate-y-1" strokeWidth={1.5} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}