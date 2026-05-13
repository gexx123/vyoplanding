import { MetadataRoute } from 'next';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { cities } from '@/lib/cityData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://vyop.in';
  
  // Fetch blogs to include in sitemap
  let blogUrls: any[] = [];
  try {
    const blogsRef = collection(db, 'blogs');
    const q = query(blogsRef, where('status', '==', 'Published'));
    const snapshot = await getDocs(q);
    
    blogUrls = snapshot.docs.map((doc: any) => {
      const post = doc.data();
      return {
        url: `${baseUrl}/blog/${post.slug || doc.id}`,
      lastModified: new Date(post.date || Date.now()),
        changeFrequency: 'weekly',
        priority: 0.7,
      };
    });
  } catch (error) {
    console.error('Sitemap blog fetch error:', error);
  }

  const staticPages = [
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'daily' },
    { url: `${baseUrl}/billing`, priority: 0.9, changeFrequency: 'daily' },
    { url: `${baseUrl}/hi`, priority: 0.9, changeFrequency: 'daily' },
    { url: `${baseUrl}/vyop-vs-khatabook`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-vyapar`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/careers`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/help`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/contact`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/community`, priority: 0.9, changeFrequency: 'always' },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: 'yearly', lastModified: new Date('2026-05-04') },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: 'yearly', lastModified: new Date('2026-05-04') },
  ].map(page => ({
    ...page,
    url: page.url,
    lastModified: page.lastModified || new Date(),
    changeFrequency: page.changeFrequency as any,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...staticPages,
    ...blogUrls,
    ...cities.map((city) => ({
      url: `${baseUrl}/billing-software/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as any,
      priority: 0.8,
    })),
  ];
}
