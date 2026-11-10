"use client";

import { X, Headphones } from "lucide-react";
import { shopDb } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  amount: string;
}

export default function PaymentModal({ isOpen, onClose, planName, amount }: PaymentModalProps) {
  if (!isOpen) return null;

  const whatsappNumber = "919649059592";
  const whatsappMessage = encodeURIComponent(
    `Hi Vyop Team! I need help setting up my store, multi-counter sync, and activating the ${planName} business license.`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleWhatsAppClick = async () => {
    try {
      if (shopDb) {
        await addDoc(collection(shopDb, "lead_inquiries"), {
          type: "upgrade_inquiry",
          planName,
          amount,
          createdAt: new Date().toISOString(),
        });
      }
    } catch (error) {
      console.error("Error saving payment intent:", error);
    }

    window.open(whatsappLink, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-[32px] max-w-md w-full shadow-2xl relative my-auto shrink-0 flex flex-col overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎧</span>
            <h3 className="text-lg font-bold font-display text-gray-900">Vyop Store Setup &amp; License</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-center bg-gray-50/50">
          {/* Headset / Support Icon */}
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm border border-emerald-100">
            <Headphones className="w-8 h-8" />
          </div>

          <h4 className="text-xl font-bold text-gray-900 mb-2 font-display">
            Vyop Store Setup &amp; License
          </h4>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed max-w-sm mx-auto">
            Need help setting up your store, multi-counter sync, or activating your business license? Connect directly with our store specialist.
          </p>

          {/* Bullet Benefits */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-left mb-6 space-y-3">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-700">
              <span className="text-emerald-500 font-bold shrink-0">✅</span>
              <span>1-on-1 Store setup &amp; data transfer</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-700">
              <span className="text-emerald-500 font-bold shrink-0">✅</span>
              <span>Multi-device &amp; PC sync support</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-700">
              <span className="text-emerald-500 font-bold shrink-0">✅</span>
              <span>Priority WhatsApp support 7 days a week</span>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] hover:-translate-y-0.5 transition-all shadow-[0_10px_25px_-8px_rgba(37,211,102,0.6)] cursor-pointer text-sm sm:text-base"
          >
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Talk to Specialist on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
