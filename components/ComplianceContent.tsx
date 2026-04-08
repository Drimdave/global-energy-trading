'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const complianceItems = [
  {
    title: "Our Commitment to Compliance",
    subtitle: "Global Standards. Local Integrity.",
    description: "Our operations comply with the highest levels of regulatory oversight across every region we serve. From sanctions screening to transaction due diligence, we embed compliance into every stage of trade—protecting your reputation, assets, and competitive edge."
  },
  {
    title: "Licensing & Registration",
    subtitle: "Licensed to Operate, Empowered to Trade",
    description: "We hold verified trading licenses and regulatory approvals across major jurisdictions, including the U.S., EU, MENA, and Asia-Pacific. These registrations reflect our credibility and enable us to facilitate cross-border energy deals with speed and confidence."
  },
  {
    title: "Risk Disclosure",
    subtitle: "We Help You Trade with Eyes Wide Open",
    description: "Commodity markets carry risk—price volatility, supply disruptions, and geopolitical shifts. We believe in proactive transparency, ensuring every client is informed, protected, and positioned for success in changing conditions."
  },
  {
    title: "Ethical Trade Initiative",
    subtitle: "Built on Ethics. Backed by Accountability.",
    description: "Our commitment to sustainable and ethical energy trade is more than a statement—it's a standard. We support global frameworks like the UN Global Compact and industry watchdogs that prioritize fair practices, anti-corruption, and social responsibility."
  }
];

export default function ComplianceContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(listRef.current?.children ? Array.from(listRef.current.children) : [],
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#F7F8FA]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div ref={listRef} className="flex flex-col">
          {complianceItems.map((item, index) => (
            <div 
              key={index} 
              className={`py-12 ${index !== complianceItems.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A24] mb-4 tracking-tight">
                {item.title}
              </h2>
              <h3 className="text-lg font-medium text-[#1A1A24] mb-2">
                {item.subtitle}
              </h3>
              <p className="text-[#4A4A54] leading-relaxed max-w-5xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
