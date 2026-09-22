import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import {
  Scan,
  Camera,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Receipt,
  Package,
  Printer,
  Store,
  ShoppingCart,
  CreditCard,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Barcode Scanner for Billing | Scan Barcode & Create Bill from Phone – Vyop",
  description:
    "Best barcode scanner for billing. Scan product barcodes from phone camera and create GST bills instantly. Barcode billing software for shops, retail stores, kirana. Free app. No hardware.",
  alternates: { canonical: "/barcode-scanner/barcode-scanner-for-billing" },
  openGraph: {
    title: "Barcode Scanner for Billing – Scan & Bill from Phone | Vyop",
    description:
      "Scan barcodes with phone camera and generate bills instantly. Complete barcode billing software for Indian shops. Free.",
    url: "https://vyop.in/barcode-scanner/barcode-scanner-for-billing",
    siteName: "Vyop",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vyop Barcode Scanner for Billing" }],
    type: "website",
  },
  keywords: [
    "barcode scanner for billing",
    "barcode scanner billing software",
    "barcode scanner billing app",
    "barcode scan karke bill banaye",
    "barcode scanner se billing kaise kare",
    "barcode billing app for mobile",
    "barcode billing software free",
    "barcode billing software for shop",
    "barcode billing software for retail",
    "barcode billing app for android",
    "scan barcode and generate bill",
    "scan barcode make bill",
    "barcode billing machine on phone",
    "barcode billing system for small business",
    "barcode scan and bill",
    "barcode scanner for shop billing",
    "barcode scanner for retail billing",
    "barcode scanner for kirana store billing",
    "barcode se bill kaise banaye",
    "barcode billing app free download",
    "how to do barcode billing from phone",
    "mobile se barcode billing",
    "barcode billing without computer",
    "barcode billing app without machine",
    "phone barcode billing",
    "best barcode billing app india",
    "gst barcode billing software",
    "thermal printer barcode billing",
    "barcode scanner pos billing",
    "barcode scanner for dukan billing",
    "supermarket barcode billing on phone",
    "mall billing speed barcode scanner",
    "barcode scanner with invoice generator",
    "barcode scanner for grocery billing",
    "barcode scanner for medical billing",
    "barcode scanner for clothing billing",
  ],
};

const billingSteps = [
  {
    step: "1",
    title: "Add Products to Your Inventory",
    desc: "Scan product barcodes to auto-add items with name, MRP, and category. For items without barcode, snap a photo — AI fills in details. You can also add items by voice, invoice scan, or manual entry.",
    color: "amber",
  },
  {
    step: "2",
    title: "Scan Barcode at Checkout to Bill",
    desc: "When a customer comes to the counter, open billing mode. Point your phone camera at product barcodes — each item is instantly added to the bill. Scan continuously like a supermarket cashier. Quantities auto-update.",
    color: "blue",
  },
  {
    step: "3",
    title: "Print Receipt or Send WhatsApp Bill",
    desc: "Tap 'Print' to send a GST-compliant thermal receipt via Bluetooth (58mm/80mm). Or share a professional PDF invoice on WhatsApp with auto-generated UPI QR code for instant payment collection.",
    color: "emerald",
  },
];

const faqs = [
  {
    q: "How to do barcode billing from phone?",
    a: "Download Vyop free from Google Play. Add your products by scanning their barcodes. When a customer comes, open billing mode and point your phone camera at product barcodes — they are instantly added to the bill. Tap Print to generate a thermal receipt. It is that simple. No computer, no laser gun, no hardware needed.",
  },
  {
    q: "Can I use barcode scanner for billing without a computer?",
    a: "Yes! Vyop turns your phone into a complete barcode billing system. No computer, no POS machine, no laser gun needed. Just your Android phone or iPhone. Scan barcodes with phone camera, generate bills, print receipts via Bluetooth — all from your phone.",
  },
  {
    q: "Is barcode billing free with Vyop?",
    a: "Yes! Barcode scanning and billing features are 100% free. Scan unlimited barcodes, generate unlimited bills, print unlimited receipts. Vyop Pro (₹999/year) adds cloud sync across devices, but the barcode billing is completely free forever.",
  },
  {
    q: "Can I print thermal receipts after barcode scanning?",
    a: "Absolutely! Vyop connects via Bluetooth to any 58mm or 80mm thermal receipt printer. After scanning barcodes and creating a bill, tap Print to instantly generate a professional GST receipt — just like big supermarkets and malls.",
  },
  {
    q: "Does barcode billing work for GST invoices?",
    a: "Yes! Vyop automatically calculates CGST, SGST, and IGST on every barcode bill. You can configure GST slabs (5%, 12%, 18%, 28%) per product. Every bill generated is a compliant GST tax invoice with your business GSTIN, HSN codes, and tax breakup.",
  },
  {
    q: "Can I do barcode billing for products without barcodes?",
    a: "Yes — this is Vyop's unique advantage. For products without barcodes (loose items, mithai, custom garments), you can either: 1) Generate custom barcode labels and stick them on products, or 2) Simply point your phone camera at the product — AI recognizes it and adds it to the bill. No typing needed.",
  },
  {
    q: "How is this different from buying a barcode billing machine?",
    a: "A traditional barcode billing machine (POS terminal) costs ₹25,000–₹45,000 plus annual maintenance. Vyop gives you the same barcode scanning and billing capabilities directly on your phone for ₹0. Plus, Vyop can scan products without barcodes — something no hardware POS machine can do.",
  },
  {
    q: "Which shops can use barcode scanner for billing?",
    a: "Any shop! Kirana stores, supermarkets, clothing shops, bakeries, pharmacies, hardware stores, electronics shops, stationery stores, restaurants — any retail business that wants faster checkout billing with barcode scanning.",
  },
];

export default function BarcodeScannerForBillingPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-emerald-50/40 via-white to-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-6">
            <Receipt className="w-4 h-4 text-emerald-600" />
            <span>Scan Barcode → Generate Bill → Print Receipt</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Barcode Scanner for{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Shop Billing
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Scan product barcodes with your <strong>phone camera</strong> and
            generate professional GST bills instantly. The fastest barcode
            billing software for Indian shops.{" "}
            <strong>No computer. No hardware. No cost.</strong> Just your
            smartphone.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black hover:bg-gray-800 text-white font-bold text-base shadow-xl flex items-center justify-center gap-3"
            >
              <Smartphone className="w-5 h-5 text-emerald-400" />
              Start Barcode Billing Free
            </a>
            <Link
              href="/barcode-scanner"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-lg flex items-center justify-center gap-2"
            >
              Explore Barcode Scanner <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="p-3.5 rounded-2xl bg-[#F7FDFA] border border-emerald-100 flex items-center gap-3">
              <span className="text-xl">⚡</span>
              <div>
                <div className="text-xs font-bold text-gray-900">5-Second Billing</div>
                <div className="text-[11px] text-gray-500">Scan → Bill → Print</div>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#F7FDFA] border border-emerald-100 flex items-center gap-3">
              <span className="text-xl">🧾</span>
              <div>
                <div className="text-xs font-bold text-gray-900">GST Compliant</div>
                <div className="text-[11px] text-gray-500">Auto CGST/SGST/IGST</div>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#F7FDFA] border border-emerald-100 flex items-center gap-3">
              <span className="text-xl">🖨️</span>
              <div>
                <div className="text-xs font-bold text-gray-900">Thermal Print</div>
                <div className="text-[11px] text-gray-500">Bluetooth 58/80mm</div>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#F7FDFA] border border-emerald-100 flex items-center gap-3">
              <span className="text-xl">📱</span>
              <div>
                <div className="text-xs font-bold text-gray-900">WhatsApp Invoice</div>
                <div className="text-[11px] text-gray-500">1-tap share with UPI QR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Barcode Billing Works */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              How Barcode Billing Works on Your Phone
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              From scanning barcodes to printing thermal receipts — complete
              barcode billing workflow in 3 simple steps. No training needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {billingSteps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <div className={`w-12 h-12 rounded-2xl bg-${step.color}-500 text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-md`}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get with Barcode Billing */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Complete Barcode Billing Features
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Everything you need for professional barcode billing — scanning, invoicing, printing, inventory, and payments — in one free app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Scan className="w-8 h-8 text-amber-600 mb-4" />
            <h3 className="text-base font-bold text-gray-900 mb-2">High-Speed Barcode Scan</h3>
            <p className="text-xs text-gray-600">0.05s decode. All formats: EAN, UPC, QR, Code 128, Data Matrix.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Camera className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-base font-bold text-gray-900 mb-2">Scan Without Barcode (AI)</h3>
            <p className="text-xs text-gray-600">Point camera at any product. AI identifies it for billing without barcode.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Receipt className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-base font-bold text-gray-900 mb-2">GST Tax Invoices</h3>
            <p className="text-xs text-gray-600">Auto CGST/SGST. HSN codes. Professional GST-compliant invoices.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Printer className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-base font-bold text-gray-900 mb-2">Thermal Receipt Printing</h3>
            <p className="text-xs text-gray-600">Bluetooth 58mm/80mm. Supermarket-style receipts from your phone.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <Package className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-base font-bold text-gray-900 mb-2">Inventory Auto-Update</h3>
            <p className="text-xs text-gray-600">Stock reduces automatically after every bill. Low stock alerts.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <CreditCard className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-base font-bold text-gray-900 mb-2">UPI QR Payment</h3>
            <p className="text-xs text-gray-600">Auto UPI QR on every bill. Zero transaction fees. Instant payment.</p>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Barcode Billing for Every Type of Shop
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🛒", name: "Kirana & Grocery", link: "/solutions/kirana-grocery" },
              { icon: "👗", name: "Clothing & Apparel", link: "/solutions/clothing-apparel" },
              { icon: "🧁", name: "Bakery & Mithai", link: "/solutions/bakery-sweet-shop" },
              { icon: "💊", name: "Pharmacy & Chemist", link: "/solutions/pharmacy-chemist" },
              { icon: "🔧", name: "Hardware & Sanitary", link: "/solutions/hardware-sanitary" },
              { icon: "📱", name: "Mobile & Electronics", link: "/solutions/electronics-mobile" },
              { icon: "🍽️", name: "Restaurant & Cafe", link: "/solutions/restaurant-cafe" },
              { icon: "📚", name: "Stationery & Books", link: "/solutions/stationery-books" },
            ].map((biz, i) => (
              <Link
                key={i}
                href={biz.link}
                className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all text-center group"
              >
                <div className="text-2xl mb-2">{biz.icon}</div>
                <div className="text-sm font-bold text-gray-900 group-hover:text-emerald-700">
                  {biz.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
              Barcode Billing — Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white p-10 md:p-16 rounded-3xl shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Start Barcode Billing from Your Phone — Free
          </h2>
          <p className="text-emerald-100 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Scan barcodes, generate GST bills, print thermal receipts. All from your phone. Zero cost, zero setup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black text-white font-bold text-base hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Smartphone className="w-5 h-5 text-emerald-400" />
              Download Free Barcode Billing App
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-gray-900 font-bold text-base hover:bg-gray-100 transition-all shadow-lg"
            >
              Try Online Barcode Billing
            </a>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Vyop Barcode Scanner for Billing",
              operatingSystem: "Android, iOS, Web",
              applicationCategory: "BusinessApplication",
              description: "Best barcode scanner for billing. Scan product barcodes from phone camera, generate GST bills instantly, print thermal receipts. Complete barcode billing software for Indian shops. Free.",
              offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1280" },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Do Barcode Billing from Phone",
              description: "Step-by-step guide to scanning barcodes and generating bills from your smartphone without buying expensive POS hardware.",
              step: billingSteps.map((s, i) => ({
                "@type": "HowToStep",
                position: i + 1,
                name: s.title,
                text: s.desc,
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://vyop.in" },
                { "@type": "ListItem", position: 2, name: "Barcode Scanner", item: "https://vyop.in/barcode-scanner" },
                { "@type": "ListItem", position: 3, name: "Barcode Scanner for Billing", item: "https://vyop.in/barcode-scanner/barcode-scanner-for-billing" },
              ],
            },
          ]),
        }}
      />

      <Footer />
    </main>
  );
}
