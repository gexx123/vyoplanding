import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Free Invoice Generator Online: PDF & WhatsApp Bills | Vyop",
  },
  description:
    "Free online invoice maker for retail shops & small businesses. Create GST tax invoices, download PDF & share via WhatsApp with zero watermark. 100% free.",
  alternates: { canonical: "/tools/invoice-generator" },
  openGraph: {
    title: "Free Invoice Generator Online: PDF & WhatsApp Bills | Vyop",
    description: "Create, print, and share professional retail tax invoices in seconds. Instant PDF download, WhatsApp sharing, and tax calculations.",
    url: "https://vyop.in/tools/invoice-generator",
    siteName: "Vyop POS",
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
