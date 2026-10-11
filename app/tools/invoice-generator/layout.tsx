import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Invoice Generator Online [Download PDF & WhatsApp Receipt] — Vyop POS",
  description:
    "Free online invoice maker for small businesses and retail shops. Create professional GST and tax invoices, add custom items, download PDF or share via WhatsApp with zero watermark.",
  alternates: { canonical: "/tools/invoice-generator" },
  openGraph: {
    title: "Free Invoice Generator Online [Download PDF & WhatsApp Receipt] — Vyop POS",
    description: "Create, print, and share professional retail tax invoices in seconds. Instant PDF download, WhatsApp sharing, and tax calculations.",
    url: "https://vyop.in/tools/invoice-generator",
  },
  keywords: [
    "free invoice generator",
    "invoice maker online free",
    "free receipt maker pdf",
    "gst invoice generator online",
    "create invoice online free without watermark",
    "whatsapp invoice generator",
    "retail billing invoice maker",
    "small business invoice generator",
  ],
};

export default function InvoiceGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
