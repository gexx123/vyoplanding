import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Link from "next/link";

export const metadata = {
  title: "Vyop — भारत का पहला Voice-powered Billing App | GST और खाता",
  description: "Vyop ऐप से बोलकर बिल बनायें। किराना स्टोर और छोटे व्यापारियों के लिए सबसे आसान बिलिंग और उधार खाता ऐप। आज ही डाउनलोड करें।",
  keywords: ["बिल बनाने वाला ऐप", "उधार खाता ऐप", "किराना बिलिंग सॉफ्टवेयर", "voice billing app India", "AI accountant"],
};

export default function HindiLandingPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />
      
      {/* Custom Hindi Hero */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-glow)] text-[var(--brand-primary)] text-sm font-bold mb-6">
            भारत का गौरव 🇮🇳
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            बस बोलें, आपका <span className="gradient-text">बिल तैयार है</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Vyop के साथ अब बिल बनाना हुआ बच्चों का खेल। टाइपिंग की टेंशन छोड़िये, अब सिर्फ बोलकर अपनी दुकान का हिसाब रखिये।
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
            <div className="w-16 h-16 bg-[var(--brand-glow)] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">🎙️</div>
            <h3 className="text-2xl font-bold mb-4">बोलकर बिल बनायें</h3>
            <p className="text-[var(--text-secondary)]">"3 मैगी और 2 पारले-जी" - बस इतना बोलें और बिल तैयार।</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--brand-glow)] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">📔</div>
            <h3 className="text-2xl font-bold mb-4">डिजिटल खाता</h3>
            <p className="text-[var(--text-secondary)]">पुराने रजिस्टर छोड़िये, डिजिटल खाते में उधार का हिसाब रखिये।</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--brand-glow)] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">📉</div>
            <h3 className="text-2xl font-bold mb-4">स्टॉक मैनेजमेंट</h3>
            <p className="text-[var(--text-secondary)]">सामान खत्म होने से पहले ऐप आपको तुरंत अलर्ट भेज देगा।</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--brand-primary)] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">आज ही अपनी दुकान को डिजिटल बनायें</h2>
          <p className="text-white/80 text-lg mb-10">हज़ारों दुकानदार पहले से ही Vyop का इस्तेमाल कर रहे हैं। आप कब शुरू करेंगे?</p>
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
