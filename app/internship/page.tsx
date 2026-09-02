"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import Script from "next/script";
import {
  CheckCircle2,
  ShieldCheck,
  Search,
  Award,
  Briefcase,
  Code2,
  Sparkles,
  Zap,
  GraduationCap,
  ExternalLink,
  Copy,
  Check,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Share2,
  Users,
  Building2,
  HelpCircle,
} from "lucide-react";
import { VerifiedIntern } from "@/lib/verifiedInterns";

export default function InternshipPage() {
  // Verification states
  const [searchQuery, setSearchQuery] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<VerifiedIntern | null>(null);
  const [verificationError, setVerificationError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Application form states
  const [selectedRole, setSelectedRole] = useState("Full Stack Web & Mobile Engineering Intern");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    degree: "B.Tech / B.E. / BCA / MCA",
    graduationYear: "2026",
    role: "Full Stack Web & Mobile Engineering Intern",
    linkedin: "",
    github: "",
    portfolioUrl: "",
    whyVyop: "",
    availability: "Immediate (Full-Time / Part-Time)",
  });
  const [appStatus, setAppStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [appErrorMsg, setAppErrorMsg] = useState("");

  const verifySectionRef = useRef<HTMLDivElement>(null);
  const applySectionRef = useRef<HTMLDivElement>(null);

  // Open Internship Tracks
  const internshipRoles = [
    {
      title: "Full Stack Web & Mobile Engineering Intern",
      department: "Engineering",
      type: "2 to 6 Months • Remote / Hybrid",
      stipend: "Performance Stipend + Certificate + LOR + PPO",
      tags: ["Next.js", "React Native", "TypeScript", "IndexedDB", "Tailwind CSS"],
      desc: "Build high-speed camera barcode scanning POS engine, zero-latency offline synchronization, and responsive merchant dashboards.",
      requirements: "Hands-on experience in React/Next.js or React Native. Strong interest in retail tech & offline-first architecture.",
    },
    {
      title: "AI & Voice Systems Engineering Intern",
      department: "AI & ML",
      type: "2 to 4 Months • Remote",
      stipend: "Performance Stipend + Certificate + LOR + PPO",
      tags: ["Whisper AI", "Voice Recognition", "Prompt Engineering", "Python", "FastAPI"],
      desc: "Develop bilingual voice accounting parsers that turn spoken Hindi and English commands into structured GST invoices and inventory records.",
      requirements: "Familiarity with speech recognition, LLM prompt tuning, and building REST APIs.",
    },
    {
      title: "Retail Growth & Merchant Acquisition Fellow",
      department: "Sales & Growth",
      type: "1 to 3 Months • Ground / Field",
      stipend: "High Incentive per Onboarded Merchant + Base Stipend + LOR",
      tags: ["B2B Sales", "Merchant Onboarding", "Retail POS", "Field Activation"],
      desc: "Onboard Kirana stores, supermarkets, and clothing retailers to Vyop. Conduct live mobile POS demos and collect direct merchant feedback.",
      requirements: "Strong communication skills, hustle mindset, and willingness to visit local retail markets.",
    },
    {
      title: "UI/UX & Product Design Fellow",
      department: "Product Design",
      type: "2 to 3 Months • Remote",
      stipend: "Stipend + Verified Portfolio Project + LOR",
      tags: ["Figma", "Design Systems", "Mobile POS UI", "User Research"],
      desc: "Design intuitive interfaces tailored for non-tech-savvy Indian shop owners. Craft micro-animations and seamless one-handed billing flows.",
      requirements: "Proficiency in Figma, design systems, and an eye for clean, modern ergonomics.",
    },
    {
      title: "Campus Ambassador & Student Community Lead",
      department: "Community & Marketing",
      type: "Flexible • Campus Based",
      stipend: "Referral Rewards + Exclusive Merch + Certificate",
      tags: ["Community", "Social Media", "College Activation", "Networking"],
      desc: "Represent Vyop in your college campus, organize tech & entrepreneurship sessions, and recruit fellow students for internship programs.",
      requirements: "Active in college clubs, strong social presence, and enthusiastic about startups.",
    },
  ];

  // Google for Jobs Internship Schema
  const internshipSchema = {
    "@context": "https://schema.org/",
    "@graph": [
      {
        "@type": "JobPosting",
        "title": "Full Stack Web & Mobile Engineering Intern",
        "description": "<p>Gain hands-on software engineering fellowship experience building high-scale Next.js, React Native, and offline-first barcode POS systems. Official verified certificate, founder LOR, and stipend included.</p>",
        "identifier": {
          "@type": "PropertyValue",
          "name": "Vyop Technologies",
          "value": "VYOP-INT-ENG-01"
        },
        "datePosted": "2026-01-15",
        "validThrough": "2026-12-31T23:59:59Z",
        "employmentType": ["INTERN"],
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Vyop Technologies Private Limited",
          "sameAs": "https://vyop.in",
          "logo": "https://vyop.in/logo.png"
        },
        "jobLocationType": "TELECOMMUTE",
        "applicantLocationRequirements": {
          "@type": "Country",
          "name": "India"
        }
      },
      {
        "@type": "JobPosting",
        "title": "AI & Voice Systems Engineering Fellow",
        "description": "<p>Work on speech-to-text models, Whisper AI, and multilingual prompt engineering for voice accounting in Indian retail.</p>",
        "identifier": {
          "@type": "PropertyValue",
          "name": "Vyop Technologies",
          "value": "VYOP-INT-AI-02"
        },
        "datePosted": "2026-01-15",
        "validThrough": "2026-12-31T23:59:59Z",
        "employmentType": ["INTERN"],
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Vyop Technologies Private Limited",
          "sameAs": "https://vyop.in",
          "logo": "https://vyop.in/logo.png"
        },
        "jobLocationType": "TELECOMMUTE",
        "applicantLocationRequirements": {
          "@type": "Country",
          "name": "India"
        }
      }
    ]
  };

  // Handle live verification search
  const handleVerify = async (queryToSearch?: string) => {
    const query = (queryToSearch !== undefined ? queryToSearch : searchQuery).trim();
    if (!query) {
      setVerificationError("Please enter a Certificate ID, Intern ID, or Name.");
      setVerificationResult(null);
      return;
    }

    setVerifying(true);
    setVerificationError(null);
    setVerificationResult(null);

    try {
      const res = await fetch(`/api/verify-intern?id=${encodeURIComponent(query)}`);
      const data = await res.json();

      if (res.ok && data.verified && data.intern) {
        setVerificationResult(data.intern);
      } else {
        setVerificationError(data.message || `No verified certificate found for "${query}".`);
      }
    } catch (err) {
      console.error(err);
      setVerificationError("Verification request failed. Please check your internet connection and try again.");
    } finally {
      setVerifying(false);
    }
  };

  const handleSampleClick = (certId: string) => {
    setSearchQuery(certId);
    handleVerify(certId);
  };

  const handleRoleSelect = (roleName: string) => {
    setSelectedRole(roleName);
    setFormData((prev) => ({ ...prev, role: roleName }));
    if (applySectionRef.current) {
      applySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.college) {
      alert("Please fill out all mandatory fields.");
      return;
    }

    setAppStatus("submitting");
    setAppErrorMsg("");

    try {
      const res = await fetch("/api/internships/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit application");

      setAppStatus("success");
    } catch (err: any) {
      console.error(err);
      setAppStatus("error");
      setAppErrorMsg(err.message || "Something went wrong while submitting. Please try again.");
    }
  };

  const handleCopyVerificationLink = (certId: string) => {
    const url = `${window.location.origin}/internship/verify?id=${certId}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      {/* Google for Jobs Internship Structured Data */}
      <Script
        id="google-internship-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(internshipSchema) }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(212,149,42,0.12)] border border-[rgba(212,149,42,0.3)] text-[var(--brand-primary)] text-xs md:text-sm font-bold uppercase tracking-wider mb-6 animate-fade-up">
            <GraduationCap size={16} />
            Vyop Student Fellowship & Internship Program
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text-primary)] tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Build Real AI Retail Tech &{" "}
            <span className="gradient-text">Verify Student Work</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Join the core fellowship program building India's voice-powered AI accountant and smartphone POS.
            Get hands-on product ownership, letter of recommendation from the founder, stipend, and
            official cryptographic certificate verification.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                verifySectionRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[var(--brand-secondary)] text-white font-bold text-base shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl cursor-pointer"
            >
              <ShieldCheck size={20} className="text-[var(--brand-primary)]" />
              Verify Certificate / Intern
            </button>

            <button
              onClick={() => {
                applySectionRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-bold text-base shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] cursor-pointer"
              style={{ background: "var(--gradient-brand)" }}
            >
              <Briefcase size={20} />
              Apply for Internship
            </button>

            <Link
              href="/work-with-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-[var(--border-medium)] text-[var(--text-primary)] font-bold text-base shadow-sm transition-all hover:bg-gray-50 hover:border-gray-300"
            >
              <Users size={18} className="text-[var(--brand-primary)]" />
              Sales & Full-Time Openings
            </Link>
          </div>

          {/* Key Value Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-left">
            <div className="p-5 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-[var(--brand-primary)] mb-3">
                <ShieldCheck size={22} />
              </div>
              <h4 className="font-bold text-[var(--text-primary)] text-base">Verified Proof</h4>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Official digital certificates with online verification for colleges & recruiters.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
                <Code2 size={22} />
              </div>
              <h4 className="font-bold text-[var(--text-primary)] text-base">Real AI Scale</h4>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Code on real smartphone POS, offline SQLite/IndexedDB, and LLM voice billing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3">
                <Award size={22} />
              </div>
              <h4 className="font-bold text-[var(--text-primary)] text-base">Founder LOR</h4>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Direct mentorship & recommendation letter from founder for higher studies/jobs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-3">
                <Zap size={22} />
              </div>
              <h4 className="font-bold text-[var(--text-primary)] text-base">PPO & Stipend</h4>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Fast-track conversion to full-time engineering or growth lead roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Verification Section */}
      <section ref={verifySectionRef} id="verify" className="py-20 px-6 bg-white border-y border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
              <CheckCircle2 size={14} />
              Authenticity Registry
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Verify Student Internship Certificate
            </h2>
            <p className="text-[var(--text-secondary)] mt-3 max-w-2xl mx-auto text-base">
              Enter a Certificate ID (e.g. <code className="bg-gray-100 px-2 py-0.5 rounded text-gray-800 font-mono text-xs">VYOP-INT-2026-001</code>) or student name to verify genuine employment & work credentials.
            </p>
          </div>

          {/* Search Box */}
          <div className="bg-[var(--bg-elevated)] p-4 sm:p-6 rounded-3xl border border-[var(--border-subtle)] shadow-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleVerify();
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Enter Certificate ID, Intern ID, or Student Name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] text-base font-medium shadow-sm"
                />
              </div>

              <button
                type="submit"
                disabled={verifying}
                className="px-8 py-4 rounded-2xl text-white font-bold text-base transition-all shadow-[var(--shadow-gold)] hover:scale-[1.02] disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                style={{ background: "var(--gradient-brand)" }}
              >
                {verifying ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <ShieldCheck size={20} />
                    Verify Now
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Verification Error Output */}
          {verificationError && (
            <div className="mt-6 p-6 rounded-2xl bg-red-50 border border-red-200 text-center animate-fade-up">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 text-red-600">
                <HelpCircle size={24} />
              </div>
              <h4 className="font-bold text-red-900 text-lg mb-1">Certificate Not Found</h4>
              <p className="text-sm text-red-700 max-w-md mx-auto">{verificationError}</p>
              <p className="text-xs text-red-500 mt-3">
                If you believe this is an error, please email us at{" "}
                <a href="mailto:vyop4shop@gmail.com" className="font-bold underline">
                  vyop4shop@gmail.com
                </a>
              </p>
            </div>
          )}

          {/* Verified Certificate Card */}
          {verificationResult && (
            <div className="mt-8 rounded-3xl overflow-hidden border-2 border-emerald-400 bg-white shadow-xl animate-fade-up">
              {/* Header Banner */}
              <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <ShieldCheck size={28} className="text-emerald-100" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-1">
                      <Check size={14} className="stroke-[3]" />
                      Official Verified Credential
                    </div>
                    <h3 className="text-xl font-bold">Vyop Fellowship Certificate</h3>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-xs text-emerald-100 uppercase tracking-wider font-semibold">Certificate ID</div>
                  <div className="text-base font-mono font-bold bg-white/10 px-3 py-1 rounded-lg mt-0.5 border border-white/20 inline-block">
                    {verificationResult.certificateId}
                  </div>
                </div>
              </div>

              {/* Certificate Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-gray-100">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Student Name</div>
                    <div className="text-2xl font-black text-gray-900 mt-1" style={{ fontFamily: "var(--font-display)" }}>
                      {verificationResult.fullName}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-1.5 mt-1">
                      <Building2 size={16} className="text-gray-400" />
                      {verificationResult.college}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Internship Role & Dept</div>
                    <div className="text-lg font-bold text-gray-900 mt-1">
                      {verificationResult.role}
                    </div>
                    <div className="inline-flex items-center gap-2 mt-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        {verificationResult.department}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        Status: {verificationResult.status}
                      </span>
                      {verificationResult.grade && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200">
                          Grade: {verificationResult.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Duration & Period */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 text-sm">
                  <div>
                    <span className="text-gray-500 text-xs block">Duration</span>
                    <strong className="text-gray-900 font-semibold">{verificationResult.duration}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs block">Start Date</span>
                    <strong className="text-gray-900 font-semibold">{verificationResult.startDate}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs block">End Date</span>
                    <strong className="text-gray-900 font-semibold">{verificationResult.endDate}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs block">Issued Date</span>
                    <strong className="text-gray-900 font-semibold">{verificationResult.issueDate}</strong>
                  </div>
                </div>

                {/* Project & Contributions */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Sparkles size={16} className="text-[var(--brand-primary)]" />
                    Key Project & Technical Contribution
                  </h4>
                  <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                    <h5 className="font-bold text-gray-900 text-base mb-1">{verificationResult.projectTitle}</h5>
                    <p className="text-sm text-gray-700 leading-relaxed">{verificationResult.projectDescription}</p>
                  </div>
                </div>

                {/* Skills Acquired */}
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">Verified Competencies & Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {verificationResult.skillsAcquired.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg text-xs font-bold bg-gray-100 text-gray-800 border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Issuer Footer & Actions */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-gray-500">Verified & Authenticated by:</div>
                    <div className="font-bold text-gray-900 text-sm">{verificationResult.mentorTitle || "Founder, Vyop AI"}</div>
                    <div className="text-xs text-emerald-600 font-semibold">Vyop AI</div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => handleCopyVerificationLink(verificationResult.certificateId)}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      {copiedLink ? (
                        <>
                          <Check size={16} className="text-emerald-600" />
                          Link Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          Copy Share Link
                        </>
                      )}
                    </button>

                    <Link
                      href={`/internship/verify?id=${verificationResult.certificateId}`}
                      target="_blank"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-black transition-colors"
                    >
                      <ExternalLink size={16} />
                      Full Certificate Page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Open Internship Tracks */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            Summer / Fall 2026 Cohorts
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Open Internship Roles
          </h2>
          <p className="text-[var(--text-secondary)] mt-3 max-w-2xl mx-auto text-base">
            Work directly with our founding engineering and growth team. We value builders who love shipping fast and solving real problems for Indian merchants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internshipRoles.map((role) => (
            <div
              key={role.title}
              className="bg-white rounded-3xl p-7 border border-[var(--border-subtle)] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
                    {role.department}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{role.type}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                  {role.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{role.desc}</p>

                <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-xs text-gray-700 mb-4">
                  <strong className="text-gray-900 block mb-1">Perks & Compensation:</strong>
                  {role.stipend}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {role.tags.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleRoleSelect(role.title)}
                className="w-full py-3 rounded-xl border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] font-bold text-sm hover:bg-[var(--brand-primary)] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Apply for this Track
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Internship Application Form */}
      <section ref={applySectionRef} id="apply" className="py-20 px-6 bg-[var(--bg-elevated)] border-t border-[var(--border-subtle)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Apply for Vyop Internship
            </h2>
            <p className="text-[var(--text-secondary)] mt-2 text-base">
              Submit your details below. We review applications on a rolling basis and respond within 48 hours.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[var(--border-subtle)] shadow-md">
            {appStatus === "success" ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5 text-emerald-600">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Application Received!</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Thank you for applying to the <strong>{formData.role}</strong> position. Our team will review your profile and reach out via WhatsApp or email.
                </p>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-left max-w-md mx-auto space-y-3">
                  <div className="font-bold text-gray-900 text-sm">Next Quick Steps:</div>
                  <ul className="text-xs text-gray-600 space-y-2 list-disc list-inside">
                    <li>
                      Email your latest Resume / Portfolio to{" "}
                      <a href="mailto:vyop4shop@gmail.com" className="text-[var(--brand-primary)] font-bold underline">
                        vyop4shop@gmail.com
                      </a>
                    </li>
                    <li>
                      Fast-track your application by messaging us on WhatsApp at{" "}
                      <a
                        href={`https://wa.me/919649059592?text=${encodeURIComponent(`Hi Vyop Team, I applied for the ${formData.role} internship.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 font-bold underline"
                      >
                        +91 96490 59592
                      </a>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setAppStatus("idle");
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      college: "",
                      degree: "B.Tech / B.E. / BCA / MCA",
                      graduationYear: "2026",
                      role: selectedRole,
                      linkedin: "",
                      github: "",
                      portfolioUrl: "",
                      whyVyop: "",
                      availability: "Immediate (Full-Time / Part-Time)",
                    });
                  }}
                  className="mt-8 px-6 py-2.5 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-black transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    Select Internship Track <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => {
                      setFormData({ ...formData, role: e.target.value });
                      setSelectedRole(e.target.value);
                    }}
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 font-medium text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)]"
                  >
                    {internshipRoles.map((r) => (
                      <option key={r.title} value={r.title}>
                        {r.title} ({r.department})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      College / University Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. IIT Roorkee / DTU / SVNIT"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">Degree / Major</label>
                    <input
                      type="text"
                      placeholder="e.g. B.Tech Computer Science"
                      value={formData.degree}
                      onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">Year of Graduation</label>
                    <select
                      value={formData.graduationYear}
                      onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)]"
                    >
                      <option value="2025">2025 (Graduated / Final Year)</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">LinkedIn Profile URL</label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">GitHub / Portfolio URL</label>
                    <input
                      type="url"
                      placeholder="https://github.com/username or portfolio"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    Why do you want to build with Vyop? / Key Projects Built
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what excites you about retail tech, past projects you built, or any relevant experience..."
                    value={formData.whyVyop}
                    onChange={(e) => setFormData({ ...formData, whyVyop: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={appStatus === "submitting"}
                    className="w-full py-4 rounded-xl text-white font-bold text-base transition-all shadow-[var(--shadow-gold)] hover:scale-[1.01] disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    {appStatus === "submitting" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 size={20} />
                        Submit Internship Application
                      </>
                    )}
                  </button>
                </div>

                {appStatus === "error" && (
                  <p className="text-red-500 text-sm text-center font-medium">{appErrorMsg}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Internship FAQ */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-extrabold text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm">
            <h4 className="font-bold text-gray-900 text-base mb-2">How does the certificate verification work?</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every student who completes an internship or fellowship at Vyop receives an official certificate with a unique Certificate ID. Anyone (future employers, college professors, background check agencies) can enter this ID on vyop.in/internship to instantly verify dates, project contributions, and authenticity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm">
            <h4 className="font-bold text-gray-900 text-base mb-2">Is the internship remote or on-site?</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Software engineering, AI systems, and product design roles are 100% remote. Retail growth & merchant onboarding roles involve field visits to local retail markets in your city or region.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm">
            <h4 className="font-bold text-gray-900 text-base mb-2">Can this convert into a full-time role (PPO)?</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Yes! Top performing interns who demonstrate strong product ownership, speed, and problem solving are offered pre-placement offers (PPOs) and full-time core engineering or growth positions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
