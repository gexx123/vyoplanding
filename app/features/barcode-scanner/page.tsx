import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BarcodeScannerShowcase from "@/components/BarcodeScannerShowcase";
import Link from "next/link";
import {
  Scan,
  Camera,
  Printer,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Zap,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Flame,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Turn Your Phone into an AI Barcode Scanner & POS | Vyop App",
  description:
    "Transform any smartphone camera into a supermarket barcode POS scanner. Scan barcodes or snap unbarcoded items with AI to bill in 0.5s. No ₹5,000 laser gun needed. 100% Free.",
  alternates: { canonical: "/features/barcode-scanner" },
  openGraph: {
    title: "Turn Your Phone into an AI Barcode Scanner & POS | Vyop",
    description:
      "Why buy a ₹5,000 barcode laser gun? Scan 1D/2D barcodes or snap photos of unbarcoded items to bill at mall speeds from your phone. Built-in thermal printer support.",
    url: "https://vyop.in/features/barcode-scanner",
    siteName: "Vyop",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vyop AI Barcode and Product Scanner for Retail",
      },
    ],
    type: "website",
  },
  keywords: [
    "turn your phone into barcode scanner",
    "mobile barcode scanner",
    "ai barcode scanner",
    "barcode billing app for mobile",
    "scan product without barcode",
    "vyop barcode scanner",
    "camera barcode scanner for shop",
    "phone camera barcode scanner",
    "free barcode scanner for pc and mobile",
    "supermarket barcode billing on phone",
    "mall billing speed on phone",
    "barcode scanner app for shop",
    "unbarcoded product scanner",
    "photo se product add karne wala app",
    "barcode generator and label printer",
    "bluetooth thermal printer barcode app",
    "barcode scan karke bill banane wala app",
    "bina computer ke barcode billing",
  ],
};

const faqs = [
  {
    q: "Can I really use my normal smartphone as a supermarket barcode scanner?",
    a: "Yes, 100%. Vyop's proprietary scanning engine uses your phone's native hardware video stream. It decodes standard barcodes (EAN-13, UPC, Code 128, QR) in less than 50 milliseconds from up to 3 feet away. You do not need to spend ₹3,000–₹8,000 on external USB or Bluetooth barcode laser guns.",
  },
  {
    q: "How does Vyop scan products that don't have a barcode?",
    a: "This is Vyop's game-changing superpower: over 50% of retail items in India (fresh bakery mithai, loose grains, fruits, garments, hardware screws) don't have standard factory barcodes. In Vyop, you simply snap a photo to register the item once with AI. When billing, just point your phone camera at the item — Vyop's proprietary AI instantly recognizes the product and adds it to the bill in 250 milliseconds with zero manual typing.",
  },
  {
    q: "Does the mobile barcode scanner work offline without internet?",
    a: "Yes! The entire camera scanning and product recognition system runs completely on your device. You can scan barcodes, detect products, and print thermal GST receipts even inside a basement shop with zero internet signal.",
  },
  {
    q: "Can I generate and print custom barcode stickers for my own shop items?",
    a: "Absolutely. Vyop has a built-in SKU Barcode Generator. You can generate custom Code-128 or EAN barcodes for your own unbranded clothing, homemade snacks, or loose items, and print barcode price tags directly to any 58mm or 80mm Bluetooth thermal label printer.",
  },
  {
    q: "Which phones are compatible with Vyop's barcode scanner?",
    a: "Any Android phone running Android 8.0 or higher, as well as iPhones (iOS) and desktop webcams. Even budget Android smartphones costing under ₹8,000 scan barcodes in milliseconds with crystal-clear accuracy.",
  },
  {
    q: "How is Vyop different from Tally, Vyapar, and MyBillBook for barcode billing?",
    a: "Traditional software like Tally, Marg, and Vyapar was designed for desktop computers and requires an external USB barcode gun. If an item has no barcode, your cashier must stop and type on a keyboard. Vyop is built for your smartphone: it turns your phone camera into a supermarket barcode scanner AND adds AI visual recognition for unbarcoded items so you never type during rush hour.",
  },
];

const supportedFormats = [
  { name: "EAN-13 & EAN-8", desc: "Standard Indian & Global FMCG retail grocery packets", tag: "Grocery" },
  { name: "UPC-A & UPC-E", desc: "Imported packaged goods and consumer electronics", tag: "FMCG" },
  { name: "Code 128", desc: "High-density alphanumeric barcodes for garments & logistics", tag: "Apparel" },
  { name: "Code 39 & 93", desc: "Industrial parts, automobile spares & warehouse inventory", tag: "Automotive" },
  { name: "QR Codes", desc: "Dynamic UPI payment QR codes & digital menus", tag: "Payments" },
  { name: "Data Matrix", desc: "Medicine blister strips, pharmaceutical batch & expiry codes", tag: "Pharma" },
  { name: "ITF (Interleaved 2 of 5)", desc: "Outer carton shipping & wholesale master packaging", tag: "Wholesale" },
  { name: "AI Product Photo Recognition", desc: "Instant visual identification for loose items without any barcode", tag: "AI Exclusive" },
  { name: "Smart Package Text Detection", desc: "Instant brand and product detection from pouches, packets & boxes", tag: "AI Exclusive" },
];

export default function BarcodeScannerFeaturePage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-amber-50/60 via-white to-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-6">
            <Flame className="w-4 h-4 text-amber-600" />
            <span>World&apos;s 1st AI Product & Mobile Barcode POS</span>
          </div>

          {/* Main H1 */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Turn Your Phone into an <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              AI Barcode Scanner
            </span>{" "}
            & POS
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Why spend ₹5,000 on a barcode laser gun or ₹35,000 on a billing machine? Point your mobile camera at any barcode to bill at mall speeds — or <strong>snap a photo of any unbarcoded product</strong>. Vyop&apos;s multi-source AI identifies it and bills it in 0.5 seconds.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black hover:bg-gray-800 text-white font-bold text-base shadow-xl hover:shadow-black/20 transition-all flex items-center justify-center gap-3"
            >
              <Smartphone className="w-5 h-5 text-amber-400" />
              Download Free on Google Play
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
            >
              Launch Web POS Scanner <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Feature Highlights Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="p-3.5 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-xl">⚡</span>
              <div>
                <div className="text-xs font-bold text-gray-900">0.05s Camera Scan</div>
                <div className="text-[11px] text-gray-500">60 FPS native stream</div>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-xl">📸</span>
              <div>
                <div className="text-xs font-bold text-gray-900">Scan Unbarcoded Items</div>
                <div className="text-[11px] text-gray-500">Snap photo with AI</div>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-xl">💰</span>
              <div>
                <div className="text-xs font-bold text-gray-900">₹0 Hardware Cost</div>
                <div className="text-[11px] text-gray-500">No laser guns required</div>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-xl">🖨️</span>
              <div>
                <div className="text-xs font-bold text-gray-900">Thermal Label Print</div>
                <div className="text-[11px] text-gray-500">Direct Bluetooth 58/80mm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Showcase Simulation */}
      <section className="py-8 px-6 max-w-6xl mx-auto">
        <BarcodeScannerShowcase />
      </section>

      {/* The Turning Point: Not Just Barcodes */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-3">
            The Retail Turning Point
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display mb-4">
            Why 50%+ of Products Fail Traditional Barcode Software
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Walk into any retail shop in India — sweet shops, kirana stores, boutiques, hardware outlets. Half the inventory has <strong>no factory barcode</strong>. Traditional software leaves you stranded with slow keyboard typing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="p-8 rounded-3xl bg-red-50/50 border border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Traditional Software (Tally, Vyapar, Marg)</h3>
                <div className="text-xs text-red-600 font-semibold">Expensive Hardware & Slow Keyboard Typing</div>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-gray-700">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span><strong>Forced Hardware Purchase:</strong> Must buy ₹3,500–₹8,000 laser scanner guns and desktop PC.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span><strong>Fails on Unbarcoded Items:</strong> Fresh sweets, loose grains, garments, and loose hardware have no barcode. Cashier must stop and type on keyboard.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span><strong>Tangled Counter Wires:</strong> Cords get pulled, USB laser guns drop and break during rush hour.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span><strong>Long Rush-Hour Queues:</strong> 30–45 seconds wasted per customer searching items on keyboard.</span>
              </li>
            </ul>
          </div>

          {/* Vyop AI Way */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-emerald-50/50 border-2 border-amber-300 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">The Vyop AI Barcode & Product Scanner</h3>
                <div className="text-xs text-emerald-700 font-semibold">Mall-Speed Billing with Zero Machines</div>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-gray-700">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span><strong>₹0 Extra Hardware:</strong> Uses the camera already in your pocket. Works on any Android phone or iPhone.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span><strong>Scans Unbarcoded Products:</strong> Snap a photo to add. Point your phone camera during billing — AI visual matching identifies the item in 200ms.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span><strong>100% Wireless Freedom:</strong> Walk around your shop, scan items on the shelf, or bill at the counter.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span><strong>5-Second Customer Checkout:</strong> Aim camera, items auto-add to bill, 1-tap Bluetooth thermal print or WhatsApp invoice.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3-Step Workflow: How It Works */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              Fastest Retail Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display mb-4">
              How Mall-Speed Mobile Billing Works in 3 Steps
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              No complex software training. Anyone at your shop counter can start billing in under 2 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md shadow-amber-500/20">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-display mb-3">
                Scan or Snap to Add Stock
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Point your phone camera at product barcodes, or snap a photo of unbarcoded items. Vyop&apos;s AI auto-fills product title, category, MRP, and generates a custom barcode sticker if needed.
              </p>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                ⚡ 10 Ways to Add Items
              </span>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md shadow-amber-500/20">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-display mb-3">
                Point Phone Camera to Bill
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Customer brings items to the counter. Open Vyop and point your phone camera. Scans barcodes or detects product packaging in 0.05 seconds. Quantities and discounts update automatically.
              </p>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                ⚡ Continuous 60 FPS Scan
              </span>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md shadow-amber-500/20">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-display mb-3">
                Print Thermal Bill & Collect UPI
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Tap Done to instantly print a GST thermal receipt over Bluetooth (58mm/80mm) or send a professional WhatsApp PDF invoice with dynamic zero-fee UPI QR code.
              </p>
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                ⚡ 0% Fee Instant Payment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Comparison Matrix */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Hardware Cost Analysis
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display mb-4">
            Vyop Phone Scanner vs Hardware Barcode Guns
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            See how much money and counter space you save by turning your smartphone into an AI barcode POS.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b-2 border-gray-100 bg-gray-50/70">
                <th className="py-4 px-6 text-sm font-bold text-gray-700">Feature</th>
                <th className="py-4 px-6 text-sm font-extrabold text-amber-700 bg-amber-50/70 rounded-t-2xl">
                  Vyop Phone AI Scanner
                </th>
                <th className="py-4 px-6 text-sm font-bold text-gray-600">USB / Laser Barcode Gun</th>
                <th className="py-4 px-6 text-sm font-bold text-gray-600">Bulky POS Terminal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              <tr>
                <td className="py-4 px-6 font-semibold text-gray-900">Hardware Investment</td>
                <td className="py-4 px-6 font-bold text-emerald-700 bg-amber-50/30">₹0 (Uses Your Phone)</td>
                <td className="py-4 px-6 text-gray-600">₹2,500 – ₹8,000</td>
                <td className="py-4 px-6 text-gray-600">₹25,000 – ₹45,000</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-gray-900">Scan Unbarcoded Items</td>
                <td className="py-4 px-6 font-bold text-emerald-700 bg-amber-50/30">✓ Built-in AI Visual Recognition</td>
                <td className="py-4 px-6 text-red-500">✕ Impossible (Manual Typing)</td>
                <td className="py-4 px-6 text-red-500">✕ Impossible (Manual Typing)</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-gray-900">Mobility & Portability</td>
                <td className="py-4 px-6 font-bold text-emerald-700 bg-amber-50/30">Pocket-sized (Walk anywhere in shop)</td>
                <td className="py-4 px-6 text-gray-600">Tethered by 1.5m USB cable</td>
                <td className="py-4 px-6 text-gray-600">Heavy fixed desk counter unit</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-gray-900">Multi-Format Support</td>
                <td className="py-4 px-6 font-bold text-emerald-700 bg-amber-50/30">11 1D/2D Formats + QR + Vision</td>
                <td className="py-4 px-6 text-gray-600">1D Barcodes only (2D extra cost)</td>
                <td className="py-4 px-6 text-gray-600">Standard barcodes only</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-gray-900">Offline Functionality</td>
                <td className="py-4 px-6 font-bold text-emerald-700 bg-amber-50/30">100% Offline On-Device</td>
                <td className="py-4 px-6 text-gray-600">Requires working PC / software</td>
                <td className="py-4 px-6 text-yellow-600">Often requires active cloud</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-gray-900">Custom Sticker Label Printer</td>
                <td className="py-4 px-6 font-bold text-emerald-700 bg-amber-50/30">Built-in Barcode Sticker Generator</td>
                <td className="py-4 px-6 text-gray-600">Requires 3rd party label software</td>
                <td className="py-4 px-6 text-gray-600">Paid add-on module</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-gray-900">Maintenance & Breakage</td>
                <td className="py-4 px-6 font-bold text-emerald-700 bg-amber-50/30">Zero (Free software updates)</td>
                <td className="py-4 px-6 text-gray-600">High (Laser lens scratches, dropped guns)</td>
                <td className="py-4 px-6 text-gray-600">Annual AMC charges (₹3,000–₹5,000/yr)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Supported Formats Grid */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              Universal Industrial Decoding
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display mb-4">
              Supports All Standard Retail & AI Recognition Formats
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              From FMCG noodles packets and international cosmetics to custom clothing stickers and loose bakery boxes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportedFormats.map((fmt, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:border-amber-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-gray-900 font-display">{fmt.name}</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                    {fmt.tag}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-body">{fmt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Cross-Links */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            Tailored For Every Retail Counter
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display mb-4">
            Who Uses Vyop&apos;s AI Barcode Scanner?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            See how different types of Indian retail stores replace clunky billing computers with Vyop on their smartphones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/solutions/kirana-grocery"
            className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all group"
          >
            <div className="text-3xl mb-3">🛒</div>
            <h3 className="text-lg font-bold text-gray-900 font-display group-hover:text-amber-700 mb-2">
              Kirana & Supermarkets
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Scan packaged groceries at 0.05s, or snap photos of loose dal, rice, sugar, and dry fruits. Instant Bluetooth thermal bill printing.
            </p>
          </Link>

          <Link
            href="/solutions/clothing-apparel"
            className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all group"
          >
            <div className="text-3xl mb-3">👗</div>
            <h3 className="text-lg font-bold text-gray-900 font-display group-hover:text-amber-700 mb-2">
              Garments & Footwear
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Print custom barcode price tags with size & color matrix. Scan tags with phone camera to bill without keyboard typing.
            </p>
          </Link>

          <Link
            href="/solutions/bakery-sweet-shop"
            className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all group"
          >
            <div className="text-3xl mb-3">🧁</div>
            <h3 className="text-lg font-bold text-gray-900 font-display group-hover:text-amber-700 mb-2">
              Bakery & Mithai Shops
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Mithai doesn&apos;t have barcodes. Point your phone camera at sweet boxes or pastries — Vyop AI detects the item visually in 200ms.
            </p>
          </Link>

          <Link
            href="/solutions/hardware-sanitary"
            className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all group"
          >
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="text-lg font-bold text-gray-900 font-display group-hover:text-amber-700 mb-2">
              Hardware & Sanitary
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Thousands of loose brass valves, screws, and PVC fittings. Snap photos to catalog, point camera to bill without searching catalogs.
            </p>
          </Link>

          <Link
            href="/solutions/pharmacy-chemist"
            className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all group"
          >
            <div className="text-3xl mb-3">💊</div>
            <h3 className="text-lg font-bold text-gray-900 font-display group-hover:text-amber-700 mb-2">
              Pharmacy & Chemist
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Scan 2D Data Matrix codes on medicine strips. Track batch numbers, manufacturing dates, and auto-alert on nearing expirations.
            </p>
          </Link>

          <Link
            href="/solutions/electronics-mobile"
            className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all group"
          >
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-lg font-bold text-gray-900 font-display group-hover:text-amber-700 mb-2">
              Mobile & Electronics
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Scan phone box IMEI and serial barcodes instantly. Generate professional warranty GST invoices with customer WhatsApp receipts.
            </p>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display">
              Frequently Asked Questions About Mobile Barcode Billing
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white p-10 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-display">
            Start Billing with Your Phone Camera in 2 Minutes
          </h2>
          <p className="text-amber-100 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            Zero hardware to buy. Zero setup fee. Join thousands of smart Indian retailers who bill faster, eliminate checkout lines, and save thousands on hardware.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black text-white font-bold text-base hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Smartphone className="w-5 h-5 text-amber-400" />
              Download Vyop on Google Play
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-gray-900 font-bold text-base hover:bg-gray-100 transition-all shadow-lg"
            >
              Open Web POS App Free
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Vyop AI Mobile Barcode Scanner & POS",
              "operatingSystem": "Android, iOS, Web, Windows",
              "applicationCategory": "BusinessApplication",
              "description":
                "Turn any smartphone into a supermarket barcode POS scanner. Features hardware-accelerated 0.05s camera barcode decoding, world-first AI visual scanning for unbarcoded products, Bluetooth thermal sticker printing, and offline GST billing.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "description": "100% Free basic mobile scanner with ₹999/year Pro cloud sync",
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1280",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Turn Your Phone into a Supermarket Barcode Scanner POS",
              "description":
                "Step-by-step guide to using your smartphone camera as a high-speed retail barcode and product scanner without buying expensive hardware guns.",
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Download Vyop on Any Smartphone",
                  "text": "Install Vyop POS from Google Play Store or open the web app. No specialized hardware or PC needed.",
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Scan Barcodes or Snap Unbarcoded Items",
                  "text": "Aim your phone camera at product barcodes to add items instantly. For unbarcoded loose goods or bakery items, snap a photo with AI to register the product.",
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Point Camera During Billing for Instant Checkout",
                  "text": "Open billing mode on your phone. Aim camera at items or barcodes to add them to the bill in 0.05 seconds, then print thermal receipts via Bluetooth.",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a,
                },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://vyop.in",
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Features",
                  "item": "https://vyop.in/features/barcode-scanner",
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "AI Barcode Scanner",
                  "item": "https://vyop.in/features/barcode-scanner",
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
