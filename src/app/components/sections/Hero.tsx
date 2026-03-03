import { ArrowRight, MoveDown } from "lucide-react";

function StatusBadge() {
    return (
        <div className="animate-hero-fade-up flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-500/0 via-indigo-500/0 to-emerald-500/0 px-3.5 py-1.5 backdrop-blur-sm lg:pt-30 md:pt-30">
            <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-indigo-500/0 opacity-75" />
                <span
                    style={{ animationDelay: '0.2s' }}
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-b from-indigo-500/0 via-violet-500 to-indigo-500/0 opacity-75"
                />
                <span
                    style={{ animationDelay: '0.4s' }}
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-br from-indigo-500/0 via-purple-500 to-indigo-500/0 opacity-75"
                />
                <span
                    style={{ animationDelay: '0.6s' }}
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-bl from-indigo-500/0 via-cyan-500 to-indigo-500/0 opacity-75"
                />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500/0" />
            </span>
            <span className="text-xs font-medium tracking-wide text-[#5E6472]">
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
        que escalan negocios.
      </h1>
    </div>
  );
}

function HeroActions() {
    return (
        <div className="flex flex-col items-center gap-4 sm:flex-row lg:mt-8 mb-20 lg:mb-10 md:mb-10">
            <a
                href="#contacto"
                className="group relative flex h-13 items-center rounded-full bg-foreground p-2 pl-6 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/10 active:scale-95"
            >
                <span className="text-sm font-semibold text-background sm:text-[15px]">
                    Empezar
                </span>
                <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-background text-black transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                </div>
            </a>
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -left-[15%] -bottom-[15%] h-[60%] w-[60%] rounded-full bg-violet-500 blur-[130px]" />
                <div className="absolute left-1/2 bottom-[-10%] h-[70%] w-[70%] -translate-x-1/2 rounded-full bg-blue-500 blur-[140px]" />
                <div className="absolute -right-[15%] -bottom-[10%] h-[60%] w-[60%] rounded-full bg-emerald-500 blur-[130px]" />
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
          <DecorativeLine />
        </div>
      </div>
    </section>
  );
}
