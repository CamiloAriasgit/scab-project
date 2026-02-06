// src/components/ui/Button.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, className }) => {
  return (
    <Link 
      href={href} 
      className={`
        flex items-center justify-center 
        px-8 py-4 rounded-full
        bg-white text-black 
        text-sm font-semibold tracking-tight
        hover:bg-indigo-500 hover:text-white
        active:scale-95
        transition-all duration-300 ease-out
        shadow-[0_0_20px_rgba(255,255,255,0.1)]
        ${className || ''}
      `}
    >
      {children}
    </Link>
  );
};

export default Button;