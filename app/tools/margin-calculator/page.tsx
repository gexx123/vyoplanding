import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolDownloadCTA from "@/components/ToolDownloadCTA";
import MarginCalculatorClient from "@/components/tools/MarginCalculatorClient";

const marginFaqs = [
  {
    question: "How is profit margin calculated from cost price and selling price?",
    answer:
      "Profit Margin (%) = ((Selling Price − Cost Price) ÷ Selling Price) × 100. For example, buying stock at ₹100 and selling it at ₹140 produces ₹40 gross profit and a 28.6% profit margin.",
  },
  {
    question: "How do I find the right selling price for a target margin?",
    answer:
      "Use Selling Price = Cost Price ÷ (1 − Target Margin / 100). To make a 25% margin on an item costing ₹100, divide 100 by 0.75 to get ₹133.33 before GST.",
  },
];

export default function ProfitMarginCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Free Retail Profit Margin & Markup Calculator - Vyop",
        url: "https://vyop.in/tools/margin-calculator",
        applicationCategory: "FinanceApplication, BusinessApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript",
        description:
          "Calculate gross profit per unit, profit margin percentage, markup percentage, and target selling prices with optional GST 2.0 rates.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: marginFaqs.map((faq) => ({
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
          { label: "Profit Margin Calculator", href: "/tools/margin-calculator" },
        ]}
      />

      <section className="pt-4 pb-16 px-4 md:px-6 max-w-4xl mx-auto">
        {/* Compact Above-the-Fold Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>📈</span> Retail Pricing &amp; Profit Tool
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display mb-2 text-gray-900">
            Retail Profit Margin &amp; <span className="gradient-text">Markup Calculator</span>
          </h1>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Calculate gross profit per unit, margin percentage, markup rate, and GST 2.0 retail selling prices in seconds.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <MarginCalculatorClient />

        {/* FAQs (SSR) */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm mb-10 space-y-3">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">
            Profit Margin &amp; Markup FAQs
          </h2>
          {marginFaqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-sm text-gray-900 mb-1">{faq.question}</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* CTA to Vyop POS */}
        <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-md text-center">
          <h2 className="text-2xl font-bold mb-3 font-display text-gray-900">
            Track Real-Time Margins on Every Item with Vyop POS
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
            Vyop automatically tracks cost prices, selling prices, and category profit margins on your phone. See daily net profit reports with zero math. Free to start with ₹999/yr Pro cloud sync.
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
        toolName="Margin Calculator"
        appFeature="track profit margins on every sale with real-time P&L reports"
      />

      <Footer />
    </main>
  );
}
