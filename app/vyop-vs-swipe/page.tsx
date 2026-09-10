import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Swipe Billing App | Best Affordable GST Billing Alternative",
  description:
    "Compare Vyop vs Swipe Billing (getswipe.in). Swipe charges ₹1,299-₹3,999/year. Vyop offers free offline billing and ₹999/yr Pro cloud sync with Voice AI and 10 ways to add items.",
  alternates: { canonical: "/vyop-vs-swipe" },
  openGraph: {
    title: "Vyop vs Swipe Billing | Free GST Billing App Alternative",
    description: "Looking for a modern Swipe alternative? Vyop provides voice AI billing, smartphone camera POS, and 0% commission storefront with lowest ₹999/yr pricing.",
    url: "https://vyop.in/vyop-vs-swipe",
  },
};

const comparison = [
  { feature: "Base Price & Subscription", vyop: "Free to Start / ₹999/yr Pro", competitor: "Free tier limited / ₹1,299 – ₹3,999/year", better: "vyop" },
  { feature: "Voice AI Billing (Hindi/English)", vyop: "✅ Speak to Bill in 5 Seconds", competitor: "❌ Not Available", better: "vyop" },
  { feature: "Smartphone Camera Barcode Scanner", vyop: "✅ Built-in Instant Camera POS", competitor: "Basic or External Hardware Required", better: "vyop" },
  { feature: "Ways to Add Inventory Items", vyop: "10 Instant Methods (AI, Voice, Camera, Master)", competitor: "Standard Form & Excel Import", better: "vyop" },
  { feature: "Customer Online Storefront", vyop: "✅ Free Store + Spin-The-Wheel Game", competitor: "Basic E-commerce Store Link", better: "vyop" },
  { feature: "WhatsApp Invoicing & UPI QR", vyop: "✅ 1-Tap Direct WhatsApp Bills", competitor: "✅ Supported (Branded in Paid Tier)", better: "vyop" },
  { feature: "Offline Billing Capability", vyop: "✅ 100% Offline (Auto Cloud Sync)", competitor: "Requires Active Internet", better: "vyop" },
  { feature: "GST Compliance (GSTR-1, 3B)", vyop: "✅ Full Automated Tax Invoices", competitor: "✅ Full GST Compliance", better: "tie" },
  { feature: "Thermal Receipt Printing", vyop: "✅ Wireless Bluetooth (2\" & 3\")", competitor: "Thermal & A4 Printing Supported", better: "tie" },
  { feature: "Multi-Industry Specialization", vyop: "22 Retail & Hospitality Verticals", competitor: "General Invoicing Focus", better: "vyop" },
  { feature: "Udhar / Credit Khata", vyop: "✅ Auto WhatsApp Reminders", competitor: "Payment Reminders Available", better: "tie" },
  { feature: "Watermark on Invoices", vyop: "Never (Clean, Professional)", competitor: "Watermark on Free Tier", better: "vyop" },
];

const faqs = [
  { question: "Why is Vyop a better alternative to Swipe Billing?", answer: "While Swipe is good for basic desktop invoicing, it charges ₹1,299 to ₹3,999/year to unlock essential features like custom invoice themes, multiple users, and watermark removal. Furthermore, Swipe does not have Voice AI billing or smartphone camera live barcode scanning. Vyop offers a generous free tier and an affordable ₹999/yr Pro plan with Voice AI in Hindi/English, and 10 ways to add inventory items." },
  { question: "How does Vyop's pricing compare to Swipe?", answer: "Vyop lets you start completely free. For complete multi-device cloud backup and sync, Vyop Pro is just ₹999/year (less than ₹2.7/day) — saving you thousands compared to Swipe's ₹3,999/year subscription." },
  { question: "Can I import my existing product list from Swipe into Vyop?", answer: "Yes! Vyop supports 1-click Excel and CSV inventory import. You can export your product catalog from Swipe and upload it directly into Vyop in under 30 seconds." },
  { question: "How does Vyop's Voice AI work compared to typing on Swipe?", answer: "Instead of typing product names on a keyboard or searching dropdowns, you simply speak naturally into the Vyop app in Hindi or English (e.g., 'Do kilo besan aur ek mustard oil'). The AI instantly detects the item, calculates the price with GST, and prepares the bill in 5 seconds." },
];

export default function VyopVsSwipePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Swipe Billing Alternative
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Swipe Billing</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Swipe charges annual subscription fees to remove watermarks and unlock features.{" "}
            <strong className="text-gray-900">Vyop gives you Voice AI in Hindi, camera barcode POS, and 10 ways to add items — free to start with ₹999/yr Pro cloud sync.</strong>
          </p>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Swipe Billing</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">₹1,299 – ₹3,999/yr</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Charges annual fees for clean watermark-free invoices, multiple business profiles, and priority features. Requires typing for every bill; no voice AI or camera POS.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">Lowest in India</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Clean professional invoices with zero watermark. Voice AI in Hindi/English, smartphone camera barcode scanner, 10 inventory methods, and 0% commission online store.
            </p>
          </div>
        </div>

        {/* Detailed Feature Comparison Table */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 overflow-hidden mb-16">
          <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">Detailed Feature-by-Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-5 px-4 text-base font-bold">Feature</th>
                  <th className="py-5 px-4 text-base font-bold text-amber-600">Vyop POS</th>
                  <th className="py-5 px-4 text-base font-bold text-gray-500">Swipe Billing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-5 px-4 font-semibold text-gray-900 text-sm">{row.feature}</td>
                    <td className="py-5 px-4 text-sm font-bold text-emerald-700">{row.vyop}</td>
                    <td className="py-5 px-4 text-gray-600 text-sm">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Frequently Asked Questions: Vyop vs Swipe
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-12 rounded-3xl bg-amber-50 border border-amber-200">
          <h2 className="text-3xl font-extrabold mb-4 font-display">Upgrade to India's #1 Voice Billing App</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Join thousands of smart retailers who bill 10x faster with voice and camera barcodes. Free to start.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-600 text-white font-bold text-base hover:bg-amber-700 transition-colors shadow-lg"
          >
            Download Vyop Free on Google Play →
          </a>
        </div>
      </section>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      <Footer />
    </main>
  );
}
