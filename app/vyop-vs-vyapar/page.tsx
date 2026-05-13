import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Vyapar | The Next Generation of Billing Software",
  description: "Comparing Vyop and Vyapar App. Vyop's voice-AI billing is designed for the modern Indian retailer who wants speed and simplicity without the complexity of traditional accounting software.",
  alternates: { canonical: '/vyop-vs-vyapar' },
  openGraph: { url: 'https://vyop.in/vyop-vs-vyapar' }
};

const comparisonData = [
  { feature: "Billing Speed", vyop: "Ultra-Fast (Voice)", vyapar: "Manual (Keyboard/Touch)", better: "vyop" },
  { feature: "Ease of Use", vyop: "Extremely Simple", vyapar: "Requires Learning", better: "vyop" },
  { feature: "Hardware Needed", vyop: "Any Mobile Phone", vyapar: "Best on Desktop/Laptop", better: "vyop" },
  { feature: "GST Support", vyop: "Fully Supported", vyapar: "Fully Supported", better: "draw" },
  { feature: "Offline Mode", vyop: "Yes", vyapar: "Yes", better: "draw" },
  { feature: "AI Insights", vyop: "Automatic (Voice analysis)", vyapar: "Manual Reports", better: "vyop" },
];

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Vyapar</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Vyapar is powerful legacy software, but Vyop is built for <span className="font-bold">modern mobility</span>. 
            Why type when you can just talk?
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-[var(--shadow-md)] border border-[var(--border-subtle)] overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="py-6 text-lg font-bold">Feature</th>
                <th className="py-6 text-lg font-bold text-[var(--brand-primary)]">Vyop (AI)</th>
                <th className="py-6 text-lg font-bold text-gray-500">Vyapar</th>
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
                    {row.vyapar}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[var(--border-subtle)]">
            <h3 className="text-2xl font-bold mb-4">When to use Vyapar?</h3>
            <p className="text-[var(--text-secondary)]">
              Vyapar is suitable if you have a dedicated computer at your counter and a staff member 
              trained in traditional data entry and bookkeeping.
            </p>
          </div>
          <div className="bg-[var(--brand-glow)] p-8 rounded-3xl border border-[var(--brand-primary)]">
            <h3 className="text-2xl font-bold mb-4 text-[var(--brand-primary)]">The Vyop Edge</h3>
            <p className="text-[var(--text-secondary)]">
              Vyop is for the shopkeeper on the move. It turns your smartphone into a <strong>Voice-First POS</strong>. 
              It&apos;s built for the chaos of a busy Indian shop where you don&apos;t have time to type.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="https://vyop.shop" 
            className="inline-flex items-center px-10 py-5 rounded-2xl bg-[var(--brand-secondary)] text-white font-bold text-xl hover:scale-[1.02] transition-all shadow-[var(--shadow-gold)]"
          >
            Switch to AI Billing
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
                "name": "Can I use Vyop instead of Vyapar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Vyop is an excellent alternative to Vyapar, specifically designed to be faster and easier for mobile users who prefer speaking over typing."
                }
              },
              {
                "@type": "Question",
                "name": "Does Vyop support GST like Vyapar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Vyop fully supports GST billing, just like Vyapar. The difference is that with Vyop, you can generate GST bills using just your voice."
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
