import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Free Cash Counter & Denomination Tally Calculator | Vyop",
  },
  description:
    "Free daily cash counter & denomination calculator for cashiers, shops & bank deposits. Tally cash notes & coins instantly with printable slips.",
  alternates: { canonical: "/tools/cash-counter" },
  openGraph: {
    title: "Free Cash Counter & Denomination Tally Calculator | Vyop",
    description: "Calculate daily drawer cash totals and denomination counts with instant slip generation.",
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
