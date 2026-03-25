// components/Footer.tsx
'use client';

import { Language, translations } from '@/data/translations';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ locale }: { locale: Language }) {
  const t = translations[locale];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo-wrapper">
              <Image
                src="/logo-removebg-preview.png"
                alt="MDB Cosmetics"
                width={40}
                height={40}
              />
              <h3>MDB Cosmetics</h3>
            </div>
            <p className="footer-description">{t.footer.aboutText}</p>
          </div>

          <div className="footer-section">
            <h4>{t.footer.links}</h4>
            <ul className="footer-links">
              <li>
                <Link href={`/${locale}/privacy`}>{t.footer.privacy}</Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`}>{t.footer.terms}</Link>
              </li>
              <li>
                <Link href={`/${locale}/disclaimer`}>{t.footer.disclaimer}</Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`}>{t.footer.contact}</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Amazon Associates</h4>
            <p className="affiliate-notice">
              MDB Cosmetics participe au Programme d'Affiliation Amazon EU. Nous percevons des commissions sur les achats éligibles.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t.footer.copyright}</p>
          <div className="affiliate-badge">
            Amazon Associates Participant (tag: koopon02-21)
          </div>
        </div>
      </div>
    </footer>
  );
}
