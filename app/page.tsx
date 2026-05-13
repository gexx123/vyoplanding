import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

// Lazy load below-the-fold components to improve performance
const StickyFeatureSection = dynamic(() => import("@/components/sections/StickyFeatureSection"));
const LaunchAnnouncement = dynamic(() => import("@/components/sections/LaunchAnnouncement"));
const BenefitsMarquee = dynamic(() => import("@/components/sections/BenefitsMarquee"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
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
                "@type": "FinanceApplication",
                "@id": "https://vyop.in/#application",
                "name": "Vyop",
                "operatingSystem": "Android, iOS",
                "applicationCategory": "FinanceApplication",
                "description": "India's first voice-powered AI billing and accounting app designed specifically for kirana stores and small retailers.",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "INR"
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
                    "itemReviewed": { "@id": "https://vyop.in/#application" },
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                    "reviewBody": "Pehle bill likhne mein 2-3 minute lagte the, ab 10 second mein ho jaata hai bolke."
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Suresh Yadav" },
                    "datePublished": "2026-05-10",
                    "itemReviewed": { "@id": "https://vyop.in/#application" },
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                    "reviewBody": "Hindi mein bolta hoon, bill ban jaata hai. Bahut badiya cheez banai hai."
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://vyop.in/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Do I need internet to use Vyop?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No, you do not need an active internet connection to use Vyop. Our app works completely offline, allowing you to create bills continuously. All your data is securely saved locally on your device and will automatically sync to the cloud once you reconnect to the internet."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is this better than Tally?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, for small retail businesses, Vyop is much faster and simpler than Tally. While traditional software requires typing skills and accounting knowledge, Vyop operates entirely on your natural voice. This makes generating a GST bill effortless for shop owners."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is my data safe?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We protect your business data using enterprise-grade, bank-level encryption standards. Your customer information and ledgers are completely secure, private, and accessible only by you through your authorized device."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is the app free?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, all the core billing and khata features in Vyop are completely free to use forever. We also offer an affordable premium plan for businesses that need advanced inventory analytics and automated marketing tools."
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

      <LaunchAnnouncement />
      <BenefitsMarquee />
      <Blog />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
