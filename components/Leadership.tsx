'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
  {
    name: 'David Oyelade',
    role: 'FOUNDER & CEO',
    description: "David has 20+ years in international trade and built the firm's strategic vision.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop', // Placeholder professional man
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Confidence Chima',
    role: 'DIRECTOR',
    description: 'Confidence has over 20 years of experience leading operations and aligning global compliance strategies.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop', // Professional woman
    linkedin: '#',
    twitter: '#'
  }
];

export default function Leadership() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Cards animation
      gsap.fromTo(cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-medium text-brand-dark tracking-tight leading-tight">
            Meet the<br />Leadership Team
          </h2>
        </div>

        {/* Team Grid */}
        <div ref={cardsRef} className="flex flex-wrap justify-center gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full max-w-[400px] bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-500 group">
              
              {/* Image Container */}
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content */}
              <div className="p-8 text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold text-brand-dark mb-1">{member.name}</h3>
                <p className="text-xs font-medium tracking-widest text-brand-secondary/80 uppercase mb-4">
                  {member.role}
                </p>
                <p className="text-[15px] text-brand-secondary/80 leading-relaxed max-w-[280px] mb-8">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-auto">
                  <a href={member.linkedin} className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-white hover:bg-brand-primary transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452H16.89V14.881C16.89 13.553 16.866 11.844 15.044 11.844C13.198 11.844 12.915 13.284 12.915 14.786V20.452H9.358V9H12.776V10.564H12.824C13.301 9.66 14.468 8.706 16.195 8.706C19.803 8.706 20.447 11.08 20.447 14.168V20.452ZM5.337 7.433C4.195 7.433 3.273 6.51 3.273 5.367C3.273 4.225 4.195 3.303 5.337 3.303C6.478 3.303 7.4 4.225 7.4 5.367C7.4 6.51 6.478 7.433 5.337 7.433ZM7.118 20.452H3.555V9H7.118V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.225 0Z" />
                    </svg>
                  </a>
                  <a href={member.twitter} className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-white hover:bg-brand-primary transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
