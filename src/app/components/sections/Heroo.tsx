import { ArrowRight, MoveDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white selection:bg-white/20 flex flex-col justify-center">

            {/* Refined Technical Background */}
            <div className="pointer-events-none absolute inset-0">
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Ambient Glows */}
                <div className="absolute -top-[10%] left-1/4 h-[600px] w-[600px] rounded-full bg-white/[0.02] blur-[120px]" />
                <div className="absolute top-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-white/[0.01] blur-[100px]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:py-3">
                <div className="flex flex-col space-y-1">

                    {/* Main Content Area */}
                    <div className="max-w-4xl space-y-5">

                        <h1 className="text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                            Sistemas web que<br />escalan negocios.

                        </h1>
                        <p className="text-sm leading-relaxed font-light text-white/40">
                            Diseño y desarrollo pensados para operar, medir y crecer con claridad.
                        </p>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">


                            <div className="flex flex-wrap items-center gap-6 md:justify-end">
                                <a
                                    href="#contacto"
                                    className="group relative flex items-center justify-center overflow-hidden rounded-lg bg-white px-10 py-4 text-sm font-medium text-black transition-transform active:scale-95"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Iniciar consulta
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                                    </span>
                                </a>
                                <a
                                    href="#proceso"
                                    className="group flex items-center gap-3 text-sm font-light text-white/50 transition-colors hover:text-white"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-white/30">
                                        <MoveDown className="h-4 w-4" strokeWidth={1} />
                                    </div>
                                    Explorar metodología
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Decorative Text (Desktop Only) */}
            <div className="absolute bottom-10 right-10 hidden rotate-90 origin-bottom-right lg:block">
                <span className="text-[10px] font-light tracking-[0.5em] text-white/10 uppercase whitespace-nowrap">
                    Digital Architecture © 2024 — All Rights Reserved
                </span>
            </div>
        </section>
    );
}