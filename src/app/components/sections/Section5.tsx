import { ArrowRight } from "lucide-react";

export default function Contact() {
  const criteria = [
    "Tu negocio ya está operando y buscas orden, control y claridad.",
    "No buscas solo una web, sino una herramienta de operación.",
    "Entiendes que lo técnico debe servir a lo estratégico.",
    "Prefieres construir bien una vez antes que rehacerlo luego."
  ];

  return (
    <section id="contacto" className="w-full bg-[#F6F8FB] py-24 md:py-40 selection:bg-[#0B0D12]/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Lado Izquierdo: El Filtro de Negocio */}
          <div className="lg:col-span-7 space-y-16">
            <h2 className="text-[40px] leading-[1] tracking-tight font-medium text-[#0B0D12] sm:text-6xl lg:text-7xl">
              Esto tiene sentido <br />
              <span className="text-[#5E6472]/40 italic">si…</span>
            </h2>

            <div className="space-y-8">
              {criteria.map((item, i) => (
                <div key={i} className="group flex items-start gap-6">
                  <div className="mt-3 h-[1px] w-6 bg-[#5E6472]/20 transition-all duration-500 group-hover:w-10 group-hover:bg-[#0B0D12]" />
                  <p className="text-lg md:text-xl leading-relaxed text-[#5E6472] transition-colors group-hover:text-[#0B0D12]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Derecho: La Acción Final - Minimalismo Radical */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:pt-4">
            <div className="w-full max-w-sm space-y-10">
              <a
                href="mailto:tu@email.com"
                className="group flex h-16 items-center justify-between rounded-2xl bg-[#0B0D12] px-8 text-lg font-medium text-white transition-all hover:opacity-95 active:scale-[0.98]"
              >
                Iniciar conversación
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}