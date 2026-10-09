import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  Compass,
  Instagram,
  FileText,
  Image as ImageIcon,
} from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { PublikasiList } from '@/components/sections/PublikasiList';
import { MediaGallery } from '@/components/sections/MediaGallery';
import { ProfileSection } from '@/components/sections/ProfileSection';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { siteConfig } from '@/data/site';
import { profileData } from '@/data/profile';
import { FadeIn } from '@/components/motion/MotionWrapper';

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Ringkasan BEM / Visi Singkat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-sm p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="soft" size="sm">
                SEKILAS ORGANISASI
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#064e3b] tracking-tight">
                Membangun Komunitas Calon Radiografer Handal &amp; Beretika
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {profileData.tentang}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button href="/profile" variant="primary" size="md">
                  <span>Profil Lengkap Organisasi</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/struktur-bem" variant="outline" size="md">
                  <Users className="w-4 h-4" />
                  <span>Struktur Kepengurusan</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#064e3b] to-[#0a2f20] rounded-2xl p-6 sm:p-8 text-white space-y-4 border-l-4 border-[#fef84c]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#fef84c] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#fef84c]" />
                VISI BEM 2025/2026
              </div>
              <p className="text-sm sm:text-base font-semibold leading-relaxed text-emerald-50">
                &ldquo;{profileData.visi}&rdquo;
              </p>
              <div className="pt-3 border-t border-emerald-700/60 text-xs text-emerald-200">
                STIKes Borneo Nusantara • Program Studi DIII Radiologi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Publikasi Terbaru (Papan Pengumuman & Berita) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PublikasiList
          limit={3}
          showFilters={false}
          title="Publikasi &amp; Pengumuman Terkini"
          subtitle="Informasi resmi seputar praktikum lapangan, seminar keilmuan, dan agenda kemahasiswaan."
        />
      </section>

      {/* 4. Cuplikan Media Informasi & Galeri */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <Badge variant="yellow" size="sm" className="mb-2">
              DOKUMENTASI FOTO
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#064e3b]">
              Cuplikan Dokumentasi Kegiatan
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Dokumentasi foto resmi PKKMB, Praktik Kerja Lapangan (PKL), bakti sosial, dan agenda kemahasiswaan.
            </p>
          </div>
          <Button href="/media-informasi" variant="outline" size="md">
            <span>Lihat Semua Dokumentasi</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <MediaGallery limit={3} showFilters={false} />
      </section>

      {/* 5. Banner Call to Action / Social Instagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#00d082] via-[#059669] to-[#064e3b] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-[#fef84c] text-emerald-950 text-xs font-black uppercase tracking-wider">
              TERHUBUNG BERSAMA KAMI
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Ikuti Seluruh Update di Instagram @bem.atrocip
            </h3>
            <p className="text-sm text-emerald-100/90 leading-relaxed">
              Dapatkan berita instan, story pengumuman perkuliahan, dan konten reels edukasi radiologi langsung di genggaman Anda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#fef84c] text-emerald-950 font-black text-sm hover:brightness-105 transition-all shadow-lg flex items-center gap-2"
            >
              <Instagram className="w-5 h-5 text-emerald-950" />
              <span>Kunjungi Instagram Resmi</span>
            </a>
            <Button href="/kontak" variant="white" size="lg">
              <span>Sekretariat &amp; Kontak</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
