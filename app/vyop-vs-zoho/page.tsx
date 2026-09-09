import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Zoho Books & Invoice | Best Free Retail POS Alternative in India",
  description:
    "Compare Vyop vs Zoho Books & Invoice. Zoho is built for B2B desk accounting and lacks camera barcode POS, Hindi voice billing, and counter speed. Vyop is 100% free with Voice AI and 10 ways to add items.",
  alternates: { canonical: "/vyop-vs-zoho" },
  openGraph: {
    title: "Vyop vs Zoho Books | Free Retail POS Alternative",
    description: "Why retail shopkeepers choose Vyop over Zoho: retail counter speed, smartphone barcode scanner, Hindi voice billing, and ₹0 lifetime pricing.",
    url: "https://vyop.in/vyop-vs-zoho",
  },
};

const comparison = [
  { feature: "Base Price", vyop: "₹0 (100% Free Forever)", competitor: "Free tier limited / ₹8,999+ per year", better: "vyop" },
  { feature: "Retail Counter Speed", vyop: "⚡ 5-Second Checkout", competitor: "Slow Desk Form Filling", better: "vyop" },
  { feature: "Smartphone Camera Barcode Scanner", vyop: "✅ Built-in (Scan with Camera)", competitor: "❌ Not Available for Retail Counter", better: "vyop" },
  { feature: "Voice AI Billing (Hindi/English)", vyop: "✅ Natural Voice Recognition", competitor: "❌ Not Available", better: "vyop" },
  { feature: "Offline Billing (No Internet)", vyop: "✅ Works 100% Offline", competitor: "❌ Requires Active Internet Connection", better: "vyop" },
  { feature: "Indian GST & Dynamic UPI QR", vyop: "✅ Auto CGST/SGST + UPI QR on Bills", competitor: "✅ GST Invoices (Payment Gateway fee extra)", better: "vyop" },
  { feature: "Ways to Add Inventory Items", vyop: "10 Instant Methods (Voice, Camera, etc.)", competitor: "1 Manual Web Form", better: "vyop" },
  { feature: "Bluetooth Thermal Receipt Printer", vyop: "✅ 2-inch & 3-inch Wireless Support", competitor: "A4 / Letter Size Desktop Printing", better: "vyop" },
  { feature: "Online Storefront for Customers", vyop: "✅ 0% Commission Store + Spin Wheel", competitor: "❌ Requires Paid Zoho Commerce ($24/mo+)", better: "vyop" },
  { feature: "Digital Udhar / Khata Book", vyop: "✅ WhatsApp Reminders & UPI Collection", competitor: "Standard Accounts Receivable Report", better: "vyop" },
  { feature: "Language Support", vyop: "Hindi, Hinglish, English", competitor: "English Only", better: "vyop" },
  { feature: "Designed Specifically For", vyop: "Indian Retail Shops & Counters", competitor: "B2B Companies, Agencies & Consultants", better: "vyop" },
];

const faqs = [
  { question: "Why is Vyop better than Zoho Books for retail shopkeepers?", answer: "Zoho Books is designed for corporate desk accounting, B2B invoicing, and service agencies. It is too slow and complicated for a busy retail counter. Vyop is built for fast retail queues: you can scan barcodes using your phone camera, speak bills in Hindi or English, and print thermal receipts in 5 seconds." },
  { question: "Can Zoho Books work without internet at my shop?", answer: "No. Zoho Books is entirely cloud-based and requires a steady internet connection to create invoices. Vyop functions 100% offline, allowing you to bill customers even during internet cuts or power outages, automatically syncing when reconnected." },
  { question: "Is Zoho Invoice really free?", answer: "Zoho Invoice offers a free tier, but it has strict limits on client portals, lacks retail barcode scanning, doesn't support thermal receipt printers, and requires Zoho's paid ecosystem (Zoho Commerce, Zoho Inventory, Zoho Books) as soon as your business scales. Vyop is 100% free with all retail POS features included forever." },
  { question: "Does Zoho Books support Hindi voice AI billing?", answer: "No. Zoho does not have voice billing technology. Vyop features India's first Voice AI Orb that understands natural spoken Hindi and English (e.g., 'Do jeans aur teen t-shirt'), calculating taxes and generating the bill automatically." },
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
            <strong className="text-gray-900">Vyop gives retail shopkeepers 5-second counter billing, smartphone camera barcode scanning, and Hindi voice AI — 100% free.</strong>
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
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">100% Free Forever</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">₹0 / Lifetime</div>
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
            Upgrade your retail shop to fast smartphone camera scanning and voice billing for ₹0.
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
