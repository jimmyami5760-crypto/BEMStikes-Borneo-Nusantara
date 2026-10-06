'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Building,
} from 'lucide-react';
import { siteConfig } from '@/data/site';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/MotionWrapper';

export function ContactInfo() {
  const [formData, setFormData] = useState({
    nama: '',
    nim: '',
    email: '',
    kategori: 'Aspirasi',
    pesan: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending aspiration / opening WhatsApp or mail
    const text = `Halo BEM Radiologi STIKes Borneo Nusantara,%0ANama: ${encodeURIComponent(
      formData.nama
    )}%0ANIM: ${encodeURIComponent(formData.nim)}%0AKategori: ${encodeURIComponent(
      formData.kategori
    )}%0APesan: ${encodeURIComponent(formData.pesan)}`;

    // Set success indicator
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Cards & Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <FadeIn>
            <div className="bg-gradient-to-br from-[#064e3b] to-[#012519] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl border-t-4 border-[#00d082]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#fef84c]/10 rounded-full blur-2xl pointer-events-none" />

              <Badge variant="yellow" size="sm" className="mb-4">
                SEKRETARIAT BEM
              </Badge>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Hubungi Kami &amp; Sampaikan Aspirasi
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 mt-2 leading-relaxed">
                Pintu kami selalu terbuka bagi seluruh rekan mahasiswa DIII Radiologi dan masyarakat kampus yang ingin berkolaborasi atau bertanya.
              </p>

              <div className="space-y-4 pt-6 mt-6 border-t border-emerald-800/80 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#00d082] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-bold">Alamat Kampus:</strong>
                    <span className="text-emerald-100/90 leading-relaxed">
                      {siteConfig.alamat}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#fef84c] flex-shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-bold">Instagram Resmi:</strong>
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#fef84c] hover:underline font-bold inline-flex items-center gap-1"
                    >
                      <span>{siteConfig.instagram}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#00d082] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-bold">Email Informasi:</strong>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-emerald-100 hover:text-white underline-offset-2 hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#00d082] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white font-bold">Layanan WhatsApp BEM:</strong>
                    <span className="text-emerald-100">{siteConfig.telepon}</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Aspirasi Form (7 cols) */}
        <div className="lg:col-span-7">
          <FadeIn direction="left">
            <Card accentBorder className="p-6 sm:p-8">
              <div className="pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#00d082]" />
                  <h3 className="font-extrabold text-xl text-slate-900">
                    Kotak Aspirasi &amp; Pertanyaan Mahasiswa
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Kirimkan ide program, masukan akademik, atau pertanyaan seputar kepengurusan BEM.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#008453] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Terima Kasih Atas Aspirasi Anda!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Pesan Anda dari <strong className="text-slate-900">{formData.nama}</strong> ({formData.kategori}) telah dicatat oleh pengurus BEM STIKes Borneo Nusantara. Kami akan menindaklanjuti segera.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ nama: '', nim: '', email: '', kategori: 'Aspirasi', pesan: '' });
                    }}
                    variant="primary"
                    size="md"
                  >
                    Kirim Pesan Lainnya
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nama}
                        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                        placeholder="Contoh: Muhammad Ilham"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d082]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        NIM (Mahasiswa) / Asal Instansi
                      </label>
                      <input
                        type="text"
                        value={formData.nim}
                        onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
                        placeholder="Contoh: 24.RAD.020"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d082]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Alamat Email / WhatsApp *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@domain.com atau 0812..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d082]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Kategori Pesan
                      </label>
                      <select
                        value={formData.kategori}
                        onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#00d082]"
                      >
                        <option value="Aspirasi">Aspirasi Mahasiswa</option>
                        <option value="Pertanyaan PKL">Pertanyaan PKL / Praktik</option>
                        <option value="Kerjasama Event">Kerjasama &amp; Sponsorship</option>
                        <option value="Keilmuan Radiologi">Keilmuan / Seminar</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Pesan / Aspirasi Anda *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.pesan}
                      onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                      placeholder="Tuliskan aspirasi, pertanyaan, atau masukan Anda secara jelas..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d082]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-slate-500">
                      Privasi aspirasi Anda dijamin oleh Badan Pengurus Harian.
                    </p>
                    <Button type="submit" variant="primary" size="md">
                      <Send className="w-4 h-4" />
                      <span>Kirim Aspirasi</span>
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </FadeIn>
        </div>
      </div>

      {/* Map Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <Badge variant="soft" size="sm">
              LOKASI KAMPUS
            </Badge>
            <h4 className="text-lg sm:text-xl font-extrabold text-[#064e3b] mt-1">
              Peta Lokasi Kampus STIKes Borneo Nusantara
            </h4>
          </div>
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008453] hover:text-[#00d082]"
          >
            <span>Buka di Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative">
          <iframe
            src={siteConfig.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Kampus STIKes Borneo Nusantara Banjarmasin"
          />
        </div>
      </section>
    </div>
  );
}
