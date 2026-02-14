// src/app/page.tsx
import Hero from './components/sections/Heroo'; // Importa tu componente Hero
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';
import Section4 from './components/sections/Section4';
import Section5 from './components/sections/Section5';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Section2 />
      <Section4 />
      <Section5 />
      <Footer />
      {/* Aquí puedes añadir más secciones de tu página */}
      
    </main>
  );
}