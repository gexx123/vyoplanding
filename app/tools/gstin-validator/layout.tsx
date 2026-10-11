import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free GSTIN Validator [Check & Verify 15-Digit GST Number] — Vyop POS",
  description:
    "Verify and validate any Indian 15-digit GSTIN number online for free. Check state codes, PAN format, and checksum integrity instantly.",
  alternates: { canonical: "/tools/gstin-validator" },
  openGraph: {
    title: "Free GSTIN Validator [Check & Verify 15-Digit GST Number] — Vyop POS",
    description: "Check GST number format, state code, and PAN verification in seconds.",
    url: "https://vyop.in/tools/gstin-validator",
  },
  keywords: [
    "gstin validator",
    "gst number check online",
    "verify gstin online free",
    "gstin search and verify",
  ],
};

export default function GstinValidatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
