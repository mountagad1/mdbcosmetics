import { MetadataRoute } from 'next';
import { getAllPages } from '@/lib/pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mdbcosmetics.fr';
  const pages = getAllPages();

  const pageEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...pageEntries,
  ];
}
