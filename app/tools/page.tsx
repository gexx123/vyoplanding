import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Retail & Business Tools for Indian Shopkeepers | Vyop",
  description:
    "Explore 100% free online tools for retail shopkeepers and accountants: GST Calculator, Barcode Generator, Invoice Maker, Profit Margin Calculator, and HSN Code Finder.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free Retail Business Tools | Vyop",
    description: "Free GST calculator, barcode sticker generator, invoice maker, margin calculator, and HSN code search for Indian retailers.",
    url: "https://vyop.in/tools",
  },
};

const tools = [
  {
    title: "Free GST Invoice Generator",
    badge: "Most Popular",
    icon: "🧾",
    description: "Create, download, and print professional GST tax invoices in seconds with custom items, CGST/SGST/IGST tax splits, and dynamic WhatsApp sharing.",
    link: "/tools/invoice-generator",
    features: ["Intra & Inter-State GST", "1-Tap WhatsApp Share", "Print & PDF Ready", "Zero Watermark"],
  },
  {
    title: "Free Online GST Calculator",
    badge: "5%, 12%, 18%, 28%",
    icon: "📊",
    description: "Quickly calculate inclusive and reverse GST, split CGST and SGST, and compute exact tax breakdowns for any product or service.",
    link: "/tools/gst-calculator",
    features: ["Add & Remove GST", "Reverse Calculation", "All Indian Tax Slabs", "Instant Copy"],
  },
  {
    title: "Free Barcode Generator & Printer",
    badge: "Print Stickers",
    icon: "🏷️",
    description: "Generate Code-128 barcode labels with item name and MRP price. Print batches of barcode stickers on any A4 or sticker sheet.",
    link: "/tools/barcode-generator",
    features: ["Code-128 Standard", "Batch Sticker Print", "Custom Name & MRP", "High-Definition SVG"],
  },
  {
    title: "Retail Profit Margin & Markup Calculator",
    badge: "Pricing Tool",
    icon: "📈",
    description: "Compute exact gross profit, margin percentage, markup rate, and GST-compliant selling prices to maximize your store's profitability.",
    link: "/tools/margin-calculator",
    features: ["Margin vs Markup", "Cost Price & Selling Price", "GST on Profit", "Instant Math"],
  },
  {
    title: "HSN Code & GST Rate Finder",
    badge: "Search Directory",
    icon: "🔍",
    description: "Search official HSN codes and GST rates across FMCG, groceries, textiles, electronics, medicines, and hardware.",
    link: "/tools/hsn-code-finder",
    features: ["1-Click HSN Copy", "Grocery, Cloth & Pharma", "Official Tax Slabs", "Instant Search"],
  },
  {
    title: "Cash Denomination Counter & Tally",
    badge: "Daily Closing Tool",
    icon: "💵",
    description: "Tally your cash drawer currency notes and coins at store closing. Generate bank deposit slips and share daily cash summaries on WhatsApp.",
    link: "/tools/cash-counter",
    features: ["₹500 to ₹1 Coins", "Number to Words", "WhatsApp Cash Report", "Petty Cash Float"],
  },
  {
    title: "Store UPI Payment QR Code Standee",
    badge: "Print Standee",
    icon: "📱",
    description: "Generate and print custom counter payment standees with your shop name and UPI ID. Supports Google Pay, PhonePe, Paytm with 0% MDR.",
    link: "/tools/upi-qr-generator",
    features: ["Custom Shop Name", "All UPI Apps", "Print Ready Standee", "0% Fee Payments"],
  },
  {
    title: "Discount & BOGO Offer Calculator",
    badge: "Offers & Sales",
    icon: "🏷️",
    description: "Calculate percentage discounts, stacked double offers (50% + 10% off), Buy X Get Y Free unit costs, and post-discount GST amounts.",
    link: "/tools/discount-calculator",
    features: ["Simple % Off", "Double Discounts", "Buy 2 Get 1 Free", "GST After Discount"],
  },
  {
    title: "GSTIN Validator & State Code Finder",
    badge: "Tax Verification",
    icon: "🛡️",
    description: "Verify 15-digit Indian GST number formats, extract registered states, deduce business constitution types, and search all 37 state codes.",
    link: "/tools/gstin-validator",
    features: ["Instant Format Check", "37 State Codes List", "PAN Extraction", "Entity Identification"],
  },
  {
    title: "Vyop POS: Complete Mobile App",
    badge: "Free Mobile POS",
    icon: "📱",
    description: "All of these tools built into one app. Point your phone camera at barcodes, speak bills in Hindi or English, and manage inventory starting free.",
    link: "/pos-app",
    features: ["Voice AI in Hindi", "Camera Barcode POS", "0% Commission Store", "Free to Start"],
  },
];

export default function ToolsHubPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-36 pb-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            Free Retail Utilities
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display mb-4 text-gray-900">
            Free Business Tools for <span className="gradient-text">Indian Retailers</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Everything you need to calculate taxes, price your inventory, generate barcodes, and bill customers — completely free with zero watermarks.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{tool.icon}</span>
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
                    {tool.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {tool.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  {tool.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="text-emerald-500 font-bold">✓</span> {feat}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={tool.link}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-500 text-white text-xs font-bold hover:bg-amber-600 transition-colors"
              >
                Use Free Tool →
              </Link>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="p-10 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white text-center shadow-xl">
          <h2 className="text-3xl font-extrabold mb-3 font-display">Get All These Tools Inside One App</h2>
          <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
            Vyop combines barcode scanning, voice AI billing, automated GST tax reports, digital khata, and an online storefront in your pocket.
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

      <Footer />
    </main>
  );
}
