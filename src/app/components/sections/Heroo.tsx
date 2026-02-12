import { ArrowRight, MoveDown } from "lucide-react";

function StatusBadge() {
  return (
    <div className="animate-hero-fade-up flex items-center gap-2.5 rounded-full border border-foreground/[0.06] bg-background/80 px-3.5 py-1.5 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-hero-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-xs font-medium tracking-wide text-muted-foreground">
        Disponible para proyectos
      </span>
    </div>
  );
}

function HeroHeading() {
  return (
    <div className="animate-hero-fade-up-delay-1 flex flex-col items-center gap-5 lg:gap-6">
      <h1 className="text-balance text-center text-[clamp(2rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-tight text-foreground">
        Sistemas web
        <br />
        <span className="text-muted-foreground">que escalan negocios.</span>
      </h1>

      <p className="max-w-xs text-pretty text-center text-sm leading-relaxed text-muted-foreground sm:max-w-sm sm:text-base lg:max-w-md lg:text-lg">
        Diseno y desarrollo pensados para operar, medir y crecer con claridad.
      </p>
    </div>
  );
}

function HeroActions() {
  return (
    <div className="animate-hero-fade-up-delay-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
      <a
        href="#contacto"
        className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-foreground text-sm font-semibold text-background transition-all duration-300 hover:shadow-xl hover:shadow-foreground/20 active:scale-[0.97] sm:h-14 sm:w-52 sm:text-[15px]"
      >
        <span className="relative z-10 flex items-center gap-2">
          Empezar
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2}
          />
        </span>
        <span className="absolute inset-0 -translate-x-full bg-foreground/80 transition-transform duration-500 group-hover:translate-x-0" />
      </a>

      <a
        href="#explorar"
        className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-foreground/[0.08] bg-secondary/50 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-foreground/[0.15] hover:bg-secondary hover:text-foreground active:scale-[0.97] sm:h-14 sm:w-52 sm:text-[15px]"
      >
        Explorar mas
        <MoveDown
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
          strokeWidth={1.5}
        />
      </a>
    </div>
  );
}

function MetricPill({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
      <span className="font-semibold tabular-nums text-foreground">{value}</span>
      <span className="text-muted-foreground/60">{label}</span>
    </div>
  );
}

function HeroMetrics() {
  return (
    <div className="animate-hero-fade-up-delay-3 flex items-center gap-4 sm:gap-6">
      <MetricPill value="+40" label="proyectos" />
      <span className="h-3 w-px bg-foreground/10" />
      <MetricPill value="99%" label="uptime" />
      <span className="h-3 w-px bg-foreground/10" />
      <MetricPill value="4.9" label="rating" />
    </div>
  );
}

function DecorativeLine() {
  return (
    <div className="animate-hero-line mt-8 h-px w-32 origin-center bg-foreground/[0.06] sm:mt-12 sm:w-48 lg:mt-16 lg:w-64" />
  );
}

function GridOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,transparent_0%,hsl(var(--background))_100%)]" />

      {/* Grid lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Corner accents — only on larger screens */}
      <div className="absolute left-6 top-6 hidden h-16 w-px bg-foreground/[0.05] lg:block" />
      <div className="absolute left-6 top-6 hidden h-px w-16 bg-foreground/[0.05] lg:block" />
      <div className="absolute bottom-6 right-6 hidden h-16 w-px bg-foreground/[0.05] lg:block" />
      <div className="absolute bottom-6 right-6 hidden h-px w-16 bg-foreground/[0.05] lg:block" />

      {/* Floating accent dot */}
      <div className="animate-hero-float absolute right-[15%] top-[20%] hidden h-1 w-1 rounded-full bg-foreground/10 lg:block" />
      <div className="animate-hero-float absolute bottom-[25%] left-[12%] hidden h-1.5 w-1.5 rounded-full bg-foreground/[0.07] lg:block" style={{ animationDelay: "2s" }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-background selection:bg-foreground/5">
      <GridOverlay />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-16 sm:px-8 sm:py-24 lg:px-6 lg:py-32">
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
          <StatusBadge />
          <HeroHeading />
          <HeroActions />
          <HeroMetrics />
          <DecorativeLine />
        </div>
      </div>
    </section>
  );
}
