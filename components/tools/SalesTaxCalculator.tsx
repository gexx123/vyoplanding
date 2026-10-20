"use client";

import { useState, useId } from "react";
import { Copy, Check, RotateCcw, Calculator, Globe, Receipt, DollarSign, Percent } from "lucide-react";

interface TaxPreset {
  country: string;
  flag: string;
  taxName: string;
  currency: string;
  symbol: string;
  rates: { label: string; rate: number }[];
}

const TAX_PRESETS: TaxPreset[] = [
  {
    country: "United States",
    flag: "🇺🇸",
    taxName: "State Sales Tax",
    currency: "USD",
    symbol: "$",
    rates: [
      { label: "California (7.25%)", rate: 7.25 },
      { label: "Texas (6.25%)", rate: 6.25 },
      { label: "Florida (6.0%)", rate: 6.0 },
      { label: "New York (4.0%)", rate: 4.0 },
      { label: "Illinois (6.25%)", rate: 6.25 },
      { label: "Washington (6.5%)", rate: 6.5 },
      { label: "Pennsylvania (6.0%)", rate: 6.0 },
      { label: "Ohio (5.75%)", rate: 5.75 },
      { label: "No Tax (OR/DE/MT/NH)", rate: 0.0 },
    ],
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    taxName: "HMRC VAT",
    currency: "GBP",
    symbol: "£",
    rates: [
      { label: "Standard Rate (20%)", rate: 20 },
      { label: "Reduced Rate (5%)", rate: 5 },
      { label: "Zero Rate (0%)", rate: 0 },
    ],
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    taxName: "GST / HST / PST",
    currency: "CAD",
    symbol: "C$",
    rates: [
      { label: "Ontario (13% HST)", rate: 13 },
      { label: "British Columbia (12% GST+PST)", rate: 12 },
      { label: "Alberta (5% GST)", rate: 5 },
      { label: "Quebec (14.975% GST+QST)", rate: 14.975 },
    ],
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    taxName: "ATO GST",
    currency: "AUD",
    symbol: "A$",
    rates: [
      { label: "Standard GST (10%)", rate: 10 },
      { label: "GST-Free (0%)", rate: 0 },
    ],
  },
  {
    country: "European Union",
    flag: "🇪🇺",
    taxName: "European VAT",
    currency: "EUR",
    symbol: "€",
    rates: [
      { label: "Germany (19%)", rate: 19 },
      { label: "France (20%)", rate: 20 },
      { label: "Italy (22%)", rate: 22 },
      { label: "Spain (21%)", rate: 21 },
      { label: "Netherlands (21%)", rate: 21 },
      { label: "Reduced Food/Books (7%)", rate: 7 },
    ],
  },
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    taxName: "FTA VAT",
    currency: "AED",
    symbol: "AED ",
    rates: [
      { label: "Standard VAT (5%)", rate: 5 },
      { label: "Zero-Rated (0%)", rate: 0 },
    ],
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    taxName: "ZATCA VAT",
    currency: "SAR",
    symbol: "SAR ",
    rates: [
      { label: "Standard VAT (15%)", rate: 15 },
      { label: "Zero-Rated (0%)", rate: 0 },
    ],
  },
  {
    country: "India",
    flag: "🇮🇳",
    taxName: "GST Slabs",
    currency: "INR",
    symbol: "₹",
    rates: [
      { label: "Standard (18%)", rate: 18 },
      { label: "FMCG / Food (5%)", rate: 5 },
      { label: "Processed Goods (12%)", rate: 12 },
      { label: "Luxury / Auto (28%)", rate: 28 },
    ],
  },
];

export default function SalesTaxCalculator() {
  const amountInputId = useId();
  const customRateInputId = useId();
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);
  const [amount, setAmount] = useState<string>("1000");
  const [taxRate, setTaxRate] = useState<number>(7.25);
  const [isCustom, setIsCustom] = useState(false);
  const [customRate, setCustomRate] = useState<string>("8.5");
  const [calcMode, setCalcMode] = useState<"exclusive" | "inclusive">("exclusive");
  const [copied, setCopied] = useState(false);

  const country = TAX_PRESETS[selectedCountryIndex];
  const activeRate = isCustom ? parseFloat(customRate) || 0 : taxRate;
  const numAmount = parseFloat(amount) || 0;

  // Calculation Logic
  let netAmount = 0;
  let taxAmount = 0;
  let totalAmount = 0;

  if (calcMode === "exclusive") {
    // Adding Tax to Net Amount
    netAmount = numAmount;
    taxAmount = (numAmount * activeRate) / 100;
    totalAmount = netAmount + taxAmount;
  } else {
    // Reverse Tax: Removing Tax from Gross Amount
    totalAmount = numAmount;
    netAmount = numAmount / (1 + activeRate / 100);
    taxAmount = totalAmount - netAmount;
  }

  const handleCountryChange = (index: number) => {
    setSelectedCountryIndex(index);
    const newCountry = TAX_PRESETS[index];
    setTaxRate(newCountry.rates[0].rate);
    setIsCustom(false);
  };

  const handleCopySummary = () => {
    const text = `--- ${country.country} ${country.taxName} Calculation ---
Calculation Type: ${calcMode === "exclusive" ? "Exclusive (Added Tax)" : "Inclusive (Reverse Tax)"}
Tax Rate: ${activeRate}%
Net Amount: ${country.symbol}${netAmount.toFixed(2)}
${country.taxName} (${activeRate}%): ${country.symbol}${taxAmount.toFixed(2)}
Total Amount: ${country.symbol}${totalAmount.toFixed(2)}
Calculated on Vyop Free POS (https://vyop.in/tools/sales-tax-calculator)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden p-6 md:p-10">
        {/* Country Selector Pills */}
        <div className="mb-8">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-amber-600" /> Select Country &amp; Regional Tax System
          </label>
          <div className="flex flex-wrap gap-2">
            {TAX_PRESETS.map((preset, idx) => (
              <button
                key={preset.country}
                type="button"
                onClick={() => handleCountryChange(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  selectedCountryIndex === idx
                    ? "bg-gray-900 text-white border-gray-900 shadow-md scale-[1.02]"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200"
                }`}
              >
                <span>{preset.flag}</span>
                <span>{preset.country}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Calculation Mode Toggle */}
        <div className="grid grid-cols-2 gap-3 mb-8 bg-gray-100 p-1.5 rounded-2xl">
          <button
            type="button"
            onClick={() => setCalcMode("exclusive")}
            className={`py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              calcMode === "exclusive"
                ? "bg-white text-gray-900 shadow-md"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <DollarSign className="w-4 h-4 text-amber-600" />
            <span>Exclusive (Add Tax)</span>
          </button>
          <button
            type="button"
            onClick={() => setCalcMode("inclusive")}
            className={`py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              calcMode === "inclusive"
                ? "bg-white text-gray-900 shadow-md"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <Percent className="w-4 h-4 text-amber-600" />
            <span>Inclusive (Reverse Tax)</span>
          </button>
        </div>

        {/* Amount Input */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label htmlFor={amountInputId} className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
              {calcMode === "exclusive" ? "Net Amount (Pre-Tax)" : "Total Amount (Tax Included)"}
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg">
                {country.symbol}
              </span>
              <input
                id={amountInputId}
                type="number"
                min="0"
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1000"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold text-xl text-gray-900 bg-gray-50/50"
              />
            </div>
            <p className="text-[11px] text-gray-500 mt-1.5">
              Enter the transaction or product counter value in {country.currency}.
            </p>
          </div>

          {/* Tax Rates Buttons */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
              {country.taxName} Rate
            </label>
            <div className="flex flex-wrap gap-2">
              {country.rates.map((r) => (
                <button
                  key={r.label}
                  type="button"
                  onClick={() => {
                    setTaxRate(r.rate);
                    setIsCustom(false);
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                    !isCustom && taxRate === r.rate
                      ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200"
                  }`}
                >
                  {r.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setIsCustom(true)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                  isCustom
                    ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200"
                }`}
              >
                Custom %
              </button>
            </div>

            {isCustom && (
              <div className="mt-3 flex items-center gap-2">
                <input
                  id={customRateInputId}
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  value={customRate}
                  onChange={(e) => setCustomRate(e.target.value)}
                  placeholder="8.5"
                  className="w-24 px-3 py-1.5 rounded-xl border border-gray-300 font-bold text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <label htmlFor={customRateInputId} className="text-sm font-semibold text-gray-600">% Custom Tax Rate</label>
              </div>
            )}
          </div>
        </div>

        {/* Calculated Results Card */}
        <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                {country.flag} {country.country} • {country.taxName}
              </p>
              <h3 className="text-xl font-extrabold text-white">Calculation Breakdown</h3>
            </div>
            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-all text-white border border-white/10"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Breakdown"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Pre-Tax (Net)</p>
              <p className="text-2xl font-extrabold text-white">
                {country.symbol}
                {netAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <p className="text-xs text-amber-300 uppercase font-semibold mb-1">
                {country.taxName} ({activeRate}%)
              </p>
              <p className="text-2xl font-extrabold text-amber-400">
                {country.symbol}
                {taxAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Total (Gross)</p>
              <p className="text-2xl font-extrabold text-white">
                {country.symbol}
                {totalAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
            <span>
              Formula:{" "}
              {calcMode === "exclusive"
                ? `${country.symbol}${netAmount.toFixed(2)} + ${activeRate}% = ${country.symbol}${totalAmount.toFixed(2)}`
                : `${country.symbol}${totalAmount.toFixed(2)} ÷ (1 + ${activeRate / 100}) = ${country.symbol}${netAmount.toFixed(2)}`}
            </span>
            <span className="text-amber-300/80">Automate this on your counter POS with Vyop</span>
          </div>
        </div>
      </div>
    </div>
  );
}
