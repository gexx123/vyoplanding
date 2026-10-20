"use client";

import Image from "next/image";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.vyop.app&referrer=utm_source%3Dwebsite%26utm_medium%3Dtool_cta";

interface ToolDownloadCTAProps {
  /** The name of the tool they just used, e.g. "GST Calculator" */
  toolName: string;
  /** A feature teaser for the app, e.g. "auto-calculate GST on every bill" */
  appFeature?: string;
}

export default function ToolDownloadCTA({ toolName, appFeature }: ToolDownloadCTAProps) {
  return (
    <section className="mt-12 mb-8 max-w-2xl mx-auto px-4">
      <div
        className="relative overflow-hidden rounded-2xl p-6 md:p-8"
        style={{
          background: "linear-gradient(135deg, #1E2340 0%, #2A3055 100%)",
          boxShadow: "0 12px 40px rgba(30,35,64,0.25)",
        }}
      >
        {/* Gold accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "var(--gradient-brand)" }}
        />

        {/* Decorative glow */}
        <div
          className="absolute -right-12 -top-12 w-40 h-40 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(212,149,42,0.5) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5">
          {/* Icon */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Vyop App"
              width={56}
              height={56}
              className="rounded-2xl"
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-white text-lg font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
              Liked the {toolName}?
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              {appFeature
                ? `Download Vyop to ${appFeature} — plus barcode scanning, voice billing, and inventory management. 100% free.`
                : `Get the full Vyop app with barcode scanning, voice billing, inventory, and khata management. 100% free to start.`}
            </p>
          </div>

          {/* CTA */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "var(--gradient-brand)",
              boxShadow: "var(--shadow-gold)",
              fontFamily: "var(--font-display)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.624-2.302 2.624-2.302zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
            </svg>
            Get Free App
          </a>
        </div>

        {/* Trust badges */}
        <div className="relative z-10 flex items-center justify-center sm:justify-start gap-4 mt-5 pt-4 border-t border-white/10">
          <span className="text-white/50 text-xs flex items-center gap-1">
            <span className="text-yellow-400">★</span> 5.0 Rating
          </span>
          <span className="text-white/30">·</span>
          <span className="text-white/50 text-xs">100% Free</span>
          <span className="text-white/30">·</span>
          <span className="text-white/50 text-xs">Works Offline</span>
        </div>
      </div>
    </section>
  );
}
