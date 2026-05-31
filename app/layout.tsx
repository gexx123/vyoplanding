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
  title: "Vyop — Voice Billing App | GST, Inventory & Khata for India",
  description:
    "Revolutionize your retail business with Vyop, the best voice-powered GST billing and khata app for kirana stores in India. Manage inventory and ledgers instantly.",
  metadataBase: new URL('https://vyop.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'hi': '/hi',
    },
  },
  openGraph: {
    title: "Vyop — Voice Billing App | GST, Inventory & Khata for India",
    description:
      "The world's first AI accounting app that understands your voice. GST billing, khata management, and stock alerts — all controlled by voice.",
    url: 'https://vyop.in',
    siteName: 'Vyop',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vyop — AI Accountant Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vyop — Voice Billing App | GST, Inventory & Khata for India",
    description: "Voice-powered billing and inventory management for modern businesses.",
    images: ['/og-image.png'],
    creator: '@vyop_ai',
  },
  keywords: [
    "GST billing app",
    "kirana store billing",
    "udhar khata",
    "billing software India",
    "free billing app",
    "voice billing app",
    "digital ledger",
    "AI accountant",
    "Vyop accounting",
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
