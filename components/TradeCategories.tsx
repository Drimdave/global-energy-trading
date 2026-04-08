'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ArrowRight, Flame, Fuel, Warehouse, Droplet } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  {
    title: 'Crude Oil',
    description: 'Crude oil remains the foundation of the global energy economy—fueling industries, transportation, and national infrastructures. We deliver large-volume, quality-assured streams sourced through our network of trusted producers and compliant international channels.',
    image: 'https://i.ibb.co/fL6KbWc/Oil-1.webp',
    icon: Droplet,
  },
  {
    title: 'Natural Gas',
    description: 'Natural gas is a cornerstone of clean energy evolution. Our operations bridge regional supply and demand by enabling fast, compliant, and scalable trades between buyers and sellers across key global markets.',
    image: 'https://i.ibb.co/fz00HHp1/offshore-platform.jpg',
    icon: Flame,
  },
  {
    title: 'Refined Products',
    description: '| We handle a wide range of refined products—from aviation fuel to industrial-grade diesel—tailored to the needs of modern commerce. Every trade aligns with global specifications, safety protocols, and market expectations.',
    image: 'https://i.ibb.co/qLMmR9Bq/pwc-gx-supporting-1600x900-gettyimages-1499124310.jpg',
    icon: Fuel,
  },
  {
    title: 'Logistics & Storage',
    description: '| Our logistics and storage services complete the trade cycle—ensuring timely, secure, and flexible delivery. With access to terminals, pipelines, and marine infrastructure, we streamline movement from origin to destination.',
    image: 'https://i.ibb.co/s9s137tB/ocean-tile-01.jpg',
    icon: Warehouse,
  }
];

export default function TradeCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current?.children ? Array.from(headerRef.current.children) : [],
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          }
        }
      );

      // Cards animation
      gsap.fromTo(cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#F4F5F7]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-20 max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-medium text-brand-dark tracking-tight mb-6">
            Trade Categories
          </h2>
          <p className="text-lg text-brand-secondary/80 leading-relaxed max-w-4xl">
            We exist to power global energy trade through trust, efficiency, and compliance. By specializing in high-demand commodities and the infrastructure that moves them, we aim to be the most reliable and forward-thinking partner in the oil, gas, and logistics sectors.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 md:h-80 w-full">
                  <Image 
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Icon Badge */}
                  <div className="absolute -bottom-10 left-8 w-20 h-20 bg-[#2A3449] rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="text-white" size={32} strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Content Container */}
                <div className="pt-16 pb-10 px-8 md:px-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-semibold text-brand-dark mb-4">
                    {category.title}
                  </h3>
                  <p className="text-[15px] text-brand-secondary/80 leading-relaxed mb-10 flex-grow">
                    {category.description}
                  </p>
                  
                  {/* Button */}
                  <div className="flex justify-end">
                    <button className="group flex items-center gap-2 bg-[#F26522] text-white px-6 py-3 rounded-lg text-[15px] font-medium hover:bg-[#E04D1E] transition-colors duration-300">
                      Talk to a Trade Expert
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
