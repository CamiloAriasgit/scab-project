"use client";

import { ArrowRight } from "lucide-react";

/* ─── Subcomponente: Encabezado ─── */
function HeroHeading() {
    return (
        <div className="flex flex-col items-center gap-5 lg:gap-6">
            <h1 className="text-balance text-start text-5xl font-bold leading-[1.05] tracking-tight text-background/90 mx-6">
                Tu web bajo tu control desde <span className="bg-gradient-to-r from-background via-indigo-500 to-cyan-500 bg-clip-text text-transparent">cualquier lugar.</span>
            </h1>

            <p className="max-w-xs text-pretty text-sm leading-relaxed text-background/60 sm:max-w-sm sm:text-base lg:max-w-md lg:text-lg mx-6">
                No importa si estás en la oficina, en casa o en movimiento.
                Tu panel privado está optimizado para funcionar en cualquier dispositivo.
            </p>
        </div>
    );
}

/* ─── Subcomponente: Mockup ─── */
function MockUpImage() {
    return (
        <div className="relative w-full max-w-4xl px-4 py-8">
            <div className="relative mx-auto drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                <img
                    src="https://www.pngkey.com/png/full/808-8088735_responsive-dashboards-in-html5-web-design.png"
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
        <section className="w-full bg-background px-5 py-20 sm:px-8 lg:px-6 lg:py-32">
            <div className="mx-auto max-w-6xl">
                
                {/* Master Card que envuelve toda la sección */}
                <div className="relative flex flex-col items-center overflow-hidden rounded-[2.5rem] bg-neutral-950 pt-16 pb-12 sm:pt-24 lg:pt-32">
                    
                    {/* Contenido Central */}
                    <div className="z-10 flex w-full flex-col items-center gap-10 lg:gap-14">
                        <HeroHeading />
                    </div>
                </div>
                
            </div>
        </section>
    );
}