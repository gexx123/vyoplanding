import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import InteractiveStorefrontDemo from "@/components/storefront/InteractiveStorefrontDemo";
import ShopTypeSelectorSection from "@/components/storefront/ShopTypeSelectorSection";
import CommissionSavingsCalculator from "@/components/storefront/CommissionSavingsCalculator";
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
  Star,
  Gift,
  Lock,
  Flame,
  Eye,
  Layers,
  Gem,
  BookOpen,
  Car,
  Scissors,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Create Free Online Ordering Website for Any Shop, Restaurant & Hotel (0% Commission) | Vyop",
  description:
    "Launch a 0% commission online ordering website for your restaurant, hotel, retail shop, cafe, bakery, or store in 30 seconds. Table QR code menus, room service ordering, WhatsApp catalog, direct UPI payments, and zero aggregator cuts.",
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
    // 1. Kirana, Supermarket & FMCG High-Intent Searches
    "free online store for kirana shop",
    "kirana dukan ki online website kaise banaye",
    "grocery shop website maker free",
    "kirana store delivery website 0 commission",
    "apni rashan dukan ko online kaise kare",
    "supermarket billing software with customer ordering website",
    "grocery home delivery whatsapp link generator",
    "dukan ka saman online kaise beche",
    "blinkit zepto competitor for local kirana",
    "online grocery store maker with direct upi payment",
    
    // 2. Restaurant, Cafe, Dhaba & Cloud Kitchen Searches
    "how to create online ordering website for restaurant free",
    "restaurant ki website kaise banaye free me",
    "restaurant qr code digital menu and table ordering app",
    "restaurant table qr code ordering menu maker",
    "cafe digital menu card with photos and prices",
    "cloud kitchen online ordering website with kot printer",
    "0 commission food ordering website for restaurants",
    "swiggy zomato alternative 0 commission",
    "swiggy zomato commission bachane ka tarika",
    "swiggy zomato commission calculator",
    "dhaba food delivery website 0 percent commission",
    "scan qr code to order food software free",
    "hotel room service qr menu software",
    "table qr code ordering system india",
    "qr code menu card generator for restaurant",
    
    // 3. Clothing, Boutique, Garments & Fashion Retail
    "clothing boutique online store builder",
    "kapde ki dukan ka online store kaise banaye",
    "clothing boutique catalog with sizes and colors",
    "saree showroom online website maker free",
    "footwear shoe shop digital catalogue whatsapp",
    "fashion boutique online ordering website india",
    "garment shop barcode billing with online website",
    "boutique customer order tracking app",
    "online store with size and color variant support",
    
    // 4. Bakery, Cake Shop & Sweet Shop (Mithai)
    "sweet shop bakery cake booking website",
    "bakery cake advance booking website online",
    "mithai dukan cake order website kaise banaye",
    "custom birthday cake flavor and weight ordering link",
    "mithai dukan digital catalog for diwali rakhi rush",
    
    // 5. Medical Store, Chemist & Pharmacy
    "medical store prescription online ordering",
    "medical store prescription upload website",
    "chemist shop medicine online delivery website",
    "pharmacy billing software with customer website",
    "dawakhana online medicine order whatsapp link",
    
    // 6. Mobile, Electronics, Hardware & Electrical
    "mobile electronics store digital catalog link",
    "mobile accessories online catalog maker",
    "electronics shop online product showcase link",
    "hardware sanitary electrical store price list website",
    "cctv and computer shop digital catalog generator",
    "hardware shop contractor quotation website",
    
    // 7. Jewellery, Stationery, Gift & Auto Spares
    "jewellery shop digital catalog with gold rate",
    "stationery and gift shop online ordering link",
    "auto parts car bike spares digital catalog maker",
    "book store school booklist online order link",
    "pet shop online pet food delivery website",
    "salon and spa digital appointment service menu",
    
    // 8. General Indian Shopkeeper Intent & Hinglish Queries
    "how to create website for my shop",
    "apni dukan ki website kaise banaye",
    "dukan ka online store kaise banaye",
    "dukan ki website banane ka sabse aasan tarika",
    "bina computer mobile se dukan ki website kaise banaye",
    "bina coding shop website kaise banaye",
    "free me online store kaise banaye mobile se",
    "how to create online store in 30 seconds",
    "how to sell online from my retail shop free",
    "how to take direct orders on whatsapp for shop",
    "dukan ka whatsapp catalog link kaise banaye free",
    "dukan ka delivery order lene wala app",
    "free whatsapp catalogue maker with direct checkout",
    "online store with cash on delivery and direct upi",
    "free shop website with cash on delivery",
    "free dukaan alternative without monthly fee",
    "free bikayi alternative for whatsapp catalog",
    "shopify alternative for small indian shop",
    "vyapar alternative with live online storefront",
    "billing software with free online store",
    "pos machine with online store link generator",
    "online bill aur order lene wali website",
    "0 commission online ordering system for local shops",
    "free online store builder india",
    "local retail shop home delivery ordering website",
    "how to get orders on whatsapp from local society",
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
  {
    icon: Gem,
    title: "Jewellery, Gold & Luxury Gifts",
    tagline: "Live Gold Rate & High-Res Catalog",
    desc: "Showcase gold, silver, and diamond designs with live daily rate updates. Allow customers to browse rings, necklaces, and bridal sets with direct WhatsApp booking inquiries.",
    badge: "Jewellery & Luxury",
    color: "from-amber-400 to-yellow-500",
    bgLight: "bg-amber-50/70 border-amber-200/70",
    highlights: ["Daily Gold Rate Integration", "High-Resolution Design Gallery", "Direct WhatsApp VIP Inquiries"],
  },
  {
    icon: BookOpen,
    title: "Stationery, Bookstores & Toys",
    tagline: "School Booklists & Hamper Orders",
    desc: "Upload class-wise school book sets, art supplies, and board games. Parents order complete school stationery kits and birthday gifts with 1 tap on WhatsApp.",
    badge: "Books & Stationery",
    color: "from-indigo-600 to-violet-600",
    bgLight: "bg-indigo-50/70 border-indigo-200/70",
    highlights: ["Class-wise Booklist Bundles", "Art & Office Supply Packs", "Instant WhatsApp Society Delivery"],
  },
  {
    icon: Car,
    title: "Auto Parts, Bike Spares & Garages",
    tagline: "Vehicle Spares & Service Estimates",
    desc: "Categorize spare parts by vehicle brand and model (Maruti, Hyundai, Hero, Honda). Mechanics and vehicle owners order parts or request service estimates directly.",
    badge: "Automotive Spares",
    color: "from-red-600 to-rose-700",
    bgLight: "bg-red-50/70 border-red-200/70",
    highlights: ["Brand & Model Part Search", "Mechanic WhatsApp Estimates", "Fast Local Delivery Dispatch"],
  },
  {
    icon: Scissors,
    title: "Salons, Spas & Pet Care",
    tagline: "Service Menus & Pet Food Delivery",
    desc: "Display haircut, spa, and beauty service menus with pricing, or sell premium pet food, treats, and accessories with home delivery to nearby pet parents.",
    badge: "Salons & Services",
    color: "from-teal-600 to-cyan-700",
    bgLight: "bg-teal-50/70 border-teal-200/70",
    highlights: ["Digital Service Price List", "Bulk Pet Food Subscriptions", "Direct WhatsApp Booking"],
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
    feature: "Setup & Monthly Cost",
    vyop: "₹0 Free to Start / ₹999/yr Pro",
    shopify: "₹1,500 – ₹3,000/month",
    vyapar: "Paid Gold Plan only (no web store)",
    aggregators: "₹1,000+ onboarding + hidden cuts",
  },
  {
    feature: "Commission per Order",
    vyop: "0% (Keep 100% of your earnings)",
    shopify: "0% – 2% transaction fee",
    vyapar: "0% (basic PDF link only)",
    aggregators: "20% – 35% commission cut",
  },
  {
    feature: "Payment Gateway Deductions",
    vyop: "₹0 (Direct UPI to your Bank / COD)",
    shopify: "2% – 3% MDR + 18% GST tax",
    vyapar: "N/A (No online checkout)",
    aggregators: "Included in 30% aggregator cut",
  },
  {
    feature: "Live POS Bill Sync",
    vyop: "Yes (Voice Orb / 1-Tap Bill Creation)",
    shopify: "Requires expensive third-party plugins",
    vyapar: "Manual double-entry data work",
    aggregators: "Separate partner merchant tablet app",
  },
  {
    feature: "Customer Gamification (Spin Wheel)",
    vyop: "Included (Built-in Spin Wheel & Coupons)",
    shopify: "Paid App ($10–$25/month extra)",
    vyapar: "Not Available",
    aggregators: "Not Available",
  },
  {
    feature: "Customer Star Ratings & Reviews",
    vyop: "Included (Built-in Verified Reviews)",
    shopify: "Paid App ($15/month extra)",
    vyapar: "Not Available",
    aggregators: "Locked inside aggregator app",
  },
  {
    feature: "Product Variants (Size/Weight)",
    vyop: "Yes (Multi-pack, 500g vs 1kg, S/M/L)",
    shopify: "Yes",
    vyapar: "Limited basic variants",
    aggregators: "Limited options",
  },
  {
    feature: "Customer Phone & Data Ownership",
    vyop: "100% Yours (Direct WhatsApp & Phone)",
    shopify: "Yes (Owned by you)",
    vyapar: "Yes",
    aggregators: "Hidden & Masked (Aggregator owns customer)",
  },
  {
    feature: "Real-Time POS Voice Order Alert",
    vyop: "Yes (Pre-staged Bill in 1 Tap)",
    shopify: "No",
    vyapar: "No",
    aggregators: "No",
  },
  {
    feature: "Table QR Dine-in & Room Service",
    vyop: "Included (Kitchen KOT & Room QR)",
    shopify: "Requires custom development",
    vyapar: "Not Available",
    aggregators: "Dineout / Zomato Gold extra fee",
  },
];

const faqs = [
  {
    question: "Do I need a domain name, SSL, or hosting to launch my Vyop online store?",
    answer:
      "No, absolutely zero technical headaches or extra expenses. Your custom online store runs instantly on Vyop's ultra-fast cloud network (vyop.shop/order?token=...). You get a secure, branded mobile PWA with your shop logo, product photos, categories, variants, and a downloadable high-resolution 300DPI QR code ready to print in 60 seconds.",
  },
  {
    question: "How do customers pay, and why is Vyop's 0% payment gateway fee a major advantage?",
    answer:
      "Standard payment gateways (Razorpay, Paytm, Cashfree) deduct 2% to 3% + 18% GST on every single customer order. Vyop's 0% commission model lets you keep 100% of your earnings: customers pay via your own direct UPI QR code (Google Pay, PhonePe, Paytm, BHIM), Cash on Delivery (COD), or In-Store Pickup. Money arrives in your bank account instantly with zero gateway hold.",
  },
  {
    question: "Does store inventory auto-sync between the physical counter POS and the online store?",
    answer:
      "Yes! With Vyop's 1-Click Catalogue Sync, your entire inventory, pricing, and available stock levels update automatically. When an item sells out at your physical counter, your online storefront updates in real-time so customers cannot order out-of-stock items. No manual double entry required.",
  },
  {
    question: "Delivery management — who arranges deliveries and do I handle it myself?",
    answer:
      "You own 100% of your customer relationships. The store collects the customer's delivery address, phone number, and delivery notes. You fulfill orders locally using your store staff, local delivery services (Dunzo, Porter), or customer in-store pickup — saving the massive 25%–35% cut taken by delivery aggregator apps like Swiggy, Zomato, or Blinkit.",
  },
  {
    question: "Are there any limits on products, customer visits, or order volume?",
    answer:
      "Zero limits. You can upload unlimited products, create unlimited size and weight variants, receive unlimited customer visits, and process unlimited orders without paying a single rupee in commission.",
  },
  {
    question: "Can I use this for both a restaurant (Table QR) and a retail shop (Home Delivery)?",
    answer:
      "Yes! Vyop supports both modes seamlessly. For restaurants, cafes, and hotels, it generates Table QR codes and Room Service QR stands that route orders directly to your kitchen thermal printer (KOT). For kirana, clothing, electronics, and pharmacy stores, it functions as a 24/7 digital catalog with home delivery and WhatsApp ordering.",
  },
  {
    question: "How does the built-in Spin-the-Wheel discount reward game work?",
    answer:
      "Vyop includes an interactive Spin-The-Wheel gamification engine with anti-abuse device persistence. When customers visit your store link, they can spin to win promotional coupon codes (e.g., ₹50 OFF, 10% discount, free delivery). This delights first-time buyers and increases repeat order conversion by up to 3x.",
  },
  {
    question: "Is Vyop's online store compliant with the Indian DPDP Act (Data Protection)?",
    answer:
      "Yes! Vyop includes built-in DPDP Act (Digital Personal Data Protection Act) consent checkboxes. When customers place orders, they provide explicit opt-in consent for local order fulfillment, ensuring enterprise-grade legal compliance for your business.",
  },
  {
    question: "How do clothing boutiques and retail shops manage size and color variants?",
    answer:
      "For apparel and footwear boutiques, Vyop supports size (S, M, L, XL, XXL) and color variants with photo galleries. For grocery, it supports weight variants (500g, 1kg, 5kg). For electronics, it manages warranty and accessories. Everything updates in real time as items sell at the counter.",
  },
  {
    question: "Do customers need to download an application to order from my store?",
    answer:
      "No app download is required for your customers. Your store link opens instantly in any mobile browser (Chrome, Safari, Firefox). Customers can browse your catalog, spin the reward wheel, and place orders in under 30 seconds.",
  },
  {
    question: "Can I collect payments via Cash on Delivery (COD) and my own UPI QR code?",
    answer:
      "Yes! Customers can choose between instant direct UPI payment (scanning your personal Google Pay, PhonePe, or Paytm QR) or Cash on Delivery (COD). You collect 100% of the money directly when you deliver orders to their doorstep. No third-party gateway deductions, and zero settlement delays.",
  },
  {
    question: "How does Vyop compare to food and delivery aggregators like Swiggy, Zomato, and Blinkit?",
    answer:
      "Aggregators charge 20% to 35% commission on every single order, mask your customers' phone numbers so you never build repeat loyalty, and withhold your money for days. With Vyop Storefront, you pay 0% platform commission, receive direct orders on your POS screen or WhatsApp, collect money instantly, and own 100% of your customer contact numbers.",
  },
  {
    question: "Do I need a computer or barcode machine, or can I launch from an Android smartphone?",
    answer:
      "You can launch and manage your entire online store from any Android smartphone using the Vyop app, or from any desktop PC browser at vyop.shop. You can add items in 30 seconds by simply speaking in Hindi or English (Voice AI) or scanning product barcodes with your phone camera.",
  },
  {
    question: "How do I print Table QR stands and Storefront QR banners for my shop?",
    answer:
      "In 1 tap, Vyop generates print-ready 300 DPI high-resolution QR codes formatted for table acrylic stands, hotel room bedside cards, and storefront counter standees. Customers point their phone camera at the QR code and your digital menu opens instantly without downloading any app.",
  },
];

export default function OnlineStorefrontFeaturePage() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-clip">
      <Navbar />

      {/* ====== 1. SHOP TYPE SELECTOR (FIRST SECTION) ====== */}
      <ShopTypeSelectorSection />

      {/* ====== 2. INTERACTIVE LIVE DEMO SIMULATOR (APP VIEW) ====== */}
      <section id="demo" className="py-6 sm:py-8 bg-white border-b border-gray-100 w-full overflow-x-clip">
        <InteractiveStorefrontDemo />
      </section>

      {/* ====== 3. CREATE A LIVE ONLINE STORE SECTION (BELOW DEMO) ====== */}
      <section className="py-12 sm:py-20 px-3 sm:px-6 bg-gradient-to-b from-white via-amber-50/40 to-white text-center relative overflow-hidden border-b border-gray-100 w-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-amber-200/50 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight px-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Create a Live Online Store Website for Your Shop{" "}
            <span className="gradient-text">in Seconds</span>
          </h2>

          {/* AEO Direct Answer Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-body px-1">
            Vyop turns your shop inventory into a live online ordering website with <strong>0% platform fee</strong>. Customers browse your products and pay you directly via <strong>UPI or Cash on Delivery (COD)</strong> as you deliver orders.
          </p>

          {/* 3-Step Store Creation List Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-10 text-left w-full">
            {/* Step 1 */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-amber-200/90 shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-500 text-slate-950 font-black text-base sm:text-lg flex items-center justify-center shadow-xs">
                  1
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
                  ⚡ ~30 Secs
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">
                Add Items via Our Fastest Adding Stock Ways
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Add stock in 30 seconds using Hindi/English voice AI, phone camera barcode scanning, or 1-tap supermarket catalog presets.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-amber-200/90 shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-500 text-slate-950 font-black text-base sm:text-lg flex items-center justify-center shadow-xs">
                  2
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
                  ⏱️ 1 Sec
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">
                Click on "Create Online Store"
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Just 1 tap inside Vyop. In literally 1 second, your mobile-friendly ordering website and printable table QR menus are live.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-white to-emerald-50/50 border border-emerald-300/80 shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-emerald-500 text-white font-black text-base sm:text-lg flex items-center justify-center shadow-xs">
                  3
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase tracking-wider">
                  🎉 Ready to Share!
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">
                Your Online Store is Ready to Share
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Share your live link on WhatsApp, post to Instagram stories, or print table QR standees. Start receiving direct orders immediately.
              </p>
            </div>
          </div>

          {/* User Clarification Box: 0% Platform Fee, 30s Setup & Direct User Payment (UPI / Cash on Delivery) */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50/60 border-2 border-amber-300 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 text-left shadow-xs w-full">
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center text-xl sm:text-2xl shrink-0 font-bold mt-0.5 shadow-xs">
                💵
              </div>
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-gray-900 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span>0% Platform Fee</span>
                  <span className="text-gray-300">•</span>
                  <span>30-Second Setup Time</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-emerald-700">100% Direct Payment</span>
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-1">
                  Vyop charges <strong>0% platform commission</strong>. Customer payment is collected directly by you — collect via your own <strong>direct UPI QR or Cash on Delivery (COD)</strong> as you deliver orders to your customers. Zero aggregator cut, zero payment gateway withholding.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full max-w-md sm:max-w-none mx-auto">
            <a
              href="https://vyop.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base sm:text-lg shadow-lg shadow-amber-500/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] text-center"
            >
              <span>Launch Free Store Now</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>
            <Link
              href="/pos-app"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2 text-center"
            >
              <span>Explore POS &amp; KOT Features</span>
            </Link>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto w-full">
            <div className="p-3 sm:p-4 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-600">0%</div>
              <div>
                <div className="text-xs sm:text-sm text-gray-900 font-bold mt-1">Platform Fee</div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium mt-0.5">Zero Commissions</div>
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-600">30 Sec</div>
              <div>
                <div className="text-xs sm:text-sm text-gray-900 font-bold mt-1">Setup Time</div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium mt-0.5">Fastest in India</div>
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="text-sm sm:text-lg md:text-2xl font-black text-blue-600 leading-snug">Direct UPI &amp; Cash</div>
              <div>
                <div className="text-xs sm:text-sm text-gray-900 font-bold mt-1">100% to You</div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium mt-0.5">Collect on Delivery</div>
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="text-sm sm:text-lg md:text-2xl font-black text-purple-600 leading-snug">Table &amp; WhatsApp</div>
              <div>
                <div className="text-xs sm:text-sm text-gray-900 font-bold mt-1">Direct Orders</div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium mt-0.5">Print QR or Link</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== INTERACTIVE 0% COMMISSION PROFIT SAVINGS CALCULATOR ====== */}
      <CommissionSavingsCalculator />

      {/* ====== MULTI-INDUSTRY SHOWCASE ====== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            Built for Every Indian Shopkeeper
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How Any Shopkeeper Can Create Their Online Store in 30 Seconds
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Whether you sell groceries, restaurant food, clothes, medicines, cakes, spare parts, hardware, or jewelry — Vyop turns your physical shop into a 24/7 online ordering machine.
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

      {/* ====== HOW DELIVERIES, CASH & PAYMENT WORK ====== */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50/70 via-white to-amber-50/20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
              Zero Middleman Interference
            </span>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How Deliveries, Payments &amp; Customer Data Work
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              No delivery company taking 30% of your earnings. No payment gateway locking your money. You are in 100% control of your shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6 text-2xl font-bold">
                  🛵
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  1. Flexible Local Delivery &amp; Pickup
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Deliver to your neighborhood society using your own shop staff, allow direct customer in-store pickup, or use on-demand local bike couriers (Porter, Dunzo, Rapido).
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs font-bold text-amber-800 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Save 25–35% food &amp; grocery delivery cuts</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 text-2xl font-bold">
                  💵
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  2. Collect Direct UPI &amp; Cash (COD)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Customers pay straight to your personal PhonePe, Google Pay, or Paytm UPI QR code, or hand over cash on delivery. 100% of the money goes directly into your pocket.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>0% Gateway MDR fee • 0 settlement delay</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6 text-2xl font-bold">
                  📱
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  3. You Own 100% of Customer Phone Data
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Unlike food aggregator apps that mask customer numbers behind virtual proxies, you get genuine names, delivery addresses, and WhatsApp numbers for repeat orders.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs font-bold text-blue-800 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Send WhatsApp festival offers &amp; discounts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CORE FEATURES GRID (CODEBASE REALITY) ====== */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            Everything Included in Your 30-Second Storefront
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Not Just a Flat List — A Full Mobile-First PWA
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Explore the advanced retail architecture running inside Vyop&apos;s customer ordering engine today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 text-xl font-bold">
                📱
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Amazon-Style Product Detail Modal
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Tap any product to open an image slider, % OFF discount badge, and variant selector (500g vs 1kg, S vs M vs L) with differential pricing.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 text-xs font-bold text-amber-700">
              Variant matrix &amp; gallery thumbnails
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 text-xl font-bold">
                🎁
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Spin-The-Wheel &amp; Offer Banners
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Interactive Spin-The-Wheel game with anti-abuse persistence. Boost conversions with flat discounts, % off, and free delivery coupon codes.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 text-xs font-bold text-purple-700">
              Up to 3x higher customer repeat orders
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-5 text-xl font-bold">
                💬
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Dual Checkout (Cloud POS + WhatsApp)
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Customers choose: push a silent Direct Cloud Order to your POS screen or generate a formatted WhatsApp cart message in 1 tap.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 text-xs font-bold text-green-700">
              Zero friction for all customer ages
            </div>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 text-xl font-bold">
                🛡️
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                DPDP Act Compliant Architecture
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Explicit opt-in consent checkboxes for customer name, phone, and delivery address in strict compliance with Indian data privacy regulations.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 text-xs font-bold text-blue-700">
              Enterprise-grade legal safety
            </div>
          </div>

          {/* Feature 5 */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 text-xl font-bold">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Real-Time Voice Orb POS Staging
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Incoming online orders trigger a pulsing sound alert on your POS dashboard. Tap once to open the Voice Orb with items pre-staged for instant billing.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 text-xs font-bold text-amber-700">
              Zero manual re-typing into billing
            </div>
          </div>

          {/* Feature 6 */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-700 flex items-center justify-center mb-5 text-xl font-bold">
                ⭐
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Customer Star Ratings &amp; Reviews
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                End-customers submit 5-star ratings and verified text reviews directly on products. Local social proof displays right on your public store link.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 text-xs font-bold text-yellow-700">
              Builds neighborhood credibility
            </div>
          </div>

          {/* Feature 7 */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-5 text-xl font-bold">
                🔗
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Deep-Linking for WhatsApp Deals
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Share URLs like <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">/order?token=...&amp;item=123</code> directly to specific deals on WhatsApp status and Instagram stories.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 text-xs font-bold text-rose-700">
              High-converting direct item promotion
            </div>
          </div>

          {/* Feature 8 */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5 text-xl font-bold">
                📊
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Live Order Tracking &amp; Analytics
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Customers track live order status (New ➔ Accepted ➔ Preparing ➔ Out for Delivery). Merchants track catalogue views, orders, and total revenue.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 text-xs font-bold text-indigo-700">
              Full transparency on mobile browser
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
              How to Launch Your Online Store or Menu in 30 Seconds
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            Zero-Tax Head-to-Head Comparison
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Vyop Online Store vs Shopify / Dukaan vs Vyapar vs Zomato
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Compare setup fees, commissions, gateway deductions, and live billing synchronization side-by-side.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 overflow-x-auto">
          <table className="w-full text-left min-w-[750px]">
            <thead>
              <tr className="border-b-2 border-gray-100 bg-gray-50/50">
                <th className="py-4 px-4 text-sm font-bold text-gray-700">Feature</th>
                <th className="py-4 px-4 text-sm font-bold text-amber-700 bg-amber-50/60">
                  Vyop Online Store
                </th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">
                  Shopify / Dukaan
                </th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">
                  Vyapar POS
                </th>
                <th className="py-4 px-4 text-sm font-bold text-gray-600">
                  Zomato / Swiggy
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {storefrontComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-amber-50/20 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900">{row.feature}</td>
                  <td className="py-4 px-4 font-bold text-emerald-700 bg-amber-50/20">{row.vyop}</td>
                  <td className="py-4 px-4 text-gray-600">{row.shopify}</td>
                  <td className="py-4 px-4 text-gray-600">{row.vyapar}</td>
                  <td className="py-4 px-4 text-gray-600">{row.aggregators}</td>
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
                  "Free 0% commission online store, table QR menu, and website builder for Indian restaurants, cafes, hotels, clothing boutiques, bakeries, and retail shops. Create a live WhatsApp catalog link in 30 seconds with instant UPI payment, Cash on Delivery (COD), and real-time inventory synchronization.",
                url: "https://vyop.in/features/online-storefront",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
                featureList: [
                  "0% Commission Online Storefront for Shops & Restaurants",
                  "Amazon-Style Product Detail Modal & Variant Selector (500g vs 1kg, S/M/L)",
                  "Spin-The-Wheel Gamified Customer Discount Rewards & Offer Banners",
                  "Dual Checkout: Direct Cloud Order to POS Voice Orb + 1-Tap WhatsApp",
                  "Indian DPDP Act Compliant Privacy Architecture",
                  "Real-Time Voice Orb POS Staging with Audible Order Alert",
                  "Customer Star Ratings & Verified Text Reviews on Products",
                  "Deep-Linking for Direct WhatsApp Product Deals",
                  "Table QR Code Dine-in Ordering System for Restaurants & Cafes",
                  "Hotel Room Service QR Code Digital Menu Ordering",
                  "30-Second Instant Live Store Link Generation with Printable Standee",
                  "Instant UPI QR Code Payment & Cash on Delivery (COD) with Zero Gateway Deductions",
                  "Automatic Real-Time Sync with In-Store POS Inventory & Kitchen KOT",
                  "Prescription Upload for Medical Stores & Pharmacies",
                ],
              },
              {
                "@type": "HowTo",
                name: "How to Create a Free Online Store or Restaurant Menu in 30 Seconds",
                description:
                  "Step-by-step guide to launching a zero-commission online ordering website for your restaurant, hotel, or retail shop using Vyop.",
                totalTime: "PT30S",
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
