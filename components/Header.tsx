import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-blush-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">M</span>
            </div>
            <span className="font-display text-xl text-charcoal-800 tracking-tight">
              MDB<span className="text-blush-500">cosmetics</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/categorie/skincare"
              className="text-sm text-charcoal-800/70 hover:text-blush-500 transition-colors font-medium"
            >
              Skincare
            </Link>
            <Link
              href="/categorie/hygiene-products"
              className="text-sm text-charcoal-800/70 hover:text-blush-500 transition-colors font-medium"
            >
              Hygiène
            </Link>
            <Link
              href="/categorie/organic-cosmetics"
              className="text-sm text-charcoal-800/70 hover:text-blush-500 transition-colors font-medium"
            >
              Bio
            </Link>
          </nav>

          {/* CTA */}
          <Link href="/" className="btn-primary text-xs py-2 px-4 hidden sm:inline-flex">
            Voir tous les guides
          </Link>
        </div>
      </div>
    </header>
  );
}
