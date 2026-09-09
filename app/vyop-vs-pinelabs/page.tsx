import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Pine Labs POS | Free Mobile POS Alternative (No Monthly Rental)",
  description:
    "Compare Vyop vs Pine Labs POS machine. Pine Labs charges ₹500-₹1,200/month machine rental plus transaction MDR fees. Vyop gives you mobile POS, camera barcode scanning, and direct 0% MDR UPI QR payments for ₹0 forever.",
  alternates: { canonical: "/vyop-vs-pinelabs" },
  openGraph: {
    title: "Vyop vs Pine Labs POS | Zero Monthly Rental POS",
    description: "Stop paying ₹500-₹1,200/mo for POS hardware rentals. Switch to Vyop: 100% free smartphone POS with 0% MDR UPI payments and camera barcode scanning.",
    url: "https://vyop.in/vyop-vs-pinelabs",
  },
};

const comparison = [
  { feature: "Monthly Machine Rental", vyop: "₹0 (Zero Rental Forever)", competitor: "₹500 – ₹1,200/month", better: "vyop" },
  { feature: "Hardware Required", vyop: "Your Own Android Smartphone", competitor: "Proprietary Pine Labs Terminal", better: "vyop" },
  { feature: "UPI QR Transaction Fee (MDR)", vyop: "0% Fee (Direct Bank Deposit)", competitor: "Payment Gateway Processing Fees", better: "vyop" },
  { feature: "Annual Hardware Cost", vyop: "₹0 / year", competitor: "₹6,000 – ₹14,400 / year rental", better: "vyop" },
  { feature: "Barcode Scanning", vyop: "✅ Smartphone Camera (Instant)", competitor: "Built-in or External Scanner", better: "tie" },
  { feature: "Voice AI Billing (Hindi)", vyop: "✅ Voice AI Orb (Speak Bills)", competitor: "❌ Not Available", better: "vyop" },
  { feature: "Item Addition Methods", vyop: "10 Instant Methods", competitor: "1 Manual Inventory System", better: "vyop" },
  { feature: "Free Online Customer Storefront", vyop: "✅ 0% Commission Store + Spin Wheel", competitor: "❌ Not Included", better: "vyop" },
  { feature: "WhatsApp Invoicing", vyop: "✅ 1-Tap WhatsApp Receipts", competitor: "SMS Invoicing (Paid Credits)", better: "vyop" },
  { feature: "Lock-in Contracts & Security Deposit", vyop: "None (No Contracts)", competitor: "Security Deposit + Lock-in Contract", better: "vyop" },
  { feature: "Offline Billing Support", vyop: "✅ 100% Offline Capable", competitor: "Depends on SIM / Network Connectivity", better: "vyop" },
  { feature: "Thermal Receipt Printing", vyop: "✅ Any Bluetooth Printer (₹1,500)", competitor: "Internal Roll (Proprietary Paper)", better: "vyop" },
];

const faqs = [
  { question: "Why switch from a Pine Labs POS machine to Vyop?", answer: "Pine Labs charges ongoing monthly rentals of ₹500 to ₹1,200 per machine, plus transaction MDR fees on card swipes and security deposits. If the machine breaks, repair charges and downtime hurt your business. Vyop runs directly on your smartphone for ₹0 with zero monthly rentals, zero contracts, and 0% MDR on UPI QR payments." },
  { question: "How does payment collection work on Vyop without a card swipe machine?", answer: "Over 85% of retail transactions in India now happen via UPI (Google Pay, PhonePe, Paytm). Vyop automatically prints and displays a dynamic UPI QR code on every bill. Customers scan with their phone and pay directly into your bank account with 0% transaction commission." },
  { question: "Can Vyop scan barcodes as fast as a Pine Labs POS machine?", answer: "Yes! Vyop uses your smartphone's high-definition camera with AI focus, scanning product barcodes in less than 0.2 seconds — faster than many handheld terminal cameras. You can also connect any wireless Bluetooth barcode scanner if desired." },
  { question: "What if my shop loses internet connection?", answer: "Vyop works 100% offline. You can continue scanning items, creating bills, and printing receipts even when the network is completely down. All transaction data automatically syncs to the cloud once connection is restored." },
];

export default function VyopVsPineLabsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Zero Rental POS Machine Alternative
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Pine Labs POS</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Stop paying ₹500 to ₹1,200 every month just to rent a POS machine.{" "}
            <strong className="text-gray-900">Vyop turns your smartphone into a high-speed barcode POS with direct UPI payments and voice billing — 100% free forever.</strong>
          </p>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pine Labs POS</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">₹6,000 – ₹14,400/yr</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Charges monthly machine rental (₹500-₹1,200/mo), security deposit, lock-in agreements, and transaction MDR charges. You don't own the hardware.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">Zero Monthly Rental</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">₹0 / Lifetime</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Use your existing phone. Zero machine rental, 0% MDR on UPI QR payments, smartphone camera barcode scanning, Hindi voice billing, and free online storefront.
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
                  <th className="py-5 px-4 text-base font-bold text-gray-500">Pine Labs POS</th>
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
            Frequently Asked Questions: Vyop vs Pine Labs
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
          <h2 className="text-3xl font-extrabold mb-4 font-display">Eliminate POS Rental Fees Forever</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Save ₹12,000+ every year. Turn your smartphone into India's fastest retail billing and barcode scanning machine.
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
