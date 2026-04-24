"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function LaunchAnnouncement() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Only increment once per session
        const hasVisited = sessionStorage.getItem("vyop_visited");
        const method = hasVisited ? "GET" : "POST";
        
        const res = await fetch("/api/stats/visitors", { method });
        const data = await res.json();
        
        if (data.count) {
          setVisitorCount(data.count);
          if (!hasVisited) sessionStorage.setItem("vyop_visited", "true");
        }
      } catch (err) {
        console.error("Failed to track visit:", err);
      }
    };

    trackVisit();
    
    // Refresh count every 30 seconds for "live" feel
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/stats/visitors");
        const data = await res.json();
        if (data.count) setVisitorCount(data.count);
      } catch (e) {}
    }, 30000);

    return () => clearInterval(interval);
  }, []);

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

        {visitorCount !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-gray-500 font-medium"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm">
              <span className="text-[var(--brand-primary)] font-bold"><AnimatedCounter value={visitorCount} /></span> visitors till now
            </span>
          </motion.div>
        )}
        
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--brand-primary)] opacity-[0.03] blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--brand-primary)] opacity-[0.03] blur-[100px] translate-x-1/3 translate-y-1/3 rounded-full" />
    </section>
  );
}
