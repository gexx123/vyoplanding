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
    metaTitle: "Kirana Dukan Billing Software & Grocery Shop Billing App | Vyop",
    metaDescription: "Best Kirana dukan billing software and grocery shop billing app in India. Scan barcodes with smartphone camera, speak bills in Hindi, and track udhar khata with automatic WhatsApp reminders.",
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
    metaTitle: "Restaurant / Cafe / Dhaba Billing Software with Voice KOT | Vyop",
    metaDescription: "Best Restaurant, Cafe & Dhaba billing software in India. Voice KOT generator, table billing, Bluetooth thermal printer support, QR digital menu, and instant GST bill printing.",
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
    metaTitle: "Kapde Ki Dukan Ka Billing Software & Garment Shop Billing App | Vyop",
    metaDescription: "Best Kapde ki dukan ka billing software & garment shop billing app in India. Size/color matrix, custom barcode price tags, GST invoices, and footwear support.",
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
    metaTitle: "Medical Store Billing Software & Chemist Billing App | Vyop",
    metaDescription: "Best medical store billing software & chemist billing app in India. Scan medicine strip barcodes, track batch numbers and expiry dates, and print GST invoices.",
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
    metaTitle: "Hardware & Sanitary Shop Billing Software | Electrical POS - Vyop",
    metaDescription: "Best hardware & sanitary shop billing software in India. Search loose fittings by voice or image, manage contractor khata, and print GST estimates and bills.",
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
    metaTitle: "Mobile Shop Billing Software & Electronics POS | IMEI Tracker - Vyop",
    metaDescription: "Best mobile shop billing software for phone repair and electronics retailers. Scan IMEI and serial numbers, print warranty GST bills, and barcode accessories.",
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
  {
    slug: "bakery-sweet-shop",
    name: "Bakery & Sweet Shops",
    tagline: "Weight-Based Billing, Expiry Tracking & Festival Order Management",
    metaTitle: "Mithai Dukan / Bakery Billing Software | Sweet Shop POS - Vyop",
    metaDescription: "Best Mithai dukan and bakery billing software in India. Weigh-and-bill sweets by gram, track expiry, manage bulk festival gift boxes, and print thermal GST bills.",
    badge: "For Bakeries & Mithai Shops",
    icon: "🧁",
    heroHighlight: "Bakery & Sweet Shops",
    subheadline: "Sell sweets by weight, manage festival rush orders for Diwali and Rakhi, track daily fresh stock expiry, and print beautiful GST bills — all from your smartphone.",
    painPoints: [
      { oldWay: "Manually calculating prices for mixed-weight sweet boxes during Diwali rush", vyopWay: "Weigh sweets, speak '500gm Kaju Katli, 250gm Gulab Jamun' and Vyop auto-calculates per-gram pricing" },
      { oldWay: "Fresh items like cakes and pastries expiring on shelves unsold", vyopWay: "Same-day and next-day expiry alerts ensure you discount or clear perishable stock before it's wasted" },
      { oldWay: "Losing track of advance orders for birthdays and festivals", vyopWay: "Digital order book with customer name, delivery date, advance payment, and automatic WhatsApp reminder" },
    ],
    features: [
      { title: "Weight-Based Smart Billing", description: "Bill sweets, namkeen, and dry fruits by grams or kilograms with automatic per-unit rate calculation.", icon: "⚖️" },
      { title: "Freshness & Expiry Tracking", description: "Set shelf-life for each bakery item. Get alerts before cakes, pastries, and mithai cross their freshness window.", icon: "📅" },
      { title: "Festival Bulk Order Manager", description: "Track advance bookings for Diwali boxes, wedding orders, and birthday cakes with deposit tracking.", icon: "🎁" },
      { title: "Custom Gift Box Combos", description: "Create mixed-item gift boxes with auto-calculated combo pricing and print elegant branded labels.", icon: "📦" },
    ],
    faqs: [
      { question: "Can Vyop bill sweets by weight (grams and kilograms)?", answer: "Yes! Vyop supports per-gram and per-kg pricing. Simply enter the weight and Vyop calculates the exact price. You can also connect a digital weighing scale via Bluetooth." },
      { question: "How does Vyop handle advance orders for festivals?", answer: "Create advance bookings with customer details, delivery date, item list, and deposit amount. Vyop sends automatic WhatsApp reminders before the delivery date." },
      { question: "Can I track expiry dates for perishable bakery items?", answer: "Yes, set shelf-life in hours or days for each item. Vyop alerts you before items expire so you can offer discounts or clear stock." },
    ],
  },
  {
    slug: "jewellery-watch",
    name: "Jewellery & Watch Stores",
    tagline: "Gold Rate Integration, Hallmark Tracking & Purity-Based Invoicing",
    metaTitle: "Jewellery Shop Billing Software | Gold & Silver POS App - Vyop",
    metaDescription: "Free billing software for jewellery, gold, silver & watch shops. Track hallmark BIS numbers, calculate making charges, manage daily gold rates, and print detailed GST tax invoices.",
    badge: "For Gold, Silver & Watch Shops",
    icon: "💍",
    heroHighlight: "Jewellery & Watch Stores",
    subheadline: "Track gold and silver inventory by weight and purity, calculate making charges automatically, manage hallmark BIS certification numbers, and print professional customer invoices.",
    painPoints: [
      { oldWay: "Manually looking up today's gold rate and calculating item prices for every customer", vyopWay: "Set daily gold/silver rate once in the morning — all item prices auto-update across your entire inventory" },
      { oldWay: "Handwriting complex invoices with net weight, gross weight, stone weight, and making charges", vyopWay: "Select the item, enter weight, and Vyop auto-calculates gross, net, stone deduction, making charges, and 3% GST" },
      { oldWay: "Losing track of hallmark BIS certification numbers across hundreds of items", vyopWay: "Scan or enter HUID (Hallmark Unique ID) numbers directly linked to each item in your digital inventory" },
    ],
    features: [
      { title: "Daily Rate Management", description: "Update gold 22K/24K and silver rates once daily. All inventory prices recalculate instantly across your catalog.", icon: "📊" },
      { title: "Making Charge Calculator", description: "Set per-gram or percentage-based making charges. Vyop auto-applies them to the final invoice with GST.", icon: "💰" },
      { title: "Hallmark & HUID Tracking", description: "Record BIS Hallmark Unique IDs (HUID) for every gold ornament. Print them on customer invoices for compliance.", icon: "✅" },
      { title: "Old Gold Exchange & Buyback", description: "Calculate old gold buyback value, deduct from new purchase, and generate exchange invoices with proper GST treatment.", icon: "🔄" },
    ],
    faqs: [
      { question: "Can Vyop calculate jewellery prices based on daily gold rates?", answer: "Yes! Set the daily gold rate (22K, 24K) and silver rate in the morning. All item prices auto-update. Making charges, stone deductions, and GST are calculated automatically." },
      { question: "Does Vyop track hallmark and HUID numbers?", answer: "Yes, you can scan or manually enter the BIS Hallmark Unique ID (HUID) for each ornament. It prints on the customer invoice for full compliance." },
      { question: "Can I handle old gold exchange and buyback?", answer: "Yes! Calculate old gold value based on current rates and purity, deduct from the new purchase amount, and generate a proper exchange invoice." },
    ],
  },
  {
    slug: "stationery-bookshop",
    name: "Stationery & Book Shops",
    tagline: "ISBN Scanning, School Supply Bundles & Seasonal Stock Management",
    metaTitle: "Stationery Shop Billing App & Book Store POS | Vyop",
    metaDescription: "Best stationery shop billing app and bookstore POS software. Scan book ISBNs, create school kit bundles, manage seasonal stock, and print fast GST invoices.",
    badge: "For Stationery & Book Stores",
    icon: "📚",
    heroHighlight: "Stationery & Book Shops",
    subheadline: "Scan book ISBNs and product barcodes instantly, create ready-made school supply kits, manage back-to-school seasonal rush, and never lose track of thousands of small items.",
    painPoints: [
      { oldWay: "Parents waiting 20 minutes while you manually find and price 15 items from a school supply list", vyopWay: "Create pre-made Class 1-12 school kits. One tap bills the entire bundle with all items and prices." },
      { oldWay: "Thousands of low-cost items (erasers, sharpeners, refills) with no barcodes or price tracking", vyopWay: "Print custom barcode stickers for unbranded items and scan them at checkout for instant billing" },
      { oldWay: "Unsold seasonal stock (exam pads, geometry boxes) sitting dead after the school season ends", vyopWay: "Slow-moving stock alerts help you discount and clear seasonal items before they become dead inventory" },
    ],
    features: [
      { title: "ISBN & Barcode Scanning", description: "Scan book ISBNs and product EAN barcodes with your phone camera for instant pricing and billing.", icon: "📖" },
      { title: "School Kit Bundles", description: "Create class-wise bundles (notebooks, pens, geometry box) that bill as a single combo with one tap.", icon: "🎒" },
      { title: "Seasonal Stock Alerts", description: "Track back-to-school, exam season, and festival peaks. Get alerts on slow-moving items to clear stock.", icon: "📅" },
      { title: "Wholesale & Retail Pricing", description: "Maintain separate price lists for walk-in retail customers and bulk school/institution orders.", icon: "💼" },
    ],
    faqs: [
      { question: "Can Vyop scan book ISBN barcodes?", answer: "Yes! Point your phone camera at any book's ISBN barcode. Vyop instantly reads it and pulls up the item for billing." },
      { question: "How do I manage school supply kit bundles?", answer: "Create pre-configured bundles for each class (e.g., 'Class 5 Kit: 10 notebooks, 1 geometry box, 5 pens'). Bill the entire kit with one tap." },
      { question: "Can I set different prices for wholesale and retail?", answer: "Yes, maintain separate price lists. Select the customer type (retail/wholesale/institution) and Vyop applies the correct pricing automatically." },
    ],
  },
  {
    slug: "salon-beauty",
    name: "Salon & Beauty Parlour",
    tagline: "Service Billing, Appointment Booking & Staff Commission Tracking",
    metaTitle: "Salon & Beauty Parlour Billing Software | Free Appointment App - Vyop",
    metaDescription: "Free billing and appointment software for salons, beauty parlours & spas. Track services, staff commissions, product sales, customer visit history, and manage walk-in queues.",
    badge: "For Salons, Parlours & Spas",
    icon: "💇",
    heroHighlight: "Salon & Beauty Parlours",
    subheadline: "Bill haircuts, facials, and beauty services in seconds. Track staff commissions, manage walk-in queues, sell beauty products at checkout, and build customer loyalty with automated reminders.",
    painPoints: [
      { oldWay: "Manually writing service bills on carbon copy pads while customers wait at the counter", vyopWay: "Select services from your digital menu, add products, apply discount — bill is ready to print or WhatsApp in 10 seconds" },
      { oldWay: "Calculating individual staff commissions manually at the end of every month", vyopWay: "Assign each service to a staff member. Vyop auto-calculates daily, weekly, and monthly commission reports" },
      { oldWay: "Customers forgetting to come back for their next haircut or facial appointment", vyopWay: "Automated WhatsApp reminders sent to customers based on their last visit (e.g., 'Hi! It's been 30 days since your last haircut')" },
    ],
    features: [
      { title: "Service Menu & Quick Billing", description: "Create your full service catalog (haircut, facial, bridal, spa). Bill any combination with one tap.", icon: "✂️" },
      { title: "Staff Commission Tracker", description: "Assign each service to the performing stylist/beautician. Auto-calculate commissions by percentage or fixed amount.", icon: "👩‍💼" },
      { title: "Walk-In Queue Management", description: "Manage walk-in customers with a digital token queue. Customers see their wait time and position.", icon: "🎫" },
      { title: "Product + Service Combo Billing", description: "Sell shampoos, serums, and beauty products alongside services in a single combined invoice.", icon: "🧴" },
    ],
    faqs: [
      { question: "Can Vyop manage both services and product sales in one bill?", answer: "Yes! Add services (haircut ₹200, facial ₹500) and retail products (shampoo ₹350) together in a single invoice with correct GST rates for each." },
      { question: "How does staff commission tracking work?", answer: "Assign each stylist a commission rate (e.g., 30%). When a service is billed under their name, Vyop auto-calculates their earnings. View daily or monthly reports." },
      { question: "Can I send automated reminders to customers?", answer: "Yes, Vyop sends WhatsApp reminders based on the customer's last visit date. Perfect for recurring services like haircuts, facials, and threading." },
    ],
  },
  {
    slug: "auto-parts",
    name: "Auto Parts & Accessories",
    tagline: "Vehicle-Wise Search, OEM Part Numbers & Mechanic Workshop Billing",
    metaTitle: "Automobile Spare Parts Billing Software | Auto Garage POS - Vyop",
    metaDescription: "Best automobile spare parts billing software in India. Search parts by vehicle model, track OEM part numbers, manage mechanic workshop job cards, and print GST invoices.",
    badge: "For Auto Parts & Workshops",
    icon: "🚗",
    heroHighlight: "Auto Parts & Accessories",
    subheadline: "Find parts instantly by vehicle make and model, track OEM and aftermarket part numbers, manage mechanic workshop job cards, and bill accessories with barcode scanning.",
    painPoints: [
      { oldWay: "Searching through dusty catalogs to find the right brake pad model for a specific car", vyopWay: "Search by vehicle (e.g., 'Maruti Swift 2022 front brake pad') and Vyop shows matching parts with prices" },
      { oldWay: "Confusing OEM part numbers with aftermarket numbers leading to wrong orders", vyopWay: "Store both OEM and aftermarket part numbers. Cross-reference and verify before billing." },
      { oldWay: "Mechanics picking parts from shelves without any record until month-end reconciliation", vyopWay: "Digital job card system — every part used in a repair is logged, billed, and tracked in real-time" },
    ],
    features: [
      { title: "Vehicle Model Search", description: "Search inventory by vehicle make, model, and year. Instantly find compatible parts for any car or bike.", icon: "🔍" },
      { title: "OEM Part Number Tracking", description: "Store OEM and aftermarket part numbers with cross-references. Scan barcodes on packaging for quick lookup.", icon: "🏭" },
      { title: "Workshop Job Cards", description: "Create repair job cards with customer vehicle details, parts used, labor charges, and delivery estimates.", icon: "🔧" },
      { title: "Mechanic-Wise Billing", description: "Track parts issued to each mechanic. Generate reconciliation reports to prevent inventory shrinkage.", icon: "👨‍🔧" },
    ],
    faqs: [
      { question: "Can I search parts by vehicle make and model?", answer: "Yes! Tag each part with compatible vehicle models. When a customer asks for a part, search by vehicle (e.g., 'Honda City 2023 oil filter') and Vyop shows all matching items." },
      { question: "Does Vyop track OEM part numbers?", answer: "Yes, store both OEM and aftermarket part numbers for each item. Scan packaging barcodes to auto-fill part details." },
      { question: "Can I create mechanic workshop job cards?", answer: "Yes, create job cards with vehicle details, fault description, parts used, labor charges, and estimated delivery date. Send updates to customers via WhatsApp." },
    ],
  },
  {
    slug: "optical-eyewear",
    name: "Optical & Eyewear Shops",
    tagline: "Prescription Management, Lens Inventory & Frame Barcode Billing",
    metaTitle: "Optical Shop Billing Software | Eyewear Store POS App - Vyop",
    metaDescription: "Free billing software for optical shops and eyewear stores. Manage customer prescriptions, track lens and frame inventory with barcodes, and print detailed GST invoices with power specifications.",
    badge: "For Optical & Eyewear Stores",
    icon: "👓",
    heroHighlight: "Optical & Eyewear Shops",
    subheadline: "Store customer eye prescriptions digitally, scan frame barcodes for instant billing, track lens stock by power and type, and print invoices with complete prescription details.",
    painPoints: [
      { oldWay: "Searching through paper prescription files to find a returning customer's eye power", vyopWay: "Digital customer profiles store prescription history. Pull up any customer's SPH, CYL, AXIS, and ADD in 2 seconds." },
      { oldWay: "Hundreds of frame models with no price tags causing billing delays", vyopWay: "Print barcode stickers for every frame. Scan at checkout for instant model, brand, and price lookup." },
      { oldWay: "Complex invoices with frame cost + lens cost + coating charges confusing customers", vyopWay: "Itemized invoices breaking down frame, lens type, coating, and fitting charges with clear GST" },
    ],
    features: [
      { title: "Digital Prescription Storage", description: "Store SPH, CYL, AXIS, ADD, PD, and lens type for each customer. Access prescription history for reorders.", icon: "📋" },
      { title: "Frame Barcode Scanning", description: "Print and scan frame barcodes for instant brand, model, and price billing. Track which frames sell fastest.", icon: "🏷️" },
      { title: "Lens Stock by Power", description: "Manage lens inventory by power range, type (single vision, bifocal, progressive), and coating (anti-glare, blue-cut).", icon: "🔍" },
      { title: "Ready-in Reminders", description: "Send WhatsApp notifications to customers when their glasses are ready for pickup with prescription summary.", icon: "📱" },
    ],
    faqs: [
      { question: "Can Vyop store customer eye prescriptions?", answer: "Yes! Store complete prescriptions (SPH, CYL, AXIS, ADD, PD) for both eyes. Access history for returning customers or reorders." },
      { question: "How does frame barcode scanning work?", answer: "Print barcode stickers for each frame model. At checkout, scan the frame barcode with your phone camera for instant brand, model, and price billing." },
      { question: "Can I track lens inventory by power?", answer: "Yes, organize lenses by type (single vision, bifocal, progressive), power range, and coating type. Get low-stock alerts for popular powers." },
    ],
  },
  {
    slug: "sports-fitness",
    name: "Sports & Fitness Stores",
    tagline: "Size Matrix, Equipment Barcodes & Seasonal Sports Inventory",
    metaTitle: "Footwear / Joote Ki Dukan & Sports Shop Billing Software | Vyop",
    metaDescription: "Best footwear / joote ki dukan ka billing software and sports store POS. Manage shoe size/color matrix, athletic gear barcodes, and print fast GST bills.",
    badge: "For Sports & Fitness Shops",
    icon: "⚽",
    heroHighlight: "Sports & Fitness Stores",
    subheadline: "Manage cricket bats, footballs, gym equipment, and athletic wear with size/color variants, barcode scanning, and seasonal sport promotions — all from your phone.",
    painPoints: [
      { oldWay: "Athletic shoes and jerseys in 10+ sizes scattered across shelves with no tracking", vyopWay: "Size-color matrix inventory tracks exact stock of each variant. Know instantly if you have UK Size 9 in black." },
      { oldWay: "Expensive gym equipment with no serial number tracking for warranty claims", vyopWay: "Scan equipment serial barcodes and link them to customer invoices for automated warranty management" },
      { oldWay: "Cricket season stock sitting unsold when football season starts", vyopWay: "Seasonal stock alerts help you plan clearance sales and promotions before stock becomes dead inventory" },
    ],
    features: [
      { title: "Size & Variant Matrix", description: "Track shoes, jerseys, and gear across sizes (S-XXL, UK 6-12) and colors. Know exact stock per variant.", icon: "📐" },
      { title: "Equipment Serial Tracking", description: "Scan serial barcodes on gym machines, treadmills, and premium gear. Link to customer invoices for warranty.", icon: "🔍" },
      { title: "Sport Season Promotions", description: "Run IPL cricket, football league, and back-to-school sports promotions with timed discount banners.", icon: "🏆" },
      { title: "Combo Kit Builder", description: "Create sport kits (cricket kit: bat + pads + gloves + helmet) as single billable combos.", icon: "🎒" },
    ],
    faqs: [
      { question: "Can Vyop track shoe and jersey sizes?", answer: "Yes! Manage inventory with a size-color matrix. Track exact stock for each size (S, M, L, XL, UK 6-12) and color variant." },
      { question: "Does it handle equipment warranty tracking?", answer: "Yes, scan serial numbers on premium equipment. They're linked to customer invoices for easy warranty claims and returns." },
      { question: "Can I create sports kit bundles?", answer: "Yes! Create pre-configured kits (e.g., Cricket Kit: bat + pads + gloves + helmet) and bill them as a single combo with a kit price." },
    ],
  },
  {
    slug: "pet-shop",
    name: "Pet Shops & Veterinary",
    tagline: "Pet Food Expiry, Vaccination Records & Grooming Appointment Billing",
    metaTitle: "Pet Shop Billing Software | Veterinary Store POS App - Vyop",
    metaDescription: "Free billing software for pet shops, veterinary clinics & pet grooming services. Track pet food expiry dates, maintain vaccination records, manage grooming appointments, and print GST invoices.",
    badge: "For Pet Shops & Vet Clinics",
    icon: "🐾",
    heroHighlight: "Pet Shops & Veterinary",
    subheadline: "Bill pet food and accessories with barcode scanning, track pet food expiry dates, manage grooming appointments, and maintain customer pet profiles with vaccination history.",
    painPoints: [
      { oldWay: "Premium pet food bags expiring on shelves because you lost track of purchase dates", vyopWay: "Batch-wise expiry tracking alerts you 30 days before pet food expires so you can discount or return to distributor" },
      { oldWay: "Pet owners calling to ask when their dog's next vaccination is due", vyopWay: "Digital pet profiles with vaccination schedules. Automated WhatsApp reminders sent to owners before due dates." },
      { oldWay: "Grooming appointments mixed up because you manage them in a paper diary", vyopWay: "Digital appointment calendar with pet name, breed, service type, and time slot. SMS/WhatsApp confirmations." },
    ],
    features: [
      { title: "Pet Food Expiry Management", description: "Track batch-wise expiry dates for dog food, cat food, and treats. FEFO (First Expiry First Out) dispensing.", icon: "📅" },
      { title: "Pet Owner Profiles", description: "Store pet details (name, breed, age, weight), vaccination records, and purchase history per customer.", icon: "🐕" },
      { title: "Grooming Appointment Book", description: "Schedule grooming sessions with pet details, service type (bath, haircut, nail trim), and automated reminders.", icon: "✂️" },
      { title: "Accessory Barcode Billing", description: "Scan barcodes on leashes, toys, bowls, and carriers for instant checkout. Print custom tags for unbranded items.", icon: "🏷️" },
    ],
    faqs: [
      { question: "Can Vyop track pet food expiry dates?", answer: "Yes! Enter batch numbers and expiry dates when stocking pet food. Vyop alerts you 30/60/90 days before expiry for timely clearance or returns." },
      { question: "Can I maintain pet vaccination records?", answer: "Yes, create pet profiles with breed, age, and vaccination history. Send automated reminders to pet owners when vaccinations are due." },
      { question: "How do I manage grooming appointments?", answer: "Schedule appointments with pet name, breed, service type, time slot, and owner details. Send WhatsApp confirmations and reminders." },
    ],
  },
  {
    slug: "supermarket-departmental",
    name: "Supermarket & Departmental Stores",
    tagline: "Multi-Counter POS, Fast Barcode Checkout & Category-Wise Inventory",
    metaTitle: "Supermarket Billing Software | Departmental Store POS App - Vyop",
    metaDescription: "Free POS billing software for supermarkets, mini marts & departmental stores. Multi-counter billing, high-speed barcode checkout, category management, loyalty programs, and thermal receipt printing.",
    badge: "For Supermarkets & Mini Marts",
    icon: "🏪",
    heroHighlight: "Supermarkets & Departmental Stores",
    subheadline: "Run multiple billing counters simultaneously, scan barcodes at supermarket speed, manage thousands of SKUs across categories, and reward loyal customers with discount programs.",
    painPoints: [
      { oldWay: "Long checkout queues during evening rush because only one billing counter is active", vyopWay: "Run multiple billing counters on multiple phones/tablets simultaneously — all synced to one inventory in real-time" },
      { oldWay: "Expensive ₹50,000+ desktop POS hardware for each billing counter", vyopWay: "Each counter needs just an Android phone (₹8,000) + Bluetooth thermal printer (₹1,500). Total: ₹9,500 per counter." },
      { oldWay: "No visibility into which product categories (FMCG, dairy, snacks) drive the most revenue", vyopWay: "Category-wise sales analytics show which departments generate maximum revenue and which ones have dead stock" },
    ],
    features: [
      { title: "Multi-Counter Sync", description: "Run 2, 3, or 5 billing counters on separate devices. All connected to one central inventory with real-time stock updates.", icon: "🖥️" },
      { title: "High-Speed Barcode Checkout", description: "Scan items continuously at supermarket speed. Phone camera acts as a rapid barcode scanner with instant price lookup.", icon: "⚡" },
      { title: "Category Management", description: "Organize thousands of SKUs into departments (grocery, dairy, personal care, beverages). Track category-wise performance.", icon: "📊" },
      { title: "Customer Loyalty Program", description: "Reward repeat shoppers with points, discount coupons, and Spin-the-Wheel rewards to drive weekly store visits.", icon: "🎯" },
    ],
    faqs: [
      { question: "Can Vyop handle multiple billing counters at once?", answer: "Yes! Install Vyop on multiple devices (phones or tablets). All counters sync to one central inventory in real-time. No expensive desktop POS systems needed." },
      { question: "How fast is barcode scanning for supermarket checkout?", answer: "Vyop's camera scanner is optimized for rapid continuous scanning. Scan items one after another just like a dedicated supermarket barcode gun." },
      { question: "Can I manage thousands of products across categories?", answer: "Yes, organize inventory into departments (FMCG, dairy, snacks, beverages, personal care). View category-wise sales reports and identify top and bottom performers." },
    ],
  },
  {
    slug: "dairy-milk",
    name: "Dairy & Milk Products",
    tagline: "Daily Delivery Tracking, Subscription Billing & Cold Chain Stock",
    metaTitle: "Dairy Shop Billing Software | Milk Distribution POS App - Vyop",
    metaDescription: "Free billing software for dairy shops, milk distribution & paneer/curd retailers. Track daily milk deliveries, manage customer subscriptions, monitor cold storage expiry, and automate monthly billing.",
    badge: "For Dairy & Milk Distributors",
    icon: "🥛",
    heroHighlight: "Dairy & Milk Products",
    subheadline: "Manage daily milk delivery routes, track customer subscriptions with automatic monthly billing, monitor cold chain product expiry, and handle paneer/curd weight-based billing.",
    painPoints: [
      { oldWay: "Manually tracking which customer gets 2 liters of toned milk and which gets 1 liter of full cream daily", vyopWay: "Customer subscription profiles with daily delivery quantity, type, and route. Auto-generate monthly bills." },
      { oldWay: "Curd, paneer, and cheese expiring before you can sell them because you lost track of batch dates", vyopWay: "Cold chain expiry alerts for perishable dairy products. FEFO ensures oldest stock is sold first." },
      { oldWay: "Calculating monthly bills for 200+ subscription customers by adding up 30 days of deliveries", vyopWay: "Automatic monthly bill generation based on daily delivery records. Send via WhatsApp with one tap." },
    ],
    features: [
      { title: "Subscription Management", description: "Set up daily/weekly delivery schedules per customer. Auto-track deliveries and generate end-of-month subscription bills.", icon: "📋" },
      { title: "Route-Wise Delivery", description: "Organize customers by delivery route. View daily dispatch lists for each route with quantities and special instructions.", icon: "🚚" },
      { title: "Cold Chain Expiry Tracking", description: "Track batch-wise expiry for milk, curd, paneer, cheese, and buttermilk. Get alerts before products spoil.", icon: "❄️" },
      { title: "Weight-Based Billing", description: "Bill paneer, cheese, and butter by exact weight in grams or kilograms with per-unit rate calculation.", icon: "⚖️" },
    ],
    faqs: [
      { question: "Can Vyop manage daily milk delivery subscriptions?", answer: "Yes! Create customer profiles with daily delivery quantities (e.g., 2L Toned Milk daily). Track deliveries and auto-generate monthly subscription bills." },
      { question: "How does route management work?", answer: "Organize customers by delivery route. Each morning, view the route-wise dispatch list with customer names, quantities, and special instructions." },
      { question: "Can I track expiry dates for perishable dairy products?", answer: "Yes, enter batch dates for curd, paneer, and cheese. Vyop alerts you before products expire and ensures oldest stock is dispatched first (FEFO)." },
    ],
  },
  {
    slug: "paan-tobacco",
    name: "Paan Shop & Tobacco Store",
    tagline: "Quick Cash Billing, Loose Item Tracking & Daily Sales Summary",
    metaTitle: "Paan Shop Billing Software | Tobacco Store POS App - Vyop",
    metaDescription: "Free billing software for paan shops and tobacco stores. Lightning-fast cash billing for small transactions, track loose cigarette and gutka inventory, and view daily sales summaries.",
    badge: "For Paan & Tobacco Shops",
    icon: "🍃",
    heroHighlight: "Paan & Tobacco Stores",
    subheadline: "Bill paan, cigarettes, soft drinks, and snacks in under 3 seconds. Track loose item inventory, manage high-volume small cash transactions, and see your daily earnings instantly.",
    painPoints: [
      { oldWay: "No record of hundreds of ₹10-₹50 cash transactions throughout the day", vyopWay: "Quick-tap billing for frequent items. Just tap the item icon on your screen — bill is generated in 1 second." },
      { oldWay: "Losing track of loose cigarette and gutka packets sold from cartons", vyopWay: "Track loose unit sales. Vyop auto-deducts from carton inventory when you sell individual sticks or pouches." },
      { oldWay: "No idea of actual daily profit after a long day of small transactions", vyopWay: "Real-time daily sales dashboard showing total revenue, cost of goods, and net profit at any point of the day" },
    ],
    features: [
      { title: "Quick-Tap Item Grid", description: "Customizable grid of your top-selling items (paan, cigarette brands, soft drinks). One tap = instant bill.", icon: "⚡" },
      { title: "Loose Item Tracking", description: "Sell single cigarettes from a carton of 10 packs. Vyop auto-converts and tracks loose-unit inventory.", icon: "📦" },
      { title: "Daily Cash Summary", description: "View real-time daily revenue, expenses, and net profit. Perfect for end-of-day cash drawer reconciliation.", icon: "💵" },
      { title: "Frequent Customer Tab", description: "Track regular customers who buy on daily credit. Send weekly WhatsApp payment summaries.", icon: "📒" },
    ],
    faqs: [
      { question: "Can Vyop handle very fast small cash transactions?", answer: "Yes! Set up a quick-tap grid with your top items. One tap on 'Gold Flake Kings' or 'Thumbs Up 200ml' generates an instant bill in 1 second." },
      { question: "How does loose item tracking work for cigarettes?", answer: "When you add a carton of 10 packs, Vyop knows each pack has 20 sticks. Sell single sticks and Vyop auto-deducts from your carton inventory." },
      { question: "Can I see my daily profit in real-time?", answer: "Yes, the dashboard shows live daily revenue, cost of goods sold, and net profit. Perfect for checking earnings at any point during the day." },
    ],
  },
  {
    slug: "gift-handicraft",
    name: "Gift & Handicraft Shops",
    tagline: "Custom Gift Wrapping, Festival Promotions & Artisan Product Catalogs",
    metaTitle: "Gift Shop Billing Software | Handicraft Store POS App - Vyop",
    metaDescription: "Free billing software for gift shops, handicraft stores & souvenir shops. Manage artisan products, create beautiful gift combos, run festival promotions, and share catalog links on WhatsApp.",
    badge: "For Gift & Handicraft Stores",
    icon: "🎁",
    heroHighlight: "Gift & Handicraft Shops",
    subheadline: "Manage unique handcrafted products, create custom gift combos, run Diwali and Christmas promotions with Spin-the-Wheel rewards, and share your live catalog on WhatsApp.",
    painPoints: [
      { oldWay: "Each handcrafted item is unique with no barcode or standard pricing", vyopWay: "Click a photo of each item, set a price, and generate a custom barcode sticker. Your entire collection becomes scannable." },
      { oldWay: "Customers asking to see your full product range but you can't show everything in-store", vyopWay: "Share your live online catalog via WhatsApp. Customers browse your full collection with photos and prices." },
      { oldWay: "Festival rush orders for corporate gift hampers with no systematic tracking", vyopWay: "Create custom gift combo hampers with multiple items, gift wrapping charges, and bulk corporate pricing." },
    ],
    features: [
      { title: "Photo Catalog & Barcodes", description: "Photograph each unique item. Vyop generates custom barcodes with price tags for instant checkout.", icon: "📸" },
      { title: "Gift Combo Builder", description: "Create custom gift hampers combining multiple items. Add gift wrapping charges and personalized message cards.", icon: "🎀" },
      { title: "WhatsApp Catalog Sharing", description: "Share your live storefront link on WhatsApp. Customers browse and order directly with product photos and prices.", icon: "💬" },
      { title: "Festival Promotions", description: "Run Diwali, Christmas, and Valentine's Day promotions with Spin-the-Wheel rewards and timed discount banners.", icon: "🎉" },
    ],
    faqs: [
      { question: "How do I manage unique handcrafted items without standard barcodes?", answer: "Photograph each item, set a price, and Vyop generates a custom barcode sticker. Attach it to the item for instant scanning at checkout." },
      { question: "Can I create gift combo hampers?", answer: "Yes! Select multiple items, add gift wrapping charges, and create a combo with a single price. Perfect for corporate gift orders." },
      { question: "Can customers browse my products on WhatsApp?", answer: "Yes, share your live online storefront link via WhatsApp. Customers browse your full catalog with photos, prices, and can place orders directly." },
    ],
  },
  {
    slug: "tiles-marble",
    name: "Tiles & Marble Showroom",
    tagline: "Area Calculator, Lot Number Tracking & Interior Designer Ledgers",
    metaTitle: "Tiles & Marble Showroom Billing Software | Free POS App - Vyop",
    metaDescription: "Free billing software for tiles, marble & granite showrooms. Calculate area requirements in sq.ft., track lot and shade numbers, manage dealer and designer accounts, and generate GST quotations.",
    badge: "For Tiles, Marble & Granite",
    icon: "🏗️",
    heroHighlight: "Tiles & Marble Showrooms",
    subheadline: "Calculate customer tile area requirements in sq.ft., track lot numbers to avoid shade mismatches, manage interior designer and contractor credit accounts, and send professional GST quotations.",
    painPoints: [
      { oldWay: "Customers coming with room measurements and you manually calculating how many boxes of tiles they need", vyopWay: "Built-in area calculator: enter room length × width, tile size, and wastage %. Vyop calculates exact boxes needed." },
      { oldWay: "Shade mismatches when tiles from different production lots are mixed in the same room", vyopWay: "Track lot/shade numbers for every batch. Alert if mixing lots and ensure same-lot dispatch for each order." },
      { oldWay: "Interior designers and contractors taking tiles on credit with disputed balances", vyopWay: "Per-designer digital khata with project-wise billing, credit limits, and automated payment reminders" },
    ],
    features: [
      { title: "Tile Area Calculator", description: "Enter room dimensions and tile size. Vyop calculates exact quantity needed including wastage percentage.", icon: "📐" },
      { title: "Lot & Shade Tracking", description: "Record production lot and shade numbers for each tile batch. Prevent shade mismatches in customer orders.", icon: "🎨" },
      { title: "Designer/Contractor Ledger", description: "Manage interior designer and contractor accounts with project-wise billing, credit tracking, and payment reminders.", icon: "📑" },
      { title: "GST Quotation to Invoice", description: "Send professional quotations with tile images and specifications. Convert to final GST invoice upon order confirmation.", icon: "💼" },
    ],
    faqs: [
      { question: "Does Vyop calculate how many tile boxes a customer needs?", answer: "Yes! Enter room dimensions (length × width), tile size, and wastage percentage. Vyop instantly calculates the exact number of boxes required." },
      { question: "Can I track tile lot and shade numbers?", answer: "Yes, record lot and shade numbers for each batch. Vyop alerts you if an order mixes different lots to prevent shade mismatches." },
      { question: "Can I manage interior designer credit accounts?", answer: "Yes, create separate accounts for each designer or contractor. Track project-wise billing, set credit limits, and send automated payment reminders." },
    ],
  },
  {
    slug: "toy-shop",
    name: "Toy & Kids Store",
    tagline: "Age Group Categorization, Gift Billing & Festival Season Management",
    metaTitle: "Toy Shop Billing Software | Kids Store POS App - Vyop",
    metaDescription: "Free billing software for toy shops & kids stores. Categorize toys by age group, manage birthday gift billing, run festival promotions, and track imported toy inventory with barcodes.",
    badge: "For Toy & Kids Stores",
    icon: "🧸",
    heroHighlight: "Toy & Kids Stores",
    subheadline: "Organize toys by age group, scan barcodes on branded toys for instant billing, manage birthday gift orders with wrapping, and run Christmas and Children's Day promotions.",
    painPoints: [
      { oldWay: "Parents asking 'What toys do you have for a 5-year-old?' and you searching the entire store", vyopWay: "Categorize inventory by age group (0-2, 3-5, 6-8, 9-12). Instantly show all age-appropriate options." },
      { oldWay: "Birthday gift purchases requiring manual price tag checking on each toy", vyopWay: "Scan toy barcode with phone camera for instant price. Add gift wrapping charge to the bill." },
      { oldWay: "Christmas and Diwali stock sitting unsold after the festival season", vyopWay: "Seasonal stock alerts and timed promotions help you clear festival inventory before it becomes dead stock" },
    ],
    features: [
      { title: "Age Group Categorization", description: "Organize toys by recommended age range. Help parents find perfect toys for their child's age group instantly.", icon: "👶" },
      { title: "Toy Barcode Scanning", description: "Scan manufacturer barcodes on branded toys (Lego, Hot Wheels, Barbie) for instant price and stock lookup.", icon: "📱" },
      { title: "Gift Wrapping Billing", description: "Add gift wrapping service charge to toy purchases. Track wrapping supplies inventory (paper, ribbons, boxes).", icon: "🎀" },
      { title: "Festival Promotions", description: "Run Children's Day, Christmas, and Diwali toy sale promotions with timed discounts and Spin-the-Wheel rewards.", icon: "🎄" },
    ],
    faqs: [
      { question: "Can I organize toys by age group?", answer: "Yes! Categorize every toy by recommended age (0-2, 3-5, 6-8, 9-12, Teens). When a parent asks for toys for a 5-year-old, filter your inventory instantly." },
      { question: "Does Vyop scan toy barcodes?", answer: "Yes, scan barcodes on branded toy packaging with your phone camera. Vyop pulls up the item name, price, and stock count instantly." },
      { question: "Can I add gift wrapping charges to bills?", answer: "Yes! Add gift wrapping as a service item on the invoice. Track wrapping supplies (paper, ribbons, boxes) in your inventory." },
    ],
  },
  {
    slug: "general-variety",
    name: "General & Variety Stores",
    tagline: "Mixed Category Billing, Quick Cash Register & Neighbourhood Customer Loyalty",
    metaTitle: "General Store Billing Software | Variety Shop POS App - Vyop",
    metaDescription: "Free billing software for general stores, variety shops & neighbourhood corner stores. Bill across mixed categories, manage thousands of small items, track customer credit, and print receipts.",
    badge: "For General & Variety Stores",
    icon: "🏬",
    heroHighlight: "General & Variety Stores",
    subheadline: "Your neighbourhood store sells everything from groceries to cosmetics to school supplies. Vyop handles all categories in one app with fast barcode scanning and voice billing.",
    painPoints: [
      { oldWay: "Selling 500+ different items across 20 categories with no systematic inventory tracking", vyopWay: "Organize all items by category (grocery, cosmetics, stationery, cleaning, snacks). Track each one with barcodes." },
      { oldWay: "Regular neighbourhood customers buying on daily credit with no clear records", vyopWay: "Customer-wise digital khata with daily credit tracking. Send weekly WhatsApp summaries with total outstanding." },
      { oldWay: "No idea which product categories are profitable and which are losing money", vyopWay: "Category-wise profit reports show you exactly which sections of your store generate the most margin" },
    ],
    features: [
      { title: "Multi-Category Management", description: "Manage groceries, cosmetics, stationery, cleaning, snacks, and more in one unified inventory.", icon: "📦" },
      { title: "Quick Cash Register", description: "Lightning-fast billing for small daily purchases. Scan, speak, or tap items for instant checkout.", icon: "⚡" },
      { title: "Neighbourhood Customer Loyalty", description: "Build customer profiles for regular buyers. Track preferences, credit history, and send festive greetings.", icon: "🏘️" },
      { title: "Category Profit Analysis", description: "View which product categories (FMCG, cosmetics, snacks) generate the most revenue and best margins.", icon: "📊" },
    ],
    faqs: [
      { question: "Can Vyop handle a store that sells items across many different categories?", answer: "Yes! Vyop supports unlimited categories. Organize your products into grocery, cosmetics, stationery, cleaning, snacks, or any custom categories you need." },
      { question: "How do I manage daily credit for regular customers?", answer: "Create customer profiles and add purchases to their digital khata. Vyop tracks daily credits and sends automated WhatsApp payment reminders." },
      { question: "Can I see which product categories are most profitable?", answer: "Yes, view category-wise sales and profit reports. Identify which sections of your store generate the most revenue and where to focus restocking." },
    ],
  },
  {
    slug: "hotel-lodge",
    name: "Hotels, Lodges & Banquet Halls",
    tagline: "Room Booking, Check-in/Check-out Billing & Event Banquet Management",
    metaTitle: "Hotel Billing Software | Lodge & Banquet POS App - Vyop",
    metaDescription: "Free billing software for hotels, lodges, guest houses & banquet halls. Manage room bookings, check-in/check-out billing, room service orders, banquet event invoicing, and GST compliant tax invoices.",
    badge: "For Hotels, Lodges & Banquets",
    icon: "🏨",
    heroHighlight: "Hotels, Lodges & Banquet Halls",
    subheadline: "Manage room bookings and check-in/check-out billing, add room service charges, handle banquet event invoicing, and generate GST-compliant hotel tax invoices — all from your phone.",
    painPoints: [
      { oldWay: "Paper register check-in/check-out with no digital record of room occupancy and revenue", vyopWay: "Digital room dashboard showing occupied, vacant, and housekeeping status in real-time across all rooms" },
      { oldWay: "Room service orders getting lost between the kitchen and the front desk", vyopWay: "Room service orders placed via voice or tap. Auto-added to the guest's running room bill for consolidated checkout." },
      { oldWay: "Complex banquet event bills with hall charges, catering, decoration, and DJ separately calculated", vyopWay: "Create banquet event packages with itemized hall, catering, decoration, and service charges. Generate one consolidated GST invoice." },
    ],
    features: [
      { title: "Room Booking Dashboard", description: "View all rooms at a glance — occupied, vacant, housekeeping. Manage check-in, check-out, and advance bookings.", icon: "🛏️" },
      { title: "Running Room Bill", description: "Add room charges, room service, laundry, minibar, and extras to a running tab. Generate consolidated checkout bill.", icon: "🧾" },
      { title: "Banquet Event Manager", description: "Create event packages with hall rental, catering (per-plate), decoration, and service charges. Track advance deposits.", icon: "🎪" },
      { title: "GST Hotel Tax Invoice", description: "Generate compliant hotel tax invoices with room tariff, GST (12%/18%), luxury tax breakdowns, and guest GSTIN.", icon: "📋" },
    ],
    faqs: [
      { question: "Can Vyop manage hotel room bookings and check-in/check-out?", answer: "Yes! View a real-time room dashboard. Manage walk-in and advance bookings, record guest ID, check-in/check-out times, and generate consolidated bills." },
      { question: "Does it handle room service billing?", answer: "Yes, room service orders are added to the guest's running room tab. At checkout, the bill includes room charges, food orders, laundry, and extras in one invoice." },
      { question: "Can I create banquet event invoices?", answer: "Yes! Create event packages with hall rental, per-plate catering, decoration, DJ, and service charges. Track advance deposits and generate final GST invoices." },
    ],
  },
];
