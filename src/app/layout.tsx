import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://bem-stikes-borneo-nusantara.vercel.app'),
  title: {
    default: `${siteConfig.name} – Prodi DIII Radiologi`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'BEM STIKes Borneo Nusantara',
    'DIII Radiologi',
    'Radiografer Banjarmasin',
    'STIKes Borneo Nusantara',
    'BEM Radiologi',
    'Papan Informasi BEM',
    'bem.atrocip',
  ],
  authors: [{ name: 'BEM STIKes Borneo Nusantara' }],
  creator: 'BEM STIKes Borneo Nusantara',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://bem-stikes-borneo-nusantara.vercel.app',
    title: `${siteConfig.name} – Prodi DIII Radiologi`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-[#fbfdfc] selection:bg-[#fef84c] selection:text-[#063821]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
