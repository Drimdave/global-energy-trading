'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, RefreshCw, Handshake, ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const standards = [
  {
    title: 'Licensed & Registered',
    description: 'We operate under verified government and international trading licenses, ensuring compliance in every jurisdiction.',
    icon: FileText,
  },
  {
    title: 'Global Trade Compliance',
    description: 'Our processes meet stringent regulatory standards, including KYC/AML and cross-border trading laws.',
    icon: RefreshCw,
  },
  {
    title: 'Strategic Partnerships',
    description: 'We collaborate with vetted logistics, infrastructure, and trading partners to expand reach and reliability.',
    icon: Handshake,
  }
];

export default function TrustStandards() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Header animation
      tl.fromTo(headerRef.current?.children ? Array.from(headerRef.current.children) : [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
      )
      // Cards animation
      .fromTo(cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
        "-=0.4"
      )
      // Button animation
      .fromTo(btnRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-brand-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1]">
            Building Trust<br />Through Standards
          </h2>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {standards.map((standard, index) => {
            const Icon = standard.icon;
            return (
              <div 
                key={index} 
                className="bg-brand-secondary/30 border border-white/5 p-10 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] transition-shadow duration-500 flex flex-col h-full"
              >
                {/* Icon Box */}
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white mb-8">
                  <Icon size={24} strokeWidth={2} />
                </div>
                
                {/* Text Content */}
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {standard.title}
                </h3>
                <p className="text-[15px] text-white/70 leading-relaxed">
                  {standard.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div ref={btnRef} className="flex justify-center">
          <button className="group flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-[#E04D1E] transition-colors duration-300 shadow-[0_8px_20px_rgba(250,93,43,0.25)] hover:shadow-[0_12px_25px_rgba(250,93,43,0.35)]">
            Discuss a Trade
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
