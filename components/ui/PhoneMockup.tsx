"use client";

import { motion } from "framer-motion";
import React from "react";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function PhoneMockup({
  children,
  className = "",
  animate = true,
}: PhoneMockupProps) {
  const phoneContent = (
    <div className={`relative ${className}`}>
      {/* Floating gold glow behind phone */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, rgba(212,149,42,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Phone shell — premium white/silver */}
      <div
        className="relative mx-auto w-56 md:w-72 lg:w-80 overflow-hidden"
        style={{
          borderRadius: "44px",
          border: "1px solid rgba(0,0,0,0.08)",
          background: "linear-gradient(145deg, #FFFFFF 0%, #F5F3F0 100%)",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.12), 0 16px 32px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        {/* Notch */}
        <div className="flex justify-center pt-3 pb-1">
          <div
            className="w-24 h-5 rounded-full"
            style={{
              background: "linear-gradient(145deg, #E8E6E2, #D8D6D2)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          />
        </div>

        {/* Screen area */}
        <div
          className="mx-2 mb-2 overflow-hidden"
          style={{
            borderRadius: "36px",
            background: "#FAFAFA",
            minHeight: "380px",
          }}
        >
          {children}
        </div>

        {/* Home bar indicator */}
        <div className="flex justify-center pb-3">
          <div
            className="w-28 h-1 rounded-full"
            style={{ background: "rgba(0,0,0,0.12)" }}
          />
        </div>
      </div>

      {/* Subtle glass reflection overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: "44px",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%)",
        }}
      />
    </div>
  );

  if (!animate) return phoneContent;

  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {phoneContent}
    </motion.div>
  );
}
