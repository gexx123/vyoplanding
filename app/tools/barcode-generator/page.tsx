"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { generateCode128Svg } from "@/lib/barcodeSvg";
import Link from "next/link";

export default function FreeBarcodeGeneratorPage() {
  const [productName, setProductName] = useState("Amul Butter 100g");
  const [productPrice, setProductPrice] = useState("58");
  const [barcodeCode, setBarcodeCode] = useState("8901262010014");
  const [quantity, setQuantity] = useState(12);

  const svgContent = generateCode128Svg(barcodeCode || "8901262010014");

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const stickersHtml = Array.from({ length: quantity })
      .map(
        () => `
        <div style="border: 1px dashed #ccc; padding: 10px; text-align: center; font-family: sans-serif; background: #fff; border-radius: 8px;">
          <div style="font-size: 12px; font-weight: bold; margin-bottom: 2px;">${productName}</div>
          <div style="font-size: 14px; font-weight: bold; color: #d97706; margin-bottom: 4px;">MRP: ₹${productPrice}</div>
          ${svgContent}
        </div>
      `
      )
      .join("");

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print Barcode Stickers - Vyop</title>
          <style>
            body { font-family: sans-serif; padding: 20px; background: #fff; }
            .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
            @media print {
              .no-print { display: none; }
              body { padding: 0; }
            }
          </style>
        </head>
        <body>
          <div class="no-print" style="margin-bottom: 20px; text-align: center;">
            <button onclick="window.print()" style="padding: 10px 20px; font-size: 16px; background: #d97706; color: #fff; border: none; border-radius: 8px; cursor: pointer;">
              Click to Print ${quantity} Barcode Stickers
            </button>
          </div>
          <div class="grid">${stickersHtml}</div>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-36 pb-20 px-6 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            100% Free Online Retail Tool
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display mb-4">
            Free Online <span className="gradient-text">Barcode Generator</span> & Label Printer
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Generate EAN/CODE128 barcode stickers for any retail product. Print custom barcode price tags for free right from your browser!
          </p>
        </div>

        {/* Barcode Generator Tool Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-5">
            <h3 className="text-xl font-bold font-display text-gray-900 border-b pb-3">
              Enter Product Details
            </h3>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="e.g. Amul Butter 100g"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-500 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Price (MRP)
              </label>
              <input
                type="text"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                placeholder="e.g. 58"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-500 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Barcode Number / Code
              </label>
              <input
                type="text"
                value={barcodeCode}
                onChange={(e) => setBarcodeCode(e.target.value)}
                placeholder="e.g. 8901262010014"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-500 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Print Sheet Quantity ({quantity} Labels)
              </label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-500 text-sm font-medium"
              >
                <option value={6}>6 Stickers Sheet</option>
                <option value={12}>12 Stickers Sheet</option>
                <option value={24}>24 Stickers Sheet</option>
                <option value={48}>48 Stickers Sheet</option>
              </select>
            </div>

            <button
              onClick={handlePrint}
              className="w-full py-3.5 px-6 rounded-2xl bg-[var(--brand-primary)] text-white font-bold text-base hover:scale-[1.02] transition-all shadow-[var(--shadow-gold)] flex items-center justify-center gap-2"
            >
              <span>🖨️</span> Print Sticker Sheet ({quantity} Labels)
            </button>
          </div>

          {/* Right Live Preview (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="flex items-center justify-between border-b pb-3 mb-6">
                <h3 className="text-xl font-bold font-display text-gray-900">
                  Live Barcode Sticker Preview
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-800">
                  Scannable CODE128
                </span>
              </div>

              {/* Single Sticker Card Box */}
              <div className="max-w-xs mx-auto p-6 bg-[#FAF7F0] border-2 border-dashed border-amber-300 rounded-2xl text-center shadow-inner">
                <div className="text-base font-bold text-gray-900 mb-1 truncate">
                  {productName || "Product Name"}
                </div>
                <div className="text-lg font-extrabold text-amber-700 mb-3">
                  MRP: ₹{productPrice || "00"}
                </div>
                <div
                  className="bg-white p-3 rounded-xl border border-gray-200"
                  dangerouslySetInnerHTML={{ __html: svgContent }}
                />
              </div>
            </div>

            {/* App Conversion Callout Banner */}
            <div className="mt-8 p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-amber-900">
                  ⚡ Want to Scan Barcodes with your Mobile Phone?
                </div>
                <div className="text-xs text-amber-700 mt-0.5">
                  Vyop turns your Android camera into a supermarket barcode POS scanner with zero hardware cost!
                </div>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.vyop.app"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 rounded-xl bg-black text-white text-xs font-bold hover:scale-105 transition-transform shadow-md"
              >
                Get Free App
              </a>
            </div>
          </div>
        </div>

        {/* SEO / AEO Q&A Section */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-6">
          <h2 className="text-2xl font-bold font-display text-gray-900">
            How to Use the Free Barcode Generator for Your Shop
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">1. Enter Barcode Code</h4>
              <p>Type any product barcode number (EAN-13, UPC, or custom SKU number) to generate a scannable barcode image.</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">2. Add Name & Price</h4>
              <p>Include your item name and MRP price so your printed sticker doubles as an instant product price tag for customers.</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">3. Scan with Vyop</h4>
              <p>Use the free Vyop smartphone app to scan these barcode stickers instantly for lightning-fast 5-second customer billing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free Online Barcode Generator & Printer - Vyop",
            "url": "https://vyop.in/tools/barcode-generator",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "browserRequirements": "Requires JavaScript",
            "description": "Generate and print scannable EAN/CODE128 barcode stickers for retail items for free.",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
          })
        }}
      />

      <Footer />
    </main>
  );
}
