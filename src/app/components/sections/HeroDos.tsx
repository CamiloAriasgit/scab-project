"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroDashboard from '../../../../public/images/3.png';

function StatusBadge() {
    return (
        <div className="animate-hero-fade-up flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-500/0 via-indigo-500/0 to-emerald-500/0 px-3.5 py-1.5 backdrop-blur-sm">
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
        <div className="flex flex-col items-center gap-4 lg:gap-5 max-w-4xl mx-auto">
            <h1 className="text-balance text-center text-[2.75rem] md:text-6xl lg:text-[5.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground antialiased">
                Tu web. <br className="hidden md:block" />
                Bajo tu control.
            </h1>
            <p className="text-center text-lg md:text-xl text-[#5E6472] max-w-lg leading-relaxed">
                Independencia digital real para gestionar <br className="hidden md:block" />
                tu contenido sin fricciones.
            </p>
        </div>
    );
}

function HeroActions() {
    return (
        <div className="flex flex-col items-center mt-10 mb-14">
            <a
                href="#contacto"
                className="group flex h-12 items-center rounded-full bg-foreground px-6 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-foreground/5"
            >
                <span className="text-sm font-medium text-background">
                    Empezar ahora
                </span>
                <ArrowRight className="ml-2 h-4 w-4 text-background group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    );
}


function HeroImage() {

    return (
        <div className="relative w-full max-w-[1000px] mx-auto mt-auto">
            <Image
                src={HeroDashboard}
                alt="Interface"
                className="w-full h-auto object-contain translate-y-[5%]" // El translate-y hace que parezca que emerge
                priority
            />
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-end overflow-hidden bg-background selection:bg-foreground/5 -webkit-font-smoothing: antialiased;">
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -left-[15%] -bottom-[15%] h-[60%] w-[60%] rounded-full bg-violet-500 blur-[130px]" />
                <div className="absolute left-1/2 bottom-[-10%] h-[70%] w-[70%] -translate-x-1/2 rounded-full bg-blue-500 blur-[140px]" />
                <div className="absolute -right-[15%] -bottom-[10%] h-[60%] w-[60%] rounded-full bg-emerald-500 blur-[130px]" />
            </div>

            <div className="relative mx-auto flex w-full flex-col items-center px-5 sm:px-8 lg:px-6">
                <div className="flex flex-col items-center gap-8 sm:gap-1 lg:gap-1">
                    <StatusBadge />
                    <HeroHeading />
                    <HeroActions />
                </div>
                <HeroImage />
            </div>
        </section>
    );
}