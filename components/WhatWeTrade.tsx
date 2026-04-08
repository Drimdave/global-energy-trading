'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const tradeItems = [
  {
    title: 'Crude Oil',
    description: 'We deliver diverse crude blends from strategic sources with reliable logistics.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
        <path d="M4 8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8z"/>
        <path d="M4 12h16"/>
        <path d="M4 16h16"/>
        <path d="M8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 18v3"/>
        <path d="M9 21h6"/>
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1572248364230-7f412885f2da?q=80&w=500&auto=format&fit=crop'
  },
  {
    title: 'Natural Gas',
    description: 'Our gas offerings span pipeline and LNG, ready for dynamic regional needs.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
        <path d="M4 21h16"/>
        <path d="M9 21v1"/>
        <path d="M15 21v1"/>
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?q=80&w=500&auto=format&fit=crop'
  },
  {
    title: 'Refined Products',
    description: 'From jet fuel to diesel, we ensure seamless flow from refinery to market.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
        <rect x="4" y="8" width="16" height="14" rx="2"/>
        <path d="M6 8V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v3"/>
        <path d="M10 3v5"/>
        <path d="M14 3v5"/>
        <rect x="8" y="12" width="8" height="6" rx="1"/>
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=500&auto=format&fit=crop'
  },
  {
    title: 'Logistics & Storage',
    description: 'Our integrated network connects trade routes with efficient storage and transport.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
        <path d="M2 20h20"/>
        <path d="M4 20l2-10h12l2 10"/>
        <path d="M8 10V6h8v4"/>
        <path d="M12 6V3"/>
        <path d="M10 14h4"/>
        <path d="M10 17h4"/>
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=500&auto=format&fit=crop'
  }
];

export default function WhatWeTrade() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current?.children ? Array.from(headerRef.current.children) : [],
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          }
        }
      );

      // Main Image animation
      gsap.fromTo(imageRef.current,
        { x: -50, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
          }
        }
      );

      // Cards animation
      gsap.fromTo(cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { x: 50, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          }
        }
      );

      // Button animation
      gsap.fromTo(btnRef.current,
        { y: 20, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.6, delay: 0.6,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-brand-light">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div ref={headerRef} className="mb-16 max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6 tracking-tight">
            What We Trade
          </h2>
          <p className="text-lg md:text-xl text-brand-secondary/90 font-light leading-relaxed">
            Our core focus is delivering energy products with efficiency, reliability, and trust. We specialize in high-demand commodities—crude oil, natural gas, refined fuels—and the infrastructure that powers their movement across borders. With a sharp eye on compliance and global standards, we ensure seamless transactions that keep the world energized.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Large Image */}
          <div ref={imageRef} className="lg:col-span-5 h-[500px] lg:h-auto relative rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
              alt="Oil pumpjack at sunset"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              loading="lazy"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>

          {/* Right Column - Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div ref={cardsRef} className="flex flex-col gap-4">
              {tradeItems.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-stretch bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer border border-gray-100">
                  
                  {/* Icon Box */}
                  <div className="w-full sm:w-[100px] h-[100px] bg-[#F8F9FA] border border-gray-200 rounded-xl flex items-center justify-center shrink-0 mb-4 sm:mb-0">
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow px-0 sm:px-6 flex flex-col justify-center mb-4 sm:mb-0">
                    <h4 className="text-xl font-bold text-brand-dark mb-1.5">{item.title}</h4>
                    <p className="text-[15px] text-brand-secondary/80 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>

                  {/* Image Box */}
                  <div className="w-full sm:w-[140px] h-[140px] sm:h-auto relative rounded-xl overflow-hidden shrink-0">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="140px"
                      loading="lazy"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                    <ArrowRight className="absolute bottom-3 right-3 text-white w-5 h-5 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>

                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div ref={btnRef} className="mt-4">
              <button className="bg-brand-accent hover:bg-[#e04d1f] text-white px-8 py-3.5 rounded-full text-[17px] font-medium flex items-center gap-2 transition-all duration-300 shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 group w-fit">
                Discuss a Trade 
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
