import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Mic,
  Scan,
  Camera,
  Sparkles,
  Zap,
  CheckCircle2,
  Receipt,
  Printer,
  Smartphone,
  ArrowRight,
  TrendingUp,
  Store,
  FileSpreadsheet,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "AI Billing Software & Voice POS App for Retail | Vyop",
  },
  description:
    "Free AI billing software & voice POS app. Create bills in 5 seconds by voice, scan barcodes with phone camera & manage inventory with AI. Free to start.",
  alternates: { canonical: "/ai-billing-software" },
  openGraph: {
    title: "AI Billing Software & Voice POS App for Retail | Vyop",
    description: "The world's smartest AI mobile POS: voice-to-bill in 5 seconds, phone camera barcode scanning, and AI supplier invoice extraction. Free to start.",
    url: "https://vyop.in/ai-billing-software",
    siteName: "Vyop POS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vyop AI Billing Software & Voice POS App",
      },
    ],
    type: "website",
  },
  keywords: [
    "ai billing software",
    "voice pos app",
    "voice billing software",
    "ai barcode scanner for retail",
    "smart billing app with voice recognition",
    "ai inventory management for retail shops",
    "free ai pos app",
    "voice invoicing mobile app",
    "turn phone into ai barcode scanner",
    "ai invoice extraction app",
  ],
};

const aiFeatures = [
  {
    icon: Mic,
    title: "Voice AI Invoicing in 5 Seconds",
    tagline: "Speak Naturally in Hindi, English or Hinglish",
    description: "Simply tap the AI Orb and speak customer orders: 'Do kilo cheeni, teen packet Maggi aur ek refined oil'. Vyop parses quantities, applies unit rates, calculates taxes, and generates formatted bills instantly without manual typing.",
    badge: "Voice-to-Bill Engine",
  },
  {
    icon: Scan,
    title: "Phone Camera Barcode Scanner",
    tagline: "Supermarket Speed Without Buying Hardware",
    description: "Point your smartphone camera at any 1D or 2D barcode (UPC, EAN-13, Code 128). Reads labels in under 150ms with automatic price lookup and instant line-item addition.",
    badge: "Computer Vision",
  },
  {
    icon: Camera,
    title: "AI Invoice Scanner (Photo-to-Stock)",
    tagline: "Import Supplier Bills in 30 Seconds",
    description: "Take a photo of any printed or PDF supplier distributor bill. Vyop's optical AI extracts item names, quantities, purchase rates, and MRP directly into your inventory ledger.",
    badge: "Document AI",
  },
  {
    icon: Sparkles,
    title: "AI Visual Item Recognition",
    tagline: "Bill Loose & Unbarcoded Products",
    description: "Snap a photo of unpackaged bakery items, loose fruits, pulses, or clothing without price tags. Vyop recognizes the product category and retrieves your saved selling rate.",
    badge: "Object Detection",
  },
];

const faqs = [
  {
    question: "What is AI billing software and how does it work?",
    answer: "AI billing software replaces slow manual keypad data entry with artificial intelligence. In Vyop, you can create bills by speaking (Voice AI), scanning barcodes with your smartphone camera (Computer Vision), and uploading supplier invoices to auto-populate inventory (Document AI) in seconds."
  },
  {
    question: "Does the Voice AI work in Hindi and Indian regional languages?",
    answer: "Yes! Vyop's voice engine is optimized specifically for retail counter speech in Hindi, Indian English, and Hinglish. It accurately understands complex product names, mixed units (grams, kg, liters, packets), and calculates totals automatically."
  },
  {
    question: "How much does Vyop AI billing software cost?",
    answer: "Vyop is 100% free to start on your mobile phone with offline billing, camera barcode scanning, and basic inventory. For multi-device desktop PC synchronization and automated cloud backup, Vyop Pro is only ₹49/month or ₹999/year (approx. $1/month or $12/year internationally)."
  },
  {
    question: "Do I need special AI hardware or expensive computers?",
    answer: "None! Vyop runs directly on any Android smartphone, tablet, or web browser (vyop.shop). You can connect any affordable ₹1,500 ($25) Bluetooth thermal printer to print physical customer receipts."
  },
  {
    question: "Can I use Vyop AI POS offline without internet?",
    answer: "Yes. Vyop is built offline-first. Even if you lose internet connection during a storm or busy rush hour, you can continue scanning barcodes, adding items, and generating bills locally. Everything syncs to the cloud automatically once internet reconnects."
  }
];

export default function AiBillingSoftwarePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-900 text-sm font-bold mb-6">
          <Sparkles className="w-4 h-4 text-emerald-600" /> Next-Generation Retail POS Architecture
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          The World's Smartest <br />
          <span className="gradient-text">AI Billing Software &amp; Voice POS</span>
        </h1>

        <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed">
          Why waste hours typing item codes and searching dropdowns? Speak bills naturally in Hindi or English, scan barcodes with your smartphone camera, and auto-import distributor invoices with AI.
        </p>

        {/* Pricing Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-white border border-gray-200 shadow-sm text-sm font-semibold text-gray-800 mb-10">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>100% Free to Start</span>
          <span className="text-gray-300">|</span>
          <span>Pro at ₹49/month ($1/mo) / ₹999/year</span>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-16">
          <Link
            href="https://vyop.shop"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-200"
          >
            Launch Web Counter (vyop.shop)
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-gray-300 text-gray-800 font-bold text-lg hover:bg-gray-50 transition-all"
          >
            Download Free Android App
          </Link>
        </div>

        {/* Quick Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-gray-200/80">
          <div>
            <div className="text-3xl font-extrabold text-slate-900">5 Sec</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Average Bill Speed</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-emerald-600">₹0</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Hardware Needed</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">150 ms</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Barcode Scan Latency</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">0%</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Online Store Fees</div>
          </div>
        </div>
      </section>

      {/* 4 AI Superpowers Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold text-sm tracking-wider uppercase">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Four AI Superpowers for Every Shopkeeper
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the tools that cut cashier lines in half and eliminate late-night manual data entry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {aiFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{feat.title}</h3>
                <div className="text-emerald-700 text-sm font-semibold mb-3">{feat.tagline}</div>
                <p className="text-gray-600 leading-relaxed">{feat.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12" style={{ fontFamily: "var(--font-display)" }}>
          Frequently Asked Questions About AI Billing
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="p-12 rounded-3xl bg-slate-900 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Step Into the Future of Retail Billing</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Upgrade your store counter with Voice AI, camera barcode scanning, and 0% commission online ordering.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://vyop.shop"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
            >
              Start Free on Web (vyop.shop)
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-colors"
            >
              Get Android App
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
