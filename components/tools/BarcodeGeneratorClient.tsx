"use client";

import { useState } from "react";
import { generateCode128Svg } from "@/lib/barcodeSvg";

export default function BarcodeGeneratorClient() {
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
      {/* Left Form (5 Cols) */}
      <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-5">
        <h2 className="text-xl font-bold font-display text-gray-900 border-b pb-3">
          Enter Product Details
        </h2>

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
          type="button"
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
            <h2 className="text-xl font-bold font-display text-gray-900">
              Live Barcode Sticker Preview
            </h2>
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
  );
}
