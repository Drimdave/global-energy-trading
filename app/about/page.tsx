import Navbar from '@/components/Navbar';
import AboutHero from '@/components/AboutHero';
import AboutMissionVision from '@/components/AboutMissionVision';
import Leadership from '@/components/Leadership';
import TrustStandards from '@/components/TrustStandards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-dark relative selection:bg-brand-accent selection:text-white">
      <Navbar />
      <AboutHero />
      <AboutMissionVision />
      <Leadership />
      <TrustStandards />
      <Contact 
        heading={
          <>
            Have<br />questions?
          </>
        }
        subheading="Or want to explore a potential partnership?"
      />
      <Footer />
    </main>
  );
}
