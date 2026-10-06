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
              className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#00d082] rounded-xl p-1"
            >
              <div className="relative w-11 h-11 flex-shrink-0 bg-white p-1 rounded-xl shadow-sm border border-emerald-100 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo/logo-bem.svg"
                  alt="Logo BEM STIKes Borneo Nusantara"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base md:text-lg tracking-tight text-[#064e3b] leading-tight group-hover:text-[#00d082] transition-colors">
                    BEM RADIOLOGI
                  </span>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#fef84c]" />
                </div>
                <span className="text-[11px] md:text-xs font-semibold text-slate-500 tracking-wide uppercase">
                  STIKes Borneo Nusantara
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 relative',
                      isActive
                        ? 'text-[#064e3b] bg-emerald-50 shadow-sm'
                        : 'text-slate-600 hover:text-[#064e3b] hover:bg-slate-50'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-[#00d082] via-[#fef84c] to-[#00d082] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action / Social Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#00d082] text-white hover:bg-[#00ba74] text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm hover:shadow-[#00d082]/30 hover:shadow-md transition-all group"
              >
                <Instagram className="w-4 h-4 transition-transform group-hover:rotate-6" />
                <span>{siteConfig.instagram}</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-[#064e3b] hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-[#00d082] transition-colors"
              aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
