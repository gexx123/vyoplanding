"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { 
  Barcode, 
  FileText, 
  PlusCircle, 
  Sparkles, 
  Camera, 
  Printer, 
  Mic, 
  MessageSquare, 
  Image as ImageIcon, 
  ListFilter 
} from "lucide-react";

const tenWays = [
  {
    id: 1,
    badge: "Supermarket POS",
    title: "Scan Barcode",
    description: "Scan any barcode or click an image of any product to turn it into a custom scannable barcode.",
    icon: Barcode,
    highlight: true,
    accentColor: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
    badge: "Smart Billing",
    title: "Scan Invoice",
    description: "Import products and stock instantly by snapping a photo of printed or digital paper invoices.",
    icon: FileText,
  },
  {
    id: 3,
    badge: "Custom Entry",
    title: "Add Manually",
    description: "Enter product details, pricing, units, and custom categories manually with instant auto-complete.",
    icon: PlusCircle,
  },
  {
    id: 4,
    badge: "AI Powered",
    title: "Add with AI",
    description: "Generate complete Kirana store product details, pricing, and tax categories automatically.",
    icon: Sparkles,
  },
  {
    id: 5,
    badge: "AI Powered",
    title: "Add with Image",
    description: "Capture a single photo of any product item and let AI auto-extract name, weight, and price.",
    icon: Camera,
  },
  {
    id: 6,
    badge: "Store Utility",
    title: "Print Barcodes",
    description: "Generate and print custom barcode stickers and price tags directly for your shop inventory.",
    icon: Printer,
  },
  {
    id: 7,
    badge: "Voice AI",
    title: "Voice in Orb",
    description: "Speak product names directly into the glowing AI orb in natural Hindi, English, or Hinglish.",
    icon: Mic,
  },
  {
    id: 8,
    badge: "AI Prompt",
    title: "Type in Orb",
    description: "Type natural quick text prompts into the AI orb to add products and modify quantity on the fly.",
    icon: MessageSquare,
  },
  {
    id: 9,
    badge: "Bulk Upload",
    title: "Upload Catalogue Photo",
    description: "Snap and upload photos of physical menus, price lists, or supplier catalogues for bulk creation.",
    icon: ImageIcon,
  },
  {
    id: 10,
    badge: "Curated List",
    title: "Add by Menu",
    description: "Select and add products directly from pre-built item catalogues and standard retail menus.",
    icon: ListFilter,
  },
];

export default function TenWaysToAddSection() {
  return (
    <section id="ten-ways" className="py-20 bg-[#FDFCF7] border-y border-amber-100/60 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <SectionLabel>Frictionless Inventory</SectionLabel>
          </div>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            10 Lightning-Fast Ways to Add Products & Create Bills
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-body">
            Vyop adapts to how you run your store. Whether you prefer scanning barcodes, snapping invoice photos, speaking naturally, or selecting from menus — adding items takes seconds.
          </p>
        </div>

        {/* 10 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tenWays.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`relative rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border ${
                  item.highlight
                    ? "bg-gradient-to-br from-amber-500 to-orange-600 text-white border-amber-400 shadow-lg shadow-amber-500/20"
                    : "bg-white border-gray-100 text-gray-900 shadow-sm hover:border-amber-200"
                }`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`p-3 rounded-2xl ${
                      item.highlight
                        ? "bg-white/20 text-white"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      item.highlight
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-3 ${
                    item.highlight ? "text-white" : "text-gray-900"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.id}. {item.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${
                    item.highlight ? "text-amber-50" : "text-gray-600"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Zero Commission Customer Link Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-16 bg-white border border-amber-200 rounded-3xl p-8 md:p-12 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full mb-4">
              Direct Customer Storefront
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 font-display">
              Build & Share Your Online Store with 0% Middleman Delivery Cut
            </h3>
            <p className="text-gray-600 text-base leading-relaxed font-body">
              Items added via barcode or voice sync live to your shareable store link. Customers order directly from your store with zero delivery commission fees, custom discount offers, and interactive Spin-The-Wheel rewards!
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://vyop.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-center transition-all shadow-md hover:shadow-lg"
            >
              Launch Store Free
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
