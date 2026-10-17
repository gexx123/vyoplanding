import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CityHubsSection from "@/components/sections/CityHubsSection";
import ComparisonDisclaimer from "@/components/legal/ComparisonDisclaimer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Free Mobile POS App & Retail Billing Software | Vyop",
  },
  description:
    "Free mobile POS and barcode billing app for retail shops. Turn your phone camera into a supermarket barcode scanner, print thermal receipts & bill offline free.",
  alternates: { canonical: "/pos-app" },
  openGraph: {
    title: "Free Mobile POS App & Retail Billing Software | Vyop POS",
    description:
      "Run checkout on Desktop PC (vyop.shop) or smartphone. Phone camera scans barcodes. Multi-currency, 0% transaction fees, offline mode, and Bluetooth receipt printing. Free to start.",
    url: "https://vyop.in/pos-app",
    siteName: "Vyop POS",
  },
  keywords: [
    "best free pos app",
    "free pos software for small business without monthly fee",
    "turn phone into pos system",
    "free supermarket barcode scanner app",
    "mobile cash register app",
    "point of sale software without subscription",
    "free point of sale software",
    "pos software for small business",
    "free mobile pos app",
    "pos app for android",
    "pos software for pc free download",
    "square pos alternative free",
    "loyverse alternative free",
    "clover alternative free",
    "turn phone into pos",
    "phone camera barcode pos scanner",
    "small business pos system without monthly fees",
    "retail checkout app",
    "offline pos app",
    "multi currency pos system",
    "desktop pos software",
    "pos software for desktop",
    "pos system software",
    "point of sale software",
    "good pos app",
    "smart pos",
    "mobile pos app india",
    "pos billing app",
    "best retail pos software",
    "pos app for retail store",
    "pos app for restaurant",
    "phone barcode scanner for billing",
    "pos without machine",
    "smartphone pos system",
  ],
};

const posComparison = [
  { feature: "Price", vyop: "Free to Start / ₹49/mo ($1/mo) / ₹999/yr Pro", loyverse: "$0 Basic / $5–$25/mo Add-ons", square: "Free + 2.6% + 10¢ per txn", vyapar: "Free Mobile / ₹3,399–₹3,999/yr Desktop", petpooja: "~₹10,000–₹15,000/yr (Base)" },
  { feature: "Desktop PC & Web Support", vyop: "✅ Full Desktop PC Web (vyop.shop)", loyverse: "⚠️ Web Dashboard Only", square: "⚠️ Limited Web Terminal", vyapar: "✅ Desktop Software (.exe)", petpooja: "⚠️ POS Terminal Only" },
  { feature: "Voice AI Billing", vyop: "✅ Hindi, English & Hinglish", loyverse: "❌ Not Available", square: "❌ Not Available", vyapar: "❌ Not Available", petpooja: "❌ Not Available" },
  { feature: "Smartphone Camera POS Scanner", vyop: "✅ Built-in Phone Camera POS", loyverse: "✅ Basic Scanning", square: "⚠️ $49 Reader / $299 Terminal", vyapar: "✅ Phone Camera & Scanner Gun", petpooja: "⚠️ Hardware Dependent" },
  { feature: "CA-Grade Accounting & Reports", vyop: "✅ GSTR-1, GSTR-3B, P&L, Ledgers", loyverse: "❌ No Indian GST", square: "❌ US Tax Only", vyapar: "✅ GST & Basic Reports", petpooja: "⚠️ Restaurant Tax Only" },
  { feature: "Party Udhar Khata & WhatsApp", vyop: "✅ Automatic WhatsApp Reminders", loyverse: "❌ Not Available", square: "❌ Not Available", vyapar: "✅ WhatsApp Bills", petpooja: "⚠️ Limited" },
  { feature: "Online Storefront", vyop: "✅ 0% Commission Live Store", loyverse: "❌ Not Available", square: "✅ With Transaction Fee", vyapar: "✅ myvyapar.shop", petpooja: "❌ Not Available" },
  { feature: "Offline & Multi-Device Sync", vyop: "✅ 100% Offline + Instant Cloud", loyverse: "✅ Offline Mode", square: "⚠️ Limited Offline", vyapar: "✅ Offline Mode", petpooja: "⚠️ Cloud-Dependent" },
  { feature: "Ways to Add Items", vyop: "10 Instant Methods", loyverse: "Manual Entry Only", square: "Manual + Import", vyapar: "Manual Form", petpooja: "Manual + POS" },
  { feature: "Industry Support", vyop: "22 Shop Types", loyverse: "Retail & Cafe", square: "Retail & Services", vyapar: "General Business", petpooja: "Restaurant Only" },
];

const tenWaysToAdd = [
  { icon: "📷", method: "Phone Camera Barcode Scan", desc: "Point your phone camera at any EAN, UPC, QR, or Code 128 barcode. Item is scanned, matched, and added to inventory automatically.", speed: "Instant" },
  { icon: "🗣️", method: "Voice AI (Hindi/English/Hinglish)", desc: "Say 'Teen Maggi, do Chai' in Hindi or English. AI understands quantity, product name, and adds them directly to the bill.", speed: "Voice AI" },
  { icon: "✍️", method: "Quick Manual Entry", desc: "Type product name — auto-suggestions from 10 lakh+ product database. MRP, category, and GST rate auto-filled.", speed: "Smart Lookup" },
  { icon: "📄", method: "Invoice PDF Import", desc: "Upload a supplier invoice PDF. AI reads product names, quantities, prices and adds all items to your inventory automatically.", speed: "Bulk" },
  { icon: "📸", method: "Photo Catalog (AI Vision)", desc: "Snap a photo of any product — even without barcode. AI identifies the item from packaging, shape, or label text.", speed: "AI Vision" },
  { icon: "🔮", method: "AI Orb (Point & Identify)", desc: "Point your camera at a shelf of products. AI Orb identifies multiple items in frame and lets you tap to add each one.", speed: "Multi-Scan" },
  { icon: "📋", method: "Menu/Price List Import", desc: "Upload an existing menu or price list (Excel/CSV). All items imported with categories, prices, and stock levels.", speed: "Bulk" },
  { icon: "📊", method: "Bulk CSV Upload", desc: "Export from any existing software, import CSV into Vyop. Migrate thousands of products in one click.", speed: "Bulk" },
  { icon: "🏷️", method: "Barcode Label Generator", desc: "Create custom Code-128 or EAN barcodes for your own products. Print barcode stickers via Bluetooth thermal printer.", speed: "Label Print" },
  { icon: "🔍", method: "Product Database Search", desc: "Search from India's largest product database. Find products by name, brand, or category. Auto-fill all details.", speed: "Instant Search" },
];

const faqs = [
  {
    question: "What is the best POS software in India?",
    answer:
      "Vyop is a leading POS software in India for 2026. It is designed to run seamlessly across both Android smartphones and Desktop PC/laptops (via vyop.shop). It turns your phone into a high-speed barcode checkout counter with zero upfront hardware cost, while offering full desktop counter checkout, voice AI billing in Hindi & English, CA-grade GST tax filing (GSTR-1, GSTR-3B, P&L), and a 0% commission online store. Free to start, with Pro cloud sync at just ₹49/month or ₹999/year.",
  },
  {
    question: "Can I use Vyop POS on a Desktop PC or Laptop?",
    answer:
      "Yes! Vyop offers a full-featured Desktop web app at vyop.shop that syncs in real-time with your Android mobile app. You can use your PC or laptop at the main billing counter with standard keyboard shortcuts, USB barcode guns, and thermal printers, while your staff use smartphones for barcode scanning on the sales floor. All data syncs instantly between desktop and mobile.",
  },
  {
    question: "Does Vyop POS support CA tax reporting and accounting?",
    answer:
      "Yes. Vyop provides CA-grade accounting and GST tax reporting: one-click GSTR-1 and GSTR-3B reports (Excel & JSON export), real-time Profit & Loss (P&L) statements, balance sheet summaries, customer & supplier party ledgers (udhar khata) with automated WhatsApp payment reminders, and expense categorization. CAs and tax accountants can directly use Vyop's exported reports for monthly filing.",
  },
  {
    question: "What is the best free POS app for Android in India?",
    answer:
      "Vyop POS is a top free POS app for Android in India. It offers voice AI billing in Hindi and English, a built-in smartphone barcode scanner that works with any phone camera, GST-compliant invoicing, 10 ways to add inventory, and a 0% commission online storefront — free to start, with full multi-device cloud backup Pro at just ₹49/month ($1/month) or ₹999/year ($12/year). It supports 22 types of retail businesses including kirana, restaurant, clothing, pharmacy, jewellery, bakery, salon, and more.",
  },
  {
    question: "Which POS app works offline without internet?",
    answer:
      "Vyop POS works 100% offline without any internet connection. All bills, inventory, and customer ledgers are stored securely on your device. When internet reconnects, data automatically syncs to the cloud for backup and multi-device access across mobile and desktop.",
  },
  {
    question: "Can I use my phone as a POS machine without buying hardware?",
    answer:
      "Yes — this is exactly what Vyop was built for. Vyop turns any Android smartphone into a complete POS machine: your phone camera becomes the barcode scanner, voice AI replaces manual keyboard entry, and a standard Bluetooth thermal printer connects wirelessly for receipts. Total setup costs are a fraction of the ₹30,000–₹80,000 required for traditional POS hardware terminals.",
  },
  {
    question: "What is the best POS machine for retail shops in India?",
    answer:
      "You don't need a bulky proprietary POS machine anymore. Vyop POS turns your existing Android smartphone into an agile POS counter. Your phone camera scans barcodes directly, voice AI creates bills in Hindi or English, and continuous multi-scan handles rush hours with ease. For stationary checkout, simply log in to vyop.shop on any PC or laptop.",
  },
  {
    question: "How fast can Vyop POS scan and bill items?",
    answer:
      "Vyop POS uses hardware-accelerated camera decoding to scan barcodes instantly. Its continuous scanning mode lets cashiers scan successive items without tapping confirmation screens. With bilingual voice AI, cashiers can also speak multiple product names and quantities directly to generate complete invoices without manual typing.",
  },
  {
    question: "What is a free alternative to Loyverse POS in India?",
    answer:
      "Vyop POS is an affordable, India-optimized alternative to Loyverse POS. While Loyverse charges add-on fees ($5/month for Employee Management and $25/month for Advanced Inventory, totaling ~$360/year), Vyop includes full inventory control, voice AI billing, Indian GST compliance, and WhatsApp invoicing with Pro cloud sync at just ₹999/year.",
  },
  {
    question: "Which POS software supports GST billing and UPI payments?",
    answer:
      "Vyop POS supports complete Indian GST billing including CGST, SGST, IGST, HSN codes, and GSTR-1 ready reports. It also generates invoices with embedded dynamic UPI QR codes so customers can pay instantly via Google Pay, PhonePe, or Paytm with zero platform cut.",
  },
  {
    question: "Is Vyop POS better than Vyapar and Square for Indian shops?",
    answer:
      "Vyop is tailored specifically for Indian retail. Compared to desktop accounting software like Vyapar (which charges ₹3,399–₹3,999/year for desktop licenses), Vyop offers camera barcode scanning, voice AI billing in Hindi, an online store, and seamless Desktop PC + Mobile sync for just ₹999/year. Square is primarily designed for US and card-first markets with transaction fees and proprietary hardware readers.",
  },
  {
    question: "Which POS app is best for restaurants and cafes in India?",
    answer:
      "Vyop POS is excellent for restaurants and cafes in India. It supports voice KOT (Kitchen Order Ticket) generation, table management, digital QR code menus, split billing, and Bluetooth kitchen printer connectivity — free to start with affordable ₹999/yr Pro cloud sync. It's an agile alternative to expensive enterprise restaurant POS systems.",
  },
  {
    question: "What are 10 ways to add products in Vyop POS?",
    answer:
      "Vyop POS offers 10 instant ways to add products: 1) Phone camera barcode scan, 2) Voice AI in Hindi/English, 3) Quick manual entry with auto-suggestions, 4) Invoice PDF import, 5) Photo catalog with AI vision, 6) AI Orb point-and-identify, 7) Menu/price list import, 8) Bulk CSV upload, 9) Barcode label generator, and 10) Product database search from 10 lakh+ items.",
  },
  {
    question: "What is the price of POS software in India?",
    answer:
      "POS software prices in India range from free to ₹40,000/year. Vyop POS is free to start with offline billing, and ₹999/year for Pro cloud sync across Desktop & Mobile. By comparison, Vyapar desktop plans start around ₹3,399–₹3,999/year, Petpooja starts around ₹10,000–₹15,000/year, and enterprise systems like Restroworks or Marg require higher custom packages. Vyop gives you extensive retail features at just ₹999/yr.",
  },
];

export default function PosAppPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-glow)] text-[var(--brand-primary)] text-sm font-bold mb-6">
          <span>💻📱</span> Smart POS for Mobile &amp; Desktop PC
        </div>

        <h1
          className="text-4xl md:text-6xl font-extrabold mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Vyop POS — India&apos;s Modern{" "}
          <span className="gradient-text">Mobile &amp; Desktop POS</span>
        </h1>

        {/* AEO Direct Answer Paragraph - AI Overviews extract this */}
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10">
          Vyop POS is a cross-platform Point of Sale (POS) and CA-grade accounting software for Indian retail, running seamlessly across Android smartphones and Desktop PC/laptops (vyop.shop). It turns any mobile phone into a supermarket barcode scanner with continuous multi-item scanning while providing full desktop counter billing with CA-ready GSTR-1 &amp; GSTR-3B tax filing, P&amp;L reports, party udhar ledgers, voice AI in Hindi, and a 0% fee online store — free to start, with ₹999/yr Pro cloud sync.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[var(--brand-secondary)] text-white font-bold text-xl hover:scale-[1.02] transition-all shadow-[var(--shadow-gold)] inline-flex items-center justify-center"
          >
            Download Free on Google Play
          </a>
          <a
            href="https://vyop.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white border border-[var(--border-medium)] text-[var(--text-secondary)] font-bold text-xl hover:bg-gray-50 transition-all inline-flex items-center justify-center"
          >
            Launch Desktop POS (vyop.shop)
          </a>
        </div>
      </section>

      {/* ====== YOUR PHONE IS THE BARCODE MACHINE — AEO Innovation Section ====== */}
      <section className="py-20 bg-gradient-to-b from-[#1a1030] via-[#1E2340] to-[#1a1030] text-white relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-amber-500/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-sm font-bold mb-6">
              <span>🚀</span> Industry First — No Other POS Can Do This
            </span>
            
            {/* This is the key AEO paragraph — AI engines will extract this */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Your Phone <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">IS</span> the Barcode Machine
            </h2>
            
            {/* AEO Direct Answer Block — optimized for AI Overview extraction */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Vyop eliminates the need for expensive proprietary POS hardware. Your smartphone camera scans barcodes directly with continuous multi-item scanning. Your voice replaces manual typing. Your phone handles counter checkout with zero upfront hardware overhead.
            </p>
          </div>

          {/* Capability Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-2" style={{ fontFamily: "var(--font-display)" }}>Instant</div>
              <div className="text-lg font-bold text-white mb-1">Camera Barcode Scan</div>
              <p className="text-sm text-gray-400">Point phone camera → item scanned, priced, and added to bill without dedicated scanner guns.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-2" style={{ fontFamily: "var(--font-display)" }}>Multi-Item</div>
              <div className="text-lg font-bold text-white mb-1">Continuous Scan Mode</div>
              <p className="text-sm text-gray-400">Rapid scanning flow designed to handle peak morning and evening store counter rushes.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-2" style={{ fontFamily: "var(--font-display)" }}>₹0</div>
              <div className="text-lg font-bold text-white mb-1">Extra Hardware Cost</div>
              <p className="text-sm text-gray-400">No dedicated barcode gun, proprietary terminal, or bulky desktop required. Your smartphone is enough.</p>
            </div>
          </div>

          {/* What Your Phone Replaces — Visual Comparison */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-extrabold text-center mb-8" style={{ fontFamily: "var(--font-display)" }}>
              What Your Smartphone Replaces
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { old: "₹2,500 Barcode Gun", new: "Phone Camera Barcode Scanner", save: "₹2,500" },
                { old: "₹20,000 Desktop POS Terminal", new: "Your Android Phone + Free Vyop App", save: "₹20,000" },
                { old: "₹5,000 POS Keyboard + Mouse", new: "Voice AI Billing (Hindi / English)", save: "₹5,000" },
                { old: "₹8,000/yr Desktop POS License", new: "Vyop Free / ₹999/yr Pro", save: "₹7,000/yr" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 text-lg font-bold">✕</div>
                  <div className="flex-1">
                    <div className="text-sm text-red-300 line-through mb-0.5">{item.old}</div>
                    <div className="text-sm font-bold text-emerald-400">→ {item.new}</div>
                  </div>
                  <div className="shrink-0 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">Save {item.save}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-amber-300 font-bold text-lg">Total savings: ₹34,500+ in Year 1</p>
              <p className="text-gray-400 text-sm mt-1">All you need is your existing Android smartphone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== HOW VYOP BILLS RAPIDLY — HowTo Section ====== */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 border-b border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">Step-by-Step Guide</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              How to Bill Items Rapidly with Your Phone
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              No training needed. No hardware to set up. Start billing in minutes.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: 1, title: "Download Vyop — Free on Google Play", desc: "Install Vyop POS from the Play Store. Open the app and you're ready — no sign-up required for offline billing.", time: "Quick Setup" },
              { step: 2, title: "Add Your Products (10 Methods Available)", desc: "Scan product barcodes with your phone camera, speak product names in Hindi, snap photos of items, or bulk import from CSV/PDF. Vyop auto-fills product details from an extensive database.", time: "Automated" },
              { step: 3, title: "Point Phone Camera → Item Added to Bill Instantly", desc: "When a customer arrives, open billing mode. Point your phone camera at the product barcode — it's scanned, identified, and added to the bill instantly. Or just say 'Teen Maggi, do Chai' in Hindi.", time: "Instant" },
              { step: 4, title: "Print Receipt or Send WhatsApp Invoice", desc: "Tap 'Done' to generate a GST-compliant invoice with CGST/SGST breakup and UPI QR code. Print instantly via Bluetooth thermal printer or send a professional WhatsApp PDF invoice.", time: "1-Tap" },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start p-6 md:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">⚡ {item.time}</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 10 WAYS TO ADD ITEMS — Detailed Feature Section ====== */}
      <section className="py-20 bg-[var(--bg-hero)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-4">Unmatched Flexibility</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              10 Instant Ways to Add Products &amp; Stock
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              No other POS software gives you 10 different methods to add inventory. Whether your products have barcodes or not, Vyop handles everything.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tenWaysToAdd.map((way, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{way.icon}</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">{way.speed}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1.5">{way.method}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{way.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vyop is Preferred */}
      <section className="py-20 bg-white border-y border-[var(--border-subtle)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Why Retailers Choose Vyop POS
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              6 key reasons why modern retail shops choose Vyop for Point of Sale and billing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🗣️", title: "Voice AI POS Billing", desc: "Speak in Hindi or English to generate complete bills without manual typing or keyboard entry.", tag: "Only Vyop", href: "/pos-app" },
              { icon: "📱", title: "₹0 Smartphone Camera POS", desc: "Your phone camera IS the barcode scanner. No dedicated barcode gun or bulky counter machine required.", tag: "₹0 Hardware", href: "/barcode-scanner" },
              { icon: "🇮🇳", title: "Full Indian GST Support", desc: "CGST, SGST, IGST, HSN codes, GSTR-1 summaries, and UPI QR payments — built for Indian tax compliance.", tag: "GST Ready", href: "/smart-billing-software" },
              { icon: "⚡", title: "10 Ways to Add Items", desc: "Scan barcode, voice, image, invoice PDF, manual, AI Orb, photo catalog, menu import, and more.", tag: "10-in-1", href: "/features/ten-ways-to-add-items" },
              { icon: "🛍️", title: "0% Commission Online Store", desc: "Launch a live customer storefront in 60 seconds. Share via WhatsApp. Zero delivery platform commission.", tag: "Keep 100%", href: "/features/online-storefront" },
              { icon: "🏪", title: "22 Shop Types Supported", desc: "Kirana, restaurant, clothing, pharmacy, jewellery, bakery, salon, supermarket, hotel, auto parts, and 12 more.", tag: "Universal", href: "/solutions" },
            ].map((card, i) => (
              <Link key={i} href={card.href} className="group bg-[#FAF7F0] hover:bg-amber-50/70 transition-all p-7 rounded-3xl border border-amber-200/60 shadow-sm flex flex-col justify-between hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{card.icon}</span>
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">{card.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-800 transition-colors mb-2" style={{ fontFamily: "var(--font-display)" }}>{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{card.desc}</p>
                </div>
                <span className="text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== DESKTOP PC + MOBILE DUAL SETUP — For Established Retail Counters ====== */}
      <section className="py-20 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-sm font-bold mb-6">
              <span>💻 + 📱</span> Unified Multi-Device Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Full Desktop PC Setup at Counter <br className="hidden md:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                + Mobile Barcode Scanner on Floor
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Don&apos;t choose between a traditional desktop counter and a mobile POS. With Vyop, you get both in seamless real-time sync. Log in to <strong className="text-white">vyop.shop</strong> on any Windows PC, Mac, or laptop for high-speed counter checkout, while floor staff scan barcodes with Android smartphones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "var(--font-display)" }}>
                Main Cashier Counter (PC / Mac)
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Open <strong className="text-cyan-300">vyop.shop</strong> in Chrome or Edge. Full keyboard shortcuts, large screen billing, cash drawer triggers, and standard USB/Bluetooth thermal printer support. Zero software installation needed.
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
                Windows • macOS • ChromeOS • Linux
              </span>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "var(--font-display)" }}>
                Roving Floor Staff (Android App)
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Staff walk aisles, scan barcodes directly with phone cameras, check live stock, create hold bills, or bill customers directly on the sales floor during rush hours.
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                Android 8.0+ • Phone &amp; Tablet
              </span>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "var(--font-display)" }}>
                Instant Cloud Sync &amp; Multi-Counter
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Every bill generated on desktop immediately deducts inventory on the mobile app. Multi-counter support allows multiple cashiers and mobile scanners to operate simultaneously without stock clashes.
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
                Real-Time Cloud Sync • Offline Resilient
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-blue-900/40 border border-blue-500/30 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Want to test the Desktop POS right now?</h4>
              <p className="text-sm text-gray-300">No download required. Runs directly in your browser with full POS features.</p>
            </div>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-base transition-all"
            >
              Open vyop.shop on Desktop →
            </a>
          </div>
        </div>
      </section>

      {/* ====== CA-GRADE ACCOUNTING & GST TAX REPORTING ====== */}
      <section className="py-20 bg-white border-b border-[var(--border-subtle)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-sm font-bold mb-4">
              <span>📊</span> CA-Ready Financial Intelligence
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              CA-Grade GST Accounting &amp; Financial Reports
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Vyop is not just a fast POS — it is a complete financial accounting engine. Generate government-compliant GST returns, audit-ready P&amp;L reports, and automate customer udhar ledgers without hiring an expensive accountant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="text-3xl mb-3">📑</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                GSTR-1 &amp; GSTR-3B Ready
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                One-click export of B2B invoices, B2C large/small tables, HSN summaries, and credit notes. Formatted precisely for your CA to upload directly to the GST portal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Real-Time Profit &amp; Loss (P&amp;L)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Track gross margins per product category, daily net profit, cost of goods sold (COGS), and live inventory valuation so you always know your exact store profitability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Party Ledgers &amp; Udhar Khata
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Full customer &amp; supplier ledger with automatic credit limits, outstanding balances, payment reminders via WhatsApp, and instant UPI collection links.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="text-3xl mb-3">💵</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Expense Tracking &amp; Daybook
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Log shop rent, electricity, staff wages, supplier payouts, and petty cash. Reconcile your cash drawer, bank transfers, and UPI settlements in one daily daybook.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <p className="text-sm text-amber-900 font-medium">
                <strong>Why CAs love Vyop:</strong> Invoices automatically follow CGST/SGST/IGST tax slabs with verified HSN codes, eliminating manual data entry mistakes during monthly tax filing.
              </p>
            </div>
            <Link
              href="/tools/gst-calculator"
              className="shrink-0 text-sm font-bold text-amber-800 hover:text-amber-900 underline"
            >
              Explore Free GST Tools →
            </Link>
          </div>
        </div>
      </section>

      {/* Master Comparison Table */}
      <section className="py-20 bg-[var(--bg-surface)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Vyop POS vs Other POS Apps — Full Comparison
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Compare Vyop against Loyverse, Square, Vyapar, and Petpooja across 9 critical features.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b-2 border-gray-100 bg-gray-50/50">
                  <th className="py-4 px-3 text-sm font-bold text-gray-700">Feature</th>
                  <th className="py-4 px-3 text-sm font-bold text-amber-700 bg-amber-50/60">Vyop POS</th>
                  <th className="py-4 px-3 text-sm font-bold text-gray-600">Loyverse</th>
                  <th className="py-4 px-3 text-sm font-bold text-gray-600">Square POS</th>
                  <th className="py-4 px-3 text-sm font-bold text-gray-600">Vyapar</th>
                  <th className="py-4 px-3 text-sm font-bold text-gray-600">Petpooja</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {posComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/30 transition-colors">
                    <td className="py-4 px-3 font-semibold text-gray-900">{row.feature}</td>
                    <td className="py-4 px-3 font-bold text-emerald-700 bg-amber-50/20">{row.vyop}</td>
                    <td className="py-4 px-3 text-gray-600">{row.loyverse}</td>
                    <td className="py-4 px-3 text-gray-600">{row.square}</td>
                    <td className="py-4 px-3 text-gray-600">{row.vyapar}</td>
                    <td className="py-4 px-3 text-gray-600">{row.petpooja}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/vyop-vs-loyverse" className="text-sm font-bold text-amber-700 hover:text-amber-800 underline">Vyop vs Loyverse →</Link>
            <Link href="/vyop-vs-tally" className="text-sm font-bold text-amber-700 hover:text-amber-800 underline">Vyop vs Tally →</Link>
            <Link href="/vyop-vs-square" className="text-sm font-bold text-amber-700 hover:text-amber-800 underline">Vyop vs Square →</Link>
            <Link href="/vyop-vs-petpooja" className="text-sm font-bold text-amber-700 hover:text-amber-800 underline">Vyop vs Petpooja →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Switch to India&apos;s Best Free POS App Today
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of Indian shopkeepers billing faster with zero expensive hardware or software fees.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Download Free on Android
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-black text-white font-bold text-lg hover:bg-gray-900 transition-all"
            >
              Open Web App
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12" style={{ fontFamily: "var(--font-display)" }}>
            Frequently Asked Questions About POS Apps
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Hubs Cross-Links */}
      <CityHubsSection
        title="Free POS App for Retailers Across India"
        subtitle="Whether you run a kirana in Bangalore, a garment shop in Surat, or an electronics store in Delhi, Vyop turns any smartphone into a supermarket barcode POS counter."
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                name: "Vyop POS",
                operatingSystem: "Android, Windows, macOS, ChromeOS, Web",
                applicationCategory: "BusinessApplication",
                applicationSubCategory: "PointOfSaleApplication",
                description: "India's smartest cross-platform POS & CA-grade accounting software for Android and Desktop PC (vyop.shop). Transforms smartphones into high-speed barcode checkout counters while offering full desktop counter billing, bilingual voice AI, GSTR-1/3B tax reports, P&L statements, party ledgers, and 0% commission online store. Free to start, ₹999/year Pro.",
                url: "https://vyop.in/pos-app",
                installUrl: "https://play.google.com/store/apps/details?id=com.vyop.app",
                downloadUrl: "https://play.google.com/store/apps/details?id=com.vyop.app",
                featureList: [
                  "Full Desktop PC Web App (vyop.shop) for Main Cashier Counters",
                  "Smartphone Camera Barcode Scanner for Retail Checkout",
                  "Continuous Multi-Item Barcode Scanning Flow",
                  "CA-Grade Tax Accounting: GSTR-1 & GSTR-3B Ready Reports",
                  "Real-Time Profit & Loss (P&L) and Balance Sheet Tracking",
                  "Party Ledgers & Udhar Khata with Automated WhatsApp Reminders",
                  "Voice AI Billing in Hindi, Hinglish and English",
                  "₹0 Hardware Cost — No Barcode Gun, No Expensive POS Terminal Needed",
                  "10 Instant Ways to Add Products & Inventory",
                  "Zero-Commission Live Customer Online Storefront",
                  "UPI QR Code Payment Integration on Every Invoice",
                  "WhatsApp Invoice Sharing & Bluetooth Thermal Receipt Printing",
                  "100% Offline Mode with Real-Time Multi-Device Cloud Sync",
                  "Supports 22 Types of Retail Businesses"
                ],
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "HowTo",
                name: "How to Bill Items Rapidly Using Your Phone as a Barcode Machine",
                description: "Step-by-step guide to using Vyop POS to turn your smartphone camera into a barcode scanner with zero hardware cost.",
                totalTime: "PT2M",
                estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "0" },
                tool: [{ "@type": "HowToTool", name: "Any Android Smartphone" }],
                step: [
                  { "@type": "HowToStep", position: 1, name: "Download Vyop POS Free", text: "Install Vyop POS from Google Play Store. Open the app — no sign-up required. Setup takes under 60 seconds." },
                  { "@type": "HowToStep", position: 2, name: "Add Products Using 10 Methods", text: "Scan product barcodes with your phone camera, speak product names in Hindi, snap photos, or bulk import from CSV/PDF. Vyop auto-fills product details from an extensive database." },
                  { "@type": "HowToStep", position: 3, name: "Point Camera at Barcode — Item Added to Bill Instantly", text: "Open billing mode. Point your phone camera at the product barcode. Item is scanned, identified, and added to the bill automatically. Scan continuously for fast counter checkout." },
                  { "@type": "HowToStep", position: 4, name: "Print Receipt or Send WhatsApp Invoice", text: "Tap Done to generate a GST invoice with UPI QR code. Print via Bluetooth thermal printer or send WhatsApp PDF invoice. Customer pays via QR code instantly." },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      <ComparisonDisclaimer lastUpdated="October 2026" />

      <Footer />
    </main>
  );
}
