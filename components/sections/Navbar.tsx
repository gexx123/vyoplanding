"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@/lib/AuthContext";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Billing", href: "/billing" },
];

export default function Navbar() {
  const { user, userData, loading } = useAuth();
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

  const isMarketer = userData?.role === "marketer";

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
          {isMarketer && (
            <Link
              href="/marketer"
              className="px-4 py-1.5 rounded-full bg-[var(--brand-glow)] text-[var(--brand-primary)] font-bold text-xs uppercase tracking-wider hover:bg-[var(--brand-primary)] hover:text-white transition-all"
            >
              Marketer Panel
            </Link>
          )}
        </div>

        {/* Desktop CTA */}
        {!loading && (
          <Link
            href={user ? "/marketer" : "/billing"}
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-white text-sm font-bold transition-all duration-200 hover:scale-[1.03]"
            style={{
              background: "var(--gradient-brand)",
              fontFamily: "var(--font-display)",
              boxShadow: "var(--shadow-gold)",
            }}
          >
            {user ? "Marketer Panel" : "View Pricing"}
          </Link>
        )}

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
                href="https://vyop.shop/"
                className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full text-white text-sm font-medium"
                style={{
                  background: "var(--gradient-brand)",
                  fontFamily: "var(--font-display)",
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
