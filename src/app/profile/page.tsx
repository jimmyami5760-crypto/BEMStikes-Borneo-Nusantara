import React from 'react';
import type { Metadata } from 'next';
import { Compass } from 'lucide-react';
import { ProfileSection } from '@/components/sections/ProfileSection';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Profile Organisasi',
  description:
    'Profil resmi, visi, misi, nilai-nilai, dan program kerja BEM STIKes Borneo Nusantara Prodi DIII Radiologi.',
};

export default function ProfilePage() {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-emerald-50/40 via-white to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="yellow" size="md" className="mb-3">
            PROFIL BEM DIII RADIOLOGI
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Mengenal Lebih Dekat BEM STIKes Borneo Nusantara
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Menghadirkan kepengurusan yang adaptif, mengedepankan etika profesional kesehatan radiologi, dan melayani mahasiswa dengan sepenuh dedikasi.
          </p>
        </div>

        {/* Profile Content */}
        <ProfileSection showFull={true} />
      </div>
    </div>
  );
}
