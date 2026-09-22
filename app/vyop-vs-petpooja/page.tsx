import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Petpooja | Best Free Restaurant POS Alternative in India",
  description: "Compare Vyop vs Petpooja restaurant POS. Petpooja costs ₹12,000-₹25,000/yr with lock-in contracts. Vyop offers free voice KOT, table management, QR menus & GST billing for restaurants.",
  alternates: { canonical: "/vyop-vs-petpooja" },
  openGraph: { title: "Vyop vs Petpooja | Free Restaurant POS Alternative", url: "https://vyop.in/vyop-vs-petpooja" },
};

const comparison = [
  { feature: "Pricing", vyop: "Free to Start / ₹999/yr Pro", petpooja: "₹12,000 – ₹25,000/year + Setup Fee" },
  { feature: "Contract Lock-in", vyop: "No Contract. Cancel Anytime.", petpooja: "12-Month Minimum Lock-in" },
  { feature: "Hardware Required", vyop: "Any Android Phone or Tablet", petpooja: "Dedicated POS Terminal Required" },
  { feature: "Voice KOT Generation", vyop: "✅ Speak Orders ('2 Butter Naan, 1 Dal')", petpooja: "❌ Manual Touch/Tap Only" },
  { feature: "AI Visual Bakery & Item Scanner", vyop: "✅ Point phone camera at sweets/food to bill in 0.2s", petpooja: "❌ Manual Screen Tap Only" },
  { feature: "Smartphone Camera Barcode Scanner", vyop: "✅ Built-in Phone Camera Barcode POS (0.05s)", petpooja: "❌ Requires External USB Scanner" },
  { feature: "Table Management", vyop: "✅ Visual Table Status", petpooja: "✅ Advanced Table Management" },
  { feature: "QR Code Digital Menu", vyop: "✅ Free QR Table Menus", petpooja: "✅ Digital Menu (Paid Add-on)" },
  { feature: "Online Ordering (Direct)", vyop: "✅ 0% Commission Own Store", petpooja: "⚠️ Aggregator Integrations (Zomato/Swiggy)" },
  { feature: "Kitchen Printer", vyop: "✅ Bluetooth Thermal Printer", petpooja: "✅ Network Kitchen Printer" },
  { feature: "Split Billing", vyop: "✅ Split by Items or Amount", petpooja: "✅ Split Billing" },
  { feature: "GST Compliance", vyop: "✅ 5% / 18% Restaurant GST", petpooja: "✅ Full GST" },
  { feature: "WhatsApp Bills", vyop: "✅ Instant WhatsApp Receipts", petpooja: "⚠️ SMS/Email Only" },
  { feature: "Non-Restaurant Use", vyop: "✅ 22 Shop Types Supported", petpooja: "❌ Restaurant-Only" },
];

const faqs = [
  { question: "Is Petpooja free for restaurants?", answer: "No. Petpooja charges ₹12,000–₹25,000 per year with a mandatory 12-month lock-in contract, plus setup fees. Vyop allows you to start completely free, with full cloud sync Pro at just ₹999/year — saving you up to ₹24,000 every single year." },
  { question: "Can Vyop replace Petpooja for a small restaurant or cafe?", answer: "Yes! For small to medium restaurants, cafes, dhabas, cloud kitchens, and fast food outlets, Vyop provides voice KOT generation, table management, QR digital menus, split billing, and thermal kitchen printing — free to start, with ₹999/yr Pro cloud sync." },
  { question: "Does Vyop support Kitchen Order Tickets (KOT)?", answer: "Yes! Speak the order naturally ('Table 4: Two Butter Chicken, Three Garlic Naan') and Vyop generates a formatted KOT that automatically prints on your kitchen Bluetooth thermal printer." },
  { question: "Can I use Vyop for non-restaurant businesses too?", answer: "Yes! Unlike Petpooja which is restaurant-only, Vyop supports 22 types of businesses including kirana stores, clothing shops, pharmacies, jewellery stores, salons, supermarkets, hotels, and more." },
];

export default function VyopVsPetpoojaPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">Free Restaurant POS</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Petpooja</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Petpooja locks you into expensive annual contracts. <strong className="text-gray-900">Vyop gives you voice KOT, table management, and QR menus — free to start with ₹999/yr Pro cloud sync.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Petpooja</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">₹12,000 – ₹25,000/yr + Lock-in</div>
            <p className="text-sm text-gray-600">12-month mandatory contract with dedicated POS hardware. Restaurant-only. Setup fee extra.</p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">No Lock-in</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90">Voice KOT, table management, QR menus, split billing, thermal printing — all on your Android phone starting free. Works for 22 shop types.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead><tr className="border-b-2 border-gray-100"><th className="py-5 px-4 text-base font-bold">Feature</th><th className="py-5 px-4 text-base font-bold text-amber-600">Vyop POS</th><th className="py-5 px-4 text-base font-bold text-gray-500">Petpooja</th></tr></thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-5 px-4 font-semibold text-gray-900 text-sm">{row.feature}</td>
                    <td className="py-5 px-4 text-sm font-bold text-emerald-700">{row.vyop}</td>
                    <td className="py-5 px-4 text-gray-600 text-sm">{row.petpooja}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center bg-gray-900 text-white p-10 md:p-14 rounded-3xl mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Skip the Lock-in. Run Your Restaurant Free.</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">Voice KOT, table management, QR menus — all free on your phone.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.vyop.app" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-all shadow-md">Get on Google Play</a>
            <a href="https://vyop.shop" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all">Launch Web App</a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">{faqs.map((faq, idx) => (<div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"><h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4><p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p></div>))}</div>
        </div>
        <div className="mt-12 text-center"><Link href="/compare" className="text-sm font-bold text-amber-700 hover:text-amber-800 underline">View All Comparisons →</Link></div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <Footer />
    </main>
  );
}
