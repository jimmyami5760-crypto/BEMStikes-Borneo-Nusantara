import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Tag,
  BookmarkCheck,
  Instagram,
} from 'lucide-react';
import { publikasi } from '@/data/publikasi';
import { siteConfig } from '@/data/site';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { formatTanggalIndonesia } from '@/lib/utils';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return publikasi.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = publikasi.find((p) => p.slug === params.slug);
  if (!item) {
    return {
      title: 'Publikasi Tidak Ditemukan',
    };
  }

  return {
    title: item.judul,
    description: item.ringkasan,
    openGraph: {
      title: item.judul,
      description: item.ringkasan,
      images: [{ url: item.gambar }],
    },
  };
}

export default function DetailPublikasiPage({ params }: PageProps) {
  const item = publikasi.find((p) => p.slug === params.slug);

  if (!item) {
    notFound();
  }

  // Related publications
  const relatedItems = publikasi
    .filter((p) => p.slug !== item.slug)
    .slice(0, 3);

  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-emerald-50/40 via-white to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/publikasi"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#008453] hover:text-[#00d082] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Daftar Publikasi</span>
          </Link>
        </div>

        {/* Article Container */}
        <article className="bg-white rounded-3xl border border-emerald-100 shadow-sm overflow-hidden">
          {/* Cover Hero */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-slate-900">
            <Image
              src={item.gambar}
              alt={item.judul}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-2">
              <Badge
                variant={
                  item.kategori === 'Pengumuman'
                    ? 'yellow'
                    : item.kategori === 'Berita'
                    ? 'primary'
                    : 'white'
                }
                size="md"
              >
                {item.kategori}
              </Badge>
              {item.penting && (
                <Badge variant="primary" size="md">
                  PENGUMUMAN PENTING
                </Badge>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-6">
            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pb-4 border-b border-slate-100">
              <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                <Calendar className="w-4 h-4 text-[#00d082]" />
                {formatTanggalIndonesia(item.tanggal)}
              </span>
              {item.penulis && (
                <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <User className="w-4 h-4 text-slate-400" />
                  Penulis: {item.penulis}
                </span>
              )}
              <span className="text-slate-400">•</span>
              <span className="text-xs bg-emerald-50 text-[#064e3b] px-2.5 py-0.5 rounded-md font-semibold">
                BEM DIII Radiologi
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              {item.judul}
            </h1>

            {/* Ringkasan Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border-l-4 border-[#00d082] text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
              {item.ringkasan}
            </div>

            {/* Main Content (Formatted Text) */}
            <div className="prose prose-emerald max-w-none text-slate-700 leading-relaxed space-y-4 pt-2 whitespace-pre-line text-sm sm:text-base">
              {item.isi}
            </div>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  Kata Kunci:
                </span>
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-50 text-[#064e3b] border border-emerald-100"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Call to follow Instagram */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-amber-50 to-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  Punya pertanyaan seputar pengumuman ini?
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Hubungi pengurus BEM melalui Instagram resmi kami @bem.atrocip.
                </p>
              </div>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#00d082] hover:bg-[#00ba74] text-white text-xs font-bold flex items-center gap-2 flex-shrink-0 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>Kirim DM Instagram</span>
              </a>
            </div>
          </div>
        </article>

        {/* Related Publications */}
        {relatedItems.length > 0 && (
          <section className="pt-8">
            <h3 className="text-xl font-extrabold text-slate-900 mb-6">
              Publikasi Lainnya
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedItems.map((r) => (
                <Card hoverEffect key={r.slug} className="p-4 space-y-2">
                  <Badge variant="soft" size="sm">
                    {r.kategori}
                  </Badge>
                  <h4 className="font-bold text-sm text-slate-900 line-clamp-2 leading-snug">
                    <Link href={`/publikasi/${r.slug}`} className="hover:text-[#00d082]">
                      {r.judul}
                    </Link>
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {formatTanggalIndonesia(r.tanggal)}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
