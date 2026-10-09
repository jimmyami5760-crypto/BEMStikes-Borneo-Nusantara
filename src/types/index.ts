export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  kampus: string;
  prodi: string;
  alamat: string;
  email: string;
  telepon: string;
  instagram: string;
  instagramUrl: string;
  googleMapsUrl: string;
  mapsEmbedUrl: string;
}

export interface Pengurus {
  id: string;
  nama: string;
  jabatan: string;
  divisi: string;
  foto: string;
  periode: string;
  instagram?: string;
  nim?: string;
  tugasUtama?: string;
}

export interface Publikasi {
  slug: string;
  judul: string;
  tanggal: string;
  kategori: 'Pengumuman' | 'Berita' | 'Kegiatan' | 'Artikel';
  ringkasan: string;
  isi: string;
  gambar: string;
  penulis?: string;
  tags?: string[];
  penting?: boolean;
}

export interface MediaItem {
  id: string;
  judul: string;
  tipe: 'dokumentasi' | string;
  file: string;
  tanggal: string;
  deskripsi?: string;
  link?: string;
}

export interface ProgramKerja {
  nama: string;
  deskripsi: string;
  target: string;
  status: 'Terlaksana' | 'Sedang Berjalan' | 'Mendatang';
}

export interface DivisiProgram {
  divisi: string;
  program: ProgramKerja[];
}

export interface NilaiOrganisasi {
  judul: string;
  deskripsi: string;
  iconName: string;
}

export interface SejarahBEM {
  paragraf1: string;
  paragraf2: string;
  tahun: string;
  pendiri: string;
}

export interface ProfileData {
  tentang: string;
  sejarah?: SejarahBEM;
  visi: string;
  misi: string[];
  tujuan: string[];
  nilaiOrganisasi: NilaiOrganisasi[];
  programKerja: DivisiProgram[];
}
