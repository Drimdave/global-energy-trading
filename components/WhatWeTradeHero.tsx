'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function WhatWeTradeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Main text animation
      tl.fromTo(textRef.current?.children ? Array.from(textRef.current.children) : [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.2 }
      )
      // Bottom text animation
      .fromTo(bottomTextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://i.ibb.co/s9s137tB/ocean-tile-01.jpg"
          alt="Cargo ship and containers at port"
          fill
          priority
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent z-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div ref={textRef} className="max-w-2xl">
          <h1 className="text-[43.75px] sm:text-6xl md:text-8xl lg:text-[100px] font-bold text-white leading-[0.95] tracking-tight mb-6 uppercase break-words">
            What<br />We Trade
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-10 max-w-xl">
            Driving energy trade through trust, transparency, and global standards.
          </p>
          <div>
            <button className="group flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-[#E04D1E] transition-colors duration-300 shadow-[0_8px_20px_rgba(250,93,43,0.25)] hover:shadow-[0_12px_25px_rgba(250,93,43,0.35)]">
              Discuss a Trade
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-0 left-0 w-full z-20 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div ref={bottomTextRef} className="max-w-4xl">
            <p className="text-base md:text-lg text-white/90 leading-relaxed font-light">
              Our core focus is delivering energy products with efficiency, reliability, and trust. We specialize in high-demand commodities: crude oil, natural gas, refined fuels and the infrastructure that powers them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
