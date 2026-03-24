import Link from 'next/link';
import { Page, getCategoryLabel, getCategoryColor } from '@/lib/pages';

const categoryStyles: Record<string, string> = {
  blush: 'bg-blush-100 text-blush-600',
  sage: 'bg-sage-100 text-sage-600',
  gold: 'bg-gold-100 text-gold-500',
};

interface PageCardProps {
  page: Page;
}

export default function PageCard({ page }: PageCardProps) {
  const color = getCategoryColor(page.category);
  const label = getCategoryLabel(page.category);
  const badgeStyle = categoryStyles[color] || categoryStyles.blush;

  return (
    <Link
      href={`/${page.slug}`}
      className="card p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 group cursor-pointer"
    >
      {/* Top badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`badge ${badgeStyle}`}>{label}</span>
        {page.city !== 'France' && (
          <span className="badge bg-cream-200 text-charcoal-800/60">📍 {page.city}</span>
        )}
      </div>

      {/* Keyword as title */}
      <h2 className="font-display text-xl text-charcoal-800 leading-snug group-hover:text-blush-500 transition-colors capitalize">
        {page.keyword}
      </h2>

      {/* Intro excerpt */}
      <p className="text-sm text-charcoal-800/60 leading-relaxed line-clamp-3 flex-1">
        {page.intro}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-cream-200">
        <span className="text-xs text-charcoal-800/40">
          {page.products.length} produits recommandés
        </span>
        <span className="text-xs text-blush-500 font-medium group-hover:underline">
          Lire le guide →
        </span>
      </div>
    </Link>
  );
}
