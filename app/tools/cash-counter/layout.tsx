import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Free Cash Calculator & Cash Tally Counter Online (Notes & Coins) | Vyop",
  },
  description:
    "Free online cash calculator & daily cash tally counter for notes (₹500–₹10) and coins. Instant total, grand tally in words, net sales after float & printable slip.",
  alternates: { canonical: "/tools/cash-counter" },
  openGraph: {
    title: "Free Cash Calculator & Cash Tally Counter Online | Vyop",
    description: "Count currency notes and coins fast with instant grand total, words conversion, and printable closing slip.",
    url: "https://vyop.in/tools/cash-counter",
    siteName: "Vyop POS",
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
