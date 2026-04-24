import { MetadataRoute } from 'next';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

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

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...blogUrls,
  ];
}
