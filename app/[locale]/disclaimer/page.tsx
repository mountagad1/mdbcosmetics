// app/[locale]/disclaimer/page.tsx
'use client';

import { Language, translations } from '@/data/translations';
import { legalContent } from '@/data/legal';

export default function DisclaimerPage({ params }: { params: { locale: Language } }) {
  const locale = params.locale;
  const content = legalContent[locale].disclaimer;

  return (
    <div className="legal-page">
      <div className="page-header">
        <h1>{content.title}</h1>
        <p>{content.lastUpdated}</p>
      </div>

      <div className="legal-content">
        <div className="disclaimer-warning">
          <strong>
            {locale === 'fr'
              ? '⚠️ Avertissement important'
              : '⚠️ Important Warning'}
          </strong>
        </div>

        <section className="legal-section">
          <div className="legal-text">
            {content.content.split('\\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </section>
      </div>

      <div className="legal-footer">
        <p>
          {locale === 'fr'
            ? 'Pour toute question concernant nos affiliations, contactez-nous à affiliate@mdbcosmetics.com'
            : 'For any questions about our affiliations, contact us at affiliate@mdbcosmetics.com'}
        </p>
      </div>
    </div>
  );
}
