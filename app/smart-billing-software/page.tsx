import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CityHubsSection from "@/components/sections/CityHubsSection";
import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/industryData";

export const metadata: Metadata = {
  title: "Smart Billing Software & POS App for Retail Shops in India (2026) | Vyop",
  description:
    "India's #1 smart billing software & dukaan POS app. Turn any Android phone into a high-speed billing counter. Voice AI in Hindi, phone camera barcode scanner, Bluetooth thermal printing, WhatsApp bills & udhari khata. Free to start, ₹999/yr Pro.",
  alternates: { canonical: "/smart-billing-software" },
  openGraph: {
    title: "Smart Billing Software & POS App for Retail Shops | Vyop",
    description:
      "Why buy a ₹25,000 billing machine? Create bills in 5 seconds on your phone with Voice AI, camera barcode scanner, Bluetooth thermal printer & WhatsApp udhari reminders.",
    url: "https://vyop.in/smart-billing-software",
    siteName: "Vyop",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vyop Smart Billing Software for Retail Shops",
      },
    ],
    type: "website",
  },
  keywords: [
    "smart billing software",
    "smart billing app",
    "smart billing machine",
    "dukaan billing app",
    "dukan ke liye billing app",
    "shop billing software",
    "mobile billing app with bluetooth printer",
    "bolkar bill banane wala app",
    "bill banane wala app",
    "mobile se bill kaise banaye",
    "barcode scan karke bill banane wala app",
    "bina computer ke billing software",
    "thermal printer billing app",
    "Kirana dukan billing software",
    "Grocery shop billing app",
    "Kapde ki dukan ka billing software",
    "Garment shop billing app",
    "Medical store billing software",
    "Chemist billing app",
    "Restaurant / Cafe / Dhaba billing software",
    "Mobile shop billing software",
    "Hardware & sanitary shop billing software",
    "Mithai dukan / Bakery billing software",
    "Footwear / Joote ki dukan ka billing software",
    "Automobile spare parts billing software",
    "Stationery shop billing app",
    "retail billing software india",
    "free billing software for retail shop",
    "best billing app for small shopkeeper",
    "dukan ka hisab kitab app",
    "fastest billing software for rush hour",
    "udhari khata billing app",
  ],
};

const naturalSearchPoints = [
  {
    icon: "📱",
    query: "“Bina computer ke mobile se bill kaise banaye?”",
    answer:
      "Aapko mehenga ₹30,000 ka computer ya laptop khareedne ki bilkul zaroorat nahi hai. Vyop aapke normal Android phone ko complete billing counter bana deta hai. Bill banayein, print karein aur WhatsApp par share karein — sab mobile se.",
    tag: "Mobile-First POS",
  },
  {
    icon: "📷",
    query: "“Phone camera se barcode scan kaise kare?”",
    answer:
      "Alag se ₹2,500 ka barcode scanner gun lene ki zaroorat nahi. Vyop ka smart camera engine grocery packets, biscuits, shampoo aur kapdo ke barcode ko 0.2 second mein scan karke turant bill mein add karta hai.",
    tag: "₹0 Hardware Cost",
  },
  {
    icon: "🖨️",
    query: "“Bluetooth thermal printer se bill kaise print kare?”",
    answer:
      "Vyop market ke sabhi saste ₹1,500 wale wireless Bluetooth thermal printers (2-inch aur 3-inch rolls) ko support karta hai. Bina taar ke 1 second mein professional receipt print karein jisme aapki dukaan ka naam, GSTIN aur UPI QR code hoga.",
    tag: "Wireless Printing",
  },
  {
    icon: "💰",
    query: "“Customer ki udhari (credit) ka hisab aur reminder kaise bheje?”",
    answer:
      "Khaate ki notebook khone ka darr khatam. Har customer ka digital bahi-khata maintain karein. PhonePe / Google Pay ke payment link ke sath customer ke WhatsApp par 1-tap polite payment reminder bhejein aur udhari jaldi vasool karein.",
    tag: "Auto WhatsApp Khata",
  },
  {
    icon: "📶",
    query: "“Kya bina internet ke dukan ka bill ban sakta hai?”",
    answer:
      "Haan! Vyop 100% offline kaam karta hai. Bijli katne par ya internet band hone par bhi aapka billing counter rukega nahi. Jaise hi internet aayega, sara data secure cloud par automatically sync ho jayega.",
    tag: "100% Offline Mode",
  },
  {
    icon: "🧾",
    query: "“Bina GST ke kaccha bill ya estimate cash memo banega?”",
    answer:
      "Aap 1-click mein GST Tax Invoice (CGST/SGST ke sath) aur Non-GST Estimate / Cash Memo ke beech switch kar sakte hain. Chhote cash transactions ke liye instant bill banayein bina kisi CA ki jhanjhat ke.",
    tag: "Dual Invoicing",
  },
  {
    icon: "📦",
    query: "“Dukan ka stock aur maal khatam hone ka alert kaise mile?”",
    answer:
      "Jab bhi koi item bikta hai, stock automatically minus ho jata hai. Jab maal kam bachega, app aapko Low-Stock Alert dega taaki rush hour mein grahak ko 'maal khatam hai' na bolna pade.",
    tag: "Low Stock Alert",
  },
  {
    icon: "🏷️",
    query: "“Billing machine ka price kitna hai aur sabse sasta option kya hai?”",
    answer:
      "Dukan ke liye dedicated touchscreen billing machine ₹15,000 se ₹35,000 ki aati hai jisme mahine ka software rent bhi lagta hai. Vyop download karne ke liye Free hai, aur complete multi-device Pro cloud sync sirf ₹999/saal (₹2.7/din se bhi kam) hai.",
    tag: "Save ₹25,000+",
  },
];

const smartSuperpowers = [
  {
    icon: "🎙️",
    title: "Voice AI Billing (5-Second Rush Hour Speed)",
    desc: "Shaam ke rush hour mein jab counter par 10 grahak khade ho, to typing ka time nahi hota. Bas Voice Orb dabayein aur boliye: 'Do bread, aadha kilo cheeni, ek Dettol'. Bill 5 second mein ready!",
    badge: "Exclusive to Vyop",
  },
  {
    icon: "📱",
    title: "Smartphone Camera Barcode Scanner",
    desc: "Aapka mobile camera hi mall-grade supermarket barcode gun ban jata hai. Shiny packets, crumpled pouches aur branded clothes ke barcodes bina kisi delay ke scan karein.",
    badge: "₹0 Hardware Cost",
  },
  {
    icon: "📄",
    title: "10 Instant Ways to Add Items",
    desc: "1,000 items haath se type karne ki zaroorat nahi. Wholesaler ke parchi (invoice) ki photo kheenche, master FMCG barcode scan karein, ya voice se bole — inventory turant update.",
    badge: "Zero Setup Friction",
  },
  {
    icon: "💬",
    title: "Itemized WhatsApp Receipts & Direct UPI QR",
    desc: "Paper ka kharcha bachayein. Grahak ke WhatsApp par professional PDF invoice bhejein jisme seedha Google Pay / PhonePe UPI QR code hota hai taaki payment instant aapke bank account mein aaye.",
    badge: "0% Payment MDR",
  },
  {
    icon: "🛍️",
    title: "0% Commission Direct Online Storefront",
    desc: "Zomato ya Blinkit ko 25-30% commission kyu de? Vyop aapko vyop.shop/yourstore link deta hai. Colony ke grahak WhatsApp par direct order karenge aur poora profit aapka hoga.",
    badge: "Grow Your Sales",
  },
  {
    icon: "🎡",
    title: "Spin-The-Wheel Customer Retention Game",
    desc: "Bill ke sath grahak ko digital Spin-the-Wheel game milta hai jisme wo agle visit ke liye discount jeet sakte hain. Naye grahak ko pakka repeat customer banayein!",
    badge: "Customer Loyalty",
  },
];

const comparisonTable = [
  {
    feature: "Upfront Hardware Cost",
    vyop: "₹0 (Works on your existing phone)",
    machine: "₹15,000 – ₹35,000 for POS hardware",
    legacy: "₹25,000 – ₹40,000 for PC + Barcode Gun",
  },
  {
    feature: "Annual Software Cost",
    vyop: "Free to Start / ₹999/yr Pro",
    machine: "₹4,000 – ₹8,000/yr renewal fee",
    legacy: "₹3,999 – ₹18,000+ per year",
  },
  {
    feature: "Counter Billing Speed",
    vyop: "⚡ 5 Seconds (Voice AI + Camera Scan)",
    machine: "⚠️ 30-60 Seconds (Touch keypad)",
    legacy: "🐢 1-2 Minutes (Manual keyboard typing)",
  },
  {
    feature: "Barcode Scanner Included",
    vyop: "✅ Yes (Built-in phone camera AI)",
    machine: "❌ Expensive external scanner",
    legacy: "❌ Extra ₹2,500 USB barcode gun",
  },
  {
    feature: "Printer Support",
    vyop: "✅ Wireless Bluetooth (₹1,500) + PDF",
    machine: "⚠️ Proprietary internal roll only",
    legacy: "❌ Bulky desktop thermal / laser",
  },
  {
    feature: "Customer WhatsApp Khata",
    vyop: "✅ Auto reminder with UPI link",
    machine: "❌ Paper print only",
    legacy: "❌ Manual bookkeeping required",
  },
  {
    feature: "Works During Power Cuts",
    vyop: "✅ 100% Offline battery-operated phone",
    machine: "⚠️ Limited 2-hour battery backup",
    legacy: "❌ Requires UPS or shuts down",
  },
  {
    feature: "Learning Curve",
    vyop: "⭐ Zero (Anyone who uses WhatsApp)",
    machine: "⚠️ Medium (Requires training)",
    legacy: "❌ Difficult (Requires accountant training)",
  },
];

const faqs = [
  {
    q: "What is Smart Billing Software and why is it better than a traditional billing machine?",
    a: "Smart Billing Software runs directly on your smartphone, tablet, or PC without forcing you to buy ₹25,000 bulky hardware. Unlike rigid billing machines, Vyop uses Voice AI in Hindi and English, turns your phone camera into a barcode scanner, prints wirelessly to Bluetooth thermal printers, sends bills on WhatsApp, and tracks customer udhari with automated payment reminders — all starting free with ₹999/year Pro cloud sync.",
  },
  {
    q: "Can I use Vyop on my mobile without purchasing a computer or laptop?",
    a: "Yes! Vyop is 100% mobile-first. You do not need a desktop PC, laptop, or separate barcode gun. Everything from counter billing, barcode scanning, stock tracking, and thermal receipt printing happens seamlessly from your existing Android smartphone.",
  },
  {
    q: "How does phone camera barcode scanning work during busy hours?",
    a: "Vyop's camera barcode scanner is built with an ultra-fast AI engine that auto-focuses on standard 1D and 2D manufacturer barcodes in under 0.2 seconds. It works effortlessly even on shiny plastic wrappers, crumpled packets, and curved bottles.",
  },
  {
    q: "Can I connect a small Bluetooth thermal printer to print receipts?",
    a: "Yes! Vyop connects in one tap to any standard 58mm (2-inch) or 80mm (3-inch) portable Bluetooth thermal printer (costing around ₹1,500 on Amazon). Invoices print in 1 second with your shop name, address, GSTIN, and direct UPI payment QR code.",
  },
  {
    q: "Does Vyop work without internet during power cuts or network issues?",
    a: "Yes! Vyop is built offline-first. You can create bills, scan products, and record customer transactions completely without internet. The moment your phone connects to mobile data or Wi-Fi, all records automatically sync to the secure cloud.",
  },
  {
    q: "Can I create both GST tax invoices and non-GST cash memos?",
    a: "Yes. With a single tap, you can switch between a formal GST Tax Invoice (with CGST, SGST, IGST, and HSN codes) and a simple Non-GST Cash Memo or Estimate. It is ideal for all types of customer transactions.",
  },
  {
    q: "How does automated WhatsApp udhari recovery work?",
    a: "Every credit transaction is logged in your customer's digital bahi-khata. When a balance is due, Vyop sends a polite, itemized bill to the customer's WhatsApp along with a clickable UPI payment link (Google Pay, PhonePe, Paytm). Customers can verify their bill and pay instantly without awkward phone calls.",
  },
  {
    q: "What are the 10 ways to add inventory without manual typing?",
    a: "Vyop eliminates painful manual data entry through: 1) Wholesaler invoice photo scan (AI extracts all lines), 2) Pre-loaded FMCG barcode database, 3) Voice speaking, 4) Excel bulk upload, 5) Barcode generator, 6) Quick counter add, 7) Photo tagging, 8) Variant size/color matrix, 9) Loose kg calculation, and 10) Online store catalogue import.",
  },
  {
    q: "How much does Vyop Smart Billing Software cost?",
    a: "Vyop is free to download and start using for offline billing, barcode scanning, and basic inventory. For full multi-device cloud backup and unlimited online sync across devices, Vyop Pro is just ₹999/year (less than ₹2.7/day) — saving you ₹15,000 to ₹35,000 compared to dedicated POS machines and expensive accounting software.",
  },
  {
    q: "Which types of retail shops can use Vyop?",
    a: "Vyop supports 22+ retail and service categories, including Kirana & Grocery, Clothing & Garments, Footwear, Pharmacy & Medical, Restaurants & Cafes, Mobile & Electronics, Hardware & Sanitary, Sweet Shops & Bakeries, Automobile Spares, Dairy, Fruits & Vegetables, Stationery, Salons, Jewellery, and more.",
  },
  {
    q: "Does Vyop have dedicated features for Kirana, Garment, Medical, Restaurant, and Mobile shops?",
    a: "Yes! Vyop is tailored specifically for each trade: Kirana shops get loose kg weight conversion and FMCG barcode scanning ('Kirana dukan billing software' / 'Grocery shop billing app'); Garment stores get size/color barcode sticker printing ('Kapde ki dukan ka billing software' / 'Garment shop billing app'); Medical stores get batch number and expiry date warnings ('Medical store billing software' / 'Chemist billing app'); Restaurants and Dhabas get voice KOT generation ('Restaurant / Cafe / Dhaba billing software'); and Mobile shops get IMEI tracking ('Mobile shop billing software'). Hardware, Mithai/Bakery, Footwear, Automobile spares, and Stationery shops also have customized workflows.",
  },
];

export default function SmartBillingSoftwarePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)] text-[var(--text-primary)]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs md:text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
          <span>⚡</span> Smart Dukaan Billing Software • Made for Indian Retailers
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl mx-auto"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Smart Billing Software & POS App for{" "}
          <span className="gradient-text">Every Shop in India</span>
        </h1>

        <p className="text-lg md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
          Why spend ₹25,000 on a heavy billing machine or struggle with slow computer typing? 
          Vyop turns any Android phone into a high-speed POS with <strong>Voice AI</strong>, 
          <strong> phone camera barcode scanning</strong>, <strong>Bluetooth thermal printing</strong>, 
          and <strong>automated WhatsApp udhari reminders</strong>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-black text-white font-bold text-lg hover:scale-[1.02] transition-all shadow-xl"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186c-.19-.18-.3-.43-.3-.71V2.524c0-.28.11-.53.3-.71zm10.89 10.89l2.36 2.36-11.89 6.87 9.53-9.23zm0-1.41L4.97 2.06l11.89 6.87-2.36 2.36zm1.41.71l2.87-1.66c.82-.47.82-1.24 0-1.71l-2.87-1.66-2.12 2.12 2.12 2.91z" />
            </svg>
            Download Free Android App
          </a>

          <a
            href="https://vyop.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-amber-600 text-white font-bold text-lg hover:bg-amber-700 hover:scale-[1.02] transition-all shadow-lg shadow-amber-500/20"
          >
            Launch Web App (PC & Mobile) →
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-semibold text-gray-700">
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">✓ Free to Start / ₹999/yr Pro</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">✓ Phone Camera Barcode Scanner</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">✓ Hindi & English Voice Billing</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">✓ Bluetooth Thermal Print (58mm/80mm)</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">✓ 100% Offline with Cloud Sync</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">✓ 22+ Retail Shop Types</span>
        </div>
      </section>

      {/* Interactive Counter Simulation Card */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-700 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-lg">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 inline-block">
                Counter Rush Hour Made Simple
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
                Stop Typing. Start Speaking or Scanning.
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                When 10 customers wait in evening queues, traditional keyboard entry takes 2 minutes per bill. 
                With Vyop, tap the Voice Orb or aim your smartphone camera at product barcodes. 
                Your bill prints in <strong>5 seconds flat</strong>.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>⚡ 5-Sec Billing</span>
                <span>•</span>
                <span>📱 No Computer Needed</span>
                <span>•</span>
                <span>🧾 WhatsApp Invoices</span>
              </div>
            </div>

            <div className="w-full md:w-auto bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-left min-w-[280px]">
              <div className="text-xs text-amber-400 font-bold uppercase mb-2">Live Voice Simulation</div>
              <div className="text-sm font-mono text-gray-200 mb-4 bg-white/5 p-3 rounded-lg border border-white/5">
                🎙️ &quot;Do bread, aadha kilo jeera, ek Dettol sabun&quot;
              </div>
              <div className="border-t border-white/10 pt-3 text-xs space-y-1.5 text-gray-300 font-mono">
                <div className="flex justify-between"><span>Bread (400g) x2</span><span className="font-bold text-white">₹80.00</span></div>
                <div className="flex justify-between"><span>Jeera (500g)</span><span className="font-bold text-white">₹160.00</span></div>
                <div className="flex justify-between"><span>Dettol Soap 100g</span><span className="font-bold text-white">₹45.00</span></div>
                <div className="flex justify-between text-amber-400 font-bold pt-2 border-t border-white/10 text-sm">
                  <span>Total Bill</span>
                  <span>₹285.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Natural Searches & Shopkeeper Questions */}
      <section className="py-20 px-6 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-700 bg-amber-50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Everyday Shopkeeper Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display mb-4">
              Real Questions Shopkeepers Ask — Solved.
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              You don&apos;t need complicated accounting jargon. You need a practical, fast tool that works on your counter every single day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {naturalSearchPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-3xl bg-gray-50/80 border border-gray-200/80 hover:border-amber-400/80 transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-2xl bg-white shadow-sm border border-gray-100">{item.icon}</span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {item.query}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Why It's Called SMART Billing (6 Superpowers) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 bg-amber-50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            Next-Gen Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display mb-4">
            Why It&apos;s Called <span className="gradient-text">SMART</span> Billing
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Traditional software only records what happened. Vyop actually speeds up your daily sales, attracts repeat buyers, and protects your profit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {smartSuperpowers.map((sp, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-200/80 hover:border-amber-400 transition-all shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl p-3 rounded-2xl bg-amber-50 border border-amber-100">{sp.icon}</span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                    {sp.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {sp.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {sp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: 3-Way Comparison Table */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-700 bg-amber-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Direct Hardware & Software Comparison
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display mb-4">
              Vyop Smart POS vs Alternatives
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Compare upfront costs, hardware headaches, and speed before investing your hard-earned money.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/50">
                  <th className="p-4 md:p-6 font-bold text-gray-900">Feature / Cost</th>
                  <th className="p-4 md:p-6 font-extrabold text-amber-700 bg-amber-50/60">
                    Vyop Smart App
                  </th>
                  <th className="p-4 md:p-6 font-semibold text-gray-600">
                    ₹25,000 Billing Machine
                  </th>
                  <th className="p-4 md:p-6 font-semibold text-gray-600">
                    Desktop Software (Tally/Busy)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonTable.map((row, i) => (
                  <tr key={i} className="hover:bg-amber-50/20 transition-colors">
                    <td className="p-4 md:p-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-4 md:p-6 font-bold text-amber-700 bg-amber-50/30">
                      {row.vyop}
                    </td>
                    <td className="p-4 md:p-6 text-gray-600">{row.machine}</td>
                    <td className="p-4 md:p-6 text-gray-600">{row.legacy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: All 22 Shop Types Directory Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 bg-amber-50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            Tailored For Your Specific Trade
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display mb-4">
            Smart Billing for All 22+ Shop Types
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Every business has unique requirements. Select your shop type to explore custom features like loose-item conversion, batch/expiry alerts, size matrices, and voice KOTs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/solutions/${ind.slug}`}
              className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-4 p-3 rounded-2xl bg-amber-50/60 w-fit group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors mb-2">
                  {ind.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {ind.tagline}
                </p>
              </div>

              <div className="flex items-center text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform">
                Explore {ind.name} Features →
              </div>
            </Link>
          ))}
        </div>

        {/* Popular Shop Searches / Dukan Category Wise Search Chips */}
        <div className="mt-16 p-8 md:p-10 bg-amber-50/70 rounded-3xl border border-amber-200/80">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-amber-800 bg-amber-100 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              दुकान के अनुसार खोजें • Top Category Searches
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-display text-gray-900">
              Popular Shop Billing Searches in India
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Indian dukandars search these exact terms for their business — Vyop is customized for every single trade:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { query: "Kirana dukan billing software", alt: "Grocery shop billing app", slug: "kirana-grocery", icon: "🛒" },
              { query: "Kapde ki dukan ka billing software", alt: "Garment shop billing app", slug: "clothing-apparel", icon: "👗" },
              { query: "Medical store billing software", alt: "Chemist billing app", slug: "pharmacy-chemist", icon: "💊" },
              { query: "Restaurant / Cafe / Dhaba billing software", alt: "Fast food KOT billing app", slug: "restaurant-cafe", icon: "🍽️" },
              { query: "Mobile shop billing software", alt: "Electronics IMEI tracking POS", slug: "electronics-mobile", icon: "📱" },
              { query: "Hardware & sanitary shop billing software", alt: "Paint & electricals billing app", slug: "hardware-sanitary", icon: "🔧" },
              { query: "Mithai dukan / Bakery billing software", alt: "Sweet shop weighing scale POS", slug: "bakery-sweet-shop", icon: "🍰" },
              { query: "Footwear / Joote ki dukan ka billing software", alt: "Shoe store barcode app", slug: "clothing-apparel", icon: "👟" },
              { query: "Automobile spare parts billing software", alt: "Auto garage repair billing", slug: "auto-parts", icon: "🚗" },
              { query: "Stationery shop billing app", alt: "Book store GST billing software", slug: "stationery-bookshop", icon: "📚" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={`/solutions/${item.slug}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-200 hover:border-amber-500 hover:bg-amber-50/60 shadow-sm transition-all group"
              >
                <span className="text-2xl p-2 rounded-xl bg-amber-50/80">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <span className="text-xs md:text-sm font-bold text-gray-900 group-hover:text-amber-800 transition-colors block truncate">
                    &quot;{item.query}&quot;
                  </span>
                  <span className="text-[11px] text-gray-500 block truncate">
                    / &quot;{item.alt}&quot;
                  </span>
                </div>
                <span className="text-xs text-amber-600 font-bold group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: AEO FAQ Section */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-700 bg-amber-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">
              Everything You Need to Know About Smart Billing
            </h2>
            <p className="text-gray-600 text-base">
              Clear, transparent answers to help you choose the best billing app for your shop.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Hubs Cross-Links */}
      <CityHubsSection
        title="Smart Billing Software Across India"
        subtitle="Shopkeepers in 65+ cities use Vyop to replace expensive desktop billing machines with mobile smart billing. Find how Vyop works for businesses in your city."
      />

      {/* Section 6: Bottom CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-br from-amber-500 to-amber-700 text-white p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-display">
            Upgrade Your Shop to Smart Billing Today
          </h2>
          <p className="text-amber-100 text-base md:text-xl max-w-2xl mx-auto mb-8 font-medium">
            Join thousands of modern dukandars across India. Bill in 5 seconds, cut hardware costs to ₹0, and recover your udhari faster.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-black text-white font-bold text-lg hover:scale-105 transition-all shadow-xl"
            >
              Get Started on Google Play
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Open Web Application
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
              "name": "Vyop Smart Billing Software",
              "operatingSystem": "Android, Web, Windows",
              "applicationCategory": "BusinessApplication",
              "description":
                "Smart billing software and dukaan POS app for Indian retail shops. Features Voice AI billing, smartphone camera barcode scanner, Bluetooth thermal printer support, WhatsApp invoicing, and automatic udhari khata reminders.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "description": "Free basic tier with ₹999/year Pro cloud sync",
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1280",
              },
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
                  "name": "Smart Billing Software",
                  "item": "https://vyop.in/smart-billing-software",
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
