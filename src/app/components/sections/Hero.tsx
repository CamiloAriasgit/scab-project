import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left content */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70">
              Sistemas web pensados como activos de negocio
            </span>

            <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl xl:text-6xl">
              Desarrollo web que{" "}
              <span className="text-white/70">
                entiende tu negocio
              </span>
              <br />
              antes de escribir código
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              No construyo sitios “bonitos”. Diseño sistemas web que
              comunican autoridad, generan confianza y apoyan decisiones
              reales de negocio.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Hablar sobre tu proyecto
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#proceso"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm text-white/80 transition hover:bg-white/5"
              >
                Ver cómo trabajo
              </a>
            </div>
          </div>

          {/* Right content */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <ul className="space-y-5">
              {[
                "Enfoque estratégico, no solo técnico",
                "Webs públicas, editables o sistemas internos",
                "Arquitectura pensada para escalar",
                "Métricas, datos y control desde el inicio",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-white/60" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/60">
              Trabajo con empresas y profesionales que buscan
              estructura, claridad y resultados sostenibles.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
