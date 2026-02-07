import { ArrowRight, MoveDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white selection:bg-white/20 flex flex-col justify-center">

            {/* Refined Technical Background */}
            <div className="pointer-events-none absolute inset-0">
                {/* Subtle Grid - Aclarada con white/10 y máscara optimizada */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)]" />

                {/* Ambient Glows */}
                <div className="absolute -top-[10%] left-1/4 h-[600px] w-[600px] rounded-full bg-white/[0.02] blur-[120px]" />
                <div className="absolute top-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-white/[0.01] blur-[100px]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:py-3">
                <div className="flex flex-col space-y-1">

                    {/* Main Content Area */}
                    <div className="max-w-4xl space-y-5">

                        <h1 className="text-5xl  leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                            Sistemas web<br />que escalan negocios.
                        </h1>
                        <p className="text-sm leading-relaxed font-light text-white/40">
                            Diseño y desarrollo pensados para operar, medir y crecer con claridad.
                        </p>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">


                            <div className="flex items-center gap-4">
                                <a
                                    href="#contacto"
                                    className="h-10 w-40 group relative flex items-center justify-center overflow-hidden rounded bg-white text-sm font-medium text-black transition-transform active:scale-95"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Empezar
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                                    </span>
                                </a>
                                <a
                                    href="#Explorar"
                                    className="h-10 w-40 group relative flex items-center justify-center overflow-hidden rounded bg-neutral-900 text-sm font-medium text-white/80 transition-transform active:scale-95"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Explorar más
                                    <MoveDown className="h-4 w-4 transition-transform group-hover:translate-y-1" strokeWidth={1} />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}