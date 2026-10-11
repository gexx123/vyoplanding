import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free HSN Code Finder & GST Tax Search [15,000+ Codes] — Vyop POS",
  description:
    "Search over 15,000+ HSN and SAC codes with applicable GST tax slabs (0%, 5%, 12%, 18%, 28%). Find accurate codes for products, kirana items, garments, electronics, and services.",
  alternates: { canonical: "/tools/hsn-code-finder" },
  openGraph: {
    title: "Free HSN Code Finder & GST Tax Search [15,000+ Codes] — Vyop POS",
    description: "Search 15,000+ HSN codes with GST rates and descriptions for invoices.",
    url: "https://vyop.in/tools/hsn-code-finder",
  },
  keywords: [
    "hsn code finder",
    "gst rate search by hsn code",
    "hsn code list with gst rates",
    "hsn code search online",
  ],
};

export default function HsnCodeFinderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
