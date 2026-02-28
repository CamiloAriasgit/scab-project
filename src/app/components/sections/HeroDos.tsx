import { div } from "framer-motion/client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroDashboard from '../../../../public/images/HeroImg.png';
import InterfaceMockup from "../ui/InterfaceMockup";

function StatusBadge() {
    return (
        <div className="animate-hero-fade-up flex items-center gap-2.5 rounded-full border border-foreground/[0.06] bg-background/80 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
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
            <h1 className="text-balance text-center text-5xl lg:text-7xl font-medium leading-[0.95] tracking-tight text-foreground/90">
                Control total sobre tu sitio web.
            </h1>
        </div>
    );
}

function HeroActions() {
    return (
        <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
                href="#contacto"
                className="group relative flex h-13 items-center rounded-full bg-background/80 p-2 pl-6 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/10 active:scale-95"
            >
                <span className="text-sm font-semibold text-foreground/80 sm:text-[15px]">
                    Empezar
                </span>
                <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                </div>
            </a>
        </div>
    );
}

function HeroImage() {
    return (
        <Image
            src={HeroDashboard}
            alt="Dashboard Preview"
            className="h-auto w-3/4 object-cover lg:w-3/5"
        />
    );
}

export default function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-end overflow-hidden bg-background selection:bg-foreground/5">
            {/* Fondo de gradientes fríos estilo Apple */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                {/* Círculo Azul (Fondo Izquierda) */}
                <div className="absolute -left-[15%] -bottom-[15%] h-[60%] w-[60%] rounded-full bg-violet-400/80 blur-[130px]" />

                {/* Círculo Índigo (Fondo Centro-Abajo) - Este es el que más "mancha" la zona del teléfono */}
                <div className="absolute left-1/2 bottom-[-10%] h-[70%] w-[70%] -translate-x-1/2 rounded-full bg-blue-300/80 blur-[140px]" />

                {/* Círculo Cian/Lila (Fondo Derecha) */}
                <div className="absolute -right-[15%] -bottom-[10%] h-[60%] w-[60%] rounded-full bg-emerald-200/80 blur-[130px]" />
            </div>

            <div className="relative mx-auto flex w-full flex-col items-center px-5 pt-20 sm:px-8 sm:pt-32 lg:px-6">
                <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
                    <StatusBadge />
                    <HeroHeading />
                    <HeroActions />
                    <HeroImage />
                </div>
            </div>
        </section>
    );
}