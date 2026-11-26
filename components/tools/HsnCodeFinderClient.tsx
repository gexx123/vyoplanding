"use client";

import { useState } from "react";

export interface HsnRecord {
  hsn: string;
  item: string;
  category: string;
  rate: number;
  description: string;
}

const CATEGORIES = ["All", "Grocery", "Clothing", "Electronics", "Pharmacy", "Hardware", "Food Service"];

export default function HsnCodeFinderClient({ records }: { records: HsnRecord[] }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedHsn, setCopiedHsn] = useState<string | null>(null);

  const filtered = records.filter((rec) => {
    const matchesCat = selectedCategory === "All" || rec.category === selectedCategory;
    const query = search.toLowerCase();
    const matchesSearch =
      rec.hsn.includes(query) ||
      rec.item.toLowerCase().includes(query) ||
      rec.description.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  const handleCopy = (hsn: string) => {
    navigator.clipboard.writeText(hsn);
    setCopiedHsn(hsn);
    setTimeout(() => setCopiedHsn(null), 2000);
  };

  return (
    <>
      {/* Search & Filter Controls */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200 mb-6">
        <div className="relative mb-5">
          <span className="absolute left-4 top-3.5 text-gray-400 text-lg">🔎</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by item name or HSN code (e.g. Atta, Mobile, Shirt, 1006)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-300 font-semibold text-gray-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-base"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-amber-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center mb-4 px-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
        <span>Showing {filtered.length} matching codes</span>
        <span>Click HSN to copy</span>
      </div>

      {/* Results Grid */}
      <div className="space-y-3 mb-12">
        {filtered.length > 0 ? (
          filtered.map((item, idx) => (
            <div
              key={`${item.hsn}-${idx}`}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <button
                    type="button"
                    onClick={() => handleCopy(item.hsn)}
                    className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 font-mono text-sm font-extrabold text-amber-800 hover:bg-amber-100 transition-colors"
                    title="Click to copy HSN"
                  >
                    HSN: {item.hsn}
                  </button>
                  {copiedHsn === item.hsn && (
                    <span className="text-xs text-emerald-600 font-bold">Copied!</span>
                  )}
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">
                    {item.category}
                  </span>
                </div>
                <h2 className="text-base font-bold text-gray-900 mb-1">{item.item}</h2>
                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </div>

              <div className="flex items-center gap-4 border-t md:border-t-0 pt-3 md:pt-0">
                <div className="text-right">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">GST 2.0 Rate</span>
                  <span
                    className={`text-xl font-extrabold ${
                      item.rate === 0
                        ? "text-emerald-600"
                        : item.rate <= 5
                        ? "text-blue-600"
                        : item.rate <= 18
                        ? "text-amber-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.rate}%
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-gray-200 p-8">
            <span className="text-4xl block mb-2">🔍</span>
            <h3 className="text-lg font-bold text-gray-800 mb-1">No HSN codes found for &quot;{search}&quot;</h3>
            <p className="text-sm text-gray-500">Try searching for a generic category like Rice, Cloth, or Paint.</p>
          </div>
        )}
      </div>
    </>
  );
}
