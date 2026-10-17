import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Free Profit Margin & Markup Calculator for Retail | Vyop",
  },
  description:
    "Free profit margin & markup calculator for retail shopkeepers & wholesalers. Calculate gross profit margin, markup %, cost price & selling price instantly.",
  alternates: { canonical: "/tools/margin-calculator" },
  openGraph: {
    title: "Free Profit Margin & Markup Calculator for Retail | Vyop",
    description: "Calculate gross profit margin, markup percentage, and profit per unit for retail products.",
    url: "https://vyop.in/tools/margin-calculator",
    siteName: "Vyop POS",
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
