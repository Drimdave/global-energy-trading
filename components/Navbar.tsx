'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'What We Trade', href: '/trade' },
  { name: 'Market Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
  { name: 'Legal & Compliance', href: '/compliance' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(navRef.current, 
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.1 }
    )
    .fromTo(logoRef.current,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
      "-=0.4"
    )
    .fromTo(linksRef.current?.children ? Array.from(linksRef.current.children) : [],
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
      "-=0.4"
    )
    .fromTo(btnRef.current,
      { x: 20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
      "-=0.4"
    );
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        ref={navRef} 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'py-3 px-6 md:px-8 mt-4 mx-4 md:mx-auto max-w-[1200px] bg-brand-dark/85 backdrop-blur-md border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            : 'py-6 px-6 md:px-12 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between text-white">
          {/* Logo */}
          <Link ref={logoRef} href="/" className="flex items-center gap-3 group z-50" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex flex-col gap-1">
              <div className="w-7 h-1.5 bg-brand-accent rounded-full transition-transform group-hover:scale-105 origin-left"></div>
              <div className="w-7 h-1.5 bg-brand-primary rounded-full transition-transform group-hover:scale-105 origin-left delay-75"></div>
              <div className="w-7 h-1.5 bg-brand-accent rounded-full transition-transform group-hover:scale-105 origin-left delay-150"></div>
            </div>
            <div className="flex flex-col leading-none mt-0.5">
              <span className={`font-bold tracking-wider uppercase transition-all duration-300 ${isScrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>D&C Energy</span>
              <span className={`font-light tracking-[0.35em] uppercase mt-1 transition-all duration-300 ${isScrolled ? 'text-[9px] md:text-[10px]' : 'text-[10px] md:text-xs'}`}>Limited</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav ref={linksRef} className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-[14px] transition-colors hover:text-brand-accent relative py-1 ${isActive ? 'text-white font-medium' : 'text-gray-300 font-normal'}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link ref={btnRef} href="/contact" className={`hidden lg:block border border-white rounded-full font-medium hover:bg-white hover:text-brand-dark transition-all duration-300 ${isScrolled ? 'px-6 py-2 text-[14px]' : 'px-7 py-2.5 text-[15px]'}`}>
            Let&apos;s Talk
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out lg:hidden flex flex-col justify-center px-8 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-8 items-center text-center">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl md:text-3xl font-medium transition-all duration-300 transform ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${isActive ? 'text-brand-accent' : 'text-white hover:text-brand-accent'}`}
                style={{ transitionDelay: `${isMobileMenuOpen ? index * 100 : 0}ms` }}
              >
                {link.name}
              </Link>
            );
          })}
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mt-8 border-2 border-brand-accent bg-brand-accent text-white rounded-full px-10 py-4 text-lg font-medium transition-all duration-300 transform ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${isMobileMenuOpen ? navLinks.length * 100 : 0}ms` }}
          >
            Let&apos;s Talk
          </Link>
        </nav>
      </div>
    </>
  );
}
