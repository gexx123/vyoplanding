import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import {
  Store,
  Smartphone,
  Scan,
  Receipt,
  Users,
  TrendingUp,
  PackageCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  Sparkles,
  CreditCard,
  Bell,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "All-in-One Shop Management App for Retail Stores | Vyop",
  },
  description:
    "Manage your entire shop from your phone: barcode billing, stock inventory, customer udhar khata, daily profit & 0% online store. Free to start, ₹49/mo Pro.",
  alternates: { canonical: "/shop-management-app" },
  openGraph: {
    title: "All-in-One Shop Management App for Retail Stores | Vyop",
    description:
      "The complete app to manage your shop: camera barcode billing, stock inventory, customer credit book, daily cash tally, and 0% commission online store.",
    url: "https://vyop.in/shop-management-app",
    siteName: "Vyop POS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vyop Shop Management App – Run Your Retail Business",
      },
    ],
    type: "website",
  },
  keywords: [
    "manage my shop app",
    "shop management app",
    "retail shop management software",
    "dukan management app",
    "store management app",
    "dukan ka hisab kitab app",
    "shop billing and inventory app",
    "small business shop management app",
    "all in one shop app",
    "dukan chalane wala app",
    "daily shop manager app",
    "retail store manager app",
    "shopkeeper app",
    "stock and billing app for shop",
    "kirana store management app",
    "clothing shop management app",
    "retail inventory and billing app",
    "free shop management software",
    "dukan hisab app",
    "smart dukan app",
  ],
};

const shopModules = [
  {
    icon: Scan,
    title: "Fast Barcode Billing & Invoicing",
    badge: "5-Second Checkout",
    desc: "Turn your phone camera into a supermarket barcode scanner. Or speak items with Voice AI in Hindi and English. Issue GST/non-GST bills, print thermal receipts, and share WhatsApp invoices.",
  },
  {
    icon: PackageCheck,
    title: "Stock & Inventory Control",
    badge: "Zero Stockouts",
    desc: "Track live inventory across thousands of products. Get automatic low-stock notifications and expiry alerts. Add items with 10 instant methods including supplier invoice photo scan.",
  },
  {
    icon: Users,
    title: "Customer Udhar Khata (Credit Book)",
    badge: "Automated Collections",
    desc: "Replace paper bahi-khata. Record customer credit with one tap and send automated friendly WhatsApp reminders with UPI payment links. Collect dues 3x faster.",
  },
  {
    icon: TrendingUp,
    title: "Daily Profit & Cash Drawer Tally",
    badge: "Real-Time P&L",
    desc: "Know your exact daily sales, gross margin, net profit, and expense breakdowns. Reconcile cash drawer totals with UPI and card collections at closing time.",
  },
  {
    icon: Store,
    title: "0% Commission Live Online Store",
    badge: "60-Second Launch",
    desc: "Create a live customer ordering website for your store with zero middleman commissions. Customers browse your catalog and order directly via WhatsApp.",
  },
  {
    icon: Layers,
    title: "Multi-Device Desktop & Mobile Sync",
    badge: "Real-Time Cloud",
    desc: "Use your smartphone on the shop floor to scan stock while running the main checkout counter on a Desktop PC or laptop at vyop.shop. Data syncs in real-time.",
  },
];

const shopTypes = [
  { name: "Kirana & Grocery", icon: "🛒", desc: "Loose dal/rice billing, barcode scanning, bahi khata." },
  { name: "Clothing & Boutiques", icon: "👗", desc: "Size & color variants, custom barcode price tags." },
  { name: "Pharmacy & Chemists", icon: "💊", desc: "Batch numbers, expiry date alerts, GST compliance." },
  { name: "Restaurants & Cafes", icon: "🍽️", desc: "Voice KOT, table billing, QR code digital menus." },
  { name: "Hardware & Electrical", icon: "🔧", desc: "Thousands of loose items, voice search, contractor ledgers." },
  { name: "Electronics & Mobile", icon: "📱", desc: "IMEI barcode tracking, serial numbers, warranty bills." },
  { name: "Bakery & Sweet Shops", icon: "🧁", desc: "AI photo recognition for unpackaged sweets, fast counter." },
  { name: "Footwear & Shoes", icon: "👟", desc: "Shoe size matrices, brand cataloging, thermal receipts." },
];

const faqs = [
  {
    q: "What is a shop management app and why does my business need one?",
    a: "A shop management app replaces multiple messy paper notebooks, calculator slips, and complex desktop software. With Vyop, you can handle barcode billing, track live inventory, maintain customer credit (udhar khata), record expenses, calculate daily net profit, and run an online store all from one smartphone app.",
  },
  {
    q: "Can I manage my shop on both my phone and a computer?",
    a: "Yes! Vyop offers seamless real-time cloud synchronization between the Android mobile app and the Desktop web application at vyop.shop. You can use a PC or laptop at your cash counter while your store employees use smartphones on the sales floor for stock-taking and line-busting billing.",
  },
  {
    q: "How does the customer Udhar Khata feature help me get paid faster?",
    a: "Vyop automatically logs customer purchases against their digital credit ledger. With a single tap, Vyop sends a professional WhatsApp statement with an itemized bill breakdown and a direct UPI QR payment link. Retailers using Vyop report collecting pending credit payments 3x faster than traditional paper diaries.",
  },
  {
    q: "Does this shop management app work offline without internet?",
    a: "Yes! Vyop is built offline-first. Even if your shop's Wi-Fi fails or mobile data is disconnected, you can continue scanning barcodes, generating bills, updating inventory, and printing thermal receipts. As soon as internet is restored, all data syncs automatically to your secure cloud backup.",
  },
  {
    q: "How much does the Vyop Shop Management App cost?",
    a: "Vyop is 100% free to start. You get full barcode scanning, billing, offline mode, and basic inventory without paying anything. For multi-device desktop PC access and automated cloud synchronization, Vyop Pro is only ₹49/month (approx. $1/mo) or ₹999/year (approx. $12/yr) — making it the most affordable retail management solution globally.",
  },
  {
    q: "Is it suitable for small shops with unbarcoded items?",
    a: "Absolutely! Over 50% of retail items in independent shops (loose grains, bakery items, vegetables, custom clothing, hardware fittings) don't have a barcode. Vyop includes built-in AI Visual Recognition: snap a photo of the item, and the AI identifies it and retrieves your saved price tag instantly.",
  },
];

export default function ShopManagementLandingPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-gradient-to-b from-amber-50/70 via-white to-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-6">
            <Store className="w-4 h-4 text-amber-600" />
            <span>Complete Retail Business &amp; Shop Management App</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Manage Your Entire Shop <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              From Your Smartphone
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Stop juggling paper notebooks, calculator slips, and expensive hardware. <strong>Vyop</strong> is the all-in-one shopkeeper app for barcode billing, stock inventory, customer credit ledgers, daily profit tracking, and a free online store. <strong>Free to start, Pro from ₹49/mo ($1/mo).</strong>
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black hover:bg-gray-800 text-white font-bold text-base shadow-xl hover:shadow-black/20 transition-all flex items-center justify-center gap-3"
            >
              <Smartphone className="w-5 h-5 text-amber-400" />
              Download Free Shop App
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
            >
              Open Web POS (vyop.shop) <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="text-xs font-bold text-gray-900">5-Sec Billing</div>
                <div className="text-[11px] text-gray-500">Camera scan & voice</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-2xl">📦</span>
              <div>
                <div className="text-xs font-bold text-gray-900">Live Inventory</div>
                <div className="text-[11px] text-gray-500">Low stock & expiry alerts</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <div>
                <div className="text-xs font-bold text-gray-900">Udhar Khata</div>
                <div className="text-[11px] text-gray-500">WhatsApp payment links</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FDFCF7] border border-amber-100 flex items-center gap-3">
              <span className="text-2xl">💰</span>
              <div>
                <div className="text-xs font-bold text-gray-900">Daily P&amp;L</div>
                <div className="text-[11px] text-gray-500">Track net profit & cash</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Management Pillars */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            6 Apps in 1 Powerful System
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything Needed to Run a Modern Retail Store
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Vyop eliminates software complexity. Here is how it streamlines daily shop operations:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {shopModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.title}
                className="p-7 rounded-3xl bg-white border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-100/80 text-amber-800 text-[11px] font-bold">
                      {mod.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {mod.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-body">
                    {mod.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Built for 22+ Retail Trades */}
      <section className="py-20 px-6 bg-slate-50 border-y border-gray-200/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Customized for Every Type of Retail Shop
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-body">
              Whether you sell groceries, clothing, pharmaceuticals, or electronic goods, Vyop adapts to your workflow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {shopTypes.map((trade) => (
              <div
                key={trade.name}
                className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-xs transition-all"
              >
                <div className="text-3xl mb-3">{trade.icon}</div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{trade.name}</h4>
                <p className="text-xs text-gray-600 font-body">{trade.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Frequently Asked Questions About Managing Your Shop
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Everything you need to know about setting up and running your business with Vyop.
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
            Take Control of Your Shop in Under 60 Seconds
          </h2>
          <p className="text-amber-100 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            Join thousands of independent store owners who run their billing, inventory, and accounts with Vyop. Free to start, Pro from ₹49/month.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black text-white font-bold text-base hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Smartphone className="w-5 h-5 text-amber-400" />
              Download Free Android App
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
              name: "Vyop Shop Management App",
              operatingSystem: "Android, iOS, Web",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "RetailManagementSystem, PointOfSale, InventoryManagement",
              description:
                "All-in-one shop management app for retail stores. Manage barcode billing, stock inventory, customer udhar khata, daily profit & loss, and 0% commission online store.",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "INR",
                lowPrice: "0",
                highPrice: "999",
                offers: [
                  {
                    "@type": "Offer",
                    name: "Vyop Free Tier",
                    price: "0",
                    priceCurrency: "INR",
                    description: "Free smartphone barcode scanning, billing & store",
                  },
                  {
                    "@type": "Offer",
                    name: "Vyop Pro Monthly",
                    price: "49",
                    priceCurrency: "INR",
                    description: "Multi-device desktop web POS & automated cloud sync",
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
              name: "How to Manage Your Retail Shop from Your Smartphone",
              description: "Step-by-step guide to running shop billing, inventory, and customer credit books on your phone.",
              step: [
                {
                  "@type": "HowToStep",
                  position: 1,
                  name: "Install Vyop Free Shop App",
                  text: "Download Vyop from Google Play Store or open vyop.shop in your web browser. No hardware needed.",
                },
                {
                  "@type": "HowToStep",
                  position: 2,
                  name: "Add Products with Barcode or Photo",
                  text: "Scan existing barcodes or snap photos of unbarcoded items — AI automatically organizes your inventory.",
                },
                {
                  "@type": "HowToStep",
                  position: 3,
                  name: "Bill Customers at Supermarket Speed",
                  text: "Point phone camera at barcodes or dictate items with Voice AI to generate thermal receipts or WhatsApp bills.",
                },
                {
                  "@type": "HowToStep",
                  position: 4,
                  name: "Track Daily Profit and Customer Udhar",
                  text: "Review daily net profit, cash drawer tally, and send automated WhatsApp payment reminders to credit customers.",
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
                  name: "Shop Management App",
                  item: "https://vyop.in/shop-management-app",
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
