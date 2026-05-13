"use client";

import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Users, CheckCircle2, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Pricing from "@/components/sections/Pricing";
import PaymentModal from "@/components/PaymentModal";

export default function BillingPage() {
  const { user, userData, loading, signInWithGoogle, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "Yearly", amount: "499" });

  const isPremium = userData?.subscription === "premium";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-hero)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--brand-primary)]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Pricing Component & Payment Modal */}
          <div className="md:col-span-3">
            <Pricing onUpgradeClick={async (plan, amount) => {
              if (!user) {
                try {
                  await signInWithGoogle();
                } catch (error) {
                  console.error("Login failed:", error);
                  return;
                }
              }
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
        userEmail={user?.email || undefined}
      />

      <Footer />
    </main>
  );
}
