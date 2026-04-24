import { Metadata } from 'next';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, where, limit, doc, getDoc } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Image from 'next/image';
import ShareButtons from '@/components/blog/ShareButtons';

export const dynamic = 'force-dynamic';

async function getBlog(slug: string) {
  try {
    const blogsRef = collection(db, 'blogs');
    const q = query(blogsRef, where('slug', '==', slug), limit(1));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      const docRef = doc(db, 'blogs', slug);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
         return { id: docSnap.id, ...docSnap.data() } as any;
      }
      return null;
    }
    
    return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as any;
  } catch (error) {
    console.error("Error fetching blog from Firestore:", error);
    return null;
  }
}

function calculateReadingTime(content: string) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/g).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) {
    return { title: 'Post Not Found | Vyop' };
  }

  const url = `https://vyop.in/blog/${slug}`;

  return {
    title: `${blog.metaTitle || blog.title} | Vyop`,
    description: blog.metaDescription || blog.excerpt,
    keywords: blog.focusKeyword + (blog.secondaryKeywords ? `, ${blog.secondaryKeywords}` : ''),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      url: url,
      siteName: 'Vyop',
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author || 'Vyop Team'],
      images: [
        {
          url: blog.image ? (blog.image.startsWith('http') ? blog.image : `https://vyop.in${blog.image}`) : 'https://vyop.in/og-image.png',
          width: 1200,
          height: 630,
          alt: blog.imageAltText || blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: [blog.image ? (blog.image.startsWith('http') ? blog.image : `https://vyop.in${blog.image}`) : 'https://vyop.in/og-image.png'],
      creator: '@vyop_ai',
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  console.log('Fetching blog with slug:', slug);
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://vyop.in' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://vyop.in/blog' },
      { '@type': 'ListItem', 'position': 3, 'name': blog.title, 'item': `https://vyop.in/blog/${slug}` }
    ]
  };

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.metaDescription || blog.excerpt,
    image: blog.image ? `https://vyop.in${blog.image}` : 'https://vyop.in/og-image.png',
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      '@type': 'Person',
      name: blog.author || 'Vyop Team',
      jobTitle: blog.authorTitle || 'Expert'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vyop',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vyop.in/logo.png',
      },
    },
    articleSection: blog.category,
    keywords: blog.focusKeyword + (blog.secondaryKeywords ? `, ${blog.secondaryKeywords}` : '')
  };

  const readingTime = calculateReadingTime(blog.content || '');
  
  const readableDate = new Date(blog.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />

      <article className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <header className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-bold tracking-wide uppercase">
              {blog.category}
            </span>
            <span className="text-gray-400 text-sm font-medium">•</span>
            <span className="text-gray-500 text-sm font-medium">{readableDate}</span>
            <span className="text-gray-400 text-sm font-medium">•</span>
            <span className="text-gray-500 text-sm font-medium">{readingTime} min read</span>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {blog.title}
          </h1>
          
          <div className="flex items-center justify-center md:justify-start gap-3 mt-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center text-white font-bold text-lg">
              {blog.author ? blog.author[0].toUpperCase() : 'V'}
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900 leading-tight">{blog.author || 'Vyop Team'}</p>
              <p className="text-xs text-gray-500">{blog.authorTitle || 'Founder, Vyop'}</p>
            </div>
          </div>
        </header>

        {blog.image && (
          <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden mb-12 shadow-lg">
            <img 
              src={blog.image} 
              alt={blog.imageAltText || blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div 
          className="prose prose-lg md:prose-xl max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-[var(--brand-primary)] prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: blog.content || blog.excerpt }}
        />

        <ShareButtons url={`https://vyop.in/blog/${blog.slug}`} title={blog.title} />
      </article>

      <Footer />
    </main>
  );
}
