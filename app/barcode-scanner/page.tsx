import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import {
  Scan,
  Camera,
  Smartphone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  ShieldCheck,
  HelpCircle,
  Store,
  Receipt,
  Package,
  Printer,
  CreditCard,
  Globe,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Barcode Scanner App for Mobile | Turn Phone into Barcode Scanner Free – Vyop",
  description:
    "Download the best free barcode scanner app for Android & iPhone. Turn your phone camera into a supermarket barcode scanner. Scan products, generate bills, print receipts. No hardware needed. Works offline.",
  alternates: { canonical: "/barcode-scanner" },
  openGraph: {
    title: "Best Barcode Scanner App for Mobile – Turn Phone into POS | Vyop",
    description:
      "Turn any phone into a supermarket barcode scanner & billing machine. Scan barcodes, snap unbarcoded products with AI, and bill at mall speed. 100% free.",
    url: "https://vyop.in/barcode-scanner",
    siteName: "Vyop",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vyop Barcode Scanner App – Turn Phone into Barcode Scanner",
      },
    ],
    type: "website",
  },
  keywords: [
    "barcode scanner",
    "barcode scanner app",
    "barcode scanner online",
    "barcode scanner for mobile",
    "barcode scanner for android",
    "barcode scanner for iphone",
    "barcode scanner for pc",
    "barcode scanner free",
    "barcode scanner app free download",
    "barcode scanner for shop",
    "barcode scanner for billing",
    "barcode scanner for retail",
    "barcode scanner for inventory",
    "mobile barcode scanner",
    "phone barcode scanner",
    "turn phone into barcode scanner",
    "camera barcode scanner",
    "smartphone barcode scanner",
    "qr code barcode scanner",
    "product barcode scanner",
    "best barcode scanner app",
    "barcode scanner pos",
    "barcode scanner billing app",
    "free barcode scanner for android",
    "barcode scan karke bill banaye",
    "barcode scanner se billing kaise kare",
    "phone se barcode scan kare",
    "mobile me barcode scanner",
    "barcode reader app",
    "barcode reader for mobile",
    "barcode reader online free",
    "barcode lookup",
    "scan barcode from phone",
    "scan barcode and bill",
    "scan barcode with phone camera",
    "product scanner app",
    "product scanner for shop billing",
    "ai barcode scanner",
    "vyop barcode scanner",
    "supermarket barcode scanner for phone",
    "retail barcode scanner app india",
    "grocery store barcode scanner",
    "kirana store barcode scanner",
    "free pos barcode scanner",
    "barcode scanner without internet",
    "offline barcode scanner app",
    "barcode scanner and printer app",
    "barcode scanner for small business",
    "barcode scanner for dukan",
    "scan any product without barcode",
    "photo se product scan kare",
    "image product scanner",
    "ai product recognition scanner",
  ],
};

const useCases = [
  {
    icon: "🛒",
    title: "Kirana & Grocery Stores",
    desc: "Scan packaged goods barcodes in 0.05s. Snap photos of loose dal, rice, sugar. Instant thermal bill printing.",
    link: "/solutions/kirana-grocery",
  },
  {
    icon: "👗",
    title: "Clothing & Apparel Shops",
    desc: "Print custom barcode price tags with size/color. Scan tags from phone camera to bill without keyboard.",
    link: "/solutions/clothing-apparel",
  },
  {
    icon: "🧁",
    title: "Bakery & Sweet Shops",
    desc: "Mithai has no barcode. Point phone camera at sweet boxes — AI identifies the item visually in 200ms.",
    link: "/solutions/bakery-sweet-shop",
  },
  {
    icon: "💊",
    title: "Pharmacy & Chemist",
    desc: "Scan Data Matrix codes on medicine strips. Auto-track batch numbers, expiry dates, and GST compliance.",
    link: "/solutions/pharmacy-chemist",
  },
  {
    icon: "🔧",
    title: "Hardware & Sanitary Stores",
    desc: "Thousands of loose screws, valves, fittings. Snap photos to catalog. Point camera to bill instantly.",
    link: "/solutions/hardware-sanitary",
  },
  {
    icon: "📱",
    title: "Mobile & Electronics Shops",
    desc: "Scan IMEI and serial barcodes from phone boxes. Generate warranty GST invoices with WhatsApp receipts.",
    link: "/solutions/electronics-mobile",
  },
  {
    icon: "🍽️",
    title: "Restaurants & Cafes",
    desc: "Scan menu QR codes, generate KOT orders, table billing with voice commands in Hindi or English.",
    link: "/solutions/restaurant-cafe",
  },
  {
    icon: "📚",
    title: "Stationery & Book Stores",
    desc: "Scan ISBN barcodes from books and stationery packaging. Fast student rush-hour billing with phone camera.",
    link: "/solutions/stationery-books",
  },
];

const faqs = [
  {
    q: "Can I really turn my phone into a barcode scanner for billing?",
    a: "Yes! Vyop transforms your phone camera into a professional-grade barcode scanner. Just point your phone at any barcode — EAN, UPC, QR, Code 128, Data Matrix — and it scans in 0.05 seconds. No external hardware or laser gun required. Your phone becomes a complete barcode scanner and POS machine.",
  },
  {
    q: "Does the barcode scanner work without internet?",
    a: "Yes, Vyop's barcode scanner works 100% offline. All barcode decoding happens directly on your phone. You can scan barcodes, add items to bills, and print thermal receipts even without any internet connection. Perfect for basement shops or areas with poor network coverage.",
  },
  {
    q: "Can I scan products that don't have a barcode?",
    a: "This is Vyop's biggest advantage over every other barcode scanner app. Over 50% of retail products in India (mithai, loose grains, custom garments, hardware items) have no barcode. Vyop lets you simply point your phone camera at ANY product — the AI recognizes it from the product photo, packaging text, or shape and adds it to your bill in under 0.5 seconds. No typing needed.",
  },
  {
    q: "Is this barcode scanner really free?",
    a: "Yes! The barcode scanner feature is 100% free forever. You can scan unlimited barcodes, generate bills, and print receipts without paying anything. Vyop Pro (₹999/year) adds cloud sync across multiple devices, but the barcode scanner and billing features are completely free.",
  },
  {
    q: "How is Vyop better than other barcode scanner apps?",
    a: "Most barcode scanner apps only scan and show product info. Vyop goes 10 steps further: it scans barcodes AND unbarcoded products, instantly adds them to a bill, calculates GST automatically, prints thermal receipts via Bluetooth, sends WhatsApp invoices, manages inventory, and even lets you generate custom barcode labels. It is a complete barcode scanner + billing software + inventory management in one app.",
  },
  {
    q: "Which barcode formats does Vyop support?",
    a: "Vyop supports all major barcode formats: EAN-13, EAN-8, UPC-A, UPC-E, Code 128, Code 39, Code 93, QR Codes, Data Matrix, ITF (Interleaved 2 of 5), and PDF417. Plus, it has AI visual recognition for products without any barcode at all.",
  },
  {
    q: "Can I generate and print barcode labels from my phone?",
    a: "Yes! Vyop has a built-in barcode generator and label printer. You can create custom Code-128 or EAN barcodes for your own products (like homemade sweets, custom garments, loose items) and print barcode stickers directly from your phone to any 58mm or 80mm Bluetooth thermal printer.",
  },
  {
    q: "Can I use this for supermarket-style checkout billing?",
    a: "Absolutely! Vyop's barcode scanner gives you supermarket checkout speed on your phone. Continuous 60 FPS scanning means you can scan multiple products back-to-back just like a cashier at Big Bazaar or D-Mart. Items are automatically added to the bill, quantities update, and you print a thermal receipt — all from your phone.",
  },
  {
    q: "Does it work on budget Android phones?",
    a: "Yes! Vyop's barcode scanner works on any Android phone running Android 8.0 or higher, including budget smartphones under ₹8,000. The scanning engine is optimized to use minimal resources while delivering instant barcode decoding.",
  },
  {
    q: "How to scan barcode and bill from phone? (Step by step)",
    a: "Step 1: Download Vyop free from Google Play Store. Step 2: Add your products by scanning their barcodes or snapping photos. Step 3: When a customer comes, open billing mode and point your phone camera at products — they are instantly added to the bill. Step 4: Tap 'Print' to send a thermal receipt via Bluetooth or share a WhatsApp invoice. Total time: under 10 seconds per bill.",
  },
];

const comparisonPoints = [
  {
    feature: "Scan Standard Barcodes (EAN, UPC, QR)",
    vyop: "✓ 0.05s Camera Scan (All Formats)",
    others: "✓ Basic Scan",
  },
  {
    feature: "Scan Products WITHOUT Barcode",
    vyop: "✓ AI Vision (Snap photo to identify)",
    others: "✕ Not Possible — Manual Typing Required",
  },
  {
    feature: "Built-in Billing & Invoice",
    vyop: "✓ Full GST Billing + WhatsApp Invoice",
    others: "✕ Only Shows Product Info",
  },
  {
    feature: "Hardware Cost",
    vyop: "₹0 (Uses Your Phone Camera)",
    others: "₹3,000 – ₹45,000 (Laser Gun / POS Terminal)",
  },
  {
    feature: "Generate & Print Barcode Labels",
    vyop: "✓ Built-in Barcode Sticker Printer",
    others: "✕ Requires Separate Software",
  },
  {
    feature: "Offline Mode",
    vyop: "✓ 100% Offline (No Internet Needed)",
    others: "Depends on App",
  },
  {
    feature: "Thermal Receipt Printing",
    vyop: "✓ Bluetooth 58mm / 80mm",
    others: "✕ Not Available",
  },
  {
    feature: "Inventory Management",
    vyop: "✓ Full Stock Tracking + Alerts",
    others: "✕ No Inventory Features",
  },
];

export default function BarcodeScannerLandingPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-amber-50/60 via-white to-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-6">
            <Scan className="w-4 h-4 text-amber-600" />
            <span>#1 Barcode Scanner App for Shop Billing</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Turn Your Phone into a{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Barcode Scanner
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The <strong>best free barcode scanner app</strong> that does
            everything: scan any barcode, scan products{" "}
            <strong>without barcode</strong> using AI, generate bills, print
            thermal receipts, manage inventory — all from your phone. No
            expensive hardware. No computer. Just your smartphone.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black hover:bg-gray-800 text-white font-bold text-base shadow-xl hover:shadow-black/20 transition-all flex items-center justify-center gap-3"
            >
              <Smartphone className="w-5 h-5 text-amber-400" />
              Download Free Barcode Scanner
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
            >
              Try Online Barcode Scanner <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="p-3.5 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-xl">⚡</span>
              <div>
                <div className="text-xs font-bold text-gray-900">0.05s Barcode Scan</div>
                <div className="text-[11px] text-gray-500">Instant camera decode</div>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-xl">📸</span>
              <div>
                <div className="text-xs font-bold text-gray-900">Scan Without Barcode</div>
                <div className="text-[11px] text-gray-500">AI product recognition</div>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-xl">💰</span>
              <div>
                <div className="text-xs font-bold text-gray-900">100% Free</div>
                <div className="text-[11px] text-gray-500">No hardware cost</div>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-xl">📴</span>
              <div>
                <div className="text-xs font-bold text-gray-900">Works Offline</div>
                <div className="text-[11px] text-gray-500">No internet needed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Vyop's Barcode Scanner Different */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-3">
            Not Just a Barcode Scanner
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            The Only Scanner That Scans Products Without Barcodes
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Every barcode scanner app can read barcodes. Vyop goes further — it
            uses AI to identify products that don&apos;t even have a barcode.
            Just point your phone camera at any item.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-white border border-amber-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6 shadow-md shadow-amber-500/20">
              <Scan className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Standard Barcode Scanning
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Point your phone camera at any barcode — EAN-13, UPC, QR Code,
              Code 128, Data Matrix. Decoded in 0.05 seconds. Supports all 11+
              international barcode formats used in Indian retail.
            </p>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              ⚡ All 11+ Barcode Formats
            </span>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-white border-2 border-purple-300 shadow-md relative">
            <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-purple-600 text-white text-[10px] font-bold uppercase">
              Game Changer
            </span>
            <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-6 shadow-md shadow-purple-500/20">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
              AI Product Scanner (No Barcode Needed)
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Over 50% of retail products in India have no barcode — loose
              items, mithai, bakery goods, custom garments, hardware parts. Just
              point your phone camera at ANY product. Vyop&apos;s AI identifies it
              from the photo and adds it to your bill instantly.
            </p>
            <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
              🤖 World&apos;s First AI Product Scanner
            </span>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-500/20">
              <Printer className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Barcode Generator & Label Printer
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Create custom barcodes for your own products. Generate Code-128 or
              EAN barcode stickers and print them directly to any Bluetooth
              thermal printer (58mm or 80mm). Turn any product into a scannable
              item.
            </p>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              🏷️ Print Custom Barcode Labels
            </span>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              Simple 3-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              How to Use Phone as Barcode Scanner for Billing
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Turn your smartphone into a complete barcode scanner POS in under
              2 minutes. No training, no setup, no hardware purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md shadow-amber-500/20">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Download & Add Products
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Download Vyop free from Google Play. Add your products by
                scanning their barcodes, taking photos, or using voice commands.
                Vyop auto-fills product name, category, and MRP.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md shadow-amber-500/20">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Scan to Bill at Checkout
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                When a customer comes, open billing mode. Point your phone camera
                at product barcodes or items — they&apos;re instantly added to the
                bill. Scan continuously like a supermarket checkout counter.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md shadow-amber-500/20">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Print Receipt or Send WhatsApp Bill
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tap Done to instantly print a GST thermal receipt via Bluetooth
                printer, or send a professional WhatsApp PDF invoice with UPI QR
                code for instant payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Why Vyop Wins
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Vyop Barcode Scanner vs Other Barcode Apps & Hardware
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            See why Vyop is the smartest barcode scanner choice for Indian shop
            owners. No hardware, no extra costs, more features.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b-2 border-gray-100 bg-gray-50/70">
                <th className="py-4 px-6 text-sm font-bold text-gray-700">
                  Feature
                </th>
                <th className="py-4 px-6 text-sm font-extrabold text-amber-700 bg-amber-50/70">
                  Vyop Barcode Scanner
                </th>
                <th className="py-4 px-6 text-sm font-bold text-gray-600">
                  Other Apps / Hardware Guns
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {comparisonPoints.map((row, idx) => (
                <tr key={idx}>
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-amber-50/30">
                    {row.vyop}
                  </td>
                  <td className="py-4 px-6 text-gray-600">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              Works for Every Shop Type
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Barcode Scanner for Every Indian Retail Business
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Whether you run a kirana store, clothing shop, bakery, pharmacy,
              or hardware store — Vyop&apos;s barcode scanner is built for your
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((uc, i) => (
              <Link
                key={i}
                href={uc.link}
                className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all group"
              >
                <div className="text-3xl mb-3">{uc.icon}</div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-amber-700 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {uc.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {uc.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Barcode Scanner for Billing Software */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            Complete Billing Solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Barcode Scanner + Billing Software in One App
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Most barcode scanner apps only read barcodes. Vyop combines a
            professional barcode scanner with complete GST billing software,
            inventory management, and thermal printing — all in one free app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Scan className="w-8 h-8 text-amber-600 mb-4" />
            <h3 className="text-base font-bold text-gray-900 mb-2">Barcode Scanner</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Scan all barcode formats with your phone camera. 0.05 second decode speed.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Camera className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-base font-bold text-gray-900 mb-2">AI Product Scanner</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Scan products without barcode. AI identifies items from photos.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Receipt className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-base font-bold text-gray-900 mb-2">GST Billing</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Auto CGST/SGST/IGST. Professional tax invoices. WhatsApp bill sharing.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Package className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-base font-bold text-gray-900 mb-2">Inventory Management</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Real-time stock tracking. Low stock alerts. Multi-unit support.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Printer className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-base font-bold text-gray-900 mb-2">Thermal Printer Support</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Bluetooth 58mm/80mm receipt and barcode label printing.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <CreditCard className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-base font-bold text-gray-900 mb-2">UPI Payment QR</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Auto-generated UPI QR code on every bill. Zero transaction fees.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              Everything You Need to Know
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
              Barcode Scanner App — Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm"
              >
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Links */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Compare Vyop Barcode Scanner with Other Software
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            See how Vyop&apos;s built-in barcode scanner makes expensive hardware and
            traditional software obsolete.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Vyop vs Tally", link: "/vyop-vs-tally" },
            { name: "Vyop vs Vyapar", link: "/vyop-vs-vyapar" },
            { name: "Vyop vs Marg", link: "/vyop-vs-marg" },
            { name: "Vyop vs Busy", link: "/vyop-vs-busy" },
            { name: "Vyop vs MyBillBook", link: "/vyop-vs-mybillbook" },
            { name: "Vyop vs Khatabook", link: "/vyop-vs-khatabook" },
            { name: "Vyop vs Square", link: "/vyop-vs-square" },
            { name: "Vyop vs Shopify", link: "/vyop-vs-shopify" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="p-4 rounded-2xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all text-center group"
            >
              <span className="text-sm font-bold text-gray-900 group-hover:text-amber-700">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white p-10 md:p-16 rounded-3xl shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Download the Best Barcode Scanner App — Free
          </h2>
          <p className="text-amber-100 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            Turn your phone into a supermarket barcode scanner in 30 seconds.
            Scan barcodes, scan products without barcode, generate bills, print
            receipts. All free.
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
              Open Web Scanner Free
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Vyop Barcode Scanner App",
              operatingSystem: "Android, iOS, Web",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Barcode Scanner, POS Software, Billing App",
              description:
                "Best free barcode scanner app for mobile. Turn phone camera into supermarket barcode scanner. Scan barcodes, scan products without barcode using AI, generate GST bills, print thermal receipts. Works offline.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
                description: "100% Free barcode scanner with ₹999/year Pro cloud sync",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1280",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Turn Your Phone into a Barcode Scanner for Billing",
              description:
                "Step-by-step guide to using your smartphone camera as a professional barcode scanner for shop billing without buying expensive hardware.",
              step: [
                {
                  "@type": "HowToStep",
                  position: 1,
                  name: "Download Vyop Free Barcode Scanner App",
                  text: "Install Vyop from Google Play Store or open the web app at vyop.shop. No hardware purchase needed.",
                },
                {
                  "@type": "HowToStep",
                  position: 2,
                  name: "Add Products by Scanning Barcodes or Photos",
                  text: "Point your phone camera at product barcodes to add items to inventory. For unbarcoded items, snap a photo — AI fills in product details automatically.",
                },
                {
                  "@type": "HowToStep",
                  position: 3,
                  name: "Scan Products at Checkout to Generate Bill",
                  text: "Open billing mode. Point phone camera at products. Barcodes and items are scanned in 0.05s and added to the bill automatically. Print thermal receipt via Bluetooth or share WhatsApp invoice.",
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
                  name: "Barcode Scanner",
                  item: "https://vyop.in/barcode-scanner",
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
