import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ComparisonDisclaimer from "@/components/legal/ComparisonDisclaimer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Khatabook | Why Voice AI is Better for Kirana Stores",
  description: "Comparing Vyop and Khatabook. See why Vyop's voice-first AI billing is faster and easier for small retail businesses in India than traditional typing apps.",
  alternates: { canonical: '/vyop-vs-khatabook' },
  openGraph: { url: 'https://vyop.in/vyop-vs-khatabook' }
};

const comparisonData = [
  { feature: "Pricing & Cloud Backup", vyop: "Free to Start / ₹999/yr Pro", khatabook: "Free Basic / Premium Subscription", better: "vyop" },
  { feature: "Primary Input Workflow", vyop: "Voice AI (Hindi/EN) + Phone Camera Barcode", khatabook: "Keypad Entry & Product Search", better: "vyop" },
  { feature: "Smartphone Barcode POS", vyop: "Optimized Built-in Camera Barcode Scanner", khatabook: "In-App Product Search", better: "vyop" },
  { feature: "Scan Unbarcoded Products (AI Vision)", vyop: "Built-in AI Visual Recognition", khatabook: "Not Supported", better: "vyop" },
  { feature: "Catalog Addition Options", vyop: "Voice, Camera Barcode, CSV, AI Snap", khatabook: "Manual Entry & Catalog Import", better: "vyop" },
  { feature: "Online Customer Ordering", vyop: "0% Commission Web Store + WhatsApp Orders", khatabook: "Digital Storefront Link", better: "draw" },
  { feature: "Counter Checkout Focus", vyop: "High-Speed Retail Counter POS", khatabook: "Digital Khata & Ledger Management", better: "vyop" },
  { feature: "Inventory Tracking", vyop: "Live Stock Deduction & Low-Stock Alerts", khatabook: "Item Master & Stock Tracking", better: "draw" },
  { feature: "Digital Ledger (Khata)", vyop: "Built-in Automated Payment Reminders", khatabook: "Comprehensive Customer Khata & Reminders", better: "draw" },
  { feature: "Multilingual Support", vyop: "Hindi, English, Hinglish & Regional", khatabook: "Multiple Indian Languages", better: "draw" },
];

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Khatabook</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Khatabook is great for ledgers, but Vyop is built for the <span className="font-bold">speed of retail</span>. 
            See why voice-powered billing is the future.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-[var(--shadow-md)] border border-[var(--border-subtle)] overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="py-6 text-lg font-bold">Feature</th>
                <th className="py-6 text-lg font-bold text-[var(--brand-primary)]">Vyop (AI)</th>
                <th className="py-6 text-lg font-bold text-gray-500">Khatabook</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-6 font-medium text-[var(--text-primary)]">{row.feature}</td>
                  <td className={`py-6 font-bold ${row.better === "vyop" ? "text-green-600" : ""}`}>
                    {row.vyop}
                  </td>
                  <td className="py-6 text-gray-500">
                    {row.khatabook}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[var(--border-subtle)]">
            <h3 className="text-2xl font-bold mb-4">Why choose Khatabook?</h3>
            <p className="text-[var(--text-secondary)]">
              Khatabook is a solid choice if you only need a simple digital ledger to track credit (udhar) 
              and don't care about fast billing or inventory automation.
            </p>
          </div>
          <div className="bg-[var(--brand-glow)] p-8 rounded-3xl border border-[var(--brand-primary)]">
            <h3 className="text-2xl font-bold mb-4 text-[var(--brand-primary)]">Why Vyop wins?</h3>
            <p className="text-[var(--text-secondary)]">
              Vyop is a comprehensive <strong>Smart POS Platform</strong>. It doesn&apos;t just track debt; it handles your entire shop checkout and inventory operation 
              using camera barcode scanning and natural voice. It makes counter checkout effortless during busy rush hours.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="https://vyop.shop" 
            className="inline-flex items-center px-10 py-5 rounded-2xl bg-[var(--brand-secondary)] text-white font-bold text-xl hover:scale-[1.02] transition-all shadow-[var(--shadow-gold)]"
          >
            Switch to Vyop (Free to Start)
          </Link>
        </div>

        {/* Legal Disclaimer */}
        <ComparisonDisclaimer
          competitorName="Khatabook"
          companyName="Kyte Technologies Inc."
          lastUpdated="October 2026"
        />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Vyop free vs Khatabook?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both Vyop and Khatabook offer free basic plans. For full retail barcode billing and multi-device cloud sync, Vyop Pro is just ₹999/year compared to Khatabook's ₹2,999/year premium tier."
                }
              },
              {
                "@type": "Question",
                "name": "Which app is faster for billing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vyop is optimized for retail speed because it combines camera barcode scanning with natural voice AI recognition. You can create a bill instantly by simply speaking into the Voice AI Orb, whereas ledger apps require manual typing and keypad navigation."
                }
              }
            ]
          })
        }}
      />

      <Footer />
    </main>
  );
}
