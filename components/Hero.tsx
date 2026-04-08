'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Split heading into two lines for animation
    const headingLines = headingRef.current?.children ? Array.from(headingRef.current.children) : [];

    tl.fromTo(headingLines,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.3 }
    )
    .fromTo(subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(buttonsRef.current?.children ? Array.from(buttonsRef.current.children) : [],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      "-=0.6"
    )
    .fromTo(trustedRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.4"
    );
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col pt-32 pb-12 overflow-hidden">
      {/* Background Image & Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-pan"
        style={{ 
          backgroundImage: 'url("https://i.ibb.co/fL6KbWc/Oil-1.webp")',
          backgroundPosition: 'center 60%'
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-transparent"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-brand-dark/30"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center mt-12">
        <h1 ref={headingRef} className="text-white font-bold tracking-tight uppercase break-words">
          <span className="block text-[43.75px] sm:text-6xl md:text-[5.5rem] lg:text-[7.5rem] leading-[1.05] overflow-hidden">
            <span className="block">Global</span>
          </span>
          <span className="block text-[43.75px] sm:text-6xl md:text-[5.5rem] lg:text-[7.5rem] leading-[1.05] overflow-hidden">
            <span className="block">Oil & Gas Trading</span>
          </span>
        </h1>
        
        <p ref={subRef} className="text-white/90 text-xl md:text-2xl font-light mt-6 max-w-3xl">
          Connecting buyers and sellers across the energy supply chain.
        </p>
        
        <div ref={buttonsRef} className="flex flex-wrap items-center gap-4 mt-10">
          <button className="bg-brand-primary hover:bg-brand-dark text-white px-8 py-3.5 rounded-full text-lg font-medium transition-all duration-300 shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40">
            Learn More
          </button>
          <button className="bg-brand-accent hover:bg-[#e04d1f] text-white px-8 py-3.5 rounded-full text-lg font-medium flex items-center gap-2 transition-all duration-300 shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 group">
            Discuss a Trade 
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Trusted By Section */}
      <div ref={trustedRef} className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 mt-auto pt-20">
        <h3 className="text-white text-xl md:text-2xl font-medium mb-8">
          Trusted by Global Energy Leaders
        </h3>
        
        {/* Logos Container */}
        <div className="flex flex-wrap items-center gap-8 md:gap-16 lg:gap-20 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          
          {/* BP Mock Logo */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold mb-1">bp</span>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white fill-current">
              <path d="M12 1L14.5 8.5L22 11L14.5 13.5L12 21L9.5 13.5L2 11L9.5 8.5L12 1Z" />
              <circle cx="12" cy="11" r="3" fill="#1D243B" />
            </svg>
          </div>

          {/* TotalEnergies Mock Logo */}
          <div className="flex flex-col items-center justify-center">
            <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white fill-current mb-1">
              <path d="M10 16C10 10 16 6 24 6C32 6 38 10 38 16C38 22 32 26 24 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="24" cy="16" r="4" />
            </svg>
            <span className="text-white text-[10px] font-bold tracking-wider">TotalEnergies</span>
          </div>

          {/* Shell Mock Logo */}
          <div className="flex flex-col items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white fill-current mb-1">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 2V22M6 5L18 19M18 5L6 19" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span className="text-white text-[11px] font-bold tracking-wide uppercase">Shell</span>
          </div>

          {/* Vitel Mock Logo */}
          <div className="flex flex-col items-start justify-center">
            <span className="text-white text-2xl font-black tracking-tighter uppercase leading-none">VITEL</span>
            <span className="text-white text-[10px] font-medium tracking-widest uppercase ml-1">energía</span>
          </div>

          {/* ExxonMobil Mock Logo */}
          <div className="flex flex-col items-start justify-center">
            <span className="text-white text-xl font-bold tracking-tight leading-none">ExxonMobil</span>
            <span className="text-white text-xs font-serif italic leading-none mt-1 ml-6">Chemical</span>
          </div>

          {/* Pertamina Mock Logo */}
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white fill-current">
              <path d="M2 20L12 4L22 20H2Z" />
              <path d="M12 10L17 18H7L12 10Z" fill="#1D243B" />
            </svg>
            <span className="text-white text-sm font-bold tracking-wider uppercase">Pertamina</span>
          </div>

          {/* Chevron Mock Logo */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-white text-sm font-bold tracking-wide mb-1">Chevron</span>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white fill-current">
              <path d="M12 15.5L3 8.5L5 6L12 11.5L19 6L21 8.5L12 15.5Z" />
              <path d="M12 22.5L3 15.5L5 13L12 18.5L19 13L21 15.5L12 22.5Z" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
