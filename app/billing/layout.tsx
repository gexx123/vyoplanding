import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Vyop Pro Pricing: Free POS App & Affordable Cloud Sync | Vyop",
  },
  description:
    "Vyop POS pricing: 100% free to start on mobile. Upgrade to Vyop Pro for ₹999/yr for multi-device desktop sync, unlimited cloud backup & priority support.",
  alternates: { canonical: "/billing" },
  openGraph: {
    title: "Vyop Pro Pricing: Free POS App & Affordable Cloud Sync | Vyop",
    description: "Simple, transparent pricing for retail shops. Start free with zero hardware.",
    url: "https://vyop.in/billing",
    siteName: "Vyop POS",
  },
};

export default function BillingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
