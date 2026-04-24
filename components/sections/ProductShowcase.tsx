"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneMockup from "@/components/ui/PhoneMockup";
import SectionLabel from "@/components/ui/SectionLabel";

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

// Removed simulated screens

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<"bill" | "khata">("bill");

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-36 lg:py-48 relative"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Subtle radial glow behind phone */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: "var(--brand-primary)" }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column — text */}
          <motion.div variants={fadeUpVariants}>
            <SectionLabel className="mb-6">Vyapar Ka Dil</SectionLabel>

            <h2
              className="font-bold mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-section)",
                color: "var(--text-primary)",
                lineHeight: 1.15,
              }}
            >
              Billing Itni Aasaan,
              <br />
              Pehle Kabhi Nahi Thi
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
              Bill banao bolke, GST automatically calculate hoga, aur customer
              ko WhatsApp pe bhej do — sirf 3 seconds mein.
            </p>

            {/* Tab switcher */}
            <div className="flex gap-2 mb-8 bg-gray-100/50 p-1 rounded-2xl w-fit border border-gray-200/50">
              {[
                { key: "bill" as const, label: "Bill Banao" },
                { key: "khata" as const, label: "Khata Dekho" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 relative"
                  style={{
                    color: activeTab === tab.key ? "var(--text-primary)" : "var(--text-muted)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white rounded-xl shadow-sm"
                      style={{ border: "1px solid var(--border-subtle)" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>

            <a
              href="#features"
              className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-200 hover:opacity-80"
              style={{
                color: "var(--brand-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              Aur Features Dekho →
            </a>
          </motion.div>

          {/* Right column — phone */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
              },
            }}
            className="flex justify-center lg:justify-end"
          >
            <div 
              className="relative w-[300px] xl:w-[340px] aspect-[9/19.5] rounded-[2.5rem] border-[10px] border-black bg-white overflow-hidden"
              style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              {/* Dynamic notch (optional, for aesthetics) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-b-2xl z-50"></div>
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={activeTab === "bill" ? "/showcase-bill.png" : "/showcase-khata.png"}
                  alt={activeTab}
                  className="absolute inset-0 w-full h-full object-cover object-top bg-gray-50"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    (e.target as HTMLImageElement).parentElement?.classList.add("fallback-bg");
                  }}
                />
              </AnimatePresence>

              {/* Fallback text when image is broken/missing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-[-1] opacity-50">
                 <span className="text-3xl mb-2">📱</span>
                 <span className="font-bold mb-1">{activeTab === "bill" ? "Bill UI" : "Khata UI"}</span>
                 <span className="text-xs">Save as <br/><code>{activeTab === "bill" ? "showcase-bill.png" : "showcase-khata.png"}</code></span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
