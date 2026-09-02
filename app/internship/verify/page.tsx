"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  Calendar,
  Award,
  Sparkles,
  Printer,
  Copy,
  Check,
  ArrowLeft,
  Search,
  CheckCircle,
} from "lucide-react";
import { VerifiedIntern, findVerifiedInternLocally } from "@/lib/verifiedInterns";
import { generateCode128Svg } from "@/lib/barcodeSvg";

function VerifyContent() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get("id") || searchParams.get("query") || "";

  const [searchId, setSearchId] = useState(initialId);
  const [intern, setIntern] = useState<VerifiedIntern | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialId) {
      performVerification(initialId);
    }
  }, [initialId]);

  const performVerification = async (queryId: string) => {
    const clean = queryId.trim();
    if (!clean) return;

    setLoading(true);
    setError(null);
    setIntern(null);

    try {
      const res = await fetch(`/api/verify-intern?id=${encodeURIComponent(clean)}`);
      const data = await res.json();

      if (res.ok && data.verified && data.intern) {
        setIntern(data.intern);
      } else {
        // Check local database
        const local = findVerifiedInternLocally(clean);
        if (local) {
          setIntern(local);
        } else {
          setError(data.message || `No certificate record found for "${clean}".`);
        }
      }
    } catch (err) {
      console.error(err);
      const local = findVerifiedInternLocally(clean);
      if (local) {
        setIntern(local);
      } else {
        setError("Unable to connect to verification server. Please verify the ID or try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Search Header */}
      <div className="mb-8 print:hidden">
        <Link
          href="/internship"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--brand-primary)] font-medium mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Internship Portal
        </Link>

        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[var(--border-subtle)] shadow-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              performVerification(searchId);
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter Certificate ID (e.g. VYOP-INT-2026-001)..."
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[var(--brand-primary)] text-sm font-medium"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3.5 rounded-xl text-white font-bold text-sm shadow-[var(--shadow-gold)] hover:scale-[1.02] transition-all disabled:opacity-60 cursor-pointer"
              style={{ background: "var(--gradient-brand)" }}
            >
              {loading ? "Verifying..." : "Verify Certificate"}
            </button>
          </form>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="text-center py-16 bg-white rounded-3xl border border-[var(--border-subtle)] shadow-sm">
          <div className="w-10 h-10 border-3 border-[var(--brand-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <h3 className="font-bold text-gray-900 text-lg">Verifying Certificate Authenticity...</h3>
          <p className="text-xs text-gray-500 mt-1">Cross-referencing Vyop cryptographic records</p>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="p-8 bg-red-50 border border-red-200 rounded-3xl text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 text-red-600 font-bold">
            !
          </div>
          <h3 className="font-bold text-red-900 text-lg mb-1">Verification Failed</h3>
          <p className="text-sm text-red-700 max-w-md mx-auto">{error}</p>
        </div>
      )}

      {/* Verified Certificate Viewer */}
      {intern && !loading && (
        <div className="bg-white rounded-3xl border-2 border-emerald-500 shadow-2xl overflow-hidden print:shadow-none print:border-gray-400">
          {/* Top Verification Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center text-white">
                <ShieldCheck size={32} />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/40 border border-emerald-300/50 text-xs font-bold uppercase tracking-wider mb-1">
                  <CheckCircle size={14} />
                  Verified Credential Record
                </div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Internship Certificate of Completion
                </h1>
                <p className="text-xs text-emerald-100 mt-0.5">Vyop AI • India</p>
              </div>
            </div>

            <div className="sm:text-right bg-white/10 px-4 py-2.5 rounded-xl border border-white/20">
              <div className="text-[10px] text-emerald-200 uppercase tracking-wider font-semibold">Certificate ID</div>
              <div className="font-mono font-black text-lg text-white">{intern.certificateId}</div>
            </div>
          </div>

          {/* Certificate Content Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Candidate Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-gray-100">
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">This certifies that</div>
                <div className="text-3xl sm:text-4xl font-black text-gray-900 mt-1" style={{ fontFamily: "var(--font-display)" }}>
                  {intern.fullName}
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-2 mt-1 font-medium">
                  <Building2 size={16} className="text-gray-400" />
                  {intern.college}
                  {intern.degree && <span className="text-gray-400">• {intern.degree}</span>}
                </div>
              </div>

              <div className="sm:text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Internship Role</div>
                <div className="text-xl font-bold text-gray-900 mt-1">{intern.role}</div>
                <div className="inline-flex items-center gap-2 mt-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    {intern.department}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {intern.status}
                  </span>
                  {intern.grade && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200">
                      {intern.grade}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Engagement Details */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 text-sm">
              <div>
                <span className="text-gray-500 text-xs font-semibold block">Duration</span>
                <span className="font-bold text-gray-900">{intern.duration}</span>
              </div>
              <div>
                <span className="text-gray-500 text-xs font-semibold block">Start Date</span>
                <span className="font-bold text-gray-900">{intern.startDate}</span>
              </div>
              <div>
                <span className="text-gray-500 text-xs font-semibold block">End Date</span>
                <span className="font-bold text-gray-900">{intern.endDate}</span>
              </div>
              <div>
                <span className="text-gray-500 text-xs font-semibold block">Issue Date</span>
                <span className="font-bold text-gray-900">{intern.issueDate}</span>
              </div>
            </div>

            {/* Project Deliverables */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Sparkles size={16} className="text-[var(--brand-primary)]" />
                Verified Project & Deliverables
              </h3>
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
                <h4 className="font-bold text-gray-900 text-base mb-1.5">{intern.projectTitle}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{intern.projectDescription}</p>
              </div>
            </div>

            {/* Skills Acquired */}
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Verified Competencies</div>
              <div className="flex flex-wrap gap-2">
                {intern.skillsAcquired.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-gray-100 text-gray-800 font-semibold text-xs border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Signatures & Seal */}
            <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              {/* Left: QR Code + Verified Digital Text (No green icon, no outline) */}
              <div className="flex items-center gap-3.5 text-left">
                {/* QR Code */}
                <Link
                  href={`/internship/verify?id=${intern.certificateId}`}
                  className="p-0 bg-transparent transition-all hover:scale-105 group text-center cursor-pointer inline-block flex-shrink-0"
                  title="Official Verified QR Credential"
                >
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
                      `https://vyop.in/internship/verify?id=${intern.certificateId}`
                    )}`}
                    alt="Verification QR Code"
                    className="w-13 h-13 object-contain"
                  />
                </Link>

                {/* Verified Digital Text */}
                <div>
                  <div className="text-[11px] font-black text-emerald-700 uppercase tracking-wider">
                    Verified Digital Credential
                  </div>
                  <div className="text-[9px] text-gray-500 font-mono font-medium">
                    vyop.in/internship/verify?id={intern.certificateId}
                  </div>
                  <div className="text-[8px] font-bold text-amber-700 uppercase tracking-wider mt-0.5">
                    Authentic Registry Entry
                  </div>
                </div>
              </div>

              {/* Right: Authorized Signatory */}
              <div className="text-left sm:text-right">
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Authorized Signatory</div>
                <div className="font-serif italic text-base font-bold text-gray-900 border-b-2 border-gray-900 pb-0.5 inline-block mt-1">
                  Founder & Lead Architect
                </div>
                <div className="text-xs font-bold text-gray-800 mt-1">Founder, Vyop AI</div>
                <div className="text-[10px] text-emerald-700 font-semibold">Official Credential Verification</div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto print:hidden">
                <button
                  onClick={handleCopyLink}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-emerald-600" />
                      Link Copied
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy Link
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-black transition-colors cursor-pointer"
                >
                  <Printer size={16} />
                  Print / Save PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No query loaded yet */}
      {!initialId && !intern && !loading && (
        <div className="text-center py-16 bg-white rounded-3xl border border-[var(--border-subtle)] shadow-sm">
          <Award size={48} className="text-[var(--brand-primary)] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Vyop AI Certificate Verification Registry</h2>
          <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
            Enter a student Certificate ID or Intern ID above to authenticate credentials issued by Vyop AI.
          </p>
        </div>
      )}
    </div>
  );
}

export default function VerifyCertificatePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />
      <div className="pt-28">
        <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading verification tool...</div>}>
          <VerifyContent />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
