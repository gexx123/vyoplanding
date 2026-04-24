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
        <div className="w-full lg:w-1/2 py-12 md:py-20 lg:py-[15vh]">
          {features.map((feature, i) => {
            if (feature.chips) {
              const sectionHeight = 60; // 60vh per chip scroll area
              return (
                <div
                  key={i}
                  className="relative pr-0 lg:pr-12"
                  style={{ height: `${feature.chips.length * 100}vh` }} // 100vh of scroll per chip
                >
                  {/* Sticky Pinned Content (Stays fixed while scrolling) */}
                  <div className="sticky top-0 h-screen flex flex-col justify-center py-10 overflow-hidden">
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

                    <p
                      className="mb-6 text-sm md:text-lg"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                        maxWidth: "480px",
                      }}
                    >
                      {feature.body}
                    </p>

                    {/* Phone Mockup (Sticky on all screens) */}
                    <div className="lg:hidden mb-6 relative aspect-[9/18] max-h-[45vh] mx-auto rounded-[1.5rem] border-[6px] border-black overflow-hidden shadow-xl bg-white">
                       <AnimatePresence mode="wait">
                        <motion.img
                          key={activeIndex === i ? activeChipIndex : 'idle'}
                          src={activeIndex === i ? feature.chips[activeChipIndex].image : feature.chips[0].image}
                          className="w-full h-full object-cover object-top"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                        />
                       </AnimatePresence>
                    </div>

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

                  {/* Scroll Triggers (One per screen height) */}
                  <div className="absolute inset-0 pointer-events-none">
                    {feature.chips.map((_, chipIdx) => (
                      <motion.div
                        key={chipIdx}
                        className="w-full"
                        style={{
                          height: `100vh`,
                        }}
                        onViewportEnter={() => {
                          setActiveIndex(i);
                          setActiveChipIndex(chipIdx);
                        }}
                        viewport={{ amount: 0.5 }}
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
                <div className="lg:hidden mb-10 relative aspect-[9/16] max-w-[300px] mx-auto rounded-[2rem] border-[8px] border-black overflow-hidden shadow-xl">
                    <img
                      src={feature.image}
                      className="w-full h-full object-cover"
                      alt={feature.title}
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

        {/* Right Column: Sticky Phone Mockup (Desktop Only) */}
        <div className="hidden lg:flex w-full lg:w-1/2 sticky top-0 h-screen flex-col items-center justify-center pointer-events-none overflow-hidden">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[90vh] max-h-[1100px] aspect-[9/19.5] rounded-[2.5rem] md:rounded-[3rem] border-[10px] md:border-[14px] border-black bg-white overflow-hidden shrink-0 mt-[5vh]"
            style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={displayImage}
                src={displayImage}
                alt="Feature Preview"
                className="absolute inset-0 w-full h-full object-cover object-top bg-gray-50"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
