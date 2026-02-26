// src/app/components/sections/sistem-components/SistemCard.tsx
import { Pencil, Replace, Plus } from "lucide-react";
import { TextTypingAnimation, ImageStackAnimation, DynamicGridAnimation } from "./SistemAnimations";

export interface SistemItem {
  index: string;
  label: string;
  description: string;
  animationType: "text-typing" | "image-stack" | "dynamic-grid";
  images?: string[];
}

export function SistemCard({ item, visible, delay }: { item: SistemItem; visible: boolean; delay: number }) {
  return (
    <div
      className="group relative flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-background/60 p-6 backdrop-blur-md transition-all duration-700 shadow-xl lg:hover:-translate-y-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      <div className="flex h-28 w-full items-center justify-center">
        {item.animationType === "text-typing" && <TextTypingAnimation />}
        {item.animationType === "image-stack" && <ImageStackAnimation images={item.images || []} />}
        {item.animationType === "dynamic-grid" && <DynamicGridAnimation />}
      </div>

      <h3 className="text-xl font-medium text-center text-foreground/80">{item.label}</h3>
      <p className="text-sm text-center leading-relaxed text-[#5E6472]/70">{item.description}</p>
    </div>
  );
}