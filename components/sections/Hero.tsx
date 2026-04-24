"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Fade out and scale down as user scrolls
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-x-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >

      {/* Content Wrapper */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-center"
      >
        {/* Left Column: Text */}
        <motion.div
          className="text-center lg:text-left flex flex-col items-center lg:items-start pt-20 pb-10 lg:py-0 w-full lg:w-[55%] z-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* H1 */}
          <motion.h1
            variants={fadeUpVariants}
            className="font-extrabold mb-6 tracking-tight flex flex-col gap-2 md:gap-3 w-full"
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            <span
              className="text-2xl md:text-3xl lg:text-4xl"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Vyop
            </span>
            <span
              className="gradient-text leading-[1.1] text-4xl md:text-6xl lg:text-7xl break-words"
            >
              World&apos;s First AI Accountant
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUpVariants}
            className="mb-10 text-base md:text-lg lg:text-xl px-2 lg:px-0"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-secondary)",
              maxWidth: "500px",
              lineHeight: 1.7,
            }}
          >
            The intelligent accounting app that understands your voice. Create bills, manage inventory, and track payments instantly — just by speaking.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <a
              href="https://vyop.shop/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[14px] text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--gradient-brand)",
                fontFamily: "var(--font-display)",
                fontSize: "16px",
                boxShadow: "var(--shadow-gold)",
              }}
            >
              Download for Free
            </a>

            <a
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[14px] font-medium transition-all duration-200 hover:border-[var(--border-medium)]"
              style={{
                background: "var(--bg-base)",
                border: "1px solid var(--border-medium)",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              Watch Demo →
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Column: Image Bleeding to Right Edge (HIDDEN ON MOBILE) */}
      <motion.div 
        style={{ opacity, scale }}
        className="hidden lg:block absolute inset-y-0 right-0 w-[50vw] h-full z-0"
      >
        <div className="relative w-full h-full">
          {/* Image */}
          <img 
            src="/hero-image.png" 
            alt="Vyop AI Accountant App Dashboard showing voice-powered billing and inventory" 
            className="relative z-20 w-full h-full object-cover object-right"
          />
        </div>
      </motion.div>
    </section>
  );
}

