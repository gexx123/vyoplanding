"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";

export default function Careers() {
  const { user, signInWithGoogle } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    phone: "",
    location: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const roles = ["Sales", "Digital Media"];

  // If logged in, automatically redirect to marketer panel
  if (user) {
    router.push("/marketer");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.phone || !formData.location) {
      alert("Please fill out all fields.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit application");

      setStatus("success");
      setFormData({ name: "", role: "", phone: "", location: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Work With Us
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Join the team building India's first voice-powered AI accountant. We are looking for passionate individuals to help us scale Vyop across the country.
          </p>
        </div>

        {/* Existing Marketers Login */}
        <div className="mb-12 bg-[var(--brand-secondary)] rounded-3xl shadow-xl p-8 md:p-10 animate-fade-up text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Already a Vyop Marketer?</h3>
          <p className="text-sm text-gray-300 mb-6 max-w-md mx-auto">Log in to your dashboard to activate customer subscriptions and track your performance.</p>
          <button 
            onClick={signInWithGoogle}
            className="px-8 py-3 bg-white text-[var(--brand-secondary)] rounded-xl font-bold hover:scale-[1.02] transition-all shadow-lg"
          >
            Log in with Google
          </button>
        </div>

        <div className="text-center mb-8 flex items-center justify-center gap-4">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Or Apply Now</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-[var(--shadow-md)] p-8 md:p-12 border border-[var(--border-subtle)] animate-fade-up" style={{ animationDelay: "100ms" }}>
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
              <p className="text-gray-600 mb-8">
                Thank you for applying. We will review your details and get back to you soon.
              </p>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="font-bold text-gray-900 mb-2">Next Step:</p>
                <p className="text-gray-600">Please email your resume to <a href="mailto:vyop4shop@gmail.com" className="text-[var(--brand-primary)] font-bold hover:underline">vyop4shop@gmail.com</a> with your name in the subject line.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Job Role</label>
                <div className="flex flex-wrap gap-3">
                  {roles.map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setFormData({ ...formData, role })}
                      className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                        formData.role === role
                          ? "bg-[var(--brand-secondary)] text-white shadow-md scale-105"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Where do you live?</label>
                <input
                  type="text"
                  required
                  placeholder="City, State"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl text-white font-bold text-lg transition-all shadow-[var(--shadow-gold)] hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {status === "loading" ? "Submitting..." : "Submit Application"}
                </button>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center font-medium mt-4">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>

        {status !== "success" && (
          <div className="mt-12 text-center p-6 bg-white/50 rounded-2xl border border-[var(--border-subtle)]">
            <h4 className="font-bold text-gray-900 mb-2">Don't forget your resume!</h4>
            <p className="text-gray-600">
              After submitting the form above, please share your resume at{" "}
              <a href="mailto:vyop4shop@gmail.com" className="text-[var(--brand-primary)] font-bold hover:underline">
                vyop4shop@gmail.com
              </a>
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
