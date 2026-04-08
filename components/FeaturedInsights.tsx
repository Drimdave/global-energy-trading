'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const insights = [
  {
    title: 'The Next Shockwave in Crude Pricing',
    description: 'As energy markets evolve, staying ahead requires more than just data — it demands perspective. In this spotlight feature...',
    image: 'https://i.ibb.co/fL6KbWc/Oil-1.webp',
  },
  {
    title: 'Energy Trade at the Crossroads',
    description: 'As energy markets grow increasingly complex, geopolitical shifts and supply chain uncertainty are redrawing the map of global trade...',
    image: 'https://i.ibb.co/s9s137tB/ocean-tile-01.jpg',
  },
  {
    title: 'Gas Demand in an Electrifying World',
    description: 'As economies embrace electrification, where does natural gas fit into the transition? This piece breaks down new demand hubs...',
    image: 'https://i.ibb.co/fz00HHp1/offshore-platform.jpg',
  }
];

export default function FeaturedInsights() {
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
          <h2 className="text-5xl md:text-6xl font-medium text-[#1A202C] tracking-tight mb-6">
            Featured Insight
          </h2>
          <p className="text-lg text-[#4A5568] leading-relaxed max-w-5xl">
            At the forefront of global energy trade, our insights dive deep into the market forces shaping oil, gas, and logistics today. We spotlight trends, strategies, and shifts that empower informed decisions — backed by our expertise in high-demand commodities and the infrastructure that fuels them.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full">
                <Image 
                  src={insight.image}
                  alt={insight.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-[#1A202C] mb-4 leading-snug">
                  {insight.title}
                </h3>
                <p className="text-[15px] text-[#4A5568] leading-relaxed mb-8 flex-grow">
                  {insight.description}
                </p>
                
                {/* Button */}
                <div className="flex justify-end mt-auto">
                  <button className="group flex items-center gap-2 bg-[#F26522] text-white px-5 py-2.5 rounded-lg text-[14px] font-medium hover:bg-[#E04D1E] transition-colors duration-300">
                    Read Full Insight
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
