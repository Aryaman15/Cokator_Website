import HeroSection from '../components/home/HeroSection';
import ClientsMarqueeSection from '../components/home/ClientsMarqueeSection';
import HowWeWorkTimeline from '../components/home/HowWeWorkTimeline';
import ServicesOverviewSection from '../components/home/ServicesOverviewSection';
import CallToActionSection from '../components/home/CallToActionSection';

const Home = () => {
  return (
    <div className="space-y-12 py-8 sm:py-10 lg:py-12">
      <HeroSection />
      <ClientsMarqueeSection />
      <HowWeWorkTimeline />
      <ServicesOverviewSection />
      <CallToActionSection />
    </div>
  );
};

export default Home;
