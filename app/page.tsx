import Hero from '@/components/Hero';
import Cliffcrafts from '@/components/Cliffcrafts';
import VentusVerba from '@/components/VentusVerba';
import Repetise from '@/components/Repetise';
import Footer from '@/components/Footer';
import LaurenzGuevara from '@/components/LaurenzGuevara';
import WorkExperience from '@/components/WorkExperience';

import { client } from '../lib/contentful/client';
import PortfolioSection from '@/components/PortfolioSection';

export default async function Home() {
  const experience = await getExperience();
  const portfolios = await getPortfolio();

  return (
    <>
      <Hero />
      <div id="Experience" className="h-10 bg-palette-1000"></div>
      <WorkExperience experience={experience} />
      <PortfolioSection portfolios={portfolios} />
      <Footer />
    </>
  );

  async function getExperience() {
    const response = await client.getEntries({ content_type: 'post' });
    return response.items;
  }

  async function getPortfolio() {
    const response = await client.getEntries({
      content_type: 'portfolioPreview',
    });
    return response.items;
  }
}
