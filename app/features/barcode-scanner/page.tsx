import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FAQ from "@/components/sections/FAQ";
import Link from "next/link";
import { Barcode, Scan, Camera, Printer, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Smartphone Barcode POS Scanner App for Kirana & Retail — Vyop",
  description:
    "Turn your smartphone into a supermarket barcode POS scanner. Scan existing product barcodes, convert any item photo into a custom barcode, and print barcode stickers for free.",
  keywords: [
    "smartphone barcode scanner POS",
    "barcode billing app",
    "kirana barcode scanner software",
    "free barcode POS app",
    "print product barcodes",
  ],
};

export default function BarcodeScannerFeaturePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-amber-50/50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-6">
            Smart POS Hardware Alternative
          </span>
          <h1
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Turn Your Smartphone into a Supermarket Barcode Scanner
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-body">
            No expensive handheld barcode scanners needed. Point your mobile camera at any barcode to bill instantly, or click a photo of any item to create custom barcodes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://vyop.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
            >
              Try Barcode Scanner Free <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#FDFCF7] border border-amber-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6">
              <Scan className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Instant Camera Scanner</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-body">
              Scan standard EAN, UPC, and QR barcodes using your smartphone camera at supermarket speed.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FDFCF7] border border-amber-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Photo-to-Barcode Generator</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-body">
              Unlabeled items? Take a photo of any product and Vyop turns it into a scannable custom barcode.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FDFCF7] border border-amber-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6">
              <Printer className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">Print Barcode Stickers</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-body">
              Generate and print custom barcode price tags directly from your mobile or Bluetooth thermal printer.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
