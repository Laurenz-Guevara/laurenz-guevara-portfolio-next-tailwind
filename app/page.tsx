import Hero from '@/components/Hero';
import Cliffcrafts from '@/components/Cliffcrafts';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-10 bg-palette-200"></div>
      <Cliffcrafts />
      <div className="h-10 bg-palette-100"></div>
    </>
  );
}
