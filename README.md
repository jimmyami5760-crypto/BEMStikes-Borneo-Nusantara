# Website BEM STIKes Borneo Nusantara – Prodi DIII Radiologi

Website resmi **Badan Eksekutif Mahasiswa (BEM)** Program Studi DIII Radiologi, STIKes Borneo Nusantara. Website ini berfungsi sebagai **papan informasi (board information)** untuk mahasiswa dan masyarakat kampus.

## Ketentuan Utama

- Tanpa database
- Tanpa fitur login / autentikasi
- Seluruh konten disimpan sebagai file statis (TypeScript/JSON) di folder `data/`
- Bahasa antarmuka: Indonesia
- Responsif: desktop, tablet, mobile

## Tech Stack

| Kebutuhan | Teknologi |
|---|---|
| Bahasa / Library | React.js |
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Animasi | Framer Motion (mendukung `prefers-reduced-motion`) |
| Deployment | Vercel / static export |

## Menu Navbar

| Menu | Route | Fungsi |
|---|---|---|
| Profile | `/profile` | Tentang BEM, visi, misi, tujuan, program kerja |
| Struktur BEM | `/struktur-bem` | Bagan organisasi, ketua, wakil, sekretaris, bendahara, divisi |
| Publikasi | `/publikasi` | Pengumuman, berita, kegiatan, artikel |
| Media Informasi | `/media-informasi` | Poster, infografis, dokumentasi foto/video, link Instagram |
| Kontak | `/kontak` | Alamat, Instagram, email, peta lokasi |

Halaman beranda (`/`) menampilkan hero, ringkasan BEM, publikasi terbaru, dan cuplikan media.

## Struktur Folder

```
bem-website/
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── logo/
│   │   ├── logo-bem.png
│   │   └── logo-stikes.png
│   ├── images/
│   │   ├── struktur/          # foto pengurus
│   │   ├── publikasi/         # gambar publikasi
│   │   └── media/             # poster, infografis, dokumentasi
│   └── favicon.ico
├── data/                      # SEMUA konten diedit di sini
│   ├── site.ts                # nama, tagline, kontak, sosial media
│   ├── profile.ts             # visi, misi, tujuan, program kerja
│   ├── struktur.ts            # daftar pengurus & divisi
│   ├── publikasi.ts           # daftar publikasi
│   └── media.ts               # daftar media informasi
└── src/
    ├── app/
    │   ├── layout.tsx         # layout global (Navbar + Footer)
    │   ├── page.tsx           # Beranda
    │   ├── globals.css
    │   ├── profile/page.tsx
    │   ├── struktur-bem/page.tsx
    │   ├── publikasi/
    │   │   ├── page.tsx       # daftar publikasi
    │   │   └── [slug]/page.tsx  # detail publikasi (statis)
    │   ├── media-informasi/page.tsx
    │   └── kontak/page.tsx
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   ├── MobileMenu.tsx
    │   │   └── Footer.tsx
    │   ├── sections/
    │   │   ├── Hero.tsx
    │   │   ├── ProfileSection.tsx
    │   │   ├── StrukturChart.tsx
    │   │   ├── PublikasiList.tsx
    │   │   ├── MediaGallery.tsx
    │   │   └── ContactInfo.tsx
    │   ├── ui/                # komponen dasar (Button, Card, Badge, dll.)
    │   └── motion/            # wrapper animasi (FadeIn, Stagger, dll.)
    ├── lib/
    │   └── utils.ts
    └── types/
        └── index.ts           # tipe data (Member, Publikasi, Media)
```

## Contoh Format Data

**`data/struktur.ts`**
```ts
export const pengurus = [
  { nama: "Nama Lengkap", jabatan: "Ketua", divisi: "Inti", foto: "/images/struktur/ketua.jpg" },
];
```

**`data/publikasi.ts`**
```ts
export const publikasi = [
  {
    slug: "judul-publikasi",
    judul: "Judul Publikasi",
    tanggal: "2026-01-01",
    kategori: "Pengumuman",
    ringkasan: "Ringkasan singkat.",
    isi: "Isi lengkap publikasi.",
    gambar: "/images/publikasi/contoh.jpg",
  },
];
```

**`data/media.ts`**
```ts
export const media = [
  { judul: "Poster Kegiatan", tipe: "poster", file: "/images/media/poster-1.jpg", tanggal: "2026-01-01" },
];
```

## Cara Update Konten

1. Buka file yang sesuai di folder `data/`
2. Tambah atau ubah data
3. Letakkan gambar di folder `public/images/`
4. Commit dan push, lalu website otomatis ter-deploy

## Menjalankan Proyek

```bash
# install dependensi
npm install

# mode pengembangan
npm run dev

# build produksi
npm run build

# jalankan hasil build
npm start
```

Buka `http://localhost:3000`.

## Prinsip Desain

- Tampilan bersih, profesional, dan mudah dibaca sebagai papan informasi
- Palet warna mengikuti logo BEM dan STIKes
- Animasi halus dan tidak berlebihan
- Aksesibel: kontras warna baik, alt text pada gambar, navigasi keyboard

## Kontak

- Instagram: [@bem.atrocip](https://instagram.com/bem.atrocip)
- Alamat: Jl. Pekapuran B Laut, Banjarmasin, Kalimantan Selatan

## Lisensi

Hak cipta © BEM STIKes Borneo Nusantara – Prodi DIII Radiologi.