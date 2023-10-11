import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import WorkExperience from '@/components/WorkExperience';

import { client } from '../lib/contentful/client';
import PortfolioSection from '@/components/PortfolioSection';

export default async function Home() {
  const experience = await getExperience();
  const portfolios = await getPortfolio();

  return (
    <>
      <Hero />
      <div id="Experience" className="h-10 bg-black"></div>
      <WorkExperience experience={experience[0]} color={'#000'} />
      <div id="Experience" className="h-10 bg-palette-1100"></div>
      <WorkExperience experience={experience[1]} color={'#2BCD5A'} />
      <div id="Experience" className="h-10 bg-palette-1000"></div>
      <WorkExperience experience={experience[2]} color={'#FF0044'} />
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
