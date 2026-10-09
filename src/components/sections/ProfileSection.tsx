'use client';

import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Users,
  Sparkles,
  HeartHandshake,
  Compass,
  Target,
  Award,
  History,
  Calendar,
  GraduationCap,
} from 'lucide-react';
import { profileData } from '@/data/profile';
import { Card } from '@/components/ui/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/MotionWrapper';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00d082]" />,
  Users: <Users className="w-6 h-6 text-[#00d082]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#00d082]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#00d082]" />,
};

interface ProfileSectionProps {
  showFull?: boolean;
}

export function ProfileSection({ showFull = true }: ProfileSectionProps) {
  return (
    <div className="space-y-16 py-8">
      {/* 1. Tentang BEM */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-emerald-100/40 via-yellow-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#064e3b]">
                <Compass className="w-3.5 h-3.5 text-[#00d082]" />
                TENTANG KAMI
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                Badan Eksekutif Mahasiswa <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d082] to-[#047857]">
                  STIKes Borneo Nusantara
                </span>{' '}
                – Prodi DIII Radiologi
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg pt-2">
                {profileData.tentang}
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <FadeIn direction="left">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00d082] via-[#fef84c] to-[#00d082] opacity-40 blur-lg group-hover:opacity-70 transition duration-500" />
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 flex flex-col items-center text-center">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 relative mb-4 p-2 bg-emerald-50/50 rounded-2xl flex items-center justify-center">
                    <Image
                      src="/logo/Bem.PNG"
                      alt="Logo BEM STIKes Borneo Nusantara"
                      width={176}
                      height={176}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Logo Resmi BEM
                  </span>
                  <p className="text-xs text-slate-500 mt-2 font-medium">
                    Badan Eksekutif Mahasiswa
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Sejarah BEM */}
      {profileData.sejarah && (
        <section>
          <FadeIn>
            <div className="bg-gradient-to-br from-[#064e3b] via-[#043d2e] to-[#012519] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl border-t-4 border-[#00d082]">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d082]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#fef84c]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#fef84c] border border-white/10 text-xs font-bold uppercase tracking-wider">
                    <History className="w-3.5 h-3.5 text-[#fef84c]" />
                    JEJAK SEJARAH
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Sejarah BEM
                  </h3>
                  <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                    {profileData.sejarah.paragraf1}
                  </p>
                  <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                    {profileData.sejarah.paragraf2}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-5">
                    <div className="flex items-center gap-3.5 pb-4 border-b border-white/10">
                      <div className="w-12 h-12 rounded-xl bg-[#fef84c] text-emerald-950 flex items-center justify-center font-black shadow-md flex-shrink-0">
                        <Calendar className="w-6 h-6 text-emerald-950" />
                      </div>
                      <div>
                        <div className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">Tahun Berdiri</div>
                        <div className="text-2xl font-black text-[#fef84c]">{profileData.sejarah.tahun}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-[#00d082] text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5 shadow-md">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">Didirikan Oleh</div>
                        <div className="text-sm font-bold text-white leading-snug mt-0.5">
                          {profileData.sejarah.pendiri}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* 3. Visi & Misi */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Visi (5 cols) */}
        <div className="lg:col-span-5">
          <FadeIn direction="right">
            <div className="h-full bg-gradient-to-br from-[#064e3b] to-[#012519] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl border-t-4 border-[#fef84c]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00d082]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#fef84c] text-xs font-bold uppercase tracking-wider mb-6">
                <Target className="w-4 h-4 text-[#fef84c]" />
                VISI KEPENGURUSAN
              </div>
              <p className="text-lg sm:text-xl font-bold leading-relaxed text-emerald-50">
                &ldquo;{profileData.visi}&rdquo;
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white p-1.5 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Image
                    src="/logo/Bem.PNG"
                    alt="Logo BEM STIKes Borneo Nusantara"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">BEM STIKes Borneo Nusantara</div>
                  <div className="text-xs text-emerald-300">Periode Aktif 2025/2026</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Misi (7 cols) */}
        <div className="lg:col-span-7">
          <FadeIn direction="left">
            <div className="h-full bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#064e3b] text-xs font-bold uppercase tracking-wider mb-6">
                <Award className="w-4 h-4 text-[#00d082]" />
                MISI UTAMA
              </div>
              <div className="space-y-4">
                {(profileData.misi || []).map((m, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-xl bg-[#00d082] text-white flex items-center justify-center font-black text-xs shadow-sm mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {m}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Nilai-Nilai Organisasi */}
      <section>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
              PRINSIP DASAR
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Nilai &amp; Budaya Organisasi
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Fondasi integritas yang mendasari setiap langkah gerak BEM STIKes Borneo Nusantara.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(profileData.nilaiOrganisasi || []).map((item, idx) => (
            <StaggerItem key={idx}>
              <Card hoverEffect accentBorder className="h-full p-6 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  {iconMap[item.iconName] || <ShieldCheck className="w-6 h-6 text-[#00d082]" />}
                </div>
                <h4 className="font-bold text-base text-[#064e3b] pt-1">{item.judul}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.deskripsi}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
