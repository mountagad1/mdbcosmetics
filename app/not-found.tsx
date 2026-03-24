import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="font-display text-8xl text-blush-200 mb-4">404</div>
          <h1 className="font-display text-3xl text-charcoal-800 mb-4">Page introuvable</h1>
          <p className="text-charcoal-800/60 text-sm mb-8 max-w-sm mx-auto">
            Ce guide n&apos;existe pas ou a été déplacé. Revenez à l&apos;accueil pour explorer tous nos guides beauté.
          </p>
          <Link href="/" className="btn-primary">
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
