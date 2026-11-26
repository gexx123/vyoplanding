import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolDownloadCTA from "@/components/ToolDownloadCTA";
import HsnCodeFinderClient, { HsnRecord } from "@/components/tools/HsnCodeFinderClient";

const HSN_DATABASE: HsnRecord[] = [
  // Grocery & Food
  { hsn: "1006", item: "Rice (Basmati & Non-Basmati)", category: "Grocery", rate: 5, description: "Pre-packaged & labelled rice. Unbranded/loose is 0% GST." },
  { hsn: "1101", item: "Wheat Flour (Atta / Maida)", category: "Grocery", rate: 5, description: "Pre-packaged & labelled wheat flour. Loose is 0%." },
  { hsn: "0713", item: "Pulses & Dal (Toor, Moong, Chana)", category: "Grocery", rate: 5, description: "Pre-packaged and labelled dried leguminous pulses. Loose is 0%." },
  { hsn: "0401", item: "Fresh Milk & Curd (Dahi)", category: "Grocery", rate: 0, description: "Fresh pasteurized or unpasteurized milk, curd (loose/unlabelled)." },
  { hsn: "0402", item: "Milk Powder & Condensed Milk", category: "Grocery", rate: 5, description: "Concentrated milk powder, sweetened condensed milk." },
  { hsn: "0405", item: "Butter & Ghee", category: "Grocery", rate: 5, description: "Butter, dairy spreads, pure desi ghee (reduced from 12% to 5% under GST 2.0)." },
  { hsn: "0406", item: "Paneer (Chena) & Cheese", category: "Grocery", rate: 0, description: "Fresh/pre-packaged chena & paneer is 0% GST; processed cheese is 5% (GST 2.0)." },
  { hsn: "1507", item: "Edible Cooking Oil (Soybean, Mustard, Sunflower)", category: "Grocery", rate: 5, description: "Vegetable edible cooking oils of all varieties." },
  { hsn: "1701", item: "Sugar & Jaggery (Gur)", category: "Grocery", rate: 5, description: "Cane or beet sugar in solid form. Jaggery is 0%." },
  { hsn: "0902", item: "Tea (Chai Patti)", category: "Grocery", rate: 5, description: "Black tea, green tea, flavoured tea leaves." },
  { hsn: "0901", item: "Coffee Beans & Ground Coffee", category: "Grocery", rate: 5, description: "Roasted coffee beans, ground coffee powder." },
  { hsn: "2501", item: "Salt (Namak)", category: "Grocery", rate: 0, description: "Common salt, iodized salt, rock salt." },
  { hsn: "0910", item: "Spices (Ginger, Turmeric, Masala)", category: "Grocery", rate: 5, description: "Haldi, jeera, dhaniya, mixed garam masala." },
  { hsn: "1905", item: "Biscuits, Bread & Bakery Products", category: "Grocery", rate: 5, description: "Biscuits, cookies & cakes are 5% under GST 2.0. Plain loaf bread is 0%." },
  { hsn: "2106", item: "Namkeen, Bhujia & Roasted Snacks", category: "Grocery", rate: 5, description: "Packaged namkeen, bhujia, mixtures & chivda (5% under GST 2.0)." },
  { hsn: "1806", item: "Chocolates & Cocoa Confectionery", category: "Grocery", rate: 18, description: "Chocolate bars, toffees, cocoa spreads." },
  { hsn: "2201", item: "Packaged Drinking Water (20L Jar / Bottle)", category: "Grocery", rate: 18, description: "Mineral water, sealed water bottles & bubble jars." },
  { hsn: "2202", item: "Carbonated Cold Drinks (Soda, Cola)", category: "Grocery", rate: 40, description: "Aerated soft drinks & caffeinated energy drinks (40% GST 2.0 rate)." },

  // Clothing & Footwear
  { hsn: "6203", item: "Men's T-Shirts, Shirts & Trousers", category: "Clothing", rate: 5, description: "Apparel up to ₹2,500 per piece is 5% GST; above ₹2,500 is 18% (GST 2.0)." },
  { hsn: "6204", item: "Women's Sarees, Suits & Kurtis", category: "Clothing", rate: 5, description: "Suits, lehengas, kurtis up to ₹2,500 per piece are 5%; above ₹2,500 is 18%." },
  { hsn: "6403", item: "Footwear (Shoes, Sandals, Chappals)", category: "Clothing", rate: 5, description: "Leather & synthetic footwear up to ₹2,500 per pair is 5%; above ₹2,500 is 18%." },
  { hsn: "6402", item: "Rubber Hawai Chappals", category: "Clothing", rate: 5, description: "Rubber and plastic slippers up to ₹2,500 per pair (5% under GST 2.0)." },
  { hsn: "5208", item: "Cotton Fabrics & Dress Materials", category: "Clothing", rate: 5, description: "Woven cotton fabric by the metre." },

  // Electronics & Mobile
  { hsn: "8517", item: "Smartphones & Mobile Phones", category: "Electronics", rate: 18, description: "Mobile handsets, cellular phones of all brands." },
  { hsn: "8504", item: "Mobile Chargers, Adapters & Power Banks", category: "Electronics", rate: 18, description: "Electrical transformers, USB phone chargers." },
  { hsn: "8518", item: "Earphones, Headphones & Bluetooth Speakers", category: "Electronics", rate: 18, description: "Wireless earbuds, neckbands, soundbars." },
  { hsn: "8471", item: "Laptops & Desktop Computers", category: "Electronics", rate: 18, description: "Automatic data processing machines, tablets." },
  { hsn: "8528", item: "LED Televisions & Monitors", category: "Electronics", rate: 18, description: "LED TVs & monitors across sizes (unified at 18% under GST 2.0)." },
  { hsn: "8418", item: "Refrigerators & Deep Freezers", category: "Electronics", rate: 18, description: "Household fridges, commercial cooling display units." },
  { hsn: "8415", item: "Air Conditioners (Split & Window AC)", category: "Electronics", rate: 18, description: "Split and window AC machines (reduced from 28% to 18% under GST 2.0)." },

  // Pharmacy & Medical
  { hsn: "3004", item: "Medicines & Generic Formulations", category: "Pharmacy", rate: 5, description: "Tablets, syrups, capsules, antibiotics (reduced to 5% under GST 2.0)." },
  { hsn: "3002", item: "Life-Saving Vaccines & Insulin", category: "Pharmacy", rate: 0, description: "Notified life-saving drugs & vaccines 0%; insulin/test kits 5% (GST 2.0)." },
  { hsn: "9018", item: "Surgical Instruments, Syringes & BP Monitors", category: "Pharmacy", rate: 5, description: "Medical, dental and surgical diagnostic instruments (5% under GST 2.0)." },
  { hsn: "3005", item: "Bandages, Gauze & Cotton Dressings", category: "Pharmacy", rate: 5, description: "Adhesive surgical plasters, sterile bandages & cotton roll (5% under GST 2.0)." },
  { hsn: "3306", item: "Toothpaste & Dental Care", category: "Pharmacy", rate: 18, description: "Dentifrices, mouthwashes, dental floss." },

  // Hardware & Building
  { hsn: "7318", item: "Screws, Bolts, Nuts & Washers", category: "Hardware", rate: 18, description: "Iron and steel threaded fasteners." },
  { hsn: "8301", item: "Padlocks, Door Locks & Keys", category: "Hardware", rate: 18, description: "Base metal locks, brass lever locks." },
  { hsn: "3208", item: "Paints, Enamels & Varnishes", category: "Hardware", rate: 18, description: "Synthetic enamel wall paints, distempers." },
  { hsn: "2523", item: "Cement (Portland & Pozzolana)", category: "Hardware", rate: 18, description: "Grey cement and white cement bags (reduced from 28% to 18% under GST 2.0)." },
  { hsn: "6907", item: "Ceramic Tiles & Marble Slabs", category: "Hardware", rate: 18, description: "Glazed vitrified floor and wall tiles." },
  { hsn: "8481", item: "Bathroom Taps, Valves & Sanitary Fittings", category: "Hardware", rate: 18, description: "Brass and chrome CP fittings, shower heads." },

  // Restaurant & Food Services
  { hsn: "9963", item: "Restaurant Dine-In & Takeaway (Non-AC/AC)", category: "Food Service", rate: 5, description: "Standalone restaurants, cafes & cloud kitchens (5% without ITC)." },
  { hsn: "9963", item: "Hotel Room Service (Room tariff above ₹7,500)", category: "Food Service", rate: 18, description: "Hotel accommodation/services up to ₹7,500 are 5%; above ₹7,500 are 18%." },
];

const hsnFaqs = [
  {
    question: "How many digits of HSN code are required on Indian GST invoices?",
    answer:
      "Businesses with annual turnover up to ₹5 Crore must show at least 4 digits of the HSN code on B2B invoices, while businesses with turnover above ₹5 Crore must display 6 digits across B2B and B2C tax invoices.",
  },
  {
    question: "Did India GST 2.0 change HSN GST slabs for retail goods?",
    answer:
      "Yes. Effective September 22, 2025, India rationalized the former 12% and 28% slabs into 0%, 5%, 18%, and 40%. Items such as butter, ghee, namkeen, biscuits, medicines, and apparel/footwear up to ₹2,500 fall under 5%, while cement, ACs, and LED TVs moved to 18%, and aerated cold drinks moved to 40%.",
  },
];

export default function HsnCodeFinderPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Free HSN Code Finder & GST 2.0 Rate Directory - Vyop",
        url: "https://vyop.in/tools/hsn-code-finder",
        applicationCategory: "FinanceApplication, BusinessApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript",
        description:
          "Search common retail, grocery, clothing, pharmacy, hardware, and electronics HSN codes with updated India GST 2.0 rates (0%, 5%, 18%, 40%).",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: hsnFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <Breadcrumbs
        items={[
          { label: "Free Tools", href: "/tools" },
          { label: "HSN Code Finder", href: "/tools/hsn-code-finder" },
        ]}
      />

      <section className="pt-4 pb-16 px-4 md:px-6 max-w-5xl mx-auto">
        {/* Compact Above-the-Fold Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>🔍</span> Free GST 2.0 HSN Search Tool
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display mb-2 text-gray-900">
            HSN Code &amp; GST Rate <span className="gradient-text">Finder for Retail</span>
          </h1>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Look up HSN codes and updated GST 2.0 tax slabs (0%, 5%, 18%, 40%) for everyday grocery, apparel, electronics, pharmacy, and hardware goods in India.
          </p>
        </div>

        {/* Interactive Search & Results */}
        <HsnCodeFinderClient records={HSN_DATABASE} />

        {/* FAQs */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200 mb-10 space-y-3">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">
            HSN &amp; GST 2.0 Compliance FAQs
          </h2>
          {hsnFaqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-sm text-gray-900 mb-1">{faq.question}</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Direct App Upgrade Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-xl text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
            Auto-Apply HSN in Vyop
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 font-display">
            Never Look Up an HSN Code on Counter Rush
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
            Vyop POS stores your product catalog with pre-configured HSN codes and GST slabs so scanning a barcode or speaking an item calculates tax automatically.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.vyop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white font-bold text-sm hover:scale-105 transition-transform shadow-lg"
          >
            Download Vyop Free on Google Play →
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ToolDownloadCTA
        toolName="HSN Code Finder"
        appFeature="auto-apply correct HSN codes and GST rates on every invoice"
      />

      <Footer />
    </main>
  );
}
