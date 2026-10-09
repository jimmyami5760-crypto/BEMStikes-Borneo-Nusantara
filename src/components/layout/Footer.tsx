import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, MapPin, Phone, Heart, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { navItems } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#082217] text-white pt-16 pb-10 border-t-4 border-[#00d082] relative overflow-hidden">
      {/* Background glowing accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00d082]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#fef84c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-800/60">
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl p-1.5 shadow-md flex items-center justify-center">
                <Image
                  src="/logo/Bem.PNG"
                  alt="Logo BEM"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-14 h-14 bg-white rounded-2xl p-1.5 shadow-md flex items-center justify-center">
                <Image
                  src="/logo/Stikes.PNG"
                  alt="Logo STIKes"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white leading-tight">
                  BEM RADIOLOGI
                </h3>
                <p className="text-xs text-[#00d082] font-semibold">
                  STIKes Borneo Nusantara
                </p>
              </div>
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed pr-4">
              Papan informasi resmi Badan Eksekutif Mahasiswa (BEM) Program Studi DIII Radiologi STIKes Borneo Nusantara. Wadah sinergi, akselerasi ilmu radiodiagnostik, dan pengabdian masyarakat.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#fef84c] text-emerald-950 px-4 py-2 rounded-xl text-xs font-bold hover:brightness-105 transition-all shadow-md group"
              >
                <Instagram className="w-4 h-4 text-emerald-950" />
                <span>Follow {siteConfig.instagram}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#fef84c]">
              Menu Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-emerald-100/80 hover:text-[#00d082] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d082]" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Campus Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#fef84c]">
              Sekretariat &amp; Kontak
            </h4>
            <div className="space-y-3 text-sm text-emerald-100/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00d082] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {siteConfig.alamat}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00d082] flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00d082] flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.telepon.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.telepon}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-[#00d082] flex-shrink-0" />
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Instagram {siteConfig.instagram}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-block bg-[#0f3525] border border-emerald-700/50 rounded-xl px-3.5 py-2 text-xs text-emerald-200">
                <span className="text-[#fef84c] font-bold">Prodi DIII Radiologi:</span> Teknik Radiografi, Proteksi Radiasi.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice as requested in README */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
          <p>
            Hak cipta © {currentYear} <span className="text-white font-semibold">BEM STIKes Borneo Nusantara – Prodi DIII Radiologi</span>. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-1.5 text-emerald-300">
            <span>Didedikasikan dengan hati</span>
            <Heart className="w-3.5 h-3.5 text-[#fef84c] fill-[#fef84c]" />
            <span>untuk Mahasiswa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
