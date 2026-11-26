import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolDownloadCTA from "@/components/ToolDownloadCTA";
import GstinValidatorClient from "@/components/tools/GstinValidatorClient";

const gstinFaqs = [
  {
    question: "How is an Indian 15-digit GSTIN structured?",
    answer:
      "The first 2 digits identify the registered State or Union Territory code (e.g., 27 for Maharashtra, 07 for Delhi). Digits 3–12 represent the business owner's 10-character PAN. Digit 13 shows the registration count for that PAN in the state, digit 14 is always 'Z' by default, and digit 15 is an alphanumeric check digit.",
  },
  {
    question: "How do I identify CGST+SGST vs IGST using a GSTIN?",
    answer:
      "Compare the first 2 digits (State Code) of your supplier or customer's GSTIN with your own state code. Matching state codes require intra-state tax (CGST + SGST), while different state codes require inter-state tax (IGST).",
  },
  {
    question: "What does the 4th character of the embedded PAN indicate?",
    answer:
      "The 4th letter of the PAN (6th character of the full GSTIN) indicates the taxpayer constitution: 'P' for Sole Proprietor / Individual, 'C' for Private or Public Limited Company, 'F' for Partnership / LLP, and 'H' for HUF.",
  },
];

export default function GstinValidatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Free GSTIN Validator & State Code Search - Vyop",
        url: "https://vyop.in/tools/gstin-validator",
        applicationCategory: "FinanceApplication, BusinessApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript",
        description:
          "Validate Indian 15-digit GSTIN format, inspect state codes, extract embedded PAN numbers, and identify entity constitution online for free.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: gstinFaqs.map((faq) => ({
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
          { label: "GSTIN Validator", href: "/tools/gstin-validator" },
        ]}
      />

      <section className="pt-4 pb-16 px-4 md:px-6 max-w-4xl mx-auto">
        {/* Compact Above-the-Fold Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>🛡️</span> GST Verification Tool
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display mb-2 text-gray-900">
            GSTIN Validator &amp; <span className="gradient-text">State Code Search</span>
          </h1>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Verify any 15-digit Indian GST number format, extract the registered state code, inspect embedded PAN details, and avoid billing errors.
          </p>
        </div>

        {/* Interactive Validator + State Code Directory */}
        <GstinValidatorClient />

        {/* FAQs */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200 mb-10 space-y-3">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">
            GSTIN Format &amp; Verification FAQs
          </h2>
          {gstinFaqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-sm text-gray-900 mb-1">{faq.question}</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-xl text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
            Automatic GST Billing in Vyop
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 font-display">
            Never Manually Check a GSTIN Again
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
            When you add a supplier or B2B buyer GSTIN in Vyop POS, the app detects state codes, splits CGST/SGST vs IGST automatically, and generates tax invoices cleanly. Free to start with ₹999/yr Pro cloud sync.
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
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ToolDownloadCTA
        toolName="GSTIN Validator"
        appFeature="auto-validate GST numbers when adding customers and suppliers"
      />

      <Footer />
    </main>
  );
}
