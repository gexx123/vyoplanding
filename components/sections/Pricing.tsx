"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative bg-white">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Invest in your business <br className="hidden md:block" />
            <span className="text-[var(--brand-primary)]">for less than ₹2 / day</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            Start for free and upgrade when you're ready to sync your data securely to the cloud.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          
          {/* Monthly Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full lg:w-1/3 bg-[#F9FAFB] border border-gray-100 rounded-[32px] p-8 text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">Monthly</h3>
            <div className="flex items-baseline justify-center gap-1 mb-8">
              <span className="text-4xl font-extrabold text-gray-900">₹49</span>
              <span className="text-gray-500 font-medium">/mo</span>
            </div>
            
            {/* Empty spacer to align with 'Save X%' in other cards */}
            <div className="h-6 mb-8"></div>

            <Link href="/billing">
              <button className="w-full py-4 rounded-2xl font-bold text-[#D4AF37] bg-[#FDF9E6] hover:bg-[#FBEFC2] transition-colors">
                Upgrade Now
              </button>
            </Link>
          </motion.div>

          {/* Yearly Card (Most Popular) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-[40%] bg-white border-2 border-[#D4AF37] rounded-[32px] p-10 text-center relative shadow-[0_20px_50px_-12px_rgba(212,175,55,0.25)] z-10"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
              Most Popular
            </div>

            <h3 className="text-xl font-bold text-[#D4AF37] mb-4 font-display">Yearly</h3>
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-5xl font-extrabold text-gray-900">₹499</span>
              <span className="text-gray-500 font-medium">/yr</span>
            </div>
            
            <div className="text-green-600 font-bold text-sm mb-8">
              Save 15%
            </div>

            <Link href="/billing">
              <button className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#D4AF37] to-[#F1C40F] hover:shadow-[0_8px_20px_-6px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 transition-all">
                Upgrade Now
              </button>
            </Link>
          </motion.div>

          {/* 2 Years Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-1/3 bg-[#F9FAFB] border border-gray-100 rounded-[32px] p-8 text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">2 Years</h3>
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-4xl font-extrabold text-gray-900">₹799</span>
              <span className="text-gray-500 font-medium">/2yr</span>
            </div>
            
            <div className="text-green-600 font-bold text-sm mb-8">
              Save 32%
            </div>

            <Link href="/billing">
              <button className="w-full py-4 rounded-2xl font-bold text-[#D4AF37] bg-[#FDF9E6] hover:bg-[#FBEFC2] transition-colors">
                Upgrade Now
              </button>
            </Link>
          </motion.div>

        </div>

        {/* Offline Cash Payment Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto border border-dashed border-gray-300 rounded-[32px] p-8 md:p-10 text-center bg-gray-50/50"
        >
          <div className="flex justify-center mb-4 text-gray-400">
            <Users className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2 font-display">
            Prefer to pay in cash?
          </h4>
          <p className="text-gray-500 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Pay via an authorized Vyop Marketer in your area for instant offline activation.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
