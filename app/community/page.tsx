"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

interface Message {
  id: string;
  name: string;
  message: string;
  createdAt: number;
}

export default function Community() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/community");
      const data = await res.json();
      if (data.messages) {
        setMessages(data.messages);
      }
    } catch (error) {
      console.error("Failed to fetch messages", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to post message");

      setStatus("success");
      setFormData({ name: "", message: "" });
      // Instantly refresh messages
      fetchMessages();
      
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop Community
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            A public board to share your thoughts, feature requests, and connect with other shopkeepers.
          </p>
        </div>

        {/* Post Message Form */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[var(--border-subtle)] mb-12 animate-fade-up" style={{ animationDelay: "100ms" }}>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Leave a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                required
                placeholder="Your Name / Shop Name"
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <textarea
                required
                rows={3}
                placeholder="What's on your mind? Have a feature request?"
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <p className={`text-sm font-medium ${status === 'success' ? 'text-green-500' : status === 'error' ? 'text-red-500' : 'text-transparent'}`}>
                {status === 'success' ? 'Message posted!' : status === 'error' ? 'Failed to post.' : '...'}
              </p>
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-3 rounded-full text-white font-bold transition-all shadow-[var(--shadow-gold)] hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                style={{ background: "var(--gradient-brand)" }}
              >
                {status === "loading" ? "Posting..." : "Post Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Message Feed */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">Recent Messages</h3>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-4 border-gray-200 border-t-[var(--brand-primary)] rounded-full animate-spin"></div>
            </div>
          ) : messages.length === 0 ? (
            <p className="text-center text-gray-500 py-12 bg-white rounded-2xl border border-[var(--border-subtle)]">
              No messages yet. Be the first to post!
            </p>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border-subtle)] animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center text-white font-bold">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 leading-tight">{msg.name}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(msg.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">{msg.message}</p>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
