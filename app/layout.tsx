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
  title: "Vyop — Smartphone Barcode POS, Voice AI Billing & Kirana App",
  description:
    "Turn your phone into a supermarket barcode scanner POS. Create GST bills by voice, add items in 10 ways, and set up a zero-commission online store for Kirana retailers.",
  metadataBase: new URL('https://vyop.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'hi': '/hi',
    },
  },
  openGraph: {
    title: "Vyop — Smartphone Barcode POS, Voice AI Billing & Kirana App",
    description:
      "Turn your phone into a mall barcode scanner. Voice-powered GST billing, 10 ways to add items, zero-commission customer storefront, and digital udhar khata.",
    url: 'https://vyop.in',
    siteName: 'Vyop',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vyop — AI Accountant & Smartphone Barcode POS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vyop — Smartphone Barcode POS & Voice AI Billing App",
    description: "Turn your smartphone into a supermarket barcode scanner & AI accountant.",
    images: ['/og-image.png'],
    creator: '@vyop_ai',
  },
  keywords: [
    "smartphone barcode scanner POS",
    "voice AI billing software India",
    "best billing app for retail Kirana clothing restaurant",
    "zero commission online store builder",
    "10 ways to add inventory items",
    "restaurant KOT billing app",
    "clothing store barcode tag printer",
    "pharmacy batch expiry billing software",
    "hardware store voice billing app",
    "Tally alternative mobile phone",
    "Khatabook alternative voice AI",
    "Vyapar alternative free billing app",
    "Vyop AI Accountant",
  ],
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
