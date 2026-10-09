'use client';

import React, { useState, useMemo } from 'react';
import { Eye, ExternalLink, Calendar, Filter, X, ZoomIn, Search, Camera } from 'lucide-react';
import { media } from '@/data/media';
import { MediaItem } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SmartImage } from '@/components/ui/SmartImage';
import { formatTanggalIndonesia } from '@/lib/utils';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/MotionWrapper';

interface MediaGalleryProps {
  limit?: number;
  showFilters?: boolean;
}

export function MediaGallery({ limit, showFilters = true }: MediaGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const categories = [
    { label: 'Semua Dokumentasi', value: 'semua' },
    { label: 'PKKMB', value: 'pkkmb' },
    { label: 'PKL Rumah Sakit', value: 'pkl' },
    { label: 'Sosial & Religi', value: 'sosial-religi' },
  ];

  const filteredMedia = useMemo(() => {
    return media.filter((item) => {
      // 1. Category filter
      let matchCat = true;
      const lowerJudul = item.judul.toLowerCase();
      const lowerDesc = (item.deskripsi || '').toLowerCase();

      if (activeCategory === 'pkkmb') {
        matchCat = lowerJudul.includes('pkkmb') || lowerDesc.includes('pkkmb');
      } else if (activeCategory === 'pkl') {
        matchCat = lowerJudul.includes('pkl') || lowerDesc.includes('pkl') || lowerJudul.includes('praktik');
      } else if (activeCategory === 'sosial-religi') {
        matchCat =
          lowerJudul.includes('panti') ||
          lowerJudul.includes('buka puasa') ||
          lowerJudul.includes('isra') ||
          lowerJudul.includes('maulid') ||
          lowerJudul.includes('banjir') ||
          lowerJudul.includes('bakti');
      }

      // 2. Search query filter
      const matchSearch =
        searchQuery === '' ||
        lowerJudul.includes(searchQuery.toLowerCase()) ||
        lowerDesc.includes(searchQuery.toLowerCase());

      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedMedia = limit ? filteredMedia.slice(0, limit) : filteredMedia;

  return (
    <div className="space-y-8">
      {/* Filter and Search Bar */}
      {showFilters && (
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-[#00d082]" />
            <div>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Galeri Dokumentasi Foto
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Format Didukung: <strong>.JPG</strong>, <strong>.PNG</strong>, <strong>.JPEG</strong> ({media.length} Foto Tersedia)
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari dokumentasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-48 pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#00d082]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => {
                const active = activeCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => setActiveCategory(cat.value)}
                    className={`text-xs font-bold px-3.5 py-1.5 rounded-xl transition-all ${
                      active
                        ? 'bg-[#00d082] text-white shadow-md shadow-[#00d082]/20'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Grid of Media Items */}
      {displayedMedia.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
          <Camera className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h4 className="text-base font-bold text-slate-700">Tidak ada dokumentasi ditemukan</h4>
          <p className="text-xs text-slate-500 mt-1">
            Coba gunakan kata kunci pencarian lain atau pilih kategori Semua Dokumentasi.
          </p>
        </div>
      ) : (
        <StaggerContainer key={activeCategory + searchQuery} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedMedia.map((item) => (
            <StaggerItem key={item.id}>
              <Card hoverEffect className="group overflow-hidden flex flex-col justify-between h-full border border-emerald-100/80 shadow-sm">
                <div
                  className="relative aspect-[4/3] bg-slate-900 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedMedia(item)}
                >
                  <SmartImage
                    src={item.file}
                    alt={item.judul}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                    <div className="flex justify-end">
                      <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white shadow-sm">
                        <ZoomIn className="w-5 h-5" />
                      </span>
                    </div>
                    <div className="text-white space-y-1">
                      <p className="text-xs font-bold text-[#fef84c]">Klik untuk memperbesar</p>
                      <p className="text-xs text-white/90 line-clamp-2">{item.deskripsi}</p>
                    </div>
                  </div>

                  {/* Type Badge: Pure Dokumentasi Foto */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="primary" size="sm" className="shadow-md">
                      Dokumentasi Foto
                    </Badge>
                  </div>
                </div>

                {/* Bottom Card Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#00d082]" />
                      {formatTanggalIndonesia(item.tanggal)}
                    </span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#008453] hover:text-[#00d082] font-bold"
                      >
                        <span>Instagram</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <h4
                    className="font-extrabold text-sm sm:text-base text-slate-900 line-clamp-2 leading-snug group-hover:text-[#064e3b] transition-colors cursor-pointer"
                    onClick={() => setSelectedMedia(item)}
                  >
                    {item.judul}
                  </h4>

                  {item.deskripsi && (
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.deskripsi}
                    </p>
                  )}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50 flex-shrink-0">
              <div className="flex items-center gap-2">
                <Badge variant="primary" size="sm">
                  Dokumentasi Foto
                </Badge>
                <span className="text-xs text-slate-500 font-medium">
                  {formatTanggalIndonesia(selectedMedia.tanggal)}
                </span>
              </div>
              <button
                onClick={() => setSelectedMedia(null)}
                className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
                aria-label="Tutup pratinjau"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Image Display */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-950 flex-1 min-h-[300px]">
              <SmartImage
                src={selectedMedia.file}
                alt={selectedMedia.judul}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-5 sm:p-6 space-y-2 bg-white flex-shrink-0 border-t border-slate-100">
              <h3 className="font-black text-base sm:text-lg text-slate-900 leading-snug">
                {selectedMedia.judul}
              </h3>
              {selectedMedia.deskripsi && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedMedia.deskripsi}
                </p>
              )}
              {selectedMedia.link && (
                <div className="pt-2">
                  <a
                    href={selectedMedia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-[#fef84c] text-emerald-950 hover:brightness-95 transition-all shadow-sm"
                  >
                    <span>Kunjungi Akun Resmi Instagram BEM</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
