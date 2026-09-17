"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const billingDropdownCities = [
  { name: "Bangalore", slug: "bangalore" },
  { name: "Surat", slug: "surat" },
  { name: "Mumbai", slug: "mumbai" },
  { name: "Delhi", slug: "delhi" },
  { name: "Ahmedabad", slug: "ahmedabad" },
  { name: "Jaipur", slug: "jaipur" },
];

const navLinks = [
  { label: "Smart Billing", href: "/smart-billing-software", hasDropdown: true },
  { label: "POS App", href: "/pos-app" },
  { label: "Shop Types", href: "/solutions" },
  { label: "Compare", href: "/compare" },
  { label: "Free Tools", href: "/tools" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [billingDropdownOpen, setBillingDropdownOpen] = useState(false);
  const [mobileBillingExpanded, setMobileBillingExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
      }
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[100] transition-all duration-300"
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
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
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                    setBillingDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = setTimeout(() => setBillingDropdownOpen(false), 200);
                  }}
                >
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[var(--brand-primary)] text-[14px] font-medium inline-flex items-center gap-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {link.label}
                    <svg className={`w-3 h-3 transition-transform ${billingDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 4.5l3 3 3-3" />
                    </svg>
                  </Link>

                  <AnimatePresence>
                    {billingDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white rounded-2xl border border-gray-200 shadow-xl p-4 z-50"
                      >
                        <Link
                          href="/smart-billing-software"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 transition-colors mb-1"
                        >
                          <span className="text-lg">⚡</span>
                          <div>
                            <div className="text-sm font-bold text-gray-900">Smart Billing</div>
                            <div className="text-[11px] text-gray-500">Voice AI & barcode POS</div>
                          </div>
                        </Link>
                        <Link
                          href="/billing-software"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors mb-2"
                        >
                          <span className="text-lg">📍</span>
                          <div>
                            <div className="text-sm font-bold text-gray-900">Billing by City</div>
                            <div className="text-[11px] text-gray-500">65+ Indian commercial hubs</div>
                          </div>
                        </Link>
                        <div className="border-t border-gray-100 pt-2 mt-1">
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-3 mb-1.5">Top Cities</div>
                          <div className="grid grid-cols-2 gap-1">
                            {billingDropdownCities.map((city) => (
                              <Link
                                key={city.slug}
                                href={`/billing-software/${city.slug}`}
                                className="px-3 py-1.5 rounded-lg text-xs text-gray-600 hover:text-amber-700 hover:bg-amber-50 transition-colors font-medium"
                              >
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="transition-colors duration-200 hover:text-[var(--brand-primary)] text-[14px] font-medium"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--text-secondary)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/internship#verify"
            className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors"
          >
            Verify Certificate
          </Link>

          <a
            href="https://vyop.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm font-bold transition-all duration-200 hover:scale-[1.03]"
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
          className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
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
            className="lg:hidden overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.98)",
              borderBottom: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileBillingExpanded(!mobileBillingExpanded)}
                        className="flex items-center justify-between w-full text-base font-medium transition-colors duration-200"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {link.label}
                        <svg className={`w-4 h-4 transition-transform ${mobileBillingExpanded ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 4.5l3 3 3-3" />
                        </svg>
                      </button>
                      {mobileBillingExpanded && (
                        <div className="mt-2 ml-2 flex flex-col gap-2 border-l-2 border-amber-200 pl-4">
                          <Link href="/smart-billing-software" onClick={() => setMobileOpen(false)} className="text-sm text-gray-600 hover:text-amber-700 font-medium">
                            ⚡ Smart Billing Software
                          </Link>
                          <Link href="/billing-software" onClick={() => setMobileOpen(false)} className="text-sm text-gray-600 hover:text-amber-700 font-medium">
                            📍 Billing Software by City
                          </Link>
                          {billingDropdownCities.map((city) => (
                            <Link
                              key={city.slug}
                              href={`/billing-software/${city.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="text-sm text-gray-500 hover:text-amber-700"
                            >
                              {city.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-medium transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href="/internship#verify"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-bold text-emerald-700 py-2 border-y border-gray-100 flex items-center justify-between"
              >
                <span>Verify Internship Certificate</span>
                <span className="text-xs bg-emerald-100 px-2 py-0.5 rounded-full">Official</span>
              </Link>

              <a
                href="https://play.google.com/store/apps/details?id=com.vyop.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-[12px] bg-black text-white transition-all duration-200 hover:scale-[1.03] self-center w-full"
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
