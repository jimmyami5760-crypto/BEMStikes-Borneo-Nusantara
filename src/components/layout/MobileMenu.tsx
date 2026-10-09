'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Instagram, Mail, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, navItems, currentPath }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-200">
        {/* Header inside drawer */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-emerald-50/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl p-1 shadow-sm border border-emerald-100 flex items-center justify-center">
              <Image
                src="/logo/Bem.PNG"
                alt="Logo BEM STIKes Borneo Nusantara"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-extrabold text-[#064e3b] text-sm">BEM RADIOLOGI</div>
              <div className="text-[11px] text-slate-500 font-medium">STIKes Borneo Nusantara</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-white transition-colors"
            aria-label="Tutup menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-1.5">
          <div className="text-[11px] font-bold text-slate-400 tracking-wider uppercase px-3 pb-2">
            Menu Papan Informasi
          </div>
          {navItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group',
                  isActive
                    ? 'bg-gradient-to-r from-[#00d082] to-[#00b370] text-white shadow-md shadow-[#00d082]/25 font-bold translate-x-1'
                    : 'text-slate-700 hover:bg-emerald-50 hover:text-[#064e3b] hover:translate-x-1.5'
                )}
              >
                <span>{item.label}</span>
                {isActive ? (
                  <span className="w-2 h-2 rounded-full bg-[#fef84c]" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00d082] group-hover:translate-x-0.5 transition-all" />
                )}
              </Link>
            );
          })}

          <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
            <div className="text-[11px] font-bold text-slate-400 tracking-wider uppercase px-3">
              Koneksi &amp; Sosial
            </div>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 bg-[#fef84c] text-emerald-950 font-bold rounded-xl text-sm hover:brightness-95 transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4 text-[#064e3b]" />
              <span>Instagram: {siteConfig.instagram}</span>
            </a>

            <div className="px-3 pt-2 text-xs text-slate-500 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00d082] mt-0.5 flex-shrink-0" />
                <span>Pekapuran B Laut, Banjarmasin, Kalimantan Selatan</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00d082] flex-shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer in drawer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} BEM DIII Radiologi
          </p>
        </div>
      </div>
    </div>
  );
}
