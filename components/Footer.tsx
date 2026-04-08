'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Column 1: Logo & Contact */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
            {/* Logo Section */}
            <div className="p-8 lg:p-12 border-b border-white/10">
              <Link href="/" className="flex items-center gap-3 group inline-flex">
                <div className="flex flex-col gap-1">
                  <div className="w-7 h-1.5 bg-brand-accent rounded-full transition-transform group-hover:scale-105 origin-left"></div>
                  <div className="w-7 h-1.5 bg-brand-primary rounded-full transition-transform group-hover:scale-105 origin-left delay-75"></div>
                  <div className="w-7 h-1.5 bg-brand-accent rounded-full transition-transform group-hover:scale-105 origin-left delay-150"></div>
                </div>
                <div className="flex flex-col leading-none mt-0.5">
                  <span className="text-lg md:text-xl font-bold tracking-wider uppercase">D&C Energy</span>
                  <span className="text-[10px] md:text-xs font-light tracking-[0.35em] uppercase mt-1">Limited</span>
                </div>
              </Link>
            </div>
            
            {/* Contact Section */}
            <div className="p-8 lg:p-12 flex-grow flex flex-col gap-6 text-[15px] text-gray-300">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <p className="leading-relaxed">14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria.</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <p>+234 800 123 4567</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <p>contact@dandcenergy.com</p>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
            <div className="p-8 lg:p-12">
              <nav className="flex flex-col gap-5 text-[15px] text-gray-300">
                <Link href="/" className="hover:text-brand-accent transition-colors w-fit">Home</Link>
                <Link href="/about" className="hover:text-brand-accent transition-colors w-fit">About Us</Link>
                <Link href="/trade" className="hover:text-brand-accent transition-colors w-fit">What We Trade</Link>
                <Link href="/contact" className="hover:text-brand-accent transition-colors w-fit">Contact</Link>
                <Link href="/compliance" className="hover:text-brand-accent transition-colors w-fit">Legal & Compliance</Link>
              </nav>
            </div>
          </div>

          {/* Column 3: CTA & Footer Bottom */}
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
            
            {/* Top CTA */}
            <div className="mb-16 lg:mb-24">
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-8">
                Looking to initiate your next <br className="hidden md:block" />
                trade or expand into new <br className="hidden md:block" />
                markets?
              </h3>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-[#E04D1E] text-white px-8 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-300 shadow-[0_4px_14px_rgba(250,93,43,0.25)] hover:shadow-[0_6px_20px_rgba(250,93,43,0.35)] group"
              >
                Get in touch
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Bottom Bar (Copyright, Links, Socials) */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 text-[13px] text-white mt-12 lg:mt-0">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span>© {new Date().getFullYear()} D&C Energy Limited.</span>
                  <span className="hidden sm:inline">•</span>
                  <Link href="/privacy" className="hover:text-brand-accent transition-colors">Privacy</Link>
                  <span className="hidden sm:inline">•</span>
                  <Link href="/terms" className="hover:text-brand-accent transition-colors">Terms</Link>
                </div>
                <div>
                  <span className="text-white font-medium">Powered by Drimdave</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a href="#" className="text-white hover:text-brand-accent transition-colors">
                  {/* Custom X (Twitter) Icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-brand-accent transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-white hover:text-brand-accent transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-white hover:text-brand-accent transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
