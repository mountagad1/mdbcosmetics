import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-white/70 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blush-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <span className="font-display text-xl text-white tracking-tight">
                MDB<span className="text-blush-400">cosmetics</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Guides beauté experts pour trouver les meilleurs soins en France. 
              Conseils dermatologiques, tests produits, et recommandations affiliées transparentes.
            </p>
            <p className="text-xs mt-6 text-white/30">
              * Ce site contient des liens affiliés. Nous percevons une commission si vous achetez via nos liens, sans coût supplémentaire pour vous.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase text-xs">Catégories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categorie/skincare" className="hover:text-white transition-colors">Skincare</Link></li>
              <li><Link href="/categorie/hygiene-products" className="hover:text-white transition-colors">Produits d&apos;hygiène</Link></li>
              <li><Link href="/categorie/organic-cosmetics" className="hover:text-white transition-colors">Cosmétiques bio</Link></li>
            </ul>
          </div>

          {/* Villes */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase text-xs">Villes</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/best-skincare-acne-paris" className="hover:text-white transition-colors">Paris</Link></li>
              <li><Link href="/cheap-hygiene-products-lyon" className="hover:text-white transition-colors">Lyon</Link></li>
              <li><Link href="/organic-cosmetics-marseille-sensitive-skin" className="hover:text-white transition-colors">Marseille</Link></li>
              <li><Link href="/best-moisturizer-dry-skin-toulouse" className="hover:text-white transition-colors">Toulouse</Link></li>
              <li><Link href="/dermatologist-recommended-skincare-nice" className="hover:text-white transition-colors">Nice</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© {year} MDB Cosmetics. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white/60 transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white/60 transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
