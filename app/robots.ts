import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api/admin', '/bl/ma', '/bl/cr', '/account', '/marketer'], // Private admin and auth paths
    },
    sitemap: 'https://vyop.in/sitemap.xml',
    host: 'https://vyop.in',
  };
}
