import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase ${className}`}
      style={{
        background: "rgba(212,149,42,0.1)",
        border: "1px solid rgba(212,149,42,0.2)",
        color: "var(--brand-primary)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-label)",
      }}
    >
      {children}
    </span>
  );
}
