import Hero from './components/sections/Hero';
import Sistem from './components/sections/Sistem';
import Process from './components/sections/Process';
import CTA from './components/sections/CTA';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import HeroDos from './components/sections/HeroDos';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroDos/>
      <Hero />
      <Sistem />
      <Process />
      <CTA />
      <Footer />      
    </main>
  );
}