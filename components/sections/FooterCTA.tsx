"use client";

import { motion } from "framer-motion";

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
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

function DecorativeQR() {
  const colors = [
    "var(--brand-primary)",
    "var(--bg-navy)",
    "var(--brand-primary)",
    "var(--bg-navy)",
    "var(--bg-navy)",
    "var(--brand-primary)",
    "var(--bg-navy)",
    "var(--brand-primary)",
    "var(--brand-primary)",
    "var(--bg-navy)",
    "var(--brand-primary)",
    "var(--bg-navy)",
    "var(--bg-navy)",
    "var(--brand-primary)",
    "var(--bg-navy)",
    "var(--brand-primary)",
  ];

  return (
    <div className="grid grid-cols-4 gap-1 w-20 h-20 mx-auto mt-4 p-2 bg-white rounded-xl shadow-sm">
      {colors.map((color, i) => (
        <div
          key={i}
          className="rounded-sm"
          style={{ background: color, opacity: color === "var(--brand-primary)" ? 1 : 0.1 }}
        />
      ))}
    </div>
  );
}

export default function FooterCTA() {
  return (
    <section
      id="download"
      className="py-24 md:py-36 relative overflow-hidden navy-section"
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.15] blur-3xl pointer-events-none"
        style={{ background: "var(--brand-primary)" }}
      />

      <motion.div
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Large logo */}
        <motion.div
          variants={fadeUpVariants}
          className="flex justify-center mb-8"
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white shadow-lg"
          >
            <span style={{ fontSize: "32px", color: "var(--brand-primary)", fontWeight: "bold", fontFamily: "sans-serif" }}>व्</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUpVariants}
          className="font-extrabold mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            color: "#FFFFFF",
            lineHeight: 1.1,
          }}
        >
          Get Started Today
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={fadeUpVariants}
          className="mb-10"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Fast. Simple. Reliable.
        </motion.p>

        {/* App store buttons */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          {/* App Store */}
          <div className="flex items-center gap-3 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all duration-200 cursor-pointer backdrop-blur-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div
                className="text-[10px]"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Download on the
              </div>
              <div
                className="text-sm font-semibold"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-display)",
                }}
              >
                App Store
              </div>
            </div>
          </div>

          {/* Play Store */}
          <div className="flex items-center gap-3 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all duration-200 cursor-pointer backdrop-blur-md">
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
            >
              <path
                d="M1 1l10 11L1 23V1z"
                fill="#4285F4"
                stroke="#4285F4"
                strokeWidth="0.5"
              />
              <path d="M1 1l14 8-4 4L1 1z" fill="#34A853" />
              <path d="M1 23l10-12 4 4-14 8z" fill="#EA4335" />
              <path d="M15 9l5 3-5 3-4-3 4-3z" fill="#FBBC05" />
            </svg>
            <div className="text-left">
              <div
                className="text-[10px]"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "var(--font-body)",
                }}
              >
                GET IT ON
              </div>
              <div
                className="text-sm font-semibold"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-display)",
                }}
              >
                Google Play
              </div>
            </div>
          </div>
        </motion.div>

        {/* QR Code */}
        <motion.div variants={fadeUpVariants}>
          <DecorativeQR />
          <p
            className="text-xs mt-4"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontFamily: "var(--font-body)",
            }}
          >
            Scan QR code to download
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
