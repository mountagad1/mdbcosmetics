// app/[locale]/cities/page.tsx
'use client';

import { Language, translations } from '@/data/translations';
import { cities } from '@/data/products';
import Link from 'next/link';

export default function CitiesPage({ params }: { params: { locale: Language } }) {
  const locale = params.locale;
  const t = translations[locale];

  const localeCountries = locale === 'fr' ? ['fr'] : ['en'];
  const citiesList = localeCountries.flatMap(country =>
    cities[country as keyof typeof cities].map(city => ({
      id: city.id,
      name: city.name,
      country,
    }))
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{t.nav.cities}</h1>
        <p>
          {locale === 'fr'
            ? 'Trouvez les meilleurs produits dans votre région'
            : 'Find the best products in your region'}
        </p>
      </div>

      <div className="cities-grid">
        {citiesList.map(city => (
          <Link
            key={city.id}
            href={`/${locale}/cities/${city.id}`}
            className="city-card"
          >
            <div className="city-icon">📍</div>
            <h3>{city.name}</h3>
            <span className="explore">
              {locale === 'fr' ? 'Explorer' : 'Explore'} →
            </span>
          </Link>
        ))}
      </div>

      <div className="info-box">
        <h3>
          {locale === 'fr'
            ? 'Services par ville'
            : 'Services by city'}
        </h3>
        <p>
          {locale === 'fr'
            ? 'Nous offrons des recommandations de produits personnalisées pour chaque région.'
            : 'We offer personalized product recommendations for each region.'}
        </p>
      </div>
    </div>
  );
}
