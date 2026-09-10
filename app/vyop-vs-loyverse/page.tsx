import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Loyverse POS | Best Free Mobile POS Alternative in India",
  description:
    "Compare Vyop vs Loyverse POS. Loyverse charges $5-$25/month for add-ons and lacks Indian GST, Hindi voice billing & UPI. Vyop offers free offline billing and ₹999/yr Pro cloud sync with voice AI and smartphone barcode POS.",
  alternates: { canonical: "/vyop-vs-loyverse" },
  openGraph: {
    title: "Vyop vs Loyverse POS | Free Indian POS Alternative",
    description: "Why Indian shopkeepers choose Vyop over Loyverse: ₹999/yr pricing vs $660/yr Loyverse add-ons, Hindi voice AI, GST compliance & UPI support.",
    url: "https://vyop.in/vyop-vs-loyverse",
  },
};

const comparison = [
  { feature: "Base Price", vyop: "Free to Start / ₹999/yr Pro", loyverse: "$0 Basic Tier", better: "tie" },
  { feature: "Employee Management", vyop: "✅ Free (Included)", loyverse: "$5/month ($60/year)", better: "vyop" },
  { feature: "Advanced Inventory", vyop: "✅ Free (Included)", loyverse: "$25/month ($300/year)", better: "vyop" },
  { feature: "Kitchen Display System", vyop: "✅ Free KOT Printing", loyverse: "$25/month ($300/year)", better: "vyop" },
  { feature: "Total Annual Cost (All Features)", vyop: "₹999/year", loyverse: "$660/year (₹55,000+)", better: "vyop" },
  { feature: "Indian GST (CGST/SGST/HSN)", vyop: "✅ Full GST Compliance", loyverse: "❌ No Indian GST Support", better: "vyop" },
  { feature: "Voice AI Billing", vyop: "✅ Hindi, English & Hinglish", loyverse: "❌ Not Available", better: "vyop" },
  { feature: "UPI QR Code Payments", vyop: "✅ Built-in UPI QR", loyverse: "❌ No UPI Support", better: "vyop" },
  { feature: "WhatsApp Invoicing", vyop: "✅ 1-Tap WhatsApp Bills", loyverse: "❌ Not Available", better: "vyop" },
  { feature: "Ways to Add Products", vyop: "10 Instant Methods", loyverse: "1 Manual Entry", better: "vyop" },
  { feature: "0% Commission Online Store", vyop: "✅ Live Storefront + Spin Wheel", loyverse: "❌ Not Available", better: "vyop" },
  { feature: "Offline Mode", vyop: "✅ Full Offline + Auto Sync", loyverse: "✅ Offline Mode", better: "tie" },
  { feature: "Supported Languages", vyop: "Hindi, English, Hinglish", loyverse: "English Only", better: "vyop" },
  { feature: "Shop Types Supported", vyop: "22 Types (Kirana to Hotel)", loyverse: "Retail & Cafe", better: "vyop" },
];

const faqs = [
  { question: "Is Loyverse POS really free?", answer: "Loyverse's basic POS is free, but critical features cost extra: Employee Management is $5/month, Advanced Inventory is $25/month, and Kitchen Display System is $25/month. With all features, Loyverse costs $660/year (₹55,000+). Vyop includes all of these features starting free, with full multi-device Pro cloud sync at just ₹999/year (saving ₹50,000+)." },
  { question: "Does Loyverse work for Indian shops with GST?", answer: "No. Loyverse does not support Indian GST tax formats (CGST, SGST, IGST, HSN codes). It cannot generate GSTR-1 ready reports. Vyop is built specifically for Indian GST compliance." },
  { question: "Can Loyverse do voice billing in Hindi?", answer: "No. Loyverse does not support voice-based billing in any language. Vyop's AI Orb lets you speak naturally in Hindi, English, or Hinglish (e.g., 'Teen Maggi aur do Chai') to generate bills in 5 seconds." },
  { question: "Does Loyverse support UPI payments?", answer: "No. Loyverse does not integrate with Indian UPI payment systems (Google Pay, PhonePe, Paytm). Vyop generates invoices with embedded UPI QR codes for instant customer payments." },
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
            Loyverse is a popular global POS, but it was not built for Indian retail.{" "}
            <strong className="text-gray-900">Vyop gives you everything Loyverse charges for — plus Indian GST, Hindi voice billing, and UPI — free to start with ₹999/yr Pro cloud sync.</strong>
          </p>
        </div>

        {/* Price Highlight */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Loyverse POS</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">$660/yr (₹55,000+)</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Base POS is free, but Employee Management ($5/mo), Advanced Inventory ($25/mo), and Kitchen Display ($25/mo) are paid add-ons. No Indian GST, no Hindi voice, no UPI.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">Best for India</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Everything included: voice AI billing, smartphone barcode POS, 10 item entry methods, GST compliance, UPI payments, WhatsApp bills, and 0% commission online store.
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
            Get Everything Loyverse Charges For — Without $660/yr Fees
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 text-base md:text-lg">
            Download Vyop and get voice AI billing, GST compliance, barcode scanning, and advanced inventory — free to start with ₹999/yr Pro cloud sync.
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
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />

      <Footer />
    </main>
  );
}
