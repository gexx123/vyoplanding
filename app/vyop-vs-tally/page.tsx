import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ComparisonDisclaimer from "@/components/legal/ComparisonDisclaimer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Vyop vs Tally Prime: Free Mobile POS Alternative | Vyop",
  },
  description:
    "Looking for a free Tally alternative? Compare Vyop vs Tally Prime. Free phone barcode scanning, Voice AI billing & GST reports without a ₹22k+ desktop PC license.",
  alternates: { canonical: "/vyop-vs-tally" },
  openGraph: {
    title: "Vyop vs Tally Prime: Free Mobile POS Alternative | Vyop",
    description: "Avoid desktop license lock-in. Bill on your smartphone with voice AI & barcode scanning.",
    url: "https://vyop.in/vyop-vs-tally",
    siteName: "Vyop POS",
  },
};

const tallyComparison = [
  {
    feature: "Pricing & License Model",
    vyop: "Free to Start / ₹999/yr Pro",
    tally: "₹22,500 + GST (Silver Perpetual) / ₹7,500/yr TSS Renewal",
    better: "vyop",
  },
  {
    feature: "Supported Platforms",
    vyop: "Mobile & Web — Android Phone + Zero-Install Browser Web App (vyop.shop)",
    tally: "Windows Desktop Software Installation",
    better: "vyop",
  },
  {
    feature: "Primary Billing Workflow",
    vyop: "Voice AI (Hindi/EN) + Phone Camera Barcode Scanning",
    tally: "Keyboard Shortcuts & Voucher Accounting",
    better: "vyop",
  },
  {
    feature: "Barcode Scanner Setup",
    vyop: "Built-in Phone Camera Barcode Scanner (Zero Hardware Cost)",
    tally: "Compatible with External USB/BT Barcode Scanners",
    better: "vyop",
  },
  {
    feature: "Scan Unbarcoded Products (AI Vision)",
    vyop: "Built-in AI Vision (Visual Item Recognition)",
    tally: "Not Supported",
    better: "vyop",
  },
  {
    feature: "Operational Learning Curve",
    vyop: "Minimal — Designed for Quick Counter Checkout & Shop Staff",
    tally: "Comprehensive Accounting & Voucher Knowledge Required",
    better: "vyop",
  },
  {
    feature: "WhatsApp Customer Invoices",
    vyop: "1-Tap Direct WhatsApp Share with UPI QR",
    tally: "Supported via Add-ons or PDF Export",
    better: "vyop",
  },
  {
    feature: "Direct Online Storefront",
    vyop: "0% Commission Web Catalog with WhatsApp Ordering",
    tally: "Not Supported Natively",
    better: "vyop",
  },
  {
    feature: "Tax Compliance & CA Audits",
    vyop: "GSTR-1, GSTR-3B Tax Summaries & P&L Reports",
    tally: "Deep Enterprise Accounting & Full Statutory Audit Workflows",
    better: "tally",
  },
];

const faqs = [
  {
    question: "Is Vyop a full replacement for Tally Prime?",
    answer:
      "For small and medium retailers, Kirana shops, boutiques, and cafes — YES. If you primarily need fast customer billing, inventory tracking, WhatsApp bills, and udhar khata without hiring a full-time accountant, Vyop replaces Tally at zero cost.",
  },
  {
    question: "Does Vyop work on Desktop and Laptop computers too?",
    answer:
      "Yes! Unlike Tally which is restricted to your desk, Vyop gives you complete freedom. You can bill on your smartphone while on the move, and open the full web application on your Desktop PC or Laptop at the billing counter with real-time cloud sync.",
  },
  {
    question: "Can I print bills to thermal receipt printers?",
    answer:
      "Yes. Vyop connects seamlessly via Bluetooth with 2-inch and 3-inch portable thermal printers, creating supermarket-style receipts in seconds.",
  },
];

export default function VyopVsTallyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Free Mobile Alternative
          </span>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Vyop vs <span className="gradient-text">Tally Prime</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Tally is built for corporate chartered accountants. <br className="hidden sm:block" />
            <strong className="text-gray-900">Vyop is built for fast-moving Indian shopkeepers.</strong>
          </p>
        </div>

        {/* Highlight Card */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tally Prime</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">₹22,500+ (Silver)</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Established accounting software for desktop PCs, comprehensive voucher ledgers, and enterprise CA compliance.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">
              Shopkeeper Favourite
            </span>
            <h3 className="text-xl font-bold mb-2">Vyop</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Mobile and web-first counter POS with phone camera barcode scanning, bilingual voice billing, and direct WhatsApp invoices.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[var(--shadow-md)] border border-[var(--border-subtle)] overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-5 px-4 text-base md:text-lg font-bold">Feature</th>
                  <th className="py-5 px-4 text-base md:text-lg font-bold text-amber-600">Vyop AI</th>
                  <th className="py-5 px-4 text-base md:text-lg font-bold text-gray-500">Tally Prime</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tallyComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-5 px-4 font-semibold text-gray-900 text-sm md:text-base">
                      {row.feature}
                    </td>
                    <td className="py-5 px-4 text-sm md:text-base">
                      <span className="font-bold text-emerald-700">{row.vyop}</span>
                    </td>
                    <td className="py-5 px-4 text-gray-600 text-sm md:text-base">
                      {row.tally}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-6 text-center">
            * Comparative analysis based on publicly available documentation as of October 2026. Tally and Tally Prime are registered trademarks of Tally Solutions Pvt. Ltd.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-900 text-white p-10 md:p-14 rounded-3xl mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            Ready for Fast Smartphone & Web Billing?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 text-base md:text-lg">
            Download Vyop free and turn your phone into a complete retail POS scanner in under 30 seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-all shadow-md"
            >
              Get on Google Play Store
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all"
            >
              Launch Web App
            </a>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <ComparisonDisclaimer
          competitorName="Tally Prime"
          companyName="Tally Solutions Pvt. Ltd."
          lastUpdated="October 2026"
        />
      </section>

      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }),
        }}
      />

      <Footer />
    </main>
  );
}
