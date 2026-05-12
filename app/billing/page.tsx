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
          
          {/* Left Column: User Profile & Status */}
          <div className="md:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-[var(--shadow-md)] border border-[var(--border-subtle)]"
            >
              {!user ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--brand-glow)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Secure Access</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">Log in to manage your billing and sync your data.</p>
                  <button 
                    onClick={signInWithGoogle}
                    className="w-full py-3 bg-[var(--brand-secondary)] text-white rounded-xl font-bold hover:scale-[1.02] transition-all"
                  >
                    Log in with Google
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <img src={user.photoURL || ""} alt={user.displayName || ""} className="w-12 h-12 rounded-full border-2 border-[var(--brand-primary)]" />
                    <div>
                      <h3 className="font-bold text-[var(--text-primary)]">{user.displayName}</h3>
                      <p className="text-xs text-[var(--text-muted)]">{user.email}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 mb-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Current Plan</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-lg font-bold ${isPremium ? "text-[var(--brand-primary)]" : "text-gray-600"}`}>
                        {isPremium ? "Premium Plan" : "Free Plan"}
                      </span>
                      {isPremium && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                    </div>
                    {isPremium && userData?.subscriptionEndDate && (
                      <p className="text-[10px] text-gray-500 mt-1 italic">
                        Expires on {userData.subscriptionEndDate?.toDate ? userData.subscriptionEndDate.toDate().toLocaleDateString() : new Date(userData.subscriptionEndDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>

                  <button 
                    onClick={logout}
                    className="w-full py-2 text-sm text-red-500 font-bold hover:bg-red-50 rounded-lg transition-all"
                  >
                    Logout
                  </button>
                </div>
              )}
            </motion.div>

            {user && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[var(--brand-secondary)] rounded-3xl p-8 text-white shadow-xl"
              >
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[var(--brand-primary)]" />
                  Cloud Security
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Your data is encrypted and synced only when you have a Premium subscription. We use bank-grade security to protect your business records.
                </p>
              </motion.div>
            )}
          </div>

          {/* Right Column: Billing Actions */}
          <div className="md:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-[var(--shadow-md)] border border-[var(--border-subtle)] relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  {isPremium ? "Your Subscription is Active" : "Unlock Full Potential"}
                </h2>
                
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-[var(--text-primary)]">Auto-Sync to Server</p>
                      <p className="text-sm text-[var(--text-secondary)]">Never lose your data even if you lose your phone.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-[var(--text-primary)]">Multi-Device Access</p>
                      <p className="text-sm text-[var(--text-secondary)]">Manage your shop from your phone, tablet, or PC.</p>
                    </div>
                  </div>
                </div>

                {!isPremium && (
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Online Payment */}
                    <Link href="https://vyop.shop" target="_blank" className="group">
                      <div className="h-full p-6 rounded-2xl border-2 border-[var(--brand-primary)] bg-[var(--brand-glow)] hover:bg-[var(--brand-primary)] hover:text-white transition-all cursor-pointer">
                        <CreditCard className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold text-lg mb-2">Pay Online</h4>
                        <p className="text-xs mb-6 opacity-80">Instant activation via Secure Gateway (Razorpay/Stripe).</p>
                        <div className="flex items-center gap-2 font-bold uppercase text-xs tracking-widest">
                          Proceed <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>

                    {/* Marketer Payment */}
                    <div className="p-6 rounded-2xl border-2 border-gray-100 bg-gray-50 hover:border-gray-200 transition-all">
                      <Users className="w-8 h-8 mb-4 text-gray-400" />
                      <h4 className="font-bold text-lg mb-2 text-gray-700">Pay via Marketer</h4>
                      <p className="text-xs mb-6 text-gray-500">Pay cash to an authorized Vyop agent near you.</p>
                      <button className="w-full py-2 bg-gray-200 text-gray-600 rounded-lg text-xs font-bold uppercase tracking-widest cursor-default">
                        Contact Agent
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-glow)] blur-3xl rounded-full -mr-32 -mt-32 opacity-30" />
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
