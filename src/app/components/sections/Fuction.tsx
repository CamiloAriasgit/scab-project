"use client";

import { ArrowRight } from "lucide-react";
import HeroDashboard from '../../../../public/images/S3.png';


/* ─── Subcomponente: Encabezado ─── */
function HeroHeading() {
    return (
        <div className="flex flex-col gap-5 lg:gap-6 px-9">
            <h1 className="text-balance text-start text-5xl font-bold leading-[1.05] tracking-tight text-foreground/80">
                Simple por fuera. {" "}
                <span className="bg-gradient-to-r from-foreground/80 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">Potente por dentro.</span>
            </h1>

            <p className="max-w-xs text-pretty text-sm leading-relaxed text-foreground/60 sm:max-w-sm sm:text-base lg:max-w-md lg:text-lg">
                Diseñado para que puedas gestionar tu contenido sin depender de desarrolladores.
            </p>
        </div>
    );
}

/* ─── Subcomponente: Mockup ─── */
function MockUpImage() {
    return (
        <div className="relative w-full max-w-4xl px-4 pt-8">
            <div className="relative mx-auto transition-transform duration-700 hover:scale-[1.02]">
                <img
                    src={HeroDashboard.src}
                    alt="Dashboard Preview"
                    className="h-auto w-full object-cover"
                />
            </div>
        </div>
    );
}

/* ─── Sección Principal Refactorizada ─── */
export default function Mobile() {
    return (
        <section className="w-full bg-background px-5 py-5 sm:px-8 lg:px-6 lg:py-15">
            <div className="mx-auto max-w-6xl">
                
                {/* Master Card que envuelve toda la sección */}
                <div className="relative flex flex-col items-center overflow-hidden rounded-[2.5rem] bg-background shadow-xl">
                    
                    {/* Contenido Central */}
                    <div className="z-10 flex w-full flex-col lg:flex-row items-end ">
                        <div className="pt-10 lg:py-48">
                            <HeroHeading />
                        </div>
                        <MockUpImage />
                    </div>
                </div>
                
            </div>
        </section>
    );
}