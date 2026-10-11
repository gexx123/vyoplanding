import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { countries, CountryData } from "@/lib/countryData";
import {
  Smartphone,
  Scan,
  Printer,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  HelpCircle,
  Store,
  Receipt,
  Sparkles,
} from "lucide-react";

export async function generateStaticParams() {
  return countries.map((country) => ({
    country: country.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const country = countries.find((c) => c.slug === resolvedParams.country);
  if (!country) return {};

  return {
    title: `Free Mobile POS & Barcode Scanner in ${country.name} [0% Fees, Works Offline] — Vyop POS`,
    description: `Best free mobile POS software and barcode scanner app in ${country.name}. Bill in ${country.currency}, configure ${country.taxName}, and print thermal receipts with 0% platform fees. ${country.hardwareSavings} vs ${country.competitors}.`,
    alternates: {
      canonical: `/global-pos/${country.slug}`,
    },
    keywords: [
      `free POS app ${country.name}`,
      `POS software ${country.name}`,
      `best retail POS system ${country.name}`,
      `mobile barcode scanner ${country.name}`,
      `turn phone into barcode scanner ${country.name}`,
      `free point of sale software ${country.name}`,
      `offline POS system ${country.name}`,
      `retail billing software ${country.name}`,
      `${country.taxName.toLowerCase()} pos receipts`,
      `${country.currencyCode.toLowerCase()} billing app`,
      `Square alternative ${country.name}`,
      `Loyverse alternative ${country.name}`,
      `small business POS without monthly fees ${country.name}`,
      `Bluetooth thermal printer POS ${country.name}`,
    ],
    openGraph: {
      title: `Free Mobile POS & Barcode Scanner in ${country.name} [0% Fees] — Vyop POS`,
      description: `Turn any phone into a supermarket barcode scanner POS in ${country.name}. Bill in ${country.currency}, compliant with ${country.taxName}. 100% Free on Android & Web.`,
      url: `https://vyop.in/global-pos/${country.slug}`,
      siteName: "Vyop POS: Barcode Scan & Bill",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `Vyop POS in ${country.name} — Free Mobile POS & Barcode Scanner`,
        },
      ],
      type: "website",
    },
  };
}

export default async function CountryLandingPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const resolvedParams = await params;
  const country = countries.find((c) => c.slug === resolvedParams.country);

  if (!country) {
    notFound();
  }

  const otherCountries = countries.filter((c) => c.slug !== country.slug);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-amber-50/60 via-white to-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center items-center gap-2 text-xs md:text-sm text-gray-500">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/global-pos" className="hover:text-amber-600 transition-colors">Global POS</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{country.name}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="text-base">{country.flag}</span>
            <span>{country.name} Retail Point of Sale</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Free Mobile POS &amp; Barcode Scanner <br className="hidden sm:inline" />
            <span className="gradient-text">for Retail in {country.name}</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            {country.heroSubtitle}
          </p>

          {/* Action CTAs */}
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

          {/* Localized Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-xs">
              <div className="text-xs text-gray-500 mb-1 font-medium">Currency</div>
              <div className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-amber-600" />
                {country.currency}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-xs">
              <div className="text-xs text-gray-500 mb-1 font-medium">Tax Compliance</div>
              <div className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                <Receipt className="w-4 h-4 text-amber-600" />
                {country.taxName}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-xs">
              <div className="text-xs text-gray-500 mb-1 font-medium">Hardware Cost</div>
              <div className="text-sm font-bold text-emerald-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                $0 (Your Phone)
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-xs">
              <div className="text-xs text-gray-500 mb-1 font-medium">Platform Cut</div>
              <div className="text-sm font-bold text-emerald-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                0% Transaction Fee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Retail Context & Market Realities */}
      <section className="py-16 px-6 bg-gray-50/80 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200">
                Tailored for {country.name}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-4 mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Built to Solve Retail Realities in {country.name}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-body">
                {country.localRetailContext}
              </p>

              <div className="mb-6">
                <div className="text-xs font-bold uppercase text-gray-500 mb-2">Popular Retail Trades in {country.name}:</div>
                <div className="flex flex-wrap gap-2">
                  {country.popularTrades.map((trade) => (
                    <span key={trade} className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-800 shadow-2xs">
                      {trade}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase text-gray-500 mb-2">Major Commercial Corridors &amp; Hubs:</div>
                <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                  {country.localMarkets.map((market) => (
                    <span key={market} className="px-2.5 py-0.5 rounded-full bg-gray-200/70 font-medium">
                      📍 {market}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Savings Comparison Card */}
            <div className="md:col-span-5 bg-white p-7 rounded-3xl border border-gray-200 shadow-md">
              <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
                Legacy Terminal Overhead vs Vyop
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
                {country.hardwareSavings}
              </h3>
              
              <div className="space-y-4 text-xs text-gray-600 mb-6">
                <div className="p-3 rounded-xl bg-red-50/70 border border-red-100">
                  <div className="font-bold text-red-900 mb-0.5">{country.competitors}</div>
                  <div className="text-red-700">{country.competitorCost}</div>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                  <div className="font-bold text-emerald-900 mb-0.5">Vyop POS: Barcode Scan &amp; Bill</div>
                  <div className="text-emerald-700">Free to Start • Use your phone camera • 0% transaction fee</div>
                </div>
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.vyop.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Start Free in {country.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
              All Enterprise POS Features on Your Phone
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-body">
              Everything your {country.name} store counter needs to checkout shoppers at supermarket speed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-amber-200 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                <Scan className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Smartphone Barcode Scanner</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-body">
                Point your phone camera at standard retail barcodes (EAN-13, UPC, Code-128, QR). Items match instantly and add to cart with zero lag.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-amber-200 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">AI Loose Item Recognition</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-body">
                Selling unbarcoded fruits, vegetables, baked goods, or handmade items? Snap a quick photo and our AI recognizes and adds it to the bill.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-amber-200 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Bluetooth Thermal Printing</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-body">
                Connect via Bluetooth to any 58mm or 80mm ESC/POS thermal printer. Print receipts with your {country.taxName} number and business logo.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-amber-200 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">100% Offline Checkout</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-body">
                Never lose a sale during power outages or network drops. Vyop functions completely offline and automatically syncs when reconnecting.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-amber-200 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                <Receipt className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Digital WhatsApp &amp; SMS Bills</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-body">
                Save paper and connect with shoppers. Send digital PDF receipts directly via WhatsApp, SMS, or QR code in {country.currency}.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-amber-200 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">0% Commission Online Store</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-body">
                Launch a live web ordering link for your store in 60 seconds. Share with local customers and take pickup orders with zero commissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localized FAQs */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Frequently Asked Questions in {country.name}
            </h2>
            <p className="text-gray-600 text-sm font-body">
              Everything you need to know about setting up Vyop POS in {country.name}.
            </p>
          </div>

          <div className="space-y-4">
            {country.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs">
                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-7 font-body">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore in other countries */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6 font-display text-center">
            Explore Vyop Mobile POS Worldwide
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
            {otherCountries.map((c) => (
              <Link
                key={c.slug}
                href={`/global-pos/${c.slug}`}
                className="p-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-amber-50/50 hover:border-amber-200 transition-all flex items-center gap-2"
              >
                <span className="text-lg">{c.flag}</span>
                <span className="font-medium text-gray-800">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-gray-900 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Start Billing in {country.name} in Under 60 Seconds
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed font-body">
            Download the free Android app or launch immediately in your PC web browser at vyop.shop.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-base shadow-lg transition-all"
            >
              Download Free Android App
            </a>
            <a
              href="https://vyop.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base transition-all"
            >
              Open Web POS (vyop.shop)
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": `Vyop POS: Barcode Scan & Bill (${country.name})`,
                "operatingSystem": "Android, iOS, Web",
                "applicationCategory": "BusinessApplication",
                "applicationSubCategory": "PointOfSale, AccountingSoftware, BillingSoftware",
                "description": `Free mobile POS and barcode scanner app in ${country.name}. Bill in ${country.currency}, calculate ${country.taxName}, and print thermal receipts with 0% fees.`,
                "url": `https://vyop.in/global-pos/${country.slug}`,
                "countriesSupported": [country.code],
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": country.currencyCode,
                },
              },
              {
                "@type": "FAQPage",
                "mainEntity": country.faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer,
                  },
                })),
              },
              {
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
                    "name": "Global POS",
                    "item": "https://vyop.in/global-pos",
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": country.name,
                    "item": `https://vyop.in/global-pos/${country.slug}`,
                  },
                ],
              },
            ],
          }),
        }}
      />

      <Footer />
    </main>
  );
}
