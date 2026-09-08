"use client";

import Link from "next/link";
import { industries } from "@/lib/industryData";

export default function IndustrySolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-white to-[#FAF8F5] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            Tailored Retail Solutions
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built for Every Kind of Indian Retailer
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)]">
            Whether you run a fast-paced Kirana counter, an apparel boutique, or a busy restaurant, Vyop adapts to your daily workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/solutions/${ind.slug}`}
              className="group bg-white rounded-3xl p-8 border border-gray-200/80 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl group-hover:scale-110 transition-transform">
                    {ind.icon}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                    Free POS
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {ind.name}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-body">
                  {ind.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-amber-700 group-hover:text-amber-800">
                <span>View {ind.name} Features</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
