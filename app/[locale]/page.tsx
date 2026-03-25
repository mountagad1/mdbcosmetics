// app/[locale]/page.tsx
'use client';

import { Language, translations } from '@/data/translations';
import { products, getAmazonAffiliateLink } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';

export default function Home({ params }: { params: { locale: Language } }) {
  const locale = params.locale;
  const t = translations[locale];
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <Link href={`/${locale}/products`} className="cta-button">
            {t.hero.cta}
          </Link>
        </div>
        <div className="hero-background">
          <div className="gradient-orb gradient-1"></div>
          <div className="gradient-orb gradient-2"></div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="section-container">
          <h2 className="section-title">{t.products.title}</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="product-info">
                  <div className="product-brand">{product.brand}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-value">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <div className="product-price">
                    <span className="price">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="original-price">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <a
                    href={getAmazonAffiliateLink(product.amazonAsin, locale)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-link"
                  >
                    {t.products.affiliate}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Découvrez plus de produits</h2>
          <p>Parcourez notre large sélection de cosmétiques premium</p>
          <Link href={`/${locale}/products`} className="cta-button secondary">
            Voir tous les produits
          </Link>
        </div>
      </section>
    </div>
  );
}
