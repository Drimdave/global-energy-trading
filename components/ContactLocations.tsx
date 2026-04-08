'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Globe, Briefcase, HelpCircle } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const locations = [
  {
    title: 'Global Headquarters',
    address: '14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria.',
    phone: '+234 800 123 4567',
    email: 'contact@dandcenergy.com',
    icon: <MapPin className="w-6 h-6 text-brand-accent" />,
    isHQ: true
  },
  {
    title: 'European Trading Hub',
    address: '15 St Botolph Street, London, EC3A 7BB, UK.',
    phone: '+44 20 7123 4567',
    email: 'europe@dandcenergy.com',
    icon: <Globe className="w-6 h-6 text-brand-accent" />,
    isHQ: false
  },
  {
    title: 'Middle East Operations',
    address: 'Almas Tower, Jumeirah Lakes Towers, Dubai, UAE.',
    phone: '+971 4 123 4567',
    email: 'mena@dandcenergy.com',
    icon: <Globe className="w-6 h-6 text-brand-accent" />,
    isHQ: false
  }
];

const departments = [
  {
    name: 'Trading & Logistics',
    email: 'trading@dandcenergy.com',
    phone: '+234 800 123 4568',
    icon: <Briefcase className="w-5 h-5 text-brand-accent" />
  },
  {
    name: 'Media & Press',
    email: 'press@dandcenergy.com',
    phone: '+234 800 123 4569',
    icon: <Mail className="w-5 h-5 text-brand-accent" />
  },
  {
    name: 'General Inquiries',
    email: 'info@dandcenergy.com',
    phone: '+234 800 123 4567',
    icon: <HelpCircle className="w-5 h-5 text-brand-accent" />
  }
];

export default function ContactLocations() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);
  const departmentsRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(locationsRef.current?.children ? Array.from(locationsRef.current.children) : [],
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: locationsRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo(departmentsRef.current?.children ? Array.from(departmentsRef.current.children) : [],
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: departmentsRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-brand-dark tracking-tight mb-6">
            Global Presence, Local Expertise
          </h2>
          <p className="text-lg text-brand-dark/70 leading-relaxed">
            With our headquarters in Lagos and strategic hubs across key energy markets, we are positioned to serve our partners worldwide. Reach out to the office or department that best fits your needs.
          </p>
        </div>

        {/* Locations Grid */}
        <div ref={locationsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {locations.map((loc, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl border transition-all duration-300 ${
                loc.isHQ 
                  ? 'bg-brand-dark text-white border-brand-dark shadow-xl transform md:-translate-y-2' 
                  : 'bg-white text-brand-dark border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.08)]'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full ${loc.isHQ ? 'bg-white/10' : 'bg-brand-accent/10'}`}>
                  {loc.icon}
                </div>
                <h3 className="text-xl font-semibold">{loc.title}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className={`w-5 h-5 shrink-0 mt-0.5 ${loc.isHQ ? 'text-white/60' : 'text-gray-400'}`} />
                  <p className={`leading-relaxed ${loc.isHQ ? 'text-white/80' : 'text-gray-600'}`}>
                    {loc.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className={`w-5 h-5 shrink-0 ${loc.isHQ ? 'text-white/60' : 'text-gray-400'}`} />
                  <p className={`${loc.isHQ ? 'text-white/80' : 'text-gray-600'}`}>
                    {loc.phone}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className={`w-5 h-5 shrink-0 ${loc.isHQ ? 'text-white/60' : 'text-gray-400'}`} />
                  <p className={`${loc.isHQ ? 'text-white/80' : 'text-gray-600'}`}>
                    {loc.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Departments Section */}
        <div className="border-t border-gray-100 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-brand-dark mb-4">Direct Contacts</h3>
            <p className="text-brand-dark/60">Connect directly with our specialized teams.</p>
          </div>
          
          <div ref={departmentsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 bg-[#F4F5F7] rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="p-3 bg-white rounded-full shadow-sm mb-4">
                  {dept.icon}
                </div>
                <h4 className="text-lg font-semibold text-brand-dark mb-2">{dept.name}</h4>
                <a href={`mailto:${dept.email}`} className="text-brand-accent hover:underline mb-1">
                  {dept.email}
                </a>
                <a href={`tel:${dept.phone.replace(/\s+/g, '')}`} className="text-gray-500 hover:text-brand-dark transition-colors">
                  {dept.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
