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
import { Language } from '@/data/translations';

interface Props {
  params: {
    slug: string;
    locale: Language;
  };
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
  return getAllSlugs().map((slug) => ({
    slug,
    locale: 'fr', // ⚡ adapte si multi-langue
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getPageBySlug(params.slug);
  if (!page) return {};

  const title = `${page.keyword} — Guide Beauté ${page.city}`;
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.keyword,
    description: page.intro,
    author: { '@type': 'Organization', name: 'MDB Cosmetics' },
    publisher: { '@type': 'Organization', name: 'MDB Cosmetics' },
  };

  return (
    <>
      {/* SEO JSON */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header locale={params.locale} />

      <main>
        {/* HERO */}
        <section className={`bg-gradient-to-br ${heroGradient} py-20`}>
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-6 capitalize">
              {page.keyword}
            </h1>

            <p className="text-lg opacity-70">
              {page.intro}
            </p>
          </div>
        </section>

        {/* PRODUITS */}
        <section className="py-16 max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8">
            Produits recommandés
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {page.products.map((product, i) => (
              <ProductCard key={i} product={product} index={i} />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">FAQ</h2>

          {page.faqs.map((faq, i) => (
            <details key={i} className="mb-4 border p-4 rounded">
              <summary className="cursor-pointer font-medium">
                {faq.q}
              </summary>
              <p className="mt-2 text-sm opacity-70">
                {faq.a}
              </p>
            </details>
          ))}
        </section>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="py-16 max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-8">
              Articles liés
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/${r.slug}`}>
                  <div className="border p-4 rounded hover:shadow">
                    <h3 className="font-medium">{r.keyword}</h3>
                    <p className="text-sm opacity-70">{r.intro}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer locale={params.locale} />
    </>
  );
}