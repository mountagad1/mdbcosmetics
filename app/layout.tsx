import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mdbcosmetics.fr'),
  title: {
    default: 'MDB Cosmetics — Beauté & Hygiène en France',
    template: '%s | MDB Cosmetics',
  },
  description: 'Guides beauté experts, soins de la peau, cosmétiques bio et produits d\'hygiène en France. Conseils par ville, type de peau et budget.',
  keywords: ['cosmétiques', 'beauté', 'skincare', 'hygiène', 'bio', 'France'],
  authors: [{ name: 'MDB Cosmetics' }],
  creator: 'MDB Cosmetics',
  publisher: 'MDB Cosmetics',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://mdbcosmetics.fr',
    siteName: 'MDB Cosmetics',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MDB Cosmetics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mdbcosmetics',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
