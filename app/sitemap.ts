import { MetadataRoute } from 'next';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { cities } from '@/lib/cityData';
import { industries } from '@/lib/industryData';

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
    { url: `${baseUrl}/tools`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/tools/gst-calculator`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/tools/barcode-generator`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/tools/invoice-generator`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/tools/margin-calculator`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/tools/hsn-code-finder`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/tools/cash-counter`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/tools/upi-qr-generator`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/tools/discount-calculator`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/tools/gstin-validator`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/compare`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/pos-app`, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${baseUrl}/best-billing-software-india`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/best-pos-software-india`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-tally`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-mybillbook`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-khatabook`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-vyapar`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-loyverse`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-square`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-busy`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-petpooja`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-marg`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-zoho`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-pinelabs`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-nukkadshops`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-swipe`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-posist`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-clover`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/vyop-vs-shopify`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/features/barcode-scanner`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/features/online-storefront`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/features/ten-ways-to-add-items`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/hi`, priority: 0.9, changeFrequency: 'daily' },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/work-with-us`, priority: 0.85, changeFrequency: 'weekly' },
    { url: `${baseUrl}/internship`, priority: 0.85, changeFrequency: 'weekly' },
    { url: `${baseUrl}/internship/verify`, priority: 0.8, changeFrequency: 'weekly' },
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
    ...industries.map((ind) => ({
      url: `${baseUrl}/solutions/${ind.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as any,
      priority: 0.9,
    })),
    ...cities.map((city) => ({
      url: `${baseUrl}/billing-software/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as any,
      priority: 0.8,
    })),
  ];
}
