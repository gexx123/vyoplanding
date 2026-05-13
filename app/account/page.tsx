"use client";

import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Calendar, Star, LogOut, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AccountPage() {
  const { user, userData, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-hero)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--brand-primary)]"></div>
      </div>
    );
  }

  const isPremium = userData?.subscription === "premium";
  const joinDate = userData?.createdAt 
    ? new Date(userData.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : "Recently";

  // Simulate expiry date for premium, or show "N/A" for free
  const expiryDate = isPremium 
    ? new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : "Lifetime (Free Plan)";

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <section className="flex-grow pt-40 pb-20 px-6 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[var(--shadow-md)] border border-[var(--border-subtle)] relative overflow-hidden"
        >
          {/* Header Info */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-12 relative z-10">
            <div className="w-24 h-24 rounded-full bg-[var(--brand-glow)] flex items-center justify-center border-4 border-white shadow-lg overflow-hidden">
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-3xl font-bold text-[var(--brand-primary)]">
                  {user.displayName?.charAt(0) || user.email?.charAt(0) || "V"}
                </span>
              )}
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 font-display">
                {user.displayName || "Vyop User"}
              </h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <span className="text-gray-500">{user.email}</span>
                <span className="text-gray-300">•</span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Account
                </span>
              </div>
            </div>
          </div>

          <hr className="border-gray-100 mb-10" />

          {/* Account Status */}
          <div className="grid md:grid-cols-2 gap-6 mb-10 relative z-10">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Star className="w-5 h-5 text-[var(--brand-primary)]" />
                </div>
                <h3 className="font-bold text-gray-700">Current Plan</h3>
              </div>
              
              {isPremium ? (
                <div>
                  <p className="text-2xl font-bold text-[#D4AF37] mb-1">Premium</p>
                  <p className="text-sm text-gray-500">Enjoying all Vyop features!</p>
                </div>
              ) : (
                <div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">Free Tier</p>
                  <Link href="/billing" className="text-sm text-[var(--brand-primary)] font-bold hover:underline">
                    Upgrade to Premium &rarr;
                  </Link>
                </div>
              )}
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Calendar className="w-5 h-5 text-[var(--brand-primary)]" />
                </div>
                <h3 className="font-bold text-gray-700">Account History</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Member Since</span>
                  <span className="font-bold text-gray-900">{joinDate}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Plan Expiry</span>
                  <span className="font-bold text-gray-900">{expiryDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-[var(--brand-glow)] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-[var(--brand-primary)] border-opacity-20 relative z-10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[var(--brand-primary)]" />
              <div>
                <h4 className="font-bold text-gray-900">Vyop Shop App</h4>
                <p className="text-sm text-gray-600">Your account is ready to use on the app.</p>
              </div>
            </div>
            <a 
              href="https://vyop.shop" 
              target="_blank"
              className="px-6 py-2.5 bg-[var(--brand-primary)] text-white rounded-full font-bold shadow-md hover:bg-opacity-90 transition-all text-sm whitespace-nowrap"
            >
              Open Web App
            </a>
          </div>

          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-glow)] blur-3xl rounded-full -mr-32 -mt-32 opacity-40 pointer-events-none" />
        </motion.div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => {
              if (window.confirm("Are you sure you want to log out?")) {
                logout();
              }
            }}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-red-500 font-bold transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
