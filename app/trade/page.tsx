import Navbar from '@/components/Navbar';
import WhatWeTradeHero from '@/components/WhatWeTradeHero';
import TradeCategories from '@/components/TradeCategories';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function TradePage() {
  return (
    <main className="min-h-screen bg-brand-dark relative selection:bg-brand-accent selection:text-white">
      <Navbar />
      <WhatWeTradeHero />
      <TradeCategories />
      <Contact 
        heading={
          <>
            READY TO<br />EXPLORE A TRADE?
          </>
        }
        subheading="or partner on infrastructure delivery?"
      />
      <Footer />
    </main>
  );
}
