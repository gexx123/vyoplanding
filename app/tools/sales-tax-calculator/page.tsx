import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolDownloadCTA from "@/components/ToolDownloadCTA";
import SalesTaxCalculator from "@/components/tools/SalesTaxCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Global Sales Tax & VAT Calculator | US, UK, Canada, Australia & Europe",
  description:
    "Free online Sales Tax and VAT calculator for retail shops and small businesses. Calculate inclusive and exclusive sales tax for USA (all 50 states), UK (20% VAT), Canada (GST/HST), Australia (10% GST), and Europe.",
  alternates: {
    canonical: "/tools/sales-tax-calculator",
  },
  keywords: [
    "sales tax calculator",
    "vat calculator",
    "free sales tax calculator",
    "reverse vat calculator",
    "us sales tax calculator",
    "uk vat calculator",
    "canada gst hst calculator",
    "australia gst calculator",
    "retail tax calculator",
    "inclusive tax calculator",
    "exclusive tax calculator",
    "sales tax calculator for small business",
    "vyop tax calculator",
  ],
  openGraph: {
    title: "Free Global Sales Tax & VAT Calculator | Vyop POS",
    description:
      "Instant inclusive and reverse tax calculation for US Sales Tax, UK VAT, Canada GST/HST, and Australia GST with zero registration required.",
    url: "https://vyop.in/tools/sales-tax-calculator",
    siteName: "Vyop POS",
  },
};

const faqs = [
  {
    question: "What is the difference between Sales Tax and VAT (Value Added Tax)?",
    answer:
      "Sales Tax is a single-stage tax levied on the final sale to the end consumer at the point of retail purchase (common in the United States). Value Added Tax (VAT) is a multi-stage tax collected at every step of the supply chain where value is added (standard in the UK, European Union, and UAE).",
  },
  {
    question: "How do I calculate Sales Tax added to a price (Exclusive Tax)?",
    answer:
      "To add sales tax to a net pre-tax price: Multiply the net amount by the tax rate decimal, then add the result to the net amount. Formula: Total = Net Amount × (1 + Tax Rate / 100). For example, $100 with 7.25% tax = $100 × 1.0725 = $107.25.",
  },
  {
    question: "How do I calculate Reverse Tax (Inclusive Tax)?",
    answer:
      "To extract the pre-tax price from a tax-inclusive total: Divide the total amount by (1 + Tax Rate / 100). Formula: Net Amount = Total Amount / (1 + Tax Rate / 100). The tax portion is Total Amount minus Net Amount.",
  },
  {
    question: "Can Vyop POS automatically calculate sales tax on retail bills?",
    answer:
      "Yes! With Vyop POS, you can set your store's exact state or national tax percentage (e.g. 7.25% California, 20% UK VAT, or 10% Australia GST). When you scan item barcodes using your phone camera, sales tax splits calculate automatically on thermal printed receipts and WhatsApp invoices.",
  },
];

export default function SalesTaxCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Global Sales Tax & VAT Calculator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "url": "https://vyop.in/tools/sales-tax-calculator",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
        "description":
          "Free online tool to calculate inclusive and exclusive sales tax and VAT for the United States, United Kingdom, Canada, Australia, European Union, and UAE.",
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <Breadcrumbs
        items={[
          { label: "Free Tools", href: "/tools" },
          { label: "Sales Tax & VAT Calculator", href: "/tools/sales-tax-calculator" },
        ]}
      />

      {/* Header */}
      <section className="pt-28 pb-12 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs md:text-sm font-semibold mb-6">
          <span>🌐</span> Multi-Currency &amp; Global Tax Rates (2026)
        </div>
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Free Global Sales Tax &amp; <span className="gradient-text">VAT Calculator</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Calculate inclusive or reverse sales tax and VAT instantly for the US, UK, Canada, Australia, Europe, and Middle East. Accurate to 2 decimal places with copyable breakdown.
        </p>
      </section>

      {/* Calculator Section */}
      <section className="pb-16 px-6">
        <SalesTaxCalculator />
      </section>

      {/* Educational Guide Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-gray-700">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200/80 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              How Retail Sales Tax and VAT Work Around the World
            </h2>
            <p className="leading-relaxed mb-4 text-sm md:text-base">
              Every country enforces different tax structures on commercial retail transactions. If you operate an independent retail store, boutique, coffee shop, or online ecommerce storefront, knowing how to separate pre-tax revenue from collected government tax is essential for cash flow and tax filings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/70">
              <h3 className="font-bold text-gray-900 text-lg mb-2">🇺🇸 United States (Sales Tax)</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Sales tax in the US is determined by state, county, and municipal boundaries, ranging from 0% (Oregon, Delaware, Montana, New Hampshire) up to 10.25% in parts of California and Illinois. In the US, prices on shelf tags are typically shown <em>exclusive</em> of tax.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200/70">
              <h3 className="font-bold text-gray-900 text-lg mb-2">🇬🇧 United Kingdom &amp; Europe (VAT)</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                HMRC in the UK sets standard VAT at 20%, with reduced rates (5%) for items like domestic fuel and children&apos;s car seats. Shelf prices in the UK and European Union are mandatory <em>inclusive</em> of VAT.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <h3 className="font-bold text-gray-900 mb-1.5 text-base">{faq.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Need to print receipts with automated tax calculation directly on your counter?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/global-pos"
                className="px-5 py-2.5 rounded-xl bg-gray-900 text-white font-bold text-xs hover:bg-gray-800 transition-all"
              >
                Explore Vyop Global POS →
              </Link>
              <Link
                href="/tools/invoice-generator"
                className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-800 font-bold text-xs hover:bg-gray-200 transition-all border border-gray-200"
              >
                Free Invoice Generator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Funnel */}
      <ToolDownloadCTA
        toolName="Global Sales Tax & VAT Calculator"
        appFeature="automate sales tax, VAT, and custom tax brackets on every receipt with phone camera barcode scanning"
      />

      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Footer />
    </main>
  );
}
