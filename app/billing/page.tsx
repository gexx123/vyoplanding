"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useState } from "react";
import Pricing from "@/components/sections/Pricing";
import PaymentModal from "@/components/PaymentModal";

export default function BillingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "Yearly", amount: "499" });

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Pricing Component & Payment Modal */}
          <div className="md:col-span-3">
            <Pricing onUpgradeClick={async (plan, amount) => {
              setSelectedPlan({ name: plan, amount });
              setIsModalOpen(true);
            }} />

            {/* Support Info */}
            <div className="mt-8 text-center p-8 bg-white/50 rounded-3xl border border-[var(--border-subtle)] border-dashed max-w-4xl mx-auto">
              <p className="text-sm text-[var(--text-secondary)]">
                Need help with payments? WhatsApp us at <span className="font-bold text-[var(--brand-primary)]">+91 9649059592</span>
              </p>
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
