"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.vyop.app&referrer=utm_source%3Dwebsite%26utm_medium%3Dsticky_bar";

export default function AppDownloadBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    // Don't show on desktop
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (!isMobile) return;

    // Check if dismissed within last 24 hours
    const dismissedAt = localStorage.getItem("vyop_bar_dismissed");
    if (dismissedAt && Date.now() - parseInt(dismissedAt) < 24 * 60 * 60 * 1000) {
      return;
    }

    setDismissed(false);

    // Show after 2 seconds
    const timer = setTimeout(() => setVisible(true), 2000);

    // Hide/show on scroll direction
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 200) {
        setVisible(true); // scrolling down
      } else if (currentScroll < lastScroll - 20) {
        setVisible(false); // scrolling up fast
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
    localStorage.setItem("vyop_bar_dismissed", Date.now().toString());
  };

  if (dismissed) return null;

  return (
    <div
      id="app-download-bar"
      className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-out"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
      }}
    >
      {/* Gradient border top */}
      <div
        className="h-[2px] w-full"
        style={{ background: "var(--gradient-brand)" }}
      />

      <div
        className="px-4 py-3 flex items-center gap-3"
        style={{
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          aria-label="Dismiss download banner"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* App icon */}
        <Image
          src="/logo.png"
          alt="Vyop App"
          width={40}
          height={40}
          className="rounded-xl flex-shrink-0"
          style={{ boxShadow: "var(--shadow-sm)" }}
        />

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-bold truncate"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Vyop POS
          </p>
          <p
            className="text-xs truncate"
            style={{ color: "var(--text-secondary)" }}
          >
            Free Barcode Billing App ⭐ 5.0
          </p>
        </div>

        {/* CTA Button */}
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-5 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: "var(--gradient-brand)",
            boxShadow: "var(--shadow-gold)",
            fontFamily: "var(--font-display)",
          }}
        >
          Install
        </a>
      </div>
    </div>
  );
}
