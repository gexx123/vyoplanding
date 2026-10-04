"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  source: string;
  initial: string;
  color: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      "It's so simple, even my older brother can do it easily. No training required.",
    name: "Babulal",
    role: "Verified Store Owner",
    source: "Google Play",
    initial: "B",
    color: "#D4952A",
  },
  {
    quote: "🏨👍",
    name: "Anshul",
    role: "Verified Merchant",
    source: "Google Play",
    initial: "A",
    color: "#1E2340",
  },
  {
    quote: "very good experience",
    name: "Vivek",
    role: "Verified Retailer",
    source: "Google Play",
    initial: "V",
    color: "#D4952A",
  },
  {
    quote:
      "Very good app for all kind of shop, here you can manage inventory, bills, expenses, credits and more. nice user interface and experience. app working very well and fast. and the AI makes it more easy to use for the people who don't know much english and features they can just do any task by their voice that makes it incredible. Really nice work and great app. 👍",
    name: "Sahil Kumar",
    role: "Verified Store Owner",
    source: "Google Play",
    initial: "S",
    color: "#1E2340",
  },
];

// Repeat 4 sets = 16 cards for perfectly symmetrical -50% infinite marquee
const allTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#F59E0B"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function SourcePill({ source }: { source: string }) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.vyop.app"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-[10px] px-2 py-1 rounded-full font-medium transition-colors hover:bg-slate-100"
      style={{
        background: "var(--bg-surface)",
        color: "var(--text-secondary)",
        fontFamily: "var(--font-body)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
        <path
          d="M3.609 1.814L13.792 12 3.61 22.186a1.597 1.597 0 01-.61-.926V2.74c0-.363.15-.71.61-.926z"
          fill="#00C1A6"
        />
        <path
          d="M17.18 8.613l-3.388 3.387 3.388 3.387 3.827-2.187c1.09-.623 1.09-1.642 0-2.265l-3.827-2.322z"
          fill="#FFBA00"
        />
        <path
          d="M3.609 1.814L15.352 8.52 13.792 12 3.609 1.814z"
          fill="#00E676"
        />
        <path
          d="M3.609 22.186L13.792 12l1.56 3.48-11.743 6.706z"
          fill="#FF3D00"
        />
      </svg>
      {source}
    </a>
  );
}

export default function Testimonials() {
  const [expandedName, setExpandedName] = useState<string | null>(null);

  return (
    <section className="py-24 overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
      >
        <div className="text-center mb-16 px-6">
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 border"
            style={{
              background: "rgba(212, 149, 42, 0.08)",
              borderColor: "rgba(212, 149, 42, 0.25)",
              color: "#B47818",
            }}
          >
            <div className="flex gap-0.5 text-amber-500 text-xs">
              {"★".repeat(5)}
            </div>
            <span className="text-xs font-semibold tracking-wide">
              5.0 / 5.0 Rating on Google Play
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-section)",
              color: "var(--text-primary)",
            }}
          >
            Dukandaaron Ki Zubaani
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="text-sm md:text-base mt-2.5 max-w-lg mx-auto"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            100% genuine reviews from verified store owners and merchants using Vyop across India.
          </motion.p>
        </div>

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
              {allTestimonials.map((t, i) => {
                const isLong = t.quote.length > 115;
                const isExpanded = expandedName === t.name;
                const displayQuote =
                  isLong && !isExpanded
                    ? t.quote.slice(0, 110).trim() + "..."
                    : t.quote;

                return (
                  <div
                    key={i}
                    className="p-6 flex-shrink-0 bg-white rounded-[20px] border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-72 md:w-80 flex flex-col justify-between h-full">
                      <div>
                        <Stars />

                        <p
                          className="mb-5 italic leading-relaxed text-left"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "15px",
                            color: "var(--text-secondary)",
                            minHeight: isExpanded ? "auto" : "72px",
                          }}
                        >
                          &ldquo;{displayQuote}&rdquo;
                          {isLong && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedName(isExpanded ? null : t.name);
                              }}
                              className="text-amber-600 hover:text-amber-700 font-semibold text-xs ml-1.5 cursor-pointer underline underline-offset-2 not-italic inline-block"
                            >
                              {isExpanded ? "Read less" : "Read more"}
                            </button>
                          )}
                        </p>
                      </div>

                      <div>
                        <div
                          className="h-px mb-4"
                          style={{ background: "var(--border-subtle)" }}
                        />

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                              style={{
                                background: `${t.color}15`,
                                color: t.color,
                                fontFamily: "var(--font-display)",
                              }}
                            >
                              {t.initial}
                            </div>
                            <div className="min-w-0">
                              <div
                                className="text-sm font-bold truncate"
                                style={{
                                  color: "var(--text-primary)",
                                  fontFamily: "var(--font-body)",
                                }}
                              >
                                {t.name}
                              </div>
                              <div
                                className="text-xs font-medium truncate"
                                style={{
                                  color: "var(--text-muted)",
                                  fontFamily: "var(--font-body)",
                                }}
                              >
                                {t.role}
                              </div>
                            </div>
                          </div>
                          <SourcePill source={t.source} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
