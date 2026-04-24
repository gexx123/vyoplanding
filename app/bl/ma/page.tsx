"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorTitle: string;
  focusKeyword: string;
  secondaryKeywords: string;
  metaTitle: string;
  metaDescription: string;
  imageAltText: string;
  status: string;
}

export default function BlogManagement() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [editImagePreview, setEditImagePreview] = useState<string | null>(null);
  const [newImage, setNewImage] = useState<File | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/blogs", { cache: "no-store" });
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
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

  const handleEditClick = (post: BlogPost) => {
    setEditingPost({ ...post });
    setEditImagePreview(post.image);
    setNewImage(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;

    setIsUpdating(true);
    let imageUrl = editingPost.image; // Default to existing image

    try {
      if (newImage) {
        const imageFormData = new FormData();
        imageFormData.append("file", newImage);
        
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: imageFormData,
        });
        
        if (!uploadRes.ok) throw new Error("Image upload failed");
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.url;
      }

      const payload = {
        id: editingPost.id,
        title: editingPost.title,
        category: editingPost.category,
        author: editingPost.author,
        authorTitle: editingPost.authorTitle || "",
        focusKeyword: editingPost.focusKeyword || "",
        secondaryKeywords: editingPost.secondaryKeywords || "",
        excerpt: editingPost.excerpt,
        content: editingPost.content,
        metaTitle: editingPost.metaTitle || "",
        metaDescription: editingPost.metaDescription || "",
        imageAltText: editingPost.imageAltText || "",
        status: editingPost.status || "Published",
        image: imageUrl,
      };

      const res = await fetch("/api/blogs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const updated = await res.json();
        setPosts(posts.map((p) => (p.id === updated.id ? updated : p)));
        setEditingPost(null);
      }
    } catch (err) {
      console.error("Error updating post:", err);
    } finally {
      setIsUpdating(false);
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
                  <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Status</th>
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
                      <td className="px-8 py-6 text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</td>
                      <td className="px-8 py-6">
                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${post.status === 'Draft' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                          {post.status || 'Published'}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <button 
                            className="p-2.5 rounded-xl bg-gray-50 text-gray-500 hover:bg-[var(--brand-primary)] hover:text-white transition-all"
                            onClick={() => handleEditClick(post)}
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

      {/* Edit Modal */}
      <AnimatePresence>
        {editingPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] p-8 md:p-10 shadow-2xl relative"
            >
              <button 
                onClick={() => setEditingPost(null)}
                className="absolute top-8 right-8 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>

              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </span>
                Edit Blog Post
              </h2>

              <form onSubmit={handleUpdate} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Title</label>
                    <input
                      required
                      type="text"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                      value={editingPost.title}
                      onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Category</label>
                    <select
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                      value={editingPost.category}
                      onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                    >
                      <option>Voice Billing</option>
                      <option>AI Accounting</option>
                      <option>Kirana Tips</option>
                      <option>Product Updates</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Author Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                      value={editingPost.author}
                      onChange={(e) => setEditingPost({ ...editingPost, author: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Author Title</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                      value={editingPost.authorTitle}
                      onChange={(e) => setEditingPost({ ...editingPost, authorTitle: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Feature Image</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="edit-image-upload"
                      />
                      <label 
                        htmlFor="edit-image-upload"
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-gray-500 truncate">
                          {newImage ? newImage.name : "Select new image..."}
                        </span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--brand-primary)]">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Image Alt Text (SEO)</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                      value={editingPost.imageAltText}
                      onChange={(e) => setEditingPost({ ...editingPost, imageAltText: e.target.value })}
                    />
                  </div>
                </div>

                {editImagePreview && (
                  <div className="relative aspect-[16/6] rounded-2xl overflow-hidden border">
                    <img src={editImagePreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Focus Keyword</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                      value={editingPost.focusKeyword}
                      onChange={(e) => setEditingPost({ ...editingPost, focusKeyword: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Status</label>
                    <select
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                      value={editingPost.status}
                      onChange={(e) => setEditingPost({ ...editingPost, status: e.target.value })}
                    >
                      <option>Published</option>
                      <option>Draft</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Full Content (HTML)</label>
                  <textarea
                    required
                    rows={8}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all font-mono text-sm"
                    value={editingPost.content}
                    onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                  />
                </div>

                <div className="flex justify-end gap-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setEditingPost(null)}
                    className="px-8 py-4 rounded-2xl font-bold text-gray-500 hover:bg-gray-100 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    disabled={isUpdating}
                    type="submit"
                    className="px-10 py-4 rounded-2xl text-white font-bold transition-all hover:scale-[1.03] disabled:opacity-50"
                    style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-gold)" }}
                  >
                    {isUpdating ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
