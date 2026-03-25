// data/translations.ts
export const translations = {
  fr: {
    site: {
      title: 'MDB Cosmetics - Beauté Premium',
      description: 'Découvrez les meilleurs produits cosmétiques avec des prix imbattables',
      tagline: 'Votre beauté, notre engagement',
    },
    nav: {
      home: 'Accueil',
      products: 'Produits',
      countries: 'Pays',
      cities: 'Villes',
      about: 'À propos',
      contact: 'Contact',
    },
    hero: {
      title: 'Beauté Premium à Prix Imbattables',
      subtitle: 'Retrouvez les meilleures marques cosmétiques avec nos meilleures offres',
      cta: 'Découvrir les produits',
    },
    products: {
      title: 'Nos Produits',
      filter: 'Filtrer par catégorie',
      viewDeal: 'Voir l\'offre',
      price: 'Prix',
      rating: 'Évaluation',
      affiliate: 'Achetez maintenant sur Amazon',
    },
    footer: {
      about: 'À propos de MDB Cosmetics',
      aboutText: 'MDB Cosmetics est votre destination pour les meilleurs produits cosmétiques à prix compétitifs. Nous proposons une sélection curatée de marques de confiance.',
      links: 'Liens utiles',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      disclaimer: 'Avertissement d\'affiliation',
      contact: 'Nous contacter',
      copyright: '© 2024 MDB Cosmetics. Tous droits réservés.',
    },
    countries: {
      fr: 'France',
      en: 'Royaume-Uni',
      de: 'Allemagne',
      es: 'Espagne',
      it: 'Italie',
    },
    cities: {
      fr: {
        paris: 'Paris',
        lyon: 'Lyon',
        marseille: 'Marseille',
        toulouse: 'Toulouse',
        nice: 'Nice',
      },
      en: {
        london: 'Londres',
        manchester: 'Manchester',
        birmingham: 'Birmingham',
      },
    },
    categories: {
      skincare: 'Soins de la peau',
      makeup: 'Maquillage',
      haircare: 'Soins des cheveux',
      fragrance: 'Parfums',
      bodycare: 'Soins du corps',
    },
  },
  en: {
    site: {
      title: 'MDB Cosmetics - Premium Beauty',
      description: 'Discover the best cosmetics with unbeatable prices',
      tagline: 'Your beauty, our commitment',
    },
    nav: {
      home: 'Home',
      products: 'Products',
      countries: 'Countries',
      cities: 'Cities',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Premium Beauty at Unbeatable Prices',
      subtitle: 'Find the best cosmetic brands with our exclusive offers',
      cta: 'Discover Products',
    },
    products: {
      title: 'Our Products',
      filter: 'Filter by category',
      viewDeal: 'View Deal',
      price: 'Price',
      rating: 'Rating',
      affiliate: 'Buy Now on Amazon',
    },
    footer: {
      about: 'About MDB Cosmetics',
      aboutText: 'MDB Cosmetics is your destination for the best cosmetic products at competitive prices. We offer a curated selection of trusted brands.',
      links: 'Useful Links',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      disclaimer: 'Affiliate Disclaimer',
      contact: 'Contact Us',
      copyright: '© 2024 MDB Cosmetics. All rights reserved.',
    },
    countries: {
      fr: 'France',
      en: 'United Kingdom',
      de: 'Germany',
      es: 'Spain',
      it: 'Italy',
    },
    cities: {
      fr: {
        paris: 'Paris',
        lyon: 'Lyon',
        marseille: 'Marseille',
        toulouse: 'Toulouse',
        nice: 'Nice',
      },
      en: {
        london: 'London',
        manchester: 'Manchester',
        birmingham: 'Birmingham',
      },
    },
    categories: {
      skincare: 'Skincare',
      makeup: 'Makeup',
      haircare: 'Hair Care',
      fragrance: 'Fragrance',
      bodycare: 'Body Care',
    },
  },
};

export type Language = 'fr' | 'en';
export type TranslationKey = typeof translations.fr;
