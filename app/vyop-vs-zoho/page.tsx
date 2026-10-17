import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ComparisonDisclaimer from "@/components/legal/ComparisonDisclaimer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Vyop vs Zoho Books: Free Retail POS Alternative | Vyop",
  },
  description:
    "Compare Vyop vs Zoho Books. Zoho is built for B2B desk accounting. Vyop provides fast retail counter POS with Voice AI & smartphone barcode scanner for ₹999/yr.",
  alternates: { canonical: "/vyop-vs-zoho" },
  openGraph: {
    title: "Vyop vs Zoho Books: Free Retail POS Alternative | Vyop",
    description: "Why retail shopkeepers choose Vyop over Zoho: retail counter speed, smartphone barcode scanner, Hindi voice billing, and lowest ₹999/yr pricing (under ₹3/day).",
    url: "https://vyop.in/vyop-vs-zoho",
    siteName: "Vyop POS",
  },
};

const comparison = [
  { feature: "Base Price", vyop: "Free to Start / ₹999/yr Pro", competitor: "Free Tier (<₹25L) / Paid from ₹8,988/yr", better: "vyop" },
  { feature: "Primary Use Case", vyop: "High-Speed Retail Counter Checkout", competitor: "B2B Accounting & Financial Reporting", better: "draw" },
  { feature: "Smartphone Camera Barcode Scanner", vyop: "✅ Built-in Phone Camera Barcode Scanner", competitor: "Mobile App Scan & External Scanner Hardware", better: "draw" },
  { feature: "Scan Unbarcoded Products (AI Vision)", vyop: "✅ Built-in AI Visual Item Recognition", competitor: "Not Supported", better: "vyop" },
  { feature: "Voice AI Billing (Hindi/English)", vyop: "✅ Natural Speech-to-Bill in Hindi & English", competitor: "Not Supported", better: "vyop" },
  { feature: "Offline Billing (No Internet)", vyop: "✅ 100% Offline with Auto Cloud Sync (Pro)", competitor: "Cloud-First Architecture", better: "vyop" },
  { feature: "Indian GST & Dynamic UPI QR", vyop: "✅ Auto CGST/SGST + Instant UPI QR", competitor: "✅ Comprehensive GST Invoicing & Filing", better: "draw" },
  { feature: "Ways to Add Inventory Items", vyop: "Voice, Camera Barcode, CSV, AI Snap & Manual", competitor: "Bulk CSV Upload & Item Master Form", better: "vyop" },
  { feature: "Bluetooth Thermal Receipt Printer", vyop: "✅ Wireless 2-inch & 3-inch Thermal Support", competitor: "Standard Document & Thermal Templates", better: "draw" },
  { feature: "Online Storefront for Customers", vyop: "✅ 0% Commission Web Store + WhatsApp Orders", competitor: "Available via Zoho Commerce Ecosystem", better: "draw" },
  { feature: "Customer Ledger / Khata", vyop: "✅ Automated WhatsApp Reminders & UPI Link", competitor: "Comprehensive Accounts Receivable Management", better: "draw" },
  { feature: "Voice Accounting Language", vyop: "Hindi, Hinglish, English", competitor: "Text-Based Interface (Multilingual)", better: "vyop" },
  { feature: "Target Market", vyop: "Retail Counters, Kirana & Local Shops", competitor: "SME, Agencies & Corporate Enterprises", better: "draw" },
];

const faqs = [
  { question: "Why is Vyop better than Zoho Books for retail shopkeepers?", answer: "Zoho Books is designed for corporate desk accounting, B2B invoicing, and service agencies. It is too slow and complicated for a busy retail counter. Vyop is built for fast retail queues: you can scan barcodes using your phone camera, speak bills in Hindi or English, and print thermal receipts directly." },
  { question: "Can Zoho Books work without internet at my shop?", answer: "No. Zoho Books is entirely cloud-based and requires a steady internet connection to create invoices. Vyop functions 100% offline, allowing you to bill customers even during internet cuts or power outages, automatically syncing when reconnected." },
  { question: "How does Zoho's offering compare to Vyop?", answer: "Zoho Invoice is free for basic service invoicing, but is tailored for desk-based billing rather than front-counter supermarket or retail speed. Zoho Books requires paid annual subscriptions (from ₹8,988/yr) for commercial bookkeeping. Vyop is built specifically for physical retail counters starting free offline, with complete Pro cloud sync at just ₹999/year (less than ₹2.7/day)." },
  { question: "Does Zoho Books support Hindi voice AI billing?", answer: "No. Zoho does not have voice billing technology. Vyop features a built-in Voice AI Orb that understands natural spoken Hindi, Hinglish, and English (e.g., 'Do jeans aur teen t-shirt'), calculating taxes and generating the bill automatically." },
];

export default function VyopVsZohoPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Zoho Alternative for Retail
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Zoho Books & Invoice</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Zoho is built for corporate B2B desks, not fast retail counters.{" "}
            <strong className="text-gray-900">Vyop gives retail shopkeepers rapid counter billing, smartphone camera barcode scanning, and Hindi voice AI — starting free with ₹999/yr Pro cloud sync.</strong>
          </p>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Zoho Books</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">₹8,999+/yr (Paid Tier)</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Designed for B2B service firms and desk accountants. Slow multi-click invoicing forms, requires constant internet connection, no camera POS barcode scanner, English-only interface.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">Lowest in India</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Built for retail queues. Camera barcode POS, Hindi voice billing, 100% offline mode, 2-inch/3-inch thermal printing, and 0% commission online customer storefront.
            </p>
          </div>
        </div>

        {/* Detailed Feature Comparison Table */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 overflow-hidden mb-16">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">Detailed Feature-by-Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-5 px-4 text-base font-bold">Feature</th>
                  <th className="py-5 px-4 text-base font-bold text-amber-600">Vyop POS</th>
                  <th className="py-5 px-4 text-base font-bold text-gray-500">Zoho Books</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-5 px-4 font-semibold text-gray-900 text-sm">{row.feature}</td>
                    <td className="py-5 px-4 text-sm font-bold text-emerald-700">{row.vyop}</td>
                    <td className="py-5 px-4 text-gray-600 text-sm">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-6 text-center">
            * Comparative analysis based on publicly available documentation as of October 2026. Zoho and Zoho Books are registered trademarks of Zoho Corporation Pvt. Ltd.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Frequently Asked Questions: Vyop vs Zoho
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-12 rounded-3xl bg-amber-50 border border-amber-200">
          <h2 className="text-3xl font-extrabold mb-4 font-display">Experience Speed at Your Retail Counter</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Upgrade your retail shop to fast smartphone camera scanning and voice billing — free to start with ₹999/yr Pro cloud sync.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-600 text-white font-bold text-base hover:bg-amber-700 transition-colors shadow-lg"
          >
            Download Vyop Free on Google Play →
          </a>
        </div>

        {/* Legal Disclaimer */}
        <ComparisonDisclaimer
          competitorName="Zoho Books"
          companyName="Zoho Corporation"
          lastUpdated="October 2026"
        />
      </section>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      <Footer />
    </main>
  );
}
