import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolDownloadCTA from "@/components/ToolDownloadCTA";
import BarcodeGeneratorClient from "@/components/tools/BarcodeGeneratorClient";

const barcodeFaqs = [
  {
    question: "Which barcode format does this free sticker generator use?",
    answer:
      "It generates crisp, vector-grade Code 128 barcodes supporting numeric SKUs, EAN numbers, and alphanumeric product codes. Because it renders as clean SVG lines, thermal label printers and laser printers produce high-contrast scannable stickers.",
  },
  {
    question: "Can I scan these generated barcode stickers using a smartphone camera?",
    answer:
      "Yes. Standard phone camera scanners and Vyop POS recognize Code 128 barcode labels instantly, making it ideal for loose grocery packs, garments, gifts, and local retail products without pre-printed manufacturer barcodes.",
  },
];

export default function FreeBarcodeGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Free Online Barcode Generator & Printer - Vyop",
        url: "https://vyop.in/tools/barcode-generator",
        applicationCategory: "BusinessApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript",
        description:
          "Generate and print scannable Code 128 barcode stickers with product name and MRP price tags for retail items for free.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      },
      {
        "@type": "FAQPage",
        mainEntity: barcodeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <Breadcrumbs
        items={[
          { label: "Free Tools", href: "/tools" },
          { label: "Barcode Generator", href: "/tools/barcode-generator" },
        ]}
      />

      <section className="pt-4 pb-16 px-6 max-w-6xl mx-auto">
        {/* Compact Above-the-Fold Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2.5">
            100% Free Online Retail Tool
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display mb-2">
            Free Online <span className="gradient-text">Barcode Generator</span> &amp; Label Printer
          </h1>
          <p className="text-sm md:text-base text-[var(--text-secondary)]">
            Generate scannable CODE128 barcode stickers with item name and MRP price tags, and print multi-label sheets straight from your browser.
          </p>
        </div>

        {/* Barcode Generator Tool Grid */}
        <BarcodeGeneratorClient />

        {/* How-To & FAQs (SSR) */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 space-y-6">
          <h2 className="text-2xl font-bold font-display text-gray-900">
            How to Use the Free Barcode Generator for Your Shop
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">1. Enter Barcode Code</h3>
              <p>Type any product SKU, EAN number, or alphanumeric item code to generate a crisp vector barcode SVG.</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">2. Add Name &amp; MRP</h3>
              <p>Include your item title and MRP price so your printed sticker doubles as an instant retail shelf or packet tag.</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">3. Scan with Vyop</h3>
              <p>Use the free Vyop smartphone app to scan these barcode stickers for instant billing at the shop counter.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-3">
            {barcodeFaqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="font-bold text-sm text-gray-900 mb-1">{faq.question}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ToolDownloadCTA
        toolName="Barcode Generator"
        appFeature="print barcode stickers and scan them at the billing counter"
      />

      <Footer />
    </main>
  );
}
