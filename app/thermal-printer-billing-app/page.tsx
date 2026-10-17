import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import {
  Printer,
  Smartphone,
  Zap,
  CheckCircle2,
  Receipt,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  Bluetooth,
  Usb,
  Wifi,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Bluetooth Thermal Printer Billing App (58mm/80mm) | Vyop",
  },
  description:
    "Connect your phone to any Bluetooth or USB thermal receipt printer (58mm/80mm ESC/POS). Print instant GST receipts, barcodes & invoices without drivers.",
  alternates: { canonical: "/thermal-printer-billing-app" },
  openGraph: {
    title: "Bluetooth Thermal Printer Billing App (58mm/80mm) | Vyop",
    description:
      "Print bills directly from your phone to any Bluetooth thermal printer. Works with 58mm and 80mm ESC/POS printers. Custom logo, UPI QR code & GST receipt format.",
    url: "https://vyop.in/thermal-printer-billing-app",
    siteName: "Vyop POS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vyop Bluetooth Thermal Printer Billing App",
      },
    ],
    type: "website",
  },
  keywords: [
    "bluetooth thermal printer app",
    "thermal printer billing app",
    "thermal printer app for android",
    "bluetooth printer billing software",
    "print bill from mobile to thermal printer",
    "58mm bluetooth printer app",
    "80mm thermal receipt printer software",
    "esc pos printer app",
    "receipt maker app with logo",
    "thermal bill printer app",
    "wireless receipt printer for shop",
    "thermal printer pos software",
    "bluetooth receipt maker",
    "thermal printer gst invoice app",
    "mini thermal printer billing app",
    "everycom thermal printer app",
    "pos 58 thermal printer app",
    "tvs thermal printer mobile app",
    "ngx thermal printer billing app",
  ],
};

const printerBrands = [
  "TVS Electronics",
  "Everycom",
  "NGX Technologies",
  "BluPrints",
  "Pegasus",
  "Epson TM Series",
  "Star Micronics",
  "POS-58 / POS-80 (Generic)",
  "Zijiang (ZJ-5802 / ZJ-5805)",
  "Hoin Printers",
  "Sunmi V2 / Built-in Printers",
  "All ESC/POS Compatible",
];

const printerFeatures = [
  {
    icon: Bluetooth,
    title: "Instant Bluetooth Pairing",
    desc: "Connect your phone to any wireless Bluetooth thermal printer in 5 seconds. No driver downloads or computer setup needed.",
  },
  {
    icon: Receipt,
    title: "58mm (2-inch) & 80mm (3-inch)",
    desc: "Seamlessly switches between compact 2-inch pocket slips and full 3-inch wide supermarket-style GST tax invoices.",
  },
  {
    icon: Sparkles,
    title: "Custom Store Logo & UPI QR",
    desc: "Print your shop name, address, GSTIN number, phone number, return policy, and a dynamic UPI QR code for instant scan-and-pay.",
  },
  {
    icon: Zap,
    title: "Super-Fast Printing (<1 Sec)",
    desc: "Optimized ESC/POS binary protocol streams print commands directly to the printer buffer for zero checkout queue delay.",
  },
  {
    icon: Usb,
    title: "USB OTG & Network Wi-Fi",
    desc: "In addition to Bluetooth, print directly via USB OTG cable or Wi-Fi network printers from Android phones and Desktop PCs.",
  },
  {
    icon: ShieldCheck,
    title: "100% Offline Printing",
    desc: "Print physical receipts during internet disconnections or power outages. Works completely without active internet.",
  },
];

const faqs = [
  {
    q: "How do I connect my Bluetooth thermal printer to Vyop?",
    a: "1) Turn on your Bluetooth thermal printer. 2) Turn on Bluetooth on your phone and pair with the printer (PIN is usually 0000 or 1234). 3) Open the Vyop app, go to Settings > Printer Settings. 4) Select your paired printer and choose 58mm or 80mm. That's it! Tap Print on any bill and your receipt prints instantly.",
  },
  {
    q: "Which thermal printers are compatible with Vyop?",
    a: "Vyop supports almost all ESC/POS standard thermal printers sold globally. This includes Everycom, TVS, NGX, Pegasus, BluPrints, POS-5802, POS-80, Epson, Star Micronics, Zijiang, and generic mini Bluetooth printers available on Amazon and Flipkart.",
  },
  {
    q: "Can I print my shop's logo and UPI QR code on the receipt?",
    a: "Yes! Vyop lets you upload your shop logo to appear at the top of every printed bill. It also generates a dynamic UPI QR code on every receipt so customers can scan with GPay, PhonePe, or Paytm and pay the exact bill total directly to your bank account.",
  },
  {
    q: "Does it support both 58mm (2-inch) and 80mm (3-inch) paper rolls?",
    a: "Yes. You can switch between 58mm (standard compact roll) and 80mm (wide format) with a single tap in settings. Vyop automatically reformats columns, font sizes, and line-item spacing to fit the exact paper width perfectly.",
  },
  {
    q: "Can I also print barcode labels and price stickers?",
    a: "Yes! Vyop has a built-in barcode generator. You can print custom Code-128 or EAN barcode price tags and product stickers directly to your thermal printer on adhesive thermal label rolls.",
  },
  {
    q: "How much does Vyop Thermal Printer App cost?",
    a: "Vyop is 100% free to start. You can connect your thermal printer, scan barcodes, and print unlimited bills without paying anything. For multi-device desktop PC cloud sync and accounting, Vyop Pro is just ₹49/month (approx. $1/mo) or ₹999/year (approx. $12/yr).",
  },
];

export default function ThermalPrinterLandingPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-gradient-to-b from-blue-50/60 via-white to-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-6">
            <Printer className="w-4 h-4 text-blue-600" />
            <span>ESC/POS Wireless Receipt Printer Software</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bluetooth Thermal Printer{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Billing App for Phone
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Connect any <strong>58mm or 80mm Bluetooth thermal printer</strong> directly to your Android smartphone or PC. Print professional GST receipts, custom logos, UPI payment QR codes, and barcode price tags in under 1 second without drivers.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black hover:bg-gray-800 text-white font-bold text-base shadow-xl hover:shadow-black/20 transition-all flex items-center justify-center gap-3"
            >
              <Smartphone className="w-5 h-5 text-blue-400" />
              Download Free Printer App
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
            >
              Open Web Counter (vyop.shop) <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Supported Printer Brands Banner */}
          <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 max-w-4xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Works with All Standard Thermal Printers (58mm &amp; 80mm ESC/POS)
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-700">
              {printerBrands.map((brand) => (
                <span
                  key={brand}
                  className="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Engineered for Retail Speed
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything Your Thermal Printer Needs
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Vyop is built with a direct hardware ESC/POS engine so your thermal printer never lags, cuts receipts properly, and renders sharp high-contrast text.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {printerFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-7 rounded-3xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {feat.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-body">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3-Step Setup */}
      <section className="py-20 px-6 bg-slate-50 border-y border-gray-200/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Connect Your Printer in 3 Simple Steps
          </h2>
          <p className="text-gray-600 text-base mb-12 font-body">
            No driver installation. No Windows DLL errors. 100% plug and play.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Turn on Bluetooth</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-body">
                Turn on your thermal printer and pair it with your Android phone under Bluetooth settings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Select in Vyop Settings</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-body">
                Open Vyop app, go to Settings &gt; Printer, tap your paired printer name and pick 58mm or 80mm.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Tap Print on Any Bill</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-body">
                When ringing up a sale, tap Print. Your thermal receipt prints out instantly in less than 1 second.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Frequently Asked Questions (Thermal Printers)
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Everything you need to know about thermal printing from your smartphone.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
              <h3 className="text-base font-bold text-gray-900 mb-2 flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
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
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white p-10 md:p-16 rounded-3xl shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Start Printing Thermal Receipts from Your Phone
          </h2>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            Download the free Vyop POS app and connect your 58mm or 80mm Bluetooth thermal printer in under 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black text-white font-bold text-base hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Smartphone className="w-5 h-5 text-blue-400" />
              Download on Google Play
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-gray-900 font-bold text-base hover:bg-gray-100 transition-all shadow-lg"
            >
              Open Web Terminal (vyop.shop)
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
              name: "Vyop Bluetooth Thermal Printer Billing App",
              operatingSystem: "Android, iOS, Web",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "ThermalPrinterApp, POSBillingSoftware",
              description:
                "Connect smartphone to any 58mm or 80mm Bluetooth/USB thermal receipt printer. Print instant GST receipts, UPI QR codes, and custom logo bills without computer drivers.",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "INR",
                lowPrice: "0",
                highPrice: "999",
                offers: [
                  {
                    "@type": "Offer",
                    name: "Free Thermal Printer Billing",
                    price: "0",
                    priceCurrency: "INR",
                    description: "Free Bluetooth thermal receipt printing & billing",
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
              name: "How to Connect Bluetooth Thermal Printer to Mobile for Billing",
              description: "Step-by-step guide to connecting any 58mm or 80mm wireless thermal printer to an Android smartphone for shop receipt printing.",
              step: [
                {
                  "@type": "HowToStep",
                  position: 1,
                  name: "Turn on Printer and Bluetooth",
                  text: "Turn on your Bluetooth thermal printer and enable Bluetooth on your smartphone.",
                },
                {
                  "@type": "HowToStep",
                  position: 2,
                  name: "Pair Printer in Phone Settings",
                  text: "Pair with the thermal printer in your phone Bluetooth settings using PIN 0000 or 1234.",
                },
                {
                  "@type": "HowToStep",
                  position: 3,
                  name: "Select Printer in Vyop App",
                  text: "Open Vyop, tap Settings > Printer Settings, select your printer from the list, and pick 58mm or 80mm paper size.",
                },
                {
                  "@type": "HowToStep",
                  position: 4,
                  name: "Tap Print on Any Bill",
                  text: "Scan items or add products to cart and tap Print. Your thermal receipt prints in under 1 second.",
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
                  name: "Thermal Printer Billing App",
                  item: "https://vyop.in/thermal-printer-billing-app",
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
