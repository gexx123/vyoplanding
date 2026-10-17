import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import {
  Smartphone,
  Printer,
  Scan,
  Zap,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Store,
  Receipt,
  HelpCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Free Billing Machine App for Retail Shops & POS | Vyop",
  },
  description:
    "Turn your phone into a modern touchscreen billing machine. Scan barcodes, print thermal receipts & create GST bills without ₹15,000 hardware. Free to start.",
  alternates: { canonical: "/billing-machine" },
  openGraph: {
    title: "Free Billing Machine App for Retail Shops & POS | Vyop",
    description:
      "Why spend ₹15,000 on a heavy billing machine? Turn your phone into a high-speed touchscreen billing machine with camera barcode scanner & thermal printer support.",
    url: "https://vyop.in/billing-machine",
    siteName: "Vyop POS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vyop Billing Machine App – Smartphone Retail POS",
      },
    ],
    type: "website",
  },
  keywords: [
    "billing machine",
    "billing machine for shop",
    "billing machine price",
    "pos billing machine",
    "billing machine under 5000",
    "billing machine with printer",
    "touch screen billing machine",
    "handheld billing machine",
    "electronic cash register machine",
    "best billing machine in india",
    "retail billing machine",
    "billing machine for grocery shop",
    "billing machine bina computer ke",
    "small shop billing machine",
    "dukan ki billing machine",
    "supermarket billing machine",
    "thermal billing machine",
    "portable billing machine",
    "android billing machine",
    "free billing machine app",
  ],
};

const machineComparisons = [
  {
    feature: "Hardware Machine Cost",
    vyop: "₹0 (Runs on your existing smartphone)",
    hardware: "₹12,000 – ₹35,000 (Sunmi / NGX / TVS / Essae)",
  },
  {
    feature: "Barcode Scanning",
    vyop: "✅ Built-in Camera Laser Scan (All Barcodes & QR)",
    hardware: "❌ Requires ₹2,500 external barcode gun or manual typing",
  },
  {
    feature: "Unbarcoded Products",
    vyop: "✅ AI Vision (Snap photo of loose item to identify)",
    hardware: "❌ Impossible — must remember and type PLU codes",
  },
  {
    feature: "Voice AI Checkout",
    vyop: "✅ Speak items in Hindi/English ('Do kilo cheeni, do chai')",
    hardware: "❌ No voice support — slow numeric keypad only",
  },
  {
    feature: "Receipt Printing",
    vyop: "✅ Connects wirelessly to any ₹1,500 Bluetooth printer",
    hardware: "⚠️ Built-in printer jams easily; expensive repair",
  },
  {
    feature: "GST & Tax Filing",
    vyop: "✅ Auto GSTR-1, GSTR-3B, P&L statements & JSON export",
    hardware: "❌ Basic receipt only — no CA tax reports",
  },
  {
    feature: "Customer Ledger (Khata)",
    vyop: "✅ Digital Udhar Khata + Automatic WhatsApp Reminders",
    hardware: "❌ No customer credit tracking",
  },
  {
    feature: "Free Online Store",
    vyop: "✅ 0% Commission Live Web Storefront in 60s",
    hardware: "❌ No internet or storefront capabilities",
  },
  {
    feature: "Software Updates",
    vyop: "✅ Free automatic cloud updates from Google Play",
    hardware: "❌ Requires technician visit and firmware flashing fees",
  },
  {
    feature: "Monthly / Annual Subscription",
    vyop: "Free to Start / Pro ₹49/month or ₹999/year",
    hardware: "High upfront cost + costly paper roll/battery lock-in",
  },
];

const faqs = [
  {
    q: "Can my smartphone really replace a physical billing machine?",
    a: "Yes! Modern smartphones have faster processors, higher resolution cameras, and better touchscreens than dedicated ₹25,000 billing machines. With Vyop, your phone camera scans barcodes faster than a laser gun, Voice AI lets you create bills in Hindi or English in 5 seconds, and Bluetooth connects directly to any portable thermal receipt printer.",
  },
  {
    q: "Which thermal receipt printer works with this billing machine app?",
    a: "Vyop works with virtually all standard 58mm (2-inch) and 80mm (3-inch) Bluetooth and USB thermal receipt printers (ESC/POS standard). You can buy an affordable thermal printer on Amazon or local markets for ₹1,200 to ₹2,500 and pair it via Bluetooth in 10 seconds.",
  },
  {
    q: "Does this billing machine app work without internet?",
    a: "Yes! Vyop is built 100% offline-first. You can scan barcodes, ring up customers, print thermal receipts, and track cash sales even with zero internet or during power outages. When connection is restored, all data automatically syncs to the cloud.",
  },
  {
    q: "How is Vyop different from traditional billing machines (TVS, NGX, Sunmi)?",
    a: "Traditional billing machines are heavy, expensive (₹12,000–₹35,000), have tiny screens with mechanical buttons, break frequently, and cannot update their software. Vyop runs directly on your phone with an intuitive touchscreen, AI product recognition, automated WhatsApp bills, GST reports for your CA, and costs ₹0 to start.",
  },
  {
    q: "How do I create bills using phone camera barcodes?",
    a: "Step 1: Download Vyop free from Google Play Store. Step 2: Open Billing Mode. Step 3: Point your phone camera at any product barcode — it beeps and adds the product to cart instantly. Step 4: Tap Print to send a receipt to your Bluetooth thermal printer or send a WhatsApp PDF invoice.",
  },
  {
    q: "What is the price of Vyop Billing Machine software?",
    a: "Vyop is free to start on any Android smartphone. You get camera barcode scanning, billing, thermal receipt printing, and basic inventory completely free. For multi-device desktop PC counter access and automated cloud sync, Vyop Pro is just ₹49/month (approx. $1/mo) or ₹999/year (approx. $12/yr) — saving you thousands compared to hardware machines.",
  },
];

export default function BillingMachineLandingPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-gradient-to-b from-amber-50/70 via-white to-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-4 h-4 text-amber-600" />
            <span>Smart POS Billing Machine App for All Retail Shops</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Turn Your Smartphone into a{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Smart Billing Machine
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Why spend <strong>₹15,000 to ₹35,000</strong> on a bulky hardware machine with tiny buttons?{" "}
            Vyop gives you a supermarket-speed touchscreen billing machine on your phone — complete with camera barcode scanning, Voice AI billing, and instant Bluetooth receipt printing. <strong>₹0 Hardware Cost. Free to start.</strong>
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black hover:bg-gray-800 text-white font-bold text-base shadow-xl hover:shadow-black/20 transition-all flex items-center justify-center gap-3"
            >
              <Smartphone className="w-5 h-5 text-amber-400" />
              Download Free Billing Machine
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
            >
              Open Web Billing Machine <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Key Advantages */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-2xl">💰</span>
              <div>
                <div className="text-xs font-bold text-gray-900">Save ₹15,000+</div>
                <div className="text-[11px] text-gray-500">No hardware machine</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="text-xs font-bold text-gray-900">5-Sec Checkout</div>
                <div className="text-[11px] text-gray-500">Camera scan & voice</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-2xl">🖨️</span>
              <div>
                <div className="text-xs font-bold text-gray-900">Thermal Printer</div>
                <div className="text-[11px] text-gray-500">Bluetooth 58mm/80mm</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-2xl">📴</span>
              <div>
                <div className="text-xs font-bold text-gray-900">100% Offline</div>
                <div className="text-[11px] text-gray-500">Works without internet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Hardware vs Vyop */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Smart Savings Comparison
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Traditional Billing Machine vs Vyop Smartphone POS
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            See why over 10,000 retail shopkeepers are replacing heavy legacy machines with Vyop on their smartphones.
          </p>
        </div>

        <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 text-sm font-bold">
            <div className="col-span-4 sm:col-span-3">Feature</div>
            <div className="col-span-4 sm:col-span-5 text-amber-400">Vyop Smart Billing Machine</div>
            <div className="col-span-4 sm:col-span-4 text-gray-300">Traditional Machine (Sunmi/NGX/TVS)</div>
          </div>
          {machineComparisons.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-12 p-4 sm:p-5 text-sm items-center border-t border-gray-100 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              }`}
            >
              <div className="col-span-4 sm:col-span-3 font-semibold text-gray-900 text-xs sm:text-sm">
                {row.feature}
              </div>
              <div className="col-span-4 sm:col-span-5 text-gray-800 font-medium pr-2 text-xs sm:text-sm">
                {row.vyop}
              </div>
              <div className="col-span-4 sm:col-span-4 text-gray-500 text-xs sm:text-sm">
                {row.hardware}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Step Setup */}
      <section className="py-20 px-6 bg-slate-50 border-y border-gray-200/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
              How to Start Billing in 60 Seconds
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-body">
              No complex setup, no software installation fees, and no waiting for hardware delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white font-extrabold flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Install Free App</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-body">
                  Download Vyop on any Android phone or open vyop.shop on your desktop. Setup takes 30 seconds.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white font-extrabold flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Connect Thermal Printer</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-body">
                  Turn on any ₹1,500 Bluetooth thermal printer. Vyop pairs instantly without requiring external drivers.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white font-extrabold flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Scan or Speak Items</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-body">
                  Point your phone camera at barcodes or dictate orders with Voice AI in Hindi or English.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white font-extrabold flex items-center justify-center mb-4">
                  4
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Hand Bill to Customer</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-body">
                  Tap Print to output a formatted thermal receipt or send an instant WhatsApp invoice with UPI QR code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Frequently Asked Questions About Billing Machines
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Everything shopkeepers need to know about replacing hardware machines with Vyop.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
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
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white p-10 md:p-16 rounded-3xl shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Get Your Free Smart Billing Machine Today
          </h2>
          <p className="text-amber-100 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            Stop wasting ₹15,000 on bulky hardware. Turn your smartphone into a fast supermarket billing counter in 60 seconds. Free to start, Pro only ₹49/month.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black text-white font-bold text-base hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Smartphone className="w-5 h-5 text-amber-400" />
              Download on Google Play
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-gray-900 font-bold text-base hover:bg-gray-100 transition-all shadow-lg"
            >
              Open Web POS (vyop.shop)
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Vyop Billing Machine App",
              operatingSystem: "Android, iOS, Web",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "PointOfSale, BillingMachine, ThermalPrinterApp",
              description:
                "Free billing machine app for retail shops. Turn your smartphone into a touchscreen billing machine with camera barcode scanning, voice AI billing & Bluetooth thermal receipt printing.",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "INR",
                lowPrice: "0",
                highPrice: "999",
                offers: [
                  {
                    "@type": "Offer",
                    name: "Free Billing Machine",
                    price: "0",
                    priceCurrency: "INR",
                    description: "Free smartphone barcode scanning & receipt printing",
                  },
                  {
                    "@type": "Offer",
                    name: "Vyop Pro Monthly",
                    price: "49",
                    priceCurrency: "INR",
                    description: "Multi-device desktop web POS & cloud sync",
                  },
                  {
                    "@type": "Offer",
                    name: "Vyop Pro Annual",
                    price: "999",
                    priceCurrency: "INR",
                    description: "Full year cloud backup and priority features",
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "6",
                ratingCount: "6",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Turn Your Smartphone into a Retail Billing Machine",
              description: "Step-by-step guide to using your smartphone as a complete POS billing machine without buying expensive hardware.",
              step: [
                {
                  "@type": "HowToStep",
                  position: 1,
                  name: "Install Vyop Free Billing App",
                  text: "Download Vyop from Google Play Store or open vyop.shop in your web browser. No upfront hardware investment needed.",
                },
                {
                  "@type": "HowToStep",
                  position: 2,
                  name: "Pair Any Bluetooth Thermal Receipt Printer",
                  text: "Turn on an affordable 58mm or 80mm Bluetooth thermal printer. Vyop pairs with ESC/POS printers automatically.",
                },
                {
                  "@type": "HowToStep",
                  position: 3,
                  name: "Scan Barcodes with Phone Camera or Speak Items",
                  text: "Point phone camera at barcodes or dictate orders using Voice AI in Hindi or English to add items to the bill.",
                },
                {
                  "@type": "HowToStep",
                  position: 4,
                  name: "Print Instant Thermal Receipt",
                  text: "Tap Print to generate a formatted thermal bill with GST details and UPI QR code or share via WhatsApp.",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.a,
                },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://vyop.in",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Billing Machine",
                  item: "https://vyop.in/billing-machine",
                },
              ],
            },
          ]),
        }}
      />

      <Footer />
    </main>
  );
}
