import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function HelpCenter() {
  const faqs = [
    {
      q: "How does voice billing work?",
      a: "Simply tap the microphone icon and speak naturally. For example, say 'Add 2 kgs of sugar and 1 packet of milk'. Vyop's AI instantly understands your words, matches them to your inventory, and adds them to the cart."
    },
    {
      q: "Does it understand Hindi or Hinglish?",
      a: "Yes! Vyop is custom-built for Indian shops. You can speak in pure Hindi, English, or mix them up (Hinglish) just like you do with your customers."
    },
    {
      q: "How do I add stock to my inventory?",
      a: "You can add stock via voice by saying 'Add 50 packets of Maggi to stock', or you can type it in manually using the Add Item button in your dashboard."
    },
    {
      q: "Can I track Udhar (Credit)?",
      a: "Absolutely. You can assign a bill to a specific customer's Khata (ledger). Vyop will automatically track their outstanding balance and help you send WhatsApp reminders."
    },
    {
      q: "Is my data safe?",
      a: "Yes, your data is securely stored in the cloud. Even if you lose your phone, simply log into your Vyop account on a new device and all your bills and inventory will instantly appear."
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Help Center
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Everything you need to know about using Vyop for your shop.
          </p>
        </div>

        <div className="space-y-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[var(--border-subtle)]">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-2xl shadow-sm border border-[var(--border-subtle)] animate-fade-up" style={{ animationDelay: "200ms" }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Still need help?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is always ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:vyop4shop@gmail.com"
              className="px-6 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
            >
              Email Support
            </a>
            <a 
              href="https://wa.me/919649059592"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20b958] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
