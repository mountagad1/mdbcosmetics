// app/[locale]/terms/page.tsx
'use client';

import { Language, translations } from '@/data/translations';
import { legalContent } from '@/data/legal';

export default function TermsPage({ params }: { params: { locale: Language } }) {
  const locale = params.locale;
  const content = legalContent[locale].terms;

  return (
    <div className="legal-page">
      <div className="page-header">
        <h1>{content.title}</h1>
        <p>{content.lastUpdated}</p>
      </div>

      <div className="legal-content">
        {content.sections.map((section, index) => (
          <section key={index} className="legal-section">
            <h2>{section.heading}</h2>
            <div className="legal-text">
              {section.content.split('\\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="legal-footer">
        <p>
          {locale === 'fr'
            ? 'Pour toute question, contactez-nous à legal@mdbcosmetics.com'
            : 'For any questions, contact us at legal@mdbcosmetics.com'}
        </p>
      </div>
    </div>
  );
}
