import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ComparisonDisclaimer from "@/components/legal/ComparisonDisclaimer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Vyop vs Nukkad Shops: Free Retail POS Alternative | Vyop",
  },
  description:
    "Compare Vyop vs Nukkad Shops. Save ₹25k-₹45k in dedicated POS terminal hardware. Vyop turns any phone into a supermarket barcode scanner POS. Free to start.",
  alternates: { canonical: "/vyop-vs-nukkadshops" },
  openGraph: {
    title: "Vyop vs Nukkad Shops: Free Retail POS Alternative | Vyop",
    description: "Save on dedicated POS hardware. Vyop gives you supermarket-grade barcode scanning and voice billing on your phone starting free with ₹999/yr Pro.",
    url: "https://vyop.in/vyop-vs-nukkadshops",
    siteName: "Vyop POS",
  },
};

const comparison = [
  { feature: "Hardware Upfront Cost", vyop: "₹0 (Use Your Android Phone or Browser)", competitor: "₹25,000 – ₹45,000 (Dedicated Terminal)", better: "vyop" },
  { feature: "Annual Renewal / Software AMC", vyop: "Free to Start / ₹999/yr Pro", competitor: "₹4,000 – ₹8,000 / year", better: "vyop" },
  { feature: "Counter Footprint", vyop: "Zero (Pocket Smartphone / Any Laptop)", competitor: "Dedicated Integrated Counter Terminal", better: "vyop" },
  { feature: "Barcode Scanning Method", vyop: "Built-in Smartphone Camera Scanner", competitor: "Integrated or External Handheld Barcode Gun", better: "draw" },
  { feature: "Scan Unbarcoded Products (AI Vision)", vyop: "✅ Built-in AI Visual Item Recognition", competitor: "❌ Not Available (Manual Touch Selection)", better: "vyop" },
  { feature: "Voice AI Billing (Hindi/English)", vyop: "✅ Natural Spoken Billing", competitor: "❌ Not Available", better: "vyop" },
  { feature: "Ways to Add Products", vyop: "Voice, Camera Barcode, CSV, AI Snap & Manual", competitor: "Excel Import & Catalog Form", better: "vyop" },
  { feature: "0% Commission Online Storefront", vyop: "✅ Free Storefront + Spin-The-Wheel", competitor: "Digital Storefront Add-on", better: "vyop" },
  { feature: "Digital Udhar / Khata", vyop: "✅ Auto WhatsApp Reminders", competitor: "Customer Ledger Tracking", better: "vyop" },
  { feature: "GST Tax Invoicing & UPI QR", vyop: "✅ Automated with Dynamic UPI QR", competitor: "✅ Full GST Compliance", better: "tie" },
  { feature: "Thermal Receipt Printing", vyop: "✅ Wireless Bluetooth (2\" & 3\")", competitor: "Built-in Thermal Receipt Printer", better: "tie" },
  { feature: "Portability (Floor / Queue Billing)", vyop: "✅ Walk around the shop & bill", competitor: "Fixed Billing Counter Terminal", better: "vyop" },
  { feature: "Hardware Maintenance", vyop: "Works on standard consumer phones/PCs", competitor: "Dedicated Hardware Servicing & Support", better: "draw" },
];

const faqs = [
  { question: "Why should a kirana or supermarket choose Vyop over Nukkad Shops?", answer: "Nukkad Shops provides dedicated all-in-one desktop touch terminals costing ₹25,000 to ₹45,000, along with annual software AMC fees of ₹4,000 to ₹8,000. If your store prefers zero upfront hardware investment, Vyop runs directly on any Android smartphone and web browser (vyop.shop), offering rapid barcode scanning, voice AI billing, and Pro cloud sync at just ₹999/year." },
  { question: "Can a phone camera scan grocery barcodes as fast as a barcode gun?", answer: "Modern smartphone cameras with autofocus and camera processing decode standard 1D/2D manufacturer barcodes rapidly. Vyop's optimized barcode engine reads barcodes on packaged items smoothly, allowing fast queue throughput without buying specialized laser guns." },
  { question: "What happens if I change my phone?", answer: "With Vyop Pro, your products, customer ledgers, inventory stock, and sales history are backed up securely in the cloud. Simply log in on your new phone or browser and resume billing with zero data loss." },
  { question: "Does Vyop provide an online ordering store like Nukkad Shops?", answer: "Yes, and Vyop's storefront is included with 0% commission. You get a dedicated web link (vyop.shop/yourstore) featuring a live catalog, direct WhatsApp ordering, and interactive customer spin-wheel discount rewards." },
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
            Avoid spending ₹35,000+ on dedicated counter machines when your smartphone can handle retail billing.{" "}
            <strong className="text-gray-900">Vyop gives supermarkets, apparel stores, and kiranas supermarket-grade barcode scanning and voice AI — free to start with ₹999/yr Pro cloud sync.</strong>
          </p>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Nukkad Shops</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">₹25,000 – ₹45,000 Hardware</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Dedicated counter hardware terminal with built-in thermal printer and customer display. Requires initial hardware purchase plus ₹4,000–₹8,000 annual software maintenance.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">Lowest in India</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Zero hardware footprint. Use your smartphone camera as a supermarket barcode scanner, speak bills in Hindi/English, and connect any portable Bluetooth printer.
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
          <h2 className="text-3xl font-extrabold mb-4 font-display">Save on Counter Hardware Today</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Get supermarket-grade barcode scanning and voice AI on your smartphone without buying dedicated POS terminal machines.
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
          competitorName="Nukkad Shops"
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
