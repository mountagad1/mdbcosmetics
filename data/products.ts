// data/products.ts
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'skincare' | 'makeup' | 'haircare' | 'fragrance' | 'bodycare';
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  amazonAsin: string; // Amazon ASIN for affiliate link
  countries: string[]; // e.g., ['fr', 'en']
}

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'Hydrating Face Serum',
    brand: 'L\'Oréal Paris',
    category: 'skincare',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.7,
    reviews: 1240,
    description: 'Sérum hydratant premium avec acide hyaluronique pour une peau éclatante.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61example.jpg',
    amazonAsin: 'B0ABC123XYZ',
    countries: ['fr', 'en'],
  },
  {
    id: 'prod_002',
    name: 'Volumizing Mascara Pro',
    brand: 'Maybelline',
    category: 'makeup',
    price: 9.99,
    originalPrice: 12.99,
    rating: 4.5,
    reviews: 856,
    description: 'Mascara volumisant longue tenue pour un regard intense.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61example.jpg',
    amazonAsin: 'B0ABC124XYZ',
    countries: ['fr', 'en'],
  },
  {
    id: 'prod_003',
    name: 'Keratin Hair Mask',
    brand: 'Kérastase',
    category: 'haircare',
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviews: 2103,
    description: 'Masque capillaire à la kératine pour cheveux lissés et brillants.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61example.jpg',
    amazonAsin: 'B0ABC125XYZ',
    countries: ['fr', 'en'],
  },
  {
    id: 'prod_004',
    name: 'Luxury Perfume Essence',
    brand: 'Chanel',
    category: 'fragrance',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.9,
    reviews: 542,
    description: 'Parfum luxe avec notes florales et boisées.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61example.jpg',
    amazonAsin: 'B0ABC126XYZ',
    countries: ['fr', 'en'],
  },
  {
    id: 'prod_005',
    name: 'Body Butter Deluxe',
    brand: 'Burt\'s Bees',
    category: 'bodycare',
    price: 14.99,
    originalPrice: 18.99,
    rating: 4.6,
    reviews: 1876,
    description: 'Beurre corporel nutritif avec ingrédients naturels.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61example.jpg',
    amazonAsin: 'B0ABC127XYZ',
    countries: ['fr', 'en'],
  },
];

// Countries configuration - easily scalable
export const countries = [
  { code: 'fr', name_fr: 'France', name_en: 'France', amazonDomain: 'amazon.fr' },
  { code: 'en', name_fr: 'Royaume-Uni', name_en: 'United Kingdom', amazonDomain: 'amazon.co.uk' },
  { code: 'de', name_fr: 'Allemagne', name_en: 'Germany', amazonDomain: 'amazon.de' },
  { code: 'es', name_fr: 'Espagne', name_en: 'Spain', amazonDomain: 'amazon.es' },
  { code: 'it', name_fr: 'Italie', name_en: 'Italy', amazonDomain: 'amazon.it' },
];

// Cities configuration - easily scalable
export const cities = {
  fr: [
    { id: 'paris', name: 'Paris' },
    { id: 'lyon', name: 'Lyon' },
    { id: 'marseille', name: 'Marseille' },
    { id: 'toulouse', name: 'Toulouse' },
    { id: 'nice', name: 'Nice' },
  ],
  en: [
    { id: 'london', name: 'London' },
    { id: 'manchester', name: 'Manchester' },
    { id: 'birmingham', name: 'Birmingham' },
  ],
  de: [
    { id: 'berlin', name: 'Berlin' },
    { id: 'munich', name: 'Munich' },
    { id: 'hamburg', name: 'Hamburg' },
  ],
};

// Helper functions
export function getAmazonAffiliateLink(asin: string, country: string): string {
  const countryData = countries.find(c => c.code === country);
  const domain = countryData?.amazonDomain || 'amazon.fr';
  return `https://${domain}/dp/${asin}?tag=koopon02-21`;
}

export function getProductsByCountry(country: string): Product[] {
  return products.filter(p => p.countries.includes(country));
}

export function getProductsByCategory(category: string, country: string): Product[] {
  return products.filter(
    p => p.category === category && p.countries.includes(country)
  );
}

export function getCitiesByCountry(country: string) {
  return cities[country as keyof typeof cities] || [];
}
