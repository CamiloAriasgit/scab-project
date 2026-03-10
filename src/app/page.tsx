import Hero from './components/sections/HeroDos';
import Sistem from './components/sections/Sistems';
import Process from './components/sections/Process';
import CTA from './components/sections/CTA';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import Mobile from './components/sections/Mobile';
import EditionTime from './components/sections/EditionTime';
import Fuction from './components/sections/Fuction';
import Working from './components/sections/Working';
import Pasos from './components/sections/Pasos';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Sistem />
      <EditionTime/>
      <Mobile />
      <Fuction/>
      <Pasos/>
      <Working />
    </main>
  );
}