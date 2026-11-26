"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useState } from "react";
import Pricing from "@/components/sections/Pricing";
import PaymentModal from "@/components/PaymentModal";

export default function BillingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "Yearly", amount: "999" });

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-2">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Vyop POS Plans &amp; Transparent Pricing
          </h1>
          <p className="text-base md:text-lg text-[var(--text-secondary)]">
            Free local mobile billing &amp; barcode POS forever. Upgrade anytime for multi-device desktop sync and encrypted cloud backup.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Pricing Component & Payment Modal */}
          <div className="md:col-span-3">
            <Pricing onUpgradeClick={async (plan, amount) => {
              setSelectedPlan({ name: plan, amount });
              setIsModalOpen(true);
            }} />

            {/* Support Info */}
            <div className="mt-8 text-center p-8 bg-white/70 rounded-3xl border border-[var(--border-subtle)] border-dashed max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-gray-900 text-base font-display">Need help with plans or instant activation?</h4>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  Our support team is available 7 days a week on WhatsApp to assist with setup and inquiries.
                </p>
              </div>
              <a
                href="https://wa.me/919649059592?text=Hi%20Vyop%20Team%2C%20I%20have%20questions%20about%20Vyop%20plans%20and%20billing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm hover:-translate-y-0.5 transition-all shadow-[0_8px_20px_-6px_rgba(37,211,102,0.5)] shrink-0"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp: +91 9649059592</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PaymentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan.name}
        amount={selectedPlan.amount}
      />

      <Footer />
    </main>
  );
}
