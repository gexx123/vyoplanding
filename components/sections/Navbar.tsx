"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down past the hero section, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[100] transition-all duration-300"
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.8)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid var(--border-medium)"
          : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.svg"
            alt="Vyop Logo"
            width={36}
            height={36}
            priority
            className="rounded-xl transition-transform group-hover:scale-105"
          />
          <span
            className="text-xl font-semibold"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
              fontSize: "22px",
            }}
          >
            Vyop
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors duration-200 hover:text-[var(--brand-primary)] text-[14px]"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-secondary)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://vyop.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2.5 rounded-full text-white text-sm font-bold transition-all duration-200 hover:scale-[1.03]"
            style={{
              background: "var(--gradient-brand)",
              fontFamily: "var(--font-display)",
              boxShadow: "var(--shadow-gold)",
            }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
            style={{ background: "var(--text-primary)" }}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
            style={{ background: "var(--text-primary)" }}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
            style={{ background: "var(--text-primary)" }}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.98)",
              borderBottom: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://play.google.com/store/apps/details?id=com.vyop.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-[12px] bg-black text-white transition-all duration-200 hover:scale-[1.03] self-center"
                style={{
                  boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                }}
              >
                <svg width="20" height="22" viewBox="0 0 22 24" fill="none">
                  <path d="M1 1l10 11L1 23V1z" fill="#4285F4" stroke="#4285F4" strokeWidth="0.5" />
                  <path d="M1 1l14 8-4 4L1 1z" fill="#34A853" />
                  <path d="M1 23l10-12 4 4-14 8z" fill="#EA4335" />
                  <path d="M15 9l5 3-5 3-4-3 4-3z" fill="#FBBC05" />
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <div className="text-[9px] leading-[1.1] font-medium" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body)", letterSpacing: "0.5px" }}>
                    GET IT ON
                  </div>
                  <div className="text-[15px] font-semibold leading-[1.1]" style={{ fontFamily: "var(--font-display)" }}>
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
