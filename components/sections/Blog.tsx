"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  
  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter((p) => p.category === activeCategory);

  const displayPosts = filteredPosts.slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-24 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>OUR JOURNAL</SectionLabel>
          <h2 
            className="text-4xl md:text-5xl font-bold mt-6 mb-4 text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Insights for Modern Business
          </h2>
          <p 
            className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Stay updated with the latest trends in retail technology and tips to grow your business.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 animate-fade-up" style={{ animationDelay: "100ms" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-[var(--brand-primary)] text-white shadow-md shadow-[var(--brand-primary)]/20"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, i) => (
            <Link key={post.id} href={`/blog/${post.slug || post.id}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group cursor-pointer h-full flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                  <img 
                    src={post.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"} 
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[var(--brand-primary)] shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-[var(--text-muted)]">{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-xs font-medium text-[var(--text-muted)]">5 min read</span>
                </div>

                <h3 
                  className="text-xl font-bold mb-3 group-hover:text-[var(--brand-primary)] transition-colors"
                  style={{ fontFamily: "var(--font-display)", lineHeight: 1.3 }}
                >
                  {post.title}
                </h3>
                
                <p 
                  className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-[var(--brand-primary)] font-bold text-sm">
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/blog"
            className="inline-block px-8 py-3 rounded-full border border-gray-200 font-bold text-[var(--text-primary)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all"
            style={{ fontFamily: "var(--font-display)" }}
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
