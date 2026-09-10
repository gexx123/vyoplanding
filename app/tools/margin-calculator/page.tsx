"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export default function ProfitMarginCalculatorPage() {
  const [costPrice, setCostPrice] = useState<number>(100);
  const [sellingPrice, setSellingPrice] = useState<number>(140);
  const [calcMode, setCalcMode] = useState<"cp_sp" | "cp_margin">("cp_sp");
  const [targetMargin, setTargetMargin] = useState<number>(25);
  const [gstRate, setGstRate] = useState<number>(18);
  const [includeGst, setIncludeGst] = useState<boolean>(false);

  // Computed values
  let effectiveSp = sellingPrice;
  let grossProfit = 0;
  let marginPercent = 0;
  let markupPercent = 0;

  if (calcMode === "cp_sp") {
    grossProfit = Math.max(0, sellingPrice - costPrice);
    marginPercent = sellingPrice > 0 ? (grossProfit / sellingPrice) * 100 : 0;
    markupPercent = costPrice > 0 ? (grossProfit / costPrice) * 100 : 0;
    effectiveSp = sellingPrice;
  } else {
    // Mode: CP + Target Margin % => compute SP
    const factor = (100 - targetMargin) / 100;
    effectiveSp = factor > 0 ? Math.round(costPrice / factor) : 0;
    grossProfit = effectiveSp - costPrice;
    marginPercent = targetMargin;
    markupPercent = costPrice > 0 ? (grossProfit / costPrice) * 100 : 0;
  }

  const gstAmount = includeGst ? (effectiveSp * gstRate) / 100 : 0;
  const finalPriceWithGst = effectiveSp + gstAmount;

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-36 pb-20 px-4 md:px-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>📈</span> Retail Pricing & Profit Tool
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display mb-4 text-gray-900">
            Retail Profit Margin & <span className="gradient-text">Markup Calculator</span>
          </h1>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Calculate your exact gross profit, margin percentage, markup rate, and GST-compliant retail selling prices in seconds.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-200 mb-12">
          {/* Mode Selector */}
          <div className="flex rounded-2xl bg-gray-100 p-1.5 mb-8 max-w-md mx-auto">
            <button
              onClick={() => setCalcMode("cp_sp")}
              className={`flex-1 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                calcMode === "cp_sp" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Cost & Selling Price
            </button>
            <button
              onClick={() => setCalcMode("cp_margin")}
              className={`flex-1 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                calcMode === "cp_margin" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Cost & Target Margin %
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Input Column */}
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Cost Price / Purchase Price (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-400 font-bold text-lg">₹</span>
                  <input
                    type="number"
                    min="0"
                    value={costPrice || ""}
                    onChange={(e) => setCostPrice(Number(e.target.value))}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-300 font-bold text-lg text-gray-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                    placeholder="100"
                  />
                </div>
                <span className="text-[11px] text-gray-400 mt-1 block">What you paid your supplier or manufacturer</span>
              </div>

              {calcMode === "cp_sp" ? (
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Selling Price / MRP (₹)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-400 font-bold text-lg">₹</span>
                    <input
                      type="number"
                      min="0"
                      value={sellingPrice || ""}
                      onChange={(e) => setSellingPrice(Number(e.target.value))}
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-300 font-bold text-lg text-gray-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                      placeholder="140"
                    />
                  </div>
                  <span className="text-[11px] text-gray-400 mt-1 block">The price your customer pays before GST</span>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Desired Profit Margin (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      max="99"
                      value={targetMargin || ""}
                      onChange={(e) => setTargetMargin(Number(e.target.value))}
                      className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-300 font-bold text-lg text-gray-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                      placeholder="25"
                    />
                    <span className="absolute right-4 top-3 text-gray-400 font-bold text-lg">%</span>
                  </div>
                  <span className="text-[11px] text-gray-400 mt-1 block">e.g. 20% for groceries, 40% for garments</span>
                </div>
              )}

              {/* GST Toggle */}
              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-gray-700">Calculate GST on Sale?</span>
                  <input
                    type="checkbox"
                    checked={includeGst}
                    onChange={(e) => setIncludeGst(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                  />
                </div>
                {includeGst && (
                  <div className="flex gap-2">
                    {[0, 5, 12, 18, 28].map((rate) => (
                      <button
                        key={rate}
                        onClick={() => setGstRate(rate)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                          gstRate === rate ? "bg-amber-500 border-amber-500 text-white" : "border-gray-200 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Results Column */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">Your Earnings Breakdown</span>
                <div className="text-4xl font-extrabold mb-1">
                  ₹{grossProfit.toFixed(2)}
                </div>
                <span className="text-xs text-white/80 block mb-6">Gross Profit Per Unit Sold</span>

                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/20">
                  <div className="bg-white/10 rounded-xl p-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/80 block mb-1">Profit Margin</span>
                    <span className="text-2xl font-black">{marginPercent.toFixed(1)}%</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/80 block mb-1">Markup Rate</span>
                    <span className="text-2xl font-black">{markupPercent.toFixed(1)}%</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex justify-between text-sm mb-1 text-white/90">
                  <span>Recommended Base Selling Price:</span>
                  <span className="font-bold text-white">₹{effectiveSp.toFixed(2)}</span>
                </div>
                {includeGst && (
                  <>
                    <div className="flex justify-between text-xs text-white/80 mb-1">
                      <span>GST ({gstRate}%):</span>
                      <span>+₹{gstAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-white/20">
                      <span>Final MRP (Incl. GST):</span>
                      <span>₹{finalPriceWithGst.toFixed(2)}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Educational Comparison Box: Margin vs Markup */}
          <div className="bg-amber-50/60 rounded-2xl p-6 border border-amber-200">
            <h3 className="text-base font-bold text-gray-900 mb-2 font-display">
              💡 Profit Margin vs. Markup: What&apos;s the Difference?
            </h3>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
              Many shopkeepers confuse margin and markup. If you buy an item for <strong>₹100</strong> and sell it for <strong>₹140</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-3.5 rounded-xl border border-amber-200">
                <strong className="text-amber-800 block mb-1">Profit Margin = 28.6%</strong>
                <span className="text-gray-600">Calculated on Selling Price: (₹40 Profit ÷ ₹140 Selling Price) × 100. Shows how much of your revenue is actual profit.</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-amber-200">
                <strong className="text-amber-800 block mb-1">Markup Rate = 40.0%</strong>
                <span className="text-gray-600">Calculated on Cost Price: (₹40 Profit ÷ ₹100 Cost Price) × 100. Shows how much you added on top of what you paid.</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Vyop POS */}
        <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-md text-center">
          <h2 className="text-2xl font-bold mb-3 font-display text-gray-900">
            Track Real-Time Margins on Every Item with Vyop POS
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
            Vyop automatically tracks cost prices, selling prices, and category profit margins on your phone. See daily net profit reports with zero math. Free to start with ₹999/yr Pro cloud sync.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-600 text-white font-bold text-sm hover:bg-amber-700 transition-colors shadow-lg"
          >
            Download Vyop Free on Google Play →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
