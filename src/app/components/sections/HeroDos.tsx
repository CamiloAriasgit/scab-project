"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroDashboard from '../../../../public/images/ShadowMobile.png';

function StatusBadge() {
    return (
        <div className="animate-hero-fade-up flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-500/0 via-indigo-500/0 to-emerald-500/0 px-3.5 py-1.5 backdrop-blur-sm lg:mt-30 md:mt-30">
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
            <h1 className="text-balance text-center text-[2.75rem] md:text-6xl lg:text-[5.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground antialiased">
                No es solo una web.<br />Es control <br className="block lg:hidden md:hidden" />digital.
            </h1> {/*Control total sobre tu sitio web.*/}
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


function HeroImage() {

    return (
        <div className="relative w-full lg:w-2/5 md:w-3/5">
            <Image
                src={HeroDashboard}
                alt="A mobile interface preview"
                className="h-auto w-full object-cover border border-amber-600"
            />
        </div>
    );
}

function GradientBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -left-[15%] -bottom-[15%] h-[60%] w-[60%] rounded-full bg-blue-500 blur-[130px]" />
            <div className="absolute left-1/2 bottom-[-10%] h-[70%] w-[70%] -translate-x-1/2 rounded-full bg-cyan-500 blur-[140px]" />
            <div className="absolute -right-[15%] -bottom-[10%] h-[60%] w-[60%] rounded-full bg-violet-500 blur-[130px]" />
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-end overflow-hidden bg-background selection:bg-foreground/5 -webkit-font-smoothing: antialiased;">
            <div className="relative mx-auto flex w-full flex-col items-center px-5 sm:px-8 lg:px-6">
                <GradientBackground />
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