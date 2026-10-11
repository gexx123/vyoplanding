import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ComparisonDisclaimer from "@/components/legal/ComparisonDisclaimer";
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
  { feature: "Pricing & Plans", vyop: "Free to Start / ₹999/yr Pro", vyapar: "Free Basic Mobile / ₹3,399–₹3,999/yr Desktop Plan", better: "vyop" },
  { feature: "Desktop Access", vyop: "Zero-Install Web App (vyop.shop) — Any Browser", vyapar: "Installed Native Application (Windows / Mac)", better: "vyop" },
  { feature: "Cloud Synchronization", vyop: "Real-Time Cloud Sync (Mobile & Web Counter)", vyapar: "Multi-Device Cloud Sync Plan", better: "draw" },
  { feature: "Voice AI Billing (Hindi & Hinglish)", vyop: "Speak to Bill with Voice AI ('Teen Maggi, do Chai')", vyapar: "Not Available", better: "vyop" },
  { feature: "Primary Barcode Workflow", vyop: "Optimized Smartphone Camera Scanner", vyapar: "Phone Camera & External USB/BT Scanner Gun", better: "vyop" },
  { feature: "CA-Grade GST Tax Reports", vyop: "GSTR-1, GSTR-3B, B2B/B2C, HSN Excel & JSON Export", vyapar: "GSTR-1, GSTR-3B Reports Supported", better: "draw" },
  { feature: "Financial Reports & P&L", vyop: "Live Profit & Loss, Category Margins & Daybook", vyapar: "Profit & Loss, Balance Sheet", better: "draw" },
  { feature: "Party Ledgers & WhatsApp Reminders", vyop: "Automated WhatsApp Reminders with UPI Link", vyapar: "WhatsApp Invoice & Payment Reminders", better: "draw" },
  { feature: "Scan Unbarcoded Items (AI Vision)", vyop: "Built-in AI Visual Item Recognition", vyapar: "Not Supported", better: "vyop" },
  { feature: "Product Catalog Addition", vyop: "Voice, Barcode, CSV, AI Photo & Manual", vyapar: "Excel Import, Barcode & Manual Form Entry", better: "vyop" },
  { feature: "Customer Online Storefront", vyop: "0% Commission Web Store + Spin Wheel Rewards", vyapar: "Online Storefront Feature (myvyapar.shop)", better: "draw" },
  { feature: "100% Offline Mode", vyop: "Full Offline Billing + Auto Cloud Backup (Pro)", vyapar: "Full Offline Billing Supported", better: "draw" },
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
            Compare key features, architecture, and workflows between Vyop and Vyapar to choose the best solution for your business.
          </p>
        </div>

        {/* Brand Disambiguation Notice */}
        <div className="mb-10 bg-amber-50/80 border border-amber-200/90 rounded-2xl p-4 md:p-5 flex items-start gap-3.5 text-xs md:text-sm text-amber-950 shadow-sm">
          <span className="text-xl flex-shrink-0">ℹ️</span>
          <div>
            <strong className="font-bold text-amber-900">Brand Clarification:</strong>{" "}
            <strong>Vyop</strong> is an independent AI-first POS and smart voice billing software platform developed by <strong>Vyop Technologies</strong>. Vyop is completely distinct from, unaffiliated with, and not sponsored by Simply Vyapar Apps Pvt. Ltd. (makers of Vyapar App). All comparative data is based on publicly available documentation and published pricing as of October 2026 for fair consumer information.
          </div>
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
              Vyapar is an established solution if your business prefers installed native desktop software and comprehensive offline SME bookkeeping across desktop and mobile.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Native desktop installer &amp; mobile app ecosystem</li>
              <li>• Comprehensive SME bookkeeping &amp; GST ledger management</li>
              <li>• Desktop plans starting from ₹3,399/year</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/60 p-8 rounded-3xl border-2 border-amber-300 shadow-md">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-amber-900" style={{ fontFamily: "var(--font-display)" }}>
              The Vyop Advantage (The Smarter Choice)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vyop gives you the complete hybrid ecosystem: run your main counter on any PC/Mac via <strong className="text-amber-950">vyop.shop</strong>, while floor staff turn smartphones into supermarket barcode scanners.
            </p>
            <ul className="text-sm text-gray-800 space-y-2">
              <li>• <strong>Full Desktop PC (vyop.shop) + Android Mobile Sync</strong></li>
              <li>• <strong>CA-Grade Tax Accounting:</strong> GSTR-1, GSTR-3B &amp; Live P&amp;L</li>
              <li>• <strong>Voice AI Billing:</strong> Create bills instantly in Hindi &amp; English</li>
              <li>• <strong>0% Commission Online Store:</strong> Live WhatsApp ordering</li>
              <li>• <strong>Only ₹999/year Pro:</strong> Save over ₹2,000 to ₹4,000 every year</li>
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

        {/* Legal Disclaimer */}
        <ComparisonDisclaimer
          competitorName="Vyapar"
          companyName="Simply Vyapar Apps Pvt. Ltd."
          lastUpdated="October 2026"
        />
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
                "name": "Is Vyop the same as or affiliated with Vyapar App?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Vyop is an independent AI-first POS and smart voice billing software platform developed by Vyop Technologies. It is completely independent and unaffiliated with Vyapar App (Simply Vyapar Apps Pvt. Ltd.)."
                }
              },
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
                  "text": "Vyop turns any smartphone camera into a fast barcode scanner without requiring external hardware guns. It also supports voice AI billing in Hindi and English, creating GST bills quickly by simply speaking."
                }
              },
              {
                "@type": "Question",
                "name": "How does Vyop pricing compare to Vyapar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vyop is free to download and start, with full cloud sync Pro available at just ₹999/year. Vyapar desktop plans start around ₹3,399 to ₹3,999 per year, meaning Vyop saves Indian shopkeepers significant software overhead every year."
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
