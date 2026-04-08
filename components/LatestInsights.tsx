'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Search, Eye, Heart, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = ['All', 'Gas', 'Refined', 'Logistics'];

const insightsData = [
  {
    title: 'The Next Shockwave in Crude Pricing',
    description: 'Shifting global alliances and evolving OPEC+ production caps are breaking historical price...',
    image: 'https://picsum.photos/seed/chart/400/300',
    views: 68,
    likes: 86,
    category: 'Refined'
  },
  {
    title: 'Gas Trade Routes: The New Silk Road?',
    description: 'With emerging pipelines through Asia and expanded LNG terminals in Europe...',
    image: 'https://picsum.photos/seed/refinery/400/300',
    views: 68,
    likes: 86,
    category: 'Gas'
  },
  {
    title: 'Storage Capacity as a Strategic',
    description: 'Amid supply volatility, storage is becoming a core trade asset. Learn how optimized storage...',
    image: 'https://picsum.photos/seed/chess/400/300',
    views: 68,
    likes: 86,
    category: 'Logistics'
  },
  {
    title: 'The Refinery Pivot: Adapting to Green',
    description: 'Refineries are shifting output to cleaner fuels in response to policy pressure...',
    image: 'https://picsum.photos/seed/wind/400/300',
    views: 68,
    likes: 86,
    category: 'Refined'
  },
  {
    title: 'Africa’s Role in the New Oil Supply Chain',
    description: 'As exploration and partnerships expand across West and East Africa,',
    image: 'https://picsum.photos/seed/liquid/400/300',
    views: 68,
    likes: 86,
    category: 'Refined'
  },
  {
    title: 'Marine Logistics Under Pressure',
    description: 'With tightening emissions rules and global disruptions, marine fuel supply chains are under scrutiny...',
    image: 'https://picsum.photos/seed/port/400/300',
    views: 68,
    likes: 86,
    category: 'Logistics'
  }
];

export default function LatestInsights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(filtersRef.current?.children ? Array.from(filtersRef.current.children) : [],
        { y: 20, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: filtersRef.current,
            start: 'top 85%',
          }
        }
      );

      gsap.fromTo(cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredInsights = insightsData.filter(insight => {
    const matchesCategory = activeCategory === 'All' || insight.category === activeCategory;
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          insight.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1A202C] tracking-tight mb-6">
            Latest Market Insights
          </h2>
          <p className="text-base md:text-lg text-[#4A5568] leading-relaxed">
            Stay ahead of the curve with our continuously updated stream of energy trade intelligence. From crude supply trends and LNG contracts to geopolitical risk and infrastructure updates, our insight feed equips you with actionable knowledge tailored for the oil, gas, and logistics sectors.
          </p>
        </div>

        {/* Filters & Search */}
        <div ref={filtersRef} className="flex flex-col items-center mb-16 space-y-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 border ${
                  activeCategory === category 
                    ? 'bg-[#F26522] text-white border-[#F26522]' 
                    : 'bg-white text-[#4A5568] border-gray-200 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by keyword or regio"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 focus:border-[#F26522] text-[#1A202C] placeholder-gray-400 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {filteredInsights.map((insight, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col sm:flex-row group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-auto sm:w-2/5 flex-shrink-0 overflow-hidden">
                <Image 
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-center sm:w-3/5">
                <h3 className="text-xl font-semibold text-[#1A202C] mb-3 leading-snug group-hover:text-[#F26522] transition-colors">
                  {insight.title}
                </h3>
                <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6 line-clamp-2">
                  {insight.description}
                </p>
                
                {/* Meta */}
                <div className="flex items-center gap-4 text-gray-500 text-sm mt-auto">
                  <div className="flex items-center gap-1.5">
                    <Eye size={16} />
                    <span>{insight.views}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart size={16} />
                    <span>{insight.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center">
          <button className="group flex items-center gap-2 bg-[#F26522] text-white px-8 py-3.5 rounded-full text-[15px] font-medium hover:bg-[#E04D1E] transition-colors duration-300 shadow-[0_8px_20px_rgba(250,93,43,0.25)] hover:shadow-[0_12px_25px_rgba(250,93,43,0.35)]">
            See All
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
