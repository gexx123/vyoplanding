import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import {
  Smartphone,
  Globe2,
  Scan,
  Printer,
  Receipt,
  Store,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Flame,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Free Mobile POS App & Barcode Scanner Worldwide | Vyop",
  },
  description:
    "Turn any smartphone into a supermarket barcode scanner & mobile POS. Multi-currency ($, €, £, AED, ₹), global tax, Bluetooth receipts & 0% fees. 100% Free.",
  alternates: { canonical: "/global-pos" },
  openGraph: {
    title: "Free Mobile POS App & Barcode Scanner Worldwide | Vyop POS",
    description:
      "Why spend $500 on hardware? Turn any smartphone into a retail barcode POS system. Multi-currency, global tax, Bluetooth receipt printing & 0% fee online store.",
    url: "https://vyop.in/global-pos",
    siteName: "Vyop POS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vyop POS Worldwide — Free Mobile POS & Barcode Scanner",
      },
    ],
    type: "website",
  },
  keywords: [
    "free mobile POS app",
    "turn phone into barcode scanner",
    "smartphone POS barcode scanner",
    "retail POS system free",
    "Square POS alternative free",
    "Loyverse alternative",
    "Clover alternative free",
    "Shopify POS alternative free",
    "multi currency POS system",
    "mobile billing app for small business",
    "free barcode scanner app for retail",
    "digital ledger credit book app",
    "receipt maker app",
    "POS app for US UK Canada Australia UAE Philippines",
  ],
};

const REGIONS = [
  {
    flag: "🇺🇸 🇨🇦",
    region: "United States & Canada",
    description:
      "Replace expensive Square readers and Clover terminals. Bill in USD ($) and CAD ($), configure state and provincial sales tax, and print 58mm/80mm thermal receipts without card processing lock-in.",
    features: ["Custom Sales Tax", "USD & CAD Support", "Digital SMS & Web Receipts", "0% Transaction Platform Cuts"],
    links: [
      { name: "United States POS", slug: "united-states" },
      { name: "Canada POS", slug: "canada" },
    ],
  },
  {
    flag: "🇬🇧 🇪🇺",
    region: "United Kingdom & Europe",
    description:
      "Fully compliant VAT invoice generation in GBP (£) and EUR (€). Run mobile food trucks, boutique retail, or specialty grocery stores with fast camera barcode scanning and offline inventory sync.",
    features: ["Standard & Reduced VAT Rates", "GBP & EUR Multi-Currency", "Bluetooth ESC/POS Printing", "Offline Checkout"],
    links: [
      { name: "United Kingdom POS", slug: "united-kingdom" },
    ],
  },
  {
    flag: "🇦🇪 🇸🇦",
    region: "Middle East & UAE (GCC)",
    description:
      "Built for retail souks, supermarkets, and fashion boutiques in Dubai, Abu Dhabi, and Riyadh. Generate 5% VAT compliant tax invoices in AED and SAR with instant bilingual product cataloging.",
    features: ["5% GCC VAT Invoices", "AED & SAR Currency", "Instant Photo AI Catalog", "Direct WhatsApp Bills"],
    links: [
      { name: "UAE & Dubai POS", slug: "uae" },
      { name: "Saudi Arabia POS", slug: "saudi-arabia" },
    ],
  },
  {
    flag: "🇦🇺 🇳🇿",
    region: "Australia & New Zealand",
    description:
      "Avoid hefty terminal rental fees. Point your phone camera to scan EAN/UPC barcodes, issue 10% GST compliant tax receipts in AUD/NZD, and launch a zero-commission online store catalog.",
    features: ["10% GST Compliant", "AUD & NZD Support", "Inventory Stock Alerts", "Zero Monthly Terminal Fees"],
    links: [
      { name: "Australia POS", slug: "australia" },
    ],
  },
  {
    flag: "🇵🇭 🇲🇾 🇸🇬",
    region: "Southeast Asia (ASEAN)",
    description:
      "Designed for sari-sari stores, night market vendors, and cafes across the Philippines, Malaysia, and Singapore. Manage credit ledgers (utang), QR payments, and quick barcode sales.",
    features: ["PHP, MYR, SGD Currencies", "Digital Credit Book (Utang/Baki)", "Instant WhatsApp Orders", "Works 100% Offline"],
    links: [
      { name: "Philippines POS", slug: "philippines" },
      { name: "Singapore POS", slug: "singapore" },
      { name: "Malaysia POS", slug: "malaysia" },
    ],
  },
  {
    flag: "🇿🇦 🇳🇬 🇰🇪",
    region: "Africa & Emerging Markets",
    description:
      "Ultra-lightweight mobile POS that runs seamlessly on budget smartphones without constant internet. Track customer balances, issue instant digital receipts, and avoid hardware costs.",
    features: ["ZAR, NGN, KES Support", "100% Offline Architecture", "Low-Data Bandwidth", "Automated Debt Reminders"],
    links: [
      { name: "South Africa POS", slug: "south-africa" },
      { name: "Nigeria POS", slug: "nigeria" },
      { name: "Kenya POS", slug: "kenya" },
    ],
  },
];

const COMPARISONS = [
  {
    category: "Hardware Investment",
    vyop: "$0 (Runs on your smartphone or PC browser)",
    traditional: "$300 – $1,200 (Proprietary terminals, card cradles & barcode guns)",
  },
  {
    category: "Barcode Scanning",
    vyop: "✅ Smartphone Camera Scan + AI Photo Recognition for unbarcoded goods",
    traditional: "Requires separate $80+ USB/Bluetooth laser scanner",
  },
  {
    category: "Software Subscription Cost",
    vyop: "Free to start | Pro from ₹49/month ($1/mo) or ₹999/year ($12/yr)",
    traditional: "$39 to $89+/month (Lightspeed, Shopify POS Pro, Loyverse add-ons)",
  },
  {
    category: "Payment & Processing Fees",
    vyop: "0% Platform Cut (Keep 100% of cash, direct UPI, or custom card gateways)",
    traditional: "2.6% to 3.5% + fixed cents deducted from every transaction",
  },
  {
    category: "Multi-Currency & Tax",
    vyop: "✅ Configurable for any currency ($, €, £, AED, ₹) and tax rate (VAT/GST/Sales Tax)",
    traditional: "Region-locked hardware or costly international upgrade plans",
  },
  {
    category: "Online Storefront",
    vyop: "✅ 60-Second live web storefront with 0% middleman delivery commission",
    traditional: "Separate $29 – $79/mo subscription (Shopify / BigCommerce / Square Online)",
  },
  {
    category: "Offline Capability",
    vyop: "✅ 100% local database with auto-sync when network reconnects",
    traditional: "Often freezes or locks checkout when Wi-Fi drops",
  },
];

const FAQS = [
  {
    q: "Can I use Vyop POS outside of India?",
    a: "Yes! Vyop POS is designed for global retail. You can configure your local currency (USD, EUR, GBP, AED, AUD, CAD, PHP, etc.), set custom tax percentages (VAT, Sales Tax, GST, or Tax-Free), and bill customers anywhere in the world.",
  },
  {
    q: "Do I need to purchase a physical barcode laser gun?",
    a: "No. Vyop turns your smartphone camera into a supermarket-grade barcode scanner. It recognizes standard 1D (EAN-13, UPC-A, Code-128) and 2D QR codes. If loose products don't have a barcode, Vyop's built-in AI identifies them from a quick photo.",
  },
  {
    q: "How does Vyop compare to Square, Clover, or Loyverse?",
    a: "Traditional POS systems like Square and Clover lock you into expensive proprietary card terminals ($299+) and charge 2.6%+ transaction fees. Loyverse charges $300+/year for inventory add-ons. Vyop is free to start on any phone, charges 0% transaction cuts on your own payments, and includes barcode scanning, AI item detection, and an online store. Pro is only ₹49/month ($1/mo) or ₹999/year ($12/yr).",
  },
  {
    q: "Does Vyop support receipt printers?",
    a: "Yes. Vyop connects via Bluetooth or USB to standard 58mm and 80mm ESC/POS thermal receipt printers. You can also send instant digital receipts via WhatsApp, SMS, or QR code.",
  },
  {
    q: "Does the app work without internet?",
    a: "Yes! Vyop is built offline-first. All your inventory, counter billing, and customer credit ledgers are saved locally on your device. When internet connects, data syncs automatically to the secure cloud.",
  },
];

export default function GlobalPOSPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Global Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-amber-50/50 via-white to-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Global Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-6">
            <Globe2 className="w-4 h-4 text-amber-600" />
            <span>Worldwide Mobile POS &amp; Barcode Scanner</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Turn Any Phone into a <br className="hidden sm:inline" />
            <span className="gradient-text">Retail Barcode POS</span> Worldwide
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-body">
            Stop paying thousands for bulky hardware terminals and credit card lock-in. Vyop is the free cross-platform barcode POS, multi-currency inventory scanner, and digital ledger built for independent businesses across <strong>100+ countries</strong>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black hover:bg-gray-800 text-white font-bold text-base shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <Smartphone className="w-5 h-5 text-amber-400" />
              Download Free Android App
            </a>
            <a
              href="https://vyop.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              Open Web POS (vyop.shop)
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </a>
          </div>

          {/* Quick Stat Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-600" /> Multi-Currency ($, €, £, AED, ₹)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-600" /> VAT &amp; Sales Tax Configurable
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-600" /> Works 100% Offline
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-600" /> 0% Transaction Fees
            </span>
          </div>
        </div>
      </section>

      {/* Global Regional Grid */}
      <section className="py-20 px-6 bg-gray-50/70 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              International Coverage
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tailored for Retail Corridors Around the World
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Whether you manage a boutique in California, a cafe in London, a convenience store in Dubai, or a sari-sari stall in Manila, Vyop adapts to your local business reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONS.map((r) => (
              <div
                key={r.region}
                className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3">{r.flag}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {r.region}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-body">
                    {r.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-100">
                  {r.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {r.links && r.links.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-2">
                    {r.links.map((link) => (
                      <Link
                        key={link.slug}
                        href={`/global-pos/${link.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        <span>{link.name}</span>
                        <span>→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware vs Vyop Comparison */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Cost &amp; Hardware Comparison
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why Global Merchants Are Ditching Traditional Terminals
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Legacy hardware brands lock you into high device costs and monthly leases. Vyop gives you an enterprise-grade retail POS from day one on your own devices.
            </p>
          </div>

          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-gray-900 text-white p-4 sm:p-5 text-sm font-bold">
              <div className="col-span-4 sm:col-span-3">Feature</div>
              <div className="col-span-4 sm:col-span-5 text-amber-400">Vyop Mobile POS</div>
              <div className="col-span-4 sm:col-span-4 text-gray-300">Legacy Terminal (Square / Clover)</div>
            </div>
            {COMPARISONS.map((row, i) => (
              <div
                key={row.category}
                className={`grid grid-cols-12 p-4 sm:p-5 text-sm items-center border-t border-gray-100 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <div className="col-span-4 sm:col-span-3 font-semibold text-gray-900">
                  {row.category}
                </div>
                <div className="col-span-4 sm:col-span-5 text-gray-800 font-medium pr-2">
                  {row.vyop}
                </div>
                <div className="col-span-4 sm:col-span-4 text-gray-500 text-xs sm:text-sm">
                  {row.traditional}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Frequently Asked Questions (Global Retail)
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Everything you need to know about setting up Vyop for your international store.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-7 font-body">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-20 px-6 bg-gray-900 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Start Billing on Your Smartphone in Under 60 Seconds
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed font-body">
            Join thousands of modern retail stores worldwide. Download free on Android or launch immediately in your web browser.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-base shadow-lg transition-all"
            >
              Get Started Free on Android
            </a>
            <a
              href="https://vyop.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base transition-all"
            >
              Open Web Terminal
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
