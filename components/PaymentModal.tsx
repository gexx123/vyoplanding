"use client";

import { X, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { shopDb } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  amount: string;
  user: any;
}

export default function PaymentModal({ isOpen, onClose, planName, amount, user }: PaymentModalProps) {
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen) return null;

  const whatsappNumber = "919649059592";
  const whatsappMessage = encodeURIComponent(
    `Hi Vyop Team! My account detail is: ${user?.email}. I just paid ₹${amount} for the ${planName} plan. Here is my payment screenshot:`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handlePaymentConfirm = async () => {
    if (!user || isSaving) return;
    
    setIsSaving(true);
    try {
      if (shopDb) {
        await addDoc(collection(shopDb, "payments"), {
          userId: user.uid,
          userEmail: user.email,
          userName: user.displayName || "Unknown",
          planName,
          amount,
          status: "pending",
          createdAt: new Date().toISOString()
        });
      }
      
      // Redirect to WhatsApp
      window.open(whatsappLink, "_blank");
      onClose(); // Optional: close modal after they click
    } catch (error) {
      console.error("Error saving payment intent:", error);
      // Fallback: still open whatsapp even if analytics/db fails
      window.open(whatsappLink, "_blank");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-[32px] max-w-md w-full shadow-2xl relative my-auto shrink-0 flex flex-col max-h-[95vh] sm:max-h-[90vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100 shrink-0">
          <h3 className="text-xl font-bold font-display text-gray-900">Upgrade to {planName}</h3>
          <button 
            onClick={onClose}
            className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-center bg-gray-50/50 overflow-y-auto flex-grow">
          <p className="text-gray-500 text-sm mb-4">Scan the QR code below using any UPI app (Paytm, PhonePe, GPay) to pay <strong className="text-gray-900 text-lg">₹{amount}</strong></p>
          
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 inline-block mb-4">
            <Image 
              src="/barcode.jpg" 
              alt="Paytm QR Code" 
              width={200} 
              height={200} 
              className="rounded-xl w-40 h-40 md:w-52 md:h-52 object-contain mx-auto"
            />
          </div>

          <p className="text-sm font-bold text-gray-700 mb-1">UPI ID: 9649059592@ptsbi</p>
          <p className="text-xs text-gray-400 mb-8">Verified Name: Himanshu Tunwal</p>

          <button 
            onClick={handlePaymentConfirm}
            disabled={isSaving}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] hover:-translate-y-1 transition-all shadow-[0_10px_20px_-10px_rgba(37,211,102,0.5)] disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : "I have paid — Send Screenshot"}
          </button>
        </div>

      </div>
    </div>
  );
}
