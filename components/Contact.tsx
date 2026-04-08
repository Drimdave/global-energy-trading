'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ContactProps {
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
}

export default function Contact({
  heading = (
    <>
      Ready to connect with<br />a trading expert?
    </>
  ),
  subheading = "Let us help you find the right deal, in the right market."
}: ContactProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Text Content Animation
      tl.fromTo(contentRef.current?.children ? Array.from(contentRef.current.children) : [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      )
      // Form Fields Animation
      .fromTo(formRef.current?.children ? Array.from(formRef.current.children) : [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        "-=0.4"
      );

      // Image Animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 1.05 },
        { 
          opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
        
        {/* Left Column - Form */}
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 lg:py-0">
          <div className="max-w-xl w-full mx-auto lg:mx-0">
            
            {/* Header */}
            <div ref={contentRef} className="mb-10">
              <h2 className="text-[48px] font-bold text-brand-dark tracking-tight leading-[1.1] mb-4">
                {heading}
              </h2>
              <p className="text-lg text-brand-dark/80">
                {subheading}
              </p>
            </div>

            {/* Form */}
            <form ref={formRef} className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName"
                    placeholder="First Name *" 
                    className="w-full bg-[#F4F5F7] text-brand-dark placeholder:text-brand-dark/50 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/30 transition-all"
                    required
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="lastName"
                    placeholder="Last Name *" 
                    className="w-full bg-[#F4F5F7] text-brand-dark placeholder:text-brand-dark/50 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/30 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <input 
                    type="email" 
                    id="email"
                    placeholder="Email *" 
                    className="w-full bg-[#F4F5F7] text-brand-dark placeholder:text-brand-dark/50 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/30 transition-all"
                    required
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="Phone *" 
                    className="w-full bg-[#F4F5F7] text-brand-dark placeholder:text-brand-dark/50 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/30 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <textarea 
                  id="message"
                  placeholder="Message" 
                  rows={5}
                  className="w-full bg-[#F4F5F7] text-brand-dark placeholder:text-brand-dark/50 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/30 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-accent hover:bg-[#E04D1E] text-white py-4 rounded-xl text-lg font-medium transition-all duration-300 shadow-[0_8px_20px_rgba(250,93,43,0.2)] hover:shadow-[0_12px_25px_rgba(250,93,43,0.3)] mt-2"
              >
                Get in Touch
              </button>
            </form>

          </div>
        </div>

        {/* Right Column - Image */}
        <div ref={imageRef} className="relative h-[500px] lg:h-auto w-full overflow-hidden">
          <Image 
            src="https://i.ibb.co/fz00HHp1/offshore-platform.jpg" 
            alt="Industrial facility"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
            className="object-cover"
            referrerPolicy="no-referrer"
            unoptimized
          />
          {/* Subtle overlay to match the slightly moody tone of the screenshot */}
          <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply"></div>
        </div>

      </div>
    </section>
  );
}
