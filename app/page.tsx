import Hero from '@/components/Hero';
import Cliffcrafts from '@/components/Cliffcrafts';
import VentusVerba from '@/components/VentusVerba';
import Repetise from '@/components/Repetise';
import Footer from '@/components/Footer';
import LaurenzGuevara from '@/components/LaurenzGuevara';
import WorkExperience from '@/components/WorkExperience';

import { client } from '../lib/contentful/client';

export default async function Home() {
  const experience = await getExperience();

  return (
    <>
      <Hero />
      <div id="experience" className="h-10 bg-palette-1000"></div>
      <WorkExperience experience={experience} />
      <div id="cliffcrafts" className="h-10 bg-palette-200"></div>
      <Cliffcrafts />
      <div id="repetise" className="h-10 bg-palette-700"></div>
      <Repetise />
      <div id="ventus-verba" className="h-10 bg-palette-100"></div>
      <VentusVerba />
      <div id="laurenz-guevara" className="h-10 bg-palette-300"></div>
      <LaurenzGuevara />
      <Footer />
    </>
  );

  async function getExperience() {
    const response = await client.getEntries({ content_type: 'post' });
    return response.items;
  }
}
