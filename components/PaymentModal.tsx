"use client";

import { X } from "lucide-react";
import Image from "next/image";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  amount: string;
  userEmail?: string;
}

export default function PaymentModal({ isOpen, onClose, planName, amount, userEmail }: PaymentModalProps) {
  if (!isOpen) return null;

  const whatsappNumber = "919649059592";
  const whatsappMessage = encodeURIComponent(
    `Hi Vyop Team! My email is ${userEmail || '[Enter Email]'} and I just paid ₹${amount} for the ${planName} plan. Here is my payment screenshot:`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[32px] max-w-md w-full overflow-hidden shadow-2xl relative">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold font-display text-gray-900">Upgrade to {planName}</h3>
          <button 
            onClick={onClose}
            className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8 text-center bg-gray-50/50">
          <p className="text-gray-500 text-sm mb-6">Scan the QR code below using any UPI app (Paytm, PhonePe, GPay) to pay <strong className="text-gray-900 text-lg">₹{amount}</strong></p>
          
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 inline-block mb-6">
            <Image 
              src="/barcode.jpg" 
              alt="Paytm QR Code" 
              width={250} 
              height={250} 
              className="rounded-xl"
            />
          </div>

          <p className="text-sm font-bold text-gray-700 mb-2">UPI ID: 9649059592@ptsbi</p>
          <p className="text-xs text-gray-400 mb-8">Verified Name: Himanshu Tunwal</p>

          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] hover:-translate-y-1 transition-all shadow-[0_10px_20px_-10px_rgba(37,211,102,0.5)]"
          >
            I have paid — Send Screenshot
          </a>
        </div>

      </div>
    </div>
  );
}
