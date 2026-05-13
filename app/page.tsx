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
            "@type": "SoftwareApplication",
            "name": "Vyop",
            "operatingSystem": "Android, iOS",
            "applicationCategory": "BusinessApplication, AccountingApplication",
            "description": "India's first voice-powered AI billing and accounting app designed specifically for kirana stores and small retailers.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1250"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
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
              "https://twitter.com/vyop",
              "https://instagram.com/vyop",
              "https://linkedin.com/company/vyop"
            ]
          })
        }}
      />
      <Navbar />
      <Hero />

      <StickyFeatureSection />

      <LaunchAnnouncement />
      <BenefitsMarquee />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Blog />
      <Footer />
    </main>
  );
}
