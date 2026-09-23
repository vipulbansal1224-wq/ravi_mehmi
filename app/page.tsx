import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import NetInfoSection from '@/components/NetInfoSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { raviMehmiData } from '@/data/ravi_data';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark text-slate-100 flex flex-col justify-between">
      <Navbar />
      <div>
        <HeroSection profile={raviMehmiData} />
        <StatsSection stats={raviMehmiData.stats} />
        <AboutSection profile={raviMehmiData} />
        <ServicesSection services={raviMehmiData.services} />
        <PortfolioSection portfolio={raviMehmiData.portfolio} />
        <NetInfoSection />
        <ContactSection />
      </div>
      <Footer profile={raviMehmiData} />
    </main>
  );
}
