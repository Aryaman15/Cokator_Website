import HeroSection from '../components/home/HeroSection';
import ClientsMarqueeSection from '../components/home/ClientsMarqueeSection';
import WhatWeDoFlipGrid from '../components/home/WhatWeDoFlipGrid';
import ProcessTimeline from '../components/home/ProcessTimeline';
import CompletePortfolioSection from '../components/home/CompletePortfolioSection';
import StatsStrip from '../components/home/StatsStrip';
import CallToActionStrip from '../components/home/CallToActionStrip';
import SectionHeading from '../components/shared/SectionHeading';

const Home = () => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <ClientsMarqueeSection />
      <SectionHeading title="What We Do" subtitle="End-to-end production for print and digital titles" />
      <WhatWeDoFlipGrid />
      <ProcessTimeline />
      <CompletePortfolioSection />
      <StatsStrip />
      <CallToActionStrip />
    </div>
  );
};

export default Home;
