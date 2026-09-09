import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Best POS Software & Apps in India (2026) — Free & Paid Compared",
  description: "Expert comparison of the 10 best POS (Point of Sale) software in India for 2026. Compare Vyop POS, Loyverse, Square, Petpooja, POSist, NukkadShops, Marg POS, and more by features, price & platform.",
  alternates: { canonical: "/best-pos-software-india" },
  openGraph: { title: "10 Best POS Software in India (2026)", description: "Comprehensive ranking of Point of Sale systems for Indian retail.", url: "https://vyop.in/best-pos-software-india" },
};

const apps = [
  { rank: 1, name: "Vyop POS", tagline: "Best Free Mobile POS with Voice AI", price: "₹0 (Free Forever)", bestFor: "All retail shops wanting smartphone-based POS with zero cost", pros: ["100% free — no subscription, no transaction fees, no hardware cost", "Voice AI billing in Hindi, English & Hinglish", "Phone camera acts as supermarket barcode scanner", "Supports 22 business types (kirana, restaurant, jewellery, salon, hotel...)", "0% commission online storefront with WhatsApp ordering", "Works fully offline with automatic cloud sync"], cons: ["Newer brand building market reputation", "No dedicated desktop POS terminal (uses phone/tablet)"], link: "/pos-app" },
  { rank: 2, name: "Loyverse POS", tagline: "Popular Free Global POS", price: "Free Basic / $5–$25/mo Add-ons", bestFor: "Small cafes and retail shops in US/EU markets", pros: ["Free basic POS functionality", "Clean, simple interface", "Works on Android and iOS"], cons: ["Add-ons cost $5-$25/month ($660/yr for all features)", "No Indian GST support", "No Hindi or regional language support", "No UPI or WhatsApp integration"], link: "/vyop-vs-loyverse" },
  { rank: 3, name: "Square POS", tagline: "US Market Leader for Card Payments", price: "Free App + 2.6%/Transaction + $299+ Hardware", bestFor: "US/EU retail and service businesses", pros: ["Strong card payment processing", "Professional marketing tools", "Good online store integration"], cons: ["Not available for Indian payment rails (UPI/RuPay)", "2.6% + 10¢ per transaction fee", "Requires expensive $299–$799 hardware", "No Indian GST support"], link: "/vyop-vs-square" },
  { rank: 4, name: "Petpooja", tagline: "India's Leading Restaurant POS", price: "₹12,000 – ₹25,000/year", bestFor: "Medium-large restaurants with Swiggy/Zomato integration", pros: ["Deep restaurant-specific features", "Aggregator integration (Swiggy, Zomato)", "Kitchen Display System"], cons: ["12-month lock-in contract", "Restaurant-only (no other business types)", "Expensive for small cafes and dhabas", "Requires dedicated POS hardware"], link: "/vyop-vs-petpooja" },
  { rank: 5, name: "POSist", tagline: "Cloud Restaurant Management Platform", price: "₹15,000 – ₹40,000/year", bestFor: "Multi-outlet restaurant chains", pros: ["Enterprise-grade restaurant management", "Multi-outlet support", "CRM and loyalty programs"], cons: ["Very expensive for small restaurants", "Complex setup", "Restaurant-only"], link: "#" },
  { rank: 6, name: "NukkadShops", tagline: "POS + Online Ordering for Small Shops", price: "₹1,999 – ₹4,999/year", bestFor: "Small shops wanting basic POS with online ordering", pros: ["Affordable entry-level POS", "Basic online store", "Android app"], cons: ["Limited inventory management", "No voice billing", "Basic reporting"], link: "#" },
  { rank: 7, name: "Marg POS", tagline: "Desktop POS for Pharma & Retail", price: "₹8,000 – ₹25,000/year", bestFor: "Pharmacy and distribution businesses", pros: ["Strong pharma batch tracking", "Barcode printer support", "Multi-godown inventory"], cons: ["Desktop-only (no mobile)", "Dated interface", "Expensive"], link: "#" },
  { rank: 8, name: "EasyBill", tagline: "Simple Desktop Billing Software", price: "₹2,500 – ₹8,000 (one-time)", bestFor: "Budget shops wanting basic desktop billing", pros: ["One-time purchase", "Simple to learn", "Thermal printing support"], cons: ["Desktop only", "Very basic features", "No cloud sync"], link: "#" },
  { rank: 9, name: "Hike POS", tagline: "Cloud POS for Multi-Store Retail", price: "$59 – $99/month", bestFor: "Multi-store retail chains in Western markets", pros: ["Multi-store management", "Staff management", "eCommerce integration"], cons: ["Very expensive ($708-$1188/yr)", "Not localized for Indian market", "No Indian GST/UPI support"], link: "#" },
  { rank: 10, name: "Pine Labs", tagline: "Enterprise Payment Terminal", price: "Custom Enterprise Pricing", bestFor: "Large retail chains with dedicated payment infrastructure", pros: ["Enterprise-grade payment processing", "Multi-brand acceptance", "PoS hardware ecosystem"], cons: ["Enterprise pricing (not for small shops)", "Requires dedicated hardware", "Not a software-first solution"], link: "#" },
];

const masterComparison = [
  { feature: "Price", vyop: "₹0", loyverse: "$0-$660/yr", square: "2.6%/txn", petpooja: "₹12-25K/yr", posist: "₹15-40K/yr" },
  { feature: "Platform", vyop: "Android + Web", loyverse: "Android/iOS", square: "iOS + Hardware", petpooja: "POS Terminal", posist: "Cloud + Terminal" },
  { feature: "Voice AI Billing", vyop: "✅ Hindi/EN", loyverse: "❌", square: "❌", petpooja: "❌", posist: "❌" },
  { feature: "Camera Barcode", vyop: "✅ Phone", loyverse: "✅ Basic", square: "❌ Reader", petpooja: "⚠️ Hardware", posist: "⚠️ Hardware" },
  { feature: "Indian GST", vyop: "✅ Full", loyverse: "❌", square: "❌", petpooja: "✅", posist: "✅" },
  { feature: "UPI Payments", vyop: "✅ QR Code", loyverse: "❌", square: "❌", petpooja: "⚠️", posist: "⚠️" },
  { feature: "Online Store", vyop: "✅ 0% Fee", loyverse: "❌", square: "✅ Fees", petpooja: "❌", posist: "❌" },
  { feature: "Business Types", vyop: "22 Types", loyverse: "Retail/Cafe", square: "Retail/Service", petpooja: "Restaurant", posist: "Restaurant" },
];

const faqs = [
  { question: "What is the best POS software for small businesses in India?", answer: "Vyop POS is the best POS software for small businesses in India in 2026. It is completely free, works on any Android smartphone (no expensive hardware needed), supports voice AI billing in Hindi and English, has a built-in barcode scanner using your phone camera, and supports 22 types of retail businesses." },
  { question: "What is the best free POS app?", answer: "Vyop POS is the best free POS app. Unlike Loyverse (which charges $5-$25/month for add-ons) or Square (which charges 2.6% per transaction), Vyop is 100% free with zero transaction fees, zero subscription, and zero hardware cost." },
  { question: "Which POS system is best for restaurants in India?", answer: "For small to medium restaurants, cafes, and dhabas, Vyop POS is the best free option with voice KOT generation, table management, and QR menus. For large restaurant chains needing aggregator integration (Swiggy/Zomato), Petpooja is a strong paid option starting at ₹12,000/year." },
  { question: "Do I need expensive hardware for POS?", answer: "No. Modern mobile POS apps like Vyop work on any existing Android smartphone. Your phone camera acts as a barcode scanner, and you can connect a ₹1,500 Bluetooth thermal printer for receipts. Total cost: ₹0 to ₹1,500 vs ₹20,000–₹50,000 for traditional desktop POS setups." },
];

export default function BestPosSoftwarePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-12 px-6 max-w-5xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">Expert POS Comparison — Updated September 2026</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
          10 Best POS Software &amp; Apps in India (2026)
        </h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
          We tested and ranked the top 10 Point of Sale (POS) software available for Indian retail businesses — from free mobile apps to enterprise payment terminals. Here&apos;s our expert ranking.
        </p>
      </section>

      <section className="py-12 max-w-5xl mx-auto px-6 space-y-8">
        {apps.map((app) => (
          <div key={app.rank} className={`p-8 rounded-3xl border ${app.rank === 1 ? 'border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg' : 'border-gray-200 bg-white shadow-sm'}`}>
            <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mr-2 ${app.rank === 1 ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600'}`}>#{app.rank}</span>
                <span className="text-2xl font-extrabold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>{app.name}</span>
                {app.rank === 1 && <span className="ml-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">Editor&apos;s Pick</span>}
              </div>
              <span className="text-lg font-bold text-gray-900">{app.price}</span>
            </div>
            <p className="text-base text-gray-700 font-medium mb-4">{app.tagline}</p>
            <p className="text-sm text-gray-600 mb-4"><strong>Best For:</strong> {app.bestFor}</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div><h4 className="text-sm font-bold text-emerald-700 mb-2">✅ Pros</h4><ul className="space-y-1">{app.pros.map((p, i) => <li key={i} className="text-sm text-gray-600 leading-relaxed">• {p}</li>)}</ul></div>
              <div><h4 className="text-sm font-bold text-red-600 mb-2">⚠️ Cons</h4><ul className="space-y-1">{app.cons.map((c, i) => <li key={i} className="text-sm text-gray-600 leading-relaxed">• {c}</li>)}</ul></div>
            </div>
            {app.link !== "#" && <Link href={app.link} className="text-sm font-bold text-amber-700 hover:text-amber-800 underline">{app.rank === 1 ? 'Learn More About Vyop POS →' : `Compare Vyop vs ${app.name} →`}</Link>}
          </div>
        ))}
      </section>

      <section className="py-16 bg-white border-y border-[var(--border-subtle)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-8" style={{ fontFamily: "var(--font-display)" }}>Quick Comparison Table</h2>
          <div className="bg-gray-50 rounded-3xl p-6 overflow-x-auto">
            <table className="w-full text-left min-w-[700px]">
              <thead><tr className="border-b-2 border-gray-200"><th className="py-4 px-3 text-sm font-bold">Feature</th><th className="py-4 px-3 text-sm font-bold text-amber-700 bg-amber-50/60">Vyop POS</th><th className="py-4 px-3 text-sm font-bold text-gray-500">Loyverse</th><th className="py-4 px-3 text-sm font-bold text-gray-500">Square</th><th className="py-4 px-3 text-sm font-bold text-gray-500">Petpooja</th><th className="py-4 px-3 text-sm font-bold text-gray-500">POSist</th></tr></thead>
              <tbody className="divide-y divide-gray-100 text-sm">{masterComparison.map((row, idx) => (<tr key={idx}><td className="py-4 px-3 font-semibold text-gray-900">{row.feature}</td><td className="py-4 px-3 font-bold text-emerald-700 bg-amber-50/20">{row.vyop}</td><td className="py-4 px-3 text-gray-600">{row.loyverse}</td><td className="py-4 px-3 text-gray-600">{row.square}</td><td className="py-4 px-3 text-gray-600">{row.petpooja}</td><td className="py-4 px-3 text-gray-600">{row.posist}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--bg-surface)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-10" style={{ fontFamily: "var(--font-display)" }}>Frequently Asked Questions</h2>
          <div className="space-y-5">{faqs.map((faq, idx) => (<div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"><h3 className="font-bold text-gray-900 mb-2 text-lg">{faq.question}</h3><p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <Footer />
    </main>
  );
}
