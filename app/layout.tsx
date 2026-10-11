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
  title: "Vyop: Barcode Scan & Bill — Barcode Scanner, Billing & Khata App",
  description:
    "Vyop: Barcode Scan & Bill is India's smartphone barcode POS, voice billing & digital khata app. Turn your phone into a barcode scanner, let AI handle unbarcoded items, manage ledger & online store.",
  metadataBase: new URL('https://vyop.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'hi': '/hi',
    },
  },
  openGraph: {
    title: "Vyop: Barcode Scan & Bill — Barcode Scanner, Billing & Khata App",
    description:
      "Turn your phone into a barcode scanner. Smartphone barcode POS, voice billing, digital khata, and zero-commission online store for retail shops.",
    url: 'https://vyop.in',
    siteName: 'Vyop: Barcode Scan & Bill',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vyop: Barcode Scan & Bill — Smartphone Barcode POS & Khata App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vyop: Barcode Scan & Bill — Barcode Scanner & Khata App",
    description: "Turn your phone into a barcode scanner. No barcode? AI handles it. Fast billing & digital khata for retail shops.",
    images: ['/og-image.png'],
    creator: '@vyop_ai',
  },
  keywords: [
    "barcode and khata app",
    "khata app",
    "udhar khata app",
    "digital khata app",
    "barcode billing and khata app",
    "free GST billing software India",
    "voice invoicing app for shopkeepers",
    "smartphone barcode scanner POS",
    "barcode scanner app",
    "barcode scanner for billing",
    "mobile barcode scanner",
    "turn phone into barcode scanner",
    "barcode scanner for shop",
    "barcode billing app",
    "phone camera barcode scanner",
    "scan barcode and bill",
    "barcode scanner free download",
    "billing software in Bangalore",
    "billing software in Surat",
    "billing software Mumbai",
    "billing software dealers in Bangalore",
    "free billing app download",
    "retail kirana billing software",
    "thermal printer billing app",
    "zero commission online store builder",
    "restaurant KOT billing app",
    "clothing store barcode tag printer",
    "pharmacy batch expiry billing software",
    "Tally alternative mobile phone",
    "Vyapar alternative free billing app",
    "Khatabook alternative voice AI",
    "Vyop: Barcode Scan & Bill",
  ],
  appLinks: {
    android: {
      package: 'com.vyop.app',
      app_name: 'Vyop: Barcode Scan & Bill',
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
