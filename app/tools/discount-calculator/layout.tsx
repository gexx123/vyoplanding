import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Free Discount Calculator: Percentage Off & Sale Price | Vyop",
  },
  description:
    "Free discount calculator for retail shops & shoppers. Calculate percentage off, final sale price, stacked discounts & Buy-One-Get-One (BOGO) deals instantly.",
  alternates: { canonical: "/tools/discount-calculator" },
  openGraph: {
    title: "Free Discount Calculator: Percentage Off & Sale Price | Vyop",
    description: "Quickly calculate percentage discounts, final sale prices, and multiple stacked discounts for retail promotions.",
    url: "https://vyop.in/tools/discount-calculator",
    siteName: "Vyop POS",
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
