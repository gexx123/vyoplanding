"use client";

import { useState } from "react";
import { Scan, Sparkles, Printer, CheckCircle2, ArrowRight, Zap, RefreshCw, ShoppingBag } from "lucide-react";

export default function BarcodeScannerShowcase() {
  const [activeTab, setActiveTab] = useState<"barcode" | "ai_visual" | "printer">("barcode");

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden max-w-5xl mx-auto my-12">
      {/* Mode Selector Tabs */}
      <div className="flex border-b border-gray-100 bg-gray-50/70 p-2 gap-2">
        <button
          onClick={() => setActiveTab("barcode")}
          className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "barcode"
              ? "bg-white text-gray-900 shadow-md border border-gray-200/80"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
          }`}
        >
          <Scan className="w-4 h-4 text-amber-600" />
          <span>Supermarket Barcode Scan</span>
          <span className="hidden md:inline-block px-2 py-0.5 rounded-full text-[10px] bg-amber-100 text-amber-800 font-extrabold">0.05s</span>
        </button>

        <button
          onClick={() => setActiveTab("ai_visual")}
          className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "ai_visual"
              ? "bg-white text-gray-900 shadow-md border border-gray-200/80"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
          }`}
        >
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>AI Visual Scanner</span>
          <span className="hidden md:inline-block px-2 py-0.5 rounded-full text-[10px] bg-purple-100 text-purple-800 font-extrabold">No Barcode Needed</span>
        </button>

        <button
          onClick={() => setActiveTab("printer")}
          className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "printer"
              ? "bg-white text-gray-900 shadow-md border border-gray-200/80"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
          }`}
        >
          <Printer className="w-4 h-4 text-blue-600" />
          <span>Barcode Sticker Generator</span>
          <span className="hidden md:inline-block px-2 py-0.5 rounded-full text-[10px] bg-blue-100 text-blue-800 font-extrabold">Bluetooth</span>
        </button>
      </div>

      {/* Tab 1: Barcode Scan */}
      {activeTab === "barcode" && (
        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
              <Zap className="w-3.5 h-3.5" /> Hardware-Accelerated Native Video Stream
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-display">
              Mall-Speed Barcode Billing on Any Smartphone
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Why pay ₹3,500 to ₹8,000 for a wired laser scanner gun? Point your Android or iPhone camera at any product packaging. Vyop scans <strong>EAN-13, UPC, Code 128, and QR codes</strong> from 3 feet away even in dim shop lighting.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong>Continuous Multi-Item Scan:</strong> Scan 10 items in 15 seconds without tapping "Done" between scans.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong>Zero-Delay Add:</strong> If barcode matches your catalog, it adds immediately. If new, opens 1-tap quick add.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong>Works 100% Offline:</strong> Local database decodes barcodes without requiring active Wi-Fi or 5G.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Simulated Viewport */}
          <div className="lg:col-span-6 bg-gray-900 rounded-3xl p-5 text-white shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">🟢 Camera Scanner Active</span>
              </div>
              <span className="text-[11px] font-mono text-gray-400">FPS: 60 | Latency: 12ms</span>
            </div>

            {/* Viewfinder Graphic */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-950 rounded-2xl flex flex-col items-center justify-center p-6 border border-gray-700/50 overflow-hidden">
              {/* Laser Line Animation */}
              <div className="absolute inset-x-8 h-0.5 bg-red-500 shadow-[0_0_12px_#ef4444] animate-bounce top-1/3"></div>

              {/* Reticle Target */}
              <div className="w-48 h-28 border-2 border-dashed border-emerald-400/70 rounded-xl relative flex flex-col items-center justify-center bg-black/30 backdrop-blur-[2px]">
                <div className="space-y-1 w-32 flex flex-col items-center">
                  <div className="w-full h-1 bg-white"></div>
                  <div className="w-full h-1.5 bg-white"></div>
                  <div className="w-full h-0.5 bg-white"></div>
                  <div className="w-full h-2 bg-white"></div>
                  <div className="w-full h-1 bg-white"></div>
                  <div className="text-[9px] font-mono tracking-widest text-emerald-400 pt-1 font-bold">8901030383120</div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs text-gray-300 font-medium bg-black/60 px-3 py-1 rounded-full border border-gray-700">
                  ⚡ Auto-Detected: <strong className="text-white">Tata Salt 1kg</strong> (₹28)
                </span>
              </div>
            </div>

            {/* Live Cart Snapshot */}
            <div className="mt-4 bg-gray-800/80 rounded-2xl p-3.5 border border-gray-700 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">Current Scanned Draft</div>
                <div className="text-sm font-bold text-white">3 items • Total: ₹146.00</div>
              </div>
              <a
                href="https://vyop.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-black text-xs font-bold transition-transform active:scale-95"
              >
                Checkout Now →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: AI Visual Scanner */}
      {activeTab === "ai_visual" && (
        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" /> World-First AI Product Recognition
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-display">
              Scan Unbarcoded Products with Just a Photo
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              In India, over 50% of retail products have <strong>no barcode</strong> — fresh bakery sweets, loose grains, tailored apparel, fruits, vegetables, and loose hardware fittings. While other apps force you to manually type names, Vyop’s <strong>multi-source AI engine</strong> identifies the product visually.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong>Instant Visual Recognition:</strong> Proprietary AI matches product appearance, colors, and shape in &lt;200ms.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong>Smart Packaging Reader:</strong> Instantly recognizes brand names and product text printed on packets & boxes completely offline.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong>Intelligent Auto-Catalog:</strong> If an item is brand new, Vyop automatically recognizes the item and creates your inventory listing in 1 tap.
                </p>
              </div>
            </div>
          </div>

          {/* Simulated AI Recognition Viewport */}
          <div className="lg:col-span-6 bg-gradient-to-b from-gray-900 to-purple-950 rounded-3xl p-5 text-white shadow-2xl relative overflow-hidden border border-purple-900/50">
            <div className="flex items-center justify-between border-b border-purple-800/40 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" />
                <span className="text-xs font-mono text-purple-300 font-bold uppercase tracking-wider">Vyop AI Scanner</span>
              </div>
              <span className="text-[11px] font-mono text-purple-300">Confidence: 98.4%</span>
            </div>

            <div className="relative aspect-[4/3] bg-purple-950/60 rounded-2xl flex flex-col items-center justify-center p-6 border border-purple-500/30 overflow-hidden">
              <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-amber-600/30 to-amber-700/20 border-2 border-purple-400/80 flex flex-col items-center justify-center p-4 shadow-[0_0_25px_rgba(168,85,247,0.3)]">
                <span className="text-4xl mb-2">🧁</span>
                <span className="text-[11px] font-bold text-amber-200">Fresh Gulab Jamun</span>
                <span className="text-[10px] text-gray-400">No Barcode</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="text-[10px] bg-purple-900/80 text-purple-200 px-2.5 py-1 rounded-full border border-purple-700/60">
                  ✓ Visual Match: 98%
                </span>
                <span className="text-[10px] bg-emerald-900/80 text-emerald-200 px-2.5 py-1 rounded-full border border-emerald-700/60">
                  ✓ Package Identified: Matched
                </span>
              </div>
            </div>

            {/* Smart Variant Drawer Alert */}
            <div className="mt-4 bg-purple-900/40 border border-purple-500/40 rounded-2xl p-3.5 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-purple-300 uppercase font-bold tracking-wider">Auto Variant Detection</div>
                <div className="text-xs font-semibold text-white">Select Pack Size: [250g - ₹120] • [500g - ₹230]</div>
              </div>
              <span className="px-3 py-1 rounded-lg bg-purple-500 text-white font-bold text-xs">
                1-Tap Add
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Barcode Sticker Generator */}
      {activeTab === "printer" && (
        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
              <Printer className="w-3.5 h-3.5" /> Built-in SKU Barcode Generator
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-display">
              Generate & Print Barcode Price Tags Directly from Phone
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Create your own branded barcodes for loose items, garment tags, tailor batches, or boutique collections. Connect any <strong>portable Bluetooth thermal label printer (58mm / 80mm)</strong> to your smartphone and print 100 price tags in minutes.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong>Standard Label Sizes:</strong> Supports 50x25mm, 38x25mm, 2-inch, and 3-inch roll stickers.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong>Includes Crucial Details:</strong> Shop Name, Product Name, Size/Color, MRP, Our Price, and Scannable Code 128 barcode.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong>Zero Driver Installation:</strong> Pairs instantly with any thermal printer via Android Bluetooth or USB OTG.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Sticker Preview */}
          <div className="lg:col-span-6 bg-slate-900 rounded-3xl p-6 text-white shadow-2xl flex flex-col items-center justify-center">
            <div className="text-xs font-mono text-slate-400 mb-4 text-center">
              Real-time 50×25mm Thermal Sticker Render
            </div>

            {/* Rendered Sticker */}
            <div className="w-64 bg-white text-gray-900 p-4 rounded-xl shadow-lg border-2 border-gray-300 font-mono text-center">
              <div className="text-[12px] font-black uppercase tracking-wider text-gray-800">SHREE KRISHNA FASHIONS</div>
              <div className="text-[11px] font-bold text-gray-900 truncate">Cotton Formal Shirt (Blue)</div>
              <div className="text-[10px] text-gray-600">Size: 42 (L) • SKU: SKF-SHT-42</div>

              {/* Barcode Lines */}
              <div className="my-2 py-1 flex items-center justify-center">
                <div className="flex items-center gap-[2px] h-10 px-2 bg-gray-50 border border-gray-200">
                  {[2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 1, 3, 2, 1].map((w, idx) => (
                    <div key={idx} className="h-full bg-black" style={{ width: `${w}px` }}></div>
                  ))}
                </div>
              </div>

              <div className="text-[10px] tracking-widest font-bold">SKF89201948</div>
              <div className="mt-1 pt-1 border-t border-dashed border-gray-400 flex items-center justify-between text-xs font-bold">
                <span className="text-gray-500 line-through">MRP: ₹999</span>
                <span className="text-emerald-700 text-sm font-black">Offer: ₹599</span>
              </div>
            </div>

            <div className="mt-5 text-center">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/40 text-blue-200 text-xs font-medium">
                🖨️ Ready to print on any Bluetooth ESC/POS printer
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
