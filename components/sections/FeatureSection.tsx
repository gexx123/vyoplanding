"use client";

import React from "react";
import { motion } from "framer-motion";
import PhoneMockup from "@/components/ui/PhoneMockup";
import SectionLabel from "@/components/ui/SectionLabel";

interface FeatureBullet {
  text: string;
}

interface FeatureSectionProps {
  label: string;
  title: string;
  body: string;
  bullets: FeatureBullet[];
  phoneContent: React.ReactNode;
  layout: "left" | "right";
  bgAlternate?: boolean;
}

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function FeatureSection({
  label,
  title,
  body,
  bullets,
  phoneContent,
  layout,
  bgAlternate = false,
}: FeatureSectionProps) {
  const textVariants = {
    hidden: { opacity: 0, x: layout === "left" ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const phoneVariants = {
    hidden: { opacity: 0, x: layout === "left" ? 40 : -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const textBlock = (
    <motion.div variants={textVariants}>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <motion.div variants={fadeUpVariants}>
          <SectionLabel className="mb-6">{label}</SectionLabel>
        </motion.div>

        <motion.h2
          variants={fadeUpVariants}
          className="font-bold mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: "var(--text-primary)",
            lineHeight: 1.15,
          }}
        >
          {title}
        </motion.h2>

        <motion.p
          variants={fadeUpVariants}
          className="mb-8"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: "480px",
          }}
        >
          {body}
        </motion.p>

        <motion.div variants={fadeUpVariants} className="space-y-3">
          {bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-3">
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
                {bullet.text}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );

  const phoneBlock = (
    <motion.div variants={phoneVariants}>
      <PhoneMockup>{phoneContent}</PhoneMockup>
    </motion.div>
  );

  return (
    <section
      id="features"
      className="py-24 md:py-36 lg:py-48 relative"
      style={{ background: bgAlternate ? "var(--bg-surface)" : "var(--bg-base)" }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {layout === "left" ? (
            <>
              {textBlock}
              {phoneBlock}
            </>
          ) : (
            <>
              <div className="order-2 lg:order-1">{phoneBlock}</div>
              <div className="order-1 lg:order-2">{textBlock}</div>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}

/* ===== Phone Screen Contents ===== */

export function VoiceBillingScreen() {
  return (
    <div className="p-4 space-y-3">
      {/* Waveform */}
      <div className="flex items-center justify-center gap-1 py-4">
        {[12, 20, 28, 16, 24, 32, 18, 14, 26, 22, 30, 16, 20, 28].map(
          (h, i) => (
            <div
              key={i}
              className="w-1 rounded-full"
              style={{
                background: "var(--brand-primary)",
                height: `${h}px`,
                animation: `wave-bar ${0.6 + (i % 3) * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          )
        )}
      </div>

      {/* Detected items card */}
      <div
        className="p-3 rounded-xl"
        style={{
          background: "rgba(34,197,94,0.05)",
          border: "1px solid rgba(34,197,94,0.2)",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold" style={{ color: "#16a34a" }}>
            ✓
          </span>
          <span
            className="text-xs font-bold"
            style={{ color: "#16a34a", fontFamily: "var(--font-display)" }}
          >
            3 items detected
          </span>
        </div>
        <div className="space-y-1.5">
          {["Maggi × 3", "Parle-G × 5", "Surf Excel × 1"].map((item) => (
            <div
              key={item}
              className="text-xs px-2 py-1.5 rounded-md font-medium"
              style={{
                color: "var(--text-primary)",
                background: "#FFFFFF",
                border: "1px solid var(--border-subtle)",
                fontFamily: "var(--font-body)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function KhataScreen() {
  const entries = [
    { name: "Ramesh", initial: "R", amount: "₹450", color: "#ef4444" },
    { name: "Suresh", initial: "S", amount: "₹0", color: "#16a34a" },
    { name: "Priya", initial: "P", amount: "₹200", color: "#ef4444" },
    { name: "Mohan", initial: "M", amount: "₹125", color: "#ef4444" },
  ];

  return (
    <div className="p-4 space-y-2">
      <div
        className="text-center text-xs font-semibold py-2 mb-2 rounded-lg"
        style={{
          color: "var(--text-primary)",
          background: "#FFFFFF",
          fontFamily: "var(--font-display)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        📒 Digital Ledger
      </div>
      {entries.map((e) => (
        <div
          key={e.name}
          className="flex items-center justify-between px-3 py-2.5 rounded-lg"
          style={{
            background: "#FFFFFF",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
              style={{
                background: `${e.color}15`,
                color: e.color,
                fontFamily: "var(--font-display)",
              }}
            >
              {e.initial}
            </div>
            <span
              className="text-xs font-medium"
              style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}
            >
              {e.name}
            </span>
          </div>
          <span
            className="text-xs font-bold"
            style={{ color: e.color, fontFamily: "var(--font-body)" }}
          >
            {e.amount}
          </span>
        </div>
      ))}
    </div>
  );
}

export function GSTScreen() {
  return (
    <div className="p-4 space-y-3">
      <div
        className="text-center text-xs font-semibold py-2 rounded-lg"
        style={{
          color: "var(--text-primary)",
          background: "#FFFFFF",
          fontFamily: "var(--font-display)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        🧾 GST Invoice
      </div>

      <div
        className="p-3 rounded-xl space-y-2"
        style={{
          background: "#FFFFFF",
          border: "1px solid var(--border-subtle)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <div className="flex justify-between text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
          <span>GSTIN</span>
          <span style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
            07AXXXX1234Z5
          </span>
        </div>
        <div className="h-px" style={{ background: "var(--border-subtle)" }} />

        <div className="space-y-1">
          {[
            { item: "Subtotal", val: "₹850" },
            { item: "CGST (9%)", val: "₹76.50" },
            { item: "SGST (9%)", val: "₹76.50" },
          ].map((row) => (
            <div
              key={row.item}
              className="flex justify-between text-xs font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span style={{ color: "var(--text-secondary)" }}>{row.item}</span>
              <span style={{ color: "var(--text-primary)" }}>{row.val}</span>
            </div>
          ))}
        </div>

        <div className="h-px" style={{ background: "var(--border-subtle)" }} />
        <div className="flex justify-between text-sm font-bold">
          <span style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
            Total
          </span>
          <span style={{ color: "var(--brand-primary)", fontFamily: "var(--font-display)" }}>
            ₹1,003
          </span>
        </div>
      </div>

      <button
        className="w-full py-2.5 rounded-lg text-xs font-bold"
        style={{
          background: "var(--bg-navy)",
          color: "white",
          fontFamily: "var(--font-body)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        📄 Download PDF
      </button>
    </div>
  );
}

export function InventoryScreen() {
  const items = [
    { name: "Maggi", stock: 85, max: 100, low: false },
    { name: "Parle-G", stock: 12, max: 100, low: true },
    { name: "Surf Excel", stock: 45, max: 100, low: false },
    { name: "Tata Salt", stock: 8, max: 100, low: true },
  ];

  return (
    <div className="p-4 space-y-2">
      <div
        className="text-center text-xs font-semibold py-2 rounded-lg mb-2"
        style={{
          color: "var(--text-primary)",
          background: "#FFFFFF",
          fontFamily: "var(--font-display)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        📦 Inventory Tracker
      </div>
      {items.map((item) => (
        <div
          key={item.name}
          className="px-3 py-2.5 rounded-lg"
          style={{
            background: item.low
              ? "rgba(239,68,68,0.04)"
              : "#FFFFFF",
            border: `1px solid ${item.low ? "rgba(239,68,68,0.2)" : "var(--border-subtle)"}`,
            boxShadow: item.low ? "none" : "var(--shadow-sm)",
          }}
        >
          <div className="flex justify-between items-center mb-1.5">
            <span
              className="text-xs font-medium"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              {item.name}
            </span>
            {item.low && (
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(239,68,68,0.1)",
                  color: "#ef4444",
                  fontFamily: "var(--font-body)",
                }}
              >
                Low Stock
              </span>
            )}
          </div>
          {/* Stock bar */}
          <div
            className="w-full h-1.5 rounded-full overflow-hidden"
            style={{ background: "rgba(0,0,0,0.05)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(item.stock / item.max) * 100}%`,
                background: item.low ? "#ef4444" : "var(--brand-primary)",
              }}
            />
          </div>
          <div
            className="text-[10px] mt-1 text-right font-medium"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
          >
            {item.stock} units
          </div>
        </div>
      ))}
    </div>
  );
}
