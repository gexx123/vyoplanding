import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import BenefitsMarquee from "@/components/sections/BenefitsMarquee";
import ProductShowcase from "@/components/sections/ProductShowcase";
import StickyFeatureSection from "@/components/sections/StickyFeatureSection";
import LaunchAnnouncement from "@/components/sections/LaunchAnnouncement";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import Footer from "@/components/sections/Footer";

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
      <Blog />
      <Footer />
    </main>
  );
}
