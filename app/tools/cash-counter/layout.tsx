import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Cash Counter & Denomination Calculator [Daily Cash Tally] — Vyop POS",
  description:
    "Free daily cash counter calculator for cashiers, retail shops, and bank deposits. Enter currency note counts (₹500, ₹200, ₹100, ₹50, etc.) to calculate total cash in hand instantly.",
  alternates: { canonical: "/tools/cash-counter" },
  openGraph: {
    title: "Free Cash Counter & Denomination Calculator [Daily Cash Tally] — Vyop POS",
    description: "Calculate daily drawer cash totals and denomination counts with instant slip generation.",
    url: "https://vyop.in/tools/cash-counter",
  },
  keywords: [
    "cash counter calculator",
    "cash denomination counter online",
    "daily cash tally calculator for shop",
    "calculate cash in hand",
    "cash drawer reconciliation calculator",
  ],
};

export default function CashCounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
