import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ComparisonDisclaimer from "@/components/legal/ComparisonDisclaimer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Vyop vs Zettle by PayPal: 0% Fee Mobile POS | Vyop",
  },
  description:
    "Compare Vyop vs Zettle by PayPal. Skip 1.75% card transaction cuts. Vyop offers phone camera barcode POS, VAT receipts & 0% fee online store starting free.",
  alternates: { canonical: "/vyop-vs-zettle" },
  openGraph: {
    title: "Vyop vs Zettle by PayPal: 0% Fee Mobile POS | Vyop",
    description: "Compare Vyop vs Zettle by PayPal. Stop paying 1.75% per transaction. Smartphone camera barcode scanning, thermal printing & multi-currency billing.",
    url: "https://vyop.in/vyop-vs-zettle",
    siteName: "Vyop POS",
  },
};

const comparison = [
  { feature: "Transaction Platform Fee", vyop: "0% Platform Fee (Direct Cash, UPI, Bank)", competitor: "1.75% per card transaction / 2.5% invoice fee", better: "vyop" },
  { feature: "Hardware Required", vyop: "₹0 (Your Own Smartphone or Laptop)", competitor: "Proprietary Zettle Reader 2 (£149+)", better: "vyop" },
  { feature: "Monthly Software Subscription", vyop: "Free to Start / Pro ₹49/mo (~£0.50) / ₹999/yr", competitor: "Free basic / £29/month Pro subscription", better: "vyop" },
  { feature: "Barcode Scanning Method", vyop: "Built-in Smartphone Camera Scanner", competitor: "Compatible with Handheld Scanner Accessories", better: "vyop" },
  { feature: "Voice AI Billing", vyop: "✅ Natural Spoken Billing (5-Second Checkout)", competitor: "❌ Not Supported", better: "vyop" },
  { feature: "Receipt Printing", vyop: "Standard ESC/POS Bluetooth Thermal Printers", competitor: "Zettle Terminal Printer or Dedicated Docks", better: "draw" },
  { feature: "Tax Invoices (VAT & Sales Tax)", vyop: "✅ Full HMRC 20% VAT, Reduced 5% & Zero-Rated", competitor: "Standard UK/EU VAT Tracking", better: "draw" },
  { feature: "Scan Unbarcoded Products (AI Vision)", vyop: "✅ Built-in AI Visual Item Recognition", competitor: "❌ Not Available", better: "vyop" },
  { feature: "0% Fee Online Storefront", vyop: "✅ Included with Direct Ordering", competitor: "Requires PayPal Integrations", better: "vyop" },
  { feature: "Offline Billing Support", vyop: "✅ 100% Offline (Auto-Sync to Cloud)", competitor: "Offline Card Payment Queue (With Limits)", better: "tie" },
  { feature: "Multi-Currency Support", vyop: "GBP (£), USD ($), EUR (€), AED, INR (₹)", competitor: "GBP, EUR, USD, SEK", better: "draw" },
  { feature: "Product Addition Methods", vyop: "10 Fast Ways (Barcode, Voice, AI Invoice, CSV)", competitor: "Manual Entry & Product Catalog Import", better: "vyop" },
];

const faqs = [
  {
    question: "How does Vyop save merchants money compared to Zettle?",
    answer: "Zettle takes 1.75% of every contactless card payment, which costs a small boutique or shop £350 to £1,000+ per year just in payment commissions, plus £149 for card reader hardware. Vyop charges 0% platform transaction fees on direct cash, bank QR, or integrated payments, runs on your existing smartphone without hardware purchases, and costs only ₹49/month (~£0.50/mo) for Pro cloud sync."
  },
  {
    question: "Do I need to buy a Zettle card reader to use Vyop?",
    answer: "No. Vyop is 100% hardware-agnostic. It runs on any Android phone, tablet, or web browser. Your smartphone camera acts as a laser-fast barcode scanner for all EAN and UPC retail barcodes."
  },
  {
    question: "Does Vyop support UK VAT receipts?",
    answer: "Yes! Vyop calculates 20% Standard UK VAT, 5% Reduced VAT, and 0% Zero-Rated food items. Receipts clearly display your VAT registration number, company name, itemized tax splits, and total in British Pounds (£)."
  },
  {
    question: "Can I use Vyop for outdoor street markets and pop-ups in the UK?",
    answer: "Absolutely. Vyop is built offline-first. You can ring up sales, scan items with your camera, and print receipts to portable battery-operated Bluetooth thermal printers even when there is no Wi-Fi or cellular signal."
  }
];

export default function VyopVsZettlePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4">
            Zero Transaction Fee Alternative
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Zettle by PayPal</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Stop giving away 1.75% of every sale to card processors.{" "}
            <strong className="text-gray-900">Vyop gives UK and international retailers smartphone barcode scanning, VAT receipts, and 0% platform fees.</strong>
          </p>
        </div>

        {/* Pricing Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Zettle by PayPal</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">1.75%<span className="text-sm font-normal text-gray-500"> per transaction</span></div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>❌ 1.75% processing deduction on every card payment</li>
              <li>❌ Requires purchasing proprietary Zettle Reader 2 (£149)</li>
              <li>❌ Optional £29/month Pro subscription tier</li>
              <li>❌ No Voice AI or camera barcode scanning</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-emerald-50 border-2 border-blue-500 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900">Vyop POS</h3>
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">0% Platform Cut</span>
            </div>
            <div className="text-3xl font-extrabold text-blue-800 mb-4">0% Platform Fee <span className="text-sm font-normal text-gray-600">/ Pro ₹49/mo (~£0.50)</span></div>
            <ul className="space-y-2 text-sm text-gray-700 font-medium">
              <li>✅ ₹0 hardware cost — your smartphone camera is the scanner</li>
              <li>✅ Keep 100% of your earnings on direct payments</li>
              <li>✅ HMRC 20% VAT compliant with custom tax brackets</li>
              <li>✅ Offline billing with Bluetooth thermal receipt printing</li>
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden mb-16">
          <div className="p-6 bg-slate-900 text-white">
            <h2 className="text-2xl font-bold">Feature-by-Feature Comparison</h2>
            <p className="text-sm text-slate-300">Compare Vyop and Zettle on fees, hardware requirements, and counter speed.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-gray-200 text-xs font-bold text-gray-700 uppercase">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4 text-blue-700">Vyop POS</th>
                  <th className="p-4 text-gray-500">Zettle by PayPal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="p-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="p-4 font-medium text-blue-800 bg-blue-50/30">{row.vyop}</td>
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
          <h2 className="text-3xl font-bold mb-4">Switch to Zero Platform Fee POS Today</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Experience laser-fast camera barcode scanning, Voice AI invoicing, and keep 100% of your earnings. Free to start.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://vyop.shop"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-400 transition-colors"
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
          <ComparisonDisclaimer competitorName="Zettle by PayPal" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
