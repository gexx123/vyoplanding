import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Privacy Policy
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Last updated: May 2026
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[var(--border-subtle)] animate-fade-up" style={{ animationDelay: "100ms" }}>
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-gray-700">
            {/* PASTE PRIVACY POLICY CONTENT HERE */}
            <p>
              [Privacy Policy Content goes here...]
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
