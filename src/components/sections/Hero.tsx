'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Bell,
  Sparkles,
  Users,
  Radio,
  FileText,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/MotionWrapper';
import { siteConfig } from '@/data/site';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white">
      {/* Background radial effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full radiology-grid pointer-events-none opacity-60" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#00d082]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-[#fef84c]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Badges, CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 shadow-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d082] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00d082]"></span>
                </span>
                <span className="text-xs font-bold text-[#064e3b] tracking-wide uppercase">
                  Papan Informasi Resmi BEM
                </span>
                <span className="text-[10px] bg-[#fef84c] text-emerald-950 font-extrabold px-2 py-0.5 rounded-full">
                  DIII Radiologi
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Halo,{' '}
                <span className="relative inline-block text-[#064e3b]">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00d082] to-[#047857]">
                    Mahasiswa!
                  </span>
                  <span className="absolute -bottom-1.5 left-0 right-0 h-3 bg-[#fef84c] -z-0 rounded-sm opacity-80" />
                </span>{' '}
                  STIKes Borneo Nusantara
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Selamat datang di ruang digital resmi BEM STIKes Borneo Nusantara Program Studi DIII Radiologi. Website ini kami rancang sebagai media informasi, inspirasi, dan kolaborasi, agar setiap mahasiswa bisa lebih mudah mengetahui kegiatan, layanan, dan peran BEM dalam kehidupan kampus.

Dengan semangat kebersamaan, kreativitas, dan kepedulian, kami berkomitmen untuk menjadikan kampus lebih hidup, kritis, dan penuh karya. Mari bergabung, berpartisipasi, dan bersama-sama kita wujudkan kampus yang lebih baik!


              </p>
            </FadeIn>

            {/* Quick badges */}
            <FadeIn delay={0.35}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                <Badge variant="soft" size="md" className="gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00d082]" />
                  Budaya ALARA &amp; Keselamatan
                </Badge>
                <Badge variant="yellow" size="md" className="gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-950" />
                  Klinis &amp; Penalaran Ilmiah
                </Badge>
                <Badge variant="white" size="md" className="gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00d082]" />
                  Aspirasi Mahasiswa Terbuka
                </Badge>
              </div>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
                <Button href="/publikasi" variant="primary" size="lg">
                  <span>Lihat Pengumuman &amp; Publikasi</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/struktur-bem" variant="yellow" size="lg">
                  <Users className="w-4 h-4" />
                  <span>Struktur Pengurus</span>
                </Button>
                <Button href="/profile" variant="outline" size="lg">
                  <span>Tentang BEM</span>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Hero Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.3} direction="left">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00d082] via-[#fef84c] to-[#00d082] rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>

                <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-100">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00d082] to-[#065f46] p-2 flex items-center justify-center shadow-md">
                        <Image
                          src="/logo/Stikes.PNG"
                          alt="BEM Logo"
                          width={36}
                          height={36}
                          className="w-full h-full object-contain brightness-110"
                        />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-[#064e3b] text-base leading-tight">
                          STIKes Borneo Nusantara
                        </h3>
                        <p className="text-xs font-semibold text-slate-500">
                          Program Studi DIII Radiologi
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#fef84c] text-emerald-950 font-black text-xs">
                      2025/2026
                    </span>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3.5 my-6">
                    <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100">
                      <div className="w-8 h-8 rounded-xl bg-[#00d082] text-white flex items-center justify-center mb-2 shadow-sm">
                        <Radio className="w-4 h-4" />
                      </div>
                      <div className="font-extrabold text-xl text-[#064e3b]">DIII</div>
                      <div className="text-xs text-slate-600 font-medium">Teknik Radiologi</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
                      <div className="w-8 h-8 rounded-xl bg-[#fef84c] text-emerald-950 font-bold flex items-center justify-center mb-2 shadow-sm">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="font-extrabold text-xl text-slate-900">5 Divisi</div>
                      <div className="text-xs text-slate-600 font-medium">Badan Pengurus BEM</div>
                    </div>
                  </div>

                  {/* Bulletin notification card */}
                  <div className="p-4 rounded-2xl bg-[#092218] text-white space-y-2 relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-[#fef84c] font-bold">
                        <Bell className="w-3.5 h-3.5" />
                        PEMBERITAHUAN TERKINI
                      </span>
                      <span className="text-[10px] text-emerald-300 font-medium">Semester Genap</span>
                    </div>
                    <p className="text-xs font-semibold text-emerald-50 line-clamp-2">
                      Praktik Kerja Lapangan (PKL) Rumah Sakit Jejaring Kalimantan Selatan segera dimulai.
                    </p>
                    <Link
                      href="/publikasi/jadwal-praktikum-lapangan-radiologi-genap-2026"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#fef84c] hover:underline pt-1"
                    >
                      <span>Baca detail panduan</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* Card bottom footer */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00d082]" />
                      Sistem Papan Informasi Terbuka
                    </span>
                    <Link
                      href="/kontak"
                      className="font-bold text-[#00d082] hover:text-[#064e3b] transition-colors"
                    >
                      Hubungi BEM →
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
