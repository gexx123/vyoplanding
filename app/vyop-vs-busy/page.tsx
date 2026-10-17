import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ComparisonDisclaimer from "@/components/legal/ComparisonDisclaimer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Vyop vs Busy Accounting: Free Mobile Alternative | Vyop",
  },
  description: "Compare Vyop vs Busy Accounting. Skip ₹7,200+/yr desktop license fees. Vyop offers free phone barcode scanning, Voice AI & GST reports for ₹999/yr. Free to start.",
  alternates: { canonical: "/vyop-vs-busy" },
  openGraph: { title: "Vyop vs Busy Accounting: Free Mobile Alternative | Vyop", url: "https://vyop.in/vyop-vs-busy", siteName: "Vyop POS" },
};

const comparison = [
  { feature: "Pricing Model", vyop: "Free to Start / ₹999/yr Pro", busy: "Basic from ~₹7,200/yr / Standard ₹13,500+ Perpetual" },
  { feature: "Primary Platform", vyop: "Android Phone + Web App (vyop.shop)", busy: "Windows Desktop Software" },
  { feature: "Mobile Companion", vyop: "✅ Core Smartphone POS App", busy: "Mobile App for Reports & Booking" },
  { feature: "Primary Billing Workflow", vyop: "Voice AI (Hindi/EN) + Phone Camera Barcode", busy: "Keyboard Vouchers & Shortcut Data Entry" },
  { feature: "Barcode Scanner Setup", vyop: "✅ Built-in Phone Camera Barcode Scanner", busy: "Compatible with External USB/BT Scanners" },
  { feature: "Scan Unbarcoded Products", vyop: "✅ Built-in AI Visual Recognition", busy: "Not Supported" },
  { feature: "Voice Billing", vyop: "✅ Hindi, English & Hinglish", busy: "Not Supported" },
  { feature: "Operational Learning Curve", vyop: "Minimal — Quick Counter Checkout", busy: "Accounting & Voucher Training Required" },
  { feature: "WhatsApp Digital Invoices", vyop: "✅ 1-Tap Direct WhatsApp Bills with UPI QR", busy: "Supported via Document Sharing" },
  { feature: "Online Storefront", vyop: "✅ 0% Commission Live Storefront", busy: "Not Native" },
  { feature: "Cloud Backup", vyop: "✅ Automatic Cloud Sync (Pro)", busy: "Local DB with Backup Utilities" },
  { feature: "GST Compliance & Accounting", vyop: "✅ Full GST (CGST/SGST/HSN) Summaries", busy: "✅ Advanced Multi-Location Accounting" },
  { feature: "Target Focus", vyop: "Retail Counters, Kirana & Fast Checkout", busy: "SME & Enterprise Financial Bookkeeping" },
];

const faqs = [
  { question: "Is Vyop a replacement for Busy Accounting?", answer: "For small and medium retail shops that need fast counter billing, inventory, and customer management, yes. If your enterprise requires deep accounting ledgers, advanced multi-branch balance sheets, and chartered accountant auditing, Busy provides robust financial bookkeeping. For daily retail counter speed and mobile accessibility, Vyop provides instant setup starting free with ₹999/yr Pro cloud sync." },
  { question: "Does Busy work on mobile phones?", answer: "Busy is designed primarily as desktop accounting software and offers a mobile companion app for reporting and field order booking. Vyop is built mobile-first on Android with a browser web app (vyop.shop) for front-counter cashier checkout." },
  { question: "How does Busy's pricing compare to Vyop?", answer: "Busy editions start from ~₹7,200 for Basic plans and scale up to ₹19,800+ for multi-user setups. Vyop offers a free offline tier and an affordable ₹999/year Pro plan with cloud sync across devices." },
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
            <div className="text-3xl font-extrabold text-red-600 mb-4">From ~₹7,200/yr (Basic)</div>
            <p className="text-sm text-gray-600">Established desktop accounting software with companion mobile app. Tailored for SME voucher ledgers and financial audit bookkeeping.</p>
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
          <p className="text-xs text-gray-400 mt-6 text-center">
            * Comparative analysis based on publicly available documentation as of October 2026. Busy is a registered trademark of Busy Infotech Pvt. Ltd.
          </p>
        </div>

        <div className="text-center bg-gray-900 text-white p-10 md:p-14 rounded-3xl mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Fast Mobile &amp; Web Retail POS</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">Scan barcodes with your phone, speak bills by voice, and print receipts instantly.</p>
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

        {/* Legal Disclaimer */}
        <ComparisonDisclaimer
          competitorName="Busy Accounting"
          companyName="Busy Infotech Pvt. Ltd."
          lastUpdated="October 2026"
        />
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <Footer />
    </main>
  );
}
