"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ─── Config ─── */

const PHONE = "573003607632";
const MESSAGE = encodeURIComponent(
  "Hola, me interesa desarrollar un sistema web profesional para mi negocio."
);
const WA_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

const checkpoints = [
  "Tu negocio ya esta operando.",
  "Necesitas una web profesional que puedas controlar.",
  "Quieres medir resultados con datos reales.",
  "Prefieres construir bien desde el inicio.",
] as const;

/* ─── Scroll reveal ─── */

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── WhatsApp Icon ─── */

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Check mark ─── */

function CheckMark({ visible, delay }: { visible: boolean; delay: number }) {
  return (
    <div
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-foreground/[0.08] bg-foreground/[0.03] transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.5)",
        transitionDelay: `${delay}s`,
      }}
    >
      <svg
        className="h-2.5 w-2.5 text-foreground/40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}

/* ─── Main ─── */

export default function CTA() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section
      ref={ref}
      id="contacto"
      className="relative w-full overflow-hidden bg-background py-24 selection:bg-foreground/5 sm:py-32 lg:py-44"
    >
      {/* ─── Background: inverted block ─── */}
      <div className="absolute inset-x-0 bottom-0 top-12 sm:top-16 lg:top-24">
        <div
          className="mx-auto h-full max-w-6xl rounded-t-[2rem] bg-foreground sm:rounded-t-[2.5rem] lg:rounded-t-[3rem]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition:
              "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-6">
        <div className="flex flex-col items-center">
          {/* ─── Floating question card ─── */}
          <div
            className="w-full max-w-2xl rounded-2xl border border-foreground/[0.04] bg-background/95 p-8 shadow-2xl shadow-foreground/10 backdrop-blur-xl sm:rounded-3xl sm:p-12 lg:p-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition:
                "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            {/* Label */}
            <div
              className="mb-8 sm:mb-10"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.7s ease 0.4s",
              }}
            >
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/40">
                <span className="h-px w-4 bg-foreground/10" />
                Siguiente paso
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-[clamp(1.75rem,5vw,3rem)] font-medium leading-[1.05] tracking-tight text-foreground"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition:
                  "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
              }}
            >
              {"Es para ti?"}
            </h2>

            {/* Subtitle */}
            <p
              className="mt-4 text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed text-muted-foreground/50 sm:mt-5"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition:
                  "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s",
              }}
            >
              Esto tiene sentido si:
            </p>

            {/* ─── Checklist ─── */}
            <div className="mt-8 flex flex-col gap-0 sm:mt-10">
              {checkpoints.map((text, i) => {
                const delay = 0.55 + i * 0.1;
                return (
                  <div key={i}>
                    {/* Divider */}
                    <div
                      className="h-px w-full origin-left bg-foreground/[0.05]"
                      style={{
                        transform: visible ? "scaleX(1)" : "scaleX(0)",
                        transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay - 0.05}s`,
                      }}
                    />

                    <div
                      className="flex items-center gap-4 py-4 sm:py-5"
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible
                          ? "translateX(0)"
                          : "translateX(-12px)",
                        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                      }}
                    >
                      <CheckMark visible={visible} delay={delay + 0.1} />
                      <span className="text-[clamp(0.85rem,1.6vw,0.95rem)] leading-relaxed text-foreground/70">
                        {text}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Final divider */}
              <div
                className="h-px w-full origin-left bg-foreground/[0.05]"
                style={{
                  transform: visible ? "scaleX(1)" : "scaleX(0)",
                  transition:
                    "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.95s",
                }}
              />
            </div>

            {/* ─── WhatsApp CTA ─── */}
            <div
              className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition:
                  "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s",
              }}
            >
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-foreground text-[15px] font-semibold text-background transition-all duration-500 hover:shadow-2xl hover:shadow-foreground/20 active:scale-[0.97] sm:w-auto sm:px-10"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <WhatsAppIcon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
                  Iniciar conversacion
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px"
                    strokeWidth={2.5}
                  />
                </span>
                {/* Hover sweep */}
                <span className="absolute inset-0 -translate-x-full bg-background/10 transition-transform duration-600 group-hover:translate-x-full" />
              </a>

              <span className="text-center text-xs text-muted-foreground/30 sm:text-left">
                Respuesta en menos de 24h
              </span>
            </div>
          </div>

          {/* ─── Bottom footer accent ─── */}
          <div
            className="mt-16 flex flex-col items-center gap-6 sm:mt-20 lg:mt-24"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 1.2s",
            }}
          >
            {/* Decorative line */}
            <div
              className="h-8 w-px bg-gradient-to-b from-primary-foreground/20 to-transparent"
              style={{
                transform: visible ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "top",
                transition:
                  "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.1s",
              }}
            />

            <p className="text-center text-[11px] font-medium uppercase tracking-[0.25em] text-primary-foreground/25">
              SCAB Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
