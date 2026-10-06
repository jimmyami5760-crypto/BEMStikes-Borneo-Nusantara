'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, User, ArrowRight, Tag, AlertCircle } from 'lucide-react';
import { publikasi } from '@/data/publikasi';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatTanggalIndonesia } from '@/lib/utils';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/MotionWrapper';

interface PublikasiListProps {
  limit?: number;
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
}

export function PublikasiList({
  limit,
  showFilters = true,
  title,
  subtitle,
}: PublikasiListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Pengumuman', 'Berita', 'Kegiatan', 'Artikel'];

  const filteredItems = useMemo(() => {
    return publikasi.filter((item) => {
      const matchCategory =
        selectedCategory === 'Semua' || item.kategori === selectedCategory;
      const matchSearch =
        item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ringkasan.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div className="space-y-8">
      {/* Title & Filter Bar */}
      {(title || showFilters) && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          {title && (
            <div>
              <Badge variant="soft" size="sm" className="mb-2">
                PAPAN PENGUMUMAN &amp; BERITA
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#064e3b]">
                {title}
              </h2>
              {subtitle && <p className="text-sm text-slate-600 mt-1">{subtitle}</p>}
            </div>
          )}

          {showFilters && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              {/* Search input */}
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari pengumuman..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#00d082] focus:border-transparent transition-all"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => {
                  const active = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
                        active
                          ? 'bg-[#00d082] text-white shadow-sm'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Grid of Publications */}
      {displayedItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 p-8">
          <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h4 className="text-base font-bold text-slate-700">Tidak ada publikasi ditemukan</h4>
          <p className="text-xs text-slate-500 mt-1">
            Coba gunakan kata kunci lain atau pilih kategori yang berbeda.
          </p>
        </div>
      ) : (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => {
            const isImportant = item.penting;
            return (
              <StaggerItem key={item.slug}>
                <Card
                  hoverEffect
                  accentBorder={isImportant}
                  className="h-full flex flex-col justify-between group"
                >
                  <div>
                    {/* Image / Thumbnail */}
                    <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                      <Image
                        src={item.gambar}
                        alt={item.judul}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <Badge
                          variant={
                            item.kategori === 'Pengumuman'
                              ? 'yellow'
                              : item.kategori === 'Berita'
                              ? 'primary'
                              : 'white'
                          }
                          size="sm"
                        >
                          {item.kategori}
                        </Badge>
                        {isImportant && (
                          <Badge variant="primary" size="sm">
                            PENTING
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-[#00d082]" />
                          {formatTanggalIndonesia(item.tanggal)}
                        </span>
                        {item.penulis && (
                          <span className="flex items-center gap-1 font-medium">
                            <User className="w-3.5 h-3.5 text-slate-400" />
                            {item.penulis}
                          </span>
                        )}
                      </div>

                      <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-[#064e3b] transition-colors leading-snug line-clamp-2">
                        <Link href={`/publikasi/${item.slug}`}>{item.judul}</Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {item.ringkasan}
                      </p>

                      {/* Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.tags.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                    <Link
                      href={`/publikasi/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008453] group-hover:text-[#00d082] transition-colors"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[11px] text-slate-400 font-semibold">Resmi BEM</span>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      )}

      {limit && filteredItems.length > limit && (
        <div className="text-center pt-4">
          <Button href="/publikasi" variant="primary" size="lg">
            <span>Lihat Semua ({filteredItems.length}) Publikasi</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
