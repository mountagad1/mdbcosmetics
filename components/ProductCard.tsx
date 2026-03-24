import { Product } from '@/lib/pages';

const platformIcons: Record<string, { emoji: string; label: string; color: string }> = {
  'amazon': { emoji: '📦', label: 'Amazon FR', color: 'bg-orange-50 border-orange-200 text-orange-700' },
  'sephora': { emoji: '🌸', label: 'Sephora', color: 'bg-pink-50 border-pink-200 text-pink-700' },
  'amazon fr': { emoji: '📦', label: 'Amazon FR', color: 'bg-orange-50 border-orange-200 text-orange-700' },
  'pharmacie.fr': { emoji: '💊', label: 'Pharmacie', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  'bio-c-bon.eu': { emoji: '🌿', label: 'Bio c\' Bon', color: 'bg-green-50 border-green-200 text-green-700' },
  'melvita.com': { emoji: '🌺', label: 'Melvita', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
  'greenweez.com': { emoji: '🌱', label: 'Greenweez', color: 'bg-lime-50 border-lime-200 text-lime-700' },
  'carrefour.fr': { emoji: '🛒', label: 'Carrefour', color: 'bg-sky-50 border-sky-200 text-sky-700' },
  'loccitane.com': { emoji: '🫧', label: "L'Occitane", color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
  'lamazuna.com': { emoji: '♻️', label: 'Lamazuna', color: 'bg-teal-50 border-teal-200 text-teal-700' },
  'thebodyshop.com': { emoji: '🌍', label: 'The Body Shop', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
  'lush.com': { emoji: '🛁', label: 'Lush', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  'absolution-cosmetique.com': { emoji: '🌿', label: 'Absolution', color: 'bg-green-50 border-green-200 text-green-700' },
  'paulaschoice.fr': { emoji: '🔬', label: "Paula's Choice", color: 'bg-rose-50 border-rose-200 text-rose-700' },
  'skinceuticals.fr': { emoji: '💉', label: 'SkinCeuticals', color: 'bg-gray-50 border-gray-200 text-gray-700' },
  'lidl.fr': { emoji: '🛒', label: 'Lidl', color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
};

function getPlatform(hint: string) {
  const normalized = hint.toLowerCase().trim();
  return platformIcons[normalized] || { emoji: '🔗', label: hint, color: 'bg-gray-50 border-gray-200 text-gray-700' };
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const platform = getPlatform(product.affiliate_hint);

  return (
    <div className="card p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200 group">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center text-lg flex-shrink-0">
            {['✨', '💫', '🌟'][index % 3]}
          </div>
          <div>
            <span className="section-label text-[10px]">Produit #{index + 1}</span>
            <h3 className="font-display text-lg text-charcoal-800 leading-tight group-hover:text-blush-500 transition-colors">
              {product.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-charcoal-800/70 leading-relaxed">
        {product.description}
      </p>

      {/* Best For */}
      <div className="flex items-start gap-2 bg-sage-100 rounded-xl p-3">
        <span className="text-sage-500 text-xs mt-0.5">✓</span>
        <div>
          <span className="text-xs font-semibold text-sage-600 uppercase tracking-wide">Idéal pour : </span>
          <span className="text-xs text-sage-600">{product.best_for}</span>
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between mt-auto pt-2">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${platform.color}`}>
          <span>{platform.emoji}</span>
          <span>{platform.label}</span>
        </span>
        <a
          href="#affiliate"
          className="btn-primary text-xs py-2 px-4"
          aria-label={`Voir ${product.name}`}
          rel="nofollow noopener sponsored"
        >
          Voir le prix →
        </a>
      </div>
    </div>
  );
}
