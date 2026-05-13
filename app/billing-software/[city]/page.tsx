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
    title: `Best Billing Software in ${city.name} | Free GST & Khata App`,
    description: `Looking for billing software in ${city.name}? Vyop is a free voice-powered GST billing and khata app built for ${city.hubFocus} businesses in ${city.state}.`,
    alternates: {
      canonical: `/billing-software/${city.slug}`,
    },
    openGraph: {
      title: `Best Billing Software in ${city.name} | Vyop`,
      description: `The best voice-powered GST billing and khata app for ${city.name} businesses.`,
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
          The Best Billing Software for <br className="hidden md:block" />
          <span className="gradient-text">{city.name} Businesses</span>
        </h1>
        
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10">
          Whether you run a kirana shop or a wholesale business in {city.name}&apos;s bustling {city.hubFocus} markets, Vyop is the ultimate voice-powered AI accountant. 
          Create GST bills, manage inventory, and track udhar khata instantly—just by speaking.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="https://vyop.shop" 
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[var(--brand-secondary)] text-white font-bold text-xl hover:scale-[1.02] transition-all shadow-[var(--shadow-gold)]"
          >
            Download Free App
          </Link>
          <a 
            href="#features" 
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white border border-[var(--border-medium)] text-[var(--text-secondary)] font-bold text-xl hover:bg-gray-50 transition-all"
          >
            See How It Works
          </a>
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
                Skip the typing. Handle the rush hours in {city.name} by simply speaking items to generate instant GST or non-GST bills.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="text-4xl mb-6">📔</div>
              <h3 className="text-2xl font-bold mb-4">Digital Udhar Khata</h3>
              <p className="text-[var(--text-secondary)]">
                Keep your customer ledgers organized. Automatically send payment reminders on WhatsApp to local customers.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="text-4xl mb-6">📦</div>
              <h3 className="text-2xl font-bold mb-4">Smart Inventory</h3>
              <p className="text-[var(--text-secondary)]">
                Never run out of stock in your {city.hubFocus} business. Get instant low-stock alerts before your shelves are empty.
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
                  "text": `Yes! Vyop is a cloud-based mobile app available for all businesses in ${city.name} and across India. You can download it directly from the Google Play Store.`
                }
              },
              {
                "@type": "Question",
                "name": "Can it handle GST billing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Vyop supports both GST and non-GST billing, making it perfect for small retail and wholesale businesses."
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
