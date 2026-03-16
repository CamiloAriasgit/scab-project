"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroDashboard from '../../../../public/images/HeroMobile.png';

function StatusBadge() {
    return (
        /* He añadido el efecto 'Inset' (hundido) usando tu lógica de sombras */
        <div className="animate-hero-fade-up flex items-center gap-2.5 rounded-full bg-[#f0f0f0] px-3.5 py-1.5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] lg:mt-30 md:mt-30">
            <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500/50 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500" />
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
            <h1 className="text-balance text-center text-[2.75rem] md:text-6xl lg:text-[5.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground antialiased">
                No es solo una web.<br />Es control <br className="block lg:hidden md:hidden" />digital.
            </h1>
        </div>
    );
}

function HeroActions() {
    return (
        <div className="flex flex-col items-center gap-4 sm:flex-row lg:mt-8 mb-20 lg:mb-10 md:mb-10">
            <a
                href="#contacto"
                /* He aplicado tus valores de sombra (20px 60px) adaptados al botón */
                className="group relative flex h-13 items-center rounded-full bg-[#f0f0f0] p-2 pl-6 transition-all duration-300 shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] active:scale-95"
            >
                <span className="text-sm font-semibold text-black sm:text-[15px]">
                    Empezar
                </span>
                <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f0f0] text-black shadow-[2px_2px_5px_#d1d1d1,-2px_-2px_5px_#ffffff] transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                </div>
            </a>
        </div>
    );
}

function HeroImage() {
    return (
        /* Aquí aplico exactamente tu valor de sombra: 20px 20px 60px */
        <div className="relative w-full lg:w-2/5 md:w-3/5 p-4 rounded-[3rem] bg-[#f0f0f0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
            <Image
                src={HeroDashboard}
                alt="A mobile interface preview"
                className="h-auto w-full object-cover rounded-[2rem]"
            />
        </div>
    );
}

function GradientBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -left-[15%] -bottom-[15%] h-[60%] w-[60%] rounded-full bg-blue-500/10 blur-[130px]" />
            <div className="absolute left-1/2 bottom-[-10%] h-[70%] w-[70%] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
            <div className="absolute -right-[15%] -bottom-[10%] h-[60%] w-[60%] rounded-full bg-violet-500/10 blur-[130px]" />
        </div>
    );
}

export default function Hero() {
    return (
        /* Fondo cambiado a #f0f0f0 para que el neomorfismo sea visible */
        <section className="relative flex min-h-screen w-full flex-col items-center justify-end overflow-hidden bg-[#f0f0f0] selection:bg-foreground/5 antialiased">
            <GradientBackground />
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