import React from 'react';
import type { Metadata } from 'next';
import { PublikasiList } from '@/components/sections/PublikasiList';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Publikasi & Pengumuman',
  description:
    'Papan informasi terpadu: pengumuman akademik, berita acara, agenda kegiatan ormawa, dan artikel ilmiah radiologi.',
};

export default function PublikasiPage() {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-emerald-50/40 via-white to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="yellow" size="md" className="mb-3">
            PAPAN INFORMASI TERPADU
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Publikasi, Berita, &amp; Pengumuman
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Temukan rilis resmi seputar praktikum lapangan rumah sakit, seminar nasional, kegiatan bakti sosial, dan edukasi seputar dunia radiologi.
          </p>
        </div>

        {/* Publikasi List with Filters */}
        <PublikasiList showFilters={true} />
      </div>
    </div>
  );
}
