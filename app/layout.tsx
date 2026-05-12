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
  title: "Vyop — World's First AI Accountant for Business",
  description:
    "Revolutionize your business with Vyop, the voice-first AI accounting app. Create bills, manage inventory, and track digital ledgers instantly just by speaking. Built for the future of retail.",
  metadataBase: new URL('https://vyop.in'),
  openGraph: {
    title: "Vyop — Just Speak, Your Bill is Ready",
    description:
      "The intelligent accounting app that understands your voice. GST billing, khata management, and stock alerts — all controlled by voice.",
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
    title: "Vyop — World's First AI Accountant",
    description: "Voice-powered billing and inventory management for modern businesses.",
    images: ['/og-image.png'],
    creator: '@vyop_ai',
  },
  keywords: [
    "AI accountant",
    "voice billing app",
    "digital ledger",
    "kirana billing software",
    "inventory management AI",
    "Vyop accounting",
    "voice-first business app",
    "smart billing India",
    "automated bookkeeping",
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

import { AuthProvider } from "@/lib/AuthContext";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
