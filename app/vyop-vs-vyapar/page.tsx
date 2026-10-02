import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Vyapar (2026 Comparison) | Best Billing & POS Software for PC & Mobile",
  description: "Comparing Vyop and Vyapar App. Vyop offers full Desktop PC counter billing (vyop.shop) + Android phone barcode machine, voice AI in Hindi, CA-grade GSTR-1/3B tax reports & 0% fee online store for ₹999/yr (vs Vyapar ₹3,999+).",
  alternates: { canonical: '/vyop-vs-vyapar' },
  openGraph: {
    title: "Vyop vs Vyapar | Smart Desktop & Mobile Billing Software Compared",
    description: "Full PC Counter (vyop.shop) + Phone Barcode Machine vs Traditional Desktop Software. Save 75% on licensing.",
    url: 'https://vyop.in/vyop-vs-vyapar',
  },
};

const comparisonData = [
  { feature: "Annual License Cost", vyop: "Free to Start / ₹999/yr Pro (Save 75%+)", vyapar: "₹3,999 – ₹5,999/year", better: "vyop" },
  { feature: "Desktop PC Setup", vyop: "Full Web App (vyop.shop) — Windows, Mac, ChromeOS", vyapar: "Windows .exe Installer Only", better: "vyop" },
  { feature: "Mobile & Counter Dual Sync", vyop: "Real-Time Cloud Sync (PC Counter ↔ Floor Phone)", vyapar: "Local DB with Cloud Sync Add-on", better: "vyop" },
  { feature: "Billing Speed & Input Method", vyop: "Under 1s Barcode Scan + Voice AI in Hindi/English", vyapar: "Manual Keyboard / Touch Typing", better: "vyop" },
  { feature: "Smartphone Camera Barcode POS", vyop: "Built-in Camera Scanner (<1s Scan, 30+/min)", vyapar: "Requires External ₹2,500 USB/BT Barcode Gun", better: "vyop" },
  { feature: "Voice AI Billing (Hindi & Hinglish)", vyop: "Speak to Bill in 5s ('Teen Maggi, do Chai')", vyapar: "Not Available", better: "vyop" },
  { feature: "CA-Grade GST Tax Reports", vyop: "GSTR-1, GSTR-3B, B2B/B2C, HSN Excel & JSON Export", vyapar: "GSTR-1, GSTR-3B Reports Supported", better: "draw" },
  { feature: "Financial Reports & P&L", vyop: "Live Profit & Loss, Category Margins & Daybook", vyapar: "Profit & Loss, Balance Sheet", better: "draw" },
  { feature: "Party Ledgers & WhatsApp Reminders", vyop: "Automatic WhatsApp Reminders with UPI Link", vyapar: "Manual WhatsApp Invoice Share", better: "vyop" },
  { feature: "Scan Unbarcoded Items (AI Vision)", vyop: "Snap Photo of Loose Item to Bill in 0.2s", vyapar: "Not Supported (Requires Manual Search)", better: "vyop" },
  { feature: "Ways to Add Products", vyop: "10 Instant Methods (AI, Voice, PDF, CSV, Barcode)", vyapar: "Manual Form Entry or Excel Sheet", better: "vyop" },
  { feature: "Live Online Customer Storefront", vyop: "0% Commission Web Store + Spin Wheel Rewards", vyapar: "Basic Catalog PDF Link Only", better: "vyop" },
  { feature: "100% Offline Mode", vyop: "Full Offline Billing + Auto Cloud Backup", vyapar: "Full Offline Billing Supported", better: "draw" },
];

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Head-to-Head Comparison (2026 Edition)
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Vyapar</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Vyapar pioneered desktop billing in India, but Vyop delivers the <strong>smartest cross-platform setup</strong>: full Desktop PC cashier counter at <strong className="text-gray-900">vyop.shop</strong> + smartphone barcode machine on the floor, powered by voice AI and CA-grade tax filing for 75% less.
          </p>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[var(--shadow-md)] border border-[var(--border-subtle)] overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="border-b-2 border-gray-100 bg-gray-50/50">
                <th className="py-4 px-4 text-base font-bold text-gray-700">Feature</th>
                <th className="py-4 px-4 text-base font-bold text-amber-700 bg-amber-50/60">Vyop (Smart POS)</th>
                <th className="py-4 px-4 text-base font-bold text-gray-600">Vyapar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-amber-50/30 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900">{row.feature}</td>
                  <td className={`py-4 px-4 font-bold ${row.better === "vyop" ? "text-emerald-700 bg-amber-50/20" : "text-gray-900"}`}>
                    {row.vyop}
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {row.vyapar}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Side-by-side Decision Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[var(--border-subtle)] shadow-sm">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
              When to Choose Vyapar?
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Vyapar is suitable if your counter staff is strictly accustomed to traditional Windows-based desktop accounting (.exe) and prefers manual keyboard data entry without barcode scanning or voice AI speed.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Requires local Windows PC installer</li>
              <li>• Traditional keyboard entry workflow</li>
              <li>• Costs ₹3,999 to ₹5,999 per year</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/60 p-8 rounded-3xl border-2 border-amber-300 shadow-md">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-amber-900" style={{ fontFamily: "var(--font-display)" }}>
              The Vyop Advantage (The Smarter Choice)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vyop gives you the complete hybrid ecosystem: run your main counter on any PC/Mac via <strong className="text-amber-950">vyop.shop</strong>, while floor staff turn smartphones into supermarket barcode scanners (<span className="font-semibold">&lt;1s scan speed</span>).
            </p>
            <ul className="text-sm text-gray-800 space-y-2">
              <li>• <strong>Full Desktop PC (vyop.shop) + Android Mobile Sync</strong></li>
              <li>• <strong>CA-Grade Tax Accounting:</strong> GSTR-1, GSTR-3B &amp; Live P&amp;L</li>
              <li>• <strong>Voice AI Billing:</strong> Create bills in 5 seconds in Hindi/English</li>
              <li>• <strong>0% Commission Online Store:</strong> Live WhatsApp ordering</li>
              <li>• <strong>Only ₹999/year Pro:</strong> Save over ₹3,000 to ₹5,000 every year</li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Upgrade to the Smartest POS &amp; Accounting System
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Experience lightning-fast counter checkout on desktop and mobile barcode scanning with zero hardware lock-in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition-all shadow-md"
            >
              Download Free Android App
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black text-white font-bold text-lg hover:bg-gray-900 transition-all"
            >
              Launch Desktop POS (vyop.shop)
            </a>
          </div>
        </div>
      </section>

      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can I use Vyop on a Desktop PC like Vyapar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Vyop provides a full-featured Desktop web app at vyop.shop that runs on Windows, Mac, Linux, and Chromebooks without downloading any heavy .exe files. All counter sales sync in real-time with the Vyop Android mobile app."
                }
              },
              {
                "@type": "Question",
                "name": "Does Vyop support CA tax reporting and GST like Vyapar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Vyop fully supports CA-grade GST accounting, including one-click GSTR-1, GSTR-3B export (JSON & Excel), HSN summaries, Profit & Loss (P&L) statements, and party ledgers with automated WhatsApp payment reminder links."
                }
              },
              {
                "@type": "Question",
                "name": "Why is Vyop faster than Vyapar for shop billing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vyop turns any smartphone camera into a barcode scanner that scans items in under 1 second (30+ items per minute) without buying an external barcode gun. It also supports voice AI billing in Hindi and English, creating GST bills in 5 seconds by simply speaking."
                }
              },
              {
                "@type": "Question",
                "name": "How does Vyop pricing compare to Vyapar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vyop is free to download and start, with full cloud sync Pro available at just ₹999/year. Vyapar starts around ₹3,999 to ₹5,999 per year, meaning Vyop saves Indian shopkeepers 75% or more every year."
                }
              }
            ]
          })
        }}
      />

      <Footer />
    </main>
  );
}
