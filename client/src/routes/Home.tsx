import HeroSection from '../components/home/HeroSection';
import ClientsMarqueeSection from '../components/home/ClientsMarqueeSection';
import HowWeWorkSection from '../components/home/HowWeWorkSection';
import ServicesOverviewSection from '../components/home/ServicesOverviewSection';
import CallToActionSection from '../components/home/CallToActionSection';

const Home = () => {
  return (
    <div className="space-y-12 py-8 sm:py-10 lg:py-12">
      <HeroSection />
      <ClientsMarqueeSection />
      <HowWeWorkSection />
      <ServicesOverviewSection />
      <CallToActionSection />
    </div>
  );
};

export default Home;
