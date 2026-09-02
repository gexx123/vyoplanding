"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import {
  TrendingUp,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Briefcase,
} from "lucide-react";

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    role: "Sales & Merchant Acquisition",
    phone: "",
    location: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const roles = [
    "Sales & Merchant Acquisition",
    "Tech & Software Intern",
    "AI & Voice Systems Intern",
    "Digital Media & Content",
  ];

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
      setFormData({ name: "", role: "Sales & Merchant Acquisition", phone: "", location: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-36 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase size={14} />
            Join the Vyop Mission
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Careers & Opportunities
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            We are hiring passionate sales professionals, field growth specialists, and ambitious student interns to scale India's voice AI billing app.
          </p>
        </div>

        {/* Dual Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Sales Card */}
          <div className="p-8 rounded-3xl bg-white border border-[var(--border-subtle)] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-[var(--brand-primary)] mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Work With Us (Sales & Growth)</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Join our high-earning merchant acquisition team. Onboard Kiranas, cloth stores, and supermarkets. Earn ₹35K - ₹1L+/month with daily commissions.
              </p>
            </div>
            <Link
              href="/work-with-us"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-black transition-colors"
            >
              Explore Sales Roles & Commission
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Internship Card */}
          <div className="p-8 rounded-3xl bg-white border border-[var(--border-subtle)] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Student Internship Program</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Build real AI software, smartphone POS, and offline systems. Get verified certificates, founder LOR, stipend, and fast-track PPO opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/internship"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-white font-bold text-sm shadow-[var(--shadow-gold)] hover:scale-[1.02] transition-all"
                style={{ background: "var(--gradient-brand)" }}
              >
                Explore Internship Tracks & Apply
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/internship#verify"
                className="inline-flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-emerald-700 hover:underline"
              >
                <ShieldCheck size={14} />
                Verify Student Certificate
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Application Form */}
        <div className="bg-white rounded-3xl shadow-[var(--shadow-md)] p-8 md:p-12 border border-[var(--border-subtle)]">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Quick Application
          </h2>

          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for applying. We will review your details and get back to you shortly.
              </p>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 max-w-md mx-auto text-left">
                <p className="font-bold text-gray-900 text-sm mb-1">Direct Contact:</p>
                <p className="text-xs text-gray-600">
                  Please email your resume to{" "}
                  <a href="mailto:vyop4shop@gmail.com" className="text-[var(--brand-primary)] font-bold hover:underline">
                    vyop4shop@gmail.com
                  </a>{" "}
                  or message our team on WhatsApp at{" "}
                  <a href="https://wa.me/919649059592" className="text-emerald-600 font-bold hover:underline">
                    +91 96490 59592
                  </a>.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[var(--brand-primary)] text-gray-900"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Preferred Role</label>
                <div className="flex flex-wrap gap-2.5">
                  {roles.map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setFormData({ ...formData, role })}
                      className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        formData.role === role
                          ? "bg-[var(--brand-secondary)] text-white shadow-md scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mobile / WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[var(--brand-primary)] text-gray-900"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">City & State</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaipur, Rajasthan"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[var(--brand-primary)] text-gray-900"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl text-white font-bold text-base transition-all shadow-[var(--shadow-gold)] hover:scale-[1.01] disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {status === "loading" ? "Submitting..." : "Submit Application"}
                </button>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center font-medium">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
