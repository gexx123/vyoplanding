import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FAQ from "@/components/sections/FAQ";
import { ShoppingBag, Share2, Percent, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Zero-Commission Online Store for Kirana & Retail — Vyop Storefront",
  description:
    "Build a live online store for your Kirana shop in minutes. Share a catalog link with customers for 0% commission direct ordering, custom discount offers, and spin-the-wheel rewards.",
  keywords: [
    "zero commission online store kirana",
    "retail store digital catalog link",
    "direct customer ordering app",
    "free online shop builder India",
  ],
};

export default function OnlineStorefrontFeaturePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-amber-50/50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-6">
            Direct Merchant-to-Customer Storefront
          </span>
          <h1
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Launch Your Online Store in Minutes — 0% Commission Charges
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-body">
            Stop giving away 20-30% of your earnings to food delivery platforms. Share a live catalog link with your local customers and accept direct orders with zero middleman delivery fees.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://vyop.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
            >
              Create Free Store Link <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#FDFCF7] border border-amber-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Instant Live Catalog Link</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-body">
              Items added to your inventory automatically update your live customer store link in real time.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FDFCF7] border border-amber-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6">
              <Percent className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">0% Commission Cut</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-body">
              Keep 100% of your profits. We connect shopkeeper and customer directly with clear, transparent server pricing.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FDFCF7] border border-amber-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Offers & Spin Wheel</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-body">
              Engage customers with customizable discount offer banners and interactive Spin-The-Wheel rewards games.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
