import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolDownloadCTA from "@/components/ToolDownloadCTA";
import InvoiceGeneratorClient from "@/components/tools/InvoiceGeneratorClient";

const invoiceFaqs = [
  {
    question: "How do I switch between CGST+SGST and IGST on this invoice maker?",
    answer:
      "Select Intra-State (CGST + SGST) when billing customers within the same state, or Inter-State (IGST) when shipping goods to another state. The tax table updates automatically across 0%, 5%, 18%, and 40% GST 2.0 rates.",
  },
  {
    question: "Can I download the invoice as a PDF or print it without watermarks?",
    answer:
      "Yes. Click 'Print / Save PDF' at the top of the editor and choose 'Save as PDF' in your browser print dialog. All website navigation and editing controls are automatically hidden so only your clean Tax Invoice prints.",
  },
];

export default function FreeInvoiceGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Free Online GST Invoice Generator - Vyop",
        url: "https://vyop.in/tools/invoice-generator",
        applicationCategory: "FinanceApplication, BusinessApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript",
        description:
          "Create and print GST tax invoices with automatic CGST, SGST, and IGST splits and WhatsApp summary sharing for free with zero watermark.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: invoiceFaqs.map((faq) => ({
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
      <div className="no-print">
        <Navbar />

        <Breadcrumbs
          items={[
            { label: "Free Tools", href: "/tools" },
            { label: "Invoice Generator", href: "/tools/invoice-generator" },
          ]}
        />
      </div>

      <div className="pt-4 pb-16 px-4 md:px-6 max-w-5xl mx-auto">
        {/* Compact Above-the-Fold Header */}
        <div className="text-center mb-6 no-print">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>🧾</span> 100% Free Business Tool
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display mb-2 text-gray-900">
            Free Online GST <span className="gradient-text">Invoice Generator</span>
          </h1>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Create, download, and print GST-compliant retail tax invoices in seconds with GST 2.0 slabs. No login required, zero watermark.
          </p>
        </div>

        {/* Interactive Invoice Canvas */}
        <InvoiceGeneratorClient />

        {/* Invoice FAQs */}
        <div className="mt-10 bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-3 no-print">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">
            GST Invoice Maker FAQs
          </h2>
          {invoiceFaqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-sm text-gray-900 mb-1">{faq.question}</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Direct App Upgrade Banner */}
        <div className="mt-10 p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-xl text-center no-print">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
            Why type manually?
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 font-display">
            Create Bills Instantly Just by Speaking!
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
            Vyop POS turns your smartphone camera into a barcode scanner and lets you speak bills in Hindi or English (e.g. &apos;Do refined tel, ek cheeni&apos;). Free to start with ₹999/yr Pro cloud sync.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white font-bold text-sm hover:scale-105 transition-transform shadow-lg"
          >
            Download Vyop Free on Google Play →
          </a>
        </div>

        {/* Internal Links to Other Free Tools */}
        <div className="mt-10 text-center no-print">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">Other Free Business Utilities</span>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/gst-calculator" className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:border-amber-500">
              📊 Free GST Calculator
            </Link>
            <Link href="/tools/barcode-generator" className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:border-amber-500">
              🏷️ Free Barcode Generator
            </Link>
            <Link href="/pos-app" className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:border-amber-500">
              📱 Free POS App
            </Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="no-print">
        <ToolDownloadCTA
          toolName="Invoice Generator"
          appFeature="create professional GST invoices instantly with voice commands"
        />

        <Footer />
      </div>
    </main>
  );
}
