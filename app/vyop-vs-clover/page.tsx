import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Clover POS | Best Free Indian POS Alternative to Clover",
  description:
    "Compare Vyop vs Clover POS. Clover requires $599-$1,799 proprietary hardware plus $14.95-$84.95/month software subscriptions and lacks Indian GST, Hindi voice AI & UPI. Vyop offers Android POS with voice AI, starting free with ₹999/yr Pro cloud sync.",
  alternates: { canonical: "/vyop-vs-clover" },
  openGraph: {
    title: "Vyop vs Clover POS | Free Mobile Alternative in India",
    description: "Looking for a Clover POS alternative in India? Vyop offers smartphone camera barcode POS, Hindi voice billing, Indian GST, and ₹999/yr Pro cloud sync.",
    url: "https://vyop.in/vyop-vs-clover",
  },
};

const comparison = [
  { feature: "Hardware Cost", vyop: "₹0 (Use Your Android Phone)", competitor: "$599 – $1,799 (₹50,000 – ₹1,50,000)", better: "vyop" },
  { feature: "Monthly Software Fee", vyop: "Free to Start / ₹999/yr Pro", competitor: "$14.95 – $84.95 / month (₹15,000 – ₹85,000/yr)", better: "vyop" },
  { feature: "Transaction Fee / Commission", vyop: "0% on UPI QR & Cash", competitor: "2.3% + 10¢ per transaction", better: "vyop" },
  { feature: "Indian GST (CGST/SGST/IGST)", vyop: "✅ Full Native Compliance", competitor: "❌ US Sales Tax Only (No Indian GST)", better: "vyop" },
  { feature: "UPI QR Code Payments", vyop: "✅ Auto Dynamic UPI QR", competitor: "❌ No Indian UPI Integration", better: "vyop" },
  { feature: "Voice AI Billing", vyop: "✅ Hindi, English & Hinglish", competitor: "❌ Not Available", better: "vyop" },
  { feature: "Smartphone Camera Barcode POS", vyop: "✅ Built-in Instant Camera POS", competitor: "❌ Requires Proprietary Scanner", better: "vyop" },
  { feature: "Scan Unbarcoded Products (AI Vision)", vyop: "✅ Built-in AI Vision (Snap loose goods to bill in 0.2s)", competitor: "❌ Not Available", better: "vyop" },
  { feature: "Ways to Add Products", vyop: "10 Instant Methods", competitor: "1 Standard Web Dashboard", better: "vyop" },
  { feature: "WhatsApp Digital Invoicing", vyop: "✅ 1-Tap Direct WhatsApp Bills", competitor: "Email & SMS (US Carriers)", better: "vyop" },
  { feature: "Offline Billing Capability", vyop: "✅ 100% Offline (Auto Sync)", competitor: "Limited Offline Mode", better: "vyop" },
  { feature: "Local Language Support", vyop: "Hindi, English, Hinglish", competitor: "English Only", better: "vyop" },
  { feature: "0% Commission Online Storefront", vyop: "✅ Free Storefront + Spin-The-Wheel", competitor: "Clover Online (Paid Add-on)", better: "vyop" },
];

const faqs = [
  { question: "Can Clover POS be used in India?", answer: "Not practically. Clover is built for US, Canadian, and European payment processors. It does not integrate with Indian UPI (Google Pay, PhonePe, Paytm), cannot calculate Indian CGST/SGST, and requires importing expensive proprietary terminals ($599+) that have no local warranty in India. Vyop is built specifically for Indian retail and runs on any standard Android phone — free to start with ₹999/yr Pro cloud sync." },
  { question: "How much does Clover POS cost compared to Vyop?", answer: "Clover costs between $599 and $1,799 (₹50,000 to ₹1,50,000) for hardware, plus $14.95 to $84.95 per month (₹15,000 to ₹85,000/year) in software fees, plus a 2.3% + 10¢ fee on every card swipe. Vyop runs on your existing phone starting free, charges 0% fees on UPI payments, and offers full Pro cloud sync for just ₹999/year." },
  { question: "How does Vyop's smartphone camera scanner compare to Clover's hardware?", answer: "Vyop turns your existing smartphone camera into an AI-powered barcode scanner that reads manufacturer barcodes in under 0.2 seconds. You get the same fast supermarket checkout experience without purchasing a ₹50,000 terminal." },
  { question: "Does Clover support voice-activated billing?", answer: "No. Clover relies on touchscreens and physical barcode scanners. Vyop is the only POS featuring natural Voice AI billing in Hindi, Hinglish, and English, letting you speak item names and quantities to generate bills in 5 seconds." },
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
            Clover is a massive global brand, but expensive and incompatible with Indian retail.{" "}
            <strong className="text-gray-900">Vyop gives you enterprise POS features, camera barcode scanning, and Hindi voice AI — free to start with ₹999/yr Pro cloud sync on your mobile phone.</strong>
          </p>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Clover POS</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">$599+ Hardware + $15-$85/mo</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Requires purchasing expensive proprietary hardware terminals. High monthly SaaS subscription fees and 2.3% payment processing cuts. Zero support for Indian GST or UPI.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">Lowest in India</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Runs on your existing Android phone. Zero hardware fees, 0% UPI transaction fees, native Indian GST compliance, Hindi voice AI, and 0% commission online storefront.
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
          <h2 className="text-3xl font-extrabold mb-4 font-display">Get Enterprise POS Speed on Your Phone</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Why spend ₹1,00,000 on imported POS hardware? Vyop gives you mall-grade POS features on your phone — free to start with ₹999/yr Pro cloud sync.
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
