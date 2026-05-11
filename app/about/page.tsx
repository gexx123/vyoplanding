import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            About Vyop
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            We are building the first AI accountant that actually understands how Indian shopkeepers work.
          </p>
        </div>

        <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-gray-700 animate-fade-up" style={{ animationDelay: "100ms" }}>
          <h2>The Problem with "Smart" Billing</h2>
          <p>
            If you walk into any kirana, medical store, or wholesale shop in India during peak hours, you will see a familiar scene: the owner is simultaneously handling cash, negotiating with suppliers, packing bags, and answering customer questions. 
          </p>
          <p>
            Yet, the software they are forced to use expects them to sit quietly at a desk. Traditional billing apps require you to search for items, navigate complex dropdown menus, and type perfectly. They were built for corporate offices, not the fast-paced, chaotic reality of Indian retail.
          </p>

          <h2>The Khata Book Reality</h2>
          <p>
            Because software is too slow, millions of shopkeepers still rely on the red paper <em>Khata</em> book. It's fast, but it doesn't give you insights. It can't tell you your top-selling items, it can't automatically remind customers of their <em>udhar</em> (credit), and it certainly can't calculate your monthly profit margins.
          </p>

          <h2>Enter Vyop</h2>
          <p>
            We realized that the best interface for a shopkeeper isn't a keyboard or a mouse—it's their voice. We built Vyop to be an AI billing and accounting assistant that you can simply talk to. 
          </p>
          <p>
            With Vyop, you don't need to learn how to use an app. The app learns how to understand you. You can say <em>"2 Amul butter, teen Parle-G, aur ek Maggi ka bill banao"</em> in your natural Hinglish, and Vyop instantly adds it to the cart, deducts it from inventory, and logs the sale.
          </p>

          <div className="bg-white p-8 rounded-2xl border border-[var(--border-subtle)] shadow-sm my-10 border-l-4 border-l-[var(--brand-primary)]">
            <h3 className="mt-0">Our Mission</h3>
            <p className="mb-0">
              To give every shop owner in India the power of a dedicated CA and a fast billing clerk, combined into a single AI assistant that lives in their pocket.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[var(--brand-primary)] to-[#1a1a2e] p-8 rounded-2xl shadow-lg my-10 text-white">
            <h3 className="mt-0 text-white">Meet the Founder</h3>
            <p className="mb-0 text-white/90">
              <strong>Himanshu Tunwal</strong> is the founder of Vyop AI. Driven by a deep understanding of the challenges faced by Indian shopkeepers, Himanshu set out to build an AI assistant that speaks their language—literally. His vision is to make powerful business tools accessible to every shop owner, regardless of their technical background.
            </p>
          </div>

          <h2>More Than Just Billing</h2>
          <p>
            Vyop is designed to be your business partner. Need to know if you made a profit today? Just ask. Need to add a ₹50 chai expense? Just tell it. We are removing the friction between you and your business data.
          </p>
          <p>
            Welcome to the future of Indian retail. Welcome to Vyop.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
