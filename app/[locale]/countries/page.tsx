// app/[locale]/countries/page.tsx
'use client';

import { Language, translations } from '@/data/translations';
import { countries } from '@/data/products';
import Link from 'next/link';

export default function CountriesPage({ params }: { params: { locale: Language } }) {
  const locale = params.locale;
  const t = translations[locale];

  const countryNames = {
    fr: 'France',
    en: 'Royaume-Uni',
    de: 'Allemagne',
    es: 'Espagne',
    it: 'Italie',
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{t.nav.countries}</h1>
        <p>
          {locale === 'fr'
            ? 'Sélectionnez votre pays pour voir les produits disponibles'
            : 'Select your country to see available products'}
        </p>
      </div>

      <div className="countries-grid">
        {countries.map(country => (
          <Link
            key={country.code}
            href={`/${locale}/countries/${country.code}`}
            className="country-card"
          >
            <div className="country-flag">🌍</div>
            <h3>{locale === 'fr' ? country.name_fr : country.name_en}</h3>
            <p className="country-domain">{country.amazonDomain}</p>
            <span className="arrow">→</span>
          </Link>
        ))}
      </div>

      <div className="info-box">
        <h3>
          {locale === 'fr'
            ? 'Comment ça fonctionne?'
            : 'How does it work?'}
        </h3>
        <p>
          {locale === 'fr'
            ? 'Chaque pays a sa propre sélection de produits et ses propres prix sur Amazon. Sélectionnez votre pays pour voir les offres disponibles.'
            : 'Each country has its own selection of products and prices on Amazon. Select your country to see available offers.'}
        </p>
      </div>
    </div>
  );
}
