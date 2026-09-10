"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export default function UpiQrGeneratorPage() {
  const [shopName, setShopName] = useState("Shree Ram General Store");
  const [upiId, setUpiId] = useState("shreeramstore@okaxis");
  const [payeeName, setPayeeName] = useState("Shree Ram Store");
  const [amount, setAmount] = useState<string>("");
  const [note, setNote] = useState("Payment for Goods");

  // Construct standard UPI URI
  const encodedPayee = encodeURIComponent(payeeName.trim());
  const encodedUpiId = encodeURIComponent(upiId.trim());
  const encodedNote = encodeURIComponent(note.trim());
  const amountParam = amount && Number(amount) > 0 ? `&am=${encodeURIComponent(amount)}` : "";

  const upiUri = `upi://pay?pa=${encodedUpiId}&pn=${encodedPayee}&cu=INR${amountParam}&tn=${encodedNote}`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&data=${encodeURIComponent(upiUri)}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <div className="no-print">
        <Navbar />
      </div>

      <section className="pt-36 pb-20 px-4 md:px-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 no-print">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>📱</span> 100% Free Store Utility
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display mb-4 text-gray-900">
            Free UPI Payment <span className="gradient-text">QR Code Standee Generator</span>
          </h1>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Create and print a custom UPI payment standee for your retail shop counter. Compatible with Google Pay, PhonePe, Paytm, BHIM, and all UPI apps with 0% MDR transaction fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200 no-print space-y-5">
            <h2 className="text-xl font-bold text-gray-900 font-display">Enter Your Store UPI Details</h2>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Store / Shop Name (Displayed on Standee)
              </label>
              <input
                type="text"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                placeholder="e.g. Mahalaxmi Supermarket"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 font-bold text-gray-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Your UPI ID (VPA)
              </label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="e.g. 9876543210@paytm or yourname@okaxis"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 font-mono font-bold text-gray-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
              <span className="text-[11px] text-gray-400 mt-1 block">Found in your Google Pay, PhonePe, Paytm, or BHIM profile</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Payee Legal Name (Bank Account Name)
              </label>
              <input
                type="text"
                value={payeeName}
                onChange={(e) => setPayeeName(e.target.value)}
                placeholder="e.g. Ramesh Chandra Sharma"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 font-semibold text-gray-800 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Fixed Amount (₹) <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="number"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Leave empty"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 font-semibold text-gray-800 focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Payment Note
                </label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="e.g. Store Bill"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 font-semibold text-gray-800 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex gap-3">
              <button
                onClick={handlePrint}
                className="flex-1 py-3.5 rounded-xl bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>🖨️</span> Print Counter Standee
              </button>
            </div>
          </div>

          {/* Standee Preview Column */}
          <div className="lg:col-span-6 flex justify-center">
            {/* The Standee Card (Printable) */}
            <div
              id="standee-card"
              className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-amber-500 max-w-sm w-full text-center relative overflow-hidden print:border-4 print:border-black print:shadow-none print:m-0"
            >
              {/* Standee Header Banner */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-4 -mx-8 -mt-8 mb-6 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-widest block text-white/90">
                  Accepted Here
                </span>
                <span className="text-lg font-extrabold font-display">SCAN & PAY WITH ANY UPI APP</span>
              </div>

              {/* Shop Title */}
              <h3 className="text-2xl font-black font-display text-gray-900 mb-1 leading-tight">
                {shopName || "My Retail Shop"}
              </h3>
              <p className="text-xs text-gray-500 mb-6 font-medium">
                Merchant: <strong className="text-gray-800">{payeeName || shopName}</strong>
              </p>

              {/* QR Code Container */}
              <div className="bg-amber-50 p-4 rounded-2xl border-2 border-dashed border-amber-300 inline-block mb-4 shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrImageUrl}
                  alt="UPI Payment QR Code"
                  width={240}
                  height={240}
                  className="rounded-xl mx-auto mix-blend-multiply"
                />
              </div>

              {/* UPI ID Display */}
              <div className="bg-gray-100 py-1.5 px-3 rounded-lg font-mono text-xs font-bold text-gray-700 mb-6 inline-block">
                UPI ID: {upiId || "yourname@upi"}
              </div>

              {amount && Number(amount) > 0 && (
                <div className="mb-4">
                  <span className="text-xs text-gray-500 block">Amount to Pay</span>
                  <span className="text-2xl font-extrabold text-amber-700">₹{amount}</span>
                </div>
              )}

              {/* Supported UPI Apps Row */}
              <div className="pt-4 border-t border-gray-200">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                  All UPI Apps Supported (0% Charges)
                </span>
                <div className="flex justify-center items-center gap-3 text-xs font-extrabold text-gray-700">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-200">GPay</span>
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-700 rounded border border-purple-200">PhonePe</span>
                  <span className="px-2 py-0.5 bg-cyan-50 text-cyan-700 rounded border border-cyan-200">Paytm</span>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">BHIM</span>
                </div>
              </div>

              {/* Footer Stamp */}
              <div className="mt-6 pt-3 border-t border-gray-100 text-[9px] text-gray-400 flex items-center justify-center gap-1">
                <span>Created with Vyop POS (vyop.in)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action for dynamic thermal receipts */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-xl text-center no-print">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
            Why counter standees lose money
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 font-display">
            Print Dynamic UPI QR on Every Bill with Vyop POS!
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
            With static standees, customers have to type the amount manually and sometimes make mistakes. Vyop POS automatically embeds a dynamic UPI QR code on the customer&apos;s thermal receipt with the exact bill amount. Fast, error-free, and free to start with ₹999/yr Pro cloud sync!
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white font-bold text-sm hover:scale-105 transition-transform shadow-lg"
          >
            Download Vyop Free on Google Play →
          </a>
        </div>
      </section>

      <div className="no-print">
        <Footer />
      </div>
    </main>
  );
}
