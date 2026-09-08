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
  title: "Vyop — Free GST Billing Software, Voice Invoicing & Barcode POS App",
  description:
    "Free GST billing software & fast voice invoicing app for retail stores, kirana & wholesale in India. Barcode POS scanner, inventory, thermal printing & ledger. Get started free!",
  metadataBase: new URL('https://vyop.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'hi': '/hi',
    },
  },
  openGraph: {
    title: "Vyop — Free GST Billing Software, Voice Invoicing & Barcode POS App",
    description:
      "Free GST billing software & fast voice invoicing app for Indian shopkeepers. Smartphone barcode POS, 10 ways to add items, zero-commission online store & digital ledger.",
    url: 'https://vyop.in',
    siteName: 'Vyop',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vyop — Free GST Billing Software & Smartphone Barcode POS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vyop — Free GST Billing Software & Voice Invoicing App",
    description: "Smart GST billing software and fast voice invoicing app for retail stores & kirana shops. Try free!",
    images: ['/og-image.png'],
    creator: '@vyop_ai',
  },
  keywords: [
    "free GST billing software India",
    "voice invoicing app for shopkeepers",
    "smartphone barcode scanner POS",
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
    "Vyop AI Accountant",
  ],
  appLinks: {
    android: {
      package: 'com.vyop.app',
      app_name: 'Vyop',
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
