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
