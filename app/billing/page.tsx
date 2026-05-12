"use client";

import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Users, CheckCircle2, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BillingPage() {
  const { user, userData, loading, signInWithGoogle, logout } = useAuth();

  const isPremium = userData?.subscription === "premium";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-hero)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--brand-primary)]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          
            {/* Full Width Pricing Table */}
            <div className="md:col-span-3 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-[var(--shadow-md)] border border-[var(--border-subtle)] relative overflow-hidden text-center"
              >
                <div className="relative z-10">
                  <h2 className="text-3xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                    Unlock Full Potential
                  </h2>
                  <p className="text-[var(--text-secondary)] mb-10 max-w-xl mx-auto">
                    Get Auto-Sync, Multi-Device Access, and Bank-Grade Security to protect your business records.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {/* Monthly */}
                    <div className="p-6 rounded-2xl border-2 border-gray-100 bg-gray-50 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-xl mb-2 text-gray-700">Monthly</h4>
                        <p className="text-4xl font-extrabold text-[var(--text-primary)] mb-6">₹49<span className="text-sm font-normal text-gray-500">/mo</span></p>
                      </div>
                      <Link href="https://vyop.shop" target="_blank" className="w-full py-3 bg-[var(--brand-glow)] text-[var(--brand-primary)] rounded-xl font-bold hover:bg-[var(--brand-primary)] hover:text-white transition-all">
                        Upgrade Now
                      </Link>
                    </div>

                    {/* Yearly (Best Value) */}
                    <div className="p-6 rounded-2xl border-2 border-[var(--brand-primary)] bg-white shadow-xl flex flex-col justify-between relative transform md:-translate-y-4">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--brand-primary)] text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                        Most Popular
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2 text-[var(--brand-primary)]">Yearly</h4>
                        <p className="text-4xl font-extrabold text-[var(--text-primary)] mb-6">₹499<span className="text-sm font-normal text-gray-500">/yr</span></p>
                        <p className="text-sm text-green-600 font-bold mb-6">Save 15%</p>
                      </div>
                      <Link href="https://vyop.shop" target="_blank" className="w-full py-3 bg-[var(--brand-primary)] text-white rounded-xl font-bold shadow-[var(--shadow-gold)] hover:scale-[1.02] transition-all">
                        Upgrade Now
                      </Link>
                    </div>

                    {/* 2 Years */}
                    <div className="p-6 rounded-2xl border-2 border-gray-100 bg-gray-50 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-xl mb-2 text-gray-700">2 Years</h4>
                        <p className="text-4xl font-extrabold text-[var(--text-primary)] mb-6">₹799<span className="text-sm font-normal text-gray-500">/2yr</span></p>
                        <p className="text-sm text-green-600 font-bold mb-6">Save 32%</p>
                      </div>
                      <Link href="https://vyop.shop" target="_blank" className="w-full py-3 bg-[var(--brand-glow)] text-[var(--brand-primary)] rounded-xl font-bold hover:bg-[var(--brand-primary)] hover:text-white transition-all">
                        Upgrade Now
                      </Link>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50">
                    <Users className="w-8 h-8 mb-4 text-gray-400 mx-auto" />
                    <h4 className="font-bold text-lg mb-2 text-gray-700">Prefer to pay in cash?</h4>
                    <p className="text-sm text-gray-500 max-w-md mx-auto">
                      Pay via an authorized Vyop Marketer in your area for instant offline activation.
                    </p>
                  </div>
                </div>

                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-glow)] blur-3xl rounded-full -mr-32 -mt-32 opacity-30" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--brand-glow)] blur-3xl rounded-full -ml-32 -mb-32 opacity-30" />
              </motion.div>

            {/* Support Info */}
            <div className="text-center p-8 bg-white/50 rounded-3xl border border-[var(--border-subtle)] border-dashed">
              <p className="text-sm text-[var(--text-secondary)]">
                Need help with payments? WhatsApp us at <span className="font-bold text-[var(--brand-primary)]">+91 9649059592</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
