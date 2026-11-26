"use client";

import { useState } from "react";

interface InvoiceItem {
  id: string;
  name: string;
  qty: number;
  rate: number;
  gstRate: number;
}

export default function InvoiceGeneratorClient() {
  const [businessName, setBusinessName] = useState("Shree Ganesh Traders");
  const [businessGstin, setBusinessGstin] = useState("");
  const [businessPhone, setBusinessPhone] = useState("+91 98765 43210");
  const [businessAddress, setBusinessAddress] = useState("Shop No. 12, Main Market, Jaipur, Rajasthan");

  const [customerName, setCustomerName] = useState("Ramesh Kumar");
  const [customerPhone, setCustomerPhone] = useState("+91 91234 56789");
  const [invoiceNumber, setInvoiceNumber] = useState("INV-2026-001");
  const [invoiceDate, setInvoiceDate] = useState("2026-11-26");
  const [isInterState, setIsInterState] = useState(false);
  const [copied, setCopied] = useState(false);

  const [items, setItems] = useState<InvoiceItem[]>([
    { id: "1", name: "Fortune Sunlite Sunflower Oil 1L", qty: 2, rate: 145, gstRate: 5 },
    { id: "2", name: "Aashirvaad Shudh Chakki Atta 10kg", qty: 1, rate: 420, gstRate: 0 },
    { id: "3", name: "Tata Salt 1kg", qty: 3, rate: 28, gstRate: 0 },
    { id: "4", name: "Cadbury Dairy Milk Silk 150g", qty: 2, rate: 175, gstRate: 18 },
  ]);

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      name: "",
      qty: 1,
      rate: 0,
      gstRate: 5,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    if (items.length <= 1) return;
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  const subtotal = items.reduce((acc, item) => acc + (Number(item.qty) || 0) * (Number(item.rate) || 0), 0);

  const taxDetails = items.reduce(
    (acc, item) => {
      const itemSub = (Number(item.qty) || 0) * (Number(item.rate) || 0);
      const tax = (itemSub * (Number(item.gstRate) || 0)) / 100;
      return {
        totalTax: acc.totalTax + tax,
        cgst: isInterState ? 0 : acc.cgst + tax / 2,
        sgst: isInterState ? 0 : acc.sgst + tax / 2,
        igst: isInterState ? acc.igst + tax : 0,
      };
    },
    { totalTax: 0, cgst: 0, sgst: 0, igst: 0 }
  );

  const grandTotal = Math.round(subtotal + taxDetails.totalTax);

  const handleCopyWhatsApp = () => {
    const text = `🧾 *INVOICE: ${invoiceNumber}*
🏢 *${businessName}*
📅 Date: ${invoiceDate}
👤 Customer: ${customerName}

*Items:*
${items
  .map(
    (item, i) =>
      `${i + 1}. ${item.name} (${item.qty} x ₹${item.rate}) = ₹${(item.qty * item.rate).toFixed(2)}`
  )
  .join("\n")}

----------------------------
Subtotal: ₹${subtotal.toFixed(2)}
GST Tax: ₹${taxDetails.totalTax.toFixed(2)}
*Grand Total: ₹${grandTotal.toFixed(2)}*
----------------------------
Thank you for shopping with us!`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-200 print:border-none print:shadow-none print:p-0">
      {/* Top Bar: Inter-State Toggle & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-100 no-print">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-sm font-semibold text-gray-700">Transaction Type:</span>
          <button
            type="button"
            onClick={() => setIsInterState(false)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              !isInterState ? "bg-amber-500 text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Intra-State (CGST + SGST)
          </button>
          <button
            type="button"
            onClick={() => setIsInterState(true)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              isInterState ? "bg-amber-500 text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Inter-State (IGST)
          </button>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleCopyWhatsApp}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
          >
            <span>💬</span> {copied ? "Copied to WhatsApp!" : "Share on WhatsApp"}
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gray-900 text-white hover:bg-black transition-colors shadow-sm"
          >
            <span>🖨️</span> Print / Save PDF
          </button>
        </div>
      </div>

      {/* Invoice Document Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-100">
        {/* Seller Information */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2 block">Seller Details (Billed By)</span>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Business / Store Name"
            className="w-full text-xl font-bold font-display text-gray-900 border-b border-dashed border-gray-300 focus:border-amber-500 focus:outline-none mb-2 py-1"
          />
          <input
            type="text"
            value={businessGstin}
            onChange={(e) => setBusinessGstin(e.target.value.toUpperCase())}
            placeholder="Seller GSTIN (optional, e.g. 27AABCU9603R1ZM)"
            className="w-full text-xs font-medium text-gray-600 border-b border-dashed border-gray-200 focus:border-amber-500 focus:outline-none mb-2 py-1"
          />
          <input
            type="text"
            value={businessPhone}
            onChange={(e) => setBusinessPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full text-xs font-medium text-gray-600 border-b border-dashed border-gray-200 focus:border-amber-500 focus:outline-none mb-2 py-1"
          />
          <input
            type="text"
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
            placeholder="Address & City"
            className="w-full text-xs font-medium text-gray-600 border-b border-dashed border-gray-200 focus:border-amber-500 focus:outline-none py-1"
          />
        </div>

        {/* Invoice Meta & Customer Details */}
        <div className="md:text-right flex flex-col md:items-end">
          <span className="text-2xl font-extrabold font-display text-gray-900 mb-2">TAX INVOICE</span>
          <div className="flex items-center gap-2 mb-2 md:justify-end">
            <span className="text-xs text-gray-500 font-bold">Invoice #:</span>
            <input
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className="text-xs font-bold text-gray-800 border-b border-dashed border-gray-300 focus:outline-none w-32 md:text-right"
            />
          </div>
          <div className="flex items-center gap-2 mb-4 md:justify-end">
            <span className="text-xs text-gray-500 font-bold">Date:</span>
            <input
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className="text-xs text-gray-700 border-b border-dashed border-gray-300 focus:outline-none md:text-right"
            />
          </div>

          <div className="w-full md:w-64 pt-3 border-t border-gray-100 text-left md:text-right">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Customer Details</span>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Customer Name"
              className="w-full text-sm font-semibold text-gray-900 border-b border-dashed border-gray-300 focus:outline-none mb-1 md:text-right"
            />
            <input
              type="text"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="Customer Phone"
              className="w-full text-xs text-gray-600 border-b border-dashed border-gray-200 focus:outline-none md:text-right"
            />
          </div>
        </div>
      </div>

      {/* Line Items Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-gray-200 text-xs font-bold text-gray-700 uppercase tracking-wider bg-gray-50/70">
              <th className="py-3 px-3 w-10">#</th>
              <th className="py-3 px-3">Item Description</th>
              <th className="py-3 px-3 w-20 text-center">Qty</th>
              <th className="py-3 px-3 w-28 text-right">Price (₹)</th>
              <th className="py-3 px-3 w-24 text-center">GST %</th>
              <th className="py-3 px-3 w-32 text-right">Amount (₹)</th>
              <th className="py-3 px-2 w-10 no-print"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {items.map((item, index) => {
              const lineTotal = (Number(item.qty) || 0) * (Number(item.rate) || 0);
              return (
                <tr key={item.id} className="hover:bg-gray-50/50">
                  <td className="py-3 px-3 text-xs text-gray-400 font-bold">{index + 1}</td>
                  <td className="py-3 px-3">
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => updateItem(item.id, "name", e.target.value)}
                      placeholder="e.g. Basmati Rice 5kg"
                      className="w-full font-medium text-gray-900 border-b border-transparent focus:border-amber-500 focus:outline-none py-1"
                    />
                  </td>
                  <td className="py-3 px-3 text-center">
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) => updateItem(item.id, "qty", Number(e.target.value))}
                      className="w-16 text-center font-semibold text-gray-800 border rounded-lg py-1 px-1 focus:outline-none focus:border-amber-500"
                    />
                  </td>
                  <td className="py-3 px-3 text-right">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.rate}
                      onChange={(e) => updateItem(item.id, "rate", Number(e.target.value))}
                      className="w-24 text-right font-semibold text-gray-800 border rounded-lg py-1 px-2 focus:outline-none focus:border-amber-500"
                    />
                  </td>
                  <td className="py-3 px-3 text-center">
                    <select
                      value={item.gstRate}
                      onChange={(e) => updateItem(item.id, "gstRate", Number(e.target.value))}
                      className="text-xs font-semibold text-gray-700 border rounded-lg py-1 px-2 focus:outline-none focus:border-amber-500 bg-white"
                    >
                      <option value="0">0%</option>
                      <option value="5">5%</option>
                      <option value="18">18%</option>
                      <option value="40">40%</option>
                    </select>
                  </td>
                  <td className="py-3 px-3 text-right font-bold text-gray-900">
                    ₹{lineTotal.toFixed(2)}
                  </td>
                  <td className="py-3 px-2 text-center no-print">
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-gray-300 hover:text-red-500 font-bold text-base px-1"
                      title="Remove item"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Add Item Button */}
      <div className="mb-8 no-print">
        <button
          type="button"
          onClick={addItem}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border border-dashed border-amber-400 text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors"
        >
          <span>➕</span> Add Another Item
        </button>
      </div>

      {/* Invoice Summary Calculation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 leading-relaxed">
          <span className="font-bold text-gray-700 block mb-1">Terms &amp; Conditions:</span>
          <p>1. Goods once sold will not be taken back or exchanged without bill.</p>
          <p>2. Subject to local jurisdiction. Computer generated invoice.</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal (Taxable Value):</span>
            <span className="font-semibold text-gray-800">₹{subtotal.toFixed(2)}</span>
          </div>

          {!isInterState ? (
            <>
              <div className="flex justify-between text-xs text-gray-500">
                <span>CGST (Central Tax):</span>
                <span>₹{taxDetails.cgst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>SGST (State Tax):</span>
                <span>₹{taxDetails.sgst.toFixed(2)}</span>
              </div>
            </>
          ) : (
            <div className="flex justify-between text-xs text-gray-500">
              <span>IGST (Integrated Tax):</span>
              <span>₹{taxDetails.igst.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between text-lg font-extrabold text-gray-900 pt-3 border-t border-gray-200">
            <span>Grand Total:</span>
            <span className="text-amber-700">₹{grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
