'use client';

import React from 'react';
import {
  ShieldCheck,
  Users,
  Sparkles,
  HeartHandshake,
  CheckCircle,
  Clock,
  Calendar,
  Compass,
  Target,
  Award,
} from 'lucide-react';
import { profileData } from '@/data/profile';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
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
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-12 space-y-4">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#064e3b]">
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
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg pt-2 max-w-4xl">
                {profileData.tentang}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Visi & Misi */}
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
                <div className="w-10 h-10 rounded-xl bg-[#fef84c] text-emerald-950 flex items-center justify-center font-black text-sm">
                  BN
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
                {profileData.misi.map((m, index) => (
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

      {/* 3. Nilai-Nilai Organisasi */}
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
          {profileData.nilaiOrganisasi.map((item, idx) => (
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

      {/* 4. Program Kerja Strategis */}
      {showFull && (
        <section className="pt-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#064e3b] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                RENCANA KERJA
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Program Kerja Unggulan Per Divisi
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Aksi nyata kepengurusan dalam bidang keilmuan radiologi, minat bakat, dan sosial kemasyarakatan.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-8">
            {profileData.programKerja.map((divisiGroup, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl border border-emerald-100 shadow-sm p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-8 bg-[#00d082] rounded-full" />
                      <h4 className="text-lg sm:text-xl font-bold text-[#064e3b]">
                        {divisiGroup.divisi}
                      </h4>
                    </div>
                    <Badge variant="soft" size="sm">
                      {divisiGroup.program.length} Program Kerja
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {divisiGroup.program.map((prog, pIdx) => {
                      const isDone = prog.status === 'Terlaksana';
                      const isOngoing = prog.status === 'Sedang Berjalan';
                      return (
                        <div
                          key={pIdx}
                          className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-emerald-200 transition-all space-y-3"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <h5 className="font-bold text-sm sm:text-base text-slate-900">
                              {prog.nama}
                            </h5>
                            <Badge
                              variant={isDone ? 'primary' : isOngoing ? 'yellow' : 'white'}
                              size="sm"
                              className="flex-shrink-0"
                            >
                              {isDone && <CheckCircle className="w-3 h-3 mr-1" />}
                              {isOngoing && <Clock className="w-3 h-3 mr-1" />}
                              {prog.status}
                            </Badge>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {prog.deskripsi}
                          </p>
                          <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
                            <Calendar className="w-3.5 h-3.5 text-[#00d082]" />
                            <span>Target: <strong className="text-slate-700">{prog.target}</strong></span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
