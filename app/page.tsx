import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatWeTrade from '@/components/WhatWeTrade';
import WhoWeAre from '@/components/WhoWeAre';
import Leadership from '@/components/Leadership';
import TrustStandards from '@/components/TrustStandards';
import TrustedPartners from '@/components/TrustedPartners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark relative selection:bg-brand-accent selection:text-white">
      <Navbar />
      <Hero />
      <WhatWeTrade />
      <WhoWeAre />
      <Leadership />
      <TrustStandards />
      <TrustedPartners />
      <Contact />
      <Footer />
    </main>
  );
}
