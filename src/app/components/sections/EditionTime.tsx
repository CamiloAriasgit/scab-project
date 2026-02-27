import { ArrowRight } from "lucide-react";

function HeroHeading() {
    return (
        <div className="animate-hero-fade-up-delay-1 flex flex-col items-center gap-5 lg:gap-6">
            <h1 className="text-balance text-center text-[clamp(2rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-tight text-foreground/90">
                Actualiza en segundos sin procesos técnicos.
            </h1>

            <p className="max-w-xs text-pretty text-center text-sm leading-relaxed text-[#5E6472] sm:max-w-sm sm:text-base lg:max-w-md lg:text-lg">
                Cambia textos, publica novedades o reemplaza imágenes sin tocar el diseño.
                Tu sistema está pensado para que el contenido fluya, no para complicarte.
            </p>
        </div>
    );
}

function MockUpImage() {
    return (
        <div className="w-full animate-hero-fade-up-delay-2 sm:mt-0 lg:mt-0 sm:w-2xl">
            <div className="relative mx-auto max-w-5xl backdrop-blur-sm">
                <img
                    src="https://www.pngkey.com/png/full/808-8088735_responsive-dashboards-in-html5-web-design.png"
                    alt="Dashboard Preview"
                    className="h-auto w-full object-cover"
                />
            </div>
        </div>
    );
}

export default function Mobile() {
    return (
        <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background selection:bg-foreground/5">
            {/* Contenedor Principal: Aumentamos el padding top para dar aire */}
            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pt-20 pb-16 sm:px-8 sm:pt-32 lg:px-6">

                <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
                    <HeroHeading />
                    <MockUpImage />
                    <span className="text-pretty text-center text-sm leading-relaxed text-foreground/50">Más acción. Menos espera.</span>
                </div>

            </div>
        </section>
    );
}
