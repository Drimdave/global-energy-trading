import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InsightsHero from '@/components/InsightsHero';
import FeaturedInsights from '@/components/FeaturedInsights';
import LatestInsights from '@/components/LatestInsights';
import Contact from '@/components/Contact';

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <InsightsHero />
      <FeaturedInsights />
      <LatestInsights />
      <Contact 
        heading={<>READY TO<br />EXPLORE A TRADE?</>}
        subheading="Or start a conversation around energy infrastructure and logistics?"
      />
      <Footer />
    </main>
  );
}
