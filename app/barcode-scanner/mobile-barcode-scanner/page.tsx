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
  Zap,
  Printer,
  Wifi,
  WifiOff,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Mobile Barcode Scanner App | Phone Camera Barcode Scanner for Shop – Vyop",
  description:
    "Turn your mobile phone camera into a professional barcode scanner. Best mobile barcode scanner app for Android & iPhone. Scan barcodes, generate bills, manage inventory from your phone. Free download.",
  alternates: { canonical: "/barcode-scanner/mobile-barcode-scanner" },
  openGraph: {
    title: "Mobile Barcode Scanner – Turn Any Phone into Barcode POS | Vyop",
    description:
      "Best mobile barcode scanner app. Scan barcodes from phone camera, bill customers, print receipts. No hardware. 100% Free.",
    url: "https://vyop.in/barcode-scanner/mobile-barcode-scanner",
    siteName: "Vyop",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vyop Mobile Barcode Scanner" }],
    type: "website",
  },
  keywords: [
    "mobile barcode scanner",
    "mobile barcode scanner app",
    "mobile barcode scanner for android",
    "mobile barcode scanner for iphone",
    "mobile barcode scanner free",
    "mobile barcode scanner for billing",
    "mobile barcode scanner for shop",
    "mobile barcode scanner for retail",
    "phone camera barcode scanner",
    "phone barcode scanner app",
    "turn phone into barcode scanner",
    "smartphone barcode scanner",
    "android barcode scanner app",
    "iphone barcode scanner app",
    "best mobile barcode scanner",
    "mobile barcode scanner for inventory",
    "mobile barcode reader",
    "phone se barcode scan kaise kare",
    "mobile me barcode scanner app",
    "mobile barcode scanner for small business",
    "mobile barcode scanner pos",
    "portable barcode scanner for phone",
    "wireless barcode scanner phone",
    "camera barcode scanner app free",
    "mobile barcode scanner offline",
    "barcode scanner app for shopkeeper",
    "dukan ke liye barcode scanner",
    "mobile se barcode scan karke bill banaye",
    "free mobile barcode scanner download",
    "best barcode scanner for android phone",
  ],
};

const features = [
  {
    title: "Works on ANY Phone",
    desc: "Any Android phone (8.0+) or iPhone. Even budget smartphones under ₹8,000 scan barcodes instantly.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "0.05 Second Decode",
    desc: "60 FPS camera stream decodes barcodes faster than laser guns. Continuous scanning for rapid checkout.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Scan WITHOUT Barcode",
    desc: "Point camera at ANY product — even without barcode. AI identifies items from photos. Only Vyop does this.",
    icon: <Camera className="w-6 h-6" />,
  },
  {
    title: "All Barcode Formats",
    desc: "EAN-13, UPC, QR Code, Code 128, Data Matrix, Code 39, ITF — all 11+ formats from one phone camera.",
    icon: <Scan className="w-6 h-6" />,
  },
  {
    title: "100% Offline Mode",
    desc: "No internet required. Scan barcodes, create bills, print receipts — all offline from your phone.",
    icon: <WifiOff className="w-6 h-6" />,
  },
  {
    title: "Bluetooth Thermal Print",
    desc: "Print barcode labels and receipts via Bluetooth to 58mm/80mm thermal printers directly from phone.",
    icon: <Printer className="w-6 h-6" />,
  },
];

const faqs = [
  {
    q: "Can I use my mobile phone as a barcode scanner?",
    a: "Yes! With Vyop, your mobile phone camera becomes a professional-grade barcode scanner. Just download the free app, point your phone camera at any barcode (EAN, UPC, QR, Code 128), and it scans in 0.05 seconds. No external hardware needed — your phone IS the barcode scanner.",
  },
  {
    q: "Is there a free mobile barcode scanner app?",
    a: "Yes! Vyop is a 100% free mobile barcode scanner app. Download it from Google Play Store. The barcode scanner, billing, and receipt printing features are completely free. No hidden charges. No premium unlock needed for scanning.",
  },
  {
    q: "Which is the best mobile barcode scanner app for Android?",
    a: "Vyop is the best mobile barcode scanner app for Android because it does more than just scan barcodes — it also scans products without barcodes using AI, generates GST bills, prints thermal receipts, manages inventory, and works offline. All from your phone, all free.",
  },
  {
    q: "Can a mobile barcode scanner work without internet?",
    a: "Yes! Vyop's mobile barcode scanner works 100% offline. All barcode decoding runs directly on your phone without needing any internet connection. You can scan, bill, and print receipts even in areas with zero network coverage.",
  },
  {
    q: "How accurate is a phone camera barcode scanner vs laser gun?",
    a: "Vyop's phone camera barcode scanner achieves 99.9% accuracy — matching or exceeding ₹3,000-₹8,000 laser barcode guns. The 60 FPS camera processing ensures barcodes are decoded in under 50 milliseconds, even from angled or partially visible labels.",
  },
  {
    q: "Can I scan multiple barcodes continuously from my phone?",
    a: "Yes! Vyop supports continuous barcode scanning mode — just like a supermarket checkout. Scan one barcode after another without stopping. Each scanned item is automatically added to the bill with correct quantity and pricing.",
  },
];

export default function MobileBarcodeScannerPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50/40 via-white to-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-6">
            <Smartphone className="w-4 h-4 text-blue-600" />
            <span>Best Mobile Barcode Scanner App</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Mobile Barcode Scanner
            </span>
            <br className="hidden sm:inline" />
            for Your Phone
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Turn your <strong>Android phone or iPhone</strong> into a
            professional mobile barcode scanner. Scan any barcode format,
            recognize products without barcode using AI, and bill customers at
            mall speed. <strong>100% free. No hardware needed.</strong>
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black hover:bg-gray-800 text-white font-bold text-base shadow-xl flex items-center justify-center gap-3"
            >
              <Smartphone className="w-5 h-5 text-blue-400" />
              Download Mobile Barcode Scanner
            </a>
            <Link
              href="/barcode-scanner"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-base shadow-lg flex items-center justify-center gap-2"
            >
              Learn More About Barcode Scanner <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% Free</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No Hardware Needed</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Works Offline</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> All Barcode Formats</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Why Vyop is the Best Mobile Barcode Scanner
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Not just a barcode reader — a complete mobile POS system that turns
            your phone into a supermarket checkout counter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {feat.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile vs Hardware Comparison */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Mobile Phone Scanner vs ₹5,000 Laser Gun
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Why spend ₹3,000–₹8,000 on a barcode laser gun when your phone
              camera does it better, faster, and for free?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-red-50/50 border border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">✕</span>
                External Barcode Hardware
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>₹3,000 – ₹8,000 cost per scanner gun</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Tethered by USB cable, restricted to desk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Cannot scan products without barcode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Laser lens breaks when dropped</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Needs a separate PC or billing software</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-emerald-50/50 border-2 border-blue-300 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">✓</span>
                Vyop Mobile Barcode Scanner
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span><strong>₹0 cost</strong> — uses your existing phone camera</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span><strong>100% wireless</strong> — walk anywhere in your shop</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span><strong>AI scan without barcode</strong> — snap photo of any product</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span><strong>No breakage</strong> — it is your phone, durable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span><strong>All-in-one</strong> — scanner + billing + inventory + printer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
              Mobile Barcode Scanner — FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross Links */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/barcode-scanner" className="p-6 rounded-2xl bg-amber-50 border border-amber-200 hover:border-amber-400 transition-all text-center">
            <div className="text-sm font-bold text-amber-800">🔍 Barcode Scanner App</div>
            <div className="text-xs text-gray-600 mt-1">Complete barcode scanner overview</div>
          </Link>
          <Link href="/features/barcode-scanner" className="p-6 rounded-2xl bg-purple-50 border border-purple-200 hover:border-purple-400 transition-all text-center">
            <div className="text-sm font-bold text-purple-800">🤖 AI Product Scanner</div>
            <div className="text-xs text-gray-600 mt-1">Scan products without barcode</div>
          </Link>
          <Link href="/barcode-scanner/barcode-scanner-for-billing" className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 transition-all text-center">
            <div className="text-sm font-bold text-emerald-800">🧾 Barcode Scanner for Billing</div>
            <div className="text-xs text-gray-600 mt-1">Scan barcode & generate bill</div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-10 md:p-16 rounded-3xl shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Get the Best Mobile Barcode Scanner — Free
          </h2>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Download Vyop and turn your phone into a barcode scanner in 30 seconds. Zero cost. Zero setup.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-gray-900 font-bold text-base hover:scale-105 transition-all shadow-xl"
          >
            <Smartphone className="w-5 h-5 text-blue-600" />
            Download Free on Google Play
          </a>
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
              name: "Vyop Mobile Barcode Scanner",
              operatingSystem: "Android, iOS, Web",
              applicationCategory: "BusinessApplication",
              description: "Best free mobile barcode scanner app. Turn phone camera into professional barcode scanner for shop billing. Scan all barcode formats, scan products without barcode using AI. Free download.",
              offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1280" },
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
                { "@type": "ListItem", position: 3, name: "Mobile Barcode Scanner", item: "https://vyop.in/barcode-scanner/mobile-barcode-scanner" },
              ],
            },
          ]),
        }}
      />

      <Footer />
    </main>
  );
}
