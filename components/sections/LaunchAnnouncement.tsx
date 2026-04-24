"use client";

import { motion } from "framer-motion";

export default function LaunchAnnouncement() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "rgba(212,149,42,0.04)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <motion.div
        className="max-w-5xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span 
          className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-6"
          style={{ 
            background: "rgba(212,149,42,0.1)", 
            color: "var(--brand-primary)",
            fontFamily: "var(--font-display)"
          }}
        >
          MARK YOUR CALENDAR
        </motion.span>
        
        <h2 
          className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight"
          style={{ 
            fontFamily: "var(--font-display)",
            color: "var(--text-primary)",
            lineHeight: 1.1
          }}
        >
          Launching on <span className="gradient-text">May 4, 2026</span>
        </h2>
        
        <p 
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          style={{ 
            fontFamily: "var(--font-body)",
            color: "var(--text-secondary)",
            lineHeight: 1.6
          }}
        >
          Be part of the revolution. Join our exclusive launch party and be the first to experience the world&apos;s first AI accountant.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05, translateY: -4 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-10 py-5 rounded-[20px] text-white font-bold text-lg transition-all duration-300"
          style={{
            background: "var(--gradient-brand)",
            fontFamily: "var(--font-display)",
            boxShadow: "var(--shadow-gold)",
          }}
        >
          Join Launch Party
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--brand-primary)] opacity-[0.03] blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--brand-primary)] opacity-[0.03] blur-[100px] translate-x-1/3 translate-y-1/3 rounded-full" />
    </section>
  );
}
