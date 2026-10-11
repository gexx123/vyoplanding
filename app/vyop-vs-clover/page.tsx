import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ComparisonDisclaimer from "@/components/legal/ComparisonDisclaimer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Clover POS | Best Free Indian POS Alternative to Clover",
  description:
    "Compare Vyop vs Clover POS. Clover requires $599-$1,799 proprietary hardware plus monthly software subscriptions and lacks native Indian GST, Hindi voice AI & UPI. Vyop offers Android POS with voice AI, starting free with ₹999/yr Pro cloud sync.",
  alternates: { canonical: "/vyop-vs-clover" },
  openGraph: {
    title: "Vyop vs Clover POS | Free Mobile Alternative in India",
    description: "Looking for a Clover POS alternative in India? Vyop offers smartphone camera barcode POS, Hindi voice billing, Indian GST, and ₹999/yr Pro cloud sync.",
    url: "https://vyop.in/vyop-vs-clover",
  },
};

const comparison = [
  { feature: "Hardware Requirements", vyop: "₹0 (Use Your Android Phone)", competitor: "$599 – $1,799 (Proprietary Terminal)", better: "vyop" },
  { feature: "Monthly Software Fee", vyop: "Free to Start / ₹999/yr Pro", competitor: "$14.95 – $84.95 / month SaaS", better: "vyop" },
  { feature: "Payment Processing Fees", vyop: "0% on Direct UPI QR & Cash", competitor: "2.3% – 2.6% + 10¢ per card transaction", better: "vyop" },
  { feature: "Indian GST (CGST/SGST/IGST)", vyop: "✅ Full Native Indian Compliance", competitor: "❌ US/International Sales Tax Only", better: "vyop" },
  { feature: "UPI QR Code Payments", vyop: "✅ Built-in Dynamic UPI QR", competitor: "❌ No Native Indian UPI Integration", better: "vyop" },
  { feature: "Voice AI Billing", vyop: "✅ Hindi, English & Hinglish", competitor: "❌ Not Available", better: "vyop" },
  { feature: "Smartphone Camera Barcode POS", vyop: "✅ Built-in Phone Camera POS", competitor: "Requires Clover Hardware Scanner", better: "vyop" },
  { feature: "Scan Unbarcoded Products (AI Vision)", vyop: "✅ Built-in AI Visual Item Recognition", competitor: "❌ Not Available", better: "vyop" },
  { feature: "Item Catalog Management", vyop: "Voice, Camera Barcode, CSV, AI Snap & Manual", competitor: "Web Dashboard & CSV Import", better: "vyop" },
  { feature: "WhatsApp Digital Invoicing", vyop: "✅ 1-Tap Direct WhatsApp Bills", competitor: "Email & SMS Receipts", better: "vyop" },
  { feature: "Offline Billing Capability", vyop: "✅ 100% Offline (Auto Sync)", competitor: "Offline Card Queue Mode", better: "tie" },
  { feature: "Language & Regional Focus", vyop: "Hindi, English & Hinglish (India Retail)", competitor: "English, Spanish & French (North America/EU)", better: "draw" },
  { feature: "0% Commission Online Storefront", vyop: "✅ Free Storefront + Spin-The-Wheel", competitor: "Clover Online (Paid Add-on)", better: "vyop" },
];

const faqs = [
  { question: "Can Clover POS be used in India?", answer: "Clover is designed specifically for US, Canadian, and European card payment acquirers (Fiserv). It does not natively integrate with Indian UPI (Google Pay, PhonePe, Paytm), cannot calculate Indian CGST/SGST, and relies on proprietary hardware terminals ($599+) designed for Western payment rails. Vyop is built specifically for Indian retail and runs on any standard Android smartphone — free to start with ₹999/yr Pro cloud sync." },
  { question: "How much does Clover POS cost compared to Vyop?", answer: "Clover hardware ranges from $599 for handheld Flex terminals to $1,799 for full dual-screen Station systems, plus $14.95 to $84.95 per month in software fees and card processing fees. Vyop runs on your existing smartphone starting free, charges 0% fees on direct UPI QR payments, and offers multi-device Pro cloud sync for just ₹999/year." },
  { question: "How does Vyop's smartphone camera scanner compare to Clover's hardware?", answer: "Vyop turns your existing smartphone camera into an AI-assisted barcode scanner that reads manufacturer barcodes rapidly without purchasing proprietary terminal hardware or handheld scanner accessories." },
  { question: "Does Clover support voice-activated billing?", answer: "No. Clover relies on touchscreens and physical handheld scanners. Vyop features Voice AI billing in Hindi, Hinglish, and English, letting cashiers speak item names and quantities to generate bills on busy counter queues." },
];

export default function VyopVsCloverPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Global POS Comparison
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Clover POS</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Clover is a leading global POS for North America and Europe, but it was not designed for Indian retail rails.{" "}
            <strong className="text-gray-900">Vyop gives you smartphone barcode scanning, native Indian GST, UPI QR payments, and Hindi voice AI — free to start with ₹999/yr Pro cloud sync.</strong>
          </p>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Clover POS</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">$599+ Hardware + $15-$85/mo</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Proprietary hardware terminals designed for North American card acquirers. Monthly SaaS subscriptions and payment transaction fees. No native Indian GST or UPI.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">Tailored for India</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Runs on any Android smartphone. Zero hardware costs, 0% UPI transaction fees, native Indian GST compliance, Hindi voice AI, and a 0% commission online storefront.
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
                  <th className="py-5 px-4 text-base font-bold text-gray-500">Clover POS</th>
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
            Frequently Asked Questions: Vyop vs Clover
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
          <h2 className="text-3xl font-extrabold mb-4 font-display">Get Enterprise POS Capabilities on Your Phone</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Avoid proprietary hardware costs. Vyop gives you supermarket-grade camera barcode scanning and voice AI on your phone — free to start with ₹999/yr Pro cloud sync.
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
          competitorName="Clover POS"
          companyName="Fiserv"
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
