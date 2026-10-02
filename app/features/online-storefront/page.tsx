import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import {
  ShoppingBag,
  Share2,
  Percent,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Smartphone,
  QrCode,
  Store,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
  UtensilsCrossed,
  Hotel,
  Shirt,
  Cake,
  Wrench,
  Pill,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Create Free Online Ordering Website for Any Shop, Restaurant & Hotel (0% Commission) | Vyop",
  description:
    "Launch a 0% commission online ordering website for your restaurant, hotel, retail shop, cafe, bakery, or store in 60 seconds. Table QR code menus, room service ordering, WhatsApp catalog, direct UPI payments, and zero aggregator cuts.",
  alternates: {
    canonical: "/features/online-storefront",
  },
  openGraph: {
    title: "Create Free Online Ordering Website for Any Shop, Restaurant & Hotel — 0% Commission | Vyop",
    description:
      "Turn your counter menu and inventory into a live online website. Table QR code menus, room service ordering, WhatsApp catalogs, direct UPI payments, and 100% profit with zero middleman commissions.",
    url: "https://vyop.in/features/online-storefront",
    type: "website",
  },
  keywords: [
    // Real User English High-Intent Searches
    "how to create website for my shop",
    "how to create online ordering website for restaurant free",
    "free online store builder india",
    "hotel room service qr menu software",
    "table qr code ordering system india",
    "0 commission food ordering website",
    "swiggy zomato alternative 0 commission",
    "how to take direct orders on whatsapp for shop",
    "free dukaan alternative without monthly fee",
    "free bikayi alternative for whatsapp catalog",
    "shopify alternative for small indian shop",
    "clothing boutique online store builder",
    "sweet shop bakery cake booking website",
    "mobile electronics store digital catalog link",
    "medical store prescription online ordering",
    "direct upi payment online store india",
    "scan qr code to order food software free",
    "cafe digital menu card with photos",
    "online ordering website for dhaba and fast food",
    "how to sell online from my retail shop free",
    // Real User Hinglish & Indian Colloquial Searches
    "apni dukan ki website kaise banaye",
    "dukan ka online store kaise banaye",
    "restaurant ki website kaise banaye",
    "restaurant me qr code se order kaise kare",
    "swiggy zomato commission se kaise bache",
    "hotel me room service qr code kaise lagaye",
    "kapde ki dukan ka catalog online kaise banaye",
    "mithai dukan cake order website kaise banaye",
    "bina computer mobile se dukan ki website kaise banaye",
    "bina coding shop website kaise banaye",
    "free me online store kaise banaye mobile se",
    "dukan ka whatsapp catalog link kaise banaye",
    "online bill aur order lene wali website",
  ],
};

const businessTypes = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants, Cafes & Dhabas",
    tagline: "Save 25–30% Aggregator Cuts",
    desc: "Generate Table QR menus for dine-in ordering, parcel/takeaway, and direct home deliveries. Orders route straight to your kitchen thermal printer (KOT) with 0% platform commission.",
    badge: "Food & Dining",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-orange-50/70 border-orange-200/70",
    highlights: ["Table QR Dine-in Orders", "Instant Kitchen KOT Sync", "0% Commission vs Swiggy/Zomato"],
  },
  {
    icon: Hotel,
    title: "Hotels, Resorts & Homestays",
    tagline: "In-Room Dining & Room Service",
    desc: "Place a sleek QR code in every guest room. Guests scan from their phone to order breakfast, dinner, or room amenities. Instant alert at the front desk and kitchen counter.",
    badge: "Hospitality",
    color: "from-blue-600 to-indigo-600",
    bgLight: "bg-blue-50/70 border-blue-200/70",
    highlights: ["Room-wise QR Code Orders", "Front Desk & Kitchen Alert", "Seamless Guest Folio Billing"],
  },
  {
    icon: Shirt,
    title: "Clothing, Boutiques & Footwear",
    tagline: "Digital Fashion Lookbook",
    desc: "Showcase apparel with high-res photos, size matrices (S, M, L, XL, XXL), and color variants. Customers order directly via WhatsApp or UPI checkout.",
    badge: "Fashion Retail",
    color: "from-pink-500 to-rose-500",
    bgLight: "bg-pink-50/70 border-pink-200/70",
    highlights: ["Size & Color Variant Matrix", "WhatsApp Photo Invoicing", "Festival Flash Sale Banners"],
  },
  {
    icon: Cake,
    title: "Bakeries, Cafes & Sweet Shops",
    tagline: "Cake & Mithai Advance Booking",
    desc: "Accept custom birthday cake pre-orders with flavor, weight, and custom message notes. Sell sweets and dry fruit gift hampers by weight (250g, 500g, 1kg) for festival rushes.",
    badge: "Bakery & Sweets",
    color: "from-amber-600 to-yellow-600",
    bgLight: "bg-amber-50/70 border-amber-200/70",
    highlights: ["Advance Cake Customization", "Weight-Based Mithai Pricing", "Diwali & Rakhi Bulk Bookings"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Electronics Stores",
    tagline: "Accessories & Repair Tracking",
    desc: "Publish digital catalogs for chargers, covers, headphones, and gadgets. Allow customers to check phone repair job statuses and warranty details online.",
    badge: "Electronics",
    color: "from-cyan-600 to-blue-600",
    bgLight: "bg-cyan-50/70 border-cyan-200/70",
    highlights: ["Accessory Showcase Link", "IMEI & Warranty Tracking", "Live Repair Status Lookup"],
  },
  {
    icon: Wrench,
    title: "Hardware, Electrical & Sanitary",
    tagline: "Contractor Price Lists & Quotes",
    desc: "Share your product catalog with builders, electricians, and plumbers. Send instant itemized estimates with 1-tap conversion to final GST bills upon delivery.",
    badge: "Hardware",
    color: "from-zinc-700 to-gray-800",
    bgLight: "bg-gray-50/70 border-gray-200/70",
    highlights: ["Contractor WhatsApp Catalog", "Dimension & Unit Conversion", "Instant PDF Quotations"],
  },
  {
    icon: Pill,
    title: "Pharmacies & Medical Stores",
    tagline: "Prescription Upload & Monthly Refills",
    desc: "Patients upload prescription photos directly to your store link. Send automated WhatsApp refill reminders to chronic care patients every 30 days.",
    badge: "Healthcare",
    color: "from-emerald-600 to-teal-600",
    bgLight: "bg-emerald-50/70 border-emerald-200/70",
    highlights: ["Prescription Photo Upload", "30-Day Auto Refill Alerts", "Compliant Medical Invoices"],
  },
  {
    icon: Store,
    title: "Kirana, Supermarkets & FMCG",
    tagline: "Fight Quick-Commerce Delivery",
    desc: "Give your neighborhood colony a fast, digital ordering portal. Customers order daily groceries on WhatsApp without you paying 20% commission to aggregator delivery apps.",
    badge: "Grocery & Retail",
    color: "from-green-600 to-emerald-700",
    bgLight: "bg-green-50/70 border-green-200/70",
    highlights: ["Camera Barcode Lookup", "Neighborhood 15-Min Delivery", "Direct UPI Payment QR"],
  },
];

const storeSteps = [
  {
    step: 1,
    title: "Add Items or Menu in Seconds",
    desc: "Scan barcodes with your phone camera, speak items in Hindi or English, or snap a photo of your printed restaurant menu/catalog. Products, rates, and photos auto-populate instantly.",
    time: "Instant",
  },
  {
    step: 2,
    title: "Auto-Generate Your Custom Store Link & QR Codes",
    desc: "Vyop instantly creates your responsive online website (e.g., vyop.shop/@yourbrand). Print table QR stands for dine-in dining, hotel room QR cards, or counter banners in 1 tap.",
    time: "60 Seconds",
  },
  {
    step: 3,
    title: "Share on WhatsApp, Google Maps & Social Media",
    desc: "Share your live link on WhatsApp status, broadcast lists, Instagram bio, and your Google Business Profile. Customers open the website directly on any mobile browser without downloading an app.",
    time: "1 Tap",
  },
  {
    step: 4,
    title: "Receive Direct Orders with 100% Profits",
    desc: "Dine-in table orders fire directly to your kitchen KOT printer. Delivery & takeaway orders ping your counter POS. Payments go straight to your personal UPI QR with 0% platform fee.",
    time: "0% Fees",
  },
];

const storefrontComparison = [
  {
    feature: "Commission Fee",
    vyop: "0% (Keep 100% of your earnings)",
    foodAggregators: "18% – 30% on every order",
    quickCommerce: "20% – 28% margin cut",
    customWeb: "High dev fees + gateway cuts",
  },
  {
    feature: "Monthly & Setup Cost",
    vyop: "Free to Start / ₹999/yr Pro",
    foodAggregators: "₹1,000+ onboarding + hidden fees",
    quickCommerce: "Mandatory warehouse listing",
    customWeb: "₹25,000–₹50,000 + ₹2,000/mo",
  },
  {
    feature: "Menu & Inventory Sync",
    vyop: "Automatic (Synced with Counter POS)",
    foodAggregators: "Manual menu toggling",
    quickCommerce: "Separate stock allocation",
    customWeb: "Manual double-entry data work",
  },
  {
    feature: "Customer Ownership",
    vyop: "100% Yours (Direct phone & WhatsApp)",
    foodAggregators: "Customer number masked & hidden",
    quickCommerce: "Zero customer contact access",
    customWeb: "Yours, but complex to manage",
  },
  {
    feature: "Payment Settlement",
    vyop: "Instant UPI directly to your bank account",
    foodAggregators: "7 to 15-day delayed payout batches",
    quickCommerce: "Bi-weekly accounting payouts",
    customWeb: "2-3 business day gateway hold",
  },
  {
    feature: "Table / Room QR Ordering",
    vyop: "Included (Table QR & Room Service)",
    foodAggregators: "Expensive add-on dine-in module",
    quickCommerce: "Not available",
    customWeb: "Requires custom app development",
  },
];

const faqs = [
  {
    question: "Apni dukan ki website mobile se kaise banaye? (Can I build it on phone without coding?)",
    answer:
      "Yes, completely! You don't need a computer, laptop, or any coding knowledge. Simply download the free Vyop POS app on your Android smartphone, add your shop items or restaurant dishes by speaking in Hindi/English or scanning barcodes, and tap 'Online Storefront'. Your custom live ordering website is generated instantly in 60 seconds.",
  },
  {
    question: "Swiggy Zomato commission se kaise bache? (How can restaurants save 30% commission?)",
    answer:
      "Vyop gives restaurants, cafes, dhabas, and cloud kitchens their own direct online ordering website with 0% commission. You share your direct menu link (vyop.shop/@yourrestaurant) on WhatsApp and Google Maps. Customers order directly, payments go straight to your personal UPI QR, and orders print on your kitchen KOT. A restaurant doing ₹3 Lakhs monthly saves ₹75,000 every single month in aggregator commissions.",
  },
  {
    question: "Restaurant me Table QR code se order kaise kare? (How does Dine-in Table QR work?)",
    answer:
      "Vyop provides custom printable QR codes for each dining table (Table 1, Table 2, Table 3, etc.). Customers scan the QR code with their phone camera, browse your full food menu with photos, and place their order. The order automatically routes to your kitchen thermal printer (Kitchen Order Ticket / KOT) with the exact table number without needing a waiter.",
  },
  {
    question: "Hotel me room service QR code kaise lagaye? (How does in-room dining work?)",
    answer:
      "Hotels and homestays can place a custom QR stand in each guest room (e.g., Room 101, Room 204). Guests scan the QR to order breakfast, dinner, or room amenities directly from their smartphone. The order alert pings both the front desk and the kitchen with the guest room number, and can be collected via UPI or added to the guest checkout folio.",
  },
  {
    question: "Is Vyop a free alternative to Dukaan, Bikayi, and Shopify?",
    answer:
      "Yes! Platforms like Dukaan, Bikayi, and Shopify charge high monthly subscription fees (₹1,500–₹3,000/month) and take extra payment gateway commissions. Vyop Storefront is free to start, charges 0% commission on orders, and connects directly to your counter billing POS so your in-store stock and online store remain perfectly synchronized.",
  },
  {
    question: "How do I take orders on WhatsApp with direct UPI payment?",
    answer:
      "When customers browse your Vyop store link on their phone, they add items to their cart and tap 'Checkout'. The complete order details (items, quantity, delivery address, total amount) are sent directly to your shop's WhatsApp. Payment goes straight to your personal UPI QR code (Google Pay, PhonePe, Paytm, BHIM) with zero delay and 0% deductions.",
  },
  {
    question: "Can clothing boutiques and retail shops manage size and color variants?",
    answer:
      "Absolutely. For apparel and footwear boutiques, Vyop supports size (S, M, L, XL, XXL) and color variants with photo galleries. For electronics and mobile shops, it manages warranty and accessories. For hardware, it handles loose units (meters, kg, pieces). Everything updates in real time as items sell at the counter.",
  },
  {
    question: "Do customers need to download an application to order from my store?",
    answer:
      "No app download is required for your customers. Your store link opens instantly in any mobile browser (Chrome, Safari, Firefox). Customers can browse your catalog, spin the reward wheel, and place orders in under 30 seconds.",
  },
  {
    question: "What is the Spin-the-Wheel discount reward feature?",
    answer:
      "Vyop Storefront includes an interactive Spin-The-Wheel game that delights customers when they open your store link. You can configure custom discounts (e.g., 5% off, free dessert, ₹50 discount) that customers spin to win, dramatically increasing order completion rates and repeat purchases.",
  },
];

export default function OnlineStorefrontFeaturePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-b from-amber-50/70 via-white to-gray-50/50 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-amber-200/50 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs md:text-sm font-bold uppercase tracking-wider mb-6 flex-wrap justify-center">
            <span>🚀</span> 0% Commission • Live in 60 Seconds • WhatsApp &amp; Table QR Ready
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Create a Live Online Store for Any{" "}
            <span className="gradient-text">Shop, Restaurant or Hotel</span>
          </h1>

          {/* AEO Direct Answer Paragraph for Search Engines & AI Overviews */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
            Whether you run a restaurant, cafe, hotel, clothing boutique, bakery, electronics shop, pharmacy, or grocery store, Vyop Storefront turns your counter inventory and menu into a live, mobile-friendly online ordering website in under 60 seconds. Dine-in QR ordering, room service, takeaway, WhatsApp catalogs, direct UPI payments, and <strong>0% commission</strong>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg shadow-lg shadow-amber-500/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <span>Launch Free Store Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/pos-app"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Explore POS &amp; KOT Features</span>
            </Link>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="text-2xl md:text-3xl font-extrabold text-emerald-600">0%</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Platform Commission</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="text-2xl md:text-3xl font-extrabold text-amber-600">60 Sec</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Instant Setup Time</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="text-2xl md:text-3xl font-extrabold text-blue-600">Table &amp; Room</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">QR Dine-in Ordering</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="text-2xl md:text-3xl font-extrabold text-purple-600">Instant UPI</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Direct Bank Settlement</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== MULTI-INDUSTRY SHOWCASE ====== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            Built for Every Business
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How Different Businesses Grow with Vyop Storefront
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Tailor-made features for food service, hotels, fashion boutiques, bakeries, medical stores, and retail shops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessTypes.map((biz, idx) => {
            const Icon = biz.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl border ${biz.bgLight} flex flex-col justify-between hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${biz.color} text-white flex items-center justify-center shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/80 border border-gray-200 text-gray-700 text-xs font-bold">
                      {biz.badge}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-bold text-gray-900 mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {biz.title}
                  </h3>
                  <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-3">
                    {biz.tagline}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-body">
                    {biz.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 space-y-2">
                  {biz.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ====== CORE FEATURES GRID ====== */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            Zero Platform Fees
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything You Need to Sell Online
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Stop losing 25–30% of your hard-earned revenue to delivery aggregators and expensive web development agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#FAF7F0] border border-amber-200/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Table &amp; Room QR Ordering
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Generate printable QR stands for dining tables and hotel rooms. Guests scan to view digital menus and place orders without waiting for staff.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-200/60 text-xs font-bold text-amber-800">
              Kitchen KOT &amp; Room Folio Integration
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF7F0] border border-amber-200/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6">
                <Percent className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                0% Commission Forever
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unlike Swiggy, Zomato, and Blinkit who take 18% to 30% per order, Vyop charges 0% commission. You keep 100% of your food &amp; product margins.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-200/60 text-xs font-bold text-emerald-800">
              Save ₹15,000–₹50,000 every month
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF7F0] border border-amber-200/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Live In-Store Inventory Sync
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Never sell an item that is out of stock. When a dish or product sells at your counter POS, your online store stock updates automatically in real time.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-200/60 text-xs font-bold text-blue-800">
              Zero manual inventory duplication
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF7F0] border border-amber-200/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Direct UPI QR Payments
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customer payments route directly to your personal UPI QR code (PhonePe, Google Pay, Paytm, BHIM). Money arrives in your bank instantly with zero gateway hold.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-200/60 text-xs font-bold text-purple-800">
              Instant bank settlement
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF7F0] border border-amber-200/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Instant WhatsApp Ordering
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customers browse your catalog on mobile, add items to cart, and send completed orders with items &amp; address directly to your WhatsApp.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-200/60 text-xs font-bold text-green-800">
              1-click WhatsApp order confirmation
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF7F0] border border-amber-200/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Spin-The-Wheel Rewards
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Boost repeat orders with gamified Spin-The-Wheel discounts, festive offer banners, and custom combo deals that delight buyers.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-200/60 text-xs font-bold text-amber-800">
              Up to 3x higher customer repeat orders
            </div>
          </div>
        </div>
      </section>

      {/* ====== STEP-BY-STEP HOWTO ====== */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              Simple 4-Step Setup
            </span>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How to Launch Your Online Store or Menu in 60 Seconds
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              No developer needed. If you know how to send a WhatsApp message, you can run a professional online store.
            </p>
          </div>

          <div className="space-y-6">
            {storeSteps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col sm:flex-row gap-6 items-start p-6 md:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3
                      className="text-xl font-bold text-gray-900"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                      ⚡ {step.time}
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== COMPARISON TABLE ====== */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Vyop Storefront vs Aggregators vs Custom Website
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Compare why hotels, restaurants, bakeries, and retail stores across India choose Vyop.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 overflow-x-auto">
          <table className="w-full text-left min-w-[750px]">
            <thead>
              <tr className="border-b-2 border-gray-100 bg-gray-50/50">
                <th className="py-4 px-4 text-sm font-bold text-gray-700">Feature</th>
                <th className="py-4 px-4 text-sm font-bold text-amber-700 bg-amber-50/60">
                  Vyop Storefront
                </th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">
                  Food Aggregators (Zomato / Swiggy)
                </th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">
                  Quick Commerce (Blinkit / Zepto)
                </th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">
                  Custom Website (Shopify / Agency)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {storefrontComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-amber-50/20 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900">{row.feature}</td>
                  <td className="py-4 px-4 font-bold text-emerald-700 bg-amber-50/20">{row.vyop}</td>
                  <td className="py-4 px-4 text-gray-600">{row.foodAggregators}</td>
                  <td className="py-4 px-4 text-gray-600">{row.quickCommerce}</td>
                  <td className="py-4 px-4 text-gray-600">{row.customWeb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ====== CTA BANNER ====== */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl md:text-5xl font-extrabold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Take Your Business Online Today?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 font-body">
            Join thousands of restaurants, cafes, hotels, boutiques, and retail shops across India selling directly with 0% middleman commission.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Build Your Free Store Now
            </a>
            <Link
              href="/solutions"
              className="px-8 py-4 rounded-xl bg-black text-white font-bold text-lg hover:bg-gray-900 transition-all"
            >
              View Industry Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                name: "Vyop Online Storefront & QR Menu Builder",
                operatingSystem: "Android, Windows, macOS, Web",
                applicationCategory: "BusinessApplication",
                applicationSubCategory: "ECommerceApplication",
                description:
                  "Free 0% commission online store, table QR menu, and website builder for Indian restaurants, cafes, hotels, clothing boutiques, bakeries, and retail shops. Create a live WhatsApp catalog link in 60 seconds with instant UPI payment and real-time inventory synchronization.",
                url: "https://vyop.in/features/online-storefront",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
                featureList: [
                  "0% Commission Online Storefront for Shops & Restaurants",
                  "Table QR Code Dine-in Ordering System for Restaurants & Cafes",
                  "Hotel Room Service QR Code Digital Menu Ordering",
                  "60-Second Instant Live Store Link Generation",
                  "Direct WhatsApp Ordering & Customer Communication",
                  "Instant UPI QR Code Payment (PhonePe, GPay, Paytm)",
                  "Automatic Real-Time Sync with In-Store POS Inventory & Kitchen KOT",
                  "Spin-The-Wheel Gamified Customer Discount Rewards",
                  "Size & Color Variant Support for Clothing & Boutiques",
                  "Prescription Upload for Medical Stores & Pharmacies",
                ],
              },
              {
                "@type": "HowTo",
                name: "How to Create a Free Online Store or Restaurant Menu in 60 Seconds",
                description:
                  "Step-by-step guide to launching a zero-commission online ordering website for your restaurant, hotel, or retail shop using Vyop.",
                totalTime: "PT1M",
                estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "0" },
                step: storeSteps.map((s) => ({
                  "@type": "HowToStep",
                  position: s.step,
                  name: s.title,
                  text: s.desc,
                })),
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.answer,
                  },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://vyop.in",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Features",
                    item: "https://vyop.in/features/barcode-scanner",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Online Storefront",
                    item: "https://vyop.in/features/online-storefront",
                  },
                ],
              },
            ],
          }),
        }}
      />

      <Footer />
    </main>
  );
}
