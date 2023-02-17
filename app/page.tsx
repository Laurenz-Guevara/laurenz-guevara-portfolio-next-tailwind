import Hero from '@/components/Hero';
import Cliffcrafts from '@/components/Cliffcrafts';
import VentusVerba from '@/components/VentusVerba';
import Repetise from '@/components/Repetise';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-10 bg-palette-200"></div>
      <Cliffcrafts />
      <div className="h-10 bg-palette-700"></div>
      <Repetise />
      <div className="h-10 bg-palette-100"></div>
      <VentusVerba />
    </>
  );
}
