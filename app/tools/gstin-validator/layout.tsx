import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Free GSTIN Validator: Verify 15-Digit GST Number | Vyop",
  },
  description:
    "Verify & validate any Indian 15-digit GSTIN number online for free. Check state codes, PAN format & checksum integrity instantly without captcha.",
  alternates: { canonical: "/tools/gstin-validator" },
  openGraph: {
    title: "Free GSTIN Validator: Verify 15-Digit GST Number | Vyop",
    description: "Check GST number format, state code, and PAN verification in seconds.",
    url: "https://vyop.in/tools/gstin-validator",
    siteName: "Vyop POS",
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
