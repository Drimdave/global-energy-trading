'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const bottomTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial state
    gsap.set([headingRef.current?.children, subRef.current, btnRef.current, bottomTextRef.current], { 
      y: 30, 
      opacity: 0 
    });

    // Animation sequence
    tl.to(headingRef.current?.children || [], {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      delay: 0.5
    })
    .to(subRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8
    }, "-=0.6")
    .to(btnRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8
    }, "-=0.6")
    .to(bottomTextRef.current, {
      y: 0,
      opacity: 1,
      duration: 1
    }, "-=0.4");
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.ibb.co/qLMmR9Bq/pwc-gx-supporting-1600x900-gettyimages-1499124310.jpg"
          alt="Cargo ship at sea"
          fill
          className="object-cover object-center"
          priority
          unoptimized
          referrerPolicy="no-referrer"
        />
        {/* Gradient overlays to match the deep teal/blue brand feel and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E2C]/90 via-[#0F1E2C]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2C]/90 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[#0F1E2C]/30 mix-blend-multiply"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex-grow flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 ref={headingRef} className="text-[43.75px] sm:text-6xl md:text-7xl lg:text-[90px] font-bold text-white leading-[1.05] tracking-tight mb-6 break-words">
            <span className="block">WHO</span>
            <span className="block">WE ARE</span>
          </h1>
          
          <p ref={subRef} className="text-xl md:text-[22px] text-white/90 font-light leading-snug mb-10 max-w-xl">
            Driving energy trade through trust, transparency, and global standards.
          </p>
          
          <a 
            ref={btnRef}
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-[#E04D1E] text-white px-8 py-3.5 rounded-full text-[15px] font-medium transition-all duration-300 shadow-[0_4px_14px_rgba(250,93,43,0.25)] hover:shadow-[0_6px_20px_rgba(250,93,43,0.35)] group w-fit"
          >
            Discuss a Trade
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full mt-auto pt-16">
        <p ref={bottomTextRef} className="text-[15px] md:text-base text-white/80 font-light leading-relaxed max-w-5xl">
          Founded by seasoned professionals in global commodities trading, we specialize in structuring complex deals across crude oil, natural gas, refined products, and logistics infrastructure. With a strong commitment to compliance and international trade standards, we deliver secure, efficient, and scalable energy solutions.
        </p>
      </div>
    </section>
  );
}
