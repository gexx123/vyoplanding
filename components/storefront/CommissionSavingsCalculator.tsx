"use client";

import React, { useState, useMemo } from "react";
import { TrendingUp, ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2 } from "lucide-react";

type BusinessCategory = "food" | "grocery" | "retail";

interface CategoryConfig {
  label: string;
  badge: string;
  aggregatorName: string;
  commissionRate: number; // percentage
  gatewayRate: number; // percentage
  avgOrderValue: number;
}

const CATEGORIES: Record<BusinessCategory, CategoryConfig> = {
  food: {
    label: "Restaurant, Cafe & Dhaba",
    badge: "Food & Dining",
    aggregatorName: "Swiggy / Zomato",
    commissionRate: 28, // 28% average commission
    gatewayRate: 2.5,
    avgOrderValue: 450,
  },
  grocery: {
    label: "Kirana, Supermarket & FMCG",
    badge: "Daily Essentials",
    aggregatorName: "Blinkit / Zepto / Instamart",
    commissionRate: 22, // 22% average quick-commerce margin cut
    gatewayRate: 2.0,
    avgOrderValue: 550,
  },
  retail: {
    label: "Clothing Boutique, Bakery & Retail",
    badge: "Direct Brands",
    aggregatorName: "Shopify / Paid Store Builders",
    commissionRate: 5, // monthly subscription + transaction fees
    gatewayRate: 2.5,
    avgOrderValue: 1200,
  },
};

export default function CommissionSavingsCalculator() {
  const [category, setCategory] = useState<BusinessCategory>("food");
  const [monthlySales, setMonthlySales] = useState<number>(100000); // ₹1,00,000 default

  const config = CATEGORIES[category];

  const {
    monthlyAggregatorCut,
    yearlyAggregatorCut,
    monthlyVyopCut,
    yearlySavings,
  } = useMemo(() => {
    const commissionAmount = (monthlySales * config.commissionRate) / 100;
    const gatewayAmount = (monthlySales * config.gatewayRate) / 100;
    const totalMonthlyCut = Math.round(commissionAmount + gatewayAmount);
    const totalYearlyCut = totalMonthlyCut * 12;

    return {
      monthlyAggregatorCut: totalMonthlyCut,
      yearlyAggregatorCut: totalYearlyCut,
      monthlyVyopCut: 0,
      yearlySavings: totalYearlyCut,
    };
  }, [monthlySales, config]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const presets = [50000, 100000, 250000, 500000];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-amber-50/30 to-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>0% Commission Profit Calculator</span>
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Calculate How Much You Save on{" "}
            <span className="gradient-text">0% Commission</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-body">
            See exactly how much hard-earned profit food aggregators, quick-commerce apps, and paid website builders take from your shop every year.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-amber-200/90 shadow-xl shadow-amber-500/5">
          {/* 1. Category Switcher */}
          <div className="mb-8">
            <label className="block text-xs font-black uppercase tracking-wider text-gray-600 mb-3">
              1. Select Your Shop Type:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(Object.keys(CATEGORIES) as BusinessCategory[]).map((key) => {
                const item = CATEGORIES[key];
                const isSelected = category === key;
                return (
                  <button
                    key={key}
                    onClick={() => setCategory(key)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-amber-500/10 border-amber-500 ring-2 ring-amber-400/40 text-slate-950 font-bold shadow-xs"
                        : "bg-gray-50/70 border-gray-200 hover:border-gray-300 text-gray-700"
                    }`}
                  >
                    <div className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                      {item.badge}
                    </div>
                    <div className="text-sm font-extrabold text-gray-900 mt-0.5">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-gray-500 mt-1">
                      vs {item.aggregatorName}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Monthly Online Sales Slider */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <label className="text-xs font-black uppercase tracking-wider text-gray-600">
                2. Your Expected Monthly Online Sales:
              </label>
              <div className="text-2xl font-black text-amber-600 bg-amber-50 px-4 py-1.5 rounded-xl border border-amber-200/80 inline-block text-right">
                {formatINR(monthlySales)}
                <span className="text-xs font-medium text-gray-500 ml-1">/ month</span>
              </div>
            </div>

            <input
              type="range"
              min={20000}
              max={1000000}
              step={10000}
              value={monthlySales}
              onChange={(e) => setMonthlySales(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />

            {/* Presets Row */}
            <div className="flex items-center justify-between gap-2 mt-3 pt-2">
              <span className="text-xs text-gray-500 font-medium">Quick Presets:</span>
              <div className="flex items-center gap-2 flex-wrap">
                {presets.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setMonthlySales(preset)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      monthlySales === preset
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {formatINR(preset)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Comparison Breakdown (Aggregators vs Vyop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
            {/* Left: Aggregators / Competitors Lost Money */}
            <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-rose-800">
                    Aggregators &amp; Third-Party Platforms
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-200 text-rose-900 text-xs font-bold">
                    ~{config.commissionRate + config.gatewayRate}% Cut
                  </span>
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  Commission + Payment Gateway Deduction ({config.aggregatorName}):
                </div>
                <div className="text-3xl font-black text-rose-600">
                  -{formatINR(monthlyAggregatorCut)}
                  <span className="text-xs font-medium text-rose-700 ml-1">/ mo lost</span>
                </div>
                <div className="text-xs font-semibold text-rose-800 mt-2">
                  Total loss per year:{" "}
                  <strong className="font-black text-rose-900">
                    -{formatINR(yearlyAggregatorCut)}
                  </strong>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-rose-200/70 text-[11px] text-gray-600">
                ❌ High 25–35% cuts • Customer data masked • Money withheld 3–7 days
              </div>
            </div>

            {/* Right: Vyop 0% Commission (100% Retained) */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/70 border-2 border-emerald-400 flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Vyop Online Storefront</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-xs font-black uppercase">
                    0% Commission
                  </span>
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  Platform Commission + Direct UPI / Cash on Delivery:
                </div>
                <div className="text-3xl font-black text-emerald-600">
                  {formatINR(monthlyVyopCut)}
                  <span className="text-xs font-medium text-emerald-700 ml-1">
                    (₹0 Platform Fee!)
                  </span>
                </div>
                <div className="text-xs font-semibold text-emerald-800 mt-2">
                  Your Extra Profit with Vyop:{" "}
                  <strong className="font-black text-emerald-950 text-sm">
                    +{formatINR(yearlySavings)} / year!
                  </strong>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-emerald-200 text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Keep 100% profit • Direct UPI to bank • Customer data is 100% yours</span>
              </div>
            </div>
          </div>

          {/* Bottom Action inside Calculator */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="text-base font-extrabold text-gray-900">
                Keep <span className="text-emerald-600 font-black">+{formatINR(yearlySavings)} extra</span> in your pocket every year!
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                30-second setup. No credit card required. Free to start on vyop.shop.
              </div>
            </div>

            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] shrink-0"
            >
              <span>Launch Free Store &amp; Save</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
