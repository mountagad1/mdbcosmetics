// app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { translations, Language } from '@/data/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

interface Props {
  children: ReactNode;
  params: { locale: Language };
}

export async function generateMetadata({ params }: { params: { locale: Language } }): Promise<Metadata> {
  const t = translations[params.locale];
  return {
    title: t.site.title,
    description: t.site.description,
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default function LocaleLayout({ children, params }: Props) {
  const locale = params.locale as Language;
  const t = translations[locale];

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`locale-${locale}`}>
        <Header locale={locale} />
        <main className="main-content">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
