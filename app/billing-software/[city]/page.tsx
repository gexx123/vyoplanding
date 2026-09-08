import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { cities } from "@/lib/cityData";

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
    title: `Free GST Billing Software in ${city.name} — Download & Instant Setup | Vyop`,
    description: `Looking for billing software in ${city.name}? Vyop is a 100% free voice-powered GST billing & barcode POS app for ${city.hubFocus} shops in ${city.state}. Skip expensive dealer fees!`,
    alternates: {
      canonical: `/billing-software/${city.slug}`,
    },
    openGraph: {
      title: `Free GST Billing Software in ${city.name} | Vyop`,
      description: `Free voice-powered GST billing, barcode POS & khata app for ${city.name} businesses. Skip dealer fees and download on mobile.`,
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
              <span className="font-semibold text-gray-900"> Vyop gives you a supermarket-grade POS in your pocket for ₹0.</span>
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
                  <span><strong>100% Free to download</strong> — no dealer markup or commission</span>
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
