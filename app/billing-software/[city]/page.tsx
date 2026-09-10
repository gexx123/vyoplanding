import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { cities } from "@/lib/cityData";
import { industries } from "@/lib/industryData";

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const city = cities.find((c) => c.slug === resolvedParams.city);
  if (!city) return {};

  return {
    title: `Best GST Billing Software in ${city.name} — Free to Start | Vyop`,
    description: `Looking for billing software in ${city.name}? Vyop is a voice-powered GST billing & barcode POS app for ${city.hubFocus} shops in ${city.state}. Free to start, lowest ₹999/yr Pro cloud plan.`,
    alternates: {
      canonical: `/billing-software/${city.slug}`,
    },
    openGraph: {
      title: `Best GST Billing Software in ${city.name} | Vyop`,
      description: `Voice-powered GST billing, barcode POS & khata app for ${city.name} businesses. Skip dealer fees, start free on mobile with ₹999/yr Pro cloud sync.`,
      url: `https://vyop.in/billing-software/${city.slug}`,
    },
  };
}

export default async function CityLandingPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const city = cities.find((c) => c.slug === resolvedParams.city);

  if (!city) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-glow)] text-[var(--brand-primary)] text-sm font-bold mb-6">
          <span className="text-lg">📍</span> Proudly serving {city.name}, {city.state}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
          Free GST Billing Software for <br className="hidden md:block" />
          <span className="gradient-text">{city.name} Businesses</span>
        </h1>
        
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10">
          Whether you run a kirana store, textile shop, or wholesale business in {city.name}&apos;s bustling {city.hubFocus} markets, Vyop is the ultimate voice-powered AI accountant. 
          Create GST bills, scan barcodes on phone, and track udhar khata instantly—just by speaking.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Desktop: Get Started Button */}
          <a 
            href="https://vyop.shop" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex w-full sm:w-auto px-10 py-5 rounded-2xl bg-[var(--brand-secondary)] text-white font-bold text-xl hover:scale-[1.02] transition-all shadow-[var(--shadow-gold)] items-center justify-center"
          >
            Get Started Free
          </a>
          
          {/* Mobile: Google Play Badge */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex md:hidden items-center justify-center gap-3 px-8 py-[18px] rounded-2xl bg-black text-white transition-all duration-200 hover:scale-[1.02] w-full sm:w-auto"
            style={{
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            }}
          >
            <svg width="26" height="28" viewBox="0 0 22 24" fill="none">
              <path d="M1 1l10 11L1 23V1z" fill="#4285F4" stroke="#4285F4" strokeWidth="0.5" />
              <path d="M1 1l14 8-4 4L1 1z" fill="#34A853" />
              <path d="M1 23l10-12 4 4-14 8z" fill="#EA4335" />
              <path d="M15 9l5 3-5 3-4-3 4-3z" fill="#FBBC05" />
            </svg>
            <div className="text-left flex flex-col justify-center">
              <div className="text-[11px] leading-[1.1] font-medium" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body)", letterSpacing: "0.5px" }}>
                GET IT ON
              </div>
              <div className="text-[20px] font-semibold leading-[1.1]" style={{ fontFamily: "var(--font-display)" }}>
                Google Play
              </div>
            </div>
          </a>
          <a 
            href="#dealers" 
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white border border-[var(--border-medium)] text-[var(--text-secondary)] font-bold text-xl hover:bg-gray-50 transition-all"
          >
            Why Skip Local Dealers?
          </a>
        </div>
      </section>

      {/* Dealer vs Cloud Comparison Section - Captures "billing software dealers in [city]" queries */}
      <section id="dealers" className="py-20 bg-amber-50/50 border-y border-amber-100/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              Direct Mobile App vs Legacy Dealers
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Looking for Billing Software Dealers in {city.name}?
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Traditional ERP & billing software dealers in {city.name} charge ₹10,000 to ₹25,000 for complex desktop installations and annual maintenance fees. 
              <span className="font-semibold text-gray-900"> Vyop gives you a supermarket-grade POS in your pocket — free to start with ₹999/yr Pro cloud sync.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Old Dealer Model */}
            <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-lg">✕</span>
                <h3 className="text-xl font-bold text-gray-900">Traditional Local Dealers</h3>
              </div>
              <ul className="space-y-3.5 text-[var(--text-secondary)] text-sm md:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span><strong>₹12,000–₹25,000 upfront cost</strong> + high annual AMC fees</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span>Requires heavy desktop PC, expensive barcode guns, and UPS</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span>Must wait days for a local dealer to visit for setup or repairs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span>Manual typing required for every single item and bill</span>
                </li>
              </ul>
            </div>

            {/* Vyop Smart Model */}
            <div className="bg-white p-8 rounded-3xl border-2 border-emerald-500 shadow-md relative">
              <div className="absolute -top-3.5 right-6 px-3.5 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                Smart Choice
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">✓</span>
                <h3 className="text-xl font-bold text-gray-900">Vyop Mobile App ({city.name})</h3>
              </div>
              <ul className="space-y-3.5 text-[var(--text-secondary)] text-sm md:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>Free to download & start</strong> — no dealer markup or commission</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Works on any Android phone — camera acts as supermarket barcode POS</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Connects wirelessly with all 2-inch & 3-inch Bluetooth thermal printers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Voice AI billing in Hindi & English — create bills in 5 seconds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Benefit Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: "var(--font-display)" }}>
            Why {city.name} Retailers Choose Vyop
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="text-4xl mb-6">🗣️</div>
              <h3 className="text-2xl font-bold mb-4">Voice-Fast Billing</h3>
              <p className="text-[var(--text-secondary)]">
                Skip typing during rush hours in {city.name}. Simply speak items to generate instant GST or non-GST bills.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="text-4xl mb-6">📔</div>
              <h3 className="text-2xl font-bold mb-4">Digital Udhar Khata</h3>
              <p className="text-[var(--text-secondary)]">
                Keep customer ledgers organized. Automatically send payment reminders on WhatsApp with direct UPI links.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="text-4xl mb-6">📦</div>
              <h3 className="text-2xl font-bold mb-4">Smart Inventory</h3>
              <p className="text-[var(--text-secondary)]">
                Never run out of stock in your {city.hubFocus} store. Low-stock alerts notify you before shelves are empty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Billing & Trade Solutions Cross-Linking */}
      <section className="py-20 bg-gray-50/70 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent p-8 md:p-10 rounded-3xl border border-amber-200/50 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                Smartphone Barcode POS & Voice Invoicing
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Smart Billing Software for {city.name} Retailers
              </h3>
              <p className="text-gray-600 max-w-2xl text-sm md:text-base">
                Discover how Vyop replaces expensive desktop POS machines with phone camera barcode scanning, Hindi Voice AI, Bluetooth thermal receipt printing, and your shop&apos;s personal online store.
              </p>
            </div>
            <Link
              href="/smart-billing-software"
              className="whitespace-nowrap px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base transition-all shadow-md hover:shadow-lg"
            >
              Explore Smart Billing →
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
                Billing Solutions by Business Type in {city.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                Customized for 22+ retail and wholesale trades across {city.state}
              </p>
            </div>
            <Link
              href="/solutions"
              className="text-amber-600 hover:text-amber-700 font-bold text-sm inline-flex items-center gap-1 self-start md:self-auto"
            >
              View All 22+ Shop Categories →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {industries.slice(0, 4).map((ind) => (
              <Link
                key={ind.slug}
                href={`/solutions/${ind.slug}`}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-amber-400 hover:shadow-md transition-all group"
              >
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h4 className="font-bold text-gray-900 group-hover:text-amber-700 text-base mb-1">
                  {ind.name}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {ind.subheadline}
                </p>
                <span className="text-xs font-semibold text-amber-600 mt-3 inline-block">
                  View {ind.name} POS →
                </span>
              </Link>
            ))}
          </div>

          {/* Cross-City Linking Network */}
          <div className="pt-10 border-t border-gray-200">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
              Vyop Billing Software in Other Commercial Hubs
            </h4>
            <div className="flex flex-wrap gap-2">
              {cities
                .filter((c) => c.slug !== city.slug)
                .slice(0, 12)
                .map((otherCity) => (
                  <Link
                    key={otherCity.slug}
                    href={`/billing-software/${otherCity.slug}`}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-600 hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50/50 transition-all"
                  >
                    Billing Software in {otherCity.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `Is Vyop billing software available in ${city.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Yes! Vyop is a cloud-based mobile app available for all retail and wholesale businesses in ${city.name} and across ${city.state}. You can download it directly from Google Play Store.`
                }
              },
              {
                "@type": "Question",
                "name": `Where can I find billing software dealers in ${city.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `You do not need a physical dealer or distributor in ${city.name}! Traditional dealers charge ₹15,000+ for setup. Vyop installs free on any Android smartphone in under 30 seconds with 24/7 online support.`
                }
              },
              {
                "@type": "Question",
                "name": `Can Vyop handle GST billing and thermal receipt printing in ${city.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Vyop supports both GST and non-GST billing, wireless 2-inch and 3-inch Bluetooth thermal printers, and instant WhatsApp bill sharing."
                }
              }
            ]
          })
        }}
      />

      <Footer />
    </main>
  );
}
