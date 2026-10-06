'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Instagram, Shield, Award, Sparkles } from 'lucide-react';
import { pengurus } from '@/data/struktur';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/MotionWrapper';

export function StrukturChart() {
  const [selectedDivisi, setSelectedDivisi] = useState<string>('Semua');

  const divisions = [
    'Semua',
    'Badan Pengurus Harian',
    'Divisi Keilmuan & Penalaran Radiologi',
    'Divisi Komunikasi & Informasi (Kominfo)',
    'Divisi Pengabdian Masyarakat',
    'Divisi Minat & Bakat',
  ];

  const filteredPengurus =
    selectedDivisi === 'Semua'
      ? pengurus
      : pengurus.filter((p) => p.divisi === selectedDivisi);

  // Group for hierarchical chart view
  const bphMembers = pengurus.filter((p) => p.divisi === 'Badan Pengurus Harian');
  const ketua = bphMembers.find((p) => p.jabatan === 'Ketua BEM');
  const wakil = bphMembers.find((p) => p.jabatan === 'Wakil Ketua BEM');
  const otherBph = bphMembers.filter((p) => p.jabatan !== 'Ketua BEM' && p.jabatan !== 'Wakil Ketua BEM');

  return (
    <div className="space-y-12">
      {/* Visual Hierarchy Tree Spotlight for BPH */}
      {selectedDivisi === 'Semua' && (
        <section className="bg-gradient-to-b from-emerald-50/70 to-white p-6 sm:p-10 rounded-3xl border border-emerald-100 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <Badge variant="yellow" size="md" className="mb-2">
              BAGAN UTAMA
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#064e3b]">
              Pimpinan &amp; Pengurus Harian (BPH)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Badan Eksekutif Mahasiswa DIII Radiologi Periode 2025/2026
            </p>
          </div>

          {/* Ketua & Wakil Top Level */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
            {ketua && (
              <FadeIn direction="up" className="w-full md:w-1/2">
                <Card accentBorder className="p-6 text-center space-y-3 shadow-lg border-2 border-[#00d082]">
                  <div className="relative w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-md border-2 border-[#fef84c]">
                    <Image
                      src={ketua.foto}
                      alt={ketua.nama}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Badge variant="yellow" size="sm">
                      {ketua.jabatan}
                    </Badge>
                    <h4 className="font-extrabold text-base sm:text-lg text-[#064e3b] mt-2">
                      {ketua.nama}
                    </h4>
                    {ketua.nim && (
                      <p className="text-xs font-semibold text-slate-400">NIM: {ketua.nim}</p>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{ketua.tugasUtama}&rdquo;
                  </p>
                </Card>
              </FadeIn>
            )}

            {wakil && (
              <FadeIn direction="up" delay={0.1} className="w-full md:w-1/2">
                <Card accentBorder className="p-6 text-center space-y-3 shadow-lg border-2 border-emerald-300">
                  <div className="relative w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-md border-2 border-[#00d082]">
                    <Image
                      src={wakil.foto}
                      alt={wakil.nama}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Badge variant="primary" size="sm">
                      {wakil.jabatan}
                    </Badge>
                    <h4 className="font-extrabold text-base sm:text-lg text-[#064e3b] mt-2">
                      {wakil.nama}
                    </h4>
                    {wakil.nim && (
                      <p className="text-xs font-semibold text-slate-400">NIM: {wakil.nim}</p>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{wakil.tugasUtama}&rdquo;
                  </p>
                </Card>
              </FadeIn>
            )}
          </div>

          {/* Sekretaris & Bendahara */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 max-w-5xl mx-auto">
            {otherBph.map((item, idx) => (
              <FadeIn key={item.id} delay={0.2 + idx * 0.05}>
                <Card hoverEffect className="p-4 text-center space-y-2">
                  <div className="relative w-16 h-16 mx-auto rounded-xl overflow-hidden shadow-sm border border-emerald-100">
                    <Image
                      src={item.foto}
                      alt={item.nama}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge variant="soft" size="sm">
                    {item.jabatan}
                  </Badge>
                  <h5 className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-1">
                    {item.nama}
                  </h5>
                  {item.nim && (
                    <p className="text-[11px] text-slate-400 font-medium">NIM: {item.nim}</p>
                  )}
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Filter Tabs by Divisi */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Daftar Seluruh Pengurus &amp; Divisi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Menampilkan {filteredPengurus.length} anggota BEM STIKes Borneo Nusantara
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {divisions.map((div) => {
              const active = selectedDivisi === div;
              return (
                <button
                  key={div}
                  onClick={() => setSelectedDivisi(div)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all ${
                    active
                      ? 'bg-[#00d082] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {div}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pengurus Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPengurus.map((p) => (
            <StaggerItem key={p.id}>
              <Card hoverEffect accentBorder className="h-full flex flex-col justify-between p-5 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border border-emerald-100">
                      <Image
                        src={p.foto}
                        alt={p.nama}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <Badge
                        variant={p.jabatan.includes('Ketua') || p.jabatan.includes('Koordinator') ? 'yellow' : 'soft'}
                        size="sm"
                        className="mb-1"
                      >
                        {p.jabatan}
                      </Badge>
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug truncate">
                        {p.nama}
                      </h4>
                      {p.nim && (
                        <p className="text-[11px] font-semibold text-slate-400">
                          NIM: {p.nim}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-[#008453] uppercase tracking-wider mb-1">
                      {p.divisi}
                    </div>
                    {p.tugasUtama && (
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {p.tugasUtama}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer with Instagram / Periode */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-[11px] bg-slate-100 px-2 py-0.5 rounded-md">
                    {p.periode}
                  </span>
                  {p.instagram && (
                    <a
                      href={`https://instagram.com/${p.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-[#008453] hover:text-[#00d082]"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>@{p.instagram}</span>
                    </a>
                  )}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
