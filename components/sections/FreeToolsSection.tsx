"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FreeToolsSection() {
  return (
    <section className="py-20 bg-[#FAF7F0] border-t border-b border-amber-200/50">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-200/80 text-amber-900 text-xs font-extrabold tracking-wider uppercase mb-3 border border-amber-300">
            Free Retail Utilities & Hubs
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-gray-900 mb-4">
            Free Tools & Comparison Hubs for Shopkeepers
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Generate barcode stickers for free or see how Vyop compares against traditional desktop software.
          </p>
        </div>

        {/* 3-Column High Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Free GST Calculator */}
          <div className="bg-white rounded-3xl p-8 border-2 border-amber-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🧮
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                100% Free Calculator
              </span>
              <h3 className="text-2xl font-bold font-display text-gray-900 mt-3 mb-3">
                Free Online GST Calculator
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Calculate inclusive &amp; reverse GST, CGST, SGST, and IGST splits for 5%, 12%, 18%, and 28% tax slabs with instant one-click copy.
              </p>
            </div>

            <Link
              href="/tools/gst-calculator"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-all shadow-md group-hover:scale-[1.02]"
            >
              Open GST Calculator →
            </Link>
          </div>

          {/* Card 2: Free Barcode Generator */}
          <div className="bg-white rounded-3xl p-8 border-2 border-amber-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🖨️
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                100% Free Browser Tool
              </span>
              <h3 className="text-2xl font-bold font-display text-gray-900 mt-3 mb-3">
                Free Barcode Generator
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Type any item name, price, and barcode to generate scannable EAN/CODE128 stickers. Print label sheets directly from your browser!
              </p>
            </div>

            <Link
              href="/tools/barcode-generator"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm transition-all shadow-md group-hover:scale-[1.02]"
            >
              Generate Barcodes →
            </Link>
          </div>

          {/* Card 3: Comparison Hub */}
          <div className="bg-white rounded-3xl p-8 border-2 border-amber-200/80 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🆚
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Software Benchmark Hub
              </span>
              <h3 className="text-2xl font-bold font-display text-gray-900 mt-3 mb-3">
                Vyop vs Tally, Vyapar &amp; More
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Compare Vyop against Tally Prime, Vyapar, and myBillBook. See why voice AI and phone camera barcode POS is 10x faster for retail.
              </p>
            </div>

            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gray-900 hover:bg-black text-white font-bold text-sm transition-all shadow-md group-hover:scale-[1.02]"
            >
              Explore Comparison Hub →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
