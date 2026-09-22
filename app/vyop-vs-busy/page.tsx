import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Busy Accounting | Free Mobile Alternative to Busy Software",
  description: "Compare Vyop vs Busy Accounting Software. Busy costs ₹12,000-₹30,000/yr and runs only on Windows desktop. Vyop is free to start on smartphone and desktop with voice AI billing and ₹999/yr Pro cloud sync.",
  alternates: { canonical: "/vyop-vs-busy" },
  openGraph: { title: "Vyop vs Busy Accounting | Free Mobile Alternative", url: "https://vyop.in/vyop-vs-busy" },
};

const comparison = [
  { feature: "Pricing", vyop: "Free to Start / ₹999/yr Pro", busy: "₹12,000 – ₹30,000/year" },
  { feature: "Platform", vyop: "Android Phone + Web (Any Device)", busy: "Windows Desktop Only" },
  { feature: "Mobile App", vyop: "✅ Full-Featured Android App", busy: "❌ No Mobile App" },
  { feature: "Billing Speed", vyop: "5 Seconds (Voice AI / Barcode Scan)", busy: "2-3 Minutes (Manual Keyboard)" },
  { feature: "Barcode Scanner", vyop: "✅ Phone Camera (0.05s)", busy: "❌ External USB Scanner Required" },
  { feature: "Scan Unbarcoded Products", vyop: "✅ AI Visual Scanner (Snap photo to bill in 0.2s)", busy: "❌ Not Available (Manual keyboard typing)" },
  { feature: "Voice Billing", vyop: "✅ Hindi, English & Hinglish", busy: "❌ Not Available" },
  { feature: "Learning Curve", vyop: "Zero — Any helper can use in 2 min", busy: "High — Requires accounting knowledge" },
  { feature: "WhatsApp Bills", vyop: "✅ 1-Tap WhatsApp Sharing", busy: "❌ Manual PDF Export" },
  { feature: "Online Storefront", vyop: "✅ 0% Commission Live Store", busy: "❌ Not Available" },
  { feature: "Cloud Backup", vyop: "✅ Automatic Cloud Sync", busy: "⚠️ Manual Backup to Drive" },
  { feature: "GST Compliance", vyop: "✅ Full GST (CGST/SGST/HSN)", busy: "✅ Full GST + Advanced Accounting" },
  { feature: "Best For", vyop: "Small-Medium Retail, Fast Billing", busy: "Medium-Large Business Accounting" },
];

const faqs = [
  { question: "Is Vyop a replacement for Busy Accounting?", answer: "For small and medium retail shops that need fast billing, inventory, and customer management, yes. If you primarily need enterprise-level accounting with trial balance, P&L, and balance sheet for your CA, Busy has deeper accounting features. But for daily retail billing speed and convenience, Vyop is 10x faster and starts completely free with ₹999/yr Pro cloud sync." },
  { question: "Does Busy work on mobile phones?", answer: "No. Busy Accounting is a Windows-only desktop software. It does not have a mobile app. Vyop works on any Android smartphone and also has a web app that works on any desktop browser." },
  { question: "Why is Busy so expensive?", answer: "Busy charges ₹12,000-₹30,000/year for a single-user license, with multi-user licenses costing even more. It also requires a dedicated Windows PC. Vyop offers free offline billing and an unbeatable ₹999/year Pro plan with cloud sync on your existing smartphone." },
];

export default function VyopVsBusyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">Free Mobile Alternative</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Busy Accounting</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Busy is built for chartered accountants on desktop PCs. <strong className="text-gray-900">Vyop is built for shopkeepers who need fast billing on their phone.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Busy Accounting</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">₹12,000 – ₹30,000/yr</div>
            <p className="text-sm text-gray-600">Windows-only desktop software requiring a dedicated PC, UPS, and accounting knowledge to operate.</p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">Shopkeeper Favourite</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90">Works on Android phones + any desktop browser. Voice billing, barcode scan, GST invoices, and cloud sync — free to start.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead><tr className="border-b-2 border-gray-100"><th className="py-5 px-4 text-base font-bold">Feature</th><th className="py-5 px-4 text-base font-bold text-amber-600">Vyop POS</th><th className="py-5 px-4 text-base font-bold text-gray-500">Busy Accounting</th></tr></thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-5 px-4 font-semibold text-gray-900 text-sm">{row.feature}</td>
                    <td className="py-5 px-4 text-sm font-bold text-emerald-700">{row.vyop}</td>
                    <td className="py-5 px-4 text-gray-600 text-sm">{row.busy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center bg-gray-900 text-white p-10 md:p-14 rounded-3xl mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Skip the ₹30,000 Busy License. Bill Free with Vyop.</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">No desktop PC, no accountant needed. Just your phone.</p>
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
