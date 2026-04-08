'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutMissionVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLHRElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
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

      // Mission Animation
      if (missionRef.current) {
        const missionText = missionRef.current.querySelector('.text-content');
        const missionImg = missionRef.current.querySelector('.img-content');
        
        gsap.fromTo(missionText?.children ? Array.from(missionText.children) : [],
          { y: 30, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: missionRef.current, start: 'top 75%' }
          }
        );
        
        gsap.fromTo(missionImg,
          { x: 30, opacity: 0 },
          { 
            x: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: missionRef.current, start: 'top 75%' }
          }
        );
      }

      // Divider Animation
      gsap.fromTo(dividerRef.current,
        { scaleX: 0, opacity: 0 },
        { 
          scaleX: 1, opacity: 1, duration: 1, ease: 'power3.inOut', transformOrigin: 'left center',
          scrollTrigger: { trigger: dividerRef.current, start: 'top 85%' }
        }
      );

      // Vision Animation
      if (visionRef.current) {
        const visionText = visionRef.current.querySelector('.text-content');
        const visionImg = visionRef.current.querySelector('.img-content');
        
        gsap.fromTo(visionText?.children ? Array.from(visionText.children) : [],
          { y: 30, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: visionRef.current, start: 'top 75%' }
          }
        );
        
        gsap.fromTo(visionImg,
          { x: 30, opacity: 0 },
          { 
            x: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: visionRef.current, start: 'top 75%' }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#F7F8FA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div ref={headerRef} className="mb-20 md:mb-28 max-w-5xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark tracking-tight mb-6">
            Mission & Vision
          </h2>
          <p className="text-lg md:text-[19px] text-brand-dark/80 leading-relaxed">
            We exist to power global energy trade through trust, efficiency, and compliance. By specializing in high-demand commodities and the infrastructure that moves them, we aim to be the most reliable and forward-thinking partner in the oil, gas, and logistics sectors.
          </p>
        </div>

        {/* Mission Block */}
        <div ref={missionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-24">
          <div className="text-content order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 tracking-tight">
              Our Mission
            </h3>
            <p className="text-brand-dark/75 text-lg leading-relaxed mb-8 max-w-xl">
              We exist to power global energy trade through trust, efficiency, and compliance. By specializing in high-demand commodities and the infrastructure that moves them, we aim to be the most reliable and forward-thinking partner in the oil, gas, and logistics sectors.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2B3A55] hover:bg-[#1E293B] text-white px-8 py-3.5 rounded-full text-[15px] font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Start Your Trade With Us
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="img-content order-1 lg:order-2 relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1400&auto=format&fit=crop"
              alt="Silhouette of worker at industrial facility during sunset"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Divider */}
        <hr ref={dividerRef} className="border-gray-300 mb-20 md:mb-24" />

        {/* Vision Block */}
        <div ref={visionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-content order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 tracking-tight">
              Our Vision
            </h3>
            <p className="text-brand-dark/75 text-lg leading-relaxed mb-8 max-w-xl">
              To lead the global movement of high-demand energy commodities and infrastructure by building a trusted ecosystem of compliant, cross-border energy trade—empowering economies and energizing the world.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-[#E04D1E] text-white px-8 py-3.5 rounded-full text-[15px] font-medium transition-all duration-300 shadow-[0_4px_14px_rgba(250,93,43,0.25)] hover:shadow-[0_6px_20px_rgba(250,93,43,0.35)] group"
            >
              Let&apos;s Build a Partnership
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="img-content order-1 lg:order-2 relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1615678815958-5910c6811c25?q=80&w=1400&auto=format&fit=crop"
              alt="Oil pump jack at night under starry sky"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
