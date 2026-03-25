// app/[locale]/products/page.tsx
'use client';

import { Language, translations } from '@/data/translations';
import { products, getAmazonAffiliateLink } from '@/data/products';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductsPage({ params }: { params: { locale: Language } }) {
  const locale = params.locale;
  const t = translations[locale];
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredProducts = selectedCategory
    ? products.filter(
        p => p.category === selectedCategory && p.countries.includes(locale)
      )
    : products.filter(p => p.countries.includes(locale));

  const categories = [
    { key: 'skincare', label: t.categories.skincare },
    { key: 'makeup', label: t.categories.makeup },
    { key: 'haircare', label: t.categories.haircare },
    { key: 'fragrance', label: t.categories.fragrance },
    { key: 'bodycare', label: t.categories.bodycare },
  ];

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>{t.products.title}</h1>
        <p>Découvrez notre sélection complète de cosmétiques</p>
      </div>

      <div className="products-container">
        {/* Sidebar */}
        <aside className="products-sidebar">
          <div className="filter-group">
            <h3>{t.products.filter}</h3>
            <div className="filter-options">
              <button
                className={`filter-btn ${selectedCategory === '' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('')}
              >
                {locale === 'fr' ? 'Tous les produits' : 'All products'}
              </button>
              {categories.map(category => (
                <button
                  key={category.key}
                  className={`filter-btn ${selectedCategory === category.key ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.key)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="products-main">
          <div className="products-count">
            {filteredProducts.length}{' '}
            {locale === 'fr' ? 'produits' : 'products'}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid-large">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card-large">
                  <div className="product-image-container">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="product-details">
                    <div className="product-category">
                      {t.categories[product.category as keyof typeof t.categories]}
                    </div>
                    <h2 className="product-name-large">{product.name}</h2>
                    <p className="product-brand-large">{product.brand}</p>
                    <p className="product-description">{product.description}</p>

                    <div className="product-meta">
                      <div className="rating-section">
                        <div className="stars">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <span key={i} className="star">
                                ★
                              </span>
                            ))}
                        </div>
                        <span className="rating-text">
                          {product.rating} / 5 ({product.reviews}{' '}
                          {locale === 'fr' ? 'avis' : 'reviews'})
                        </span>
                      </div>

                      <div className="price-section">
                        <div className="price-tag">${product.price.toFixed(2)}</div>
                        {product.originalPrice && (
                          <div className="original-price">
                            ${product.originalPrice.toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>

                    <a
                      href={getAmazonAffiliateLink(product.amazonAsin, locale)}\n                      target="_blank"
                      rel="noopener noreferrer"
                      className="buy-button"
                    >
                      {t.products.affiliate}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>
                {locale === 'fr'
                  ? 'Aucun produit trouvé'
                  : 'No products found'}
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
