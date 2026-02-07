// src/app/page.tsx
import Hero from './components/sections/Heroo'; // Importa tu componente Hero
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';

export default function Home() {
  return (
    <main>
      <Hero />
      <Section2 />
      <Section3 />
      {/* Aquí puedes añadir más secciones de tu página */}
      
    </main>
  );
}