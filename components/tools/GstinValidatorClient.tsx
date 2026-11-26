"use client";

import { useState } from "react";

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

export default function GstinValidatorClient() {
  const [gstin, setGstin] = useState("");
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
    <>
      {/* Input Card */}
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-200 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
            Enter 15-Digit GST Identification Number (GSTIN)
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setGstin("29ABCDE1234F1Z5")}
              className="text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 px-3 py-1 rounded-lg border border-amber-200 transition-colors"
            >
              Load Sample Format
            </button>
            {cleanGstin.length > 0 && (
              <button
                type="button"
                onClick={() => setGstin("")}
                className="text-xs font-semibold text-gray-500 hover:text-gray-700 px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            maxLength={15}
            value={gstin}
            onChange={(e) => setGstin(e.target.value.toUpperCase())}
            placeholder="e.g. 27AABCU9603R1ZM"
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
          <div className="text-center py-4 text-xs text-gray-500">
            Enter a 15-character GSTIN above to inspect its state code, embedded PAN, and format validity.
          </div>
        )}
      </div>

      {/* State Code Quick Directory */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 mb-10">
        <h2 className="text-xl font-bold font-display text-gray-900 mb-4">
          India GST State Code Reference Directory
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
          {Object.entries(STATE_CODES).map(([code, state]) => (
            <button
              type="button"
              key={code}
              onClick={() => setGstin(`${code}ABCDE1234F1Z5`)}
              className="p-2.5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-amber-50 hover:border-amber-300 text-left transition-colors"
            >
              <strong className="text-amber-800 font-mono mr-1.5">{code}</strong>
              <span className="text-gray-700">{state}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
