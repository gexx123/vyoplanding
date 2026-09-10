import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Marg ERP 9+ | Best Free Mobile Alternative to Marg Software",
  description:
    "Compare Vyop vs Marg ERP 9+. Marg software costs ₹9,000-₹25,000/year, requires Windows PCs, dongles, and weeks of training. Vyop runs on your smartphone with camera barcode scanning and Hindi voice AI billing, starting free with ₹999/yr Pro cloud sync.",
  alternates: { canonical: "/vyop-vs-marg" },
  openGraph: {
    title: "Vyop vs Marg ERP 9+ | Free Mobile Alternative",
    description: "Why retailers and chemists are switching from Marg ERP to Vyop: ₹999/yr pricing (save ₹20,000+), zero PC requirement, smartphone barcode POS, and Hindi voice billing.",
    url: "https://vyop.in/vyop-vs-marg",
  },
};

const comparison = [
  { feature: "Base Price", vyop: "Free to Start / ₹999/yr Pro", competitor: "₹8,991 – ₹25,200/year + GST", better: "vyop" },
  { feature: "Hardware Required", vyop: "Your Existing Smartphone", competitor: "Desktop PC + Hardware Dongle", better: "vyop" },
  { feature: "Billing Speed", vyop: "5 Seconds (Voice AI or Camera Scan)", competitor: "Keyboard Shortcut Dependent", better: "vyop" },
  { feature: "Smartphone Camera Barcode POS", vyop: "✅ Built-in (Free)", competitor: "❌ Needs ₹3,000+ Barcode Gun", better: "vyop" },
  { feature: "Voice AI Billing (Hindi & Hinglish)", vyop: "✅ Speak: '2 Paracetamol, 1 Dolo'", competitor: "❌ Not Available", better: "vyop" },
  { feature: "Indian GST & GSTR Reports", vyop: "✅ Automated (CGST, SGST, IGST)", competitor: "✅ Full GST (Complex Setup)", better: "tie" },
  { feature: "Learning Curve", vyop: "Zero Training (Instant Setup)", competitor: "2-4 Weeks Training Needed", better: "vyop" },
  { feature: "WhatsApp Digital Invoices", vyop: "✅ 1-Tap Direct WhatsApp Bills", competitor: "❌ Requires Paid SMS / Third-party API", better: "vyop" },
  { feature: "Online Customer Storefront", vyop: "✅ 0% Commission Store + Spin Wheel", competitor: "❌ Not Included", better: "vyop" },
  { feature: "Cloud Sync & Multi-Device", vyop: "✅ Real-Time Cloud + Offline", competitor: "❌ Local Database (Prone to Data Loss)", better: "vyop" },
  { feature: "Daily Udhar (Credit) Tracking", vyop: "✅ Automated WhatsApp Reminders", competitor: "Manual Ledger Reports", better: "vyop" },
  { feature: "Customer Support", vyop: "✅ Free WhatsApp & Phone Support", competitor: "Paid Annual Maintenance (AMC)", better: "vyop" },
];

const faqs = [
  { question: "How does Vyop compare to Marg ERP 9+ for pharmacy and retail stores?", answer: "Marg ERP is desktop software requiring expensive Windows computers, hardware dongles, and paid AMC contracts. Vyop is modern and runs on any Android phone starting free. You can scan medicine and grocery barcodes with your phone camera, speak bills in Hindi or English, and enjoy full cloud sync Pro for just ₹999/year." },
  { question: "How does Vyop's price compare to Marg ERP?", answer: "Marg Basic starts at ₹8,991 + GST and goes up to ₹25,200/year with recurring AMC fees. Vyop offers a free offline tier, and its Pro cloud plan is just ₹999/year (less than ₹2.7/day), saving you ₹20,000+ every single year." },
  { question: "Can I manage batch numbers and expiry dates like in Marg?", answer: "Yes! Vyop supports batch tracking, manufacturing dates, expiry date alerts, and HSN codes, making it perfect for pharmacies, FMCG distributors, grocery stores, and cosmetics shops." },
  { question: "Do I need to buy a computer or barcode scanner to replace Marg?", answer: "No! Vyop turns your smartphone camera into a supermarket-grade barcode scanner and supports wireless Bluetooth thermal printers (₹1,500). You save over ₹25,000 on PC hardware and barcode scanners." },
];

export default function VyopVsMargPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Marg ERP 9+ Alternative
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Marg ERP 9+</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Marg ERP is complex, desktop-locked, and charges hefty annual AMC fees.{" "}
            <strong className="text-gray-900">Vyop gives you faster billing on your mobile phone with Voice AI and smartphone camera barcode scanning — free to start with ₹999/yr Pro cloud sync.</strong>
          </p>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Marg ERP 9+</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">₹8,991 – ₹25,200/yr</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Requires a dedicated Windows PC, hardware dongle, ₹3,000 barcode gun, and annual maintenance charges. Steep learning curve with complex DOS-style shortcuts.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">Lowest in India</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Runs on any Android phone. Voice AI in Hindi/English, smartphone camera barcode scanner, batch & expiry tracking, automated WhatsApp bills, and 0% commission online storefront.
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
                  <th className="py-5 px-4 text-base font-bold text-gray-500">Marg ERP 9+</th>
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
            Frequently Asked Questions: Vyop vs Marg ERP
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
          <h2 className="text-3xl font-extrabold mb-4 font-display">Ready to Switch from Marg to Vyop?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Join thousands of retail shopkeepers and chemists who have switched to India's fastest voice billing app. Free to start.
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
