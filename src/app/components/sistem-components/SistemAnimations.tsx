// src/app/components/sections/sistem-components/SistemAnimations.tsx
"use client";
import { useEffect, useState } from "react";

export function TextTypingAnimation() {
  const textOptions = ["Edita tu web", "Optimiza SEO", "Actualiza ofertas"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = textOptions[currentTextIndex];
    
    const speed = isDeleting ? 60 : 100;

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText(prev => prev.substring(0, prev.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % textOptions.length);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length === fullText.length) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      }
      timer = setTimeout(handleTyping, speed);
    };

    timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <div className="relative h-28 w-full flex items-center justify-center p-4">
      <div className="relative h-full w-full max-w-xs overflow-hidden rounded-lg bg-white/5 border border-white/10 shadow-inner flex items-center justify-center p-4">
        <span className="text-xl font-bold text-indigo-400 whitespace-nowrap">
          {displayedText}
          <span className="animate-pulse inline-block w-[2px] h-6 bg-indigo-400 ml-1"></span>
        </span>
      </div>
    </div>
  );
}

export function ImageStackAnimation({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-28 w-full flex items-center justify-center p-4">
      <div className="relative h-full w-full max-w-xs flex items-center justify-center">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute h-24 w-40 rounded-lg shadow-md transition-all duration-700 ease-in-out
              ${i === currentIndex ? "z-20 scale-105 rotate-0" : 
                i === (currentIndex + 1) % images.length ? "z-10 scale-95 rotate-[-5deg] -translate-x-1/4 opacity-70" :
                "opacity-0"}`}
            style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        ))}
      </div>
    </div>
  );
}

export function DynamicGridAnimation() {
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setIsAdding(prev => !prev), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-28 w-full flex items-center justify-center p-4">
      <div className="relative h-full w-full max-w-xs flex flex-wrap items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 p-2">
        {[1, 2, 3, 4].map((block, i) => (
          <div
            key={block}
            className={`h-10 rounded-md bg-indigo-500 transition-all duration-700 
              ${i === 3 && !isAdding ? "opacity-0 scale-0 w-0" : "opacity-100 scale-100 w-16"}`}
          />
        ))}
      </div>
    </div>
  );
}