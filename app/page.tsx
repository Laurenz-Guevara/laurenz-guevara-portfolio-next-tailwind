import Hero from '@/components/Hero';
import Cliffcrafts from '@/components/Cliffcrafts';
import VentusVerba from '@/components/VentusVerba';
import Repetise from '@/components/Repetise';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="cliffcrafts" className="h-10 bg-palette-200"></div>
      <Cliffcrafts />
      <div id="repetise" className="h-10 bg-palette-700"></div>
      <Repetise />
      <div id="ventus-verba" className="h-10 bg-palette-100"></div>
      <VentusVerba />
      <Footer />
    </>
  );
}
