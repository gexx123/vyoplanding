import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/industryData";

export const metadata: Metadata = {
  title: {
    absolute: "Shop Billing Software by Business Type (23 Shops) | Vyop",
  },
  description:
    "Tailored retail billing software & POS for 23 shop types: Kirana, Clothing, Pharmacy, Electronics & Cafes. Phone barcode scanner, Voice AI & WhatsApp bills.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Shop Billing Software for 23 Retail Trades | Vyop",
    description:
      "Find the perfect billing app for your shop. Custom features for Kirana, Garments, Cafes, Medical Stores, Hardware, Electronics & more.",
    url: "https://vyop.in/solutions",
    siteName: "Vyop POS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shop Billing Software by Industry - Vyop",
      },
    ],
    type: "website",
  },
  keywords: [
    "shop billing software",
    "retail billing software by industry",
    "kirana billing app",
    "garment shop billing app",
    "medical store billing software",
    "restaurant billing software",
  ],
};

const industryCategories = [
  {
    category: "Grocery, Supermarket & Daily Essentials",
    slugs: ["kirana-grocery", "supermarket-departmental", "general-variety", "dairy-milk", "paan-tobacco"],
  },
  {
    category: "Fashion, Garments, Footwear & Lifestyle",
    slugs: ["clothing-apparel", "footwear-shoes", "sports-fitness", "jewellery-watch", "optical-eyewear"],
  },
  {
    category: "Food, Dining & Hospitality",
    slugs: ["restaurant-cafe", "bakery-sweet-shop", "hotel-lodge"],
  },
  {
    category: "Electronics, Hardware & Automobiles",
    slugs: ["electronics-mobile", "hardware-sanitary", "auto-parts", "tiles-marble"],
  },
  {
    category: "Health, Care, Toys & Services",
    slugs: ["pharmacy-chemist", "salon-beauty", "stationery-bookshop", "toy-shop", "gift-handicraft", "pet-shop"],
  },
];

export default function SolutionsIndexPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)] text-[var(--text-primary)]">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs md:text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
          <span>🏪</span> Complete Retail Software Directory
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Billing Software Built for <br className="hidden md:block" />
          <span className="gradient-text">Your Exact Type of Shop</span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed">
          Generic billing software doesn&apos;t understand your trade. A pharmacy needs expiry tracking, a garment shop needs size variants, and a restaurant needs voice KOTs. 
          Choose your business to see how Vyop is customized for you.
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm font-semibold text-gray-700">
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">✓ 23 Shop Types Supported</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">✓ Phone Camera Barcode Scanner</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">✓ Voice AI in Hindi &amp; English</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">✓ Free to Start / ₹999/yr Pro</span>
        </div>
      </section>

      {/* Industry Categories */}
      <section className="pb-24 px-6 max-w-6xl mx-auto space-y-16">
        {industryCategories.map((group, groupIdx) => {
          const matchedIndustries = industries.filter((ind) =>
            group.slugs.includes(ind.slug)
          );

          return (
            <div key={groupIdx}>
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-200">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-display">
                  {group.category}
                </h2>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
                  {matchedIndustries.length} Trades
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedIndustries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/solutions/${ind.slug}`}
                    className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl p-3 rounded-2xl bg-amber-50 group-hover:scale-110 transition-transform">
                          {ind.icon}
                        </span>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-900">
                          {ind.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors mb-2">
                        {ind.name}
                      </h3>

                      <p className="text-gray-600 text-sm line-clamp-2 mb-6 leading-relaxed">
                        {ind.subheadline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-amber-700">
                      <span>View Custom Features</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Schema.org Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                "name": "Shop Solutions",
                "item": "https://vyop.in/solutions",
              },
            ],
          }),
        }}
      />

      <Footer />
    </main>
  );
}
