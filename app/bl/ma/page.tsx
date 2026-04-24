"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
}

export default function BlogManagement() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const res = await fetch(`/api/blogs?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setPosts(posts.filter((p) => p.id !== id));
      }
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 
              className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Blog Dashboard
            </h1>
            <p className="text-gray-500 mt-1">Manage and organize your published content.</p>
          </div>
          <Link
            href="/bl/cr"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-gold)" }}
          >
            + Create New Post
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-[var(--brand-primary)] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <div className="bg-white rounded-[32px] p-20 text-center shadow-sm">
            <div className="text-5xl mb-6">📝</div>
            <h2 className="text-2xl font-bold mb-2">No posts found</h2>
            <p className="text-gray-500 mb-8">Start sharing your thoughts with your audience.</p>
            <Link
              href="/bl/cr"
              className="text-[var(--brand-primary)] font-bold hover:underline"
            >
              Create your first blog post →
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Post Details</th>
                  <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Category</th>
                  <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <AnimatePresence>
                  {posts.map((post) => (
                    <motion.tr
                      key={post.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="hover:bg-gray-50/30 transition-colors"
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                            <img src={post.image} className="w-full h-full object-cover" alt="" />
                          </div>
                          <span className="font-bold text-[var(--text-primary)] line-clamp-1">{post.title}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-sm text-gray-500">{post.date}</td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <button 
                            className="p-2.5 rounded-xl bg-gray-50 text-gray-500 hover:bg-[var(--brand-primary)] hover:text-white transition-all"
                            onClick={() => alert("Edit feature coming next!")}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                              <path d="m15 5 4 4" />
                            </svg>
                          </button>
                          <button 
                            className="p-2.5 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                            onClick={() => handleDelete(post.id)}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 6h18" />
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                              <line x1="10" y1="11" x2="10" y2="17" />
                              <line x1="14" y1="11" x2="14" y2="17" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
