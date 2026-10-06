export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Profile', href: '/profile' },
  { label: 'Struktur BEM', href: '/struktur-bem' },
  { label: 'Publikasi', href: '/publikasi' },
  { label: 'Media Informasi', href: '/media-informasi' },
  { label: 'Kontak', href: '/kontak' },
];
