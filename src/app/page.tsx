import Hero from './components/sections/Hero';
import Sistem from './components/sections/Sistems';
import Process from './components/sections/Process';
import CTA from './components/sections/CTA';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import Mobile from './components/sections/Mobile';
import EditionTime from './components/sections/EditionTime';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Sistem />
      <EditionTime/>
      <Mobile />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}