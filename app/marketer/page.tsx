import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export default function MarketerPanel() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-3xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[var(--shadow-md)] border border-[var(--border-subtle)]">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Marketer panel is unavailable
          </h1>
          <p className="text-[var(--text-secondary)] mb-8">
            Firebase authentication has been removed from this website, so marketer dashboard access is currently disabled.
          </p>
          <Link href="/" className="text-[var(--brand-primary)] font-bold hover:underline">
            Go Back Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
