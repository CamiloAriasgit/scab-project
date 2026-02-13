"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Data ─── */

const steps = [
  {
    id: "01",
    title: "Entender el contexto",
    desc: "Antes de escribir una linea de codigo, entendemos como opera tu negocio y que necesita ahora.",
    keyword: "Diagnostico",
  },
  {
    id: "02",
    title: "Disenar el sistema correcto",
    desc: "No todo es una web, no todo es una plataforma. Se define la estructura minima que resuelve el problema real.",
    keyword: "Arquitectura",
  },
  {
    id: "03",
    title: "Construir con vision de crecimiento",
    desc: "Se desarrolla pensando en operacion, metricas y evolucion, incluso si hoy el sistema es simple.",
    keyword: "Desarrollo",
  },
  {
    id: "04",
    title: "Entrega y control",
    desc: "El sistema queda en tus cuentas, con acceso, metricas y claridad total sobre lo que tienes y como funciona.",
    keyword: "Despliegue",
  },
] as const;

/* ─── Intersection observer hook ─── */

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── Section header ─── */

function ProcessHeader({ visible }: { visible: boolean }) {
  return (
    <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
      <div
        className="flex items-center gap-3 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
        }}
      >
        <span className="h-px w-6 bg-foreground/15 sm:w-8" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5E6472]/60">
          Metodologia
        </span>
        <span className="h-px w-6 bg-foreground/15 sm:w-8 lg:hidden" />
      </div>

      <h2
        className="text-balance text-[clamp(2rem,5.5vw,4rem)] font-medium leading-[1] tracking-tight text-foreground transition-all duration-700 delay-100"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        Un proceso{" "}
        <span className="text-[#5E6472]/25 italic">claro.</span>
      </h2>

      <p
        className="max-w-sm text-pretty text-sm leading-relaxed text-[#5E6472]/70 sm:text-[15px] lg:max-w-md lg:text-base"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}
      >
        Cada decision tecnica responde a una decision de negocio.{" "}
        <span className="font-medium text-foreground">
          Nada se construye porque si.
        </span>
      </p>
    </div>
  );
}

/* ─── Single step card — the core visual element ─── */

function StepCard({
  step,
  index,
  visible,
  isActive,
  onActivate,
}: {
  step: (typeof steps)[number];
  index: number;
  visible: boolean;
  isActive: boolean;
  onActivate: () => void;
}) {
  const delay = 0.25 + index * 0.1;

  return (
    <div
      className="group relative cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
      onClick={onActivate}
      onMouseEnter={onActivate}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
      aria-label={`Paso ${step.id}: ${step.title}`}
    >
      {/* Giant background number */}
      <span
        className="animate-process-number-glow pointer-events-none absolute -right-2 -top-4 select-none font-medium text-foreground sm:-right-4 sm:-top-8"
        style={{
          fontSize: "clamp(5rem, 12vw, 10rem)",
          lineHeight: 1,
          opacity: isActive ? 0.08 : 0.03,
          transition: "opacity 0.6s ease",
          animationDelay: `${index * 1.2}s`,
        }}
        aria-hidden="true"
      >
        {step.id}
      </span>

      <div className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-foreground/[0.04] p-6 sm:rounded-3xl sm:p-8 lg:p-10">
        {/* Active indicator — left edge accent bar */}
        <div
          className="absolute left-0 top-0 h-full w-[2px] rounded-full bg-foreground transition-all duration-500"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? "scaleY(1)" : "scaleY(0.3)",
            transformOrigin: "top",
          }}
        />

        {/* Top row */}
        <div className="flex items-center gap-4">
          {/* Step number chip */}
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[11px] font-bold tabular-nums transition-all duration-500"
            style={{
              background: isActive
                ? "hsl(var(--foreground))"
                : "hsl(var(--secondary))",
              color: isActive
                ? "hsl(var(--background))"
                : "hsl(var(--foreground))",
            }}
          >
            {step.id}
          </div>

          {/* Keyword tag */}
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-500"
            style={{
              color: isActive
                ? "hsl(var(--foreground) / 0.5)"
                : "hsl(var(--[#5E6472]) / 0.35)",
            }}
          >
            {step.keyword}
          </span>

          {/* Connecting line to title */}
          <div
            className="hidden h-px flex-1 bg-foreground/[0.06] sm:block"
            style={{
              opacity: isActive ? 1 : 0.4,
              transition: "opacity 0.5s ease",
            }}
          />
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold tracking-tight transition-colors duration-500 sm:text-xl lg:text-2xl"
          style={{
            color: isActive
              ? "hsl(var(--foreground))"
              : "hsl(var(--foreground) / 0.6)",
          }}
        >
          {step.title}
        </h3>

        {/* Description — expands on active */}
        <div
          className="overflow-hidden transition-all duration-700 ease-out"
          style={{
            maxHeight: isActive ? "120px" : "0px",
            opacity: isActive ? 1 : 0,
          }}
        >
          <p className="max-w-lg text-sm leading-relaxed text-[#5E6472]/70 sm:text-[15px]">
            {step.desc}
          </p>
        </div>

        {/* Bottom progress bar */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-foreground/[0.04]">
            <div
              className="h-full bg-foreground/15 transition-all duration-700"
              style={{ width: isActive ? "100%" : "0%" }}
            />
          </div>
          <span
            className="text-[10px] tabular-nums transition-colors duration-500"
            style={{
              color: isActive
                ? "hsl(var(--foreground) / 0.4)"
                : "hsl(var(--foreground) / 0.1)",
            }}
          >
            {step.id}/{String(steps.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Vertical timeline connector (desktop) ─── */

function TimelineConnector({
  visible,
  progress,
}: {
  visible: boolean;
  progress: number;
}) {
  return (
    <div className="absolute bottom-0 left-12 top-0 hidden w-px lg:block" aria-hidden="true">
      {/* Track */}
      <div className="absolute inset-0 bg-foreground/[0.04]" />
      {/* Fill */}
      <div
        className="absolute left-0 top-0 w-full origin-top bg-foreground/15 transition-all duration-700"
        style={{
          height: visible ? `${progress}%` : "0%",
        }}
      />
      {/* Glow dot at current position */}
      <div
        className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-foreground/30 transition-all duration-700"
        style={{
          top: `${progress}%`,
          opacity: visible ? 1 : 0,
          boxShadow: "0 0 8px hsl(var(--foreground) / 0.15)",
        }}
      />
    </div>
  );
}

/* ─── Decorative background ─── */

function ProcessDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Thin horizontal scan lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.012]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="process-lines"
            width="100%"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#process-lines)" />
      </svg>

      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,transparent_0%,hsl(var(--background))_100%)]" />

      {/* Floating geometric accents — large screens */}
      <div
        className="animate-hero-float absolute left-[5%] top-[20%] hidden h-32 w-px bg-foreground/[0.03] lg:block"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="animate-hero-float absolute bottom-[15%] right-[8%] hidden h-20 w-px bg-foreground/[0.025] lg:block"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="animate-hero-float absolute right-[15%] top-[10%] hidden h-px w-16 bg-foreground/[0.03] lg:block"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="animate-hero-float absolute bottom-[25%] left-[12%] hidden h-px w-10 bg-foreground/[0.02] lg:block"
        style={{ animationDelay: "3.5s" }}
      />
    </div>
  );
}

/* ─── Main component ─── */

export default function Process() {
  const { ref, visible } = useInView(0.08);
  const [activeStep, setActiveStep] = useState(0);

  /* Auto-advance active step */
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [visible]);

  const timelineProgress =
    ((activeStep + 1) / steps.length) * 100;

  return (
    <section
      ref={ref}
      id="proceso"
      className="relative w-full overflow-hidden bg-background py-20 selection:bg-foreground/5 sm:py-28 lg:py-40"
    >
      <ProcessDecoration />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-6">
        <div className="flex flex-col gap-14 sm:gap-16 lg:flex-row lg:gap-20 xl:gap-28">
          {/* Left column: sticky header */}
          <div className="lg:sticky lg:top-32 lg:w-[340px] lg:shrink-0 lg:self-start xl:w-[380px]">
            <ProcessHeader visible={visible} />

            {/* Step indicator pills — desktop only */}
            <div
              className="mt-10 hidden flex-col gap-2 lg:flex"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
              }}
            >
              {steps.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  className="group/pill flex items-center gap-3 py-1.5 text-left transition-all duration-300"
                >
                  <div
                    className="h-px transition-all duration-500"
                    style={{
                      width: activeStep === i ? "24px" : "12px",
                      background:
                        activeStep === i
                          ? "hsl(var(--foreground) / 0.5)"
                          : "hsl(var(--foreground) / 0.1)",
                    }}
                  />
                  <span
                    className="text-xs font-medium transition-colors duration-300"
                    style={{
                      color:
                        activeStep === i
                          ? "hsl(var(--foreground))"
                          : "hsl(var(--muted-foreground) / 0.4)",
                    }}
                  >
                    {step.keyword}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right column: step cards with timeline */}
          <div className="relative flex-1">
            <TimelineConnector visible={visible} progress={timelineProgress} />

            <div className="flex flex-col gap-4 sm:gap-5 lg:pl-8">
              {steps.map((step, index) => (
                <StepCard
                  key={step.id}
                  step={step}
                  index={index}
                  visible={visible}
                  isActive={activeStep === index}
                  onActivate={() => setActiveStep(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
