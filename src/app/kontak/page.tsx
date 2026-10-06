import React from 'react';
import type { Metadata } from 'next';
import { ContactInfo } from '@/components/sections/ContactInfo';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Kontak & Sekretariat',
  description:
    'Alamat sekretariat BEM STIKes Borneo Nusantara, Instagram @bem.atrocip, email, dan peta lokasi kampus di Banjarmasin.',
};

export default function KontakPage() {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-emerald-50/40 via-white to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="yellow" size="md" className="mb-3">
            SEKRETARIAT &amp; LAYANAN INFORMASI
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Hubungi BEM STIKes Borneo Nusantara
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Jl. Pekapuran B Laut, Banjarmasin, Kalimantan Selatan. Kami siap melayani aspirasi mahasiswa, kerjasama organisasi, dan pertanyaan akademik.
          </p>
        </div>

        {/* Contact info and Maps */}
        <ContactInfo />
      </div>
    </div>
  );
}
