import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ComparisonDisclaimer from "@/components/legal/ComparisonDisclaimer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyop vs POSist (Restroworks) | Best Free Restaurant POS Alternative",
  description:
    "Compare Vyop vs POSist (Restroworks). Restroworks is an enterprise restaurant ERP with modular annual pricing. Vyop provides modern restaurant POS with Voice KOT, table management, and QR ordering, starting free with ₹999/yr Pro cloud sync.",
  alternates: { canonical: "/vyop-vs-posist" },
  openGraph: {
    title: "Vyop vs POSist | Free Restaurant Billing & KOT POS Alternative",
    description: "Compare Vyop and POSist. Vyop gives cafes and independent restaurants voice KOT generation, table management, and QR ordering starting free with ₹999/yr Pro.",
    url: "https://vyop.in/vyop-vs-posist",
  },
};

const comparison = [
  { feature: "Annual Cost Per Outlet", vyop: "Free to Start / ₹999/yr Pro", competitor: "Modular Enterprise Pricing (~₹15k–₹40k+/yr)", better: "vyop" },
  { feature: "Implementation & Setup", vyop: "Instant Self-Serve Setup", competitor: "Assisted Enterprise Onboarding", better: "vyop" },
  { feature: "Hardware Requirements", vyop: "Any Android Smartphone, Tablet or PC", competitor: "Dedicated POS Hardware / Touch Terminal", better: "vyop" },
  { feature: "Kitchen Order Ticket (KOT)", vyop: "✅ Voice KOT + Bluetooth Thermal Print", competitor: "✅ Network Thermal KOT & KDS Screen", better: "tie" },
  { feature: "Voice AI KOT Billing", vyop: "✅ Speak: 'Table 4: 2 Butter Naan, 1 Paneer'", competitor: "❌ Not Available (Touchscreen Menu Only)", better: "vyop" },
  { feature: "AI Visual Bakery & Food Recognition", vyop: "✅ Built-in AI Visual Recognition", competitor: "❌ Not Available", better: "vyop" },
  { feature: "Smartphone Camera Barcode Scanner", vyop: "✅ Built-in Phone Camera Barcode Scanner", competitor: "External Hardware Scanner Support", better: "draw" },
  { feature: "Table Management & Running Tabs", vyop: "✅ Visual Table Layout & Billing", competitor: "✅ Advanced Multi-Floor Table Management", better: "tie" },
  { feature: "QR Code Table Menu Ordering", vyop: "✅ Free 0% Commission Storefront", competitor: "Modular Digital Ordering Add-on", better: "vyop" },
  { feature: "Split Billing & Item Discounts", vyop: "✅ One-Tap Split & Custom Discount", competitor: "✅ Full Enterprise Split Billing", better: "tie" },
  { feature: "Indian GST Restaurant Compliant", vyop: "✅ 5% GST without ITC / Composite", competitor: "✅ Full GST & Tax Slab Compliance", better: "tie" },
  { feature: "WhatsApp Digital Invoices", vyop: "✅ 1-Tap Direct WhatsApp Bills with UPI QR", competitor: "SMS & Third-Party Integrations", better: "vyop" },
  { feature: "Contract Terms", vyop: "No Lock-in (Free / Yearly Pro)", competitor: "Annual Enterprise SaaS Agreement", better: "vyop" },
  { feature: "Offline Billing Capability", vyop: "✅ 100% Offline (Auto Cloud Sync)", competitor: "Cloud-Native Enterprise Architecture", better: "vyop" },
];

const faqs = [
  { question: "Why should a cafe or standalone restaurant choose Vyop over POSist?", answer: "Restroworks (POSist) is a powerful enterprise ERP platform built primarily for large multi-chain restaurant enterprises and food franchises requiring complex supply chain, central kitchen, and franchise royalty modules. For independent cafes, bakeries, cloud kitchens, and standalone restaurants, Vyop delivers agile table management, voice KOT generation, QR digital menus, and thermal receipt printing on any phone or browser starting free, with Pro cloud sync at just ₹999/year." },
  { question: "Can Vyop print KOT tickets to the kitchen wirelessly?", answer: "Yes! Vyop connects directly to any portable Bluetooth or Wi-Fi thermal receipt printer (2-inch or 3-inch). Waiters or counter staff can enter or speak orders on their phone, and the KOT immediately prints in the kitchen." },
  { question: "How does Voice KOT work on Vyop?", answer: "Instead of searching through deep menu categories during rush hours, your cashier or waiter taps the Voice Orb and says: 'Table 4: Do masala dosa, do filter coffee'. The order is formatted and assigned to the selected table immediately." },
  { question: "Does Vyop charge commissions on online orders or QR menu scans?", answer: "Zero commission! Your Vyop digital menu storefront and QR table ordering is included with 0% commission. Customers pay via UPI directly to your linked bank account." },
];

export default function VyopVsPosistPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Restaurant POS Alternative
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vyop vs <span className="gradient-text">POSist (Restroworks)</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Restroworks is built for multi-chain restaurant corporations.{" "}
            <strong className="text-gray-900">Vyop gives independent cafes, restaurants, and cloud kitchens agile voice KOT, table billing, and QR menus — free to start with ₹999/yr Pro cloud sync.</strong>
          </p>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">POSist (Restroworks)</h3>
            <div className="text-3xl font-extrabold text-red-600 mb-4">Enterprise Quotes (~₹15k–₹40k+/yr)</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Comprehensive enterprise ERP built for multi-chain restaurant conglomerates and food franchises with modular add-ons and assisted onboarding.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg relative">
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold">Fast & Lightweight</span>
            <h3 className="text-xl font-bold mb-2">Vyop POS</h3>
            <div className="text-3xl font-extrabold mb-4">Free / ₹999/yr Pro</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Built for speed. Runs on any phone, tablet, or browser. Voice KOT, table management, 0% commission QR menu, offline capability, and 1-tap WhatsApp bills with UPI QR.
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
                  <th className="py-5 px-4 text-base font-bold text-gray-500">POSist</th>
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
            Frequently Asked Questions: Vyop vs POSist
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
          <h2 className="text-3xl font-extrabold mb-4 font-display">Run Your Restaurant With Modern Voice POS</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Enjoy intuitive voice KOT, table management, and instant UPI QR billing — free to start with ₹999/yr Pro cloud sync.
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

        {/* Legal Disclaimer */}
        <ComparisonDisclaimer
          competitorName="POSist (Restroworks)"
          companyName="Restroworks"
          lastUpdated="October 2026"
        />
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
