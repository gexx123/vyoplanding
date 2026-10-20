import Link from "next/link";

interface ComparisonCrossLinksProps {
  currentSlug: string;
}

const comparisons = [
  { name: "Vyapar", slug: "vyop-vs-vyapar", desc: "Save 75% on licensing" },
  { name: "Tally Prime", slug: "vyop-vs-tally", desc: "No complex desktop setup" },
  { name: "Khatabook", slug: "vyop-vs-khatabook", desc: "Full POS + barcode scanning" },
  { name: "myBillBook", slug: "vyop-vs-mybillbook", desc: "Voice AI & free storefront" },
  { name: "Marg ERP", slug: "vyop-vs-marg", desc: "Modern cloud-first POS" },
  { name: "Petpooja", slug: "vyop-vs-petpooja", desc: "0% commission restaurant POS" },
  { name: "Square POS", slug: "vyop-vs-square", desc: "India-first UPI & thermal print" },
  { name: "Loyverse", slug: "vyop-vs-loyverse", desc: "Free cloud sync & GST bills" },
  { name: "Swipe", slug: "vyop-vs-swipe", desc: "Phone camera barcode billing" },
  { name: "Busy Accounting", slug: "vyop-vs-busy", desc: "Mobile-first inventory" },
  { name: "Zoho Books", slug: "vyop-vs-zoho", desc: "Retail POS with zero bloat" },
  { name: "Shopify", slug: "vyop-vs-shopify", desc: "Zero platform commission" },
];

export default function ComparisonCrossLinks({ currentSlug }: ComparisonCrossLinksProps) {
  const otherComparisons = comparisons.filter((c) => c.slug !== currentSlug);

  return (
    <div className="mt-16 pt-12 border-t border-gray-200">
      <h3
        className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Compare Vyop with Other POS &amp; Billing Software
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 mb-10">
        {otherComparisons.map((item) => (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            className="p-3.5 rounded-2xl bg-white border border-gray-200/90 hover:border-amber-400 hover:shadow-md transition-all group"
          >
            <p className="text-sm font-bold text-gray-900 group-hover:text-amber-800 transition-colors">
              Vyop vs {item.name}
            </p>
            <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
          </Link>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-amber-950">Looking for free online business utilities?</p>
          <p className="text-xs text-amber-800/80 mt-0.5">
            Use our free browser tools for instant tax calculations, barcode creation, and GST validation.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/tools/gst-calculator"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-amber-200 text-amber-900 hover:bg-amber-100 transition-colors"
          >
            GST Calculator
          </Link>
          <Link
            href="/tools/barcode-generator"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-amber-200 text-amber-900 hover:bg-amber-100 transition-colors"
          >
            Barcode Generator
          </Link>
          <Link
            href="/tools/invoice-generator"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-amber-200 text-amber-900 hover:bg-amber-100 transition-colors"
          >
            Invoice Generator
          </Link>
        </div>
      </div>
    </div>
  );
}
