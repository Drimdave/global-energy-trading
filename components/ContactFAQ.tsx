'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What types of energy commodities do you trade?",
    answer: "We specialize in a wide range of energy products including crude oil, natural gas, refined petroleum products (such as gasoline, diesel, and jet fuel), and emerging renewable energy certificates. Our portfolio is continuously expanding to meet global market demands."
  },
  {
    question: "How do you ensure compliance and transparency in your trades?",
    answer: "Compliance is at the core of our operations. We adhere strictly to international trade laws, environmental regulations, and financial reporting standards. Every transaction is documented and audited to ensure complete transparency for our partners and stakeholders."
  },
  {
    question: "Do you offer logistics and infrastructure support?",
    answer: "Yes, we provide end-to-end logistics solutions. This includes maritime shipping coordination, pipeline management, and secure storage facilities. Our integrated approach ensures that energy products are delivered safely and efficiently to their final destinations."
  },
  {
    question: "How can I become a registered partner or supplier?",
    answer: "To become a partner, please reach out to our onboarding team via the contact form or directly at partnerships@dandcenergy.com. We will guide you through our due diligence process, which includes financial, operational, and compliance assessments."
  },
  {
    question: "Where are your primary markets located?",
    answer: "While our headquarters is in Lagos, Nigeria, we operate globally. Our primary trading hubs include West Africa, Europe, the Middle East, and emerging markets in Asia. We leverage our international network to optimize supply chains across these regions."
  }
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo(listRef.current?.children ? Array.from(listRef.current.children) : [],
        { y: 20, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[#F4F5F7]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            Find quick answers to common questions about our trading operations, logistics, and partnership opportunities.
          </p>
        </div>

        <div ref={listRef} className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-brand-accent shadow-md' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-medium pr-8 transition-colors ${isOpen ? 'text-brand-accent' : 'text-brand-dark'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-accent/10 text-brand-accent' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-brand-dark/70 leading-relaxed border-t border-gray-100 mt-2">
                    {faq.answer}
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
