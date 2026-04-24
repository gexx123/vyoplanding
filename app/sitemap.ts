import { MetadataRoute } from 'next';
import fs from 'fs/promises';
import path from 'path';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://vyop.in';
  
  // Fetch blogs to include in sitemap
  let blogUrls: any[] = [];
  try {
    const DATA_PATH = path.join(process.cwd(), 'data', 'blogs.json');
    const data = await fs.readFile(DATA_PATH, 'utf8');
    const blogs = JSON.parse(data);
    
    blogUrls = blogs.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug || post.id}`,
      lastModified: new Date(post.date || Date.now()),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Sitemap blog fetch error:', error);
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...blogUrls,
  ];
}
