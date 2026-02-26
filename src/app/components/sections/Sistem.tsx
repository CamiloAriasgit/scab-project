"use client";

import { useEffect, useRef, useState } from "react";
// Ya no necesitamos los iconos de lucide-react para las tarjetas con animaciones,
// pero los mantengo si aún los usas en otro lugar o como fallback.
import { Pencil, Replace, Plus } from "lucide-react";

/* ─── Data ─── */

const items = [
  {
    index: "01",
    label: "Edita tu contenido en segundos",
    description:
      "Actualiza títulos, textos y secciones desde tu panel privado, sin conocimientos técnicos.",
    animationType: "text-typing", // Identificador para el tipo de animación
  },
  {
    index: "02",
    label: "Reemplaza imágenes al instante",
    description:
      "Mantén tu sitio actualizado cambiando fotos y gráficos cuando lo necesites.",
    animationType: "image-stack", // Identificador para el tipo de animación
    // Array de URLs de imágenes para la animación de stack
    images: [
      "https://www.wsupercars.com/thumbnails/McLaren/2011-McLaren-MP4-12C-001.jpg", // ¡Reemplaza con tus URLs reales!
      "https://th.bing.com/th/id/R.46d2da2e0a566b1f95f9af5c3369da62?rik=iTHNVRL4ZDEfzQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-j7Z7A3j6qfM%2fUkg5wQHFN7I%2fAAAAAAAABK4%2fYGoEUNcBIuU%2fs1600%2fimagenes%2ben%2bHD%2b(171).jpg&ehk=uVHC%2bAVv0zFoDHJP%2bVU3WLerbBC8CbclTiWMsI4%2f3RQ%3d&risl=&pid=ImgRaw&r=0",
      "https://wallpaperaccess.com/full/1749489.jpg",
    ],
  },
  {
    index: "03",
    label: "Amplía tu contenido sin romper el diseño",
    description:
      "Añade nuevos servicios, preguntas o publicaciones dentro de una estructura pensada para mantener coherencia y orden.",
    animationType: "dynamic-grid", // Identificador para el tipo de animación
  },
];

/* ─── Scroll reveal hook ─── */

function useReveal(threshold = 0.15) {
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

/* ─── Animaciones específicas para cada tarjeta ─── */

// Animación de Texto Escribiéndose y Reemplazándose
function TextTypingAnimation() {
  const textOptions = ["Edita tu web", "Actualiza ofertas", "Desde tu móvil"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // ms por carácter
  const deletingSpeed = 60; // ms por carácter
  const pauseBeforeDelete = 1500; // ms de pausa antes de borrar
  const pauseBeforeType = 500; // ms de pausa antes de escribir

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const fullText = textOptions[currentTextIndex];
      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % textOptions.length);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length === fullText.length) {
          timer = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
          return; // Detener el typing hasta que empiece la eliminación
        }
      }
      timer = setTimeout(
        handleTyping,
        isDeleting ? deletingSpeed : typingSpeed
      );
    };

    timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, textOptions]);

  return (
    <div className="relative h-28 w-full flex items-center justify-center p-4">
      <div className="relative h-full w-full max-w-xs overflow-hidden rounded-lg bg-white/5 shadow-xl flex items-center justify-center p-4">
        <span className="text-xl font-bold text-foreground/50 whitespace-nowrap overflow-hidden">
          {displayedText}
          <span className="animate-blink inline-block w-[2px] h-6 bg-foreground ml-1"></span>
        </span>
      </div>
    </div>
  );
}

// Animación de Stack de Imágenes (tipo carrusel de cartas)
function ImageStackAnimation({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-28 w-full flex items-center justify-center p-4">
      <div className="relative h-full w-full max-w-xs flex items-center justify-center">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute h-24 w-40 sm:h-28 sm:w-48 rounded-lg shadow-md overflow-hidden bg-gray-200 transition-all duration-700 ease-in-out
              ${
                i === currentIndex
                  ? "z-20 scale-105 rotate-0"
                  : i === (currentIndex + 1) % images.length
                  ? "z-10 scale-95 rotate-[-5deg] translate-x-[-20%] opacity-70"
                  : i === (currentIndex + 2) % images.length
                  ? "z-0 scale-90 rotate-[5deg] translate-x-[20%] opacity-50"
                  : "opacity-0" // Oculta el resto
              }
            `}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>
    </div>
  );
}


// Animación de Grid Dinámico (Crecimiento de bloques)
function DynamicGridAnimation() {
  const [blocks, setBlocks] = useState([1, 2, 3]); // Bloques iniciales
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isAdding) {
      timer = setTimeout(() => {
        setIsAdding(true);
        setBlocks([1, 2, 3, 4]);
      }, 2000); // Espera 2 segundos antes de añadir
    } else {
      timer = setTimeout(() => {
        setIsAdding(false);
        setBlocks([1, 2, 3]); // Vuelve al estado inicial
      }, 3000); // Muestra el nuevo bloque por 3 segundos
    }
    return () => clearTimeout(timer);
  }, [isAdding]);

  return (
    <div className="relative h-28 w-full flex items-center justify-center p-4">
      <div className="relative h-full w-full max-w-xs flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 p-2">
        {blocks.map((block, i) => (
          <div
            key={block}
            className={`h-10 rounded-md bg-indigo-500 transition-all duration-700 ease-out
              ${
                i === 0 || i === 3 ? "w-10" : "w-16" // Simula diferentes tamaños de bloque
              }
              ${
                isAdding && i === 3 // Si es el bloque nuevo y estamos añadiendo
                  ? "opacity-100 scale-100"
                  : isAdding // Si estamos en el estado de añadir (y no es el nuevo bloque)
                  ? "opacity-100 scale-100"
                  : !isAdding && i === 3 // Si estamos volviendo al estado inicial y es el bloque extra
                  ? "opacity-0 scale-0"
                  : "opacity-100 scale-100" // El resto de bloques normales
              }
            `}
            style={{
                // Ajuste para el cuarto bloque para que "aparezca" sin romper el layout en la primera fila
                gridColumn: i === 3 ? 'span 2' : 'auto',
                width: i === 3 && isAdding ? 'calc(50% - 4px)' : (i === 0 || i === 3 ? '40%' : '58%'), // Ajuste de ancho para simular la redistribución
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}


/* ─── Floating Card ─── */

function FloatingCard({
  item,
  visible,
  delay,
}: {
  item: (typeof items)[number];
  visible: boolean;
  delay: number;
}) {
  
  // 1. Definimos una función de renderizado interna para evitar el conflicto de tipos
  const renderAnimation = () => {
    switch (item.animationType) {
      case "text-typing":
        return <TextTypingAnimation />;
      case "image-stack":
        // Aquí TypeScript sabe que item tiene images si es "image-stack"
        return <ImageStackAnimation images={item.images || []} />;
      case "dynamic-grid":
        return <DynamicGridAnimation />;
      default:
        return (
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-500/10">
            {item.animationType === "text-typing" && <Pencil className="h-[18px] w-[18px] text-indigo-500" />}
            {item.animationType === "image-stack" && <Replace className="h-[18px] w-[18px] text-indigo-500" />}
            {item.animationType === "dynamic-grid" && <Plus className="h-[18px] w-[18px] text-indigo-500" />}
          </div>
        );
    }
  };

  return (
    <div
      className="group relative flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white p-6 backdrop-blur-md transition-all duration-700 sm:p-8 lg:hover:-translate-y-1 lg:hover:border-foreground/[0.08] lg:hover:shadow-xl lg:hover:shadow-foreground/[0.03]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {/* Zona de la animación */}
      <div className="flex h-28 w-full items-center justify-center">
        {renderAnimation()}
      </div>

      {/* Label */}
      <h3 className="text-[clamp(1.1rem,2.5vw,1.35rem)] font-medium leading-tight tracking-tight text-center text-foreground/80">
        {item.label}
      </h3>

      {/* Description */}
      <p className="text-[clamp(0.825rem,1.5vw,0.9rem)] text-center leading-relaxed text-[#5E6472]/70 transition-colors duration-500 lg:group-hover:text-[#5E6472]/80">
        {item.description}
      </p>
    </div>
  );
}

/* ─── Main ─── */

export default function Sistem() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section
      ref={ref}
      id="sistema"
      className="relative w-full overflow-hidden bg-background py-20 selection:bg-foreground/5 sm:py-28 lg:py-40"
    >
      {/* Subtle ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-[0.025]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--foreground)), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-6">
        {/* ─── Header ─── */}
        <div className="flex flex-col items-center gap-5 pb-10 text-center sm:pb-20 lg:pb-20">
          <h2
            className="text-balance text-[clamp(1.75rem,5vw,3.25rem)] font-medium leading-[1.05] tracking-tight text-foreground/90"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
            }}
          >
            No es solo una web.<br />Es independencia.
          </h2>
        </div>

        {/* ─── Cards grid ─── */}
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-5">
          {items.map((item, i) => (
            <FloatingCard
              key={item.index}
              item={item}
              visible={visible}
              delay={0.35 + i * 0.12}
            />
          ))}
        </div>

        {/* ─── Closing ─── */}
        <div
          className="flex flex-col items-center gap-4 pt-14 text-center sm:pt-20 lg:pt-24"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
          }}
        >
          <p className="max-w-sm text-sm leading-relaxed text-foreground/70 sm:text-[15px]">
            Un sistema de edición privado, diseñado para que tu web evolucione contigo.
          </p>
        </div>
      </div>
    </section>
  );
}