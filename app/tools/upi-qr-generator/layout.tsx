import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free UPI QR Code Generator [Print Custom Shop Standee] — Vyop POS",
  description:
    "Generate custom printable UPI QR code payment standees for your shop. Enter your UPI ID, business name, and optional amount to generate high-resolution QR codes compatible with GPay, PhonePe, and Paytm.",
  alternates: { canonical: "/tools/upi-qr-generator" },
  openGraph: {
    title: "Free UPI QR Code Generator [Print Custom Shop Standee] — Vyop POS",
    description: "Generate and print custom UPI payment QR standees for your store counter. 0% fee payments with instant verification.",
    url: "https://vyop.in/tools/upi-qr-generator",
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
