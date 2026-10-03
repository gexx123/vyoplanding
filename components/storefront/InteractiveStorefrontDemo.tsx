"use client";

import React, { useState } from "react";
import {
  Share2,
  QrCode,
  ArrowRight,
  CheckCircle2,
  Star,
  Search,
  Plus,
  Minus,
  X,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Percent,
  RefreshCw,
  Bell,
  Smartphone,
  Monitor,
  Eye,
  Store,
  Layers,
  Check,
  Flame,
  LayoutDashboard,
  Warehouse,
  BookUser,
  Receipt,
  Settings,
  ShoppingBag,
  Clock,
  Copy,
  Download,
  ShieldCheck,
  Zap,
  Tag,
  Boxes,
  AlertTriangle,
  Mic,
  PanelLeft,
  MoreHorizontal,
  ChevronDown,
  Package,
  Box,
  CreditCard,
  FileText,
  LayoutGrid,
  Sparkles,
} from "lucide-react";

type ShopType = "kirana" | "cafe" | "clothing" | "electronics" | "pharmacy";

interface Variant {
  name: string;
  price: number;
  mrp: number;
}

interface Review {
  author: string;
  stars: number;
  comment: string;
  date: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  stock: number;
  badge?: string;
  imageUrl?: string;
  isPlaceholder?: boolean;
  placeholderText?: string;
  clipartType?:
  | "hardware-tool"
  | "barber-cut"
  | "gobhi-veg"
  | "pizza-food"
  | "clothing-apparel"
  | "auto-parts"
  | "dinner-dish"
  | "clothing-autoparts"
  | "room-stay"
  | "aata-flour"
  | "vim-bar"
  | "parle-g"
  | "coffee"
  | "tshirt"
  | "phone"
  | "medicine"
  | "generic"
  | (string & {});
  variants: Variant[];
  description: string;
  rating: number;
  reviewsCount: number;
  reviews: Review[];
}

interface ShopData {
  name: string;
  type: ShopType;
  categoryLabel: string;
  icon: string;
  tagline: string;
  accentColor: string;
  categories: string[];
  bannerOffer: string;
  couponCode: string;
  products: Product[];
}

// ── STOREFRONT PRODUCT VISUAL STAGE (WEBPs) ──────────────────────────────────
function PlaceholderProductStage({ label }: { label: string }) {
  return (
    <div className="w-full h-full bg-[#F1F4F9] flex items-center justify-center p-3 select-none">
      <span className="text-[#3b3a58] font-black text-xs sm:text-sm tracking-wider uppercase text-center break-words leading-snug">
        {label}
      </span>
    </div>
  );
}

const FULL_BLEED_DEMO_SHOPS = new Set([
  "kirana",
  "bike-dealership",
  "car-dealership",
  "restaurant",
  "hotel",
  "jewellery",
  "dairy",
  "bakery",
  "mobile-shop",
  "other",
]);

function ProductVisualStage({ product, className = "w-full h-full" }: { product: Product; className?: string }) {
  const slug = product.clipartType || "";
  const imgSrc =
    product.imageUrl ||
    (slug ? `/shoptypes/${slug}.webp` : null);

  if (imgSrc) {
    const isFullBleed =
      FULL_BLEED_DEMO_SHOPS.has(slug) ||
      Array.from(FULL_BLEED_DEMO_SHOPS).some((s) => imgSrc.toLowerCase().includes(s));

    return (
      <div
        className={`w-full h-full flex items-center justify-center overflow-hidden relative transition-all ${isFullBleed ? "bg-gray-50 p-0" : "bg-gray-50/70 p-2 sm:p-2.5"
          } ${className}`}
      >
        <img
          src={imgSrc}
          alt={product.name}
          className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${isFullBleed
              ? "object-cover scale-105"
              : "object-contain drop-shadow-2xs"
            }`}
        />
      </div>
    );
  }

  return (
    <PlaceholderProductStage
      label={product.placeholderText || product.name.toUpperCase()}
    />
  );
}

const SHOPS: Record<ShopType, ShopData> = {
  kirana: {
    name: "Vyop Store",
    type: "kirana",
    categoryLabel: "General Store",
    icon: "🛒",
    tagline: "Free 15-Min Delivery • 0% Middleman Commission",
    accentColor: "from-amber-500 to-orange-600",
    categories: ["All (21)", "Retail (11)", "Food & Dining (4)", "Automotive (3)", "Services (3)"],
    bannerOffer: "🎉 Store Offer: Free instant delivery on orders above ₹199! Code: VYOP0",
    couponCode: "VYOP0",
    products: [
      {
        id: "p1",
        name: "Kirana",
        placeholderText: "KIRANA",
        clipartType: "kirana",
        imageUrl: "/shoptypes/kirana.webp",
        category: "Retail",
        price: 56,
        mrp: 70,
        stock: 120,
        isPlaceholder: false,
        description: "Daily grocery, packaged foods, and household kirana staples.",
        rating: 4.9,
        reviewsCount: 142,
        variants: [{ name: "Standard Unit", price: 56, mrp: 70 }],
        reviews: [{ author: "Ramesh S.", stars: 5, comment: "Quick delivery of kirana items.", date: "Today" }],
      },
      {
        id: "p2",
        name: "Vegetable",
        placeholderText: "VEGETABLE",
        clipartType: "vegetable",
        imageUrl: "/shoptypes/vegetable.webp",
        category: "Food & Dining",
        price: 56,
        mrp: 65,
        stock: 95,
        badge: "Fresh Farm",
        isPlaceholder: false,
        description: "Farm-fresh organic green vegetables and daily kitchen produce.",
        rating: 4.8,
        reviewsCount: 88,
        variants: [{ name: "1 kg Fresh Pack", price: 56, mrp: 65 }],
        reviews: [{ author: "Pooja V.", stars: 5, comment: "Crisp and fresh vegetables.", date: "Yesterday" }],
      },
      {
        id: "p3",
        name: "Medical",
        placeholderText: "MEDICAL",
        clipartType: "medical",
        imageUrl: "/shoptypes/medical.webp",
        category: "Retail",
        price: 56,
        mrp: 70,
        stock: 80,
        badge: "Rx Verified",
        isPlaceholder: false,
        description: "Essential wellness medicines, first aid, and health supplements.",
        rating: 4.9,
        reviewsCount: 110,
        variants: [{ name: "Standard Pack", price: 56, mrp: 70 }],
        reviews: [{ author: "Dr. Alok", stars: 5, comment: "Genuine pharmaceutical stock.", date: "Today" }],
      },
      {
        id: "p4",
        name: "Hardware",
        placeholderText: "HARDWARE",
        clipartType: "hardware",
        imageUrl: "/shoptypes/hardware.webp",
        category: "Retail",
        price: 56,
        mrp: 70,
        stock: 45,
        isPlaceholder: false,
        description: "Heavy-duty hardware tools, wrench, hammer, screwdriver and utility spares.",
        rating: 4.8,
        reviewsCount: 38,
        variants: [{ name: "Standard Unit", price: 56, mrp: 70 }],
        reviews: [{ author: "Ramesh Sharma", stars: 5, comment: "Sturdy hardware equipment.", date: "2 days ago" }],
      },
      {
        id: "p5",
        name: "Clothing",
        placeholderText: "CLOTHING",
        clipartType: "clothing",
        imageUrl: "/shoptypes/clothing.webp",
        category: "Retail",
        price: 56,
        mrp: 70,
        stock: 60,
        isPlaceholder: false,
        description: "Premium cotton everyday apparel, tailored polo shirts and casual fashion.",
        rating: 4.7,
        reviewsCount: 45,
        variants: [{ name: "Standard Fit", price: 56, mrp: 70 }],
        reviews: [{ author: "Amit Jain", stars: 5, comment: "Great fabric and fit.", date: "Today" }],
      },
      {
        id: "p6",
        name: "Electronics",
        placeholderText: "ELECTRONICS",
        clipartType: "electronics",
        imageUrl: "/shoptypes/electronics.webp",
        category: "Retail",
        price: 56,
        mrp: 80,
        stock: 35,
        isPlaceholder: false,
        description: "Consumer electronics, home appliances, cables and entertainment displays.",
        rating: 4.8,
        reviewsCount: 64,
        variants: [{ name: "Standard Unit", price: 56, mrp: 80 }],
        reviews: [{ author: "Vikram K.", stars: 5, comment: "High quality electronic unit.", date: "Yesterday" }],
      },
      {
        id: "p7",
        name: "Stationery",
        placeholderText: "STATIONERY",
        clipartType: "stationery",
        imageUrl: "/shoptypes/stationery.webp",
        category: "Retail",
        price: 56,
        mrp: 65,
        stock: 90,
        isPlaceholder: false,
        description: "Office and school stationery, writing notebooks, pens and art supplies.",
        rating: 4.7,
        reviewsCount: 52,
        variants: [{ name: "Stationery Pack", price: 56, mrp: 65 }],
        reviews: [{ author: "Sneha R.", stars: 5, comment: "Smooth pens and neat notebooks.", date: "3 days ago" }],
      },
      {
        id: "p8",
        name: "Footwear",
        placeholderText: "FOOTWEAR",
        clipartType: "footwear",
        imageUrl: "/shoptypes/footwear.webp",
        category: "Retail",
        price: 56,
        mrp: 99,
        stock: 40,
        isPlaceholder: false,
        description: "Comfortable athletic sneakers, formal shoes and daily casual footwear.",
        rating: 4.8,
        reviewsCount: 37,
        variants: [{ name: "Pair (Size 8)", price: 56, mrp: 99 }],
        reviews: [{ author: "Karan D.", stars: 5, comment: "Very comfortable cushion sole.", date: "Today" }],
      },
      {
        id: "p9",
        name: "Electrical",
        placeholderText: "ELECTRICAL",
        clipartType: "electrical",
        imageUrl: "/shoptypes/electrical.webp",
        category: "Retail",
        price: 56,
        mrp: 75,
        stock: 75,
        isPlaceholder: false,
        description: "Energy-saving LED bulbs, electrical wiring, switches and sockets.",
        rating: 4.9,
        reviewsCount: 83,
        variants: [{ name: "Standard Unit", price: 56, mrp: 75 }],
        reviews: [{ author: "Manoj K.", stars: 5, comment: "Bright lighting and durable build.", date: "Yesterday" }],
      },
      {
        id: "p10",
        name: "Cosmetics",
        placeholderText: "COSMETICS",
        clipartType: "cosmetics",
        imageUrl: "/shoptypes/cosmetics.webp",
        category: "Retail",
        price: 56,
        mrp: 85,
        stock: 50,
        badge: "Beauty Care",
        isPlaceholder: false,
        description: "Premium skincare cosmetics, lipstick, beauty makeup and wellness care.",
        rating: 4.8,
        reviewsCount: 91,
        variants: [{ name: "Standard Pack", price: 56, mrp: 85 }],
        reviews: [{ author: "Priya S.", stars: 5, comment: "Lovely shade and long lasting.", date: "Today" }],
      },
      {
        id: "p11",
        name: "Salon",
        placeholderText: "SALON",
        clipartType: "salon",
        imageUrl: "/shoptypes/salon.webp",
        category: "Services",
        price: 65,
        mrp: 75,
        stock: 85,
        badge: "Salon Care",
        isPlaceholder: false,
        description: "Professional salon haircutting shears, styling comb and grooming services.",
        rating: 4.9,
        reviewsCount: 195,
        variants: [{ name: "Haircut & Styling", price: 65, mrp: 75 }],
        reviews: [{ author: "Sunita M.", stars: 5, comment: "Expert styling and clean tools.", date: "Today" }],
      },
      {
        id: "p12",
        name: "Auto Parts",
        placeholderText: "AUTO PARTS",
        clipartType: "autoparts",
        imageUrl: "/shoptypes/autoparts.webp",
        category: "Automotive",
        price: 56,
        mrp: 70,
        stock: 24,
        isPlaceholder: false,
        description: "Genuine automotive spare parts, ventilated brake disc rotors and car spares.",
        rating: 4.8,
        reviewsCount: 26,
        variants: [{ name: "Standard Unit", price: 56, mrp: 70 }],
        reviews: [{ author: "Rahul Singh", stars: 5, comment: "Genuine automotive fit.", date: "3 days ago" }],
      },
      {
        id: "p13",
        name: "Bike Dealership",
        placeholderText: "BIKE DEALERSHIP",
        clipartType: "bike-dealership",
        imageUrl: "/shoptypes/bike-dealership.webp",
        category: "Automotive",
        price: 56,
        mrp: 99,
        stock: 12,
        badge: "Showroom",
        isPlaceholder: false,
        description: "Two-wheeler motorcycle dealership, bikes booking, servicing and spares.",
        rating: 4.9,
        reviewsCount: 57,
        variants: [{ name: "Test Drive / Service Booking", price: 56, mrp: 99 }],
        reviews: [{ author: "Rohit V.", stars: 5, comment: "Prompt service and great deal.", date: "Yesterday" }],
      },
      {
        id: "p14",
        name: "Car Dealership",
        placeholderText: "CAR DEALERSHIP",
        clipartType: "car-dealership",
        imageUrl: "/shoptypes/car-dealership.webp",
        category: "Automotive",
        price: 56,
        mrp: 99,
        stock: 8,
        badge: "Authorized",
        isPlaceholder: false,
        description: "Four-wheeler automobile dealership, new car inventory and maintenance plans.",
        rating: 4.9,
        reviewsCount: 44,
        variants: [{ name: "Booking Token", price: 56, mrp: 99 }],
        reviews: [{ author: "Deepak M.", stars: 5, comment: "Smooth paperwork and test drive.", date: "2 days ago" }],
      },
      {
        id: "p15",
        name: "Restaurant",
        placeholderText: "RESTAURANT",
        clipartType: "restaurant",
        imageUrl: "/shoptypes/restaurant.webp",
        category: "Food & Dining",
        price: 56,
        mrp: 70,
        stock: 65,
        isPlaceholder: false,
        description: "Dine-in and takeaway gourmet multi-cuisine meals, thalis and appetizers.",
        rating: 4.8,
        reviewsCount: 128,
        variants: [{ name: "Chef Special Dish", price: 56, mrp: 70 }],
        reviews: [{ author: "Ananya G.", stars: 5, comment: "Delicious taste and warm food.", date: "Today" }],
      },
      {
        id: "p16",
        name: "Hotel",
        placeholderText: "HOTEL",
        clipartType: "hotel",
        imageUrl: "/shoptypes/hotel.webp",
        category: "Services",
        price: 56,
        mrp: 80,
        stock: 25,
        isPlaceholder: false,
        description: "Comfortable hospitality room stays, accommodation booking and luxury amenities.",
        rating: 4.8,
        reviewsCount: 76,
        variants: [{ name: "Day Stay Token", price: 56, mrp: 80 }],
        reviews: [{ author: "Kiran P.", stars: 5, comment: "Clean and peaceful room.", date: "3 days ago" }],
      },
      {
        id: "p17",
        name: "Jewellery",
        placeholderText: "JEWELLERY",
        clipartType: "jewellery",
        imageUrl: "/shoptypes/jewellery.webp",
        category: "Retail",
        price: 56,
        mrp: 99,
        stock: 30,
        badge: "BIS Hallmarked",
        isPlaceholder: false,
        description: "Certified gold, silver and sparkling diamond jewellery collections.",
        rating: 4.9,
        reviewsCount: 94,
        variants: [{ name: "Showroom Token", price: 56, mrp: 99 }],
        reviews: [{ author: "Meena B.", stars: 5, comment: "Stunning design and certified purity.", date: "Today" }],
      },
      {
        id: "p18",
        name: "Dairy",
        placeholderText: "DAIRY",
        clipartType: "dairy",
        imageUrl: "/shoptypes/dairy.webp",
        category: "Food & Dining",
        price: 56,
        mrp: 60,
        stock: 150,
        badge: "Pure & Fresh",
        isPlaceholder: false,
        description: "Fresh farm milk, paneer, curd, pure cow ghee and dairy products.",
        rating: 4.9,
        reviewsCount: 210,
        variants: [{ name: "1 Litre Fresh Milk", price: 56, mrp: 60 }],
        reviews: [{ author: "Gopal L.", stars: 5, comment: "Pure and thick milk.", date: "Today" }],
      },
      {
        id: "p19",
        name: "Bakery",
        placeholderText: "BAKERY",
        clipartType: "bakery",
        imageUrl: "/shoptypes/bakery.webp",
        category: "Food & Dining",
        price: 56,
        mrp: 70,
        stock: 85,
        badge: "Oven Fresh",
        isPlaceholder: false,
        description: "Oven-fresh artisan breads, croissants, cakes and confectionery delights.",
        rating: 4.9,
        reviewsCount: 165,
        variants: [{ name: "Fresh Baked Croissant", price: 56, mrp: 70 }],
        reviews: [{ author: "Siddharth K.", stars: 5, comment: "Crispy and warm bakery treats.", date: "Yesterday" }],
      },
      {
        id: "p20",
        name: "Mobile Shop",
        placeholderText: "MOBILE SHOP",
        clipartType: "mobile-shop",
        imageUrl: "/shoptypes/mobile-shop.webp",
        category: "Retail",
        price: 56,
        mrp: 80,
        stock: 45,
        isPlaceholder: false,
        description: "Latest smartphones, mobile phone covers, chargers and accessories.",
        rating: 4.8,
        reviewsCount: 89,
        variants: [{ name: "Standard Unit", price: 56, mrp: 80 }],
        reviews: [{ author: "Harsh T.", stars: 5, comment: "Original mobile accessories.", date: "Today" }],
      },
      {
        id: "p21",
        name: "Other",
        placeholderText: "OTHER",
        clipartType: "other",
        imageUrl: "/shoptypes/other.webp",
        category: "Services",
        price: 56,
        mrp: 70,
        stock: 50,
        isPlaceholder: false,
        description: "Custom enterprise business, specialty retail services and local trade goods.",
        rating: 4.8,
        reviewsCount: 31,
        variants: [{ name: "General Service Pack", price: 56, mrp: 70 }],
        reviews: [{ author: "Rajesh N.", stars: 5, comment: "Very helpful local shop.", date: "4 days ago" }],
      },
    ],
  },
  cafe: {
    name: "Urban Roast Cafe & Bistro",
    type: "cafe",
    categoryLabel: "Cafe & Dining",
    icon: "☕",
    tagline: "Table QR Dine-in & Kitchen KOT • 0% Platform Commission",
    accentColor: "from-amber-600 to-orange-700",
    categories: ["All", "Hot & Cold Coffee", "Quick Bites", "Gourmet Burgers"],
    bannerOffer: "☕ Dine-In Table Deal: Order via Table QR & get Free Chocolate Dip! Code: TABLE10",
    couponCode: "TABLE10",
    products: [
      {
        id: "c1",
        name: "Signature Cold Coffee with Vanilla Ice Cream",
        category: "Hot & Cold Coffee",
        price: 140,
        mrp: 180,
        stock: 99,
        badge: "Chef Special",
        imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&auto=format&fit=crop&q=80",
        description: "Creamy hand-blended espresso with chilled milk, topped with artisanal vanilla ice cream & cocoa dusting.",
        rating: 4.9,
        reviewsCount: 165,
        variants: [
          { name: "Regular Glass (350ml)", price: 140, mrp: 180 },
          { name: "Large Mug with Extra Scoop (500ml)", price: 180, mrp: 220 },
        ],
        reviews: [
          { author: "Rohan Kapoor", stars: 5, comment: "Thick, creamy, and served within 5 minutes at Table 4!", date: "Yesterday" },
        ],
      },
      {
        id: "c2",
        name: "Crispy Peri Peri French Fries",
        category: "Quick Bites",
        price: 110,
        mrp: 140,
        stock: 99,
        badge: "Must Try",
        imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=600&auto=format&fit=crop&q=80",
        description: "Golden crispy potato fries tossed in African Peri-Peri spice mix. Served with chipotle mayo dip.",
        rating: 4.8,
        reviewsCount: 120,
        variants: [
          { name: "Regular Portion", price: 110, mrp: 140 },
          { name: "Jumbo Sharing Platter", price: 170, mrp: 210 },
        ],
        reviews: [
          { author: "Ananya Roy", stars: 5, comment: "Super crunchy! Best fries in the neighborhood.", date: "3 days ago" },
        ],
      },
      {
        id: "c3",
        name: "Grilled Paneer Tikka Sandwich",
        category: "Quick Bites",
        price: 160,
        mrp: 200,
        stock: 99,
        badge: "Popular",
        imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80",
        description: "Tandoori marinated cottage cheese cubes, bell peppers, mint chutney, and mozzarella in multi-grain bread.",
        rating: 4.9,
        reviewsCount: 94,
        variants: [
          { name: "Classic Multi-Grain", price: 160, mrp: 200 },
          { name: "With Extra Cheese & Fries Combo", price: 210, mrp: 260 },
        ],
        reviews: [
          { author: "Gaurav M.", stars: 5, comment: "Generous filling and fresh bread.", date: "5 days ago" },
        ],
      },
      {
        id: "c4",
        name: "Ultimate Veggie Cheese Burger",
        category: "Gourmet Burgers",
        price: 130,
        mrp: 160,
        stock: 99,
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
        description: "Herb-crusted potato and pea patty with molten cheddar cheese, fresh lettuce, and pickled gherkins.",
        rating: 4.7,
        reviewsCount: 78,
        variants: [
          { name: "Single Patty Burger", price: 130, mrp: 160 },
          { name: "Double Patty Beast Burger", price: 190, mrp: 230 },
        ],
        reviews: [
          { author: "Sneha P.", stars: 5, comment: "Ordered from table QR without waiting for waiter!", date: "1 week ago" },
        ],
      },
    ],
  },
  clothing: {
    name: "Vogue Fabric & Trendz Boutique",
    type: "clothing",
    categoryLabel: "Fashion & Apparel",
    icon: "👕",
    tagline: "Size & Color Matrix • 1-Tap WhatsApp Fitting Bookings",
    accentColor: "from-pink-500 to-rose-600",
    categories: ["All", "Men's Casuals", "Graphic Tees", "Denim Collection"],
    bannerOffer: "👗 Boutique Drop: Flat ₹150 OFF on orders above ₹999 with Code: TREND150",
    couponCode: "TREND150",
    products: [
      {
        id: "cl1",
        name: "Men's Slim Fit Washed Indigo Denim Jeans",
        category: "Denim Collection",
        price: 999,
        mrp: 1899,
        stock: 18,
        badge: "47% OFF",
        imageUrl: "https://images.unsplash.com/photo-1542272604-780c96856592?w=600&auto=format&fit=crop&q=80",
        description: "Premium stretchable cotton elastane blend. Modern mid-rise taper with reinforced double stitching.",
        rating: 4.8,
        reviewsCount: 84,
        variants: [
          { name: "Size 30 Waist", price: 999, mrp: 1899 },
          { name: "Size 32 Waist", price: 999, mrp: 1899 },
          { name: "Size 34 Waist", price: 999, mrp: 1899 },
        ],
        reviews: [
          { author: "Kunal Bansal", stars: 5, comment: "Fabric quality is exceptional. Fits true to size!", date: "3 days ago" },
        ],
      },
      {
        id: "cl2",
        name: "Oversized Heavyweight Cotton Graphic T-Shirt",
        category: "Graphic Tees",
        price: 549,
        mrp: 899,
        stock: 32,
        badge: "Trending",
        imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80",
        description: "240 GSM bio-washed French terry cotton. Drop-shoulder relaxed fit with high-definition puff print.",
        rating: 4.9,
        reviewsCount: 112,
        variants: [
          { name: "Medium (M) - Black", price: 549, mrp: 899 },
          { name: "Large (L) - Black", price: 549, mrp: 899 },
          { name: "XL - Sage Green", price: 549, mrp: 899 },
        ],
        reviews: [
          { author: "Aakash Mehta", stars: 5, comment: "Heavyweight cloth, feels like international brands.", date: "Yesterday" },
        ],
      },
    ],
  },
  electronics: {
    name: "Apex Gadgets & Mobile Hub",
    type: "electronics",
    categoryLabel: "Electronics & Mobile",
    icon: "📱",
    tagline: "Genuine Brand Warranty • Direct UPI • No Gateway Tax",
    accentColor: "from-blue-600 to-indigo-700",
    categories: ["All", "Chargers & Adapters", "Audio & Earbuds", "Cables"],
    bannerOffer: "⚡ Flash Deal: 20W Fast Charger + Braided Cable at ₹499 combo! Code: FASTCHARGE",
    couponCode: "FASTCHARGE",
    products: [
      {
        id: "e1",
        name: "65W GaN Fast Charger Multi-Port Adapter",
        category: "Chargers & Adapters",
        price: 1299,
        mrp: 2499,
        stock: 15,
        badge: "Fast Charging",
        imageUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80",
        description: "Gallium Nitride (GaN) dual Type-C + USB-A ports. Powers laptops, iPhones, and Android flagships.",
        rating: 4.9,
        reviewsCount: 76,
        variants: [
          { name: "Single GaN 65W Unit", price: 1299, mrp: 2499 },
          { name: "With 100W Type-C Cable Combo", price: 1499, mrp: 2899 },
        ],
        reviews: [
          { author: "Harshil Patel", stars: 5, comment: "Charges laptop and phone without heating up. Authentic item.", date: "4 days ago" },
        ],
      },
      {
        id: "e2",
        name: "True Wireless ANC Bluetooth Earbuds",
        category: "Audio & Earbuds",
        price: 1499,
        mrp: 2999,
        stock: 20,
        badge: "50% OFF",
        imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
        description: "32dB Active Noise Cancellation with 40-hour total battery life. Quad-mic ENC for crystal-clear calls.",
        rating: 4.8,
        reviewsCount: 134,
        variants: [
          { name: "Matte Black Edition", price: 1499, mrp: 2999 },
          { name: "Glacier White Edition", price: 1499, mrp: 2999 },
        ],
        reviews: [
          { author: "Varun Nair", stars: 5, comment: "Deep punchy bass and clear mic for calls.", date: "2 days ago" },
        ],
      },
    ],
  },
  pharmacy: {
    name: "Sanjivani Pharmacy & Health Store",
    type: "pharmacy",
    categoryLabel: "Pharmacy & Wellness",
    icon: "💊",
    tagline: "Upload Prescription on WhatsApp • Batch & Expiry Tracked",
    accentColor: "from-emerald-600 to-teal-700",
    categories: ["All", "Fever & Pain", "Immunity & Vitamins", "Medical Devices"],
    bannerOffer: "💊 Senior Citizen Wellness: Flat 15% OFF on monthly healthcare essentials with Code: CARE15",
    couponCode: "CARE15",
    products: [
      {
        id: "p1",
        name: "Dolo 650mg Paracetamol Tablets",
        category: "Fever & Pain",
        price: 31,
        mrp: 34,
        stock: 120,
        badge: "Essential",
        imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
        description: "Fast-acting analgesic and antipyretic for relief from high fever, body ache, and severe headaches.",
        rating: 4.9,
        reviewsCount: 240,
        variants: [
          { name: "Strip of 15 Tablets", price: 31, mrp: 34 },
          { name: "Box of 10 Strips (150 Tabs)", price: 290, mrp: 340 },
        ],
        reviews: [
          { author: "Dr. K. Saxena", stars: 5, comment: "Standard trusted brand with batch verification.", date: "3 days ago" },
        ],
      },
    ],
  },
};

export default function InteractiveStorefrontDemo() {
  const [selectedShopType, setSelectedShopType] = useState<ShopType>("kirana");
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  const [currentView, setCurrentView] = useState<"merchant" | "customer">("merchant");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(true);

  // Auto-detect mobile viewport on mount and on window resize
  React.useEffect(() => {
    const handleResize = () => {
      const isMob = window.innerWidth < 768;
      setIsMobileScreen(isMob);
      if (isMob) {
        setDeviceMode("mobile");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showMobileView = isMobileScreen || deviceMode === "mobile";

  // Merchant View State
  const [isPublishingModalOpen, setIsPublishingModalOpen] = useState(false);
  const [publishProgress, setPublishProgress] = useState(0);
  const [isPublished, setIsPublished] = useState(false);
  const [lockedTooltip, setLockedTooltip] = useState<string | null>(null);
  const [incomingOrderAlert, setIncomingOrderAlert] = useState<any | null>(null);
  const [hasClickedOnlineStore, setHasClickedOnlineStore] = useState(false);

  const shop = SHOPS[selectedShopType];

  // Customer View State
  const [selectedCategory, setSelectedCategory] = useState(shop.categories[0] || "All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [cart, setCart] = useState<{ product: Product; variant: Variant; qty: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [dpdpAgreed, setDpdpAgreed] = useState(true);

  // Spin Wheel State
  const [isSpinWheelOpen, setIsSpinWheelOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDegrees, setSpinDegrees] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const handleSelectShopType = (type: ShopType) => {
    setSelectedShopType(type);
    setSelectedCategory(SHOPS[type].categories[0] || "All");
    setSearchQuery("");
    setCart([]);
    setSelectedProduct(null);
    setIncomingOrderAlert(null);
    setIsPublished(false);
  };

  const handleStartPublish = () => {
    setIsPublishingModalOpen(true);
    setPublishProgress(0);
    setIsPublished(false);

    let curr = 0;
    const timer = setInterval(() => {
      curr += 25;
      setPublishProgress(curr);
      if (curr >= 100) {
        clearInterval(timer);
        setIsPublished(true);
      }
    }, 250);
  };

  const handleLockedTab = () => {
    setLockedTooltip("👉 Tap 'Share Catalogue' or 'Online Store' to launch your live customer storefront!");
    setTimeout(() => setLockedTooltip(null), 3500);
  };

  const addToCart = (product: Product, variantIndex: number = 0) => {
    const variant = product.variants[variantIndex] || product.variants[0];
    setCart((prev) => {
      const existing = prev.find(
        (c) => c.product.id === product.id && c.variant.name === variant.name
      );
      if (existing) {
        return prev.map((c) =>
          c.product.id === product.id && c.variant.name === variant.name
            ? { ...c, qty: c.qty + 1 }
            : c
        );
      }
      return [...prev, { product, variant, qty: 1 }];
    });
  };

  const updateCartQty = (productId: string, variantName: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.product.id === productId && c.variant.name === variantName) {
            const newQty = c.qty + delta;
            return newQty > 0 ? { ...c, qty: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as { product: Product; variant: Variant; qty: number }[]
    );
  };

  const handleSpinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const rotation = spinDegrees + 1800 + Math.floor(Math.random() * 360);
    setSpinDegrees(rotation);

    setTimeout(() => {
      setIsSpinning(false);
      setAppliedCoupon(shop.couponCode);
    }, 2500);
  };

  const cartSubtotal = cart.reduce((acc, item) => acc + item.variant.price * item.qty, 0);
  const discountAmount = appliedCoupon ? Math.min(50, Math.round(cartSubtotal * 0.15)) : 0;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount);

  const handlePlaceOrder = (type: "whatsapp" | "cloud") => {
    if (cart.length === 0) return;

    if (type === "whatsapp") {
      const summary = cart.map((c) => `${c.qty}x ${c.product.name} (${c.variant.name})`).join(", ");
      alert(`WhatsApp Opened!\n\n🛍️ *NEW ORDER for ${shop.name}*\n${summary}\n\nTotal: ₹${cartTotal}`);
      setIsCartOpen(false);
    } else {
      setIncomingOrderAlert({
        id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
        name: "Rahul Sharma (Customer)",
        phone: "+91 98765 43210",
        items: cart.map((c) => `${c.qty}x ${c.product.name}`),
        total: cartTotal,
      });
      setIsCartOpen(false);
      setCurrentView("merchant");
    }
  };

  const filteredProducts = shop.products.filter((p) => {
    const isAll =
      selectedCategory === "All" ||
      selectedCategory.startsWith("All") ||
      selectedCategory === "";
    const matchCat =
      isAll ||
      p.category === selectedCategory ||
      p.category.startsWith(selectedCategory.split(" ")[0]);
    const matchSearch =
      searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.placeholderText && p.placeholderText.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full my-0 font-sans bg-white py-4 sm:py-6 px-2 sm:px-6 lg:px-10 flex flex-col items-center overflow-x-clip">
      <div className="w-full max-w-[1440px] flex flex-col items-center">
        {/* ── APP FRAMEWORK CONTROLS (Framed Professional Bar) ──────────── */}
        <div className="w-full bg-slate-900 backdrop-blur-md border border-slate-800 rounded-2xl p-2.5 sm:px-6 sm:py-2.5 flex items-center justify-center md:justify-between gap-2.5 sm:gap-3 text-white mb-5 shadow-xl shadow-slate-900/10">
          {/* Device Switcher (Desktop vs Mobile Frame) - Strictly hidden on mobile screens */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setDeviceMode("desktop")}
              className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                !showMobileView
                  ? "bg-slate-800 text-amber-400 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop POS View</span>
            </button>
            <button
              onClick={() => setDeviceMode("mobile")}
              className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                showMobileView
                  ? "bg-slate-800 text-amber-400 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile App View</span>
            </button>
          </div>

          {/* View Switcher: Shopkeeper POS ↔ Customer Storefront */}
          <div className="flex items-center gap-2">
            {incomingOrderAlert && (
              <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 animate-pulse">
                <Bell className="w-3 h-3 text-emerald-400" />
                <span>1 New Order!</span>
              </div>
            )}

            <div className="grid grid-cols-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setCurrentView("merchant")}
                className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all ${
                  currentView === "merchant"
                    ? "bg-amber-500 text-slate-950 font-black shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Store className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">Shopkeeper POS</span>
              </button>
              <button
                onClick={() => setCurrentView("customer")}
                className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all ${
                  currentView === "customer"
                    ? "bg-emerald-600 text-white shadow-sm font-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">Live Storefront</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── MAIN INTERACTIVE CONTAINER (Framed with Professional Margins) ──── */}
        <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-slate-100/60 shadow-2xl shadow-slate-300/40 overflow-hidden flex justify-center ring-1 ring-slate-900/5 max-w-full">
          {/* ========================================================================= */}
          {/* DESKTOP VIEW                                                              */}
          {/* ========================================================================= */}
          {!showMobileView ? (
            <div className="hidden md:block w-full overflow-x-auto select-none rounded-2xl sm:rounded-3xl no-scrollbar">
              <div className="min-w-[880px] lg:min-w-0 w-full flex bg-[#F9FAFB] text-slate-900 min-h-[700px] 2xl:min-h-[780px]">
            {/* Real Vyop AppSidebar on Left */}
            <aside
              className={`${isSidebarCollapsed ? "w-16" : "w-52"
                } bg-[#161730] border-r border-[#242548] p-3 flex flex-col justify-between shrink-0 transition-all duration-200`}
            >
              <div>
                {/* Brand Header */}
                <div className="flex items-center gap-2.5 px-1 py-2 mb-4">
                  <img
                    src="/logo.svg"
                    alt="Vyop Logo"
                    className="h-8 w-8 rounded-xl object-contain shadow-md shadow-amber-500/20 shrink-0"
                  />
                  {!isSidebarCollapsed && (
                    <div className="font-bold text-lg text-white tracking-tight">Vyop</div>
                  )}
                </div>

                {/* Nav Items */}
                <nav className="space-y-1.5">
                  <button
                    onClick={handleLockedTab}
                    title={isSidebarCollapsed ? "Dashboard" : undefined}
                    className={`w-full flex items-center ${isSidebarCollapsed ? "justify-center px-0" : "gap-2.5 px-3"
                      } py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-[#202142] hover:text-white transition-all text-left group relative`}
                  >
                    <LayoutGrid className="w-4 h-4 shrink-0" />
                    {!isSidebarCollapsed && <span>Dashboard</span>}
                  </button>

                  <button
                    title={isSidebarCollapsed ? "Inventory" : undefined}
                    className={`w-full flex items-center ${isSidebarCollapsed ? "justify-center px-0" : "gap-2.5 px-3"
                      } py-2 rounded-xl text-xs font-semibold bg-[#28294e] text-white shadow-xs text-left group relative`}
                  >
                    <Package className="w-4 h-4 text-[#f59e0b] shrink-0" />
                    {!isSidebarCollapsed && <span>Inventory</span>}
                  </button>

                  <button
                    onClick={handleLockedTab}
                    title={isSidebarCollapsed ? "Bills" : undefined}
                    className={`w-full flex items-center ${isSidebarCollapsed ? "justify-center px-0" : "gap-2.5 px-3"
                      } py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-[#202142] hover:text-white transition-all text-left group relative`}
                  >
                    <FileText className="w-4 h-4 shrink-0" />
                    {!isSidebarCollapsed && <span>Bills</span>}
                    {isSidebarCollapsed && (
                      <span className="absolute left-full ml-2 px-2 py-1 bg-white text-slate-900 text-[10px] font-bold rounded shadow-md border border-slate-200 hidden group-hover:block z-30 whitespace-nowrap">
                        Bills
                      </span>
                    )}
                  </button>

                  <button
                    onClick={handleLockedTab}
                    title={isSidebarCollapsed ? "Billing" : undefined}
                    className={`w-full flex items-center ${isSidebarCollapsed ? "justify-center px-0" : "gap-2.5 px-3"
                      } py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-[#202142] hover:text-white transition-all text-left group relative`}
                  >
                    <CreditCard className="w-4 h-4 shrink-0" />
                    {!isSidebarCollapsed && <span>Billing</span>}
                  </button>
                </nav>
              </div>

              {/* Bottom Settings Button */}
              <div className="border-t border-[#242548]/70 pt-2">
                <button
                  onClick={handleLockedTab}
                  title={isSidebarCollapsed ? "Settings" : undefined}
                  className={`w-full flex items-center ${isSidebarCollapsed ? "justify-center px-0" : "gap-2.5 px-3"
                    } py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-[#202142] hover:text-white transition-all text-left`}
                >
                  <Settings className="w-4 h-4 shrink-0" />
                  {!isSidebarCollapsed && <span>Settings</span>}
                </button>
              </div>
            </aside>

            {/* Main Desktop View Content Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#F9FAFB] overflow-hidden">
              {/* Top Navigation Bar */}
              <header className="bg-white border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <button
                    onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    title="Toggle Sidebar"
                  >
                    <PanelLeft className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 bg-[#F3F4F6] rounded-xl px-3 py-1.5 w-60 sm:w-80">
                    <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products, orders..."
                      className="bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none w-full"
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery("")}>
                        <X className="w-3 h-3 text-slate-400 hover:text-slate-600" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => alert("Multi-lingual toggle: English / हिंदी enabled")}
                    className="text-xs font-bold text-slate-700 hover:text-slate-950 px-2 py-1 rounded-md hover:bg-slate-100 transition-colors"
                  >
                    A अ
                  </button>

                  <button
                    onClick={() => alert("No unread alerts")}
                    className="relative p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    <Bell className="w-4 h-4" />
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-red-500" />
                  </button>

                  <div className="w-7 h-7 rounded-full bg-[#fed7aa] border border-amber-300 text-amber-900 font-bold text-xs flex items-center justify-center shadow-xs">
                    S
                  </div>
                </div>
              </header>

              {/* Main Content Body */}
              {currentView === "merchant" ? (
                <main className="flex-1 p-4 sm:p-6 overflow-y-auto min-h-[680px] max-h-[760px] 2xl:max-h-[820px] relative">
                  {/* Tooltip feedback when clicking locked buttons */}
                  {lockedTooltip && (
                    <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center justify-between animate-in fade-in">
                      <span>{lockedTooltip}</span>
                      <button onClick={() => setLockedTooltip(null)}>
                        <X className="w-3.5 h-3.5 text-amber-600" />
                      </button>
                    </div>
                  )}

                  {/* Incoming Cloud Order Alert Card in POS */}
                  {incomingOrderAlert && (
                    <div className="mb-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center justify-between gap-4 animate-in slide-in-from-top shadow-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-black flex items-center justify-center">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-extrabold text-emerald-950 flex items-center gap-2">
                            <span>Direct Online Order Received!</span>
                            <span className="px-1.5 py-0.5 rounded bg-emerald-200 text-[10px] font-mono font-bold">
                              #{incomingOrderAlert.id}
                            </span>
                          </div>
                          <div className="text-[11px] text-emerald-800 mt-0.5">
                            {incomingOrderAlert.name} • {incomingOrderAlert.items.join(", ")} •{" "}
                            <strong className="text-emerald-950 font-bold">₹{incomingOrderAlert.total}</strong>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            alert("Invoice generated and sent to thermal printer!");
                            setIncomingOrderAlert(null);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition-all shadow-xs"
                        >
                          1-Tap Print Bill
                        </button>
                        <button
                          onClick={() => setIncomingOrderAlert(null)}
                          className="text-emerald-700 hover:text-emerald-950 text-xs"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 3 Real Vyop StatCards (Warm Cream #FFF9F2 with Border #FDE8CE) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-10">
                    {/* StatCard 1: Total Inventory Value */}
                    <div className="p-4 pt-5 rounded-2xl bg-[#FFF9F2] border border-[#FDE8CE] text-center relative shadow-xs">
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#FFF9F2] border border-[#FDE8CE] text-amber-600 flex items-center justify-center shadow-xs">
                        <Package className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">Total Inventory Value</div>
                      <div className="text-xl font-black text-slate-900 mt-0.5">₹0</div>
                    </div>

                    {/* StatCard 2: Share Catalogue (Interactive Online Store Launcher!) */}
                    <div
                      onClick={() => {
                        setHasClickedOnlineStore(true);
                        handleStartPublish();
                      }}
                      className={`p-4 pt-5 rounded-2xl bg-[#FFF9F2] text-center relative cursor-pointer transition-all group shadow-xs ${
                        !hasClickedOnlineStore
                          ? "border-2 border-amber-500 ring-4 ring-amber-400/40 shadow-xl shadow-amber-500/20 scale-[1.02]"
                          : "border border-[#FDE8CE] hover:border-amber-400 hover:shadow-sm"
                      }`}
                    >
                      {/* Floating Prompt Badge asking user to click — Positioned BELOW card */}
                      {!hasClickedOnlineStore && (
                        <div className="absolute -bottom-11 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none animate-bounce">
                          <div className="w-2.5 h-2.5 bg-amber-400 rotate-45 -mb-1.5 border-l-2 border-t-2 border-white shadow-xs" />
                          <div className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-black text-xs shadow-xl shadow-amber-500/40 flex items-center gap-1.5 whitespace-nowrap border-2 border-white">
                            <span className="text-sm">👆</span>
                            <span>Click here to launch Online Store!</span>
                            <Sparkles className="w-3.5 h-3.5 text-slate-950 fill-slate-950 shrink-0" />
                          </div>
                        </div>
                      )}

                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#FFF9F2] border border-[#FDE8CE] text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                        <Share2 className="w-3.5 h-3.5" />
                        {!hasClickedOnlineStore && (
                          <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">Share Catalogue</div>
                      <div className="text-xl font-black text-slate-900 mt-0.5 flex items-center justify-center gap-1 group-hover:text-amber-600 transition-colors">
                        <span>Online Store</span>
                      </div>
                    </div>

                    {/* StatCard 3: Store Offers */}
                    <div
                      onClick={() => alert("Store Offers: Add flat discount & coupon codes for your customers.")}
                      className="p-4 pt-5 rounded-2xl bg-[#FFF9F2] border border-[#FDE8CE] text-center relative cursor-pointer hover:border-amber-400 hover:shadow-sm transition-all shadow-xs"
                    >
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#FFF9F2] border border-[#FDE8CE] text-amber-600 flex items-center justify-center shadow-xs">
                        <Tag className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">Store Offers</div>
                      <div className="text-xl font-black text-slate-900 mt-0.5">Add Offer</div>
                    </div>
                  </div>

                  {/* Action Bar & Controls */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-3.5">
                    {/* Search by Product or SKU */}
                    <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs w-full sm:w-72 shadow-xs">
                      <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by product name or SKU..."
                        className="bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none w-full"
                      />
                    </div>

                    {/* Right Buttons Bar */}
                    <div className="flex items-center flex-wrap gap-2">
                      <button
                        onClick={handleStartPublish}
                        className="px-3.5 py-1.5 rounded-xl bg-[#ff9a03] hover:bg-[#ea8900] text-black font-extrabold text-xs border border-black shadow-xs flex items-center gap-1 transition-transform active:scale-95 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Add Stock</span>
                      </button>

                      <button
                        onClick={() => alert("Stock Metrics: Fast moving items, out of stock alerts & turnover.")}
                        className="px-3.5 py-1.5 rounded-xl bg-[#F3F4F6] hover:bg-slate-200 text-slate-700 font-medium text-xs border border-slate-200 transition-colors"
                      >
                        Stock Metrics
                      </button>

                      <div className="relative">
                        <button
                          onClick={() => setSelectedCategory(shop.categories[0] || "All")}
                          className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs border border-slate-200 flex items-center gap-1.5 transition-colors"
                        >
                          <span>All Categories</span>
                          <ChevronDown className="w-3 h-3 text-slate-400" />
                        </button>
                      </div>

                      <button
                        onClick={() => alert("Inventory sync updated successfully!")}
                        className="px-3.5 py-1.5 rounded-xl bg-[#FFF7ED] hover:bg-[#FEEBCB] text-[#EA580C] font-semibold text-xs border border-[#FED7AA] transition-colors"
                      >
                        Update Stock
                      </button>
                    </div>
                  </div>

                  {/* Category Filter Pills Row */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 no-scrollbar">
                    {shop.categories.map((cat: string) => {
                      const isActive =
                        selectedCategory === cat ||
                        (cat.startsWith("All") && (selectedCategory === "All" || selectedCategory.startsWith("All")));
                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${isActive
                              ? "bg-[#ff9a03] text-black font-extrabold shadow-xs"
                              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                            }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>

                  {/* Responsive Enterprise Product Grid (Spans wide full width smoothly) */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 pb-20">
                    {filteredProducts.map((item: Product) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setSelectedProduct(item);
                          setSelectedVariantIndex(0);
                        }}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative cursor-pointer"
                      >
                        {/* Upper Stage: Aspect Square Visual */}
                        <div className="aspect-square relative overflow-hidden bg-[#F1F4F9] flex items-center justify-center">
                          {/* Top-Right Circular 3-Dots Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              alert(`Product actions for ${item.name}: Edit, Delete, Print Barcode`);
                            }}
                            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/95 backdrop-blur-xs shadow-xs border border-slate-200 flex items-center justify-center text-slate-600 hover:text-black hover:bg-white z-10 transition-colors"
                          >
                            <MoreHorizontal className="w-3.5 h-3.5" />
                          </button>

                          {/* Corner Orange Indicator Dot */}
                          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 z-20 pointer-events-none" />

                          {/* Visual Render: Clipart or Placeholder */}
                          <ProductVisualStage product={item} />
                        </div>

                        {/* Lower Stage: Details */}
                        <div className="p-3 pt-2 bg-white flex flex-col justify-between">
                          <div className="text-xs font-semibold text-slate-900 truncate" title={item.name}>
                            {item.name}
                          </div>
                          <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-100">
                            <span className="text-[9px] text-slate-400 font-medium tracking-tight uppercase">
                              PRICE (₹)
                            </span>
                            <span className="text-xs font-black text-slate-900">
                              ₹{item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </main>
              ) : (
                /* Desktop Customer Storefront Preview */
                <main className="flex-1 bg-[#F9FAFB] p-5 sm:p-6 overflow-y-auto min-h-[680px] max-h-[760px] 2xl:max-h-[820px]">
                  <CustomerStorefrontView
                    shop={shop}
                    filteredProducts={filteredProducts}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    cart={cart}
                    addToCart={addToCart}
                    updateCartQty={updateCartQty}
                    setSelectedProduct={setSelectedProduct}
                    setSelectedVariantIndex={setSelectedVariantIndex}
                    setIsCartOpen={setIsCartOpen}
                    setIsSpinWheelOpen={setIsSpinWheelOpen}
                    appliedCoupon={appliedCoupon}
                    setAppliedCoupon={setAppliedCoupon}
                    cartTotal={cartTotal}
                  />
                </main>
              )}
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* MOBILE VIEW (Authentic Smartphone Frame with Real Vyop Mobile App UI)     */
          /* ========================================================================= */
          <div className="w-full max-w-[340px] sm:max-w-[380px] h-[660px] sm:h-[700px] bg-[#FAF8F5] border-[6px] sm:border-[7px] border-slate-900 rounded-[40px] sm:rounded-[50px] shadow-2xl flex flex-col my-2 sm:my-3 overflow-hidden relative ring-1 ring-white/10 shrink-0 mx-auto">
            {/* Phone Notch / Status Bar */}
            <div className="bg-white px-6 pt-3 pb-2 flex items-center justify-between text-[11px] text-slate-800 font-semibold select-none border-b border-slate-100 shrink-0">
              <span className="font-bold">9:41</span>
              <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto" />
              <div className="flex items-center gap-1.5 text-[10px] font-mono">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>

            {/* Mobile Screen Body */}
            {currentView === "merchant" ? (
              <div className="flex-1 flex flex-col min-h-0 bg-[#FAF8F5] text-slate-900 overflow-hidden relative">
                {/* 1. Header (Logo, Store Name, Language, Bell, Avatar) */}
                <div className="bg-white px-4 py-2.5 flex items-center justify-between border-b border-slate-100 shadow-2xs shrink-0">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/logo.svg"
                      alt="Vyop Logo"
                      className="h-8 w-8 rounded-xl object-contain shadow-xs shrink-0"
                    />
                    <div className="text-[16px] font-bold text-slate-900 tracking-tight">
                      {shop.name.toLowerCase() === "vyop store" ? "krishna" : shop.name.toLowerCase()}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert("Multi-lingual toggle: English / हिंदी enabled")}
                      className="text-xs font-bold text-slate-700 hover:text-slate-950 px-1.5 py-1 rounded transition-colors"
                    >
                      A <strong className="font-black">अ</strong>
                    </button>

                    <button
                      onClick={() => alert("No unread notifications")}
                      className="p-1 text-slate-700 hover:text-slate-950 transition-colors"
                    >
                      <Bell className="w-4 h-4" />
                    </button>

                    <div className="w-7 h-7 rounded-full bg-[#FED7AA] border border-amber-300 text-amber-900 font-extrabold text-xs flex items-center justify-center shadow-xs">
                      S
                    </div>
                  </div>
                </div>

                {/* 2. Scrollable Middle Content (Cards, Search, Items / Empty State) */}
                <div className="flex-1 overflow-y-auto p-3.5 space-y-2.5 no-scrollbar pb-6">
                  {/* Top Stats Cards (Total Inventory Value & Share Catalogue) */}
                  <div className="grid grid-cols-2 gap-2.5 mb-7">
                    {/* Card 1: Total Inventory Value */}
                    <div className="p-3 pt-3.5 rounded-2xl bg-[#FFF9F2] border border-[#FDE8CE] text-center relative shadow-xs">
                      <div className="w-5 h-5 mx-auto text-amber-600 mb-1 flex items-center justify-center">
                        <Package className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">Total Inventory Value</div>
                      <div className="text-xl font-black text-slate-900 mt-0.5">₹0</div>
                    </div>

                    {/* Card 2: Share Catalogue (Online Store) */}
                    <div
                      onClick={() => {
                        setHasClickedOnlineStore(true);
                        handleStartPublish();
                      }}
                      className={`p-3 pt-3.5 rounded-2xl bg-[#FFF9F2] text-center relative shadow-xs cursor-pointer active:scale-95 transition-all group ${
                        !hasClickedOnlineStore
                          ? "border-2 border-amber-500 ring-4 ring-amber-400/40 shadow-lg shadow-amber-500/25"
                          : "border border-[#FDE8CE] hover:border-amber-400"
                      }`}
                    >
                      {/* Floating Prompt Badge asking mobile user to tap — Positioned BELOW card */}
                      {!hasClickedOnlineStore && (
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none animate-bounce">
                          <div className="w-2 h-2 bg-amber-400 rotate-45 -mb-1 border-l-2 border-t-2 border-white shadow-xs" />
                          <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-black text-[10px] shadow-xl shadow-amber-500/40 flex items-center gap-1 whitespace-nowrap border-2 border-white">
                            <span className="text-xs">👆</span>
                            <span>Tap here to launch!</span>
                            <Sparkles className="w-3 h-3 text-slate-950 fill-slate-950 shrink-0" />
                          </div>
                        </div>
                      )}

                      <div className="w-5 h-5 mx-auto text-amber-600 mb-1 flex items-center justify-center group-hover:scale-110 transition-transform relative">
                        <Share2 className="w-4 h-4 stroke-[2.2]" />
                        {!hasClickedOnlineStore && (
                          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">Share Catalogue</div>
                      <div className="text-sm font-black text-slate-900 mt-1 group-hover:text-amber-600 transition-colors">
                        Online Store
                      </div>
                    </div>
                  </div>

                  {/* Store Offers & Discounts Bar */}
                  <div className="px-3.5 py-2.5 rounded-2xl bg-[#FFF9F2] border border-[#FDE8CE] flex items-center justify-between shadow-xs">
                    <span className="text-xs font-bold text-slate-900">Store Offers &amp; Discounts</span>
                    <button
                      onClick={() => alert("Store Offers: Add custom discount banners and coupon codes.")}
                      className="px-3 py-1.5 rounded-xl bg-[#F59E0B] hover:bg-[#EA8900] text-slate-950 font-bold text-xs flex items-center gap-1 shadow-xs active:scale-95 transition-transform cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Add Offer</span>
                    </button>
                  </div>

                  {/* Search and Action Controls */}
                  <div className="space-y-2">
                    {/* Row 1: Search Input + Stock Metrics */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-xs">
                        <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search by product na"
                          className="bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none w-full"
                        />
                        {searchQuery && (
                          <button onClick={() => setSearchQuery("")}>
                            <X className="w-3 h-3 text-slate-400 hover:text-slate-600" />
                          </button>
                        )}
                      </div>

                      <button
                        onClick={() => alert("Stock Metrics: Fast moving items, turnover, and out of stock alerts.")}
                        className="px-3 py-2 rounded-xl bg-[#EDF2F7] hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200 shadow-xs transition-colors shrink-0 cursor-pointer"
                      >
                        Stock Metrics
                      </button>
                    </div>

                    {/* Row 2: All Status Dropdown + Update Stock */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedCategory(
                            selectedCategory === "All" || selectedCategory.startsWith("All")
                              ? shop.categories[1] || "All"
                              : "All"
                          );
                        }}
                        className="flex-1 flex items-center justify-between bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <span>
                          {selectedCategory === "All" || selectedCategory.startsWith("All")
                            ? "All Status"
                            : selectedCategory}
                        </span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      </button>

                      <button
                        onClick={() => alert("Stock quantities synced successfully!")}
                        className="px-3.5 py-2 rounded-xl bg-white hover:bg-amber-50/50 text-[#EA580C] font-bold text-xs border border-[#F59E0B] shadow-xs transition-colors shrink-0 cursor-pointer"
                      >
                        Update Stock
                      </button>
                    </div>
                  </div>

                  {/* Inventory Body (Products or Empty State) */}
                  {filteredProducts.length === 0 ? (
                    /* Exact Empty State from Real Vyop Mobile App (Image 1) */
                    <div className="py-10 px-4 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 rounded-full bg-[#EDF2F7] flex items-center justify-center mb-4 shadow-xs">
                        <svg
                          className="w-10 h-10 text-slate-600"
                          viewBox="0 0 48 48"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M24 4 L40 13.5 L40 33.5 L24 43 L8 33.5 L8 13.5 Z" />
                          <path d="M24 4 L24 23.5 L40 13.5" />
                          <path d="M24 23.5 L8 13.5" />
                          <path d="M24 23.5 L24 43" />
                        </svg>
                      </div>
                      <div className="text-[17px] font-bold text-slate-900">No items found</div>
                      <div className="text-xs text-slate-500 mt-1 max-w-[200px]">
                        Start by adding items to your inventory
                      </div>
                    </div>
                  ) : (
                    /* Product Items List in Authentic Clean Light Theme */
                    <div className="space-y-2 pt-1 pb-4">
                      <div className="flex items-center justify-between px-1">
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          Store Inventory ({filteredProducts.length})
                        </div>
                        <button
                          onClick={() => setSearchQuery("xyz_empty_query")}
                          className="text-[10px] text-amber-600 hover:underline font-semibold cursor-pointer"
                        >
                          Preview Empty State
                        </button>
                      </div>

                      {filteredProducts.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => {
                            setSelectedProduct(item);
                            setSelectedVariantIndex(0);
                          }}
                          className="p-2.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-2.5 shadow-2xs hover:border-amber-400 transition-all cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-11 h-11 rounded-xl overflow-hidden border border-slate-100 shrink-0 bg-[#F1F4F9]">
                              <ProductVisualStage product={item} className="w-full h-full" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-slate-900 truncate">{item.name}</div>
                              <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                                In Stock: {item.stock}
                              </div>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="text-xs font-black text-slate-900">₹{item.price}</div>
                            <div className="text-[9px] text-slate-400 line-through">MRP ₹{item.mrp}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. Docked Bottom Section: + Add Stock + Floating Pill Navbar + Home Indicator */}
                <div className="shrink-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5] to-transparent pt-2 pb-2.5 px-3 relative border-t border-slate-200/50">
                  {/* + Add Stock Button & Right Edge ADD Tab */}
                  <div className="relative flex items-center justify-center mb-2.5">
                    <button
                      onClick={handleStartPublish}
                      className="px-7 py-2.5 rounded-full bg-gradient-to-r from-[#FF9A03] to-[#F97316] text-slate-950 font-black text-xs sm:text-sm border-2 border-slate-900 shadow-lg shadow-amber-500/25 active:scale-95 transition-transform flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-4 h-4 stroke-[3]" />
                      <span>Add Stock</span>
                    </button>

                    {/* Right Edge "ADD" Half-Tab */}
                    <button
                      onClick={handleStartPublish}
                      title="Quick Add"
                      className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-12 rounded-l-full bg-[#FF9A03] border-2 border-r-0 border-slate-900 flex flex-col items-center justify-center text-[9px] font-black text-slate-950 leading-none shadow-md cursor-pointer hover:w-7 transition-all"
                    >
                      <span>A</span>
                      <span className="mt-0.5">D</span>
                      <span className="mt-0.5">D</span>
                    </button>
                  </div>

                  {/* Floating Pill Navigation Bar */}
                  <div className="mx-1 p-1.5 bg-white border border-slate-200/90 rounded-[28px] shadow-md flex items-center justify-around">
                    <button
                      onClick={handleLockedTab}
                      className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors"
                      title="Home"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>

                    <div className="bg-[#1C2333] text-white px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs font-bold text-xs">
                      <Warehouse className="w-3.5 h-3.5 text-white" />
                      <span>Inventory</span>
                    </div>

                    <button
                      onClick={handleLockedTab}
                      className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors"
                      title="Parties"
                    >
                      <BookUser className="w-4 h-4" />
                    </button>

                    <button
                      onClick={handleLockedTab}
                      className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors"
                      title="Billing"
                    >
                      <Receipt className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Home Indicator */}
                  <div className="w-28 h-1 bg-slate-900/20 rounded-full mx-auto mt-2" />
                </div>
              </div>
            ) : (
              /* Mobile Customer Storefront Preview */
              <div className="flex-1 overflow-y-auto no-scrollbar">
                <CustomerStorefrontView
                  shop={shop}
                  filteredProducts={filteredProducts}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  cart={cart}
                  addToCart={addToCart}
                  updateCartQty={updateCartQty}
                  setSelectedProduct={setSelectedProduct}
                  setSelectedVariantIndex={setSelectedVariantIndex}
                  setIsCartOpen={setIsCartOpen}
                  setIsSpinWheelOpen={setIsSpinWheelOpen}
                  appliedCoupon={appliedCoupon}
                  setAppliedCoupon={setAppliedCoupon}
                  cartTotal={cartTotal}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>

      {/* ── MODAL 1: EXACT REAL VYOP CATALOG SHARE SHEET ─────────────────────── */}
      {isPublishingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 to-slate-950 rounded-t-3xl sm:rounded-3xl border border-white/10 shadow-2xl p-5 sm:p-6 text-white animate-in slide-in-from-bottom duration-300">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center border border-violet-500/30">
                  <Share2 className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Share Catalogue</h3>
                  <p className="text-xs text-slate-400">
                    {isPublished
                      ? `${shop.products.length} items live • Ready to share`
                      : "Publishing your catalogue..."}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsPublishingModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Publishing Progress Bar */}
            {!isPublished ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border-2 border-violet-500 border-t-transparent animate-spin mx-auto" />
                <div>
                  <div className="font-bold text-sm text-white">Minting Secure Catalogue Link...</div>
                  <div className="text-xs text-slate-400 mt-1">Generating QR Standee &amp; Syncing Products</div>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden max-w-xs mx-auto">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-amber-400 transition-all duration-300"
                    style={{ width: `${publishProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Real Vyop Analytics Performance Widget */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-500/10 via-amber-500/5 to-slate-900 border border-violet-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider">
                      <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
                      <span>Catalogue Performance</span>
                    </div>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      Live Sync Active
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-slate-400 font-bold">Views</div>
                      <div className="text-sm font-black text-white">142</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-slate-400 font-bold">Orders</div>
                      <div className="text-sm font-black text-white">18</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-amber-400 font-bold">Sales</div>
                      <div className="text-sm font-black text-amber-400">₹4,890</div>
                    </div>
                  </div>
                </div>

                {/* White QR Code Card */}
                <div className="bg-white rounded-2xl p-4 text-center text-slate-900 shadow-md">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {shop.name}
                  </div>
                  <div className="text-xs font-black text-slate-800 mb-2">
                    {shop.icon} {shop.categoryLabel}
                  </div>
                  <div className="w-28 h-28 mx-auto bg-slate-100 p-2 rounded-xl flex items-center justify-center border border-slate-300">
                    <QrCode className="w-24 h-24 text-slate-900" />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2">Scan with any smartphone camera</p>
                </div>

                {/* Copyable Link Container */}
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-mono text-amber-400 truncate max-w-[280px]">
                    https://vyop.shop/order?token=demo_{selectedShopType}
                  </span>
                  <button
                    onClick={() => alert("Catalogue link copied to clipboard!")}
                    className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-bold"
                  >
                    Copy
                  </button>
                </div>

                {/* Switch to Customer Storefront View Button */}
                <button
                  onClick={() => {
                    setIsPublishingModalOpen(false);
                    setCurrentView("customer");
                  }}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>See Your Live Customer Storefront (Aha! Moment)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── MODAL 2: AMAZON-STYLE PRODUCT MODAL ──────────────────────────────── */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto text-slate-900 animate-in zoom-in-95">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Product Image Stage */}
            <div className="w-full h-52 rounded-2xl overflow-hidden mb-4 relative bg-[#F1F4F9]">
              <ProductVisualStage product={selectedProduct} className="w-full h-full" />
              {selectedProduct.badge && (
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black">
                  {selectedProduct.badge}
                </span>
              )}
            </div>

            {/* Category & Title */}
            <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
              {selectedProduct.category}
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mt-0.5 leading-snug">
              {selectedProduct.name}
            </h3>

            {/* Ratings & Price */}
            <div className="flex items-center gap-2 my-2">
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                {selectedProduct.rating}
              </span>
              <span className="text-xs text-slate-500">
                ({selectedProduct.reviewsCount} verified reviews)
              </span>
            </div>

            {/* Variant Selector Pills */}
            <div className="my-3">
              <div className="text-xs font-bold text-slate-700 mb-1.5 uppercase">Select Variant / Pack:</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {selectedProduct.variants.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVariantIndex(i)}
                    className={`p-2 rounded-xl text-left border text-xs transition-all ${selectedVariantIndex === i
                      ? "bg-amber-50 border-amber-500 text-slate-950 font-bold shadow-sm"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                  >
                    <div>{v.name}</div>
                    <div className="font-black text-slate-900 mt-0.5">₹{v.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-600 leading-relaxed mb-4">{selectedProduct.description}</p>

            {/* Add to Cart CTA */}
            <button
              onClick={() => {
                addToCart(selectedProduct, selectedVariantIndex);
                setSelectedProduct(null);
                setIsCartOpen(true);
              }}
              className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart &amp; View Order</span>
            </button>
          </div>
        </div>
      )}

      {/* ── MODAL 3: SPIN THE WHEEL MINI GAME ────────────────────────────────── */}
      {isSpinWheelOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center text-slate-900 relative shadow-2xl animate-in zoom-in-95">
            <button
              onClick={() => setIsSpinWheelOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-3xl mb-1">🎁</div>
            <h3 className="text-lg font-extrabold text-slate-900">Spin the Lucky Wheel!</h3>
            <p className="text-xs text-slate-500 mb-4">Win an instant discount coupon for your order.</p>

            <div className="relative w-44 h-44 mx-auto mb-4 flex items-center justify-center">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[14px] border-t-red-600" />
              <div
                className="w-full h-full rounded-full border-4 border-slate-900 overflow-hidden relative shadow-lg transition-transform ease-out"
                style={{
                  transform: `rotate(${spinDegrees}deg)`,
                  transitionDuration: isSpinning ? "2.5s" : "0s",
                  background:
                    "conic-gradient(#f59e0b 0deg 90deg, #10b981 90deg 180deg, #3b82f6 180deg 270deg, #ec4899 270deg 360deg)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-[10px] font-black">
                    VYOP
                  </div>
                </div>
              </div>
            </div>

            {appliedCoupon ? (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-800">
                🎉 Won Code: <strong>{appliedCoupon}</strong> (-₹50 applied to cart!)
              </div>
            ) : (
              <button
                onClick={handleSpinWheel}
                disabled={isSpinning}
                className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-black transition-all disabled:opacity-50"
              >
                {isSpinning ? "Spinning..." : "Tap to Spin!"}
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── MODAL 4: CART & DUAL CHECKOUT ────────────────────────────────────── */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl relative text-slate-900 max-h-[90vh] overflow-y-auto animate-in zoom-in-95">
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-extrabold text-slate-900 mb-1">Your Order Cart</h3>
            <div className="text-xs text-slate-500 mb-4">{shop.name}</div>

            {cart.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-400">Cart is empty. Add products!</div>
            ) : (
              <div className="space-y-3">
                <div className="divide-y divide-slate-100 max-h-48 overflow-y-auto">
                  {cart.map((item, idx) => (
                    <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-slate-900">{item.product.name}</div>
                        <div className="text-[10px] text-slate-500">{item.variant.name}</div>
                        <div className="font-black text-slate-800 mt-0.5">
                          ₹{item.variant.price * item.qty}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-100 px-2 py-1 rounded-lg">
                        <button
                          onClick={() => updateCartQty(item.product.id, item.variant.name, -1)}
                          className="font-bold text-slate-600"
                        >
                          -
                        </button>
                        <span className="font-bold text-xs">{item.qty}</span>
                        <button
                          onClick={() => updateCartQty(item.product.id, item.variant.name, 1)}
                          className="font-bold text-slate-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotals */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>₹{cartSubtotal}</span>
                  </div>
                  {appliedCoupon && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Discount ({appliedCoupon})</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600">
                    <span>Delivery</span>
                    <span className="text-emerald-600 font-bold">₹0 (Free)</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between font-black text-sm text-slate-900">
                    <span>Total Amount</span>
                    <span className="text-emerald-700">₹{cartTotal}</span>
                  </div>
                </div>

                {/* DPDP Consent */}
                <label className="flex items-start gap-2 text-[11px] text-slate-600 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={dpdpAgreed}
                    onChange={(e) => setDpdpAgreed(e.target.checked)}
                    className="mt-0.5 accent-amber-500 rounded"
                  />
                  <span>
                    <strong>DPDP Consent:</strong> Share my name &amp; address with {shop.name} for local order
                    delivery.
                  </span>
                </label>

                {/* Dual Ordering Options */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => handlePlaceOrder("whatsapp")}
                    disabled={!dpdpAgreed}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Option A: Order via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => handlePlaceOrder("cloud")}
                    disabled={!dpdpAgreed}
                    className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Option B: Direct Cloud Order (Pings POS)</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── BOTTOM CONVERSION CTA ────────────────────────────────────────────── */}
      <div className="w-full max-w-[1440px] px-0 mt-8">
        <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-xs font-black uppercase tracking-wider flex items-center justify-center md:justify-start gap-1">
              <Flame className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Launch Your Online Store in 60 Seconds</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black mt-0.5">Ready to take orders with 0% commission?</h3>
            <p className="text-xs font-medium text-slate-800">
              No credit card, no monthly Shopify fees. Start free on vyop.shop today.
            </p>
          </div>

          <a
            href="https://vyop.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-slate-950 hover:bg-black text-white font-black text-xs sm:text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2 shrink-0"
          >
            <span>Launch My Free Store</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ── SUB-COMPONENT: REAL CUSTOMER STOREFRONT PWA VIEW ─────────────────────────
function CustomerStorefrontView({
  shop,
  filteredProducts,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  cart,
  addToCart,
  updateCartQty,
  setSelectedProduct,
  setSelectedVariantIndex,
  setIsCartOpen,
  setIsSpinWheelOpen,
  appliedCoupon,
  setAppliedCoupon,
  cartTotal,
}: any) {
  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-full rounded-2xl overflow-hidden flex flex-col justify-between">
      {/* Customer Store Header */}
      <div className="bg-white border-b border-slate-200 p-3 sm:p-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-lg shadow-sm">
              {shop.icon}
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
                {shop.name}
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mt-0.5">
                <span className="flex items-center text-amber-500 font-bold">
                  <Star className="w-3 h-3 fill-amber-500" /> 4.9
                </span>
                <span>•</span>
                <span className="text-emerald-600 font-bold">0% Commission</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSpinWheelOpen(true)}
              className="px-2.5 py-1.5 rounded-xl bg-purple-600 text-white text-[11px] font-bold shadow-sm"
            >
              🎁 Spin
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-xl bg-amber-500 text-slate-950 font-bold shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 text-white text-[9px] font-bold flex items-center justify-center">
                  {cart.reduce((a: any, b: any) => a + b.qty, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Promo Banner Card */}
        <div className="mt-2.5 p-2 rounded-xl bg-amber-50 border border-amber-200 text-[10px] text-amber-900 flex items-center justify-between gap-2">
          <span className="truncate">{shop.bannerOffer}</span>
          <button
            onClick={() => setAppliedCoupon(shop.couponCode)}
            className="px-2 py-0.5 rounded bg-amber-600 text-white font-bold text-[9px] shrink-0"
          >
            {appliedCoupon === shop.couponCode ? "Applied ✓" : "Apply"}
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 no-scrollbar">
          {shop.categories.map((cat: string) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap transition-all ${selectedCategory === cat
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Customer Product Feed */}
      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-1">
        {filteredProducts.map((p: any) => {
          const inCart = cart.find((c: any) => c.product.id === p.id);
          return (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-slate-200 p-2.5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div
                onClick={() => {
                  setSelectedProduct(p);
                  setSelectedVariantIndex(0);
                }}
                className="cursor-pointer"
              >
                <div className="h-32 rounded-xl overflow-hidden mb-2 relative bg-[#F1F4F9] flex items-center justify-center">
                  <ProductVisualStage product={p} className="w-full h-full" />
                  {p.badge && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[9px] font-black">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="text-[9px] font-bold text-amber-600 uppercase tracking-wider">{p.category}</div>
                <h4 className="font-bold text-xs text-slate-900 leading-snug line-clamp-1 mt-0.5">{p.name}</h4>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-slate-900">₹{p.price}</div>
                  <div className="text-[9px] text-slate-400 line-through">MRP ₹{p.mrp}</div>
                </div>

                {inCart ? (
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-300 rounded-lg px-1.5 py-0.5">
                    <button
                      onClick={() => updateCartQty(p.id, inCart.variant.name, -1)}
                      className="font-bold text-xs text-slate-700"
                    >
                      -
                    </button>
                    <span className="font-bold text-xs">{inCart.qty}</span>
                    <button
                      onClick={() => updateCartQty(p.id, inCart.variant.name, 1)}
                      className="font-bold text-slate-700"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(p, 0)}
                    className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs shadow-sm hover:bg-amber-400"
                  >
                    + Add
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky Bottom Cart Bar */}
      {cart.length > 0 && (
        <div className="sticky bottom-0 bg-white border-t border-slate-200 p-2.5 px-4 flex items-center justify-between shadow-lg">
          <div>
            <div className="text-[10px] text-slate-500">
              {cart.reduce((a: any, b: any) => a + b.qty, 0)} item(s) in Cart
            </div>
            <div className="text-xs font-black text-slate-900">Total: ₹{cartTotal}</div>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5"
          >
            <span>View Cart</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
