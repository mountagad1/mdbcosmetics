// components/Header.tsx
'use client';

import { Language, translations } from '@/data/translations';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Header({ locale }: { locale: Language }) {
  const pathname = usePathname();
  const t = translations[locale];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLocale = (newLocale: Language) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = path;
  };

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/products`, label: t.nav.products },
    { href: `/${locale}/countries`, label: t.nav.countries },
    { href: `/${locale}/cities`, label: t.nav.cities },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link href={`/${locale}`} className="logo-wrapper">
          <Image
            src="/logo-removebg-preview.png"
            alt="MDB Cosmetics"
            width={50}
            height={50}
            className="logo-image"
          />
          <span className="logo-text">MDB Cosmetics</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="locale-switcher">
            <button
              className={`locale-btn ${locale === 'fr' ? 'active' : ''}`}
              onClick={() => toggleLocale('fr')}
              aria-label="Français"
            >
              FR
            </button>
            <span className="locale-divider">|</span>
            <button
              className={`locale-btn ${locale === 'en' ? 'active' : ''}`}
              onClick={() => toggleLocale('en')}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
