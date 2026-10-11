import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Barcode Generator Online [Print Code-128 & EAN Stickers] — Vyop POS",
  description:
    "Generate and print custom product barcode stickers online for free. Supports Code 128, EAN-13, and retail product tags. 100% Free, no watermark, instant thermal print.",
  alternates: { canonical: "/tools/barcode-generator" },
  openGraph: {
    title: "Free Barcode Generator Online [Print Code-128 & EAN Stickers] — Vyop POS",
    description: "Generate and print custom product barcode labels in seconds. Code 128 and retail barcode tags with price and product name.",
    url: "https://vyop.in/tools/barcode-generator",
  },
  keywords: [
    "free barcode generator",
    "barcode generator online",
    "print barcode stickers",
    "code 128 barcode generator",
    "barcode label maker free",
    "product barcode generator with price",
    "thermal printer barcode generator",
    "barcode sticker maker online free",
  ],
};

export default function BarcodeGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
