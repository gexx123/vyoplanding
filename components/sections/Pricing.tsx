"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started with voice-powered billing.",
    features: [
      "Voice-to-Bill (Hindi & English)",
      "Local Data Storage (Phone)",
      "Daily Sales Reports",
      "Customer Directory",
      "GST Ready Invoices"
    ],
    buttonText: "Get Started",
    buttonLink: "/download",
    popular: false,
  },
  {
    name: "Premium",
    price: "499",
    period: "/ year",
    description: "The ultimate business companion for growth and security.",
    features: [
      "Everything in Free",
      "Sync to Cloud (Safe Backup)",
      "Multi-device Sync",
      "Voice-to-Expense Tracking",
      "Advanced AI Insights",
      "Priority WhatsApp Support"
    ],
    buttonText: "Upgrade Now",
    buttonLink: "/billing",
    popular: true,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden bg-white grain-texture">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--brand-glow)] blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-[var(--brand-glow)] blur-[100px] rounded-full opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-glow)] border border-[var(--border-accent)] mb-6"
          >
            <span className="text-[var(--brand-primary)] text-sm font-bold tracking-wide uppercase">Simple Pricing</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Invest in your business <br />
            <span className="gradient-text">for less than ₹2 / day</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            Start for free and upgrade when you're ready to sync your data securely to the cloud.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 md:p-10 ${
                plan.popular 
                  ? "bg-[var(--brand-secondary)] text-white shadow-2xl scale-105 z-20 border-2 border-[var(--brand-primary)]" 
                  : "bg-white border border-[var(--border-subtle)] shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--gradient-brand)] text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  Most Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-[var(--text-primary)]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-gray-300" : "text-[var(--text-secondary)]"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">₹{plan.price}</span>
                  {plan.period && (
                    <span className={`text-lg ${plan.popular ? "text-gray-400" : "text-[var(--text-muted)]"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${plan.popular ? "bg-[var(--brand-primary)]" : "bg-[var(--brand-glow)]"}`}>
                      <Check className={`w-3.5 h-3.5 ${plan.popular ? "text-white" : "text-[var(--brand-primary)]"}`} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-gray-200" : "text-[var(--text-secondary)]"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link href={plan.buttonLink} className="block">
                <button
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? "bg-[var(--gradient-brand)] text-white shadow-[var(--shadow-gold)] hover:scale-[1.02]"
                      : "bg-gray-100 text-[var(--text-primary)] hover:bg-gray-200"
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[var(--brand-primary)]" />
            <span className="text-sm font-bold">100% Secure Payments</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-[var(--brand-primary)]" />
            <span className="text-sm font-bold">Cloud Sync Enabled</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-[var(--brand-primary)]" />
            <span className="text-sm font-bold">Instant Activation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
