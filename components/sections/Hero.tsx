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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >

      {/* Content Wrapper */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center"
      >
        {/* Left Column: Text */}
        <motion.div
          className="text-left flex flex-col items-start pt-32 pb-12 lg:py-0 w-full lg:w-[55%] z-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* H1 */}
          <motion.h1
            variants={fadeUpVariants}
            className="font-extrabold mb-6 tracking-tight flex flex-col gap-2 md:gap-3"
            style={{
              fontFamily: "var(--font-display)",
              maxWidth: "600px",
            }}
          >
            <span
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                color: "var(--text-primary)",
              }}
            >
              Vyop
            </span>
            <span
              className="gradient-text leading-[1.1]"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              }}
            >
              World's First AI Accountant
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUpVariants}
            className="mb-10"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(16px, 1.8vw, 20px)",
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
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#download"
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

      {/* Right Column: Image Bleeding to Right Edge */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative lg:absolute lg:inset-y-0 lg:right-0 w-full lg:w-[50vw] h-[50vh] lg:h-full z-0 mt-8 lg:mt-0"
      >
        <div className="relative w-full h-full">
          {/* Image */}
          <img 
            src="/hero-image.png" 
            alt="Vyop Hero" 
            className="relative z-20 w-full h-full object-cover object-right"
          />
        </div>
      </motion.div>

      {/* Scroll-down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "var(--text-muted)", opacity: 0.5 }}
        >
          <path d="M7 13l5 5 5-5" />
          <path d="M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}

