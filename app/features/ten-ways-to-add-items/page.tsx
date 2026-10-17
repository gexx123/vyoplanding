import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import TenWaysToAddSection from "@/components/sections/TenWaysToAddSection";
import FAQ from "@/components/sections/FAQ";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "10 Ways to Add Products & Inventory: POS App | Vyop",
  },
  description:
    "Add items to bills & inventory with 10 fast methods: camera barcode scanning, Voice AI, photo recognition, supplier invoice PDF import & CSV. Free to start.",
  keywords: [
    "10 ways to add items",
    "fastest retail inventory app",
    "ai invoice scanner app",
    "voice inventory management",
    "barcode product addition",
  ],
};

export default function TenWaysToAddFeaturePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-amber-50/50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-6">
            Frictionless Product Entry
          </span>
          <h1
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            10 Ways to Add Items to Your Bill & Inventory
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed font-body">
            No matter how your products arrive — paper invoices, voice instructions, custom barcodes, or catalogue photos — Vyop makes adding inventory instant.
          </p>

          <div className="flex justify-center">
            <a
              href="https://vyop.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
            >
              Start Adding Items Free <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Ten Ways Section Component */}
      <TenWaysToAddSection />

      <FAQ />
      <Footer />
    </main>
  );
}
