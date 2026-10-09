import React from 'react';
import type { Metadata } from 'next';
import { MediaGallery } from '@/components/sections/MediaGallery';
import { Badge } from '@/components/ui/Badge';
import { siteConfig } from '@/data/site';
import { Instagram, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dokumentasi Foto & Galeri Kegiatan',
  description:
    'Galeri dokumentasi foto resmi kegiatan mahasiswa, PKKMB lintas angkatan, Praktik Kerja Lapangan (PKL) rumah sakit, bakti sosial, dan agenda ormawa BEM STIKes Borneo Nusantara.',
};

export default function MediaInformasiPage() {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-emerald-50/40 via-white to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="yellow" size="md" className="mb-3">
            DOKUMENTASI FOTO &amp; KEGIATAN
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Dokumentasi Foto BEM Radiologi
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Arsip foto dokumentasi resmi perjalanan civitas akademika DIII Radiologi STIKes Borneo Nusantara, mulai dari PKKMB lintas angkatan, Praktik Kerja Lapangan (PKL) rumah sakit, bakti sosial, hingga peringatan hari besar keagamaan.
          </p>

          <div className="mt-5 flex items-center justify-center">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#fef84c] text-emerald-950 font-extrabold text-xs px-5 py-2.5 rounded-xl hover:brightness-95 transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4 text-emerald-950" />
              <span>Kunjungi Akun Resmi Instagram: {siteConfig.instagram}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Media Gallery */}
        <MediaGallery showFilters={true} />
      </div>
    </div>
  );
}
