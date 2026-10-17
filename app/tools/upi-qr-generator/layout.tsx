import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Free UPI QR Code Generator: Custom Shop Standee | Vyop",
  },
  description:
    "Generate custom printable UPI QR code standees for your shop counter. Compatible with PhonePe, GPay, Paytm & BHIM. Instant high-res download with 0% fee.",
  alternates: { canonical: "/tools/upi-qr-generator" },
  openGraph: {
    title: "Free UPI QR Code Generator: Custom Shop Standee | Vyop",
    description: "Generate and print custom UPI payment QR standees for your store counter. 0% fee payments with instant verification.",
    url: "https://vyop.in/tools/upi-qr-generator",
    siteName: "Vyop POS",
  },
  keywords: [
    "upi qr code generator",
    "print upi qr standee",
    "custom upi qr generator for shop",
    "free qr code for shop payment",
    "generate payment qr code online free",
  ],
};

export default function UpiQrGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
