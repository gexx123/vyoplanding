import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CityDirectory from "@/components/CityDirectory";
import { industries } from "@/lib/industryData";

export const metadata: Metadata = {
  title: "Best GST Billing Software by City in India (2026) | Vyop",
  description:
    "Find the best free GST billing software, smartphone barcode POS, and voice accounting app across Indian cities. Active in Bangalore, Surat, Mumbai, Delhi, Jaipur, and 65+ commercial hubs. No dealer fees!",
  alternates: {
    canonical: "/billing-software",
  },
  openGraph: {
    title: "Best GST Billing Software by City in India | Vyop",
    description:
      "Explore free GST billing software & smartphone barcode POS tailored for retail shops across Bangalore, Surat, Mumbai, and 65+ Indian cities.",
    url: "https://vyop.in/billing-software",
  },
  keywords: [
    "best billing software in india",
    "gst billing software by city",
    "billing software dealers in bangalore",
    "billing software in surat",
    "billing software in mumbai",
    "billing software in delhi",
    "retail billing software india",
    "kirana pos app india",
    "free pos app without dealer",
  ],
};

export default function BillingSoftwareDirectoryPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 max-w-6xl mx-auto text-center">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex justify-center items-center gap-2 text-xs md:text-sm text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--brand-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text-primary)] font-semibold">Billing Software by City</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-glow)] text-[var(--brand-primary)] text-sm font-bold mb-6">
          <span>📍</span> Pan-India Retail & Wholesale Hubs
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Free GST Billing Software <br className="hidden md:block" />
          <span className="gradient-text">Across Indian Cities</span>
        </h1>

        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
          Skip ₹15,000+ computer setups and local dealer commissions. Vyop gives retail shops, kiranas, and wholesale distributors in 65+ cities mall-grade smartphone barcode scanning, Hindi voice invoicing, and digital udhar khata.
        </p>

        {/* Quick Value Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          <div className="bg-white/80 p-4 rounded-2xl border border-[var(--border-subtle)] shadow-sm">
            <div className="text-2xl font-extrabold text-[var(--brand-primary)]">65+</div>
            <div className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">Commercial Hubs</div>
          </div>
          <div className="bg-white/80 p-4 rounded-2xl border border-[var(--border-subtle)] shadow-sm">
            <div className="text-2xl font-extrabold text-[var(--brand-primary)]">₹0</div>
            <div className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">Dealer Markup</div>
          </div>
          <div className="bg-white/80 p-4 rounded-2xl border border-[var(--border-subtle)] shadow-sm">
            <div className="text-2xl font-extrabold text-[var(--brand-primary)]">30s</div>
            <div className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">Phone Setup</div>
          </div>
          <div className="bg-white/80 p-4 rounded-2xl border border-[var(--border-subtle)] shadow-sm">
            <div className="text-2xl font-extrabold text-[var(--brand-primary)]">22+</div>
            <div className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">Shop Categories</div>
          </div>
        </div>
      </section>

      {/* Directory Search & Filter Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <CityDirectory />
      </section>

      {/* Why Skip Dealers Section */}
      <section className="py-20 bg-amber-50/60 border-y border-amber-100/70 mt-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            Why Vyop Replaces Legacy Dealers
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Why Pay Local Dealers ₹15,000+ When Your Phone Does It All?
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto mb-12">
            In cities like Bangalore, Surat, Mumbai, and Jaipur, legacy billing software vendors sell complex desktop software, charging hefty installation and annual maintenance fees. Vyop provides direct-to-retailer mobile software with zero middlemen.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="text-3xl mb-3">📷</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Phone Barcode & AI Scanner</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Turn your smartphone camera into a supermarket barcode scanner. Scan barcodes or snap photos of unbarcoded items to bill at mall speeds.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">5-Second Voice Billing</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Speak items in Hindi or English (e.g., &quot;2 kilo sugar, 1 Fortune oil&quot;) to create complete GST receipts instantly during rush hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Direct 24/7 Support</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Instant WhatsApp and video call support from the core Vyop engineering team—never wait days for a technician visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Solutions Directory Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
                Explore Retail Billing by Shop Category
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                Engineered for specific inventory workflows across 22+ retail and wholesale trades
              </p>
            </div>
            <Link
              href="/solutions"
              className="text-amber-600 hover:text-amber-700 font-bold text-sm inline-flex items-center gap-1 self-start md:self-auto"
            >
              View All 22+ Categories →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {industries.slice(0, 8).map((ind) => (
              <Link
                key={ind.slug}
                href={`/solutions/${ind.slug}`}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-200/70 hover:border-amber-400 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-bold text-gray-900 group-hover:text-amber-700 text-base mb-1">
                  {ind.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {ind.subheadline}
                </p>
                <span className="text-xs font-semibold text-amber-600 mt-3 inline-block">
                  View {ind.name} POS →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data: CollectionPage & BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Best GST Billing Software by City in India | Vyop",
              "description":
                "Directory of free GST billing software, smartphone barcode POS, and voice invoicing solutions tailored for businesses across Indian commercial hubs.",
              "url": "https://vyop.in/billing-software",
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
                  "name": "Billing Software by City",
                  "item": "https://vyop.in/billing-software",
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
