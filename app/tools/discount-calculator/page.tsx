"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

type DiscountMode = "flat" | "stacked" | "bogo";

export default function DiscountCalculatorPage() {
  const [mode, setMode] = useState<DiscountMode>("flat");

  // Flat mode state
  const [originalPrice, setOriginalPrice] = useState<number>(1200);
  const [discountPercent, setDiscountPercent] = useState<number>(25);

  // Stacked mode state
  const [firstDiscount, setFirstDiscount] = useState<number>(50);
  const [secondDiscount, setSecondDiscount] = useState<number>(10);

  // BOGO mode state
  const [buyQty, setBuyQty] = useState<number>(2);
  const [freeQty, setFreeQty] = useState<number>(1);
  const [itemPrice, setItemPrice] = useState<number>(500);

  // GST toggle
  const [applyGst, setApplyGst] = useState<boolean>(false);
  const [gstSlab, setGstSlab] = useState<number>(18);

  // Flat calculations
  const flatSavings = (originalPrice * discountPercent) / 100;
  const flatFinalPrice = Math.max(0, originalPrice - flatSavings);
  const flatGstAmount = applyGst ? (flatFinalPrice * gstSlab) / 100 : 0;
  const flatTotalWithTax = flatFinalPrice + flatGstAmount;

  // Stacked calculations
  const priceAfterFirst = originalPrice * (1 - firstDiscount / 100);
  const stackedFinalPrice = priceAfterFirst * (1 - secondDiscount / 100);
  const stackedSavings = originalPrice - stackedFinalPrice;
  const effectiveStackedPercent = originalPrice > 0 ? (stackedSavings / originalPrice) * 100 : 0;

  // BOGO calculations
  const totalItemsReceived = buyQty + freeQty;
  const totalCost = buyQty * itemPrice;
  const costPerItem = totalItemsReceived > 0 ? totalCost / totalItemsReceived : 0;
  const bogoDiscountPercent =
    totalItemsReceived * itemPrice > 0
      ? ((totalItemsReceived * itemPrice - totalCost) / (totalItemsReceived * itemPrice)) * 100
      : 0;

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-36 pb-20 px-4 md:px-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>🏷️</span> Retail Offer & Sale Calculator
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display mb-4 text-gray-900">
            Discount & Buy-Get-Free <span className="gradient-text">Offer Calculator</span>
          </h1>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Calculate single discount percentages, stacked sale offers (e.g. 50% + 10% off), Buy 2 Get 1 Free savings, and GST after discount.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex rounded-2xl bg-gray-100 p-1.5 mb-8 max-w-md mx-auto">
          <button
            onClick={() => setMode("flat")}
            className={`flex-1 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
              mode === "flat" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Simple % Off
          </button>
          <button
            onClick={() => setMode("stacked")}
            className={`flex-1 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
              mode === "stacked" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Double Discount (50% + 10%)
          </button>
          <button
            onClick={() => setMode("bogo")}
            className={`flex-1 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
              mode === "bogo" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Buy X Get Y Free
          </button>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-200 mb-12">
          {mode === "flat" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Original Price / MRP (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={originalPrice || ""}
                    onChange={(e) => setOriginalPrice(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 font-bold text-xl text-gray-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Discount Percentage (%)
                  </label>
                  <div className="flex gap-2 mb-2">
                    {[10, 20, 25, 30, 50].map((d) => (
                      <button
                        key={d}
                        onClick={() => setDiscountPercent(d)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                          discountPercent === d ? "bg-amber-500 border-amber-500 text-white" : "border-gray-200 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {d}%
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={discountPercent || ""}
                    onChange={(e) => setDiscountPercent(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 font-bold text-base text-gray-900 focus:outline-none focus:border-amber-500"
                    placeholder="Custom %"
                  />
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-700">Add GST after Discount?</span>
                    <input
                      type="checkbox"
                      checked={applyGst}
                      onChange={(e) => setApplyGst(e.target.checked)}
                      className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                    />
                  </div>
                  {applyGst && (
                    <div className="flex gap-2">
                      {[5, 12, 18, 28].map((g) => (
                        <button
                          key={g}
                          onClick={() => setGstSlab(g)}
                          className={`flex-1 py-1 rounded text-xs font-bold ${
                            gstSlab === g ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {g}%
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Result Box */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-3xl p-6 md:p-8 text-center shadow-md">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">Final Discounted Price</span>
                <div className="text-4xl md:text-5xl font-extrabold font-mono mb-2">
                  ₹{flatFinalPrice.toFixed(2)}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-extrabold mb-6 shadow-sm">
                  You Save: ₹{flatSavings.toFixed(2)} ({discountPercent}% OFF)
                </div>

                {applyGst && (
                  <div className="pt-4 border-t border-white/20 text-xs text-white/90 space-y-1">
                    <div className="flex justify-between">
                      <span>GST Amount ({gstSlab}%):</span>
                      <span className="font-bold">+₹{flatGstAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base font-extrabold text-white pt-1 border-t border-white/20">
                      <span>Total with GST:</span>
                      <span>₹{flatTotalWithTax.toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {mode === "stacked" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Original Price / MRP (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={originalPrice || ""}
                    onChange={(e) => setOriginalPrice(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 font-bold text-xl text-gray-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Primary Discount (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={firstDiscount || ""}
                      onChange={(e) => setFirstDiscount(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 font-bold text-lg text-gray-900 focus:outline-none focus:border-amber-500"
                      placeholder="50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Extra Bill Discount (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={secondDiscount || ""}
                      onChange={(e) => setSecondDiscount(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 font-bold text-lg text-gray-900 focus:outline-none focus:border-amber-500"
                      placeholder="10"
                    />
                  </div>
                </div>
              </div>

              {/* Stacked Result */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-3xl p-6 md:p-8 text-center shadow-md">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">
                  Effective Total Discount
                </span>
                <div className="text-4xl md:text-5xl font-extrabold font-mono mb-2">
                  {effectiveStackedPercent.toFixed(1)}% OFF
                </div>
                <p className="text-xs text-white/80 mb-4">
                  (Not {firstDiscount + secondDiscount}%, because the extra discount applies to the already discounted price!)
                </p>

                <div className="bg-white/10 rounded-2xl p-4 text-sm space-y-2 text-left">
                  <div className="flex justify-between">
                    <span>Original Price:</span>
                    <span className="font-bold">₹{originalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>After {firstDiscount}%:</span>
                    <span className="font-bold">₹{priceAfterFirst.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold pt-2 border-t border-white/20">
                    <span>Final Amount to Pay:</span>
                    <span className="text-amber-200">₹{stackedFinalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {mode === "bogo" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Buy Quantity (Pay For)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={buyQty || ""}
                      onChange={(e) => setBuyQty(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 font-bold text-lg text-gray-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Get Quantity (Free)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={freeQty || ""}
                      onChange={(e) => setFreeQty(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 font-bold text-lg text-gray-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Individual Item Price (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={itemPrice || ""}
                    onChange={(e) => setItemPrice(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 font-bold text-xl text-gray-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* BOGO Result */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-3xl p-6 md:p-8 text-center shadow-md">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">
                  Effective Discount Per Item
                </span>
                <div className="text-4xl md:text-5xl font-extrabold font-mono mb-2">
                  {bogoDiscountPercent.toFixed(1)}% OFF
                </div>

                <div className="bg-white/10 rounded-2xl p-4 text-sm space-y-2 text-left mt-4">
                  <div className="flex justify-between">
                    <span>Total Items Taken Home:</span>
                    <strong className="text-white">{totalItemsReceived} units</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Bill Paid:</span>
                    <strong className="text-white">₹{totalCost.toFixed(2)}</strong>
                  </div>
                  <div className="flex justify-between text-base font-extrabold pt-2 border-t border-white/20">
                    <span>Effective Cost Per Item:</span>
                    <span className="text-amber-200">₹{costPerItem.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-md text-center">
          <h2 className="text-2xl font-bold mb-3 font-display text-gray-900">
            Automate Discounts & Run Spin-The-Wheel Offers with Vyop!
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
            Vyop POS lets you create customized store discounts, instant item-wise markdowns, and interactive customer Spin-The-Wheel games on your online store to boost sales. 100% Free Forever.
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
