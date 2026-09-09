"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

const STATE_CODES: Record<string, string> = {
  "01": "Jammu and Kashmir",
  "02": "Himachal Pradesh",
  "03": "Punjab",
  "04": "Chandigarh",
  "05": "Uttarakhand",
  "06": "Haryana",
  "07": "Delhi",
  "08": "Rajasthan",
  "09": "Uttar Pradesh",
  "10": "Bihar",
  "11": "Sikkim",
  "12": "Arunachal Pradesh",
  "13": "Nagaland",
  "14": "Manipur",
  "15": "Mizoram",
  "16": "Tripura",
  "17": "Meghalaya",
  "18": "Assam",
  "19": "West Bengal",
  "20": "Jharkhand",
  "21": "Odisha",
  "22": "Chhattisgarh",
  "23": "Madhya Pradesh",
  "24": "Gujarat",
  "25": "Daman and Diu",
  "26": "Dadra and Nagar Haveli",
  "27": "Maharashtra",
  "28": "Andhra Pradesh (Old)",
  "29": "Karnataka",
  "30": "Goa",
  "31": "Lakshadweep",
  "32": "Kerala",
  "33": "Tamil Nadu",
  "34": "Puducherry",
  "35": "Andaman and Nicobar Islands",
  "36": "Telangana",
  "37": "Andhra Pradesh (New)",
  "38": "Ladakh",
};

const ENTITY_TYPES: Record<string, string> = {
  P: "Individual / Sole Proprietorship",
  C: "Company (Private or Public Ltd)",
  H: "Hindu Undivided Family (HUF)",
  F: "Partnership Firm / LLP",
  A: "Association of Persons (AOP)",
  T: "Trust",
  B: "Body of Individuals (BOI)",
  L: "Local Authority",
  J: "Artificial Juridical Person",
  G: "Government Agency",
};

export default function GstinValidatorPage() {
  const [gstin, setGstin] = useState("08AAAAA0000A1Z5");
  const cleanGstin = gstin.trim().toUpperCase();

  // GSTIN Validation Regex: 2 digits + 5 letters + 4 digits + 1 letter + 1 char (1-9/A-Z) + 'Z' + 1 char
  const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  const isValidFormat = gstinRegex.test(cleanGstin);

  const stateCode = cleanGstin.slice(0, 2);
  const stateName = STATE_CODES[stateCode] || null;

  const panNumber = cleanGstin.length >= 12 ? cleanGstin.slice(2, 12) : null;
  const entityChar = panNumber && panNumber.length === 10 ? panNumber[3] : null;
  const entityType = entityChar ? ENTITY_TYPES[entityChar] || "Other Registered Entity" : null;

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-36 pb-20 px-4 md:px-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>🛡️</span> GST Verification Tool
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display mb-4 text-gray-900">
            GSTIN Validator & <span className="gradient-text">State Code Search</span>
          </h1>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Verify the 15-digit Indian GST number format, extract the registered state, identify taxpayer entity type, and prevent fake invoices.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-200 mb-10">
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            Enter 15-Digit GST Identification Number (GSTIN)
          </label>
          <div className="relative mb-6">
            <input
              type="text"
              maxLength={15}
              value={gstin}
              onChange={(e) => setGstin(e.target.value.toUpperCase())}
              placeholder="e.g. 08AAAAA0000A1Z5"
              className="w-full px-5 py-4 rounded-2xl border border-gray-300 font-mono font-black text-xl md:text-2xl text-gray-900 uppercase tracking-widest focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
            <span className="absolute right-5 top-4 text-xs font-bold text-gray-400">
              {cleanGstin.length}/15
            </span>
          </div>

          {/* Quick GSTIN Breakdown Visualizer */}
          {cleanGstin.length > 0 && (
            <div className="mb-8 p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-3">
                GSTIN Structure Breakdown
              </span>
              <div className="flex flex-wrap gap-2 text-center font-mono">
                <div className="p-2 rounded-xl bg-amber-100 border border-amber-300">
                  <span className="block text-base font-bold text-amber-900">{cleanGstin.slice(0, 2) || "--"}</span>
                  <span className="text-[10px] text-amber-700 font-sans">State Code</span>
                </div>
                <div className="p-2 rounded-xl bg-blue-100 border border-blue-300 flex-1 min-w-[120px]">
                  <span className="block text-base font-bold text-blue-900">{cleanGstin.slice(2, 12) || "----------"}</span>
                  <span className="text-[10px] text-blue-700 font-sans">Business PAN Card</span>
                </div>
                <div className="p-2 rounded-xl bg-purple-100 border border-purple-300">
                  <span className="block text-base font-bold text-purple-900">{cleanGstin.slice(12, 13) || "-"}</span>
                  <span className="text-[10px] text-purple-700 font-sans">Entity #</span>
                </div>
                <div className="p-2 rounded-xl bg-gray-200 border border-gray-300">
                  <span className="block text-base font-bold text-gray-800">{cleanGstin.slice(13, 14) || "Z"}</span>
                  <span className="text-[10px] text-gray-600 font-sans">Default &apos;Z&apos;</span>
                </div>
                <div className="p-2 rounded-xl bg-emerald-100 border border-emerald-300">
                  <span className="block text-base font-bold text-emerald-900">{cleanGstin.slice(14, 15) || "-"}</span>
                  <span className="text-[10px] text-emerald-700 font-sans">Checksum</span>
                </div>
              </div>
            </div>
          )}

          {/* Validation Result Box */}
          {cleanGstin.length === 15 ? (
            <div
              className={`p-6 rounded-2xl border ${
                isValidFormat && stateName
                  ? "bg-emerald-50/70 border-emerald-300"
                  : "bg-red-50/70 border-red-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{isValidFormat && stateName ? "✅" : "❌"}</span>
                <div>
                  <h3
                    className={`text-lg font-bold ${
                      isValidFormat && stateName ? "text-emerald-900" : "text-red-900"
                    }`}
                  >
                    {isValidFormat && stateName
                      ? "Valid GSTIN Structure"
                      : "Invalid GSTIN Format or State Code"}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {isValidFormat && stateName
                      ? "This number conforms to the official Indian GST 15-character statutory structure."
                      : "The characters do not match official GST rules (State Code + PAN + Entity Code + Z + Checksum)."}
                  </p>
                </div>
              </div>

              {isValidFormat && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-emerald-200 text-sm">
                  <div>
                    <span className="text-xs text-gray-500 font-medium block">Registered State:</span>
                    <strong className="text-gray-900">{stateName || "Unknown State Code"}</strong>
                    <span className="text-xs text-gray-400 block font-mono">Code: {stateCode}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium block">Associated PAN:</span>
                    <strong className="text-gray-900 font-mono">{panNumber}</strong>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium block">Business Constitution:</span>
                    <strong className="text-gray-900">{entityType || "Standard Entity"}</strong>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-4 text-xs text-gray-400">
              Enter all 15 characters to see complete validation and state details.
            </div>
          )}
        </div>

        {/* State Code Quick Directory */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 mb-12">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-4">
            India GST State Code Reference Directory
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
            {Object.entries(STATE_CODES).map(([code, state]) => (
              <div
                key={code}
                onClick={() => setGstin(`${code}AAAAA0000A1Z5`)}
                className="p-2.5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-amber-50 hover:border-amber-300 cursor-pointer transition-colors"
              >
                <strong className="text-amber-800 font-mono mr-1.5">{code}</strong>
                <span className="text-gray-700">{state}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-xl text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
            Automatic GST Validation
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 font-display">
            Never Manually Verify a GSTIN Again!
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
            When you enter a customer or vendor GSTIN in Vyop POS, the app instantly verifies the number, calculates intra/inter-state tax splits (CGST/SGST vs IGST), and creates compliant tax invoices in 5 seconds. 100% Free Forever.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white font-bold text-sm hover:scale-105 transition-transform shadow-lg"
          >
            Download Vyop Free on Google Play →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
