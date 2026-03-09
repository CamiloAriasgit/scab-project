"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroDashboard from '../../../../public/images/MobileHi.jpg';

function StatusBadge() {
    return (
        <div className="animate-hero-fade-up flex flex-col items-center gap-20">
            <span className="relative flex h-20 w-20 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75" />
            </span>
            <span className="text-xs font-medium tracking-wide text-foreground/60">
                Sección en construcción...
            </span>
        </div>
    );
}



export default function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background selection:bg-foreground/5 -webkit-font-smoothing: antialiased;">
            <StatusBadge />
        </section>
    );
}