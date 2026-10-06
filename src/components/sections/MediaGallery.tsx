'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, ExternalLink, Calendar, Filter, X, ZoomIn } from 'lucide-react';
import { media } from '@/data/media';
import { MediaItem } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatTanggalIndonesia } from '@/lib/utils';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/MotionWrapper';

interface MediaGalleryProps {
  limit?: number;
  showFilters?: boolean;
}

export function MediaGallery({ limit, showFilters = true }: MediaGalleryProps) {
  const [activeTab, setActiveTab] = useState<string>('semua');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const tabs = [
    { label: 'Semua Media', value: 'semua' },
    { label: 'Poster', value: 'poster' },
    { label: 'Infografis', value: 'infografis' },
    { label: 'Dokumentasi Foto', value: 'dokumentasi' },
  ];

  const filteredMedia =
    activeTab === 'semua'
      ? media
      : media.filter((item) => item.tipe === activeTab);

  const displayedMedia = limit ? filteredMedia.slice(0, limit) : filteredMedia;

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#00d082]" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Kategori Media:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const active = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                    active
                      ? 'bg-[#00d082] text-white shadow-md shadow-[#00d082]/20'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Grid of Media */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedMedia.map((item) => (
          <StaggerItem key={item.id}>
            <Card hoverEffect className="group overflow-hidden flex flex-col justify-between h-full">
              <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden cursor-pointer" onClick={() => setSelectedMedia(item)}>
                <Image
                  src={item.file}
                  alt={item.judul}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="text-white space-y-1">
                    <p className="text-xs font-bold text-[#fef84c]">Klik untuk memperbesar</p>
                    <p className="text-xs text-white/90 line-clamp-2">{item.deskripsi}</p>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <Badge
                    variant={item.tipe === 'poster' ? 'yellow' : item.tipe === 'infografis' ? 'primary' : 'white'}
                    size="sm"
                    className="capitalize shadow-md"
                  >
                    {item.tipe}
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

                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 line-clamp-2 leading-snug group-hover:text-[#064e3b] transition-colors">
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

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <Badge variant="primary" size="sm" className="capitalize">
                  {selectedMedia.tipe}
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
            <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] bg-slate-950">
              <Image
                src={selectedMedia.file}
                alt={selectedMedia.judul}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Info */}
            <div className="p-5 sm:p-6 space-y-2">
              <h3 className="font-black text-lg text-slate-900">{selectedMedia.judul}</h3>
              {selectedMedia.deskripsi && (
                <p className="text-sm text-slate-600 leading-relaxed">
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
                    <span>Lihat di Feed Instagram Resmi</span>
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
