"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

interface Denomination {
  value: number;
  label: string;
  isCoin?: boolean;
}

const DENOMINATIONS: Denomination[] = [
  { value: 500, label: "₹500" },
  { value: 200, label: "₹200" },
  { value: 100, label: "₹100" },
  { value: 50, label: "₹50" },
  { value: 20, label: "₹20" },
  { value: 10, label: "₹10" },
  { value: 5, label: "₹5 (Coin/Note)", isCoin: true },
  { value: 2, label: "₹2 (Coin)", isCoin: true },
  { value: 1, label: "₹1 (Coin)", isCoin: true },
];

function numberToIndianWords(num: number): string {
  if (num === 0) return "Zero Rupees Only";

  const a = [
    "", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ",
    "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ", "Seventeen ", "Eighteen ", "Nineteen ",
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const formatTens = (n: number) => {
    if (n < 20) return a[n];
    return b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : " ");
  };

  let str = "";
  const crore = Math.floor(num / 10000000);
  num %= 10000000;
  const lakh = Math.floor(num / 100000);
  num %= 100000;
  const thousand = Math.floor(num / 1000);
  num %= 1000;
  const hundred = Math.floor(num / 100);
  num %= 100;

  if (crore > 0) str += formatTens(crore) + "Crore ";
  if (lakh > 0) str += formatTens(lakh) + "Lakh ";
  if (thousand > 0) str += formatTens(thousand) + "Thousand ";
  if (hundred > 0) str += formatTens(hundred) + "Hundred ";
  if (num > 0) str += formatTens(num);

  return str.trim() + " Rupees Only";
}

export default function CashCounterPage() {
  const [counts, setCounts] = useState<Record<number, number>>({
    500: 0,
    200: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  });

  const [openingFloat, setOpeningFloat] = useState<number>(0);
  const [shopName, setShopName] = useState<string>("My Retail Shop");
  const [cashierName, setCashierName] = useState<string>("Counter 1");
  const [copied, setCopied] = useState<boolean>(false);

  const updateCount = (val: number, count: number) => {
    setCounts((prev) => ({
      ...prev,
      [val]: Math.max(0, count || 0),
    }));
  };

  const addQuick = (val: number, delta: number) => {
    setCounts((prev) => ({
      ...prev,
      [val]: Math.max(0, (prev[val] || 0) + delta),
    }));
  };

  const resetAll = () => {
    setCounts({ 500: 0, 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 });
    setOpeningFloat(0);
  };

  const totalNotes = Object.values(counts).reduce((acc, c) => acc + c, 0);
  const totalCash = Object.entries(counts).reduce((acc, [val, count]) => acc + Number(val) * count, 0);
  const netDailySales = Math.max(0, totalCash - openingFloat);
  const words = numberToIndianWords(totalCash);

  const handleCopyWhatsApp = () => {
    const text = `💰 *DAILY CASH CLOSING REPORT*
🏢 Store: *${shopName}*
👤 Cashier: ${cashierName}
📅 Date: ${new Date().toLocaleDateString("en-IN", { dateStyle: "long" })}

*Denomination Breakdown:*
${DENOMINATIONS.filter((d) => counts[d.value] > 0)
  .map((d) => `${d.label} x ${counts[d.value]} = ₹${d.value * counts[d.value]}`)
  .join("\n")}

----------------------------
Total Notes/Coins: ${totalNotes}
*Total Cash in Drawer: ₹${totalCash.toLocaleString("en-IN")}*
${openingFloat > 0 ? `Opening Float Deducted: -₹${openingFloat.toLocaleString("en-IN")}\n*Net Day Sales: ₹${netDailySales.toLocaleString("en-IN")}*` : ""}
In Words: ${words}
----------------------------`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <div className="no-print">
        <Navbar />
      </div>

      <section className="pt-36 pb-20 px-4 md:px-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 no-print">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>💵</span> Daily Cash Tally Tool
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display mb-4 text-gray-900">
            Cash Denomination <span className="gradient-text">Counter & Tally</span>
          </h1>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Count cash drawer currency at store closing. Calculate total notes, coins, bank deposit slip, and share closing cash report on WhatsApp.
          </p>
        </div>

        {/* Cash Counter Container */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-200 mb-10 print:border-none print:shadow-none print:p-0">
          {/* Shop Meta Header */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 mb-6 border-b border-gray-100">
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Store / Shop Name</label>
              <input
                type="text"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                className="w-full font-bold text-gray-900 border-b border-dashed border-gray-300 focus:outline-none focus:border-amber-500 py-1 text-sm"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Cashier / Counter</label>
              <input
                type="text"
                value={cashierName}
                onChange={(e) => setCashierName(e.target.value)}
                className="w-full font-bold text-gray-900 border-b border-dashed border-gray-300 focus:outline-none focus:border-amber-500 py-1 text-sm"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Opening Cash Float (Petty Cash)</label>
              <div className="relative">
                <span className="absolute left-2 top-1 text-xs text-gray-400 font-bold">₹</span>
                <input
                  type="number"
                  min="0"
                  value={openingFloat || ""}
                  onChange={(e) => setOpeningFloat(Number(e.target.value))}
                  placeholder="0"
                  className="w-full pl-6 font-bold text-gray-900 border-b border-dashed border-gray-300 focus:outline-none focus:border-amber-500 py-1 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Denominations List */}
          <div className="space-y-3 mb-8">
            {DENOMINATIONS.map((denom) => {
              const count = counts[denom.value] || 0;
              const subtotal = count * denom.value;

              return (
                <div
                  key={denom.value}
                  className={`flex items-center justify-between p-3 md:p-4 rounded-2xl border transition-all ${
                    count > 0 ? "bg-amber-50/40 border-amber-300" : "bg-gray-50/50 border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3 w-28 md:w-36">
                    <span
                      className={`inline-block px-3 py-1.5 rounded-xl font-bold font-mono text-sm ${
                        denom.value >= 200
                          ? "bg-amber-500 text-white"
                          : denom.value >= 50
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-700 text-white"
                      }`}
                    >
                      {denom.label}
                    </span>
                  </div>

                  {/* Quantity Input */}
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold text-xs">x</span>
                    <input
                      type="number"
                      min="0"
                      value={count || ""}
                      onChange={(e) => updateCount(denom.value, Number(e.target.value))}
                      placeholder="0"
                      className="w-20 md:w-24 text-center font-bold text-base text-gray-900 bg-white border border-gray-300 rounded-xl py-1.5 px-2 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                    />
                  </div>

                  {/* Quick Increment Buttons (Hidden on Print) */}
                  <div className="hidden sm:flex items-center gap-1 no-print">
                    <button
                      onClick={() => addQuick(denom.value, 1)}
                      className="px-2 py-1 text-xs font-bold rounded-lg bg-gray-200 text-gray-700 hover:bg-amber-500 hover:text-white transition-colors"
                    >
                      +1
                    </button>
                    <button
                      onClick={() => addQuick(denom.value, 5)}
                      className="px-2 py-1 text-xs font-bold rounded-lg bg-gray-200 text-gray-700 hover:bg-amber-500 hover:text-white transition-colors"
                    >
                      +5
                    </button>
                    <button
                      onClick={() => addQuick(denom.value, 10)}
                      className="px-2 py-1 text-xs font-bold rounded-lg bg-gray-200 text-gray-700 hover:bg-amber-500 hover:text-white transition-colors"
                    >
                      +10
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="w-28 text-right font-mono font-bold text-gray-900 text-base">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grand Total Summary Box */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-3xl p-6 md:p-8 shadow-md mb-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pb-4 border-b border-white/20">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">
                  Total Cash in Drawer
                </span>
                <div className="text-4xl md:text-5xl font-extrabold font-mono">
                  ₹{totalCash.toLocaleString("en-IN")}
                </div>
              </div>
              <div className="md:text-right">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1">
                  Total Note / Coin Pieces
                </span>
                <span className="text-3xl font-bold font-mono">{totalNotes}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col md:flex-row justify-between gap-2 text-sm text-white/90">
              <div>
                <span className="font-bold">In Words: </span>
                <span className="italic">{words}</span>
              </div>
              {openingFloat > 0 && (
                <div className="md:text-right">
                  <span>Net Day Sales (Minus Float): </span>
                  <strong className="text-white text-base">₹{netDailySales.toLocaleString("en-IN")}</strong>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 no-print">
            <button
              onClick={resetAll}
              className="px-4 py-2.5 rounded-xl text-xs font-bold border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
            >
              🔄 Clear All Values
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <span>💬</span> {copied ? "Copied to WhatsApp!" : "Share Closing on WhatsApp"}
              </button>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gray-900 text-white hover:bg-black transition-colors shadow-sm"
              >
                <span>🖨️</span> Print Tally Slip
              </button>
            </div>
          </div>
        </div>

        {/* CTA to Vyop POS */}
        <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-md text-center no-print">
          <h2 className="text-2xl font-bold mb-3 font-display text-gray-900">
            Never Count Cash Manually Again!
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
            Vyop POS automatically reconciles cash payments, UPI QR transactions, customer udhar (credit), and card payments on your phone with zero manual ledger math. 100% Free Forever.
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

      <div className="no-print">
        <Footer />
      </div>
    </main>
  );
}
