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
    category: "Voice Billing",
    author: "Himanshu",
    authorTitle: "Founder, Vyop",
    excerpt: "",
    content: "",
    focusKeyword: "",
    secondaryKeywords: "",
    metaTitle: "",
    metaDescription: "",
    imageAltText: "",
    status: "Published",
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

    let imageUrl = "";

    try {
      if (formData.image) {
        const imageFormData = new FormData();
        imageFormData.append("file", formData.image);
        
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: imageFormData,
        });
        
        if (!uploadRes.ok) throw new Error("Image upload failed");
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.url;
      }

      const payload = {
        title: formData.title,
        category: formData.category,
        author: formData.author,
        authorTitle: formData.authorTitle,
        focusKeyword: formData.focusKeyword,
        secondaryKeywords: formData.secondaryKeywords,
        excerpt: formData.excerpt,
        content: formData.content,
        metaTitle: formData.metaTitle,
        metaDescription: formData.metaDescription,
        imageAltText: formData.imageAltText,
        status: formData.status,
        image: imageUrl,
      };

      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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

  // SEO Checklist Logic
  const seoChecklist = {
    title: formData.focusKeyword && formData.title.toLowerCase().includes(formData.focusKeyword.toLowerCase()),
    firstPara: formData.focusKeyword && formData.content.split('\n')[0].toLowerCase().includes(formData.focusKeyword.toLowerCase()),
    h2: formData.focusKeyword && formData.content.toLowerCase().includes(`<h2`) && formData.content.toLowerCase().includes(formData.focusKeyword.toLowerCase()),
    length: formData.content.split(' ').length > 300
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700 flex justify-between">
                    Blog Title
                    <span className={`text-[10px] ${formData.title.length > 60 ? 'text-red-500' : 'text-gray-400'}`}>
                      {formData.title.length}/60
                    </span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. How to use Voice Billing..."
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Category</label>
                  <select
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all appearance-none"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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
                  <label className="block text-sm font-bold mb-2 text-gray-700">Author Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Author Title</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Founder, Vyop"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                    value={formData.authorTitle}
                    onChange={(e) => setFormData({ ...formData, authorTitle: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700 text-right">Alt Text (SEO)</label>
                  <input
                    type="text"
                    placeholder="Describe the image..."
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                    value={formData.imageAltText}
                    onChange={(e) => setFormData({ ...formData, imageAltText: e.target.value })}
                  />
                </div>
              </div>

              {imagePreview && (
                <div className="relative aspect-[16/6] rounded-2xl overflow-hidden border">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}

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

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700 flex justify-between items-center">
                  Full Content
                  <span className="text-xs font-normal text-gray-500">Supports HTML</span>
                </label>
                <textarea
                  required
                  rows={15}
                  placeholder="Write the full blog post content here. You can use standard HTML tags like <h2>, <p>, <strong>, etc."
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all font-mono text-sm"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                />
              </div>
            </div>

            {/* SEO Analysis */}
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4">
                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                  SEO Checklist
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className={seoChecklist.title ? "text-green-500" : "text-gray-300"}>●</span>
                    Keyword in Title
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={seoChecklist.firstPara ? "text-green-500" : "text-gray-300"}>●</span>
                    Keyword in first paragraph
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={seoChecklist.h2 ? "text-green-500" : "text-gray-300"}>●</span>
                    Keyword in at least one H2
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={seoChecklist.length ? "text-green-500" : "text-gray-300"}>●</span>
                    300+ words
                  </li>
                </ul>
              </div>
              
              <div className="flex-[2] space-y-4 border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-8">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Focus Keyword *</label>
                  <input
                    type="text"
                    placeholder="e.g. voice billing"
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                    value={formData.focusKeyword}
                    onChange={(e) => setFormData({ ...formData, focusKeyword: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Secondary Keywords</label>
                  <input
                    type="text"
                    placeholder="comma, separated, keywords"
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                    value={formData.secondaryKeywords}
                    onChange={(e) => setFormData({ ...formData, secondaryKeywords: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* SEO Settings */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                Search Preview Settings
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700 flex justify-between">
                    Meta Title (Override)
                    <span className={`text-[10px] ${formData.metaTitle.length > 60 ? 'text-red-500' : 'text-gray-400'}`}>
                      {formData.metaTitle.length}/60
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Defaults to Title..."
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                    value={formData.metaTitle}
                    onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700 flex justify-between">
                    Meta Description / Excerpt *
                    <span className={`text-[10px] ${formData.metaDescription.length > 160 ? 'text-red-500' : 'text-gray-400'}`}>
                      {formData.metaDescription.length}/160
                    </span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Summary for Google and Social..."
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
