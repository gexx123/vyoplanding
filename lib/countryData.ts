export interface CountryData {
  slug: string;
  name: string;
  flag: string;
  code: string;
  currency: string;
  currencySymbol: string;
  currencyCode: string;
  taxName: string;
  taxRateDescription: string;
  competitors: string;
  competitorCost: string;
  localMarkets: string[];
  popularTrades: string[];
  paymentMethods: string[];
  hardwareSavings: string;
  heroHeadline: string;
  heroSubtitle: string;
  localRetailContext: string;
  faqs: { question: string; answer: string }[];
}

export const countries: CountryData[] = [
  {
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    code: "US",
    currency: "USD ($)",
    currencySymbol: "$",
    currencyCode: "USD",
    taxName: "State & Local Sales Tax",
    taxRateDescription: "Configurable by State & Municipality (0% – 10.25%)",
    competitors: "Square POS, Clover & Lightspeed",
    competitorCost: "$299–$799 hardware + 2.6% to 3.5% + 10¢ card fees",
    localMarkets: ["California", "Texas", "Florida", "New York", "Illinois", "Georgia"],
    popularTrades: ["Boutiques & Apparel", "Convenience Stores", "Food Trucks & Pop-ups", "Coffee & Bakeries", "Smoke & Vape Shops", "Thrift Stores"],
    paymentMethods: ["Cash", "Credit/Debit Cards", "Apple Pay", "Google Pay", "Custom QR"],
    hardwareSavings: "Save $500 – $1,200 per checkout lane",
    heroHeadline: "Free Mobile POS & Barcode Scanner App for Retail in the United States",
    heroSubtitle: "Ditch Square's 2.6% transaction fees and Clover's $499 hardware contracts. Turn any smartphone into a supermarket barcode scanner, calculate state sales tax, and print thermal receipts with 0% platform fees.",
    localRetailContext: "Small independent retailers across the US are tired of giving 2.6% to 3.5% of their gross revenue to payment aggregators on top of monthly terminal rentals. Vyop gives US shopkeepers a 100% free software alternative: run checkout on your phone or web browser, scan standard UPC/EAN barcodes with your camera, configure your exact state and county sales tax rate, and keep 100% of your earnings.",
    faqs: [
      {
        question: "How does Vyop compare to Square POS in the US?",
        answer: "Square charges 2.6% + 10¢ on every card swipe and requires purchasing proprietary readers ($49 to $299). Vyop charges 0% platform transaction fees on cash, custom card processors, or digital payments, and turns your existing smartphone into a laser-fast barcode scanner with zero hardware investment."
      },
      {
        question: "Can I configure US State and County Sales Tax in Vyop?",
        answer: "Yes! Vyop includes full customizable tax support. Whether you operate in California (7.25%+), Texas (6.25%+), Florida (6%+), or a state with zero sales tax like Oregon or Delaware, you can set item-level or store-wide tax percentages with single-tap tax exemption."
      },
      {
        question: "Does Vyop support US receipt printers and barcode formats?",
        answer: "Yes. Vyop reads standard UPC-A, UPC-E, Code 128, and QR barcodes natively using your phone camera. It connects via Bluetooth to any standard 58mm or 80mm ESC/POS thermal receipt printer, and lets you email or text digital receipts directly to customers."
      },
      {
        question: "Does Vyop work offline during network outages?",
        answer: "Yes. Vyop is built offline-first. Even if your store's Wi-Fi drops, you can continue scanning barcodes, adding items to cart, and generating receipts locally. All transactions sync automatically to the cloud once connection is restored."
      }
    ]
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    code: "GB",
    currency: "GBP (£)",
    currencySymbol: "£",
    currencyCode: "GBP",
    taxName: "HMRC Value Added Tax (VAT)",
    taxRateDescription: "Standard 20%, Reduced 5%, and Zero-Rated 0% VAT",
    competitors: "Zettle by PayPal, Square UK & SumUp",
    competitorCost: "£149 terminal + 1.75% transaction fee + £29/mo SaaS",
    localMarkets: ["London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Bristol"],
    popularTrades: ["Independent Boutiques", "Corner Shops & Off-Licences", "Street Food & Food Trucks", "Florists & Garden Centers", "Specialty Delis", "Hair & Beauty Salons"],
    paymentMethods: ["Cash", "Contactless Cards", "Apple Pay", "Google Pay", "Bank Transfer QR"],
    hardwareSavings: "Save £300 – £800 per counter setup",
    heroHeadline: "Free Mobile POS & Barcode Scanner App for UK Retail & Small Business",
    heroSubtitle: "Create HMRC-compliant VAT receipts in British Pounds (£). Avoid costly Zettle card fees and monthly software subscriptions. Scan barcodes with your smartphone and print Bluetooth thermal receipts with zero platform fees.",
    localRetailContext: "British high-street merchants, corner shops, and market stallholders need lightweight, fast checkout software without monthly SaaS overhead. Vyop handles HMRC 20% VAT calculations, zero-rated food items, British pound (£) pricing, and connects seamlessly to affordable Bluetooth thermal receipt printers.",
    faqs: [
      {
        question: "Can I issue HMRC-compliant VAT receipts with Vyop?",
        answer: "Yes. Vyop allows you to configure 20% Standard VAT, 5% Reduced VAT, or 0% Zero-Rated products. Receipts display your business name, VAT registration number, itemized tax breakdowns, and final totals in GBP (£)."
      },
      {
        question: "Do I need to buy an expensive barcode scanner gun in the UK?",
        answer: "No. Vyop uses your iPhone or Android smartphone camera as a high-speed barcode scanner. It instantly recognizes European EAN-13 barcodes on packaged groceries, books, and consumer goods without buying extra hardware."
      },
      {
        question: "How does Vyop compare to Zettle or SumUp in the UK?",
        answer: "Zettle and SumUp charge between 1.69% and 1.75% per transaction and require proprietary card hardware. Vyop provides a complete inventory management, barcode scanning, and receipt printing system starting free with 0% platform cuts on your transactions."
      },
      {
        question: "Can I print receipts to Bluetooth thermal printers in the UK?",
        answer: "Yes! Vyop supports standard 58mm and 80mm ESC/POS thermal receipt printers over Bluetooth or USB, widely available on Amazon UK for under £30."
      }
    ]
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    code: "CA",
    currency: "CAD ($)",
    currencySymbol: "$",
    currencyCode: "CAD",
    taxName: "GST / HST / PST Tax",
    taxRateDescription: "5% GST, 13%–15% Harmonized Sales Tax (HST), or Provincial PST",
    competitors: "Square Canada, Clover & Lightspeed",
    competitorCost: "$299–$699 hardware + 2.65% transaction fees",
    localMarkets: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Edmonton"],
    popularTrades: ["General Retail & Apparel", "Convenience Stores (Dépanneurs)", "Artisanal Bakeries", "Specialty Coffee Shops", "Farm Markets & Pop-ups"],
    paymentMethods: ["Cash", "Interac Debit Cards", "Credit Cards", "Apple Pay", "Google Pay"],
    hardwareSavings: "Save $450 – $1,000 per workstation",
    heroHeadline: "Free Mobile POS & Barcode Scanner App for Canadian Retailers",
    heroSubtitle: "Bill in Canadian Dollars (CAD) with multi-provincial GST/HST/PST tax compliance. Turn your smartphone camera into an instant barcode checkout scanner with zero upfront hardware costs.",
    localRetailContext: "From convenience dépanneurs in Quebec to boutiques in Toronto and Vancouver, Canadian merchants face hefty hardware leases and card transaction fees. Vyop provides a streamlined mobile POS system that handles Canadian dual sales taxes (GST + PST) or combined HST.",
    faqs: [
      {
        question: "Does Vyop support Canadian GST, PST, and HST?",
        answer: "Yes! You can configure single or dual tax rates according to your province: 13% HST in Ontario, 15% HST in the Maritimes, 5% GST + 9.975% QST in Quebec, or 5% GST + 7% PST in British Columbia."
      },
      {
        question: "Can I bill in Canadian Dollars (CAD)?",
        answer: "Yes, Vyop fully supports CAD currency formatting with two-decimal precision, cash round-off rules (nickel rounding), and digital receipt sharing."
      },
      {
        question: "Does Vyop require a dedicated computer or iPad in Canada?",
        answer: "No. Vyop runs directly on any Android smartphone or Desktop web browser (vyop.shop). Your smartphone camera is your barcode scanner, eliminating the need to buy an iPad stand or laser gun."
      },
      {
        question: "Is Vyop compliant with Canadian privacy standards?",
        answer: "Yes. All data stored in Vyop is protected with enterprise encryption. Your inventory and transaction records belong entirely to you."
      }
    ]
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    code: "AU",
    currency: "AUD ($)",
    currencySymbol: "$",
    currencyCode: "AUD",
    taxName: "ATO Goods and Services Tax (GST)",
    taxRateDescription: "Standard 10% ATO GST with Tax Invoice Receipts",
    competitors: "Square Australia, Tyro & Vend (Lightspeed)",
    competitorCost: "$329 terminal + 1.6%–2.2% card fee + $89/mo SaaS",
    localMarkets: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast"],
    popularTrades: ["Retail Boutiques & Apparel", "Cafes & Coffee Kiosks", "Weekend Market Stalls", "Health Food Stores", "Pet Shops & Grooming", "Bottle Shops"],
    paymentMethods: ["Cash", "EFTPOS Cards", "Apple Pay", "Google Pay", "Direct PayID"],
    hardwareSavings: "Save $500 – $1,100 AUD per store counter",
    heroHeadline: "Free Mobile POS & Barcode Scanner App for Australian Retailers",
    heroSubtitle: "Issue 10% ATO GST tax invoices in Australian Dollars (AUD). Point your phone camera to scan EAN barcodes, print thermal receipts, and sell online with zero platform transaction fees.",
    localRetailContext: "Australian small businesses and market stallholders battle escalating bank terminal rental fees and monthly POS subscriptions. Vyop turns any smartphone into an all-in-one barcode scanner and tax invoice register with 0% platform cuts.",
    faqs: [
      {
        question: "Can I generate ATO-compliant 10% GST tax invoices?",
        answer: "Yes. Vyop automatically calculates 10% GST on taxable retail sales and prints full Tax Invoices including your Australian Business Number (ABN) and itemized tax breakdowns."
      },
      {
        question: "Can I avoid paying EFTPOS terminal machine rentals?",
        answer: "Yes! By using Vyop on your mobile phone or laptop, you handle all product cataloging, barcode scanning, stock tracking, and receipt printing without leasing expensive bank POS terminals."
      },
      {
        question: "Does Vyop support Australian EAN-13 barcodes?",
        answer: "Yes. Standard Australian retail barcodes (EAN-13, GS1) are scanned instantly using your smartphone camera. You can also print custom barcode stickers for handmade items."
      },
      {
        question: "Can I use Vyop at outdoor markets in Melbourne or Sydney?",
        answer: "Absolutely. Vyop works 100% offline. You can ring up sales, scan items, and print receipts via portable battery-powered Bluetooth thermal printers with zero mobile data."
      }
    ]
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    code: "AE",
    currency: "AED (د.إ)",
    currencySymbol: "AED",
    currencyCode: "AED",
    taxName: "Federal Tax Authority (FTA) 5% VAT",
    taxRateDescription: "5% Standard UAE VAT Tax Invoices",
    competitors: "Loyverse UAE, Geidea & Pine Labs UAE",
    competitorCost: "AED 1,500+ machine fee + AED 250/month subscription",
    localMarkets: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah"],
    popularTrades: ["Supermarkets & Groceries (Baqala)", "Textile & Abaya Boutiques", "Perfume & Oud Shops", "Cafes & Karak Stalls", "Electronics & Mobile Accessories", "Hardware & Auto Parts"],
    paymentMethods: ["Cash", "Credit/Debit Cards", "Apple Pay", "Samsung Pay", "Direct Bank QR"],
    hardwareSavings: "Save AED 1,500 – 3,500 per store counter",
    heroHeadline: "Free Mobile POS & Barcode Scanner App in the UAE & Dubai",
    heroSubtitle: "Generate FTA 5% VAT compliant tax invoices in UAE Dirhams (AED). Transform your mobile phone into a supermarket barcode scanner with 0% monthly software fees.",
    localRetailContext: "From traditional souks in Deira and Bur Dubai to modern shopping complexes across Abu Dhabi and Sharjah, retail merchants in the UAE need affordable, FTA-compliant POS software. Vyop offers bilingual item cataloging, 5% VAT tax invoices, and camera barcode scanning for Baqala grocery stores and fashion boutiques.",
    faqs: [
      {
        question: "Is Vyop compliant with UAE 5% FTA VAT laws?",
        answer: "Yes. Vyop automatically computes 5% UAE VAT, itemizes taxable totals, and generates compliant Simplified Tax Invoices displaying your TRN (Tax Registration Number) in AED."
      },
      {
        question: "Can Baqala and grocery stores in Dubai use Vyop?",
        answer: "Yes! Vyop is tailored for supermarkets and grocery shops. You can scan international EAN barcodes on FMCG products, use AI photo recognition for unbarcoded bulk produce, and print 80mm thermal receipts."
      },
      {
        question: "Does Vyop require expensive dedicated POS hardware in the UAE?",
        answer: "No. You don't need to spend thousands of Dirhams on heavy touch terminals. Vyop runs directly on any Android smartphone or PC browser (vyop.shop)."
      },
      {
        question: "Can I share invoices via WhatsApp in the UAE?",
        answer: "Yes! Vyop features 1-tap WhatsApp digital invoice sharing, allowing customers to receive instant digital receipts on their phones without paper waste."
      }
    ]
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    code: "SA",
    currency: "SAR (ر.س)",
    currencySymbol: "SAR",
    currencyCode: "SAR",
    taxName: "ZATCA Value Added Tax (VAT)",
    taxRateDescription: "Standard 15% ZATCA VAT Compliance",
    competitors: "Foodics, Geidea & Cashier POS",
    competitorCost: "SAR 2,000–4,500 hardware + SAR 250/mo SaaS",
    localMarkets: ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina", "Khobar"],
    popularTrades: ["Groceries & Supermarkets (Tamweenat)", "Boutiques & Perfumeries", "Coffee Roasteries & Cafes", "Mobile & Tech Accessories", "Bakery & Sweets"],
    paymentMethods: ["Cash", "Mada Cards", "Apple Pay", "STC Pay QR"],
    hardwareSavings: "Save SAR 2,000 – 4,000 per checkout register",
    heroHeadline: "Free Mobile POS & Barcode Scanner App for Retail in Saudi Arabia",
    heroSubtitle: "Bill in Saudi Riyals (SAR) with 15% VAT tax invoices. Turn your smartphone camera into a high-speed barcode checkout counter with zero monthly subscription fees.",
    localRetailContext: "Retail shops (Tamweenat) across Riyadh, Jeddah, and Dammam require agile checkout software that complies with Saudi 15% VAT while keeping operating expenses low. Vyop turns any Android phone into a barcode billing register with Bluetooth receipt printing.",
    faqs: [
      {
        question: "Does Vyop calculate Saudi 15% VAT?",
        answer: "Yes. Vyop automatically applies 15% VAT to itemized sales and formats tax invoices in Saudi Riyals (SAR) with complete tax summaries."
      },
      {
        question: "Can I use Vyop for Tamweenat grocery shops in KSA?",
        answer: "Yes. Tamweenat owners can scan barcode packaging instantly with mobile phone cameras, manage shelf inventory, and track customer credit ledgers."
      },
      {
        question: "Does Vyop connect to thermal printers in Saudi Arabia?",
        answer: "Yes. Vyop supports standard 58mm and 80mm ESC/POS Bluetooth thermal printers commonly available across Saudi Arabia."
      },
      {
        question: "Does Vyop work offline in case of internet disruption?",
        answer: "Yes. Vyop works 100% offline. Counter transactions and customer receipts are saved locally and synced automatically when connected."
      }
    ]
  },
  {
    slug: "philippines",
    name: "Philippines",
    flag: "🇵🇭",
    code: "PH",
    currency: "PHP (₱)",
    currencySymbol: "₱",
    currencyCode: "PHP",
    taxName: "BIR Sales Tax / Non-VAT",
    taxRateDescription: "12% VAT or Non-VAT Percentage Tax for Small Business",
    competitors: "Loyverse Philippines, Utang Books & Peddlr",
    competitorCost: "Expensive add-on fees for multi-staff and inventory",
    localMarkets: ["Metro Manila", "Cebu City", "Davao City", "Quezon City", "Pampanga", "Iloilo"],
    popularTrades: ["Sari-Sari Stores", "Carinderias & Food Stalls", "Clothing Boutiques (Ukay-Ukay)", "Mini-Groceries & Pharmacies", "Hardware & Auto Supply"],
    paymentMethods: ["Cash", "GCash QR", "Maya QR", "Utang / Credit Book"],
    hardwareSavings: "Save ₱15,000 – ₱30,000 per store counter",
    heroHeadline: "Free Mobile POS & Barcode Scanner App in the Philippines",
    heroSubtitle: "The perfect POS and digital utang credit ledger for Sari-Sari stores, mini-marts, and boutiques in the Philippines. Bill in Philippine Peso (₱), scan barcodes with phone camera, and accept GCash/Cash.",
    localRetailContext: "Over 1.3 million sari-sari stores, carinderias, and micro-retailers in the Philippines still manage inventory and customer credit manually on paper notebooks. Vyop provides a completely free digital ledger (utang tracker), barcode scanner, and cash register that runs on any Android phone without needing an internet connection.",
    faqs: [
      {
        question: "Is Vyop good for Sari-Sari stores in the Philippines?",
        answer: "Yes! Vyop is designed for sari-sari stores and micro-groceries. You can scan barcodes on shampoo sachets, snacks, and canned goods, record daily sales, and maintain a digital Utang ledger for regular customers."
      },
      {
        question: "Can I track customer 'Utang' (credit ledger) in Vyop?",
        answer: "Yes. Vyop has a built-in party credit book that tracks customer utang balances, records partial repayments, and lets you send payment reminders directly via SMS or WhatsApp."
      },
      {
        question: "Does Vyop work without internet (offline)?",
        answer: "Yes! Vyop works 100% offline. You don't need mobile data to ring up sales, scan items, or check stock. All data is saved on your phone."
      },
      {
        question: "Can I print receipts to Bluetooth printers in the Philippines?",
        answer: "Yes. Vyop connects to affordable 58mm Bluetooth mini thermal printers (available on Shopee or Lazada for ₱600–₱900)."
      }
    ]
  },
  {
    slug: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    code: "SG",
    currency: "SGD ($)",
    currencySymbol: "$",
    currencyCode: "SGD",
    taxName: "IRAS Goods and Services Tax (GST)",
    taxRateDescription: "Standard 9% IRAS GST Invoices",
    competitors: "Vend by Lightspeed, Revel Systems & Square",
    competitorCost: "SGD 1,200+ hardware + SGD 100/mo SaaS",
    localMarkets: ["Central Business District", "Orchard Road", "Jurong East", "Tampines", "Woodlands"],
    popularTrades: ["Hawker Stalls & Cafes", "Fashion Boutiques", "Beauty & Nail Salons", "Specialty Gift Shops", "Minimarts & Florists"],
    paymentMethods: ["Cash", "PayNow QR", "NETS", "Credit Cards", "GrabPay"],
    hardwareSavings: "Save SGD 1,000 – 2,500 per checkout counter",
    heroHeadline: "Free Mobile POS & Barcode Scanner App for Singapore Retail",
    heroSubtitle: "Issue 9% IRAS GST compliant tax receipts in Singapore Dollars (SGD). Use any smartphone camera to scan barcodes and manage inventory with zero monthly subscription fees.",
    localRetailContext: "Hawker centres, boutique retailers, and specialty kiosks in Singapore face high commercial rental costs and expensive hardware leases. Vyop gives Singaporean small business owners an agile mobile checkout solution supporting 9% GST, PayNow receipts, and smartphone barcode scanning.",
    faqs: [
      {
        question: "Does Vyop calculate Singapore 9% GST?",
        answer: "Yes. Vyop automatically applies the 9% IRAS GST rate, produces compliant tax invoices, and itemizes GST breakdowns in Singapore Dollars (SGD)."
      },
      {
        question: "Can I run Vyop on an iPad, Android phone, or laptop in Singapore?",
        answer: "Yes. Vyop works across Android smartphones, tablets, and Desktop browsers (vyop.shop) with real-time multi-device cloud synchronization."
      },
      {
        question: "Does Vyop support PayNow QR payments?",
        answer: "Yes. You can display your PayNow UEN QR code directly on checkout screens and receipts for 0% transaction fee payments."
      },
      {
        question: "How does Vyop compare to Vend or Revel Systems?",
        answer: "Vend and Revel charge $100+ per month in software fees plus hundreds for hardware peripherals. Vyop is free to start on any phone, saving thousands in operational costs."
      }
    ]
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    code: "MY",
    currency: "MYR (RM)",
    currencySymbol: "RM",
    currencyCode: "MYR",
    taxName: "Sales and Service Tax (SST)",
    taxRateDescription: "Configurable SST (6%–8%) or Non-SST Retail Receipts",
    competitors: "StoreHub, Qashier & Loyverse",
    competitorCost: "RM 1,800+ hardware + RM 129–299/mo SaaS",
    localMarkets: ["Kuala Lumpur", "Penang", "Johor Bahru", "Petaling Jaya", "Ipoh", "Melaka"],
    popularTrades: ["Pasar Malam & Street Vendors", "Kedai Runcit (Grocery Stores)", "Clothing & Hijab Boutiques", "Kopitiam & Cafes", "Mobile Phone Accessories"],
    paymentMethods: ["Cash", "DuitNow QR", "Touch 'n Go eWallet", "Debit Cards"],
    hardwareSavings: "Save RM 2,000 – 4,500 per checkout register",
    heroHeadline: "Free Mobile POS & Barcode Scanner App for Retail in Malaysia",
    heroSubtitle: "Bill in Malaysian Ringgit (RM) with custom SST compliance. Scan barcodes with your smartphone camera, accept DuitNow QR, and manage Kedai Runcit groceries with 0% software fees.",
    localRetailContext: "From night market (pasar malam) traders to neighborhood Kedai Runcit grocery shops and trendy boutiques in Bangsar and Penang, Malaysian retailers need fast, affordable POS software without restrictive lock-in contracts.",
    faqs: [
      {
        question: "Can I use Vyop for Kedai Runcit (grocery shops) in Malaysia?",
        answer: "Yes! Vyop is ideal for Kedai Runcit stores. You can scan barcodes on packaged groceries, track stock levels, manage customer credit ('hutang'), and print thermal receipts."
      },
      {
        question: "Does Vyop support DuitNow QR payments in Malaysia?",
        answer: "Yes. You can add your DuitNow QR payment code to your checkout workflow and print it on receipts for instant, zero-fee direct bank transfers."
      },
      {
        question: "Does Vyop support Malaysian Ringgit (MYR)?",
        answer: "Yes. All price points, tax rates, reports, and receipts are formatted cleanly in Malaysian Ringgit (RM)."
      },
      {
        question: "Can I use Vyop offline at night markets (Pasar Malam)?",
        answer: "Yes! Vyop is 100% offline-first. Even in crowded pasar malam stalls without reliable Wi-Fi, you can bill customers and print receipts via portable Bluetooth printers."
      }
    ]
  },
  {
    slug: "south-africa",
    name: "South Africa",
    flag: "🇿🇦",
    code: "ZA",
    currency: "ZAR (R)",
    currencySymbol: "R",
    currencyCode: "ZAR",
    taxName: "SARS Value Added Tax (VAT)",
    taxRateDescription: "Standard 15% SARS VAT Compliance",
    competitors: "Yoco, iKhokha & Loyverse SA",
    competitorCost: "R999 terminal + 2.6% transaction cuts + monthly fees",
    localMarkets: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Gqeberha"],
    popularTrades: ["Spaza Shops & Tuckshops", "Boutique Retail & Fashion", "Hair & Beauty Salons", "Car Washes & Hardware", "Bakeries & Cafes"],
    paymentMethods: ["Cash", "Card Tap", "SnapScan QR", "Zapper QR", "Store Credit Ledger"],
    hardwareSavings: "Save R3,000 – R8,000 per store counter",
    heroHeadline: "Free Mobile POS & Barcode Scanner App in South Africa",
    heroSubtitle: "The ideal mobile POS and digital credit book for Spaza shops, tuckshops, and retail stores in South Africa. Bill in South African Rand (R) with 15% SARS VAT compliance.",
    localRetailContext: "Over 150,000 spaza shops and small retailers in South Africa face persistent load shedding (power blackouts) and costly hardware leases. Vyop runs directly on any rechargeable Android smartphone, works 100% offline, and handles customer credit books and barcode scanning seamlessly.",
    faqs: [
      {
        question: "Is Vyop suitable for Spaza shops in South Africa?",
        answer: "Yes! Spaza shops and township tuckshops can scan barcodes on food items, track daily cash earnings, and maintain digital credit books without buying expensive PC computers."
      },
      {
        question: "Does Vyop work during Load Shedding (power cuts)?",
        answer: "Yes. Because Vyop runs on battery-powered Android smartphones and portable Bluetooth printers, your shop remains 100% operational during power outages."
      },
      {
        question: "Can I calculate 15% SARS VAT in Vyop?",
        answer: "Yes. Vyop automatically applies the 15% SARS VAT rate and produces compliant tax invoices in South African Rand (R)."
      },
      {
        question: "How does Vyop compare to Yoco or iKhokha?",
        answer: "While Yoco and iKhokha focus primarily on card-reader hardware with transaction commissions, Vyop provides full inventory, barcode scanning, and bookkeeping software starting free."
      }
    ]
  },
  {
    slug: "nigeria",
    name: "Nigeria",
    flag: "🇳🇬",
    code: "NG",
    currency: "NGN (₦)",
    currencySymbol: "₦",
    currencyCode: "NGN",
    taxName: "FIRS Value Added Tax (VAT)",
    taxRateDescription: "Standard 7.5% FIRS VAT or Non-VAT Retail Sales",
    competitors: "Moniepoint, OPay POS & Kippa",
    competitorCost: "₦20,000–₦50,000 terminal fees + daily transaction cuts",
    localMarkets: ["Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt", "Benin City"],
    popularTrades: ["Supermarkets & Provision Stores", "Textile & Lace Boutiques", "Phone & Computer Accessories", "Pharmacies & Chemist Stores", "Auto Spare Parts"],
    paymentMethods: ["Cash", "Direct Bank Transfer", "OPay/Moniepoint POS", "USSD Transfer"],
    hardwareSavings: "Save ₦50,000 – ₦150,000 per sales counter",
    heroHeadline: "Free Mobile POS & Barcode Scanner App for Retail in Nigeria",
    heroSubtitle: "Bill in Nigerian Naira (₦) with instant camera barcode scanning. Manage provision stores, supermarkets, and boutiques with 0% software fees and 100% offline reliability.",
    localRetailContext: "Retailers across Balogun Market, Computer Village in Lagos, and major Nigerian commercial centers need fast barcode checkout and inventory tracking that isn't dependent on continuous internet connectivity or costly terminal fees.",
    faqs: [
      {
        question: "Can I use Vyop for provision stores and supermarkets in Nigeria?",
        answer: "Yes! Vyop turns your smartphone into a barcode scanner for provision stores and pharmacies. Scan barcodes on FMCG items and issue instant printed or digital receipts."
      },
      {
        question: "Does Vyop work without internet in Nigeria?",
        answer: "Yes. Vyop is built offline-first. Even when mobile networks are down, you can complete sales, scan barcodes, and track stock locally on your Android phone."
      },
      {
        question: "Does Vyop support Nigerian Naira (₦)?",
        answer: "Yes. Vyop formats all prices, invoices, and sales reports in Nigerian Naira (₦)."
      },
      {
        question: "Can I send digital receipts via WhatsApp in Nigeria?",
        answer: "Yes! With one tap, you can share professional digital receipts directly to your customer's WhatsApp number without printing paper."
      }
    ]
  },
  {
    slug: "kenya",
    name: "Kenya",
    flag: "🇰🇪",
    code: "KE",
    currency: "KES (KSh)",
    currencySymbol: "KSh",
    currencyCode: "KES",
    taxName: "KRA Value Added Tax (VAT)",
    taxRateDescription: "Standard 16% KRA VAT or Non-VAT Retail Invoices",
    competitors: "SasaPay, Pesapal & Loyverse Kenya",
    competitorCost: "KSh 25,000+ hardware terminal fees",
    localMarkets: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"],
    popularTrades: ["Dukas & General Stores", "Clothing & Mitumba Boutiques", "Agrovets & Farm Supplies", "Pharmacies & Chemists", "Electronics & Mobile Shops"],
    paymentMethods: ["M-Pesa Till / Paybill", "Cash", "Airtel Money", "Card Tap"],
    hardwareSavings: "Save KSh 20,000 – 50,000 per retail register",
    heroHeadline: "Free Mobile POS & Barcode Scanner App in Kenya",
    heroSubtitle: "Bill in Kenyan Shillings (KSh) with M-Pesa receipts. The perfect mobile POS and inventory scanner for Duka shops, pharmacies, and retail boutiques in Kenya.",
    localRetailContext: "Duka shopkeepers and retail owners in Nairobi and Mombasa rely heavily on M-Pesa payments and need lightweight inventory management software that doesn't cost an arm and a leg. Vyop transforms any smartphone into a full POS register with Bluetooth receipt printing.",
    faqs: [
      {
        question: "Is Vyop good for Duka shops in Kenya?",
        answer: "Yes! Duka shopkeepers can scan barcodes on retail items using their smartphone camera, record daily sales, and keep track of customer debt balances without buying expensive equipment."
      },
      {
        question: "Does Vyop support M-Pesa payments?",
        answer: "Yes. You can display your M-Pesa Till Number or Paybill on checkout screens and receipts for seamless customer mobile money transfers."
      },
      {
        question: "Can I calculate 16% KRA VAT in Kenya?",
        answer: "Yes. Vyop automatically computes 16% KRA VAT on taxable goods and prints compliant itemized tax receipts in Kenyan Shillings (KSh)."
      },
      {
        question: "Does Vyop work offline in Kenya?",
        answer: "Yes. Vyop works 100% offline. Counter transactions and stock tracking run locally on your phone even when network connectivity is poor."
      }
    ]
  }
];
