"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Company: ["About Us", "Careers", "Blog"],
  Support: ["Help Center", "Contact Us", "WhatsApp Chat", "Community"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

const linkPaths: Record<string, string> = {
  "About Us": "/about",
  "Careers": "/careers",
  "Blog": "/blog",
  "Help Center": "/help",
  "Contact Us": "/contact",
  "WhatsApp Chat": "https://wa.me/919649059592",
  "Community": "/community",
  "Privacy Policy": "/privacy",
  "Terms of Service": "/terms",
  "Cookie Policy": "/cookie",
};

const socialIcons = [
  {
    name: "Twitter",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="py-16"
      style={{
        background: "var(--bg-surface)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="Vyop Logo"
                width={40}
                height={40}
                className="rounded-xl"
                style={{ boxShadow: "var(--shadow-sm)" }}
              />
              <span
                className="text-xl font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                Vyop
              </span>
            </div>
            <p
              className="text-sm mb-5"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                lineHeight: 1.6,
              }}
            >
              The voice of retail in India
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {[
                { name: "Twitter", href: "https://x.com/vyop_ai" },
                { name: "Instagram", href: "https://instagram.com/vyop.in" },
                { name: "YouTube", href: "https://youtube.com/@vyop" },
                { name: "WhatsApp", href: "https://wa.me/919649059592" },
                { name: "LinkedIn", href: "https://linkedin.com/company/vyop" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:text-[var(--brand-primary)] bg-white border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-md"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                  aria-label={social.name}
                >
                  {socialIcons.find(s => s.name === social.name)?.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-sm font-bold mb-4"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => {
                  const path = linkPaths[link] || "#";
                  const isExternal = path.startsWith("http");

                  return (
                    <li key={link}>
                      {isExternal ? (
                        <a
                          href={path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm transition-colors duration-200 hover:text-[var(--brand-primary)]"
                          style={{
                            color: "var(--text-secondary)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {link}
                        </a>
                      ) : (
                        <Link
                          href={path}
                          className="text-sm transition-colors duration-200 hover:text-[var(--brand-primary)]"
                          style={{
                            color: "var(--text-secondary)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {link}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <p
            className="text-xs font-medium"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-body)",
            }}
          >
            © 2026 Vyop Technologies Pvt. Ltd. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
