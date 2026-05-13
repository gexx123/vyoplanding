import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Khatabook | Why Voice AI is Better for Kirana Stores",
  description: "Comparing Vyop and Khatabook. See why Vyop's voice-first AI billing is faster and easier for small retail businesses in India than traditional typing apps.",
  alternates: { canonical: '/vyop-vs-khatabook' },
  openGraph: { url: 'https://vyop.in/vyop-vs-khatabook' }
};

const comparisonData = [
  { feature: "Billing Method", vyop: "Voice AI (Speak to Bill)", khatabook: "Manual Typing", better: "vyop" },
  { feature: "Time to Create Bill", vyop: "~10 Seconds", khatabook: "~2 Minutes", better: "vyop" },
  { feature: "Learning Curve", vyop: "Zero (Just speak)", khatabook: "Medium (Requires typing)", better: "vyop" },
  { feature: "Inventory Management", vyop: "Auto-sync with voice", khatabook: "Manual entry", better: "vyop" },
  { feature: "Digital Ledger (Khata)", vyop: "Built-in", khatabook: "Built-in", better: "draw" },
  { feature: "Multi-lingual Support", vyop: "7+ Indian Languages", khatabook: "Multiple Languages", better: "draw" },
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
              Vyop is an <strong>AI Accountant</strong>. It doesn't just track debt; it handles your entire shop operation 
              using your voice. It's 10x faster for billing during busy hours.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="https://vyop.shop" 
            className="inline-flex items-center px-10 py-5 rounded-2xl bg-[var(--brand-secondary)] text-white font-bold text-xl hover:scale-[1.02] transition-all shadow-[var(--shadow-gold)]"
          >
            Switch to Vyop for Free
          </Link>
        </div>
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
                  "text": "Yes, both Vyop and Khatabook offer free basic plans for tracking credit (udhar khata). However, Vyop includes voice-powered billing in its free tier."
                }
              },
              {
                "@type": "Question",
                "name": "Which app is faster for billing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vyop is significantly faster because it uses AI voice recognition. You can create a bill in 10 seconds just by speaking, whereas traditional apps require manual typing."
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
