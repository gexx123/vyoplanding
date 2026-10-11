import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Profit Margin Calculator [Markup & Gross Profit Formula] — Vyop POS",
  description:
    "Free profit margin calculator for retail store owners and wholesalers. Calculate gross profit margin, markup percentage, cost of goods, and selling price instantly.",
  alternates: { canonical: "/tools/margin-calculator" },
  openGraph: {
    title: "Free Profit Margin Calculator [Markup & Gross Profit Formula] — Vyop POS",
    description: "Calculate gross profit margin, markup percentage, and profit per unit for retail products.",
    url: "https://vyop.in/tools/margin-calculator",
  },
  keywords: [
    "profit margin calculator",
    "margin calculator retail",
    "markup calculator online",
    "gross margin formula calculator",
    "cost selling price profit calculator",
    "retail profit margin percentage",
  ],
};

export default function MarginCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
