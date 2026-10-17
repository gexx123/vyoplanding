import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ComparisonDisclaimer from "@/components/legal/ComparisonDisclaimer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Vyop vs myBillBook: Best Free Billing App Alternative | Vyop",
  },
  description:
    "Looking for a free myBillBook alternative? Compare Vyop vs myBillBook. Discover Voice AI billing, smartphone camera barcode POS & 0% online store. Free to start.",
  alternates: { canonical: "/vyop-vs-mybillbook" },
  openGraph: {
    title: "Vyop vs myBillBook: Best Free Billing App Alternative | Vyop",
    description: "Compare Vyop and myBillBook. Discover voice AI invoicing and smartphone supermarket barcode scanning.",
    url: "https://vyop.in/vyop-vs-mybillbook",
    siteName: "Vyop POS",
  },
};

const myBillBookComparison = [
  {
    feature: "Pricing & Plans",
    vyop: "Free to Start / ₹999/yr Pro",
    mybillbook: "Mobile from ~₹1,499/yr / Desktop from ~₹3,499/yr",
    better: "vyop",
  },
  {
    feature: "Product Addition Options",
    vyop: "Voice, Camera Barcode, CSV, AI Snap & Manual",
    mybillbook: "Excel Bulk Upload, Barcode & Manual Catalog Form",
    better: "vyop",
  },
  {
    feature: "Voice AI Invoicing",
    vyop: "Speak naturally in Hindi, Hinglish or English to generate bills",
    mybillbook: "Keyword Search & Touch Entry",
    better: "vyop",
  },
  {
    feature: "Smartphone Barcode Scanner",
    vyop: "Turn your phone camera into a supermarket POS scanner",
    mybillbook: "Phone Camera Barcode Scan & External Scanner Support",
    better: "vyop",
  },
  {
    feature: "Scan Unbarcoded Products (AI Vision)",
    vyop: "Built-in AI Vision (Visual Item Recognition for loose goods)",
    mybillbook: "Not Supported",
    better: "vyop",
  },
  {
    feature: "Customer Online Storefront",
    vyop: "0% Commission live store link with Spin-the-Wheel rewards",
    mybillbook: "Online Store Feature with Catalog Link",
    better: "draw",
  },
  {
    feature: "Barcode Sticker Label Printing",
    vyop: "Generate and print custom barcodes for unbranded items free",
    mybillbook: "Barcode Generation & Label Printing Supported",
    better: "draw",
  },
  {
    feature: "Voice Expense Logging",
    vyop: "Voice-driven expense entry in Hindi & English",
    mybillbook: "Manual Expense Form Entry",
    better: "vyop",
  },
  {
    feature: "Customer Ledger (Khata) & UPI",
    vyop: "Auto WhatsApp reminders with direct UPI payment link",
    mybillbook: "Auto WhatsApp reminders with payment link",
    better: "draw",
  },
];

const faqs = [
  {
    question: "Why do shopkeepers choose Vyop over myBillBook?",
    answer:
      "While myBillBook offers comprehensive mobile and desktop bookkeeping starting around ₹1,499–₹3,499/year, Vyop provides a voice-first retail counter experience. Shopkeepers can create bills by speaking in Hindi or English, scan barcodes continuously with any smartphone camera, and access a full browser POS (vyop.shop) starting free with ₹999/yr Pro cloud sync.",
  },
  {
    question: "How does Vyop's pricing compare to myBillBook?",
    answer:
      "Vyop is free to download and use for offline billing and barcode scanning. For full multi-device cloud backup, Vyop Pro is only ₹999/year (less than ₹2.7/day) — saving you thousands compared to myBillBook's ₹3,499 to ₹7,499/year plans.",
  },
  {
    question: "How do the 10 ways to add items compare?",
    answer:
      "In myBillBook, you typically type product details one by one. In Vyop, you have 10 methods: scan product barcodes, photograph supplier paper invoices, speak in the AI Orb, snap item photos, or upload existing menus.",
  },
];

export default function VyopVsMyBillBookPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Feature Comparison
          </span>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Vyop vs <span className="gradient-text">myBillBook</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            myBillBook is a typing-based mobile ledger. <br className="hidden sm:block" />
            <strong className="text-gray-900">Vyop is a voice-powered supermarket POS scanner in your pocket.</strong>
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[var(--shadow-md)] border border-[var(--border-subtle)] overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-5 px-4 text-base md:text-lg font-bold">Feature</th>
                  <th className="py-5 px-4 text-base md:text-lg font-bold text-amber-600">Vyop AI</th>
                  <th className="py-5 px-4 text-base md:text-lg font-bold text-gray-500">myBillBook</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {myBillBookComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-5 px-4 font-semibold text-gray-900 text-sm md:text-base">
                      {row.feature}
                    </td>
                    <td className="py-5 px-4 text-sm md:text-base">
                      <span className="font-bold text-emerald-700">{row.vyop}</span>
                    </td>
                    <td className="py-5 px-4 text-gray-600 text-sm md:text-base">
                      {row.mybillbook}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-6 text-center">
            * Comparative analysis based on publicly available documentation as of October 2026. myBillBook is a registered trademark of FloBiz.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-900 text-white p-10 md:p-14 rounded-3xl mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            Experience Voice-Speed Invoicing
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 text-base md:text-lg">
            Download Vyop today and see how easy billing becomes when you speak or scan instead of typing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-all shadow-md"
            >
              Download Free on Google Play
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all"
            >
              Try Web Version
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
          competitorName="myBillBook"
          companyName="FloBiz"
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
