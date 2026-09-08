"use client";

import { useState } from "react";
import Link from "next/link";

export default function GstCalculator() {
  const [amount, setAmount] = useState<string>("1000");
  const [gstRate, setGstRate] = useState<number>(18);
  const [customRate, setCustomRate] = useState<string>("");
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isInclusive, setIsInclusive] = useState<boolean>(false); // false = Add GST (exclusive), true = Remove GST (inclusive)
  const [copied, setCopied] = useState<boolean>(false);

  const numericAmount = parseFloat(amount) || 0;
  const activeRate = isCustom ? parseFloat(customRate) || 0 : gstRate;

  let baseAmount = 0;
  let gstAmount = 0;
  let totalAmount = 0;

  if (isInclusive) {
    // Reverse GST (Amount already includes tax)
    // Base = Total / (1 + Rate/100)
    totalAmount = numericAmount;
    baseAmount = numericAmount / (1 + activeRate / 100);
    gstAmount = totalAmount - baseAmount;
  } else {
    // Add GST (Amount is exclusive of tax)
    baseAmount = numericAmount;
    gstAmount = (numericAmount * activeRate) / 100;
    totalAmount = baseAmount + gstAmount;
  }

  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;
  const igst = gstAmount;

  const handleCopy = () => {
    const summary = `GST Calculation (${isInclusive ? "GST Included" : "GST Added"} at ${activeRate}%):
• Net Amount: ₹${baseAmount.toFixed(2)}
• Total GST: ₹${gstAmount.toFixed(2)} (CGST: ₹${cgst.toFixed(2)} + SGST: ₹${sgst.toFixed(2)})
• Gross Total: ₹${totalAmount.toFixed(2)}
Calculated with Vyop Free GST Tool (https://vyop.in/tools/gst-calculator)`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const presetRates = [5, 12, 18, 28];

  return (
    <div className="bg-white rounded-3xl border border-[var(--border-subtle)] shadow-[var(--shadow-lg)] overflow-hidden max-w-4xl mx-auto">
      {/* Mode Switcher */}
      <div className="flex border-b border-gray-100 bg-gray-50/80 p-2 gap-2">
        <button
          type="button"
          onClick={() => setIsInclusive(false)}
          className={`flex-1 py-3.5 px-4 rounded-2xl text-sm md:text-base font-bold transition-all ${
            !isInclusive
              ? "bg-white text-gray-900 shadow-sm border border-gray-200"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          ➕ Add GST (Exclusive)
        </button>
        <button
          type="button"
          onClick={() => setIsInclusive(true)}
          className={`flex-1 py-3.5 px-4 rounded-2xl text-sm md:text-base font-bold transition-all ${
            isInclusive
              ? "bg-white text-gray-900 shadow-sm border border-gray-200"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          ➖ Remove GST (Reverse / Inclusive)
        </button>
      </div>

      <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Input Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              {isInclusive ? "Total Amount (Including GST)" : "Initial Amount (Excluding GST)"}
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400">
                ₹
              </span>
              <input
                type="number"
                min="0"
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1000"
                className="w-full pl-10 pr-4 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-2xl font-extrabold text-gray-900 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              GST Tax Slab (%)
            </label>
            <div className="grid grid-cols-4 gap-2.5 mb-3">
              {presetRates.map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => {
                    setGstRate(rate);
                    setIsCustom(false);
                  }}
                  className={`py-3 rounded-xl font-extrabold text-base transition-all border ${
                    !isCustom && gstRate === rate
                      ? "bg-amber-500 text-white border-amber-500 shadow-md scale-[1.02]"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {rate}%
                </button>
              ))}
            </div>

            {/* Custom Rate Toggle */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsCustom(true)}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                  isCustom
                    ? "bg-amber-100 text-amber-900 border-amber-300"
                    : "bg-gray-100 text-gray-600 border-gray-200"
                }`}
              >
                Custom %
              </button>
              {isCustom && (
                <div className="flex-1 relative">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={customRate}
                    onChange={(e) => setCustomRate(e.target.value)}
                    placeholder="e.g. 18.5"
                    className="w-full px-3 py-1.5 text-sm rounded-lg border border-amber-400 focus:outline-none font-bold"
                    autoFocus
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">
                    %
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Quick GST Slab Helper */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-amber-800">
              <span>💡</span> Common Slabs in India:
            </div>
            <div>• <strong>5%:</strong> Household essentials, packaged food, tea, apparel &lt; ₹1,000</div>
            <div>• <strong>12%:</strong> Processed foods, computers, apparel &gt; ₹1,000</div>
            <div>• <strong>18%:</strong> Most retail goods, electronics, personal care, restaurants</div>
            <div>• <strong>28%:</strong> Automobiles, luxury goods, cement, ACs & refrigerators</div>
          </div>
        </div>

        {/* Calculation Breakdown Column */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Calculation Breakdown
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Net Amount (without tax):</span>
                <span className="font-bold text-gray-900 text-base">
                  ₹{baseAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm text-amber-800 bg-amber-100/60 px-3 py-2 rounded-xl">
                <span>Total GST ({activeRate}%):</span>
                <span className="font-extrabold text-amber-900 text-base">
                  + ₹{gstAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>

              {/* CGST / SGST split */}
              <div className="pt-2 border-t border-gray-200 text-xs text-gray-500 space-y-1.5 pl-2">
                <div className="flex justify-between">
                  <span>CGST (Central Tax @ {(activeRate / 2).toFixed(1)}%):</span>
                  <span className="font-semibold text-gray-700">
                    ₹{cgst.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>SGST (State Tax @ {(activeRate / 2).toFixed(1)}%):</span>
                  <span className="font-semibold text-gray-700">
                    ₹{sgst.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>(Or IGST for Inter-State @ {activeRate}%):</span>
                  <span>₹{igst.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-gray-200 flex justify-between items-baseline">
              <span className="text-base font-bold text-gray-900">Total Invoice Amount:</span>
              <span className="text-3xl font-extrabold text-emerald-700">
                ₹{totalAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <button
              type="button"
              onClick={handleCopy}
              className="w-full py-3 px-4 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              {copied ? "✓ Copied Calculation to Clipboard!" : "📋 Copy Calculation Summary"}
            </button>

            {/* In-tool Conversion Callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white text-center">
              <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-90">
                Tired of Manual Math?
              </div>
              <p className="text-xs text-white/95 mb-3 leading-relaxed">
                Speak items in Hindi or English — Vyop auto-calculates GST and prints bills in 5 seconds.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.vyop.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-white text-amber-900 font-extrabold text-xs shadow-md hover:bg-amber-50 transition-all"
              >
                Download Vyop Free App →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
