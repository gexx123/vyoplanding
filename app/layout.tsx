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
  title: {
    default: "Vyop: Free AI Barcode Billing Software & Mobile POS App",
    template: "%s | Vyop",
  },
  description:
    "Vyop is a free AI barcode billing software & POS app for all retail shops. Turn your phone into a barcode scanner, create fast bills & launch a free store.",
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
    title: "Vyop: Free AI Barcode Billing Software & Mobile POS App",
    description:
      "Free smartphone barcode POS, AI voice billing, instant bills and receipts, digital ledger & 0% commission free online store.",
    url: 'https://vyop.in',
    siteName: 'Vyop POS',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vyop Free AI Barcode Billing Software & Mobile POS App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vyop: Free AI Barcode Billing Software & Mobile POS App",
    description: "Turn your phone into a barcode scanner. Free AI mobile POS, instant bills and receipts, and 0% commission free online store.",
    images: ['/og-image.png'],
    creator: '@vyop_ai',
  },
  keywords: [
    "vyop",
    "vyop app",
    "vyop billing software",
    "vyop pos",
    "free barcode billing software",
    "barcode scanner for billing",
    "mobile pos app",
    "free billing software India",
    "turn phone into barcode scanner",
    "free GST billing software",
    "retail kirana billing software",
    "barcode billing app",
    "phone camera barcode scanner",
    "voice billing app for shopkeepers",
    "udhar khata app",
    "thermal printer billing app",
    "supermarket barcode scanner app",
    "free mobile POS app",
    "small business POS system",
    "inventory barcode scanner app",
    "Square POS alternative free",
    "Loyverse POS alternative",
    "Vyapar alternative free billing app",
    "Khatabook alternative",
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
