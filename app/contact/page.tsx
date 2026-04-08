import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import Contact from '@/components/Contact';
import ContactLocations from '@/components/ContactLocations';
import ContactFAQ from '@/components/ContactFAQ';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <ContactHero />
      <ContactLocations />
      <Contact />
      <ContactFAQ />
      <Footer />
    </main>
  );
}
