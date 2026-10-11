import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ComparisonDisclaimer from "@/components/legal/ComparisonDisclaimer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Loyverse POS [Free Advanced Inventory & Staff Tools] — Vyop POS",
  description:
    "Compare Vyop vs Loyverse POS. Loyverse charges $360+/year for advanced inventory and employee add-ons. Vyop offers free phone barcode scanning, loose-item AI recognition, multi-currency support, and 0% online storefront.",
  alternates: { canonical: "/vyop-vs-loyverse" },
  openGraph: {
    title: "Vyop vs Loyverse POS [Free Advanced Inventory & Staff Tools] — Vyop POS",
    description: "Compare Vyop vs Loyverse POS: Avoid $360+/yr Loyverse add-on fees. Free smartphone barcode scanner, AI item detection, and multi-currency billing worldwide.",
    url: "https://vyop.in/vyop-vs-loyverse",
    siteName: "Vyop POS: Barcode Scan & Bill",
  },
};

const comparison = [
  { feature: "Base Price", vyop: "Free to Start / ₹999/yr Pro", loyverse: "$0 Basic POS Tier", better: "tie" },
  { feature: "Employee Management", vyop: "✅ Free (Included)", loyverse: "$5/month ($60/year)", better: "vyop" },
  { feature: "Advanced Inventory", vyop: "✅ Free (Included)", loyverse: "$25/month ($300/year)", better: "vyop" },
  { feature: "Kitchen Display / KOT", vyop: "✅ Built-in Wireless KOT Printing", loyverse: "✅ Free Loyverse KDS App", better: "tie" },
  { feature: "Annual Cost with Key Add-ons", vyop: "₹999/year (Pro Sync)", loyverse: "$360/year (~₹30,000+)", better: "vyop" },
  { feature: "Indian GST (CGST/SGST/HSN)", vyop: "✅ Full GST Compliance & GSTR Reports", loyverse: "Custom Sales Tax (No GSTR Filing Format)", better: "vyop" },
  { feature: "Voice AI Billing", vyop: "✅ Hindi, English & Hinglish", loyverse: "❌ Not Available", better: "vyop" },
  { feature: "UPI QR Code Payments", vyop: "✅ Built-in Dynamic UPI QR", loyverse: "❌ Requires Manual Third-Party Workarounds", better: "vyop" },
  { feature: "WhatsApp Invoicing", vyop: "✅ 1-Tap Direct WhatsApp Bills", loyverse: "Email Receipts & 3rd-Party SMS", better: "vyop" },
  { feature: "Product Addition Methods", vyop: "Voice, Camera Barcode, CSV, AI Snap & Manual", loyverse: "Manual Form Entry, CSV & Barcode", better: "vyop" },
  { feature: "Scan Unbarcoded Products (AI Vision)", vyop: "✅ Built-in AI Visual Item Recognition", loyverse: "❌ Not Supported", better: "vyop" },
  { feature: "Smartphone Camera Barcode Scanner", vyop: "✅ Built-in Phone Camera Barcode Scanner", loyverse: "In-App Camera Scan & External Scanners", better: "draw" },
  { feature: "0% Commission Online Store", vyop: "✅ Live Storefront + Spin-The-Wheel", loyverse: "❌ Requires Paid Integrations", better: "vyop" },
  { feature: "Offline Billing Mode", vyop: "✅ Full Offline + Auto Cloud Sync (Pro)", loyverse: "✅ Offline POS Mode", better: "tie" },
  { feature: "Indian Language Voice Support", vyop: "Hindi, English, Hinglish", loyverse: "Multilingual Interface (No Voice AI)", better: "vyop" },
  { feature: "Shop Types Supported", vyop: "22 Retail & Food Trades", loyverse: "Retail, Quick Service & Cafe", better: "draw" },
];

const faqs = [
  { question: "Is Loyverse POS really free?", answer: "Loyverse's basic POS app is free to use, but advanced business tools require paid monthly add-ons: Employee Management is $5/month and Advanced Inventory is $25/month. Adding both costs $360/year (~₹30,000+). Vyop includes inventory tracking and multi-staff management free to start, with full multi-device Pro cloud sync at just ₹999/year." },
  { question: "Does Loyverse work for Indian shops with GST?", answer: "Loyverse supports standard flat tax percentages, but does not natively handle Indian GST splits (CGST, SGST, IGST, HSN codes) or generate GSTR-ready filing summaries. Vyop is built specifically for Indian GST compliance." },
  { question: "Can Loyverse do voice billing in Hindi?", answer: "No. Loyverse does not support voice-based billing. Vyop's Voice AI lets shopkeepers speak naturally in Hindi, English, or Hinglish (e.g., 'Teen Maggi aur do Chai') to generate bills on counter queues." },
  { question: "Does Loyverse support UPI payments?", answer: "Loyverse is built primarily for international card payment processors and does not have integrated dynamic Indian UPI QR generation. Vyop embeds dynamic UPI QR codes directly onto invoices for seamless payments via PhonePe, Google Pay, and Paytm with 0% fee." },
];

export default function VyopVsLoyversePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Free Indian POS Alternative
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Loyverse POS</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Loyverse is a popular global POS, but it was not tailored for Indian retail tax and payments.{" "}
            <strong className="text-gray-900">Vyop gives you native Indian GST, Hindi voice billing, and direct UPI QR — free to start with ₹999/yr Pro cloud sync.</strong>
          </p>
        </div>

        {/* Price Highlight */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Loyverse POS</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">$360+/yr with Add-ons</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Base POS is free, but Employee Management ($5/mo) and Advanced Inventory ($25/mo) are separate subscriptions. Generic taxes without native Indian GST or UPI.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">Best for India</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Everything included: voice AI billing, smartphone camera barcode POS, item entry methods, GST compliance, UPI QR payments, WhatsApp bills, and 0% commission online store.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-5 px-4 text-base font-bold">Feature</th>
                  <th className="py-5 px-4 text-base font-bold text-amber-600">Vyop POS</th>
                  <th className="py-5 px-4 text-base font-bold text-gray-500">Loyverse POS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-5 px-4 font-semibold text-gray-900 text-sm">{row.feature}</td>
                    <td className="py-5 px-4 text-sm font-bold text-emerald-700">{row.vyop}</td>
                    <td className="py-5 px-4 text-gray-600 text-sm">{row.loyverse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-900 text-white p-10 md:p-14 rounded-3xl mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            Get Built-for-India POS Without Dollar Add-on Subscriptions
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 text-base md:text-lg">
            Download Vyop and get voice AI billing, GST compliance, camera barcode scanning, and inventory tracking — free to start with ₹999/yr Pro cloud sync.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.vyop.app" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-all shadow-md">
              Get on Google Play Store
            </a>
            <a href="https://vyop.shop" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all">
              Launch Web App
            </a>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/compare" className="text-sm font-bold text-amber-700 hover:text-amber-800 underline">View All Software Comparisons →</Link>
        </div>

        {/* Legal Disclaimer */}
        <ComparisonDisclaimer
          competitorName="Loyverse POS"
          lastUpdated="October 2026"
        />
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />

      <Footer />
    </main>
  );
}
