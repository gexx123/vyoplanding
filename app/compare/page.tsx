import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare Vyop vs Tally, Khatabook & Vyapar | Best Mobile POS App",
  description: "Compare Vyop against Tally Prime, Khatabook, Vyapar, and MyBillBook. See why Vyop's voice AI and smartphone barcode POS is 10x faster for Indian shopkeepers.",
  alternates: { canonical: '/compare' },
  openGraph: { url: 'https://vyop.in/compare' }
};

const comparisons = [
  {
    slug: "vyop-vs-khatabook",
    title: "Vyop vs Khatabook",
    badge: "Voice AI vs Ledger",
    summary: "Khatabook tracks debt, but Vyop handles fast billing & stock scanning with voice AI.",
    link: "/vyop-vs-khatabook",
  },
  {
    slug: "vyop-vs-vyapar",
    title: "Vyop vs Vyapar",
    badge: "Mobile Speed",
    summary: "Vyapar requires manual desktop typing. Vyop turns any smartphone camera into a POS barcode scanner.",
    link: "/vyop-vs-vyapar",
  },
  {
    slug: "tally",
    title: "Vyop vs Tally Prime",
    badge: "No Keyboard",
    summary: "Tally requires accounting training. Vyop works by speaking in Hindi or scanning barcodes.",
    link: "/vyop-vs-vyapar",
  },
  {
    slug: "mybillbook",
    title: "Vyop vs MyBillBook",
    badge: "0% Commission Store",
    summary: "Vyop offers 10 ways to add items and a 0% commission online storefront with Spin-The-Wheel rewards.",
    link: "/vyop-vs-khatabook",
  },
];

export default function CompareHubPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-36 pb-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            Software Comparison Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display mb-4">
            Vyop vs <span className="gradient-text">Legacy Billing Apps</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Compare Vyop against traditional accounting tools. See why voice-first billing and smartphone barcode POS is the future for Indian retail.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {comparisons.map((c, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold font-display text-gray-900">
                    {c.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
                    {c.badge}
                  </span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {c.summary}
                </p>
              </div>

              <Link
                href={c.link}
                className="inline-flex items-center gap-2 font-bold text-amber-700 hover:text-amber-800 text-sm"
              >
                Read Detailed Comparison →
              </Link>
            </div>
          ))}
        </div>

        {/* Master Comparison Table */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md overflow-x-auto">
          <h3 className="text-2xl font-bold font-display text-gray-900 mb-6">
            Master Feature Matrix (Vyop vs Alternatives)
          </h3>

          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b-2 border-gray-100 bg-gray-50/50">
                <th className="py-4 px-4 text-sm font-bold text-gray-700">Feature</th>
                <th className="py-4 px-4 text-sm font-bold text-amber-700 bg-amber-50/60 rounded-t-xl">Vyop (Voice AI)</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">Khatabook</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">Vyapar</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">Tally</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              <tr>
                <td className="py-4 px-4 font-semibold text-gray-900">Smartphone Camera POS Scanner</td>
                <td className="py-4 px-4 font-bold text-green-700 bg-amber-50/30">Built-in (Scan & Create Barcodes)</td>
                <td className="py-4 px-4 text-gray-600">Not Supported</td>
                <td className="py-4 px-4 text-gray-600">External Hardware Needed</td>
                <td className="py-4 px-4 text-gray-600">External Hardware Needed</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-gray-900">Billing Method</td>
                <td className="py-4 px-4 font-bold text-green-700 bg-amber-50/30">Voice AI (Hindi/English)</td>
                <td className="py-4 px-4 text-gray-600">Manual Typing</td>
                <td className="py-4 px-4 text-gray-600">Manual Touch/Keyboard</td>
                <td className="py-4 px-4 text-gray-600">Keyboard Shortcuts</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-gray-900">Ways to Add Items</td>
                <td className="py-4 px-4 font-bold text-green-700 bg-amber-50/30">10 Instant Ways</td>
                <td className="py-4 px-4 text-gray-600">1 Manual Way</td>
                <td className="py-4 px-4 text-gray-600">1 Manual Form</td>
                <td className="py-4 px-4 text-gray-600">Manual Master Entry</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-gray-900">Online Customer Storefront</td>
                <td className="py-4 px-4 font-bold text-green-700 bg-amber-50/30">0% Commission + Spin Wheel</td>
                <td className="py-4 px-4 text-gray-600">Basic Link</td>
                <td className="py-4 px-4 text-gray-600">PDF Catalog Link</td>
                <td className="py-4 px-4 text-gray-600">None</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </main>
  );
}
