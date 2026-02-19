import { ArrowRight } from "lucide-react";

function HeroHeading() {
    return (
        <div className="animate-hero-fade-up-delay-1 flex flex-col items-center gap-5 lg:gap-6">
            <h1 className="text-balance text-center text-[clamp(2rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-tight text-foreground/90">
                Tu sitio web bajo tu control.
            </h1>

            <p className="max-w-xs text-pretty text-center text-sm leading-relaxed text-[#5E6472] sm:max-w-sm sm:text-base lg:max-w-md lg:text-lg">
                Diseño profesional con sistema de edición privado, estructurado para operar sin fricción.
            </p>
        </div>
    );
}

function HeroActions() {
    return (
        <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
                href="#contacto"
                className="group relative flex h-13 items-center rounded-full bg-foreground/7 p-2 pl-6 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/10 active:scale-95"
            >
                {/* Texto */}
                <span className="text-sm font-semibold text-foreground/80 sm:text-[15px]">
                    Empezar
                </span>

                {/* Círculo Azul "Apple Style" */}
                <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white shadow-sm transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                </div>
            </a>
        </div>
    );
}

function HeroImage() {
    return (
        <div className="w-full animate-hero-fade-up-delay-2 sm:mt-20 lg:mt-24">
            <div className="relative mx-auto max-w-5xl bg-foreground/[0.02] shadow-2xl shadow-foreground/5 backdrop-blur-sm">
                <img 
                    src="https://i.pinimg.com/originals/fa/d0/76/fad0765e22356db2fbbd98ea367e084e.jpg"
                    alt="Dashboard Preview" 
                    className="h-auto w-full object-cover"
                />
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-background selection:bg-foreground/5">
            {/* Contenedor Principal: Aumentamos el padding top para dar aire */}
            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pt-20 pb-16 sm:px-8 sm:pt-32 lg:px-6">
                
                <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
                    <HeroHeading />
                    <HeroActions />
                </div>

            </div>
        </section>
    );
}
