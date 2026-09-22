import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Square POS | Best Free POS Alternative for India",
  description: "Compare Vyop vs Square POS. Square charges 2.6% per transaction and requires $299+ hardware. Vyop is free to start with Indian GST, UPI, Hindi voice billing & ₹999/yr Pro cloud sync.",
  alternates: { canonical: "/vyop-vs-square" },
  openGraph: { title: "Vyop vs Square POS | Free Indian POS Alternative", url: "https://vyop.in/vyop-vs-square" },
};

const comparison = [
  { feature: "Pricing", vyop: "Free to Start / ₹999/yr Pro", square: "Free App + 2.6% + 10¢ Per Transaction" },
  { feature: "Transaction Fees", vyop: "₹0 (Zero Transaction Fee)", square: "2.6% + 10¢ per swipe/tap/dip" },
  { feature: "Hardware Required", vyop: "Any Android Phone (₹0 extra)", square: "$299+ Card Reader + $799+ Terminal" },
  { feature: "AI Barcode & Product Scanner", vyop: "✅ Phone camera scans barcodes & unbarcoded items with AI", square: "❌ Requires Square hardware scanner" },
  { feature: "Indian GST Support", vyop: "✅ Full CGST/SGST/IGST/HSN", square: "❌ US Sales Tax Only" },
  { feature: "UPI & India Payments", vyop: "✅ UPI QR, Google Pay, PhonePe", square: "❌ Card-Only (US/EU Systems)" },
  { feature: "Voice AI Billing", vyop: "✅ Hindi, English & Hinglish", square: "❌ Not Available" },
  { feature: "WhatsApp Invoicing", vyop: "✅ 1-Tap WhatsApp Bills", square: "❌ Email/SMS Only" },
  { feature: "Language Support", vyop: "Hindi, English, Hinglish", square: "English Only" },
  { feature: "Online Storefront", vyop: "✅ 0% Commission", square: "✅ With Transaction Fees" },
  { feature: "Target Market", vyop: "Indian Retail (22 Shop Types)", square: "US/EU Retail & Services" },
];

const faqs = [
  { question: "Is Square POS available in India?", answer: "Square POS is primarily designed for the US, UK, Canada, Australia, and EU markets. It does not support Indian payment systems (UPI, RuPay), Indian GST tax formats, or Hindi language. Vyop is built specifically for Indian retail with full GST, UPI, and Hindi voice support." },
  { question: "Does Square charge transaction fees?", answer: "Yes, Square charges 2.6% + 10¢ per in-person transaction and 2.9% + 30¢ for online transactions. On ₹10,000 daily sales, that's ₹260+ per day in fees. Vyop charges ₹0 transaction fees." },
  { question: "Does Square require expensive hardware?", answer: "Yes, Square requires purchasing dedicated card readers ($49–$299) or terminals ($299–$799). Vyop works on any existing Android smartphone — your phone camera is the barcode scanner, no extra hardware needed." },
];

export default function VyopVsSquarePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">Built for Indian Retail</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Square POS</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Square POS is built for American card payments. <strong className="text-gray-900">Vyop is built for Indian shopkeepers who use UPI, GST, and Hindi.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Square POS</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">2.6% Per Transaction + $299 Hardware</div>
            <p className="text-sm text-gray-600">US-focused card payment POS. Requires expensive readers. No Indian GST, UPI, or Hindi support.</p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">Made for India</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90">Free voice AI billing, phone camera barcode scanner, Indian GST, 0% fee UPI QR payments, and WhatsApp invoices.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead><tr className="border-b-2 border-gray-100"><th className="py-5 px-4 text-base font-bold">Feature</th><th className="py-5 px-4 text-base font-bold text-amber-600">Vyop POS</th><th className="py-5 px-4 text-base font-bold text-gray-500">Square POS</th></tr></thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-5 px-4 font-semibold text-gray-900 text-sm">{row.feature}</td>
                    <td className="py-5 px-4 text-sm font-bold text-emerald-700">{row.vyop}</td>
                    <td className="py-5 px-4 text-gray-600 text-sm">{row.square}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center bg-gray-900 text-white p-10 md:p-14 rounded-3xl mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Skip the Transaction Fees. Bill Free with Vyop.</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">Zero fees, zero hardware cost, zero learning curve.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.vyop.app" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-all shadow-md">Get on Google Play</a>
            <a href="https://vyop.shop" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all">Launch Web App</a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (<div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"><h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4><p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p></div>))}
          </div>
        </div>
        <div className="mt-12 text-center"><Link href="/compare" className="text-sm font-bold text-amber-700 hover:text-amber-800 underline">View All Comparisons →</Link></div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <Footer />
    </main>
  );
}
