import { Monitor, Zap, Target } from "lucide-react";

const concepts = [
  {
    label: "Activos",
    text: "Una web sin estructura es un gasto. Un sistema bien pensado es un activo.",
    icon: Zap,
  },
  {
    label: "Flujo",
    text: "Antes de escribir codigo, se define el flujo: que entra, que se mide y que debe escalar.",
    icon: Monitor,
  },
  {
    label: "Alineacion",
    text: "La tecnologia solo importa cuando esta alineada con el modelo de negocio.",
    icon: Target,
  },
];

function SectionHeader() {
  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-foreground/20" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5E6472]/60">
          Filosofia
        </span>
      </div>

      <h2 className="text-balance text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-foreground">
        No todo sitio web{" "}
        <br className="hidden sm:block" />
        <span className="text-[#5E6472]/30 italic">es un sistema.</span>
      </h2>

      <p className="max-w-md text-sm leading-relaxed text-[#5E6472] sm:text-[15px] lg:text-base">
        Existimos para operar, medir y tomar decisiones.{" "}
        <span className="text-[#5E6472]/40">
          Todo lo demas es solo presencia.
        </span>
      </p>
    </div>
  );
}

function ConceptCard({
  item,
  index,
}: {
  item: (typeof concepts)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-foreground/[0.04] bg-background p-6 sm:rounded-3xl sm:p-8 lg:p-10">
      {/* Top row: icon + label + index */}
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors duration-500 lg:group-hover:bg-foreground lg:group-hover:text-background">
              <Icon className="h-4 w-4" strokeWidth={1.8} />
            </div>
            <span className="text-[10px] font-bold uppercase italic tracking-[0.2em] text-[#5E6472]/50">
              {item.label}
            </span>
          </div>
          <span className="text-[11px] font-medium tabular-nums text-foreground/10 transition-colors duration-500 lg:group-hover:text-foreground/30">
            0{index + 1}
          </span>
        </div>

        {/* Main text */}
        <p className="text-base leading-snug text-[#5E6472] transition-colors duration-500 sm:text-lg lg:text-xl lg:group-hover:text-foreground">
          {item.text}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="flex items-center gap-2 pt-8 sm:pt-10">
        <div className="h-1 w-1 rounded-full bg-foreground/15 transition-colors duration-500 lg:group-hover:bg-foreground" />
        <div className="h-px w-0 bg-foreground/10 transition-all duration-700 lg:group-hover:w-10" />
      </div>

      {/* Hover shadow layer (desktop only) */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-none transition-shadow duration-500 sm:rounded-3xl lg:group-hover:shadow-2xl lg:group-hover:shadow-foreground/[0.06]" />
    </div>
  );
}

function GridDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle dot grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.025]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="philosophy-dots"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.8" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#philosophy-dots)" />
      </svg>

      {/* Radial fade to match hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_0%,hsl(var(--background))_100%)]" />
    </div>
  );
}

export default function Philosophy() {
  return (
    <section
      id="explorar"
      className="relative w-full overflow-hidden bg-background py-20 selection:bg-foreground/5 sm:py-28 lg:py-40"
    >
      <GridDecoration />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Two-column layout: header left, cards right */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 xl:gap-24">
          {/* Left column: sticky header */}
          <div className="lg:sticky lg:top-32 lg:w-[380px] lg:shrink-0 lg:self-start xl:w-[420px]">
            <SectionHeader />
          </div>

          {/* Right column: cards stack */}
          <div className="flex flex-1 flex-col gap-4 sm:gap-5">
            {concepts.map((item, index) => (
              <ConceptCard key={item.label} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
