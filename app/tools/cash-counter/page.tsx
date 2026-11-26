import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolDownloadCTA from "@/components/ToolDownloadCTA";
import CashCounterClient from "@/components/tools/CashCounterClient";

const cashFaqs = [
  {
    question: "How does this online cash calculator and tally counter work?",
    answer:
      "Enter the count of each Indian currency denomination (₹500, ₹200, ₹100, ₹50, ₹20, ₹10 notes and ₹5, ₹2, ₹1 coins). The calculator multiplies each note count, sums your total cash in hand, converts the figure into Indian words (Rupees/Lakhs), and deducts your opening cash float to compute net daily cash sales.",
  },
  {
    question: "Can I use it as a bank cash deposit denomination slip?",
    answer:
      "Yes. Enter your shop name and note counts, then tap 'Print Tally Slip' to print a clean denomination breakup sheet or save it as a PDF for your bank deposit or end-of-day register.",
  },
  {
    question: "How is Opening Cash Float deducted from daily sales?",
    answer:
      "If you keep petty cash (change/float) such as ₹2,000 in the cash drawer every morning, enter ₹2,000 in the Opening Cash Float field. The tool automatically subtracts it from Total Cash in Drawer to show your Net Day Sales.",
  },
];

export default function CashCounterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Free Cash Calculator & Cash Tally Counter - Vyop",
        url: "https://vyop.in/tools/cash-counter",
        applicationCategory: "FinanceApplication, BusinessApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript",
        description:
          "Free Indian currency denomination cash calculator and daily cash drawer tally counter for retail shops, cashiers, and bank deposits.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: cashFaqs.map((faq) => ({
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
            { label: "Cash Counter", href: "/tools/cash-counter" },
          ]}
        />
      </div>

      <section className="pt-4 pb-16 px-4 md:px-6 max-w-4xl mx-auto">
        {/* Compact Above-the-Fold Header */}
        <div className="text-center mb-6 no-print">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>💵</span> Daily Cash Tally Tool
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display mb-2 text-gray-900">
            Cash Calculator &amp; <span className="gradient-text">Denomination Tally Counter</span>
          </h1>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Count currency notes (₹500–₹10) and coins instantly. Get total cash in words, net day sales after float, WhatsApp closing report, and a printable slip.
          </p>
        </div>

        {/* Interactive Calculator */}
        <CashCounterClient />

        {/* Guide & FAQs (SSR) */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-200 shadow-sm mb-10 space-y-6 no-print">
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-display text-gray-900 mb-3">
              How to Tally Daily Cash at Store Closing
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Count bundles by denomination starting from ₹500 notes down to ₹1 coins. Enter your morning opening change in the{" "}
              <strong>Opening Cash Float</strong> box so your end-of-day drawer count separates net daily cash sales from starting change.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900">Cash Tally FAQs</h3>
            {cashFaqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-sm text-gray-900 mb-1">{faq.question}</h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Vyop POS */}
        <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-md text-center no-print">
          <h2 className="text-2xl font-bold mb-3 font-display text-gray-900">
            Reconcile Cash, UPI &amp; Udhar Automatically with Vyop POS
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
            Vyop POS automatically tracks cash payments, UPI QR transactions, customer udhar (credit), and card settlements on your phone. Free to start with ₹999/yr Pro cloud sync.
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

      <div className="no-print">
        <ToolDownloadCTA
          toolName="Cash Counter"
          appFeature="tally your cash drawer digitally at end of each day"
        />

        <Footer />
      </div>
    </main>
  );
}
