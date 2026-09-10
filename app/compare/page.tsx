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
    slug: "vyop-vs-loyverse",
    title: "Vyop vs Loyverse POS",
    badge: "₹999/yr vs $660/yr Add-ons",
    summary: "Loyverse charges $5-$25/mo per add-on without Indian GST or UPI. Vyop gives you Voice AI, GST, and cloud sync starting free.",
    link: "/vyop-vs-loyverse",
  },
  {
    slug: "vyop-vs-square",
    title: "Vyop vs Square POS",
    badge: "Zero Fee vs 2.6% Cut",
    summary: "Square requires costly hardware and cuts 2.6% + 10¢ per transaction without UPI. Vyop runs free on any Android phone.",
    link: "/vyop-vs-square",
  },
  {
    slug: "vyop-vs-petpooja",
    title: "Vyop vs Petpooja",
    badge: "₹999/yr vs ₹15,000/yr",
    summary: "Petpooja locks restaurants into expensive annual subscriptions. Vyop offers voice KOT, table billing, and online ordering starting free.",
    link: "/vyop-vs-petpooja",
  },
  {
    slug: "vyop-vs-marg",
    title: "Vyop vs Marg ERP 9+",
    badge: "Zero PC vs ₹15,000 Dongle",
    summary: "Marg requires dedicated Windows PCs, hardware dongles, and AMC fees. Vyop gives you mobile camera barcode scanning on any smartphone.",
    link: "/vyop-vs-marg",
  },
  {
    slug: "vyop-vs-pinelabs",
    title: "Vyop vs Pine Labs POS",
    badge: "Zero Rental vs ₹1,000/mo",
    summary: "Pine Labs charges monthly hardware rentals and card swipe MDR cuts. Vyop turns any phone into a POS with 0% UPI fees.",
    link: "/vyop-vs-pinelabs",
  },
  {
    slug: "vyop-vs-nukkadshops",
    title: "Vyop vs Nukkad Shops",
    badge: "Pocket Phone vs ₹35,000 Machine",
    summary: "Nukkad Shops charges ₹25,000-₹45,000 for bulky hardware terminals. Vyop delivers mall-grade camera barcode scanning on mobile.",
    link: "/vyop-vs-nukkadshops",
  },
  {
    slug: "vyop-vs-zoho",
    title: "Vyop vs Zoho Books",
    badge: "Retail Speed vs B2B Desk",
    summary: "Zoho is built for corporate desk accounting. Vyop gives retail counters 5-second checkout, camera barcode POS, and offline mode.",
    link: "/vyop-vs-zoho",
  },
  {
    slug: "vyop-vs-swipe",
    title: "Vyop vs Swipe Billing",
    badge: "Voice AI vs Paid Tier",
    summary: "Swipe charges ₹1,299-₹3,999/yr for premium features. Vyop includes Voice AI in Hindi, camera POS, and clean invoices starting free.",
    link: "/vyop-vs-swipe",
  },
  {
    slug: "vyop-vs-posist",
    title: "Vyop vs POSist (Restroworks)",
    badge: "₹999/yr vs ₹30,000/yr Outlet",
    summary: "POSist charges enterprise fees per outlet. Vyop gives cafes and restaurants voice KOT, table management, and QR ordering starting free.",
    link: "/vyop-vs-posist",
  },
  {
    slug: "vyop-vs-clover",
    title: "Vyop vs Clover POS",
    badge: "Made for India vs $599+",
    summary: "Clover requires imported $599+ hardware and monthly fees without Indian GST or UPI. Vyop runs directly on your Android phone.",
    link: "/vyop-vs-clover",
  },
  {
    slug: "vyop-vs-shopify",
    title: "Vyop vs Shopify POS",
    badge: "0% Commission vs $39-$89/mo",
    summary: "Shopify charges recurring USD fees and transaction cuts. Vyop gives you both a camera POS and a 0% commission online store starting free.",
    link: "/vyop-vs-shopify",
  },
  {
    slug: "vyop-vs-busy",
    title: "Vyop vs Busy Accounting",
    badge: "Mobile Speed vs Windows PC",
    summary: "Busy costs ₹12,000+ and locks you to desktop. Vyop gives you instant camera barcode scanning & voice billing on mobile.",
    link: "/vyop-vs-busy",
  },
  {
    slug: "vyop-vs-khatabook",
    title: "Vyop vs Khatabook",
    badge: "Voice AI vs Simple Ledger",
    summary: "Khatabook tracks debt, but Vyop handles fast billing, thermal printing, barcode scanning, and stock alerts.",
    link: "/vyop-vs-khatabook",
  },
  {
    slug: "vyop-vs-vyapar",
    title: "Vyop vs Vyapar",
    badge: "Mobile Barcode Scanner",
    summary: "Vyapar charges after trial and demands desktop typing. Vyop turns any smartphone camera into a high-speed barcode POS.",
    link: "/vyop-vs-vyapar",
  },
  {
    slug: "vyop-vs-tally",
    title: "Vyop vs Tally Prime",
    badge: "No Keyboard or Training",
    summary: "Tally requires accounting training and a PC. Vyop works on your phone by speaking in Hindi or scanning barcodes.",
    link: "/vyop-vs-tally",
  },
  {
    slug: "vyop-vs-mybillbook",
    title: "Vyop vs MyBillBook",
    badge: "0% Commission Store",
    summary: "Vyop offers 10 ways to add items and a 0% commission online storefront with Spin-The-Wheel customer rewards.",
    link: "/vyop-vs-mybillbook",
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
            Vyop vs <span className="gradient-text">Top POS & Billing Apps</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Compare Vyop against global and Indian POS software. See why camera barcode scanning, voice AI in Hindi, and ₹999/yr Pro cloud sync make Vyop the smarter choice for retail shops.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/pos-app"
              className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
            >
              ⭐ Complete POS App Overview
            </Link>
            <Link
              href="/best-billing-software-india"
              className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 transition-colors"
            >
              10 Best Billing Software Guide
            </Link>
            <Link
              href="/best-pos-software-india"
              className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 transition-colors"
            >
              10 Best POS Systems Guide
            </Link>
          </div>
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
            Master Feature Matrix (Vyop vs Top Alternatives)
          </h3>

          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b-2 border-gray-100 bg-gray-50/50">
                <th className="py-4 px-4 text-sm font-bold text-gray-700">Feature</th>
                <th className="py-4 px-4 text-sm font-bold text-amber-700 bg-amber-50/60 rounded-t-xl">Vyop</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">Loyverse</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">Square</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">Petpooja</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">Vyapar</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">Tally</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              <tr>
                <td className="py-4 px-4 font-semibold text-gray-900">Base Price</td>
                <td className="py-4 px-4 font-bold text-green-700 bg-amber-50/30">Free / ₹999/yr Pro</td>
                <td className="py-4 px-4 text-gray-600">$5-$25/mo add-ons</td>
                <td className="py-4 px-4 text-gray-600">2.6% + 10¢ fee</td>
                <td className="py-4 px-4 text-gray-600">₹12,000-₹25,000/yr</td>
                <td className="py-4 px-4 text-gray-600">₹3,000-₹6,000/yr</td>
                <td className="py-4 px-4 text-gray-600">₹22,500+ GST</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-gray-900">Smartphone Camera Barcode POS</td>
                <td className="py-4 px-4 font-bold text-green-700 bg-amber-50/30">Built-in (Free)</td>
                <td className="py-4 px-4 text-gray-600">Basic</td>
                <td className="py-4 px-4 text-gray-600">Hardware reader req.</td>
                <td className="py-4 px-4 text-gray-600">Hardware gun req.</td>
                <td className="py-4 px-4 text-gray-600">External gun req.</td>
                <td className="py-4 px-4 text-gray-600">External gun req.</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-gray-900">Voice AI Billing (Hindi/English)</td>
                <td className="py-4 px-4 font-bold text-green-700 bg-amber-50/30">Yes (Instant)</td>
                <td className="py-4 px-4 text-red-500">No</td>
                <td className="py-4 px-4 text-red-500">No</td>
                <td className="py-4 px-4 text-red-500">No</td>
                <td className="py-4 px-4 text-red-500">No</td>
                <td className="py-4 px-4 text-red-500">No</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-gray-900">Indian GST & Dynamic UPI QR</td>
                <td className="py-4 px-4 font-bold text-green-700 bg-amber-50/30">Yes (Auto CGST/SGST)</td>
                <td className="py-4 px-4 text-yellow-600">Manual Tax Only</td>
                <td className="py-4 px-4 text-red-500">US Centric</td>
                <td className="py-4 px-4 text-green-700">Yes (Restaurant only)</td>
                <td className="py-4 px-4 text-green-700">Yes</td>
                <td className="py-4 px-4 text-green-700">Yes</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-gray-900">Free Online Storefront</td>
                <td className="py-4 px-4 font-bold text-green-700 bg-amber-50/30">0% Commission + Rewards</td>
                <td className="py-4 px-4 text-red-500">Paid e-commerce</td>
                <td className="py-4 px-4 text-gray-600">Square Online (fees)</td>
                <td className="py-4 px-4 text-gray-600">Paid Add-on</td>
                <td className="py-4 px-4 text-gray-600">Basic catalog</td>
                <td className="py-4 px-4 text-red-500">No</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-gray-900">Hardware Independence</td>
                <td className="py-4 px-4 font-bold text-green-700 bg-amber-50/30">100% Mobile Phone</td>
                <td className="py-4 px-4 text-gray-600">Mobile/Tablet</td>
                <td className="py-4 px-4 text-gray-600">Proprietary Terminal</td>
                <td className="py-4 px-4 text-gray-600">Desktop / POS Machine</td>
                <td className="py-4 px-4 text-gray-600">Desktop / Mobile</td>
                <td className="py-4 px-4 text-gray-600">Desktop PC only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </main>
  );
}
