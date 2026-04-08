import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ComplianceHero from '@/components/ComplianceHero';
import ComplianceContent from '@/components/ComplianceContent';
import Contact from '@/components/Contact';

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <ComplianceHero />
      <ComplianceContent />
      <Contact 
        heading={<>READY TO<br />EXPLORE A TRADE?</>}
        subheading="Or start a conversation around energy infrastructure and logistics?"
      />
      <Footer />
    </main>
  );
}
