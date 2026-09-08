export interface IndustryData {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  icon: string;
  heroHighlight: string;
  subheadline: string;
  painPoints: {
    oldWay: string;
    vyopWay: string;
  }[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const industries: IndustryData[] = [
  {
    slug: "kirana-grocery",
    name: "Kirana & Grocery Stores",
    tagline: "Speed Through Rush Hours with Smartphone Barcode & Voice Billing",
    metaTitle: "Best Billing Software for Kirana & Grocery Shops | Free POS App - Vyop",
    metaDescription: "100% Free GST billing software for Kirana & grocery stores in India. Scan barcodes with your smartphone camera, speak bills in Hindi, and track udhar khata with automatic WhatsApp reminders.",
    badge: "For Kirana & General Stores",
    icon: "🛒",
    heroHighlight: "Kirana & Grocery Shops",
    subheadline: "Tired of writing paper bills or typing items while long queues wait? Turn your phone into a mall-grade barcode scanner and create bills in 5 seconds just by speaking.",
    painPoints: [
      {
        oldWay: "Writing bills manually in paper bahi-khata while 5 customers wait in the evening rush",
        vyopWay: "Point smartphone camera at product barcodes or speak '2 Sugar, 1 Tata Tea' to bill in 5 seconds",
      },
      {
        oldWay: "Uncollected udhar (credit) balances forgotten in notebooks without proof",
        vyopWay: "One-tap digital khata with automatic WhatsApp payment reminders and instant UPI collection",
      },
      {
        oldWay: "Buying expensive ₹20,000 computer setups and barcode guns that take up counter space",
        vyopWay: "Zero hardware required. Works on your existing Android phone with wireless thermal printing",
      },
    ],
    features: [
      {
        title: "Supermarket Camera Scanner",
        description: "Scan manufacturer barcodes on pulses, oils, biscuits, and soaps directly with your phone camera.",
        icon: "📱",
      },
      {
        title: "Voice AI in Hindi & Hinglish",
        description: "Speak naturally: 'Do kilo cheeni aur ek refined tel'. The bill is instantly calculated and ready to print.",
        icon: "🎙️",
      },
      {
        title: "Loose Item & Unit Pricing",
        description: "Effortlessly bill items sold in grams, kilograms, liters, or custom packets with automatic rate conversion.",
        icon: "⚖️",
      },
      {
        title: "0% Commission WhatsApp Store",
        description: "Send a live catalog link to nearby colony residents so they order groceries directly on your WhatsApp.",
        icon: "🛍️",
      },
    ],
    faqs: [
      {
        question: "Can I use Vyop on my existing Android smartphone without buying a computer?",
        answer: "Yes! Vyop is designed 100% for smartphones. Your phone camera acts as a barcode scanner, and you can connect any portable Bluetooth thermal printer for ₹1,500.",
      },
      {
        question: "How does voice billing work for Kirana items?",
        answer: "Simply tap the AI Orb and speak in Hindi, Hinglish, or English (e.g., 'Teen Maggi packet, ek Amul butter'). Vyop understands item names, quantities, and calculates totals instantly.",
      },
      {
        question: "Does Vyop send WhatsApp bills and payment reminders?",
        answer: "Yes, you can send digital bills with itemized GST and UPI QR codes straight to your customer's WhatsApp with one tap.",
      },
    ],
  },
  {
    slug: "restaurant-cafe",
    name: "Restaurants, Cafes & Fast Food",
    tagline: "Voice KOT, Table Management & Quick Thermal Food Billing",
    metaTitle: "Free Restaurant Billing & Voice KOT Software | Cafe POS App - Vyop",
    metaDescription: "Speed up your cafe, restaurant, or cloud kitchen with Vyop's voice-powered KOT generator, table management, digital QR menus, and instant GST bill printing.",
    badge: "For Restaurants, Cafes & Food Outlets",
    icon: "🍽️",
    heroHighlight: "Restaurants & Cafes",
    subheadline: "Say goodbye to lost paper KOTs and slow cashier lines. Speak food orders directly to fire kitchen tickets and print customer bills in seconds.",
    painPoints: [
      {
        oldWay: "Handwritten kitchen tickets that chefs misread during dinner rushes",
        vyopWay: "Speak 'Table 4: Two Butter Chicken, Three Garlic Naan' for instant formatted KOT printing",
      },
      {
        oldWay: "Paying ₹25,000+ per year for clunky restaurant desktop POS software",
        vyopWay: "Manage tables, takeaway, and digital menu ordering from any affordable Android phone or tablet",
      },
      {
        oldWay: "High 25-30% commissions charged by delivery platforms eating your margins",
        vyopWay: "Launch your own 0% commission direct online ordering website with QR codes for table orders",
      },
    ],
    features: [
      {
        title: "Voice KOT Generation",
        description: "Captains and counter staff simply speak customer food choices to generate clean, legible Kitchen Order Tickets.",
        icon: "🗣️",
      },
      {
        title: "Table & Takeaway Tracking",
        description: "Easily manage dine-in table status, split bills, add items to running tables, and handle fast parcel takeaways.",
        icon: "🪑",
      },
      {
        title: "Bluetooth Kitchen Printers",
        description: "Connect thermal printers in both the counter and the kitchen via Bluetooth or Wi-Fi for instant ticket dispatch.",
        icon: "🖨️",
      },
      {
        title: "Digital QR Code Menus",
        description: "Place custom QR codes on dining tables allowing customers to view live menu items with photos and prices.",
        icon: "📱",
      },
    ],
    faqs: [
      {
        question: "Can Vyop generate KOTs (Kitchen Order Tickets)?",
        answer: "Yes! Vyop supports instant KOT generation. Staff can speak or select food items, and tickets automatically route to your kitchen printer.",
      },
      {
        question: "Does it support GST calculation for AC and non-AC restaurants?",
        answer: "Yes, Vyop supports 5% GST on food and beverages, composite restaurant schemes, as well as regular 18% GST with split CGST and SGST.",
      },
      {
        question: "Can multiple waiters use Vyop on their phones?",
        answer: "Yes, your staff can install Vyop on their phones and sync orders in real time to the master cashier billing counter.",
      },
    ],
  },
  {
    slug: "clothing-apparel",
    name: "Clothing, Boutiques & Footwear",
    tagline: "Size & Color Matrix, Barcode Sticker Printing & Festival Banners",
    metaTitle: "Garment Shop Billing Software & Barcode Tag Printer | Vyop App",
    metaDescription: "Streamline clothing, footwear, and boutique billing. Manage size/color variants, print custom barcode price tags, create GST invoices, and attract shoppers with Spin-the-Wheel rewards.",
    badge: "For Apparel, Boutiques & Footwear",
    icon: "👗",
    heroHighlight: "Clothing & Apparel Stores",
    subheadline: "Manage hundreds of clothing variants without confusion. Scan garment hangtags, print your own barcode stickers, and send fashionable digital WhatsApp receipts.",
    painPoints: [
      {
        oldWay: "Searching through piles of unlabelled garments to find prices and sizes",
        vyopWay: "Click a photo of any garment and generate custom barcode hangtags with size, color, and MRP",
      },
      {
        oldWay: "Losing customers to online fashion brands with discount flash sales",
        vyopWay: "Engage in-store visitors with Spin-the-Wheel discount games and custom WhatsApp promotional banners",
      },
      {
        oldWay: "Complicated inventory tracking when items come in S, M, L, XL, XXL",
        vyopWay: "Simple size-color matrix with instant low-stock notifications so top sellers never run out",
      },
    ],
    features: [
      {
        title: "Custom Barcode Tag Printing",
        description: "Generate and print custom barcode stickers and hangtags directly from the app for unbranded fashion stock.",
        icon: "🏷️",
      },
      {
        title: "Size & Variant Matrix",
        description: "Organize inventory smoothly across sizes, colors, fabrics, and brands without creating duplicate items.",
        icon: "📐",
      },
      {
        title: "Spin-the-Wheel Customer Loyalty",
        description: "Delight shoppers at checkout with an interactive digital wheel to win coupons, boosting repeat store visits.",
        icon: "🎡",
      },
      {
        title: "WhatsApp Bills with Photos",
        description: "Send customers an elegant invoice featuring product images and exchange policies straight to their chat.",
        icon: "💬",
      },
    ],
    faqs: [
      {
        question: "Can I print custom barcode stickers for unbranded garments?",
        answer: "Yes! Vyop includes a free barcode generator and sticker printer that connects to standard barcode label printers.",
      },
      {
        question: "Does Vyop handle apparel GST rates (5% under ₹1,000 and 12% above ₹1,000)?",
        answer: "Yes, Vyop automatically applies the correct GST slab based on item sale price according to Indian GST regulations.",
      },
      {
        question: "How does the Spin-the-Wheel feature work?",
        answer: "You can set up custom discount vouchers (e.g., 10% off, Free Socks, ₹100 Cashback). Customers spin the wheel on your phone screen upon checkout.",
      },
    ],
  },
  {
    slug: "pharmacy-chemist",
    name: "Pharmacy & Chemist Shops",
    tagline: "Batch Tracking, Expiry Date Monitoring & Fast Medicine Billing",
    metaTitle: "Pharmacy Billing Software with Batch & Expiry Tracking | Vyop",
    metaDescription: "Compliant medical store and pharmacy billing software. Scan medicine strips, track batch numbers and expiration dates, manage supplier invoices, and print GST tax invoices.",
    badge: "For Chemists & Pharmacies",
    icon: "💊",
    heroHighlight: "Pharmacy & Chemist Shops",
    subheadline: "Protect your margins and comply with drug regulations. Scan medicine strip barcodes, monitor expiry dates before they cost you money, and bill patients in seconds.",
    painPoints: [
      {
        oldWay: "Stocking expired medicines on shelves and suffering financial loss upon return",
        vyopWay: "Automatic alerts for medicines expiring in 30, 60, or 90 days so you return them to stockists on time",
      },
      {
        oldWay: "Manually typing long scientific drug names and batch numbers during rush hours",
        vyopWay: "Scan the 1D/2D barcode or speak brand names to auto-populate batch number, MRP, and GST",
      },
      {
        oldWay: "Entering 50-item stockist paper bills line-by-line late at night",
        vyopWay: "AI Invoice Scanner extracts all medicines, quantities, and purchase rates from a single photo",
      },
    ],
    features: [
      {
        title: "Batch & Expiry Management",
        description: "Track expiry dates across all strips and syrups with automatic First-Expiry-First-Out (FEFO) dispensing.",
        icon: "📅",
      },
      {
        title: "AI Supplier Bill Import",
        description: "Snap a photo of your pharmaceutical distributor's invoice to instantly update your store inventory.",
        icon: "📄",
      },
      {
        title: "Compliant Medical Invoices",
        description: "Print GST invoices showing Doctor Name, Patient Name, Batch No, Expiry, and HSN codes.",
        icon: "📋",
      },
      {
        title: "Customer Refill Reminders",
        description: "Send automated WhatsApp refill reminders to chronic medicine patients (diabetes, BP) every 30 days.",
        icon: "🔔",
      },
    ],
    faqs: [
      {
        question: "Does Vyop track medicine batch numbers and expiry dates?",
        answer: "Yes, every item entry allows batch and expiry recording. The system warns you if an expired medicine is scanned during billing.",
      },
      {
        question: "Can I import distributor invoices automatically?",
        answer: "Yes! Vyop's AI Invoice Scanner reads printed supplier invoices and imports all medicines directly into your inventory.",
      },
      {
        question: "Are medical invoices compliant with Indian drug control rules?",
        answer: "Yes, invoices include pharmacy Drug License (DL) numbers, GSTIN, Doctor details, batch, and expiry dates.",
      },
    ],
  },
  {
    slug: "hardware-sanitary",
    name: "Hardware, Electrical & Sanitary",
    tagline: "Loose Items Search, Voice Dimensions & Wholesale Contractor Ledgers",
    metaTitle: "Hardware & Electrical Store Billing Software | Free POS App - Vyop",
    metaDescription: "Speed up hardware, sanitaryware, and electrical store billing. Search loose fittings by voice or image, manage contractor khata, and print GST estimates and bills.",
    badge: "For Hardware, Paints & Electricals",
    icon: "🔧",
    heroHighlight: "Hardware & Electrical Stores",
    subheadline: "Selling thousands of unbarcoded screws, pipes, wires, and sanitary fittings? Use voice dimensions like '10 meter 2.5mm wire' and image search to bill 10x faster.",
    painPoints: [
      {
        oldWay: "Typing complex hardware specs like '1/2 inch brass ball valve' while plumbers wait",
        vyopWay: "Speak 'Do piece aada inch brass valve' into Vyop AI to generate the bill in 3 seconds",
      },
      {
        oldWay: "Contractors taking supplies on credit and disputing monthly totals",
        vyopWay: "Instant WhatsApp bill receipts sent to the contractor the exact moment their worker collects items",
      },
      {
        oldWay: "Different pricing for walk-in retail shoppers vs bulk electrical contractors",
        vyopWay: "Maintain tiered customer price lists and quick estimates that convert to final GST bills with one tap",
      },
    ],
    features: [
      {
        title: "Voice Dimension Billing",
        description: "Speak measurements in feet, meters, inches, bundles, or pieces without fiddling with unit conversions.",
        icon: "🗣️",
      },
      {
        title: "Image-Based Item Search",
        description: "Identify obscure loose plumbing fittings and fasteners by snapping a photo or selecting from visual catalogs.",
        icon: "📸",
      },
      {
        title: "Contractor Digital Khata",
        description: "Track project-wise builder and electrician balances with automated payment links and ledger statements.",
        icon: "📑",
      },
      {
        title: "GST Quotation to Bill",
        description: "Send professional PDF quotations to contractors on WhatsApp; convert to final GST tax invoice when approved.",
        icon: "💼",
      },
    ],
    faqs: [
      {
        question: "How does Vyop handle items without manufacturer barcodes?",
        answer: "You can find items using voice search ('1 inch CPVC elbow 10 pcs'), upload photo catalogs, or print custom barcode stickers.",
      },
      {
        question: "Can I manage contractor credit (udhar) with Vyop?",
        answer: "Yes, you can track balances per contractor, set credit limits, and send automated WhatsApp statements with UPI payment links.",
      },
      {
        question: "Can I create quotations and estimates?",
        answer: "Yes! Create estimates with zero tax or full GST and convert them into final invoices with a single tap once the order is finalized.",
      },
    ],
  },
  {
    slug: "electronics-mobile",
    name: "Mobile & Electronics Stores",
    tagline: "Serial & IMEI Tracking, Warranty Invoices & Accessory Barcodes",
    metaTitle: "Mobile & Electronics Shop Billing Software | IMEI & Warranty POS",
    metaDescription: "Best billing software for mobile repair and electronics retailers. Scan and track phone IMEI and serial numbers, print warranty GST bills, and barcode mobile accessories.",
    badge: "For Mobile, Laptops & Electronics",
    icon: "📱",
    heroHighlight: "Mobile & Electronics Retailers",
    subheadline: "Protect your business from warranty fraud. Scan IMEI and serial numbers directly during billing, print GST invoices with warranty terms, and manage phone repairs.",
    painPoints: [
      {
        oldWay: "Typing 15-digit IMEI numbers manually, leading to typos and rejected warranty claims",
        vyopWay: "Scan device box barcode or sticker to auto-capture IMEI 1, IMEI 2, and Serial Number instantly",
      },
      {
        oldWay: "Unbranded mobile covers, tempered glass, and cables scattered without prices",
        vyopWay: "Print custom barcode price stickers and bill accessories in 2 seconds like a retail chain",
      },
      {
        oldWay: "Customers losing paper receipts and demanding free warranty repairs months later",
        vyopWay: "Permanent digital WhatsApp invoices backed up to cloud with exact serial number and warranty date",
      },
    ],
    features: [
      {
        title: "Barcode IMEI / Serial Scanning",
        description: "Capture 15-digit IMEI and product serial numbers with your phone camera directly onto the customer invoice.",
        icon: "🔍",
      },
      {
        title: "Accessory Barcode Printing",
        description: "Generate barcode stickers for covers, chargers, earphones, and power banks to eliminate pricing guesswork.",
        icon: "🏷️",
      },
      {
        title: "Repair & Service Job Sheets",
        description: "Log incoming smartphone repair jobs, customer issue descriptions, advance payments, and delivery dates.",
        icon: "🛠️",
      },
      {
        title: "Brand-Compliant GST Invoices",
        description: "Generate professional tax invoices meeting all warranty requirements for Samsung, Apple, Xiaomi, and Vivo.",
        icon: "🧾",
      },
    ],
    faqs: [
      {
        question: "Can I record IMEI and Serial numbers on the invoice?",
        answer: "Yes! You can scan or type IMEI 1, IMEI 2, and Serial numbers. They print clearly on the customer's GST tax invoice.",
      },
      {
        question: "Does Vyop help with mobile repair tracking?",
        answer: "Yes, you can create service job cards, record fault descriptions, estimated costs, and notify customers on WhatsApp when ready.",
      },
      {
        question: "Can I manage accessory stock and barcodes?",
        answer: "Yes, you can manage inventory for tempered glass, covers, cables, and print custom barcode stickers for quick checkout.",
      },
    ],
  },
];
