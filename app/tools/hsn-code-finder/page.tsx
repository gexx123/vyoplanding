"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

interface HsnRecord {
  hsn: string;
  item: string;
  category: string;
  rate: number;
  description: string;
}

const HSN_DATABASE: HsnRecord[] = [
  // Grocery & Food
  { hsn: "1006", item: "Rice (Basmati & Non-Basmati)", category: "Grocery", rate: 5, description: "Pre-packaged & labelled rice. Unbranded/loose is 0% GST." },
  { hsn: "1101", item: "Wheat Flour (Atta / Maida)", category: "Grocery", rate: 5, description: "Pre-packaged & labelled wheat flour. Loose is 0%." },
  { hsn: "0713", item: "Pulses & Dal (Toor, Moong, Chana)", category: "Grocery", rate: 5, description: "Pre-packaged and labelled dried leguminous pulses. Loose is 0%." },
  { hsn: "0401", item: "Fresh Milk & Curd (Dahi)", category: "Grocery", rate: 0, description: "Fresh pasteurized or unpasteurized milk, curd (loose/unlabelled)." },
  { hsn: "0402", item: "Milk Powder & Condensed Milk", category: "Grocery", rate: 5, description: "Concentrated milk powder, sweetened condensed milk." },
  { hsn: "0405", item: "Butter & Ghee", category: "Grocery", rate: 12, description: "Butter, dairy spreads, pure desi ghee." },
  { hsn: "0406", item: "Paneer & Cheese", category: "Grocery", rate: 5, description: "Pre-packaged paneer and cheese. Loose fresh paneer is 0%." },
  { hsn: "1507", item: "Edible Cooking Oil (Soybean, Mustard, Sunflower)", category: "Grocery", rate: 5, description: "Vegetable edible cooking oils of all varieties." },
  { hsn: "1701", item: "Sugar & Jaggery (Gur)", category: "Grocery", rate: 5, description: "Cane or beet sugar in solid form. Jaggery is 0%." },
  { hsn: "0902", item: "Tea (Chai Patti)", category: "Grocery", rate: 5, description: "Black tea, green tea, flavoured tea leaves." },
  { hsn: "0901", item: "Coffee Beans & Ground Coffee", category: "Grocery", rate: 5, description: "Roasted coffee beans, ground coffee powder." },
  { hsn: "2501", item: "Salt (Namak)", category: "Grocery", rate: 0, description: "Common salt, iodized salt, rock salt." },
  { hsn: "0910", item: "Spices (Ginger, Turmeric, Masala)", category: "Grocery", rate: 5, description: "Haldi, jeera, dhaniya, mixed garam masala." },
  { hsn: "1905", item: "Biscuits, Bread & Bakery Products", category: "Grocery", rate: 18, description: "Sweet biscuits, cookies, cakes. Plain loaf bread is 0%." },
  { hsn: "2106", item: "Namkeen, Bhujia & Roasted Snacks", category: "Grocery", rate: 12, description: "Packaged namkeen, bhujia, mixtures, chivda." },
  { hsn: "1806", item: "Chocolates & Cocoa Confectionery", category: "Grocery", rate: 18, description: "Chocolate bars, toffees, cocoa spreads." },
  { hsn: "2201", item: "Packaged Drinking Water (20L Jar / Bottle)", category: "Grocery", rate: 18, description: "Mineral water, sealed water bottles & bubble jars." },
  { hsn: "2202", item: "Carbonated Cold Drinks (Soda, Cola)", category: "Grocery", rate: 28, description: "Soft drinks, energy drinks (includes 12% compensation cess)." },

  // Clothing & Footwear
  { hsn: "6203", item: "Men's T-Shirts, Shirts & Trousers", category: "Clothing", rate: 5, description: "Cotton garments with sale value up to ₹1,000 per piece." },
  { hsn: "6204", item: "Women's Sarees, Suits & Kurtis", category: "Clothing", rate: 5, description: "Suits, lehengas, kurtis up to ₹1,000 per piece. (Above ₹1,000 is 12%)." },
  { hsn: "6403", item: "Footwear (Shoes, Sandals, Chappals)", category: "Clothing", rate: 12, description: "Leather & synthetic shoes, sports footwear." },
  { hsn: "6402", item: "Rubber Hawai Chappals", category: "Clothing", rate: 12, description: "Rubber and plastic slippers with sale value below ₹1,000." },
  { hsn: "5208", item: "Cotton Fabrics & Dress Materials", category: "Clothing", rate: 5, description: "Woven cotton fabric by the metre." },

  // Electronics & Mobile
  { hsn: "8517", item: "Smartphones & Mobile Phones", category: "Electronics", rate: 18, description: "Mobile handsets, cellular phones of all brands." },
  { hsn: "8504", item: "Mobile Chargers, Adapters & Power Banks", category: "Electronics", rate: 18, description: "Electrical transformers, USB phone chargers." },
  { hsn: "8518", item: "Earphones, Headphones & Bluetooth Speakers", category: "Electronics", rate: 18, description: "Wireless earbuds, neckbands, soundbars." },
  { hsn: "8471", item: "Laptops & Desktop Computers", category: "Electronics", rate: 18, description: "Automatic data processing machines, tablets." },
  { hsn: "8528", item: "LED Televisions & Monitors", category: "Electronics", rate: 18, description: "LED TVs up to 32 inches are 18%. Above 32 inches is 28%." },
  { hsn: "8418", item: "Refrigerators & Deep Freezers", category: "Electronics", rate: 18, description: "Household fridges, commercial cooling display units." },
  { hsn: "8415", item: "Air Conditioners (Split & Window AC)", category: "Electronics", rate: 28, description: "Inverter and non-inverter air conditioning machines." },

  // Pharmacy & Medical
  { hsn: "3004", item: "Medicines & Generic Formulations", category: "Pharmacy", rate: 12, description: "Tablets, syrups, capsules, antibiotics." },
  { hsn: "3002", item: "Life-Saving Vaccines & Insulin", category: "Pharmacy", rate: 5, description: "Diagnostic test kits, human vaccines, insulin." },
  { hsn: "9018", item: "Surgical Instruments, Syringes & BP Monitors", category: "Pharmacy", rate: 12, description: "Medical and surgical diagnostic apparatus." },
  { hsn: "3005", item: "Bandages, Gauze & Cotton Dressings", category: "Pharmacy", rate: 12, description: "Adhesive surgical plasters, sterile cotton roll." },
  { hsn: "3306", item: "Toothpaste & Dental Care", category: "Pharmacy", rate: 18, description: "Dentifrices, mouthwashes, dental floss." },

  // Hardware & Building
  { hsn: "7318", item: "Screws, Bolts, Nuts & Washers", category: "Hardware", rate: 18, description: "Iron and steel threaded fasteners." },
  { hsn: "8301", item: "Padlocks, Door Locks & Keys", category: "Hardware", rate: 18, description: "Base metal locks, brass godrej-type locks." },
  { hsn: "3208", item: "Paints, Enamels & Varnishes", category: "Hardware", rate: 18, description: "Synthetic enamel wall paints, distempers." },
  { hsn: "2523", item: "Cement (Portland & Pozzolana)", category: "Hardware", rate: 28, description: "Grey cement, white cement bags." },
  { hsn: "6907", item: "Ceramic Tiles & Marble Slabs", category: "Hardware", rate: 18, description: "Glazed vitrified floor and wall tiles." },
  { hsn: "8481", item: "Bathroom Taps, Valves & Sanitary Fittings", category: "Hardware", rate: 18, description: "Brass and chrome CP fittings, shower heads." },

  // Restaurant & Food Services
  { hsn: "9963", item: "Restaurant Dine-In & Takeaway (Non-AC/AC)", category: "Food Service", rate: 5, description: "Standard standalone restaurants, cafes, cloud kitchens (without ITC)." },
  { hsn: "9963", item: "Hotel Room Service (Room tariff ₹7,500+)", category: "Food Service", rate: 18, description: "Dining in hotels with room charges exceeding ₹7,500." },
];

const CATEGORIES = ["All", "Grocery", "Clothing", "Electronics", "Pharmacy", "Hardware", "Food Service"];

export default function HsnCodeFinderPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedHsn, setCopiedHsn] = useState<string | null>(null);

  const filtered = HSN_DATABASE.filter((rec) => {
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
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-36 pb-20 px-4 md:px-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>🔍</span> Free GST Search Tool
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display mb-4 text-gray-900">
            HSN Code & GST Rate <span className="gradient-text">Finder for Retail</span>
          </h1>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Search HSN codes and official GST tax slabs (0%, 5%, 12%, 18%, 28%) for thousands of retail, grocery, garment, and electronics items in India.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200 mb-8">
          <div className="relative mb-6">
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
                key={idx}
                className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <button
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
                  <h3 className="text-base font-bold text-gray-900 mb-1">{item.item}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                </div>

                <div className="flex items-center gap-4 border-t md:border-t-0 pt-3 md:pt-0">
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">GST Rate</span>
                    <span
                      className={`text-xl font-extrabold ${
                        item.rate === 0
                          ? "text-emerald-600"
                          : item.rate <= 5
                          ? "text-blue-600"
                          : item.rate <= 12
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

        {/* Direct App Upgrade Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-xl text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
            Auto-Detect HSN in Vyop
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 font-display">
            Never Search for an HSN Code Again!
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
            Vyop POS includes a pre-filled master catalog of 50,000+ FMCG, pharma, and grocery products. When you point your camera at a barcode or speak an item, the HSN code and GST tax slab are applied automatically.
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
