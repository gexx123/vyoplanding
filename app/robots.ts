import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/bl/ma', '/bl/cr'], // Private admin pages
    },
    sitemap: 'https://vyop.in/sitemap.xml',
  };
}
