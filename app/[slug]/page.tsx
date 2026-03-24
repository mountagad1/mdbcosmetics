import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getAllSlugs,
  getPageBySlug,
  getRelatedPages,
  getCategoryLabel,
  getCategoryColor,
} from '@/lib/pages';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

interface Props {
  params: { slug: string };
}

const categoryStyles: Record<string, string> = {
  blush: 'bg-blush-100 text-blush-600 border-blush-200',
  sage: 'bg-sage-100 text-sage-600 border-sage-200',
  gold: 'bg-gold-100 text-gold-500 border-gold-200',
};

const categoryHeroGradient: Record<string, string> = {
  blush: 'from-blush-100 via-cream-50 to-cream-100',
  sage: 'from-sage-100 via-cream-50 to-cream-100',
  gold: 'from-gold-100 via-cream-50 to-cream-100',
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getPageBySlug(params.slug);
  if (!page) return {};

  const title = `${page.keyword.charAt(0).toUpperCase() + page.keyword.slice(1)} — Guide Beauté ${page.city}`;
  const description = page.intro.slice(0, 160);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://mdbcosmetics.fr/${page.slug}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://mdbcosmetics.fr/${page.slug}`,
    },
  };
}

export default function SlugPage({ params }: Props) {
  const page = getPageBySlug(params.slug);
  if (!page) notFound();

  const related = getRelatedPages(page);
  const color = getCategoryColor(page.category);
  const categoryLabel = getCategoryLabel(page.category);
  const badgeStyle = categoryStyles[color] || categoryStyles.blush;
  const heroGradient = categoryHeroGradient[color] || categoryHeroGradient.blush;

  // Structured data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.keyword,
    description: page.intro,
    author: { '@type': 'Organization', name: 'MDB Cosmetics' },
    publisher: { '@type': 'Organization', name: 'MDB Cosmetics', url: 'https://mdbcosmetics.fr' },
    mainEntityOfPage: `https://mdbcosmetics.fr/${page.slug}`,
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />

      <main>
        {/* Hero */}
        <section className={`bg-gradient-to-br ${heroGradient} py-16 md:py-24 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-grain opacity-20" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-charcoal-800/40 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blush-500 transition-colors">Accueil</Link>
              <span>/</span>
              <span className="capitalize">{categoryLabel}</span>
              {page.city !== 'France' && (
                <>
                  <span>/</span>
                  <span>{page.city}</span>
                </>
              )}
            </nav>

            {/* Badges */}
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className={`badge border ${badgeStyle}`}>{categoryLabel}</span>
              {page.city !== 'France' && (
                <span className="badge bg-white border border-cream-200 text-charcoal-800/60">
                  📍 {page.city}
                </span>
              )}
              <span className="badge bg-white border border-cream-200 text-charcoal-800/60">
                🎯 {page.intent}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-6xl text-charcoal-800 mb-6 capitalize leading-tight">
              {page.keyword}
            </h1>

            {/* Intro */}
            <p className="text-base md:text-lg text-charcoal-800/70 leading-relaxed max-w-3xl">
              {page.intro}
            </p>

            {/* Quick nav */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#produits" className="btn-primary text-sm">
                🛍️ Voir les produits
              </a>
              <a href="#conseils" className="btn-outline text-sm">
                📖 Lire les conseils
              </a>
              <a href="#faq" className="btn-outline text-sm">
                ❓ FAQ
              </a>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="produits" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="section-label">Sélection produits</span>
              <h2 className="font-display text-3xl text-charcoal-800 mt-2">
                Nos {page.products.length} recommandations pour &ldquo;{page.keyword}&rdquo;
              </h2>
              <p className="text-sm text-charcoal-800/50 mt-2 max-w-xl">
                Chaque produit est sélectionné spécifiquement pour ce contexte — pas de recommandations génériques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.products.map((product, idx) => (
                <ProductCard key={idx} product={product} index={idx} />
              ))}
            </div>

            {/* Affiliate disclaimer */}
            <p className="text-xs text-charcoal-800/30 mt-8 italic">
              * Ce guide contient des liens affiliés. Cela ne modifie pas notre sélection de produits.
            </p>
          </div>
        </section>

        {/* Content block */}
        <section id="conseils" className="py-20 bg-cream-100/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-cream-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-xl">
                  💡
                </div>
                <div>
                  <span className="section-label">Guide d&apos;achat</span>
                  <h2 className="font-display text-2xl text-charcoal-800">
                    Comment bien choisir
                  </h2>
                </div>
              </div>
              <p className="text-charcoal-800/70 leading-relaxed text-base">
                {page.content_block}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Questions fréquentes</span>
              <h2 className="font-display text-3xl text-charcoal-800 mt-2">
                FAQ — {page.keyword}
              </h2>
            </div>

            <div className="space-y-4">
              {page.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="card group"
                  open={idx === 0}
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                    <h3 className="font-display text-xl text-charcoal-800 leading-snug group-open:text-blush-500 transition-colors">
                      {faq.q}
                    </h3>
                    <span className="text-charcoal-800/30 text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-charcoal-800/70 text-sm leading-relaxed border-t border-cream-200 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related pages */}
        {related.length > 0 && (
          <section className="py-20 bg-cream-100/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <span className="section-label">Guides connexes</span>
                <h2 className="font-display text-3xl text-charcoal-800 mt-2">
                  Vous pourriez aussi aimer
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((relPage) => {
                  const relColor = getCategoryColor(relPage.category);
                  const relLabel = getCategoryLabel(relPage.category);
                  const relBadge = categoryStyles[relColor] || categoryStyles.blush;

                  return (
                    <Link
                      key={relPage.slug}
                      href={`/${relPage.slug}`}
                      className="card p-6 flex flex-col gap-3 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`badge border ${relBadge}`}>{relLabel}</span>
                        {relPage.city !== 'France' && (
                          <span className="text-xs text-charcoal-800/40">📍 {relPage.city}</span>
                        )}
                      </div>
                      <h3 className="font-display text-xl text-charcoal-800 capitalize group-hover:text-blush-500 transition-colors">
                        {relPage.keyword}
                      </h3>
                      <p className="text-sm text-charcoal-800/50 line-clamp-2">
                        {relPage.intro}
                      </p>
                      <span className="text-xs text-blush-500 font-medium mt-2 group-hover:underline">
                        Lire le guide →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA Banner */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blush-500 to-blush-600 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-10" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Besoin d&apos;un autre guide beauté?
              </h2>
              <p className="text-white/80 text-sm mb-8 max-w-lg mx-auto">
                Découvrez nos 30 guides couvrant toutes les catégories beauté, villes françaises, et types de peau.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 bg-white text-blush-600 px-8 py-4 rounded-full text-sm font-semibold hover:bg-cream-50 transition-colors">
                Voir tous les guides →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
