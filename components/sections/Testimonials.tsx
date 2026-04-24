"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const testimonials = [
  {
    quote:
      "Pehle bill likhne mein 2-3 minute lagte the, ab 10 second mein ho jaata hai bolke.",
    name: "Rajesh Gupta",
    role: "Kirana Wala",
    city: "Jaipur",
    source: "Google Play",
    initial: "R",
    color: "#D4952A",
  },
  {
    quote:
      "Khata ka hisaab ab gharvaalon ko samjhana aasaan ho gaya. App sab rakhta hai.",
    name: "Meena Devi",
    role: "General Store",
    city: "Patna",
    source: "WhatsApp",
    initial: "M",
    color: "#1E2340",
  },
  {
    quote:
      "Hindi mein bolta hoon, bill ban jaata hai. Bahut badiya cheez banai hai.",
    name: "Suresh Yadav",
    role: "Provision Store",
    city: "Lucknow",
    source: "Google Play",
    initial: "S",
    color: "#D4952A",
  },
  {
    quote:
      "Mera beta bahar padhta hai, main akele dukaan chalata hoon. Vyapar meri madad karta hai.",
    name: "Ramesh Bhai",
    role: "Kirana Store",
    city: "Sikar, Rajasthan",
    source: "WhatsApp",
    initial: "R",
    color: "#1E2340",
  },
  {
    quote:
      "GST bill pehle CA se banwana padta tha. Ab main khud bana leta hoon.",
    name: "Priya Sharma",
    role: "Medical Store",
    city: "Indore",
    source: "App Store",
    initial: "P",
    color: "#D4952A",
  },
  {
    quote:
      "Stock khatam hone se pehle app bata deta hai. Bahut helpful feature hai.",
    name: "Mohan Lal",
    role: "Kirana",
    city: "Nagpur",
    source: "Google Play",
    initial: "M",
    color: "#1E2340",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="var(--brand-primary)"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function SourcePill({ source }: { source: string }) {
  return (
    <span
      className="text-[10px] px-2 py-1 rounded-full font-medium"
      style={{
        background: "var(--bg-surface)",
        color: "var(--text-secondary)",
        fontFamily: "var(--font-body)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      {source}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
      >
        <motion.h2
          variants={fadeUpVariants}
          className="text-center font-bold mb-16 px-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-section)",
            color: "var(--text-primary)",
          }}
        >
          Dukandaaron Ki Zubaani
        </motion.h2>

        {/* Card carousel */}
        <motion.div variants={fadeUpVariants} className="relative">
          {/* Fade masks */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, var(--bg-surface), transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, var(--bg-surface), transparent)",
            }}
          />

          <div className="group">
            <div
              className="flex gap-6 px-6 group-hover:[animation-play-state:paused]"
              style={{
                animation: "marquee-left 40s linear infinite",
                width: "max-content",
              }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="p-6 flex-shrink-0 bg-white rounded-[20px] border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-72 md:w-80">
                    <Stars />

                    <p
                      className="mb-5 italic leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "15px",
                        color: "var(--text-secondary)",
                        minHeight: "72px",
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div
                      className="h-px mb-4"
                      style={{ background: "var(--border-subtle)" }}
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{
                            background: `${t.color}15`,
                            color: t.color,
                            fontFamily: "var(--font-display)",
                          }}
                        >
                          {t.initial}
                        </div>
                        <div>
                          <div
                            className="text-sm font-bold"
                            style={{
                              color: "var(--text-primary)",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {t.name}
                          </div>
                          <div
                            className="text-xs font-medium"
                            style={{
                              color: "var(--text-muted)",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {t.city}
                          </div>
                        </div>
                      </div>
                      <SourcePill source={t.source} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
