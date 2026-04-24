import { Metadata } from 'next';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog | Vyop — Insights on Voice Accounting & Business',
  description: 'Read the latest updates, tips, and success stories from Vyop, the world\'s first AI voice accountant.',
  alternates: {
    canonical: 'https://vyop.in/blog',
  },
};

async function getBlogs() {
  try {
    const blogsRef = collection(db, 'blogs');
    const q = query(blogsRef, orderBy('date', 'desc'));
    const snapshot = await getDocs(q);
    const allBlogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return allBlogs.filter((blog: any) => blog.status !== 'Draft');
  } catch (error) {
    console.error("Error fetching blogs from Firestore:", error);
    return [];
  }
}

export default async function BlogIndex() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-grow max-w-7xl mx-auto w-full px-6 pt-32 pb-20">
        <header className="mb-16 text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Latest <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Discover tips, updates, and stories about how voice-first AI is transforming retail and accounting in India.
          </p>
        </header>

        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <span className="text-4xl block mb-4">✍️</span>
            <h2 className="text-2xl font-bold text-gray-800">Coming Soon</h2>
            <p className="text-gray-500 mt-2">We are working on some great content. Check back later!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog: any) => (
              <Link href={`/blog/${blog.slug}`} key={blog.id} className="group h-full">
                <article className="bg-white h-full rounded-[32px] overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                  {blog.image ? (
                    <div className="w-full h-48 bg-gray-100 overflow-hidden relative">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center border-b border-gray-100">
                      <span className="text-4xl">📄</span>
                    </div>
                  )}
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gray-50 text-[var(--brand-primary)] text-xs font-bold uppercase tracking-wider rounded-full border border-gray-100">
                        {blog.category}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[var(--brand-primary)] transition-colors">
                      {blog.title}
                    </h2>
                    
                    <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow">
                      {blog.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center text-white text-[10px] font-bold">
                          {blog.author ? blog.author[0].toUpperCase() : 'V'}
                        </div>
                        <span className="text-xs font-bold text-gray-700">{blog.author || 'Vyop Team'}</span>
                      </div>
                      <span className="text-[var(--brand-primary)] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
