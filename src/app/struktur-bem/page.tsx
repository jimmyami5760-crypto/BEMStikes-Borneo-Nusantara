import React from 'react';
import type { Metadata } from 'next';
import { Users } from 'lucide-react';
import { StrukturChart } from '@/components/sections/StrukturChart';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Struktur Organisasi BEM',
  description:
    'Bagan organisasi, jajaran pimpinan BPH, koordinator divisi, dan staf Badan Eksekutif Mahasiswa STIKes Borneo Nusantara.',
};

export default function StrukturBemPage() {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-emerald-50/40 via-white to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="yellow" size="md" className="mb-3">
            BAGAN ORGANISASI
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Struktur Kepengurusan BEM DIII Radiologi
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Periode Kepengurusan Aktif 2025/2026 • Bersatu dalam visi membangun sinergi dan integritas mahasiswa radiologi STIKes Borneo Nusantara.
          </p>
        </div>

        {/* Chart & Divisions */}
        <StrukturChart />
      </div>
    </div>
  );
}
