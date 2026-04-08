'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// We use inline SVGs and stylized text to represent the monochrome partner logos
const partners = [
  {
    name: 'BP',
    logo: (
      <div className="flex flex-col items-center justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] font-bold leading-none">bp</span>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L22.5 12.5L35 5L27.5 17.5L40 20L27.5 22.5L35 35L22.5 27.5L20 40L17.5 27.5L5 35L12.5 22.5L0 20L12.5 17.5L5 5L17.5 12.5L20 0Z" />
        </svg>
      </div>
    )
  },
  {
    name: 'TotalEnergies',
    logo: (
      <div className="flex flex-col items-center justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <svg width="50" height="30" viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15C10 15 20 5 30 15C40 25 45 15 45 15" />
          <path d="M5 5H25" />
        </svg>
        <span className="text-[9px] font-bold tracking-wider">TotalEnergies</span>
      </div>
    )
  },
  {
    name: 'Shell',
    logo: (
      <div className="flex flex-col items-center justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 34C18 34 32 30 32 18C32 8 26 2 18 2C10 2 4 8 4 18C4 30 18 34 18 34Z" />
          <path d="M18 34V18" />
          <path d="M18 34C18 34 26 30 26 18C26 12 22 6 18 2" />
          <path d="M18 34C18 34 10 30 10 18C10 12 14 6 18 2" />
        </svg>
        <span className="text-[10px] font-bold tracking-widest uppercase">Shell</span>
      </div>
    )
  },
  {
    name: 'Vitel',
    logo: (
      <div className="flex flex-col items-end justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
        <span className="text-2xl font-black tracking-tighter leading-none">VITEL</span>
        <span className="text-[10px] font-medium tracking-widest leading-none mt-1">energía</span>
      </div>
    )
  },
  {
    name: 'ExxonMobil',
    logo: (
      <div className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
        <span className="text-xl font-bold tracking-tight leading-none">ExxonMobil</span>
        <span className="text-[11px] font-serif italic tracking-wide leading-none mt-1 ml-12">Chemical</span>
      </div>
    )
  },
  {
    name: 'Pertamina',
    logo: (
      <div className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0L30 15L15 30L0 15L15 0Z" />
          <path d="M15 5L25 15L15 25L5 15L15 5Z" fill="#3B4462" />
        </svg>
        <span className="text-sm font-bold tracking-widest uppercase mt-1">Pertamina</span>
      </div>
    )
  },
  {
    name: 'Chevron',
    logo: (
      <div className="flex flex-col items-center justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <span className="text-[11px] font-bold tracking-widest uppercase">Chevron</span>
        <svg width="36" height="32" viewBox="0 0 36 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 12L36 0V8L18 20L0 8V0L18 12Z" />
          <path d="M18 24L36 12V20L18 32L0 20V12L18 24Z" />
        </svg>
      </div>
    )
  }
];

export default function TrustedPartners() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in header
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      // Infinite Marquee Animation — paused when off-screen
      if (trackRef.current) {
        const marquee = gsap.to(trackRef.current, {
          xPercent: -50,
          ease: 'none',
          duration: 30,
          repeat: -1,
          paused: true,
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          onToggle: (self) => {
            if (self.isActive) {
              marquee.play();
            } else {
              marquee.pause();
            }
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-brand-secondary overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
        {/* Header */}
        <div ref={headerRef} className="text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
            Trusted by<br />Global Energy Leaders
          </h2>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-brand-secondary to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-brand-secondary to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Content */}
        <div ref={trackRef} className="flex items-center w-max text-white">
          {/* First Set */}
          <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
            {partners.map((partner, index) => (
              <div key={`set1-${index}`} className="flex items-center justify-center min-w-[120px]">
                {partner.logo}
              </div>
            ))}
          </div>
          {/* Second Set (Duplicated for seamless loop) */}
          <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
            {partners.map((partner, index) => (
              <div key={`set2-${index}`} className="flex items-center justify-center min-w-[120px]">
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
