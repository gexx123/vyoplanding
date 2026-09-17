"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { cities, CityData } from "@/lib/cityData";

const REGIONS: Record<string, string[]> = {
  Metros: ["delhi", "mumbai", "bangalore", "hyderabad", "chennai", "kolkata", "pune", "ahmedabad", "jaipur", "surat"],
  West: ["Maharashtra", "Gujarat", "Rajasthan", "Goa"],
  South: ["Karnataka", "Tamil Nadu", "Telangana", "Kerala", "Andhra Pradesh"],
  North: ["Delhi", "Haryana", "Punjab", "Uttar Pradesh", "Uttarakhand"],
  "Central & East": ["Madhya Pradesh", "Chhattisgarh", "Bihar", "Odisha", "Jharkhand", "Assam", "West Bengal"],
};

export default function CityDirectory() {
  const [search, setSearch] = useState("");
  const [activeRegion, setActiveRegion] = useState("All");

  const filteredCities = useMemo(() => {
    return cities.filter((city) => {
      const matchesSearch =
        city.name.toLowerCase().includes(search.toLowerCase()) ||
        city.state.toLowerCase().includes(search.toLowerCase()) ||
        city.hubFocus.toLowerCase().includes(search.toLowerCase());

      if (!matchesSearch) return false;

      if (activeRegion === "All") return true;
      if (activeRegion === "Metros") {
        return REGIONS.Metros.includes(city.slug);
      }
      const allowedStates = REGIONS[activeRegion];
      return allowedStates ? allowedStates.includes(city.state) : true;
    });
  }, [search, activeRegion]);

  return (
    <div className="w-full">
      {/* Search and Region Filter Controls */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your city or state (e.g. Bangalore, Surat, Maharashtra)..."
            className="w-full px-6 py-4 pl-12 rounded-2xl bg-white border border-[var(--border-medium)] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent shadow-sm text-base"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm font-medium"
            >
              Clear
            </button>
          )}
        </div>

        {/* Region Filter Chips */}
        <div className="flex flex-wrap gap-2 justify-center">
          {["All", "Metros", "West", "South", "North", "Central & East"].map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeRegion === region
                  ? "bg-[var(--brand-primary)] text-white shadow-sm"
                  : "bg-white border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              {region} {region === "All" ? `(${cities.length})` : ""}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border-subtle)]">
        <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
          {activeRegion === "All" ? "All Commercial Hubs" : `${activeRegion} Cities`}
          <span className="ml-2 text-sm font-normal text-[var(--text-muted)]">
            ({filteredCities.length} {filteredCities.length === 1 ? "city" : "cities"} found)
          </span>
        </h2>
        {search && (
          <span className="text-xs text-[var(--text-secondary)]">
            Filtered by &quot;{search}&quot;
          </span>
        )}
      </div>

      {/* City Cards Grid */}
      {filteredCities.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city: CityData) => (
            <Link
              key={city.slug}
              href={`/billing-software/${city.slug}`}
              className="group bg-white p-6 rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--brand-primary)]/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[var(--brand-primary)] transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                    {city.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-600">
                    {city.state}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mb-4">
                  Known for <span className="font-medium text-gray-800">{city.hubFocus}</span> retail & wholesale markets.
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[var(--brand-primary)]">
                <span>Explore Billing in {city.name}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-200">
          <p className="text-lg font-semibold text-gray-700 mb-2">No cities found matching &quot;{search}&quot;</p>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            Vyop works anywhere in India! You can use our app for any shop or city.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setActiveRegion("All");
            }}
            className="px-6 py-2.5 rounded-xl bg-[var(--brand-primary)] text-white text-sm font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
