"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    label: "Frictionless Entry",
    title: "10 Ways to Add Items",
    body: "Vyop adapts seamlessly to your store workflow. Choose from 10 fast ways to add inventory — speak, scan, type, or upload.",
    bullets: [],
    chips: [
      {
        label: "Scan Barcode",
        description: "Scan any barcode or click an image of any product to turn it into a custom scannable barcode.",
        image: "/feature-scan-barcode.png",
      },
      {
        label: "Scan Invoice",
        description: "Import products automatically from physical paper or digital PDF invoices.",
        image: "/feature-add-scan.png",
      },
      {
        label: "Add Manually",
        description: "Enter product details, pricing, units, and custom categories manually.",
        image: "/feature-add-chat.png",
      },
      {
        label: "Add with AI",
        description: "Generate Kirana product details and categories automatically using AI.",
        image: "/feature-add-with-ai.png",
      },
      {
        label: "Add with Image",
        description: "Capture an image of the product and let AI handle detail extraction.",
        image: "/feature-add-with-image.png",
      },
      {
        label: "Print Barcodes",
        description: "Generate and print custom barcode stickers directly for your store products.",
        image: "/feature-print-barcode.png",
      },
      {
        label: "Voice in Orb",
        description: "Speak product details directly into the glowing AI orb in natural Hindi or English.",
        image: "/feature-add-speak.png",
      },
      {
        label: "Type in Orb",
        description: "Type natural text prompts into the AI orb to add products and quantities on the fly.",
        image: "/feature-add-chat.png",
      },
      {
        label: "Upload Catalogue",
        description: "Upload photos of physical price lists or menu catalogues for bulk creation.",
        image: "/feature-add-catalogue.png",
      },
      {
        label: "Add by Menu",
        description: "Select and add products directly from pre-built item catalogues.",
        image: "/feature-add-menu.png",
      },
    ],
  },
  {
    label: "Digital Storefront",
    title: "Build & Manage Your Online Store in Minutes",
    body: "Turn your retail shop into an online store in minutes. Answer customer orders directly with 0% delivery commission.",
    isIllustration: true,
    bullets: [
      "Can I make an app or website for my store? Yes! Setup takes under 60s.",
      "0% middleman delivery charges — keep 100% of your earnings.",
      "Custom discount banners & Spin-The-Wheel rewards for repeat sales.",
    ],
    chips: [
      {
        label: "1-Min Store",
        question: "Can I make an app or website for my shop?",
        description: "Yes! Vyop lets any retail store owner create and launch a professional online storefront & digital catalog in under 60 seconds with no coding or technical skills required.",
        image: "/storefront-1min.png",
      },
      {
        label: "Zero Commission",
        question: "How to sell online without paying 20-30% delivery commission?",
        description: "Share your direct store link via WhatsApp. Customers browse your real-time inventory and place direct orders straight to your phone with 0% delivery commission cut.",
        image: "/storefront-commission.png",
      },
      {
        label: "Offers & Discounts",
        question: "How to create promotional offers & banners for my store?",
        description: "Publish custom discount banners, buy-1-get-1 offers, and festival sale coupons instantly on your store website to boost repeat customer orders.",
        image: "/storefront-offers.png",
      },
      {
        label: "Spin Wheel",
        question: "How to attract more local customers & boost sales?",
        description: "Engage local customers with interactive Spin-The-Wheel rewards games where shoppers win discount vouchers on every purchase.",
        image: "/storefront-spin.png",
      },
    ],
  },
  {
    label: "Core Feature",
    title: "Just Speak — Your Bill is Ready",
    body: "Speak naturally, Vyop understands. Just say 'Three Maggi and two Parle-G' and your bill is generated. No typing, no confusion.",
    bullets: [
      "Multi-lingual support",
      "Fuzzy matching — understands mispronunciations",
      "Background noise filtering",
    ],
    chips: [
      { label: "Make Bill", image: "/feature-speak-make.png" },
      { label: "Payment", image: "/feature-speak-pay.png" },
      { label: "See Bill and Share", image: "/feature-speak-share.png" },
    ],
  },
  {
    label: "Smart Expenses",
    title: "Voice-Powered Expense Tracking",
    body: "Don't let small daily expenses slip through the cracks. Just say '30 rs ki chai' or '5000 rs transport', and Vyop instantly categorizes and logs the expense for your records.",
    bullets: [
      "Instant voice logging",
      "Automatic categorization",
      "Track daily and monthly spend",
    ],
    image: "/feature-expense.png",
  },
  {
    label: "Udhar Management",
    title: "Digital Ledger — Never Lose Track",
    body: "Old physical registers get lost. Vyop's digital ledger is completely secure. Track every customer's balance with a single tap.",
    bullets: [
      "Auto-reminder via WhatsApp/SMS",
      "Customer-wise history",
      "Settlement tracking",
    ],
    image: "/feature-2.png",
  },
  {
    label: "Inventory",
    title: "Low Stock Alerts — Never Run Out",
    body: "When an item is billed, inventory is automatically deducted. The app notifies you instantly when stock is running low.",
    bullets: [
      "Auto stock deduction on billing",
      "Low stock alerts",
      "Reorder suggestions",
    ],
    image: "/feature-4.png",
  },
];

// Animation variants removed for static text

export default function StickyFeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeChipIndex, setActiveChipIndex] = useState(0);

  // The currently displayed image
  const displayImage = features[activeIndex].chips 
    ? features[activeIndex].chips![activeChipIndex].image 
    : features[activeIndex].image!;

  return (
    <section className="relative bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6 relative flex flex-col lg:flex-row items-start">
        
        {/* Left Column: Scrolling Text */}
        <div className="w-full lg:w-1/2 py-12 md:py-20 lg:py-[15vh]">
          {features.map((feature, i) => {
            if (feature.chips) {
              const sectionHeight = 60; // 60vh per chip scroll area
              return (
                <div
                  key={i}
                  className="relative pr-0 lg:pr-12"
                  style={{ height: `${feature.chips.length * 80}vh` }} // 80vh of scroll per chip for balanced switching
                >
                  {/* Sticky Pinned Content (Stays fixed while scrolling) */}
                  <div className="sticky top-0 h-screen flex flex-col justify-center py-10 overflow-hidden">
                    {/* Collapsing Text on Mobile */}
                    <motion.div
                      initial={false}
                      animate={
                        activeChipIndex > 0 
                          ? { height: 0, opacity: 0, scale: 0.95, display: "none" }
                          : { height: "auto", opacity: 1, scale: 1, display: "block" }
                      }
                      transition={{ duration: 0.3 }}
                      className="shrink-0 overflow-hidden lg:!h-auto lg:!opacity-100 lg:!scale-100 lg:!block lg:!mb-6"
                    >
                      <div className="mb-4">
                        <SectionLabel>{feature.label}</SectionLabel>
                      </div>

                      <h2
                        className="font-bold mb-4 text-3xl md:text-4xl lg:text-5xl"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--text-primary)",
                          lineHeight: 1.15,
                        }}
                      >
                        {feature.title}
                      </h2>

                      <div className="min-h-[5rem] mb-6">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeIndex === i ? activeChipIndex : 'default'}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-2"
                          >
                            {feature.chips && activeIndex === i && (feature.chips[activeChipIndex] as any)?.question && (
                              <h4 className="text-base md:text-lg font-extrabold text-amber-700 font-display mb-1">
                                {(feature.chips[activeChipIndex] as any).question}
                              </h4>
                            )}
                            <p
                              className="text-sm md:text-lg"
                              style={{
                                fontFamily: "var(--font-body)",
                                color: "var(--text-secondary)",
                                lineHeight: 1.6,
                                maxWidth: "620px",
                              }}
                            >
                              {feature.chips && activeIndex === i && (feature.chips[activeChipIndex] as any)?.description
                                ? (feature.chips[activeChipIndex] as any).description
                                : feature.body}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </motion.div>

                    {/* Phone Mockup (Sticky on all screens) */}
                    <motion.div 
                      initial={false}
                      animate={{
                        maxWidth: activeChipIndex > 0 ? "340px" : "240px"
                      }}
                      transition={{ duration: 0.3 }}
                      className="lg:hidden mb-6 w-full relative aspect-[9/19.5] mx-auto rounded-[2rem] border-[8px] border-black overflow-hidden shadow-xl bg-gray-50"
                    >
                       <AnimatePresence mode="wait">
                        <motion.div
                          key={activeIndex === i ? activeChipIndex : 'idle'}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={activeIndex === i ? feature.chips[activeChipIndex].image : feature.chips[0].image}
                            alt="Feature screen"
                            fill
                            sizes="(max-width: 1024px) 340px, 0vw"
                            quality={80}
                            className="object-cover object-top"
                          />
                        </motion.div>
                       </AnimatePresence>
                    </motion.div>

                    {/* Choice Chips UI */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {feature.chips.map((chip, chipIdx) => {
                        const isActive = activeIndex === i && activeChipIndex === chipIdx;
                        return (
                          <button
                            key={chipIdx}
                            onClick={() => {
                              setActiveIndex(i);
                              setActiveChipIndex(chipIdx);
                            }}
                            className="px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border"
                            style={{
                              fontFamily: "var(--font-display)",
                              backgroundColor: isActive ? "var(--brand-primary)" : "#FFFFFF",
                              borderColor: isActive ? "var(--brand-primary)" : "var(--border-medium)",
                              color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                              boxShadow: isActive ? "var(--shadow-gold)" : "none",
                            }}
                          >
                            {chip.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="absolute inset-0 pointer-events-none flex flex-col justify-center py-[10vh]">
                    {feature.chips.map((_, chipIdx) => (
                      <motion.div
                        key={chipIdx}
                        className="relative w-full snap-center"
                        style={{
                          height: `80vh`,
                        }}
                        onViewportEnter={() => {
                          setActiveIndex(i);
                          setActiveChipIndex(chipIdx);
                        }}
                        viewport={{ amount: 0.3, margin: "-20% 0px -20% 0px" }}
                      />
                    ))}
                  </div>
                </div>
              );
            }

            // Normal scrollable feature blocks
            return (
              <motion.div
                key={i}
                className="py-12 md:py-20 lg:py-24 pr-0 lg:pr-12"
                onViewportEnter={() => {
                  setActiveIndex(i);
                  setActiveChipIndex(0);
                }}
                viewport={{ amount: 0.4, margin: "-20% 0px -20% 0px" }}
              >
                <div className="mb-6">
                  <SectionLabel>{feature.label}</SectionLabel>
                </div>

                <h2
                  className="font-bold mb-6 text-3xl md:text-4xl lg:text-5xl"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text-primary)",
                    lineHeight: 1.15,
                  }}
                >
                  {feature.title}
                </h2>

                <p
                  className="mb-8 text-base md:text-lg"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    maxWidth: "480px",
                  }}
                >
                  {feature.body}
                </p>

                {/* Inline Image for Mobile/Tablet */}
                <div className="lg:hidden mb-10 w-full max-w-[280px] relative aspect-[9/19.5] mx-auto rounded-[2rem] border-[8px] border-black overflow-hidden shadow-xl bg-gray-50">
                    <Image
                      src={feature.image || ""}
                      className="object-cover"
                      alt={feature.title}
                      fill
                      sizes="(max-width: 1024px) 280px, 0vw"
                      quality={80}
                    />
                </div>

                <div className="space-y-3">
                  {feature.bullets?.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 text-sm flex-shrink-0"
                        style={{ color: "var(--brand-primary)", fontWeight: "bold" }}
                      >
                        ✓
                      </span>
                      <span
                        className="text-sm md:text-base font-medium"
                        style={{
                          color: "var(--text-primary)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Sticky Mockup / Illustration (Desktop Only) */}
        <div className="hidden lg:flex w-full lg:w-1/2 sticky top-0 h-screen flex-col items-center justify-center pointer-events-none overflow-hidden">
          {features[activeIndex]?.isIllustration ? (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[580px] aspect-square rounded-[2.5rem] border border-amber-200/80 bg-white overflow-hidden shrink-0 shadow-2xl p-2"
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={displayImage}
                    className="absolute inset-0 p-4"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image
                      src={displayImage}
                      alt="Storefront Illustration"
                      fill
                      sizes="(min-width: 1024px) 50vw, 0vw"
                      quality={95}
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[90vh] max-h-[1100px] aspect-[9/19.5] rounded-[2.5rem] md:rounded-[3rem] border-[10px] md:border-[14px] border-black bg-white overflow-hidden shrink-0 mt-[5vh]"
              style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayImage}
                  className="absolute inset-0 bg-gray-50"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={displayImage}
                    alt="Feature Preview"
                    fill
                    sizes="(min-width: 1024px) 50vw, 0vw"
                    quality={85}
                    priority
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
