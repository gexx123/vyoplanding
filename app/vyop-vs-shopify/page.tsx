import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs Shopify POS | Best Free Retail & Online Storefront Alternative in India",
  description:
    "Compare Vyop vs Shopify POS. Shopify charges $39-$89/month plus transaction fees and lacks Indian GST, Hindi voice billing & offline counter speed. Vyop provides 100% free POS and a 0% commission online storefront with Voice AI.",
  alternates: { canonical: "/vyop-vs-shopify" },
  openGraph: {
    title: "Vyop vs Shopify POS | Free Retail & Online Store Alternative",
    description: "Why Indian retailers choose Vyop over Shopify: ₹0 monthly subscription, 0% commission online storefront, smartphone camera barcode POS, and Hindi voice AI.",
    url: "https://vyop.in/vyop-vs-shopify",
  },
};

const comparison = [
  { feature: "Monthly Subscription Fee", vyop: "₹0 (100% Free Forever)", competitor: "$39 – $89 / month (₹38,000 – ₹88,000/yr)", better: "vyop" },
  { feature: "Online Store Commission", vyop: "0% Commission", competitor: "Shopify Transaction Fees (0.5% – 2%)", better: "vyop" },
  { feature: "Voice AI Billing (Hindi/English)", vyop: "✅ Speak to Bill in 5 Seconds", competitor: "❌ Not Available", better: "vyop" },
  { feature: "Smartphone Camera Barcode POS", vyop: "✅ Built-in Instant Camera POS", competitor: "Requires Separate Hardware Scanner", better: "vyop" },
  { feature: "Ways to Add Products", vyop: "10 Instant Methods (Voice, Camera, Master)", competitor: "Manual Web Entry / CSV", better: "vyop" },
  { feature: "Indian GST Compliance", vyop: "✅ Full Native CGST/SGST/IGST", competitor: "Requires Third-Party Tax Apps", better: "vyop" },
  { feature: "Direct UPI QR Payments", vyop: "✅ 0% Fee Instant Bank Deposit", competitor: "Requires Payment Gateway (2% Fee)", better: "vyop" },
  { feature: "Customer Engagement & Rewards", vyop: "✅ Built-in Spin-The-Wheel Game", competitor: "Paid App Store Plugins ($10-$30/mo)", better: "vyop" },
  { feature: "Offline Retail Billing", vyop: "✅ 100% Offline (Auto Sync)", competitor: "Limited Offline Mode", better: "vyop" },
  { feature: "Supported Languages", vyop: "Hindi, English, Hinglish", competitor: "English Dashboard", better: "vyop" },
  { feature: "WhatsApp Digital Invoices", vyop: "✅ 1-Tap Direct WhatsApp Bills", competitor: "Third-party WhatsApp Apps (Paid)", better: "vyop" },
  { feature: "Hardware Compatibility", vyop: "Any Android Smartphone", competitor: "iPad / iOS / Costly Proprietary Hardware", better: "vyop" },
];

const faqs = [
  { question: "Why is Vyop a better choice than Shopify POS for Indian retailers?", answer: "Shopify charges minimum $39/month (₹3,200/mo) for the basic plan, and $89/month per location for Shopify POS Pro. Adding payment gateway fees, third-party GST plugins, and currency conversion makes it cost over ₹80,000 to ₹1,50,000 every year. Vyop gives you both an in-store camera barcode POS and a 0% commission online storefront (with customer spin-wheel rewards) 100% free forever." },
  { question: "Does Vyop include an online store like Shopify?", answer: "Yes! Every Vyop user gets their own dedicated online storefront link (e.g., vyop.shop/yourbusiness) where customers can browse your product catalog, spin the reward wheel for discount coupons, and place orders directly on WhatsApp with zero commission fees." },
  { question: "Can Shopify POS handle fast counter billing with voice?", answer: "No. Shopify POS has no voice AI capabilities. To create an order, cashiers must manually tap through iPad screens or search text fields. Vyop allows shopkeepers to speak naturally in Hindi or English (e.g., 'Teen shirt size L aur do jeans') to generate bills in 5 seconds." },
  { question: "How does payment collection compare between Vyop and Shopify?", answer: "Shopify charges 0.5% to 2% transaction fees unless you use their proprietary gateway, plus standard Indian gateway charges. Vyop generates dynamic UPI QR codes directly on invoices, depositing 100% of customer payments directly into your bank account with 0% commission." },
];

export default function VyopVsShopifyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Free Retail POS & Storefront Alternative
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">Shopify POS</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Shopify costs ₹50,000+ every year in SaaS subscriptions, transaction fees, and plugin costs.{" "}
            <strong className="text-gray-900">Vyop gives you a smartphone camera POS and a 0% commission online customer storefront with Voice AI — 100% free forever.</strong>
          </p>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Shopify POS</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">$39 – $89/month + Fees</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Recurring USD subscriptions, transaction processing cuts, paid GST apps, and expensive iPad hardware. Complex setup not built for high-speed Indian retail queues.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">100% Free Forever</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">₹0 / Lifetime</div>
            <p className="text-sm text-white/90 leading-relaxed">
              0% commission online storefront + smartphone camera barcode POS. Voice AI in Hindi/English, 10 inventory methods, Indian GST, dynamic UPI QR, and Spin-The-Wheel rewards.
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
                  <th className="py-5 px-4 text-base font-bold text-gray-500">Shopify POS</th>
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
            Frequently Asked Questions: Vyop vs Shopify
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
          <h2 className="text-3xl font-extrabold mb-4 font-display">Get Your Store & POS Free Today</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Sell in your shop with camera barcode POS, and sell online with your own 0% commission storefront. ₹0 forever.
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
