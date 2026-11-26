import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Free HSN Code Finder & GST Rate Search Online | Vyop",
  },
  description:
    "Search official HSN & SAC codes with applicable Indian GST 2.0 tax slabs (0%, 5%, 18%, 40%). Find accurate codes for retail goods, garments, pharma & electronics.",
  alternates: { canonical: "/tools/hsn-code-finder" },
  openGraph: {
    title: "Free HSN Code Finder & GST Rate Search Online | Vyop",
    description: "Search HSN codes with updated GST 2.0 rates and descriptions for invoices.",
    url: "https://vyop.in/tools/hsn-code-finder",
    siteName: "Vyop POS",
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
