import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Discount Calculator [Percentage Off & Sale Price] — Vyop POS",
  description:
    "Free discount calculator for shoppers and retail store owners. Calculate percentage off, sale price, stacked discounts, and Buy-One-Get-One (BOGO) offers instantly.",
  alternates: { canonical: "/tools/discount-calculator" },
  openGraph: {
    title: "Free Discount Calculator [Percentage Off & Sale Price] — Vyop POS",
    description: "Quickly calculate percentage discounts, final sale prices, and multiple stacked discounts for retail promotions.",
    url: "https://vyop.in/tools/discount-calculator",
  },
  keywords: [
    "discount calculator",
    "percentage off calculator",
    "sale price calculator",
    "bogo discount calculator",
    "calculate percentage discount online",
    "retail discount formula",
  ],
};

export default function DiscountCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
