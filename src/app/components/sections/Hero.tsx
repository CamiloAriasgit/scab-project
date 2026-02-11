import { ArrowRight, MoveDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black text-neutral-300 flex flex-col px-4 pb-4 justify-end">
            <h1 className="text-3xl pr-30">Ray-Ban Meta Gen2 Smart Glasses</h1>
            <a
                href="#contacto"
                className="h-10 w-full lg:w-40 group relative flex items-center justify-center overflow-hidden rounded bg-indigo-500 text-sm font-medium text-black transition-transform active:scale-95"
            >
                <span className="relative z-10 flex items-center gap-2">
                    Empezar
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                </span>
            </a>
        </section>
    );
}