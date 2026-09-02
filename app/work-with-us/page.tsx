"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import Script from "next/script";
import {
  Briefcase,
  TrendingUp,
  DollarSign,
  Users,
  Award,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  MapPin,
  Building,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Zap,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";

export default function WorkWithUsPage() {
  const [activeCategory, setActiveCategory] = useState<"sales" | "intern">("sales");

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    role: "Field Sales Specialist (Merchant Onboarding)",
    experience: "Fresher / Looking for High Growth",
    category: "Sales & Growth",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const salesRoles = [
    {
      title: "Field Sales Specialist (Merchant Onboarding)",
      payout: "₹35,000 - ₹80,000 / month (Base + High Commissions)",
      type: "Full-Time / Part-Time • Your City",
      desc: "Visit local retail markets, kirana stores, garment shops, and supermarkets. Demonstrate the smartphone barcode POS & voice billing to shop owners and onboard them to Vyop.",
      perks: "Instant payout per active merchant + recurring monthly commission bonuses + marketing collateral provided.",
    },
    {
      title: "City Sales Partner & Team Lead",
      payout: "₹60,000 - ₹1,20,000+ / month (Revenue Share + Team Bonus)",
      type: "Leadership • Major Cities (Jaipur, Mumbai, Delhi, Surat, Bangalore, Pune)",
      desc: "Lead and manage merchant acquisition in your district or city. Build and mentor a team of ground sales representatives to capture local retail markets.",
      perks: "Exclusive city territory rights + higher commission slabs + direct founder access.",
    },
    {
      title: "Student Campus & Part-Time Sales Ambassador",
      payout: "₹15,000 - ₹40,000 / month (Flexible Hours)",
      type: "Flexible • Perfect for College Students",
      desc: "Onboard shops around your college, hometown, or neighborhood during your free hours. Gain real B2B sales experience while earning handsome incentives.",
      perks: "Flexible working hours + Certificate of Sales Excellence + Letter of Recommendation.",
    },
  ];

  const internRoles = [
    {
      title: "Full Stack Web & Mobile Developer Intern",
      stipend: "Performance Stipend + Certificate + LOR + PPO",
      type: "Remote • 2 to 6 Months",
      desc: "Build smartphone camera barcode scanning, offline-first IndexedDB sync, and fast POS billing interfaces in Next.js & React Native.",
    },
    {
      title: "AI & Voice Tech Fellow",
      stipend: "Performance Stipend + Certificate + LOR + PPO",
      type: "Remote • 2 to 4 Months",
      desc: "Train & fine-tune bilingual voice accounting parsers (Hindi & English) for voice-driven GST billing and inventory queries.",
    },
    {
      title: "Digital Media & Brand Creator Fellow",
      stipend: "Stipend + Video Equipment Support + Certificate",
      type: "Hybrid / Remote",
      desc: "Create engaging short-form video content, Instagram reels, and YouTube product walkthroughs showing Indian shopkeepers how to use Vyop.",
    },
  ];

  const handleCategorySwitch = (cat: "sales" | "intern") => {
    setActiveCategory(cat);
    if (cat === "sales") {
      setFormData((prev) => ({
        ...prev,
        category: "Sales & Growth",
        role: "Field Sales Specialist (Merchant Onboarding)",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        category: "Internship",
        role: "Full Stack Web & Mobile Developer Intern",
      }));
    }
  };

  const handleSelectRole = (roleTitle: string, categoryName: "sales" | "intern") => {
    setActiveCategory(categoryName);
    setFormData((prev) => ({
      ...prev,
      category: categoryName === "sales" ? "Sales & Growth" : "Internship",
      role: roleTitle,
    }));
    const el = document.getElementById("apply-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.location || !formData.role) {
      alert("Please fill out all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit application");

      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err.message || "Failed to submit your application. Please try again or WhatsApp us directly.");
    }
  };

  // Structured Data (JSON-LD) for Google for Jobs
  const jobSchema = {
    "@context": "https://schema.org/",
    "@graph": [
      {
        "@type": "JobPosting",
        "title": "Field Sales Specialist - Retail Merchant Acquisition",
        "description": "<p>Join Vyop as a Field Sales Specialist. Onboard retail Kirana stores, grocery shops, and cloth merchants to India's first voice AI billing and smartphone POS app. Earn ₹35,000 to ₹80,000+ monthly with base incentives and high per-shop activation commissions.</p>",
        "identifier": {
          "@type": "PropertyValue",
          "name": "Vyop Technologies",
          "value": "VYOP-JOB-SALES-01"
        },
        "datePosted": "2026-01-15",
        "validThrough": "2026-12-31T23:59:59Z",
        "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Vyop Technologies Private Limited",
          "sameAs": "https://vyop.in",
          "logo": "https://vyop.in/logo.png"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "addressCountry": "IN"
          }
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": 35000,
            "maxValue": 80000,
            "unitText": "MONTH"
          }
        }
      },
      {
        "@type": "JobPosting",
        "title": "City Sales Partner & Merchant Lead",
        "description": "<p>Lead merchant onboarding for your city. Direct recruitment, distributor management, and retail shop POS enablement across Jaipur, Delhi, Mumbai, Surat, and Bangalore.</p>",
        "identifier": {
          "@type": "PropertyValue",
          "name": "Vyop Technologies",
          "value": "VYOP-JOB-SALES-LEAD-02"
        },
        "datePosted": "2026-01-15",
        "validThrough": "2026-12-31T23:59:59Z",
        "employmentType": ["FULL_TIME"],
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Vyop Technologies Private Limited",
          "sameAs": "https://vyop.in",
          "logo": "https://vyop.in/logo.png"
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": 60000,
            "maxValue": 120000,
            "unitText": "MONTH"
          }
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      {/* Google for Jobs Structured Data Script */}
      <Script
        id="google-jobposting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
      />

      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(212,149,42,0.12)] border border-[rgba(212,149,42,0.3)] text-[var(--brand-primary)] text-xs md:text-sm font-bold uppercase tracking-wider mb-6 animate-fade-up">
            <Sparkles size={16} />
            Hiring Sales Champions & Ambitious Interns
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text-primary)] tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Work With Us & Shape the{" "}
            <span className="gradient-text">Voice of Retail in India</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Whether you want to earn substantial income as a <strong>Sales Partner / Merchant Acquisition Lead</strong> or gain core product ownership as an <strong>Engineering & AI Intern</strong>, Vyop is the fastest-growing retail tech ecosystem to join.
          </p>

          {/* Quick Track Switchers */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[var(--border-medium)] shadow-md">
            <button
              onClick={() => handleCategorySwitch("sales")}
              className={`px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === "sales"
                  ? "bg-[var(--brand-secondary)] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <TrendingUp size={18} className={activeCategory === "sales" ? "text-[var(--brand-primary)]" : ""} />
              Sales & Growth Roles (Earn ₹30K - ₹1L+)
            </button>
            <button
              onClick={() => handleCategorySwitch("intern")}
              className={`px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === "intern"
                  ? "bg-[var(--brand-secondary)] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <GraduationCap size={18} className={activeCategory === "intern" ? "text-[var(--brand-primary)]" : ""} />
              Student Internships & Tech Tracks
            </button>
          </div>
        </div>
      </section>

      {/* Sales Program Spotlight */}
      <section className="py-16 px-6 bg-white border-y border-[var(--border-subtle)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200">
              <DollarSign size={14} />
              High Earning Potential
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
              Why Sales Partners Love Working With Vyop
            </h2>
            <p className="text-[var(--text-secondary)] mt-2 max-w-2xl mx-auto text-base">
              Every retail shop, grocery store, and cloth merchant in India wants to save ₹40,000 on computer hardware. Vyop gives them a supermarket barcode POS right on their phone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-[var(--brand-primary)] mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Uncapped Daily Commissions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Earn lucrative instant commissions on every active shop you onboard, plus recurring lifetime bonuses as merchants renew subscriptions.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Zap size={24} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Free Sales Demo Kit & Training</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get full sales scripts in Hindi & English, merchant pitch decks, barcode standees, and a ready-to-demo merchant app on your phone.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <BadgeCheck size={24} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Exclusive Territory Rights</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                High performers can become City & District Franchise Leads with exclusive area distribution rights and overrides on sub-agents.
              </p>
            </div>
          </div>

          {/* Sales Earnings Formula Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-100 font-bold mb-1">
                Estimated Monthly Earnings
              </div>
              <h3 className="text-2xl sm:text-3xl font-black">
                Onboard 4 to 6 Shops Daily → Earn ₹45,000 to ₹90,000+/Month
              </h3>
              <p className="text-amber-100 text-sm mt-1 max-w-xl">
                Average shop onboarding takes just 5 minutes. No technical background required!
              </p>
            </div>

            <a
              href="https://wa.me/919649059592?text=Hi%2C%20I%20want%20to%20join%20Vyop%20as%20a%20Sales%20Partner%20%2F%20Merchant%20Acquisition%20Specialist"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl bg-white text-gray-900 font-black text-sm hover:scale-105 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <PhoneCall size={18} className="text-emerald-600" />
              Chat on WhatsApp Directly
            </a>
          </div>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
            Current Open Roles
          </h2>
          <p className="text-[var(--text-secondary)] mt-2 text-base">
            Select a position below to apply directly.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory("sales")}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
              activeCategory === "sales"
                ? "bg-[var(--brand-primary)] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Sales & Merchant Acquisition (3 Openings)
          </button>
          <button
            onClick={() => setActiveCategory("intern")}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
              activeCategory === "intern"
                ? "bg-[var(--brand-primary)] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Internships & Student Fellows (3 Openings)
          </button>
        </div>

        {/* Roles List */}
        <div className="space-y-4">
          {activeCategory === "sales" &&
            salesRoles.map((role) => (
              <div
                key={role.title}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[var(--border-subtle)] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                      {role.type}
                    </span>
                    <span className="px-3 py-0.5 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                      {role.payout}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{role.desc}</p>
                  <p className="text-xs text-gray-500">
                    <strong className="text-gray-700">Perks:</strong> {role.perks}
                  </p>
                </div>

                <button
                  onClick={() => handleSelectRole(role.title, "sales")}
                  className="px-6 py-3.5 rounded-2xl text-white font-bold text-sm shadow-[var(--shadow-gold)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer self-start md:self-center whitespace-nowrap"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  Apply for Sales Role
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}

          {activeCategory === "intern" &&
            internRoles.map((role) => (
              <div
                key={role.title}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[var(--border-subtle)] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-0.5 rounded-full bg-purple-50 text-purple-800 text-xs font-bold border border-purple-200">
                      {role.type}
                    </span>
                    <span className="px-3 py-0.5 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                      {role.stipend}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{role.desc}</p>
                  <Link
                    href="/internship"
                    className="text-xs text-[var(--brand-primary)] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    View Internship Certificate & Verification Details <ChevronRight size={12} />
                  </Link>
                </div>

                <button
                  onClick={() => handleSelectRole(role.title, "intern")}
                  className="px-6 py-3.5 rounded-2xl text-white font-bold text-sm shadow-[var(--shadow-gold)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer self-start md:self-center whitespace-nowrap"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  Apply for Internship
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* Unified Application Form */}
      <section id="apply-form" className="py-20 px-6 bg-[var(--bg-elevated)] border-t border-[var(--border-subtle)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
              Work With Us Application Form
            </h2>
            <p className="text-[var(--text-secondary)] mt-2 text-base">
              Fill in your details below. We review submissions within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[var(--border-subtle)] shadow-md">
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5 text-emerald-600">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Thank you for applying for <strong>{formData.role}</strong>. Our team will contact you shortly on WhatsApp / Phone.
                </p>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-left max-w-md mx-auto space-y-3">
                  <div className="font-bold text-gray-900 text-sm">Need immediate onboarding?</div>
                  <p className="text-xs text-gray-600">
                    Send your name & resume to{" "}
                    <a href="mailto:vyop4shop@gmail.com" className="text-[var(--brand-primary)] font-bold underline">
                      vyop4shop@gmail.com
                    </a>{" "}
                    or WhatsApp hiring at{" "}
                    <a
                      href={`https://wa.me/919649059592?text=${encodeURIComponent(`Hi, I submitted my application for ${formData.role} in ${formData.location}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 font-bold underline"
                    >
                      +91 96490 59592
                    </a>
                  </p>
                </div>

                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      location: "",
                      role: "Field Sales Specialist (Merchant Onboarding)",
                      experience: "Fresher / Looking for High Growth",
                      category: "Sales & Growth",
                      notes: "",
                    });
                  }}
                  className="mt-8 px-6 py-2.5 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-black transition-colors"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Role Applying For</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 font-semibold focus:ring-2 focus:ring-[var(--brand-primary)]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      WhatsApp / Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      City & State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaipur, Rajasthan or Mumbai, MH"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Current Experience / Background</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 font-medium focus:ring-2 focus:ring-[var(--brand-primary)]"
                  >
                    <option value="Fresher / Looking for High Growth">Fresher / College Student</option>
                    <option value="Retail / FMCG Field Sales (1-2 years)">Retail / FMCG Field Sales (1-2 years)</option>
                    <option value="Direct Sales / Merchant Acquisition Specialist (3+ years)">
                      Direct Sales / Merchant Acquisition Specialist (3+ years)
                    </option>
                    <option value="Software Developer / Tech Specialist">Software Developer / Tech Specialist</option>
                    <option value="Digital Media / Marketing Creator">Digital Media / Marketing Creator</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    Why are you interested in Vyop? / Resume Link
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your strengths, past sales or engineering achievements, or paste your LinkedIn / Google Drive resume link..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-xl text-white font-bold text-base transition-all shadow-[var(--shadow-gold)] hover:scale-[1.01] disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 size={20} />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm text-center font-medium">{errorMsg}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
