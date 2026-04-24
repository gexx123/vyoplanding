"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const faqs = [
  {
    q: "Do I need internet to use Vyop?",
    a: "No! Vyop works offline. Bills are saved locally and automatically sync when you reconnect.",
  },
  {
    q: "Is this better than Tally?",
    a: "Tally requires typing and accounting knowledge. Vyop works simply by speaking, making it much easier for retail owners.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. We use bank-level encryption. Your data is completely secure and belongs only to you.",
  },
  {
    q: "How many languages are supported?",
    a: "We currently support English, Hindi, and Hinglish. More regional languages are coming soon.",
  },
  {
    q: "Is the app free?",
    a: "Yes, all basic features are completely free. We also offer an affordable premium plan for advanced features.",
  },
  {
    q: "Is GST registration required?",
    a: "No. Vyop can be used by both GST and non-GST registered businesses.",
  },
  {
    q: "How do I import my old data?",
    a: "You can directly import your data from Excel or Tally within the app.",
  },
];

export default function FAQ() {
  return (
    <section
      id="pricing"
      className="py-24 md:py-36"
      style={{ background: "var(--bg-base)" }}
    >
      <motion.div
        className="max-w-3xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          variants={fadeUpVariants}
          className="text-center font-bold mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-section)",
            color: "var(--text-primary)",
          }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div variants={fadeUpVariants}>
          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-[rgba(0,0,0,0.08)] last:border-b-0"
              >
                <AccordionTrigger
                  className="py-5 text-left hover:no-underline"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-5"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}
