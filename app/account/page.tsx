import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)] flex flex-col">
      <Navbar />

      <section className="flex-grow pt-40 pb-20 px-6 max-w-3xl mx-auto w-full text-center">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[var(--shadow-md)] border border-[var(--border-subtle)]">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Account login is unavailable
          </h1>
          <p className="text-gray-600 mb-8">
            Vyop account access has been removed from this website. You can continue using the Vyop app directly.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-bold"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-gold)" }}
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
