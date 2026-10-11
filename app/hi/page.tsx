import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Link from "next/link";

export const metadata = {
  title: "Vyop POS: Barcode Scan & Bill — बारकोड स्कैनर, बिलिंग और खाता ऐप | GST और उधार",
  description: "Vyop ऐप: अपने फोन को बारकोड स्कैनर बनाएं, बोलकर बिल बनाएं और डिजिटल उधार खाता मैनेज करें। किराना और रीटेल दुकानों के लिए फ्री ऐप।",
  keywords: ["बारकोड स्कैनर ऐप", "उधार खाता ऐप", "बिल बनाने वाला ऐप", "किराना बिलिंग सॉफ्टवेयर", "barcode scanner app hindi", "khata app hindi", "vyop pos barcode scan and bill"],
};

export default function HindiLandingPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />
      
      {/* Custom Hindi Hero */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-glow)] text-[var(--brand-primary)] text-sm font-bold mb-6">
            Vyop POS: Barcode Scan &amp; Bill 📱
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            फोन को बनाएं <span className="gradient-text">बारकोड स्कैनर</span>, बोलकर बनाएं बिल
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Vyop के साथ फोन कैमरे से बारकोड स्कैन करें, बिना बारकोड वाले सामान की AI से फोटो लें, और डिजिटल खाते में उधार का हिसाब रखें।
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="https://vyop.shop" 
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[var(--brand-secondary)] text-white font-bold text-xl hover:scale-[1.02] transition-all shadow-[var(--shadow-gold)]"
            >
              फ्री में डाउनलोड करें
            </Link>
            <Link 
              href="/#features" 
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white border border-[var(--border-medium)] text-[var(--text-secondary)] font-bold text-xl hover:bg-gray-50 transition-all"
            >
              विशेषताएं देखें
            </Link>
          </div>
        </div>
      </section>

      {/* Hindi Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--brand-glow)] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">📱</div>
            <h3 className="text-2xl font-bold mb-4">फोन बारकोड स्कैनर</h3>
            <p className="text-[var(--text-secondary)]">कैमरे से तुरंत बारकोड स्कैन करें। बिना बारकोड वाले सामान का AI से फोटो लेकर बिल बनाएं।</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--brand-glow)] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">🎙️</div>
            <h3 className="text-2xl font-bold mb-4">बोलकर बिल बनायें</h3>
            <p className="text-[var(--text-secondary)]">"3 मैगी और 2 पारले-जी" - बस इतना बोलें और पक्का बिल तैयार।</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--brand-glow)] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">📔</div>
            <h3 className="text-2xl font-bold mb-4">डिजिटल खाता</h3>
            <p className="text-[var(--text-secondary)]">उधार का पूरा हिसाब रखें और व्हाट्सएप पर ऑटोमैटिक पेमेंट रिमाइंडर भेजें।</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--brand-primary)] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">आज ही अपनी दुकान को स्मार्ट बनाएं</h2>
          <p className="text-white/80 text-lg mb-10">बारकोड स्कैनिंग, वॉयस बिलिंग और डिजिटल खाता — सब कुछ एक ऐप में।</p>
          <Link 
            href="https://vyop.shop" 
            className="inline-block px-12 py-5 rounded-2xl bg-white text-[var(--brand-primary)] font-bold text-xl hover:scale-[1.05] transition-all"
          >
            अभी शुरू करें
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
