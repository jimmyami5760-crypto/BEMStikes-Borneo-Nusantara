'use client';

import React, { useState, useMemo } from 'react';
import { Instagram, Users, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { pengurus } from '@/data/struktur';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SmartImage } from '@/components/ui/SmartImage';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/MotionWrapper';

const BADAN_PENGURUS = 'Badan Pengurus';

const normalizeText = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]/g, '');

export function StrukturChart() {
  const [selectedDivisi, setSelectedDivisi] = useState<string>('Semua');

  // Derive unique divisions dynamically to avoid any naming desync
  const divisions = useMemo(() => {
    const list = ['Semua'];
    // Pre-seed known divisions to keep preferred order
    const preferredOrder = [
      BADAN_PENGURUS,
      'Departemen Agama',
      'Departemen Olahraga',
      'Departemen Seni & Budaya',
      'Departemen Humas',
      'Departemen Pendidikan',
    ];

    preferredOrder.forEach((item) => {
      if (pengurus.some((p) => normalizeText(p.divisi) === normalizeText(item))) {
        list.push(item);
      }
    });

    // Add any remaining divisions from pengurus
    pengurus.forEach((p) => {
      if (p.divisi && !list.some((d) => normalizeText(d) === normalizeText(p.divisi))) {
        list.push(p.divisi);
      }
    });

    return list;
  }, []);

  // Filter with normalization for ultra-reliable matching
  const filteredPengurus = useMemo(() => {
    if (selectedDivisi === 'Semua') return pengurus;
    return pengurus.filter(
      (p) => normalizeText(p.divisi) === normalizeText(selectedDivisi)
    );
  }, [selectedDivisi]);

  // Group for hierarchical chart view (Badan Pengurus)
  const bpMembers = pengurus.filter(
    (p) => normalizeText(p.divisi) === normalizeText(BADAN_PENGURUS)
  );
  const ketua = bpMembers.find((p) =>
    normalizeText(p.jabatan).includes('ketua') && !normalizeText(p.jabatan).includes('wakil')
  );
  const wakil = bpMembers.find((p) =>
    normalizeText(p.jabatan).includes('wakil')
  );
  const otherBp = bpMembers.filter(
    (p) => p.id !== ketua?.id && p.id !== wakil?.id
  );

  return (
    <div className="space-y-12">
      {/* Visual Hierarchy Tree Spotlight for Badan Pengurus (only in 'Semua' or 'Badan Pengurus') */}
      {(selectedDivisi === 'Semua' || normalizeText(selectedDivisi) === normalizeText(BADAN_PENGURUS)) && (
        <section className="bg-gradient-to-b from-emerald-50/70 to-white p-6 sm:p-10 rounded-3xl border border-emerald-100 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <Badge variant="yellow" size="md" className="mb-2">
              BAGAN UTAMA
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#064e3b]">
              Badan Pengurus
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Struktur Kepengurusan BEM DIII Radiologi Angkatan 17 &mdash; Periode
              Kepengurusan Aktif 2025/2026
            </p>
          </div>

          {/* Ketua & Wakil Top Level */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
            {ketua && (
              <FadeIn direction="up" className="w-full md:w-1/2">
                <Card accentBorder className="p-6 text-center space-y-3 shadow-lg border-2 border-[#00d082]">
                  <div className="relative w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-md border-2 border-[#fef84c]">
                    <SmartImage
                      src={ketua.foto}
                      alt={ketua.nama}
                      fill
                      className="object-cover"
                      priority
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
                  {ketua.tugasUtama && (
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      &ldquo;{ketua.tugasUtama}&rdquo;
                    </p>
                  )}
                </Card>
              </FadeIn>
            )}

            {wakil && (
              <FadeIn direction="up" delay={0.1} className="w-full md:w-1/2">
                <Card accentBorder className="p-6 text-center space-y-3 shadow-lg border-2 border-emerald-300">
                  <div className="relative w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-md border-2 border-[#00d082]">
                    <SmartImage
                      src={wakil.foto}
                      alt={wakil.nama}
                      fill
                      className="object-cover"
                      priority
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
                  {wakil.tugasUtama && (
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      &ldquo;{wakil.tugasUtama}&rdquo;
                    </p>
                  )}
                </Card>
              </FadeIn>
            )}
          </div>

          {/* Sekretaris & Bendahara */}
          {otherBp.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
              {otherBp.map((item, idx) => (
                <FadeIn key={item.id} delay={0.2 + idx * 0.05}>
                  <Card accentBorder hoverEffect className="p-6 text-center space-y-3 shadow-md border border-emerald-100">
                    <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-md border-2 border-emerald-200">
                      <SmartImage
                        src={item.foto}
                        alt={item.nama}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <Badge variant="soft" size="sm">
                        {item.jabatan}
                      </Badge>
                      <h5 className="font-extrabold text-base text-[#064e3b] mt-2 leading-snug">
                        {item.nama}
                      </h5>
                      {item.nim && (
                        <p className="text-xs font-semibold text-slate-400">NIM: {item.nim}</p>
                      )}
                    </div>
                    {item.tugasUtama && (
                      <p className="text-xs text-slate-600 leading-relaxed italic line-clamp-2">
                        &ldquo;{item.tugasUtama}&rdquo;
                      </p>
                    )}
                  </Card>
                </FadeIn>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Filter Tabs by Departemen */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Daftar Seluruh Pengurus &amp; Departemen
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Menampilkan {filteredPengurus.length} anggota {selectedDivisi === 'Semua' ? 'BEM DIII Radiologi Angkatan 17' : selectedDivisi} (Periode 2025/2026)
            </p>
          </div>

          {/* Image Format Support Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-xl text-xs text-emerald-800 font-semibold self-start sm:self-auto">
            <ImageIcon className="w-4 h-4 text-[#00d082]" />
            <span>Format Foto Didukung: <strong>.JPG</strong>, <strong>.PNG</strong>, <strong>.JPEG</strong></span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {divisions.map((div) => {
            const active = selectedDivisi === div;
            const count =
              div === 'Semua'
                ? pengurus.length
                : pengurus.filter((p) => normalizeText(p.divisi) === normalizeText(div)).length;

            return (
              <button
                key={div}
                type="button"
                onClick={() => setSelectedDivisi(div)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                  active
                    ? 'bg-[#00d082] text-white shadow-md shadow-[#00d082]/30 scale-[1.02]'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-emerald-200'
                }`}
              >
                <span>{div}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    active ? 'bg-[#fef84c] text-emerald-950' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Pengurus Cards Grid with key={selectedDivisi} to re-trigger smooth entrance animation */}
        {filteredPengurus.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
            <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-700">Tidak ada pengurus pada departemen ini</h4>
            <p className="text-xs text-slate-500 mt-1">
              Silakan pilih kategori departemen lain pada pilihan di atas.
            </p>
          </div>
        ) : (
          <StaggerContainer
            key={selectedDivisi}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredPengurus.map((p) => (
              <StaggerItem key={p.id}>
                <Card hoverEffect accentBorder className="h-full flex flex-col justify-between p-5 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border border-emerald-100 bg-emerald-50">
                        <SmartImage
                          src={p.foto}
                          alt={p.nama}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <Badge
                          variant={
                            p.jabatan.includes('Ketua') || p.jabatan.includes('Koordinator')
                              ? 'yellow'
                              : 'soft'
                          }
                          size="sm"
                          className="mb-1"
                        >
                          {p.jabatan}
                        </Badge>
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug truncate" title={p.nama}>
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
        )}
      </div>
    </div>
  );
}