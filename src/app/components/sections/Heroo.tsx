import { ArrowRight, MoveDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#F6F8FB] flex flex-col justify-center selection:bg-[#0B0D12]/5">
      
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 md:py-32">
        <div className="flex flex-col items-center">
          
          <div className="max-w-4xl space-y-2 flex flex-col items-center">
            
            <h1 className="text-[30px] leading-[0.9] tracking-tight text-center font-medium text-[#0B0D12] lg:text-5xl">
              Sistemas web<br />
              que escalan negocios.
            </h1>

            <p className="max-w-xl text-[13px] text-center md:text-[17px] leading-relaxed text-[#5E6472] font-normal">
              Diseño y desarrollo pensados para operar,<br />medir y crecer con claridad.
            </p>

            <div className="flex items-center justify-center w-full md:w-3/4 sm:items-center gap-2 pt-10">
              
              <a
                href="#contacto"
                className="group h-12 w-full flex items-center justify-center gap-2 rounded-xl bg-[#0B0D12] text-sm font-medium text-white transition-all hover:opacity-90 active:scale-[0.98]"
              >
                Empezar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </a>

              <a
                href="#Explorar"
                className="group h-12 w-full flex items-center justify-center gap-2 rounded-xl border border-[#5E6472]/15 bg-transparent text-sm font-medium text-[#5E6472] transition-all hover:bg-[#0B0D12]/5 active:scale-[0.98]"
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