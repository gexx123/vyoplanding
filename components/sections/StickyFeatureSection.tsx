"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    label: "Frictionless Entry",
    title: "Multiple Ways to Add Items",
    body: "Vyop adapts to your workflow. Whether you prefer speaking naturally, sending a quick chat message, or simply scanning a physical invoice, adding items to your bill is instant and effortless.",
    bullets: [],
    chips: [
      { label: "Speak", image: "/feature-add-speak.png" },
      { label: "Chat", image: "/feature-add-chat.png" },
      { label: "Scan Invoice", image: "/feature-add-scan.png" },
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
        <div className="w-full lg:w-1/2 py-[10vh] lg:py-[15vh]">
          {features.map((feature, i) => {
            if (feature.chips) {
              const sectionHeight = 60; // 60vh per chip scroll area
              return (
                <div
                  key={i}
                  className="relative pr-0 lg:pr-12"
                  style={{ height: `${feature.chips.length * sectionHeight}vh` }}
                >
                  {/* Sticky Text Block */}
                  <div className="sticky top-[25vh] py-10">
                    <div className="mb-6">
                      <SectionLabel>{feature.label}</SectionLabel>
                    </div>

                    <h2
                      className="font-bold mb-6"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                        color: "var(--text-primary)",
                        lineHeight: 1.15,
                      }}
                    >
                      {feature.title}
                    </h2>

                    <p
                      className="mb-8"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-body)",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        maxWidth: "480px",
                      }}
                    >
                      {feature.body}
                    </p>

                    {/* Choice Chips UI */}
                    <div className="flex flex-wrap gap-3 mt-8">
                      {feature.chips.map((chip, chipIdx) => {
                        const isActive = activeIndex === i && activeChipIndex === chipIdx;
                        return (
                          <button
                            key={chipIdx}
                            onClick={() => {
                              setActiveIndex(i);
                              setActiveChipIndex(chipIdx);
                            }}
                            className="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border"
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

                  {/* Invisible Scroll Triggers */}
                  {feature.chips.map((_, chipIdx) => (
                    <motion.div
                      key={chipIdx}
                      className="absolute w-full pointer-events-none"
                      style={{
                        height: `${sectionHeight}vh`,
                        top: `${chipIdx * sectionHeight}vh`,
                      }}
                      onViewportEnter={() => {
                        setActiveIndex(i);
                        setActiveChipIndex(chipIdx);
                      }}
                      viewport={{ amount: 0.4, margin: "-20% 0px -20% 0px" }}
                    />
                  ))}
                </div>
              );
            }

            // Normal scrollable feature blocks
            return (
              <motion.div
                key={i}
                className="py-16 lg:py-24 pr-0 lg:pr-12"
                onViewportEnter={() => {
                  setActiveIndex(i);
                  setActiveChipIndex(0); // Reset chip selection when scrolling to a new feature
                }}
                viewport={{ amount: 0.4, margin: "-20% 0px -20% 0px" }}
              >
                <div className="mb-6">
                  <SectionLabel>{feature.label}</SectionLabel>
                </div>

                <h2
                  className="font-bold mb-6"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    color: "var(--text-primary)",
                    lineHeight: 1.15,
                  }}
                >
                  {feature.title}
                </h2>

                <p
                  className="mb-8"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    maxWidth: "480px",
                  }}
                >
                  {feature.body}
                </p>

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
                        className="text-sm font-medium"
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

        {/* Right Column: Sticky Phone Mockup */}
        <div className="w-full lg:w-1/2 sticky top-0 h-screen hidden lg:flex flex-col items-center justify-center pointer-events-none overflow-hidden">
          {/* We use a container that scales to viewport height to ensure it's never cut off */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[95vh] max-h-[1200px] aspect-[9/19.5] rounded-[2.5rem] md:rounded-[3rem] border-[10px] md:border-[14px] border-black bg-white overflow-hidden shrink-0 mt-[5vh]"
            style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <AnimatePresence>
              <motion.img
                key={displayImage}
                src={displayImage}
                alt="Feature Preview"
                className="absolute inset-0 w-full h-full object-cover object-top bg-gray-50"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onError={(e) => {
                  // Fallback for missing images to show a nice placeholder
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement?.classList.add("fallback-bg");
                }}
              />
            </AnimatePresence>

            {/* Fallback text when image is broken/missing */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-[-1] opacity-50">
               <span className="text-3xl mb-2">📱</span>
               <span className="font-bold mb-1">Upload Image</span>
               <span className="text-xs">Save as <br/><code>{displayImage.replace('/', '')}</code></span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
