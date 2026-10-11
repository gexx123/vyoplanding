import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vyop POS: Barcode Scan & Bill — Free Mobile POS, Barcode Scanner & Retail Billing App",
  description:
    "Free smartphone barcode POS, mobile inventory scanner & digital ledger app for retail businesses worldwide. Turn any phone into a barcode scanner, accept multi-currency payments (USD, EUR, GBP, AED, INR), create instant receipts, and launch a 0% commission online store.",
  metadataBase: new URL('https://vyop.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'hi': '/hi',
      'x-default': '/',
    },
  },
  openGraph: {
    title: "Vyop POS: Barcode Scan & Bill — Free Mobile POS & Barcode Scanner App",
    description:
      "Turn your phone into a barcode scanner POS. Multi-currency billing, AI product recognition for unbarcoded items, digital ledger, and 0% commission online storefront worldwide.",
    url: 'https://vyop.in',
    siteName: 'Vyop POS: Barcode Scan & Bill',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vyop POS: Barcode Scan & Bill — Free Smartphone Barcode POS & Billing App Worldwide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vyop POS: Barcode Scan & Bill — Global Mobile POS & Barcode App",
    description: "Turn any phone into a barcode scanner. No barcode? AI handles it. Free mobile POS, multi-currency receipts & digital ledger for small businesses worldwide.",
    images: ['/og-image.png'],
    creator: '@vyop_ai',
  },
  keywords: [
    "turn phone into barcode scanner",
    "free mobile POS app",
    "smartphone barcode scanner POS",
    "free barcode scanner app for retail",
    "barcode scanner app",
    "barcode scanner for billing",
    "mobile barcode scanner",
    "Square POS alternative free",
    "Loyverse POS alternative",
    "Clover POS alternative",
    "Shopify POS alternative free",
    "retail POS system free",
    "multi currency POS app",
    "VAT and sales tax billing app",
    "receipt generator app",
    "digital ledger and credit book app",
    "inventory barcode scanner app",
    "free point of sale software",
    "small business POS system",
    "mobile billing app for Android",
    "POS app for US UK Canada Australia UAE Philippines",
    "barcode and khata app",
    "khata app",
    "udhar khata app",
    "free GST billing software India",
    "voice invoicing app for shopkeepers",
    "barcode billing app",
    "phone camera barcode scanner",
    "scan barcode and bill",
    "barcode scanner free download",
    "thermal printer billing app",
    "zero commission online store builder",
    "Vyop POS: Barcode Scan & Bill",
  ],
  appLinks: {
    android: {
      package: 'com.vyop.app',
      app_name: 'Vyop POS: Barcode Scan & Bill',
      url: 'https://play.google.com/store/apps/details?id=com.vyop.app',
    },
  },
  other: {
    'google-play-app': 'app-id=com.vyop.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'ae_K4h891pFSQD2iFnFfb8m1idFU2Pkl_Dq_jTo4odg',
  },
};

import ReferralTracker from "@/components/ReferralTracker";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head />
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <ReferralTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
