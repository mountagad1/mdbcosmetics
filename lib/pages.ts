import pagesData from '@/data/pages.json';

export interface Product {
  name: string;
  description: string;
  best_for: string;
  affiliate_hint: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Page {
  keyword: string;
  slug: string;
  city: string;
  category: string;
  intent: string;
  intro: string;
  products: Product[];
  content_block: string;
  faqs: FAQ[];
  internal_links: string[];
}

export function getAllPages(): Page[] {
  return pagesData as Page[];
}

export function getPageBySlug(slug: string): Page | undefined {
  return (pagesData as Page[]).find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return (pagesData as Page[]).map((p) => p.slug);
}

export function getPagesByCategory(category: string): Page[] {
  return (pagesData as Page[]).filter((p) => p.category === category);
}

export function getRelatedPages(page: Page): Page[] {
  const slugsFromLinks = page.internal_links
    .map((link) => link.replace(/^\//, ''))
    .filter(Boolean);
  return (pagesData as Page[]).filter((p) => slugsFromLinks.includes(p.slug));
}

export function getCategoryLabel(category: string): string {
  const map: Record<string, string> = {
    skincare: 'Skincare',
    'hygiene products': 'Hygiène',
    'organic cosmetics': 'Cosmétiques Bio',
  };
  return map[category] || category;
}

export function getCategoryColor(category: string): string {
  const map: Record<string, string> = {
    skincare: 'blush',
    'hygiene products': 'sage',
    'organic cosmetics': 'gold',
  };
  return map[category] || 'blush';
}
