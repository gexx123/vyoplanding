import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

// Lazy load below-the-fold components to improve performance
const StickyFeatureSection = dynamic(() => import("@/components/sections/StickyFeatureSection"));
const TenWaysToAddSection = dynamic(() => import("@/components/sections/TenWaysToAddSection"));
const IndustrySolutionsSection = dynamic(() => import("@/components/sections/IndustrySolutionsSection"));
const FreeToolsSection = dynamic(() => import("@/components/sections/FreeToolsSection"));
const LaunchAnnouncement = dynamic(() => import("@/components/sections/LaunchAnnouncement"));
const BenefitsMarquee = dynamic(() => import("@/components/sections/BenefitsMarquee"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const AEOKnowledgeHub = dynamic(() => import("@/components/sections/AEOKnowledgeHub"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const CityHubsSection = dynamic(() => import("@/components/sections/CityHubsSection"));
const Blog = dynamic(() => import("@/components/sections/Blog"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "@id": "https://vyop.in/#application",
                "name": "Vyop",
                "operatingSystem": "Android, Web",
                "applicationCategory": "BusinessApplication",
                "applicationSubCategory": "AccountingSoftware, BillingSoftware",
                "description": "Free GST Billing Software, Voice AI Invoicing & Smartphone Barcode POS Scanner. Create GST bills by voice, scan barcodes, and manage kirana retail inventory.",
                "url": "https://vyop.in",
                "installUrl": "https://play.google.com/store/apps/details?id=com.vyop.app",
                "downloadUrl": "https://play.google.com/store/apps/details?id=com.vyop.app",
                "featureList": [
                  "Free GST and Non-GST Billing App",
                  "Smartphone Supermarket Barcode POS Scanner",
                  "Voice AI GST Billing in Hindi, Hinglish and English",
                  "10 Lightning-Fast Ways to Add Products & Items",
                  "Zero-Commission Live Customer Online Storefront Link",
                  "Custom Discount Banners & Spin-The-Wheel Customer Rewards",
                  "Voice Expense Logging & Automated Udhar Khata Reminders",
                  "Barcode Label Printing & Low Stock Alerts",
                  "Thermal Printer & Bluetooth Bill Printing Support"
                ],
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "bestRating": "5",
                  "worstRating": "1",
                  "ratingCount": "1250"
                },
                "review": [
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Rajesh Gupta" },
                    "datePublished": "2026-05-01",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                    "reviewBody": "Pehle bill likhne mein 2-3 minute lagte the, ab 10 second mein ho jaata hai bolke ya scan karke."
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Suresh Yadav" },
                    "datePublished": "2026-05-10",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                    "reviewBody": "Barcode scan karke bill ban jaata hai aur customer ko zero commission link bhej deta hoon."
                  }
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://vyop.in/#website",
                "url": "https://vyop.in",
                "name": "Vyop",
                "description": "World's First AI Accountant & Smartphone Barcode POS Scanner for Retailers in India.",
                "publisher": {
                  "@id": "https://vyop.in/#organization"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://vyop.in/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Which is the best billing and inventory app for Kirana, clothing, and restaurants in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Vyop is the top-rated AI billing and inventory software built for all Indian retail businesses — including Kirana stores, clothing boutiques, restaurants, cafes, hardware, electronic shops, and pharmacies."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use Vyop for a Restaurant, Cafe, or Hotel billing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Vyop supports restaurant and hotel billing with Kitchen Order Tickets (KOT), table management, instant voice ordering ('2 Butter Naan, 1 Paneer Butter Masala'), and QR digital menu ordering."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does Vyop help Clothing, Apparel & Footwear stores?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For clothing and footwear boutiques, Vyop manages size/color matrix inventory, scans garment barcodes, prints custom barcode price tags, and sends WhatsApp bill receipts directly to shoppers."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can Hardware, Electrical & Sanitary stores use Vyop for fast billing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Hardware and electrical shops handle thousands of loose items. Vyop's voice search ('1/2 inch PVC pipe 10 meters') and instant image search make finding items 10x faster than typing."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can Chemist and Pharmacy shops track batch numbers and expiry dates in Vyop?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Pharmacies can scan medicine barcodes, track batch numbers, monitor expiry dates, and issue compliant GST bills with automatic low-stock alerts."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I turn my smartphone into a supermarket-grade barcode scanner for any store?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Vyop turns any smartphone camera into a supermarket-grade barcode scanner. It scans manufacturer barcodes (EAN/UPC), creates custom barcodes from product photos, and prints barcode stickers."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can any shop owner make a free online store website in 60 seconds?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Vyop allows Kirana, fashion, bakery, and electronic store owners to launch a live digital storefront catalog in under 60 seconds with a shareable WhatsApp link and 0% delivery middleman commission."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How to sell products online directly to local customers with zero delivery commission?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Share your Vyop live store link via WhatsApp or Instagram. Local customers view real-time inventory and place direct orders straight to your phone with 0% commission cut taken by third parties."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the 10 ways to add items to inventory in Vyop?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Vyop offers 10 instant item creation methods: 1. Scan Barcode, 2. Scan Invoice photo/PDF, 3. Add Manually, 4. Add with AI, 5. Add with Image, 6. Print Barcodes, 7. Voice in AI Orb, 8. Type in AI Orb, 9. Upload Catalogue Photo, and 10. Add by Menu."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How to create GST and non-GST bills on mobile by voice command in Hindi or English?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Simply speak into Vyop's AI Orb in Hindi, English, or Hinglish (e.g., 'Teen Maggi aur do Chai' or '2 Men Shirts XL'). Vyop's voice AI generates accurate GST and non-GST bills in under 5 seconds."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How to import stock automatically from paper bills and supplier invoices?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Snap a photo of any printed or digital supplier invoice using Vyop's AI Invoice Scanner. The app automatically extracts product names, quantities, MRP, and purchase rates into your inventory."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How to manage Udhar Khata debt and send automatic WhatsApp payment reminders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Vyop includes a secure Digital Ledger (Khata). Record customer balances with one tap and send automated WhatsApp/SMS payment reminders with direct UPI payment links."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How to attract more local customers with Spin-The-Wheel rewards and discount offer banners?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Vyop provides built-in retail marketing tools including customizable discount banners, festival coupon codes, and interactive Spin-The-Wheel customer rewards games to drive repeat store visits."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Vyop work offline without internet connection?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Vyop works 100% offline. All bills and ledgers are saved securely on your device and automatically sync to the cloud when internet reconnects."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Vyop better and faster than Tally, Khatabook, or Vyapar?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Unlike traditional software (Tally, Vyapar) that requires computers and manual typing, Vyop operates via voice AI and smartphone barcode scanning, creating bills 10x faster with zero learning curve."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Vyop free to use for small shopkeepers?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Vyop is free to download and start for basic billing, inventory, and online storefront creation on Android smartphones. Full multi-device cloud backup and unlimited sync is available with Vyop Pro for just ₹999/year (less than ₹2.7/day)."
                    }
                  }
                ]
              },
              {
                "@type": "Organization",
                "@id": "https://vyop.in/#organization",
                "name": "Vyop Technologies Pvt. Ltd.",
                "url": "https://vyop.in",
                "logo": "https://vyop.in/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9649059592",
                  "contactType": "customer service",
                  "email": "vyop4shop@gmail.com",
                  "availableLanguage": ["English", "Hindi"]
                },
                "sameAs": [
                  "https://twitter.com/vyop_ai",
                  "https://instagram.com/vyop.in",
                  "https://linkedin.com/company/vyop"
                ]
              }
            ]
          })
        }}
      />
      <Navbar />
      <Hero />

      <StickyFeatureSection />
      <TenWaysToAddSection />
      <IndustrySolutionsSection />
      <FreeToolsSection />

      <LaunchAnnouncement />
      <BenefitsMarquee />
      <Blog />
      <Pricing />
      <CityHubsSection />
      <Testimonials />
      <AEOKnowledgeHub />
      <FAQ />
      <Footer />
    </main>
  );
}
