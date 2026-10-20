"use client";

import Image from "next/image";
import Link from "next/link";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.vyop.app&referrer=utm_source%3Dwebsite%26utm_medium%3Dblog_cta";

export default function BlogDownloadCTA({ postTitle }: { postTitle?: string }) {
  return (
    <section className="my-14 rounded-3xl overflow-hidden shadow-2xl border border-amber-200/50 bg-gradient-to-br from-[#121629] via-[#1a203d] to-[#0f1424] text-white p-8 md:p-10 relative">
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />

      {/* Background radial glow */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold tracking-wide uppercase mb-4">
            <span>⚡</span> 100% Free POS &amp; Billing App for Android
          </div>
          <h3
            className="text-2xl md:text-3xl font-extrabold text-white mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Upgrade Your Shop with Vyop POS Today
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
            Turn your smartphone into a fast barcode scanner, print thermal bills via Bluetooth, track udhar khata, and launch a 0% commission online store in 30 seconds.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-4 text-xs text-amber-200/90 font-medium">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg">
              ✓ Phone Camera Barcode Scanner
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg">
              ✓ AI Voice Billing (Hindi &amp; English)
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg">
              ✓ 2-Inch &amp; 3-Inch Thermal Print
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg">
              ✓ 0% Commission Storefront
            </span>
          </div>
        </div>

        {/* CTA Button Block */}
        <div className="flex-shrink-0 flex flex-col items-center gap-3">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3.5 px-7 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:scale-[1.03] shadow-lg"
            style={{
              background: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
              color: "#1E2340",
              boxShadow: "0 8px 28px rgba(245, 166, 35, 0.35)",
            }}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current flex-shrink-0">
              <path d="M3.609 1.814L13.793 12 3.61 22.186a2.023 2.023 0 0 1-.61-.925V2.739c.07-.354.29-.68.609-.925zM15.207 13.414l2.766 2.766-12.87 7.424 10.104-10.19zm0-2.828L5.103.396l12.87 7.424-2.766 2.766zm1.414 1.414l3.535-2.04a1.768 1.768 0 0 1 0 3.064l-3.535-2.024z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold tracking-wider opacity-80 leading-none">
                Install on Google Play
              </p>
              <p className="text-base font-extrabold leading-tight">Get Free Vyop App</p>
            </div>
          </a>

          <p className="text-xs text-white/60 flex items-center gap-1.5">
            <span className="text-amber-400">★★★★★</span> 4.9 Rating • 100% Free Forever
          </p>

          <div className="text-center mt-2">
            <Link
              href="/tools"
              className="text-xs text-amber-300/80 hover:text-amber-300 underline underline-offset-4 transition-colors"
            >
              Or explore our 9 Free Online Tools →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
