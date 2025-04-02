import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import HowItWorks from '@/components/HowItWorks';
import ProductSection from '@/components/ProductSection';
import Testimonials from '@/components/Testimonials';
import UsageInstructions from '@/components/UsageInstructions';
import MoneyBackGuarantee from '@/components/MoneyBackGuarantee';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      
      <div className="container mx-auto px-4 py-6">
        <Header />
        <Hero />
        <TrustBadges />
        <HowItWorks />
        <ProductSection />
        <Testimonials />
        <UsageInstructions />
        <MoneyBackGuarantee />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
