'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function ComplianceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Main text animation
      tl.fromTo(textRef.current?.children ? Array.from(textRef.current.children) : [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://i.ibb.co/6c2Tpwc1/Holstein-at-Dusk.jpg"
          alt="Industrial facility at dusk"
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
        <div ref={textRef} className="max-w-3xl">
          <h1 className="text-[43.75px] sm:text-6xl md:text-8xl lg:text-[100px] font-bold text-white leading-[0.95] tracking-tight mb-6 uppercase break-words">
            LEGAL<br />& COMPLIANCE
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl">
            Stay informed with key updates, reports, and expert views across global energy markets.
          </p>
        </div>
      </div>
    </section>
  );
}
