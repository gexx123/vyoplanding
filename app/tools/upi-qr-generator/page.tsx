import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolDownloadCTA from "@/components/ToolDownloadCTA";
import UpiQrGeneratorClient from "@/components/tools/UpiQrGeneratorClient";

const upiFaqs = [
  {
    question: "Does this UPI QR code work with Google Pay, PhonePe, Paytm, and BHIM?",
    answer:
      "Yes. The QR encodes a standard NPCI `upi://pay` link with your VPA (`pa`), merchant name (`pn`), currency (`INR`), and optional fixed amount (`am`). Every certified UPI app in India scans and pays directly into your bank account with zero MDR charges.",
  },
  {
    question: "Should I leave the Fixed Amount field empty for a counter standee?",
    answer:
      "Yes. For a counter QR standee that multiple customers scan for varying bill totals, leave Fixed Amount blank so shoppers enter the bill amount themselves. Enter a fixed amount only if creating a payment link or poster for a fixed-price service or item.",
  },
];

export default function UpiQrGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Free UPI Payment QR Code Standee Generator - Vyop",
        url: "https://vyop.in/tools/upi-qr-generator",
        applicationCategory: "FinanceApplication, BusinessApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript",
        description:
          "Generate and print a custom retail shop UPI QR payment standee supporting GPay, PhonePe, Paytm, and BHIM with 0% transaction fees.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: upiFaqs.map((faq) => ({
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
            { label: "UPI QR Generator", href: "/tools/upi-qr-generator" },
          ]}
        />
      </div>

      <section className="pt-4 pb-16 px-4 md:px-6 max-w-5xl mx-auto">
        {/* Compact Above-the-Fold Header */}
        <div className="text-center mb-6 no-print">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>📱</span> 100% Free Store Utility
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display mb-2 text-gray-900">
            Free UPI Payment <span className="gradient-text">QR Code Standee Generator</span>
          </h1>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Create and print a custom UPI payment standee for your shop counter compatible with Google Pay, PhonePe, Paytm, and BHIM.
          </p>
        </div>

        {/* Interactive Standee Builder */}
        <UpiQrGeneratorClient />

        {/* Guide & FAQs (SSR) */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm mb-10 space-y-3 no-print">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">
            Shop Counter UPI QR Guide &amp; FAQs
          </h2>
          {upiFaqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-sm text-gray-900 mb-1">{faq.question}</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Call to action for dynamic thermal receipts */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-xl text-center no-print">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
            Accept Dynamic Exact-Amount QR
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 font-display">
            Print Dynamic UPI QR on Every Bill with Vyop POS!
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
            With static standees, customers type the bill amount manually. Vyop POS prints a dynamic UPI QR code right on the customer receipt with the exact payable amount pre-filled. Free to start with ₹999/yr Pro cloud sync.
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

      <div className="no-print">
        <ToolDownloadCTA
          toolName="UPI QR Generator"
          appFeature="accept UPI payments directly at your shop counter with instant receipts"
        />

        <Footer />
      </div>
    </main>
  );
}
