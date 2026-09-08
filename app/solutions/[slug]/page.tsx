import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { industries } from "@/lib/industryData";

export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = industries.find((ind) => ind.slug === resolvedParams.slug);
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `/solutions/${industry.slug}`,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://vyop.in/solutions/${industry.slug}`,
      siteName: "Vyop",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: industry.metaTitle,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
  };
}

export default async function IndustrySolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const industry = industries.find((ind) => ind.slug === resolvedParams.slug);

  if (!industry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-glow)] text-[var(--brand-primary)] text-sm font-bold mb-6">
          <span className="text-xl">{industry.icon}</span> {industry.badge}
        </div>

        <h1
          className="text-4xl md:text-6xl font-extrabold mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Fastest Billing & POS Software for <br className="hidden md:block" />
          <span className="gradient-text">{industry.heroHighlight}</span>
        </h1>

        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10">
          {industry.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://vyop.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex w-full sm:w-auto px-10 py-5 rounded-2xl bg-[var(--brand-secondary)] text-white font-bold text-xl hover:scale-[1.02] transition-all shadow-[var(--shadow-gold)] items-center justify-center"
          >
            Start Free Online
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex md:hidden items-center justify-center gap-3 px-8 py-[18px] rounded-2xl bg-black text-white transition-all duration-200 hover:scale-[1.02] w-full sm:w-auto"
            style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.2)" }}
          >
            <svg width="26" height="28" viewBox="0 0 22 24" fill="none">
              <path d="M1 1l10 11L1 23V1z" fill="#4285F4" stroke="#4285F4" strokeWidth="0.5" />
              <path d="M1 1l14 8-4 4L1 1z" fill="#34A853" />
              <path d="M1 23l10-12 4 4-14 8z" fill="#EA4335" />
              <path d="M15 9l5 3-5 3-4-3 4-3z" fill="#FBBC05" />
            </svg>
            <div className="text-left flex flex-col justify-center">
              <div
                className="text-[11px] leading-[1.1] font-medium"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.5px",
                }}
              >
                GET IT ON
              </div>
              <div
                className="text-[20px] font-semibold leading-[1.1]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Google Play
              </div>
            </div>
          </a>

          <a
            href="#comparison"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white border border-[var(--border-medium)] text-[var(--text-secondary)] font-bold text-xl hover:bg-gray-50 transition-all"
          >
            See The Difference
          </a>
        </div>
      </section>

      {/* Problem & Solution Comparison */}
      <section id="comparison" className="py-20 bg-white border-y border-[var(--border-subtle)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              Built Specifically for Your Trade
            </span>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why Generic Accounting Software Fails {industry.name}
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Traditional computer software requires slow manual typing. Vyop is built for retail speed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industry.painPoints.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-7 flex flex-col justify-between"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold mb-3">
                    <span>✕</span> The Old Painful Way
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.oldWay}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200/60">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-3">
                    <span>✓</span> The Vyop Way
                  </div>
                  <p className="text-gray-900 font-semibold text-sm md:text-base leading-relaxed">
                    {item.vyopWay}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-[var(--bg-surface)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Key Features Designed for {industry.name}
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Everything you need to manage inventory, rush-hour billing, and customer repeat orders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industry.features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-[var(--border-subtle)] shadow-sm hover:shadow-md transition-shadow flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-3xl flex-shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {feat.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl md:text-5xl font-extrabold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Upgrade Your {industry.name} Today
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of Indian shopkeepers billing faster with zero expensive computers or training.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vyop.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Download Free on Android
            </a>
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-black text-white font-bold text-lg hover:bg-gray-900 transition-all"
            >
              Open Web App
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {industry.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: industry.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }),
        }}
      />

      <Footer />
    </main>
  );
}
