"use client";

import { ArrowDown } from "lucide-react";

interface ShopTypeCard {
  id: string;
  name: string;
  imageUrl?: string;
}

const SHOP_TYPES: ShopTypeCard[] = [
  { id: "kirana", name: "Kirana", imageUrl: "/shoptypes/kirana.webp" },
  { id: "vegetable", name: "Vegetable", imageUrl: "/shoptypes/vegetable.webp" },
  { id: "medical", name: "Medical", imageUrl: "/shoptypes/medical.webp" },
  { id: "hardware", name: "Hardware", imageUrl: "/shoptypes/hardware.webp" },
  { id: "clothing", name: "Clothing", imageUrl: "/shoptypes/clothing.webp" },
  { id: "electronics", name: "Electronics", imageUrl: "/shoptypes/electronics.webp" },
  { id: "stationery", name: "Stationery", imageUrl: "/shoptypes/stationery.webp" },
  { id: "footwear", name: "Footwear", imageUrl: "/shoptypes/footwear.webp" },
  { id: "electrical", name: "Electrical", imageUrl: "/shoptypes/electrical.webp" },
  { id: "cosmetics", name: "Cosmetics", imageUrl: "/shoptypes/cosmetics.webp" },
  { id: "salon", name: "Salon", imageUrl: "/shoptypes/salon.webp" },
  { id: "autoparts", name: "Auto Parts", imageUrl: "/shoptypes/autoparts.webp" },
  { id: "bike-dealership", name: "Bike Dealership", imageUrl: "/shoptypes/bike-dealership.webp" },
  { id: "car-dealership", name: "Car Dealership", imageUrl: "/shoptypes/car-dealership.webp" },
  { id: "restaurant", name: "Restaurant", imageUrl: "/shoptypes/restaurant.webp" },
  { id: "hotel", name: "Hotel", imageUrl: "/shoptypes/hotel.webp" },
  { id: "jewellery", name: "Jewellery", imageUrl: "/shoptypes/jewellery.webp" },
  { id: "dairy", name: "Dairy", imageUrl: "/shoptypes/dairy.webp" },
  { id: "bakery", name: "Bakery", imageUrl: "/shoptypes/bakery.webp" },
  { id: "mobile-shop", name: "Mobile Shop", imageUrl: "/shoptypes/mobile-shop.webp" },
  { id: "other", name: "Other", imageUrl: "/shoptypes/other.webp" },
];

const FULL_BLEED_SHOPS = new Set([
  "kirana",
  "bike-dealership",
  "car-dealership",
  "restaurant",
  "hotel",
  "jewellery",
  "dairy",
  "bakery",
  "mobile-shop",
  "other",
]);

export default function ShopTypeSelectorSection() {
  const scrollToDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const demoEl = document.getElementById("demo");
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pt-36 sm:pt-40 pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50/60 via-white to-gray-50/40 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-radial from-amber-200/40 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Section Heading */}
        <h1
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What Type of Shop Do You Run?
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          Select your shop type below to test-drive your live 0% commission online storefront with counter inventory, table QR, and WhatsApp orders.
        </p>

        {/* 21 Shop Type Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 text-left">
          {SHOP_TYPES.map((shop) => {
            const isFullBleed = FULL_BLEED_SHOPS.has(shop.id);

            return (
              <a
                key={shop.id}
                href="#demo"
                onClick={scrollToDemo}
                className="rounded-2xl bg-white border border-gray-200/90 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer overflow-hidden"
              >
                {/* Image Container: Full-bleed object-cover for storefront scenes, object-contain for product clusters */}
                <div
                  className={`w-full aspect-[4/3] border-b border-gray-100 group-hover:bg-amber-50/30 transition-all flex items-center justify-center overflow-hidden relative ${
                    isFullBleed ? "bg-gray-50 p-0" : "bg-gray-50/70 p-2 sm:p-2.5"
                  }`}
                >
                  {shop.imageUrl ? (
                    <img
                      src={shop.imageUrl}
                      alt={shop.name}
                      className={`w-full h-full transition-transform duration-300 ${
                        isFullBleed
                          ? "object-cover scale-105 group-hover:scale-110"
                          : "object-contain drop-shadow-2xs group-hover:scale-105"
                      }`}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-1.5 text-gray-300 group-hover:text-amber-400 transition-colors">
                      <svg
                        className="w-7 h-7 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[10px] font-semibold tracking-wider uppercase">Photo</span>
                    </div>
                  )}
                </div>

                {/* Shop Type Name Section (Below horizontal line) */}
                <div className="p-3 sm:px-3.5 sm:py-3 flex items-center justify-between text-xs sm:text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors bg-white">
                  <span className="truncate" style={{ fontFamily: "var(--font-display)" }}>
                    {shop.name}
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-amber-600 group-hover:translate-y-0.5 transition-all shrink-0 ml-1">
                    ↓
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Direct Scroll Hint */}
        <div className="mt-8 flex items-center justify-center">
          <a
            href="#demo"
            onClick={scrollToDemo}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500 hover:text-amber-600 transition-colors px-4 py-2 rounded-full hover:bg-amber-50"
          >
            <span>Or scroll directly to live interactive app demo</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
