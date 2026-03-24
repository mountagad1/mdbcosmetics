import { getAllPages, getCategoryLabel, getCategoryColor } from '@/lib/pages';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageCard from '@/components/PageCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MDB Cosmetics — Guides Beauté & Hygiène en France',
  description:
    'Découvrez nos 30 guides experts sur la beauté et l\'hygiène en France. Skincare, cosmétiques bio, produits d\'hygiène — par ville et type de peau.',
};

const stats = [
  { value: '30', label: 'guides experts' },
  { value: '15', label: 'villes couvertes' },
  { value: '80+', label: 'produits analysés' },
  { value: '100%', label: 'testés & validés' },
];

const categories = [
  {
    key: 'skincare',
    emoji: '✨',
    title: 'Skincare',
    desc: 'Routines, sérums, crèmes et SPF adaptés à votre type de peau.',
    color: 'blush',
  },
  {
    key: 'hygiene products',
    emoji: '🧴',
    title: 'Hygiène',
    desc: 'Produits quotidiens, naturels et accessibles pour toute la famille.',
    color: 'sage',
  },
  {
    key: 'organic cosmetics',
    emoji: '🌿',
    title: 'Cosmétiques Bio',
    desc: 'Certifiés Ecocert, Cosmos Organic, sans compromis sur l\'efficacité.',
    color: 'gold',
  },
];

const categoryBg: Record<string, string> = {
  blush: 'bg-blush-100 group-hover:bg-blush-200',
  sage: 'bg-sage-100 group-hover:bg-sage-200',
  gold: 'bg-gold-100 group-hover:bg-gold-200',
};

const categoryText: Record<string, string> = {
  blush: 'text-blush-600',
  sage: 'text-sage-600',
  gold: 'text-gold-500',
};

export default function HomePage() {
  const pages = getAllPages();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-cream-50 via-cream-100 to-blush-100 py-24 md:py-32">
          <div className="absolute inset-0 bg-grain opacity-30" />
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blush-200/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-sage-200/20 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-xs font-medium text-charcoal-800/60 border border-cream-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" />
              30 guides experts — mis à jour 2025
            </div>

            <h1 className="font-display text-5xl md:text-7xl text-charcoal-800 mb-6 max-w-4xl mx-auto">
              La beauté française,{' '}
              <span className="text-blush-500 italic">enfin expliquée</span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal-800/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Guides skincare, produits d&apos;hygiène naturels et cosmétiques bio —
              adaptés à votre ville, votre type de peau, et votre budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#guides" className="btn-primary px-8 py-4 text-base">
                Explorer les guides
              </a>
              <a href="#categories" className="btn-outline px-8 py-4 text-base">
                Par catégorie
              </a>
            </div>

            {/* Stats bar */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-cream-200 rounded-2xl overflow-hidden border border-cream-200">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/80 backdrop-blur px-6 py-5 text-center"
                >
                  <div className="font-display text-3xl text-blush-500">{stat.value}</div>
                  <div className="text-xs text-charcoal-800/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Explorer par catégorie</span>
            <h2 className="font-display text-4xl text-charcoal-800 mt-2">
              Trois univers beauté
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.key}
                className="card p-8 text-center group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${categoryBg[cat.color]} flex items-center justify-center text-3xl mx-auto mb-5 transition-colors`}
                >
                  {cat.emoji}
                </div>
                <h3 className={`font-display text-2xl mb-2 ${categoryText[cat.color]}`}>
                  {cat.title}
                </h3>
                <p className="text-sm text-charcoal-800/60 leading-relaxed">{cat.desc}</p>
                <div className="mt-6 text-xs font-medium text-charcoal-800/40">
                  {pages.filter((p) => p.category === cat.key).length} guides →
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guides grid */}
        <section id="guides" className="py-20 bg-cream-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Tous les guides</span>
              <h2 className="font-display text-4xl text-charcoal-800 mt-2">
                {pages.length} guides — zéro contenu générique
              </h2>
              <p className="text-charcoal-800/50 mt-3 text-sm max-w-xl mx-auto">
                Chaque guide cible un mot-clé unique, une intention d&apos;achat précise,
                et recommande des produits vraiment adaptés au contexte.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pages.map((page) => (
                <PageCard key={page.slug} page={page} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-charcoal-800 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-20" />
            <div className="relative">
              <span className="section-label text-white/40">Notre engagement</span>
              <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-6 max-w-2xl mx-auto">
                Des recommandations que vous pouvez{' '}
                <span className="text-blush-400 italic">vraiment</span> faire confiance
              </h2>
              <p className="text-white/60 text-sm max-w-lg mx-auto leading-relaxed mb-8">
                Tous nos guides sont écrits avec des critères dermatologiques clairs.
                Nos recommandations affiliées ne biaisent jamais notre sélection —
                nous mentionnons uniquement des produits que nous recommanderions sans commission.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white/10 px-5 py-3 rounded-full text-white/80 text-sm">
                  🔬 Critères scientifiques
                </div>
                <div className="bg-white/10 px-5 py-3 rounded-full text-white/80 text-sm">
                  🇫🇷 Disponible en France
                </div>
                <div className="bg-white/10 px-5 py-3 rounded-full text-white/80 text-sm">
                  💸 Tous budgets
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
