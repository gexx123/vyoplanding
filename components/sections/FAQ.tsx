"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const faqCategories = [
  {
    title: "Store Types & Compatibility",
    icon: "🛒",
    badge: "For All Businesses",
    faqs: [
      {
        q: "Which is the best billing & inventory app for Kirana, clothing, & restaurants?",
        a: "Vyop is the top-rated AI billing and inventory software built for all Indian retail businesses — including Kirana stores, clothing boutiques, restaurants, cafes, hardware, electronic shops, and pharmacies.",
      },
      {
        q: "Can I use Vyop for a Restaurant, Cafe, or Hotel billing?",
        a: "Yes! Vyop supports restaurant and hotel billing with Kitchen Order Tickets (KOT), table management, instant voice ordering ('2 Butter Naan, 1 Paneer Butter Masala'), and QR digital menu ordering.",
      },
      {
        q: "How does Vyop help Clothing, Apparel & Footwear stores?",
        a: "For clothing and footwear boutiques, Vyop manages size/color matrix inventory, scans garment barcodes, prints custom barcode price tags, and sends WhatsApp bill receipts directly to shoppers.",
      },
      {
        q: "Can Hardware, Electrical & Pharmacy shops use Vyop?",
        a: "Yes! Hardware shops use voice search ('1/2 inch PVC pipe') for thousands of loose items. Pharmacies can scan medicine barcodes, track batch numbers, monitor expiry dates, and issue compliant GST bills.",
      },
    ],
  },
  {
    title: "Voice AI Billing & Barcode POS",
    icon: "⚡",
    badge: "Smart Billing",
    faqs: [
      {
        q: "Can I turn my smartphone into a supermarket-grade barcode scanner?",
        a: "Yes! Vyop turns any smartphone camera into a supermarket-grade barcode scanner. It scans manufacturer barcodes (EAN/UPC), creates custom barcodes from product photos, and prints barcode stickers.",
      },
      {
        q: "What are the 10 ways to add items to inventory in Vyop?",
        a: "Vyop offers 10 instant item creation methods: 1. Scan Barcode, 2. Scan Invoice photo/PDF, 3. Add Manually, 4. Add with AI, 5. Add with Image, 6. Print Barcodes, 7. Voice in AI Orb, 8. Type in AI Orb, 9. Upload Catalogue Photo, and 10. Add by Menu.",
      },
      {
        q: "How to create GST & non-GST bills by voice command in Hindi or English?",
        a: "Simply speak into Vyop's AI Orb in Hindi, English, or Hinglish (e.g., 'Teen Maggi aur do Chai' or '2 Men Shirts XL'). Vyop's voice AI generates accurate GST and non-GST bills in under 5 seconds.",
      },
      {
        q: "How to import stock automatically from paper bills and supplier invoices?",
        a: "Snap a photo of any printed or digital supplier invoice using Vyop's AI Invoice Scanner. The app automatically extracts product names, quantities, MRP, and purchase rates into your inventory.",
      },
    ],
  },
  {
    title: "0% Commission Storefront & Offers",
    icon: "🌐",
    badge: "Online Growth",
    faqs: [
      {
        q: "How can any shop owner make a free online store website in 60 seconds?",
        a: "Vyop allows Kirana, fashion, bakery, and electronic store owners to launch a live digital storefront catalog in under 60 seconds with a shareable WhatsApp link and 0% delivery middleman commission.",
      },
      {
        q: "How to sell online directly to local customers with zero delivery commission?",
        a: "Share your Vyop live store link via WhatsApp or Instagram. Local customers view real-time inventory and place direct orders straight to your phone with 0% commission cut taken by third parties.",
      },
      {
        q: "How to attract more local customers with Spin-The-Wheel rewards & discount banners?",
        a: "Vyop provides built-in retail marketing tools including customizable discount banners, festival coupon codes, and interactive Spin-The-Wheel customer rewards games to drive repeat store visits.",
      },
      {
        q: "Can I manage online customer orders directly on WhatsApp?",
        a: "Yes! Online customer orders placed on your Vyop storefront trigger instant phone notifications and formatted WhatsApp order receipts.",
      },
    ],
  },
  {
    title: "Ledger, Offline Mode & Comparisons",
    icon: "🔒",
    badge: "Security & Speed",
    faqs: [
      {
        q: "How to manage Udhar Khata debt & send automatic WhatsApp payment reminders?",
        a: "Vyop includes a secure Digital Ledger (Khata). Record customer balances with one tap and send automated WhatsApp/SMS payment reminders with direct UPI payment links.",
      },
      {
        q: "Does Vyop work offline without internet connection?",
        a: "Yes! Vyop works 100% offline. All bills and ledgers are saved securely on your device and automatically sync to the cloud when internet reconnects.",
      },
      {
        q: "Is Vyop better and faster than Tally, Khatabook, or Vyapar?",
        a: "Yes! Unlike traditional software (Tally, Vyapar) that requires computers and manual typing, Vyop operates via voice AI and smartphone barcode scanning, creating bills 10x faster with zero learning curve.",
      },
      {
        q: "Is Vyop free to use for small shopkeepers?",
        a: "Yes! Vyop is completely free to download and use for basic billing, inventory, and online storefront creation on Android smartphones.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 py-16 md:py-24 bg-gray-50/60"
    >
      <motion.div
        className="relative w-full max-w-[1600px] mx-auto px-6 lg:px-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.div variants={fadeUpVariants} className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold tracking-wider uppercase mb-3">
            Help Center & AEO Knowledge Hub
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="font-extrabold text-3xl md:text-5xl lg:text-6xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-gray-600 text-base md:text-xl max-w-2xl mx-auto">
            Everything you need to know about AI billing, supermarket barcode scanning, 0% commission storefronts, and store types supported by Vyop.
          </motion.p>
        </div>

        {/* 2-Column Grid Layout */}
        <motion.div variants={fadeUpVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {faqCategories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-xl font-bold font-display text-gray-900">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60">
                    {cat.badge}
                  </span>
                </div>

                <Accordion>
                  {cat.faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`cat-${catIdx}-item-${i}`}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <AccordionTrigger
                        className="py-4 text-left hover:no-underline font-semibold text-base text-gray-900 transition-colors hover:text-amber-700"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent
                        className="pb-4 text-sm md:text-base text-gray-600 leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
