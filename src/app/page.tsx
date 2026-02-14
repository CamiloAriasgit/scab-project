// src/app/page.tsx
import Hero from './components/sections/Heroo'; // Importa tu componente Hero
import Philosophy from './components/sections/Philosophy';
import Section3 from './components/sections/Section3';
import Process from './components/sections/Process';
import CTA from './components/sections/CTA';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Philosophy />
      <Process />
      <CTA />
      <Footer />
      {/* Aquí puedes añadir más secciones de tu página */}
      
    </main>
  );
}