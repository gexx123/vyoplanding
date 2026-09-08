import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import GstCalculator from "@/components/tools/GstCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online GST Calculator India — 5%, 12%, 18%, 28% & Reverse GST | Vyop",
  description:
    "Free and accurate GST calculator for Indian shopkeepers & accountants. Calculate inclusive & reverse GST, CGST, SGST, IGST splits for 5%, 12%, 18%, and 28% tax slabs.",
  keywords: [
    "free GST calculator India",
    "online GST calculator",
    "reverse GST calculator",
    "calculate CGST SGST",
    "GST inclusive exclusive formula",
    "billing software GST calculator",
    "Vyop GST tool",
  ],
  alternates: {
    canonical: "/tools/gst-calculator",
  },
  openGraph: {
    title: "Free Online GST Calculator India | Vyop Tools",
    description: "Calculate CGST, SGST, and Reverse GST in seconds with Vyop's free interactive tool.",
    url: "https://vyop.in/tools/gst-calculator",
    siteName: "Vyop",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vyop Free Online GST Calculator",
      },
    ],
    type: "website",
  },
};

const gstFaqs = [
  {
    question: "What is the difference between GST Inclusive and GST Exclusive?",
    answer:
      "GST Exclusive means the price does NOT include tax yet. GST is added on top of the base amount (e.g. ₹1,000 + 18% GST = ₹1,180). GST Inclusive means the displayed price already includes tax, and you calculate backward to find the original base amount (e.g. In ₹1,180 inclusive of 18% GST, base is ₹1,000 and GST is ₹180).",
  },
  {
    question: "How are CGST and SGST divided in intra-state sales?",
    answer:
      "When goods are sold within the same state (Intra-State), the total GST rate is divided equally 50/50 between the Central Government (CGST) and the State Government (SGST). For example, on an 18% item, 9% is CGST and 9% is SGST.",
  },
  {
    question: "When is IGST charged instead of CGST/SGST?",
    answer:
      "IGST (Integrated Goods and Services Tax) is charged on all inter-state transactions when the seller and buyer are in different Indian states. The entire tax percentage goes under IGST.",
  },
  {
    question: "What is the formula to calculate GST?",
    answer:
      "To Add GST: GST Amount = (Base Amount × GST Rate) / 100. To Remove GST (Reverse calculation): Base Amount = Total Inclusive Amount / (1 + (GST Rate / 100)).",
  },
];

export default function GstCalculatorPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-12 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs md:text-sm font-semibold mb-6">
          <span>🇮🇳</span> Official Indian GST Tax Slabs (2026)
        </div>
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Free Online <span className="gradient-text">GST Calculator</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 font-body">
          Calculate GST amount, CGST, SGST, IGST, and Reverse GST (inclusive tax) across 5%, 12%, 18%, and 28% slabs with instant one-click copy.
        </p>
      </section>

      {/* Interactive Tool */}
      <section className="pb-20 px-6 max-w-5xl mx-auto">
        <GstCalculator />
      </section>

      {/* Educational Guide Section */}
      <section className="py-20 bg-white border-t border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Understanding Indian GST Rates & Calculation
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              A quick guide for retail shopkeepers, wholesalers, and small business owners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ➕ Formula for Adding GST (Exclusive)
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Use this when you have a base price and need to add GST to generate the customer bill:
              </p>
              <div className="p-4 rounded-xl bg-white border border-gray-200 font-mono text-xs md:text-sm text-gray-800 mb-3">
                GST Amount = (Net Price × GST%) / 100 <br />
                Total Price = Net Price + GST Amount
              </div>
              <p className="text-xs text-gray-500">
                Example: On a ₹2,000 item with 18% GST: GST = (2000 × 18) / 100 = ₹360. Total Bill = ₹2,360.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ➖ Formula for Removing GST (Inclusive / Reverse)
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Use this when your selling price already includes tax (MRP) and you need to find the taxable base:
              </p>
              <div className="p-4 rounded-xl bg-white border border-gray-200 font-mono text-xs md:text-sm text-gray-800 mb-3">
                Net Price = Total Price / (1 + (GST% / 100)) <br />
                GST Amount = Total Price - Net Price
              </div>
              <p className="text-xs text-gray-500">
                Example: On a ₹1,180 MRP item at 18%: Net = 1180 / 1.18 = ₹1,000. GST = ₹180.
              </p>
            </div>
          </div>

          {/* Slabs Table */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Indian GST Tax Slabs Reference
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-amber-50/80 border-b border-amber-200/60 text-amber-950 font-bold">
                    <th className="p-4 rounded-tl-2xl">GST Slab</th>
                    <th className="p-4">CGST + SGST</th>
                    <th className="p-4">Eligible Goods & Categories</th>
                    <th className="p-4 rounded-tr-2xl">Vyop Voice Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="p-4 font-bold text-amber-700">0% (Nil)</td>
                    <td className="p-4">0% + 0%</td>
                    <td className="p-4 text-gray-600">Fresh vegetables, milk, eggs, salt, unbranded grains</td>
                    <td className="p-4 font-mono text-xs text-gray-500">&quot;Do kilo tamatar&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-amber-700">5%</td>
                    <td className="p-4">2.5% + 2.5%</td>
                    <td className="p-4 text-gray-600">Packaged food, edible oil, tea, coffee, footwear &lt; ₹1,000</td>
                    <td className="p-4 font-mono text-xs text-gray-500">&quot;Ek kilo Fortune tel&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-amber-700">12%</td>
                    <td className="p-4">6% + 6%</td>
                    <td className="p-4 text-gray-600">Butter, cheese, fruit juice, garments &gt; ₹1,000, computers</td>
                    <td className="p-4 font-mono text-xs text-gray-500">&quot;Do Amul butter 500g&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-amber-700">18%</td>
                    <td className="p-4">9% + 9%</td>
                    <td className="p-4 text-gray-600">Hair oil, soap, electronics, capital goods, restaurants</td>
                    <td className="p-4 font-mono text-xs text-gray-500">&quot;Teen Dettol soap&quot;</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-amber-700">28%</td>
                    <td className="p-4">14% + 14%</td>
                    <td className="p-4 text-gray-600">Air conditioners, refrigerators, cement, automobiles</td>
                    <td className="p-4 font-mono text-xs text-gray-500">&quot;Ek LG 1.5 Ton AC&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              GST Calculator Frequently Asked Questions
            </h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              {gstFaqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "name": "Free Online GST Calculator India - Vyop",
                "url": "https://vyop.in/tools/gst-calculator",
                "applicationCategory": "FinanceApplication, BusinessApplication",
                "operatingSystem": "All",
                "browserRequirements": "Requires JavaScript",
                "description": "Calculate CGST, SGST, IGST, and reverse GST for Indian business invoices for free.",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "INR",
                },
              },
              {
                "@type": "FAQPage",
                "mainEntity": gstFaqs.map((f) => ({
                  "@type": "Question",
                  "name": f.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      <Footer />
    </main>
  );
}
