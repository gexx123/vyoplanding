import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ComparisonDisclaimer from "@/components/legal/ComparisonDisclaimer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Vyop vs Lightspeed POS: Affordable Mobile POS | Vyop",
  },
  description:
    "Compare Vyop vs Lightspeed POS. Save $1,000+/yr in software fees. Vyop provides smartphone camera barcode POS, Voice AI & 0% online store starting free.",
  alternates: { canonical: "/vyop-vs-lightspeed" },
  openGraph: {
    title: "Vyop vs Lightspeed POS: Affordable Mobile POS | Vyop",
    description: "Compare Vyop vs Lightspeed POS. Save over $1,000/yr on retail POS software. Zero hardware fees and smartphone camera barcode scanning.",
    url: "https://vyop.in/vyop-vs-lightspeed",
    siteName: "Vyop POS",
  },
};

const comparison = [
  { feature: "Base Software Subscription", vyop: "Free to Start / ₹49/mo ($1/mo) / ₹999/yr Pro", competitor: "$89 – $289 / month ($1,068 – $3,468/yr)", better: "vyop" },
  { feature: "Hardware Requirements", vyop: "₹0 (Any Android Phone, Tablet or Laptop)", competitor: "Dedicated iPad ($400+) + Scanner Gun + Stand", better: "vyop" },
  { feature: "Primary Barcode Workflow", vyop: "High-Speed Phone Camera Barcode Scanner", competitor: "External Bluetooth/USB Barcode Gun", better: "vyop" },
  { feature: "Voice AI Invoicing", vyop: "✅ Natural Spoken Billing (Hindi & English)", competitor: "❌ Not Available (Touch Screen Manual Only)", better: "vyop" },
  { feature: "Scan Unbarcoded Products (AI Vision)", vyop: "✅ Built-in AI Visual Recognition", competitor: "❌ Not Supported", better: "vyop" },
  { feature: "Annual Total Cost", vyop: "₹0 Free / ₹999/yr Pro ($12/yr)", competitor: "$1,500 – $4,000+ per year", better: "vyop" },
  { feature: "Online Storefront", vyop: "✅ 0% Commission Direct Web Store", competitor: "Lightspeed eCommerce (Higher Tier Add-on)", better: "vyop" },
  { feature: "Offline Billing Support", vyop: "✅ 100% Offline (Auto-Sync to Cloud)", competitor: "Basic Offline Mode (Limited Features)", better: "vyop" },
  { feature: "Multi-Currency & Tax", vyop: "USD, GBP, EUR, CAD, AUD, AED, INR", competitor: "USD, CAD, GBP, EUR, AUD", better: "draw" },
  { feature: "Mobile Companion App", vyop: "Full Mobile POS Terminal in Pocket", competitor: "Back-office Reporting App", better: "vyop" },
  { feature: "Ways to Add Inventory Items", vyop: "10 Fast Ways (Barcode, Voice, AI Invoice, CSV)", competitor: "Manual Entry & CSV Import", better: "vyop" },
  { feature: "Setup & Onboarding Time", vyop: "Under 60 Seconds (Self-Serve)", competitor: "Assisted Setup / Several Days", better: "vyop" },
];

const faqs = [
  {
    question: "Why is Lightspeed POS so expensive compared to Vyop?",
    answer: "Lightspeed is enterprise software built for larger retail chains and department stores, charging between $89 and $289 per month plus transaction processing cuts and expensive iPad hardware. Vyop is built for independent retail shopkeepers, boutiques, and grocers who need mall-grade barcode scanning and fast billing without paying $1,000+ every year."
  },
  {
    question: "Do I need to buy an iPad to run Vyop like Lightspeed requires?",
    answer: "No. Lightspeed POS typically requires an iPad or dedicated touchscreen computer. Vyop runs directly on any standard Android smartphone, tablet, or web browser (vyop.shop). Your smartphone camera acts as your supermarket-grade barcode scanner with zero hardware investment."
  },
  {
    question: "Can Vyop handle inventory variants like clothing sizes and colors?",
    answer: "Yes! Vyop includes full size, color, and variant matrix management, custom barcode sticker generation and printing, low-stock alerts, and category margins — matching key Lightspeed inventory features starting free."
  },
  {
    question: "How does Vyop's pricing compare to Lightspeed?",
    answer: "Vyop is 100% free to start for local billing, barcode scanning, and store cataloging. For multi-device cloud synchronization and desktop PC counter access, Vyop Pro is only ₹49/month ($1/month) or ₹999/year ($12/year) — saving merchants over 98% compared to Lightspeed's $1,068+/year baseline."
  }
];

export default function VyopVsLightspeedPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4">
            Affordable Retail POS Alternative
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Lightspeed POS</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Why spend $1,000+ every year on expensive subscriptions and iPad terminals?{" "}
            <strong className="text-gray-900">Vyop turns any smartphone into an AI barcode POS with 0% platform fees — free to start, Pro from ₹49/mo ($1/mo).</strong>
          </p>
        </div>

        {/* Pricing Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Lightspeed POS</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">$89 – $289<span className="text-sm font-normal text-gray-500"> / month</span></div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>❌ $1,068 – $3,468/year minimum software subscription</li>
              <li>❌ Requires iPad hardware ($400+) & barcode scanner gun</li>
              <li>❌ No Voice AI billing capabilities</li>
              <li>❌ Steep learning curve and complex enterprise configuration</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-amber-50 border-2 border-emerald-500 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900">Vyop POS</h3>
              <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">Save 98%</span>
            </div>
            <div className="text-3xl font-extrabold text-emerald-700 mb-4">Free to Start <span className="text-sm font-normal text-gray-600">/ Pro ₹49/mo ($1/mo)</span></div>
            <ul className="space-y-2 text-sm text-gray-700 font-medium">
              <li>✅ ₹0 hardware cost — turns your existing phone into a barcode scanner</li>
              <li>✅ Voice AI billing in Hindi & English (5-second checkout)</li>
              <li>✅ Full variant matrix, inventory tracking & thermal printing</li>
              <li>✅ 0% commission online store & multi-device cloud sync</li>
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden mb-16">
          <div className="p-6 bg-slate-900 text-white">
            <h2 className="text-2xl font-bold">Feature-by-Feature Comparison</h2>
            <p className="text-sm text-slate-300">See how Vyop delivers modern retail POS tools without enterprise pricing.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-gray-200 text-xs font-bold text-gray-700 uppercase">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4 text-emerald-700">Vyop POS</th>
                  <th className="p-4 text-gray-500">Lightspeed POS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="p-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="p-4 font-medium text-emerald-800 bg-emerald-50/30">{row.vyop}</td>
                    <td className="p-4 text-gray-600">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-10 rounded-3xl bg-slate-900 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Start Billing in 60 Seconds with Zero Hardware</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Join thousands of smart retailers worldwide who switched to Vyop. Turn your smartphone camera into a supermarket barcode scanner today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://vyop.shop"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
            >
              Try Web Counter Free (vyop.shop)
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-colors"
            >
              Download Android App
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <ComparisonDisclaimer competitorName="Lightspeed POS" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
