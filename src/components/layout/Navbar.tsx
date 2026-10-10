'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Instagram, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';
import { navItems } from '@/lib/constants';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-emerald-100/80 py-3'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#00d082] rounded-xl p-1 transition-all duration-300"
            >
              <div className="relative w-11 h-11 flex-shrink-0 bg-white p-1 rounded-xl shadow-sm border border-emerald-100 group-hover:scale-110 group-hover:shadow-md group-hover:border-[#00d082] group-hover:rotate-1 transition-all duration-300">
                <Image
                  src="/logo/Bem.PNG"
                  alt="Logo BEM STIKes Borneo Nusantara"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base md:text-lg tracking-tight text-[#064e3b] leading-tight group-hover:text-[#00d082] transition-colors duration-200">
                    BEM RADIOLOGI
                  </span>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#fef84c] group-hover:scale-150 group-hover:bg-[#00d082] transition-all duration-300" />
                </div>
                <span className="text-[11px] md:text-xs font-semibold text-slate-500 tracking-wide uppercase group-hover:text-slate-700 transition-colors duration-200">
                  STIKes Borneo Nusantara
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 relative group overflow-hidden',
                      isActive
                        ? 'text-[#064e3b] font-bold bg-emerald-50/80 shadow-sm'
                        : 'text-slate-600 hover:text-[#064e3b] hover:-translate-y-0.5'
                    )}
                  >
                    {/* Hover backdrop glow */}
                    <span
                      className={cn(
                        'absolute inset-0 bg-gradient-to-r from-emerald-50 via-yellow-50/40 to-emerald-50 rounded-xl transition-all duration-300 -z-10',
                        isActive
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100 group-hover:shadow-sm'
                      )}
                    />

                    {/* Nav Item Label */}
                    <span className="relative z-10 transition-colors duration-200 group-hover:text-[#064e3b]">
                      {item.label}
                    </span>

                    {/* Animated hover & active underline */}
                    <span
                      className={cn(
                        'absolute bottom-0.5 left-3 right-3 h-[2.5px] rounded-full transition-all duration-300 transform',
                        isActive
                          ? 'bg-gradient-to-r from-[#00d082] via-[#fef84c] to-[#00d082] scale-x-100 opacity-100 shadow-sm'
                          : 'bg-gradient-to-r from-[#00d082] via-[#fef84c] to-[#00d082] scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 origin-center'
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Action / Social Button & Campus Logo */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Logo STIKes di sebelah kanan menu Kontak */}
              <div
                className="relative w-10 h-10 flex-shrink-0 bg-white p-1 rounded-xl shadow-sm border border-emerald-100 hover:scale-110 hover:shadow-md hover:border-[#00d082] group transition-all duration-300"
                title="STIKes Borneo Nusantara"
              >
                <Image
                  src="/logo/Stikes.PNG"
                  alt="Logo STIKes Borneo Nusantara"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden flex items-center gap-2 bg-[#00d082] text-white hover:bg-[#00ba74] text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm hover:shadow-lg hover:shadow-[#00d082]/30 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                {/* Shimmer sweep effect on hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <Instagram className="w-4 h-4 transition-transform group-hover:rotate-12 group-hover:scale-110 duration-200" />
                <span>{siteConfig.instagram}</span>
                <ExternalLink className="w-3 h-3 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>

            {/* Mobile Actions: Logo STIKes & Hamburger Toggle */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <div className="relative w-9 h-9 flex-shrink-0 bg-white p-1 rounded-xl shadow-sm border border-emerald-100">
                <Image
                  src="/logo/Stikes.PNG"
                  alt="Logo STIKes Borneo Nusantara"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:text-[#064e3b] hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-[#00d082] transition-colors"
                aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay / Drawer */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navItems={navItems}
        currentPath={pathname}
      />
    </>
  );
}
