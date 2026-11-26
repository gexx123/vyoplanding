import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolDownloadCTA from "@/components/ToolDownloadCTA";
import DiscountCalculatorClient from "@/components/tools/DiscountCalculatorClient";

const discountFaqs = [
  {
    question: "Why is 50% + 10% stacked discount equal to 55% off instead of 60%?",
    answer:
      "A stacked discount applies the second percentage to the already reduced price rather than the original MRP. On ₹1,000, a 50% markdown leaves ₹500, and an extra 10% off ₹500 deducts ₹50 — making the final price ₹450 (55% total discount).",
  },
  {
    question: "How is GST applied when offering a retail discount?",
    answer:
      "Under Indian GST rules, GST is charged on the net transaction value after trade/bill discounts shown on the invoice, not the pre-discount MRP.",
  },
];

export default function DiscountCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Free Discount, Stacked Offer & BOGO Calculator - Vyop",
        url: "https://vyop.in/tools/discount-calculator",
        applicationCategory: "FinanceApplication, BusinessApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript",
        description:
          "Calculate flat percentage discounts, stacked double discounts (e.g. 50% + 10%), Buy X Get Y Free deals, and post-discount GST 2.0 totals.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: discountFaqs.map((faq) => ({
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
          { label: "Discount Calculator", href: "/tools/discount-calculator" },
        ]}
      />

      <section className="pt-4 pb-16 px-4 md:px-6 max-w-4xl mx-auto">
        {/* Compact Above-the-Fold Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>🏷️</span> Retail Offer &amp; Sale Calculator
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display mb-2 text-gray-900">
            Discount &amp; Buy-Get-Free <span className="gradient-text">Offer Calculator</span>
          </h1>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Calculate flat % off, stacked double discounts (e.g. 50% + 10%), Buy X Get Y Free savings, and post-discount GST 2.0 tax totals.
          </p>
        </div>

        {/* Interactive Calculator */}
        <DiscountCalculatorClient />

        {/* Formulas & FAQs (SSR) */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm mb-10 space-y-4">
          <h2 className="text-xl font-bold font-display text-gray-900">
            Retail Discount Formulas &amp; FAQs
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Single Discount:</strong> Final Price = MRP × (1 − Discount% / 100).{" "}
            <strong>Successive / Double Discount:</strong> Effective % = d1 + d2 − (d1 × d2 / 100).
          </p>
          <div className="space-y-3">
            {discountFaqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="font-bold text-sm text-gray-900 mb-1">{faq.question}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-md text-center">
          <h2 className="text-2xl font-bold mb-3 font-display text-gray-900">
            Automate Discounts &amp; Run Spin-The-Wheel Offers with Vyop
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
            Vyop POS lets you apply item-wise discounts, festival coupon codes, and interactive Spin-The-Wheel customer rewards on your store billing counter. Free to start with ₹999/yr Pro cloud sync.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-600 text-white font-bold text-sm hover:bg-amber-700 transition-colors shadow-lg"
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
        toolName="Discount Calculator"
        appFeature="apply discounts, festival offers, and BOGO deals on bills instantly"
      />

      <Footer />
    </main>
  );
}
