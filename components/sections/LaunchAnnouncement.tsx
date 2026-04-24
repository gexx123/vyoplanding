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
          Launched on <span className="gradient-text">May 4, 2026</span>
        </h2>
        
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--brand-primary)] opacity-[0.03] blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--brand-primary)] opacity-[0.03] blur-[100px] translate-x-1/3 translate-y-1/3 rounded-full" />
    </section>
  );
}
