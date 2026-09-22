import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Nukkad Shops POS | Best Free Supermarket & Kirana POS Alternative",
  description:
    "Compare Vyop vs Nukkad Shops. Nukkad Shops charges ₹25,000-₹45,000 for bulky touchscreen POS machines plus yearly renewal fees. Vyop turns your mobile phone into a supermarket barcode POS with voice AI, starting free with ₹999/yr Pro cloud sync.",
  alternates: { canonical: "/vyop-vs-nukkadshops" },
  openGraph: {
    title: "Vyop vs Nukkad Shops | Free Mobile POS for Kirana & Retail",
    description: "Save ₹30,000+ on bulky POS hardware. Vyop gives you mall-grade supermarket barcode scanning and voice billing on your phone starting free with ₹999/yr Pro.",
    url: "https://vyop.in/vyop-vs-nukkadshops",
  },
};

const comparison = [
  { feature: "Hardware Upfront Cost", vyop: "₹0 (Use Your Android Phone)", competitor: "₹25,000 – ₹45,000 Hardware Cost", better: "vyop" },
  { feature: "Annual Renewal / AMC", vyop: "Free to Start / ₹999/yr Pro", competitor: "₹4,000 – ₹8,000 / year", better: "vyop" },
  { feature: "Counter Space Taken", vyop: "Zero (Pocket Smartphone)", competitor: "Bulky Touchscreen Counter Machine", better: "vyop" },
  { feature: "Barcode Scanning Method", vyop: "Built-in Smartphone Camera (0.05s)", competitor: "External USB / Wireless Barcode Gun", better: "vyop" },
  { feature: "Scan Unbarcoded Products (AI Vision)", vyop: "✅ Built-in AI Vision (Snap photo of loose goods to bill in 0.2s)", competitor: "❌ Not Available (Forces manual typing)", better: "vyop" },
  { feature: "Voice AI Billing (Hindi/English)", vyop: "✅ Natural Spoken Billing", competitor: "❌ Not Available", better: "vyop" },
  { feature: "Ways to Add Products", vyop: "10 Instant Methods (AI, Camera, Master)", competitor: "1-2 Standard Methods", better: "vyop" },
  { feature: "0% Commission Online Storefront", vyop: "✅ Free Storefront + Spin-The-Wheel", competitor: "Paid Add-on / Basic App", better: "vyop" },
  { feature: "Digital Udhar / Khata", vyop: "✅ Auto WhatsApp Reminders", competitor: "Basic Ledger Tracking", better: "vyop" },
  { feature: "GST Tax Invoicing & UPI QR", vyop: "✅ Automated with Dynamic UPI", competitor: "✅ Supported", better: "tie" },
  { feature: "Thermal Receipt Printing", vyop: "✅ Wireless Bluetooth (2\"/3\")", competitor: "Built-in Thermal Printer", better: "tie" },
  { feature: "Portability (Mobile Billing)", vyop: "✅ Walk around the shop & bill", competitor: "❌ Fixed Counter Only", better: "vyop" },
  { feature: "Hardware Repair & Maintenance", vyop: "None (Works on any phone)", competitor: "Expensive Service & Courier Repairs", better: "vyop" },
];

const faqs = [
  { question: "Why should a kirana or supermarket choose Vyop over Nukkad Shops?", answer: "Nukkad Shops sells dedicated desktop touch terminals costing ₹25,000 to ₹45,000, plus ₹4,000 to ₹8,000 every year for software maintenance. If the screen cracks or printer jams, your billing stops. Vyop gives you the exact same supermarket barcode speed directly on your existing smartphone starting free, with complete multi-device Pro cloud sync at just ₹999/year (saving ₹30,000+)." },
  { question: "Can a phone camera scan grocery barcodes as fast as Nukkad Shops barcode gun?", answer: "Yes! Modern smartphone cameras have high resolution and auto-focus. Vyop's optimized barcode engine reads 1D and 2D manufacturer barcodes in under 0.2 seconds, even on crumpled packets, plastic pouches, and shiny foil surfaces." },
  { question: "What happens if I change my phone?", answer: "All your products, customer khata, stock levels, and sales history are securely backed up in the cloud. Simply log in on your new phone and resume billing in 10 seconds with zero data loss." },
  { question: "Does Vyop provide an online ordering store like Nukkad Shops?", answer: "Yes, and Vyop's is included with 0% commission! You get your own web link (e.g., vyop.shop/yourstore) with a live product catalog, WhatsApp order placement, and an interactive Spin-The-Wheel discount game that drives repeat customer orders." },
];

export default function VyopVsNukkadShopsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Zero-Hardware Supermarket POS
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Nukkad Shops</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Why spend ₹35,000 on a bulky counter machine when your phone can do it faster?{" "}
            <strong className="text-gray-900">Vyop gives supermarkets, apparel stores, and kiranas supermarket-grade barcode scanning and voice AI — free to start with ₹999/yr Pro cloud sync.</strong>
          </p>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Nukkad Shops</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">₹25,000 – ₹45,000</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Bulky hardware machine takes up precious counter space. High upfront hardware cost plus ₹4,000-₹8,000 annual software renewal fees. Expensive hardware repairs.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">Lowest in India</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Zero counter footprint. Use any smartphone camera as a supermarket barcode scanner, speak bills in Hindi/English, and print to any ₹1,500 Bluetooth printer.
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
                  <th className="py-5 px-4 text-base font-bold text-gray-500">Nukkad Shops</th>
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
            Frequently Asked Questions: Vyop vs Nukkad Shops
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
          <h2 className="text-3xl font-extrabold mb-4 font-display">Save ₹35,000 on Counter Hardware Today</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Get mall-grade barcode scanning and voice AI on your smartphone without buying expensive POS hardware.
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
