import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPages, getCategoryLabel, getCategoryColor } from '@/lib/pages';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageCard from '@/components/PageCard';

interface Props {
  params: { cat: string };
}

const CATEGORY_SLUGS: Record<string, string> = {
  'skincare': 'skincare',
  'hygiene-products': 'hygiene products',
  'organic-cosmetics': 'organic cosmetics',
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  skincare: 'Guides skincare experts pour chaque type de peau et chaque ville de France. Acné, sécheresse, anti-âge — des recommandations dermatologiques sans compromis.',
  'hygiene products': 'Produits d\'hygiène quotidiens, naturels et accessibles. Du déodorant sans aluminium au kit voyage TSA — pour toutes les situations.',
  'organic cosmetics': 'Cosmétiques certifiés bio (Ecocert, Cosmos Organic) pour peaux sensibles, acnéiques, ou en quête de naturalité. Sans greenwashing.',
};

const CATEGORY_EMOJIS: Record<string, string> = {
  skincare: '✨',
  'hygiene products': '🧴',
  'organic cosmetics': '🌿',
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_SLUGS).map((cat) => ({ cat }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = CATEGORY_SLUGS[params.cat];
  if (!category) return {};
  const label = getCategoryLabel(category);
  return {
    title: `${label} en France — Guides Beauté`,
    description: CATEGORY_DESCRIPTIONS[category] || `Guides ${label} pour la France.`,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = CATEGORY_SLUGS[params.cat];
  if (!category) notFound();

  const allPages = getAllPages();
  const pages = allPages.filter((p) => p.category === category);
  const label = getCategoryLabel(category);
  const color = getCategoryColor(category);
  const emoji = CATEGORY_EMOJIS[category] || '💄';
  const description = CATEGORY_DESCRIPTIONS[category] || '';

  const heroBg: Record<string, string> = {
    blush: 'from-blush-100 via-cream-50 to-cream-100',
    sage: 'from-sage-100 via-cream-50 to-cream-100',
    gold: 'from-gold-100 via-cream-50 to-cream-100',
  };
  const badgeColor: Record<string, string> = {
    blush: 'bg-blush-100 text-blush-600 border-blush-200',
    sage: 'bg-sage-100 text-sage-600 border-sage-200',
    gold: 'bg-gold-100 text-gold-500 border-gold-200',
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={`bg-gradient-to-br ${heroBg[color] || heroBg.blush} py-20 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-grain opacity-20" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-charcoal-800/40 mb-8">
              <Link href="/" className="hover:text-blush-500 transition-colors">Accueil</Link>
              <span>/</span>
              <span>{label}</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center text-3xl shadow-sm border border-cream-200">
                {emoji}
              </div>
              <span className={`badge border ${badgeColor[color] || badgeColor.blush}`}>
                {pages.length} guides
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl text-charcoal-800 mb-5">
              {label}
            </h1>
            <p className="text-base md:text-lg text-charcoal-800/60 max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {/* Guides grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <PageCard key={page.slug} page={page} />
            ))}
          </div>
        </section>

        {/* Back CTA */}
        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="btn-outline">
            ← Voir toutes les catégories
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
