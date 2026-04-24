"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";

export default function CreateBlog() {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "Business Tips",
    excerpt: "",
    metaTitle: "",
    metaDescription: "",
    image: null as File | null,
  });
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("excerpt", formData.excerpt);
    data.append("metaTitle", formData.metaTitle);
    data.append("metaDescription", formData.metaDescription);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-gray-200/50"
        >
          <div className="flex items-center justify-between mb-10">
            <h1 
              className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Create New Blog Post
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* General Settings */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2">General Content</h2>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Blog Title</label>
                <input
                  required
                  type="text"
                  placeholder="Enter a catchy title..."
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Category</label>
                  <select
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all appearance-none"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option>Business Tips</option>
                    <option>Product Updates</option>
                    <option>AI Accounting</option>
                    <option>Success Stories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Feature Image</label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="image-upload"
                    />
                    <label 
                      htmlFor="image-upload"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-gray-500 truncate">
                        {formData.image ? formData.image.name : "Select an image..."}
                      </span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--brand-primary)]">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    </label>
                  </div>
                  {imagePreview && (
                    <div className="mt-4 relative aspect-[16/6] rounded-2xl overflow-hidden border">
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Excerpt (Summary)</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Write a brief summary of the post..."
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all resize-none"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                />
              </div>
            </div>

            {/* SEO Settings */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                SEO Settings
                <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase tracking-wider">Recommended</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Meta Title</label>
                  <input
                    type="text"
                    placeholder="Enter meta title for Google..."
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                    value={formData.metaTitle}
                    onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                  />
                  <p className="mt-1 text-[10px] text-gray-400">Keep it under 60 characters for best results.</p>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Meta Description</label>
                  <input
                    type="text"
                    placeholder="Enter meta description..."
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                    value={formData.metaDescription}
                    onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-5 rounded-2xl text-white font-bold text-lg transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-gold)" }}
            >
              {loading ? "Uploading & Publishing..." : "Publish Blog Post"}
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
