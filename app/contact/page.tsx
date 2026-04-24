import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto min-h-[70vh]">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Contact Us
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            We are always here to help you grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
          
          {/* Email Card */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-[var(--border-subtle)] text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-500 mb-6">Drop us a line and we'll get back to you as soon as possible.</p>
            <a 
              href="mailto:vyop4shop@gmail.com"
              className="inline-block px-6 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
            >
              vyop4shop@gmail.com
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-[var(--border-subtle)] text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">WhatsApp Support</h3>
            <p className="text-gray-500 mb-6">Need immediate assistance? Message our team directly.</p>
            <a 
              href="https://wa.me/919649059592"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20b958] transition-colors"
            >
              +91 96490 59592
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
