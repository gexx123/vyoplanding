export interface CityData {
  slug: string;
  name: string;
  state: string;
  hubFocus: string;
  searchVolumeHint: string;
  /** Unique local market description for SEO differentiation — 2-3 sentences about major bazaars, retail challenges, and local economy. */
  localMarketInfo: string;
  /** Names of 2-3 famous local commercial areas or markets */
  famousMarkets: string[];
}

export const cities: CityData[] = [
  // Tier 1 Metros & Major State Capitals
  {
    slug: "jaipur", name: "Jaipur", state: "Rajasthan", hubFocus: "textile and jewellery", searchVolumeHint: "High",
    localMarketInfo: "Jaipur's Johari Bazaar and Bapu Bazaar are among India's oldest jewellery and textile wholesale markets, where thousands of family-run shops still rely on handwritten bahi-khata registers. The city's Sitapura Industrial Area has a growing cluster of modern retail outlets and gemstone polishing units that need fast GST invoicing with batch-wise inventory tracking for precious stones and fabrics.",
    famousMarkets: ["Johari Bazaar", "Bapu Bazaar", "Tripolia Bazaar"],
  },
  {
    slug: "mumbai", name: "Mumbai", state: "Maharashtra", hubFocus: "wholesale and retail", searchVolumeHint: "Very High",
    localMarketInfo: "Mumbai's Crawford Market handles over ₹500 crore in daily wholesale trade across groceries, spices, and dry fruits, while Linking Road and Colaba Causeway drive massive fashion retail volumes. The city's high rental costs mean shopkeepers need to maximize billing speed — every minute of customer wait time during evening rush hours costs real revenue in these dense commercial corridors.",
    famousMarkets: ["Crawford Market", "Linking Road", "Zaveri Bazaar"],
  },
  {
    slug: "delhi", name: "Delhi", state: "Delhi", hubFocus: "electronics and garments", searchVolumeHint: "Very High",
    localMarketInfo: "Delhi's Chandni Chowk is Asia's largest wholesale market with over 10,000 shops packed into narrow lanes, where shop owners handle hundreds of transactions daily across electronics, garments, dry fruits, and spices. Nehru Place remains India's biggest electronics retail hub, while Karol Bagh and Lajpat Nagar cater to fashion and household retail with intense competition requiring instant barcode billing and real-time stock tracking.",
    famousMarkets: ["Chandni Chowk", "Nehru Place", "Karol Bagh"],
  },
  {
    slug: "bangalore", name: "Bangalore", state: "Karnataka", hubFocus: "electronics and fashion", searchVolumeHint: "Very High",
    localMarketInfo: "Bangalore's SP Road (known locally as 'Electronics Street') is South India's largest electronics wholesale market, where dealers traditionally charge ₹15,000–₹25,000 for desktop billing setups. Commercial Street and Chickpet are bustling fashion and textile hubs where shopkeepers need fast barcode scanning to handle weekend crowds that can exceed 500 customers per shop. The city's tech-savvy customer base increasingly expects digital receipts via WhatsApp and UPI payment options.",
    famousMarkets: ["SP Road", "Commercial Street", "Chickpet"],
  },
  {
    slug: "hyderabad", name: "Hyderabad", state: "Telangana", hubFocus: "pearls and pharma retail", searchVolumeHint: "High",
    localMarketInfo: "Hyderabad's Begum Bazaar is one of Asia's largest wholesale markets with over 5,000 shops trading in household goods, chemicals, and dry fruits. The Charminar pearl market and Laad Bazaar handle delicate jewellery inventory that requires item-wise photo cataloguing and GST invoicing. Ameerpet and Kukatpally have emerged as major pharma retail corridors where batch number and expiry date tracking is critical for compliance.",
    famousMarkets: ["Begum Bazaar", "Laad Bazaar", "Ameerpet"],
  },
  {
    slug: "chennai", name: "Chennai", state: "Tamil Nadu", hubFocus: "auto and textiles", searchVolumeHint: "High",
    localMarketInfo: "Chennai's T Nagar (Thyagaraja Nagar) is India's highest-grossing retail district by revenue per square foot, with silk saree shops processing thousands of transactions during festival seasons like Pongal and Diwali. Parrys Corner serves as the city's wholesale nerve centre for auto parts, hardware, and industrial supplies. Many shops in these markets still use paper billing systems that struggle during peak hours, losing customers to faster-billing competitors.",
    famousMarkets: ["T Nagar", "Parrys Corner", "Sowcarpet"],
  },
  {
    slug: "kolkata", name: "Kolkata", state: "West Bengal", hubFocus: "garments and sweets", searchVolumeHint: "High",
    localMarketInfo: "Kolkata's Burrabazar (Bara Bazaar) is Eastern India's largest wholesale trading hub, handling everything from textiles and spices to electronics across 25,000+ shops. New Market and Gariahat are iconic retail destinations where generations of shopkeepers manage complex credit relationships (udhar/baki) with regular customers using handwritten registers. The city's famous sweet shop chains like Balaram Mullick need fast billing with combo deal pricing and weight-based invoicing.",
    famousMarkets: ["Burrabazar", "New Market", "Gariahat"],
  },
  {
    slug: "pune", name: "Pune", state: "Maharashtra", hubFocus: "auto parts and retail", searchVolumeHint: "High",
    localMarketInfo: "Pune's Pimpri-Chinchwad MIDC is India's auto components manufacturing capital, with thousands of retail dealers and wholesalers needing fast part-number lookup and barcode scanning for complex SKU catalogues. Tulsi Baug and Laxmi Road are traditional shopping districts where family-run stores compete with modern retail chains by offering personalized service but often lose on billing speed. The city's large student population around Pune University also drives a thriving café and stationery retail segment.",
    famousMarkets: ["Tulsi Baug", "Laxmi Road", "Pimpri-Chinchwad MIDC"],
  },
  {
    slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", hubFocus: "garments and trading", searchVolumeHint: "High",
    localMarketInfo: "Ahmedabad's Manek Chowk serves three different retail functions — a vegetable market by morning, a jewellery bazaar by afternoon, and a famous street food hub by night. The Raipur Darwaza and Revdi Bazaar textile corridors process thousands of daily wholesale transactions that require rapid GST billing with fabric measurement calculations and party-wise credit ledgers. CG Road and SG Highway have modern retail outlets competing on customer experience where WhatsApp billing and digital loyalty programmes are becoming essential.",
    famousMarkets: ["Manek Chowk", "Raipur Darwaza", "CG Road"],
  },
  {
    slug: "surat", name: "Surat", state: "Gujarat", hubFocus: "diamond and textile", searchVolumeHint: "High",
    localMarketInfo: "Surat processes over 90% of the world's diamonds and is India's largest man-made textile hub — the city's Ring Road textile market alone has 65,000+ shops generating over ₹40,000 crore in annual turnover. Diamond units in Varachha and Katargam require precise carat-weight inventory and party-wise credit tracking. Textile traders in markets like Millennium Textile Market handle bulk orders with complex GST calculations involving different tax slabs for fabrics, trims, and embroidery work.",
    famousMarkets: ["Ring Road Textile Market", "Millennium Textile Market", "Varachha Diamond Hub"],
  },

  // NCR & North India Commercial Hubs
  {
    slug: "gurgaon", name: "Gurgaon", state: "Haryana", hubFocus: "cafes, supermarkets and lifestyle", searchVolumeHint: "Very High",
    localMarketInfo: "Gurgaon's rapid urbanization has created a dual retail economy — premium malls like Ambience and DLF CyberHub cater to corporate workers, while the old city's Sadar Bazaar and Jacobpura Market serve traditional retail needs. The city's booming café and QSR scene requires fast KOT (Kitchen Order Ticket) billing with table management. Lifestyle and electronics retailers along MG Road and Sohna Road face intense competition from e-commerce, making speed and customer loyalty tools critical for survival.",
    famousMarkets: ["Sadar Bazaar", "DLF CyberHub", "MG Road"],
  },
  {
    slug: "noida", name: "Noida", state: "Uttar Pradesh", hubFocus: "electronics and retail outlets", searchVolumeHint: "High",
    localMarketInfo: "Noida's Sector 18 market is the NCR's largest open-air retail zone with electronics showrooms, fashion outlets, and food courts processing thousands of daily transactions. The Atta Market in Sector 27 is a wholesale hub for groceries and household goods where kirana shops need fast billing during morning and evening rush hours. Greater Noida's emerging retail corridors along the Yamuna Expressway are creating new demand for modern mobile POS solutions.",
    famousMarkets: ["Sector 18 Market", "Atta Market", "Brahmaputra Market"],
  },
  {
    slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh", hubFocus: "hardware, sanitary and retail", searchVolumeHint: "High",
    localMarketInfo: "Ghaziabad's Navyug Market and Turab Nagar are major wholesale hubs for hardware, sanitary fittings, and plumbing supplies serving the entire NCR construction industry. Shops here manage catalogues of 5,000–10,000+ SKUs — pipes, fittings, valves, tiles — where manual billing leads to frequent errors and customer disputes. The city's Lohia Nagar and Raj Nagar retail corridors serve a growing residential population that expects modern billing with UPI and digital receipts.",
    famousMarkets: ["Navyug Market", "Turab Nagar", "Raj Nagar"],
  },
  {
    slug: "faridabad", name: "Faridabad", state: "Haryana", hubFocus: "auto components and wholesale", searchVolumeHint: "Medium",
    localMarketInfo: "Faridabad is home to one of India's largest auto component manufacturing clusters, with the Faridabad Industrial Area housing hundreds of retail dealers who supply spare parts to workshops across Haryana and Delhi. The NIT Market and Sector 16 commercial belt serve the residential population with kirana, fashion, and electronics retail. Many traders here still rely on manual registers despite handling complex part-number inventories.",
    famousMarkets: ["NIT Market", "Sector 16 Market", "Old Faridabad"],
  },
  {
    slug: "chandigarh", name: "Chandigarh", state: "Punjab", hubFocus: "retail, boutiques and dining", searchVolumeHint: "High",
    localMarketInfo: "Chandigarh's Sector 17 plaza is North India's most iconic planned shopping district, with premium boutiques, jewellers, and electronics showrooms. Sector 22 serves as the city's wholesale and kirana hub where traders supply goods across Punjab, Haryana, and Himachal Pradesh. The city's high standard of living means customers expect fast, professional billing with digital receipts — paper bills are increasingly seen as unprofessional.",
    famousMarkets: ["Sector 17 Plaza", "Sector 22 Market", "Sector 35"],
  },
  {
    slug: "ludhiana", name: "Ludhiana", state: "Punjab", hubFocus: "hosiery, garments and auto parts", searchVolumeHint: "High",
    localMarketInfo: "Ludhiana is India's hosiery and knitwear capital, producing over 90% of the country's woollen garments. The Chaura Bazaar and Ghumar Mandi areas house thousands of garment wholesalers who manage seasonal inventory spikes during winter — tracking sizes, colours, and bundles across hundreds of SKUs. The city's auto parts market along GT Road is equally massive, serving Punjab's agricultural machinery and transport sectors.",
    famousMarkets: ["Chaura Bazaar", "Ghumar Mandi", "Gill Road"],
  },
  {
    slug: "amritsar", name: "Amritsar", state: "Punjab", hubFocus: "textiles, spices and tourism", searchVolumeHint: "Medium",
    localMarketInfo: "Amritsar's Hall Bazaar and Katra Jaimal Singh are historic textile and dry fruit markets where wholesale traders have operated for generations. The city's proximity to the Wagah Border drives a large tourism economy with restaurants and sweet shops around the Golden Temple needing fast KOT billing during peak hours. Local spice traders in Katra Ahluwalia manage complex weight-based inventories that need precision billing with tare weight calculations.",
    famousMarkets: ["Hall Bazaar", "Katra Jaimal Singh", "Lawrence Road"],
  },
  {
    slug: "jalandhar", name: "Jalandhar", state: "Punjab", hubFocus: "sports equipment and leather goods", searchVolumeHint: "Medium",
    localMarketInfo: "Jalandhar is India's sports goods manufacturing capital, with the city supplying cricket bats, footballs, and fitness equipment globally. The BMC Chowk and Rainak Bazaar are the commercial nerve centres where sports retailers manage catalogues with variant-heavy inventory — different sizes, weights, and materials. The city also has a thriving leather goods industry in Kapurthala Road where GST compliance with HSN code mapping is essential for traders.",
    famousMarkets: ["BMC Chowk", "Rainak Bazaar", "Kapurthala Road"],
  },
  {
    slug: "dehradun", name: "Dehradun", state: "Uttarakhand", hubFocus: "tourism, cafes and lifestyle retail", searchVolumeHint: "Medium",
    localMarketInfo: "Dehradun's Paltan Bazaar and Rajpur Road are the city's main commercial arteries, with a mix of traditional retail and modern cafés catering to tourists heading to Mussoorie and Rishikesh. The city's growing IT sector has brought a young professional population that drives demand for specialty coffee shops, boutiques, and lifestyle stores — all needing modern POS with loyalty programmes and digital receipts.",
    famousMarkets: ["Paltan Bazaar", "Rajpur Road", "Astley Hall"],
  },
  {
    slug: "haridwar", name: "Haridwar", state: "Uttarakhand", hubFocus: "ayurvedic, hospitality and retail", searchVolumeHint: "Medium",
    localMarketInfo: "Haridwar's Bara Bazaar and Moti Bazaar are pilgrimage-driven retail hubs where millions of visitors purchase ayurvedic products, puja items, and traditional handicrafts annually. Sweet shops and restaurants near Har Ki Pauri ghat handle extreme seasonal rushes during Kumbh Mela, Kanwar Yatra, and major Hindu festivals where billing speed directly impacts revenue. Ayurvedic product retailers need batch and expiry tracking for herbal medicines and supplements.",
    famousMarkets: ["Bara Bazaar", "Moti Bazaar", "Har Ki Pauri area"],
  },

  // Uttar Pradesh & Bihar Trade Centers
  {
    slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", hubFocus: "chikan embroidery and retail stores", searchVolumeHint: "High",
    localMarketInfo: "Lucknow's Aminabad and Hazratganj are among North India's most famous shopping destinations, with Chikan embroidery artisans and retailers managing intricate piece-work inventory that requires item-level photo cataloguing. The Chowk area handles wholesale dry fruits and spices, while Gomti Nagar's modern retail corridors attract brand-conscious shoppers expecting professional invoicing. Lucknow's famous chaat and kebab restaurants need fast KOT billing during evening rushes.",
    famousMarkets: ["Aminabad", "Hazratganj", "Chowk"],
  },
  {
    slug: "kanpur", name: "Kanpur", state: "Uttar Pradesh", hubFocus: "leather, footwear and hardware", searchVolumeHint: "High",
    localMarketInfo: "Kanpur is India's leather capital, with the Jajmau tannery cluster producing footwear and leather goods for domestic and export markets. The Naveen Market and Birhana Road are the city's primary retail zones where footwear shops manage size-colour matrix inventory across hundreds of styles. Hardware and building material wholesalers in Parade area serve UP's construction boom, handling complex multi-unit inventories (per piece, per kg, per bundle).",
    famousMarkets: ["Naveen Market", "Birhana Road", "Parade Market"],
  },
  {
    slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh", hubFocus: "silk sarees, sweets and handicrafts", searchVolumeHint: "High",
    localMarketInfo: "Varanasi's Banarasi silk saree industry is a ₹5,000+ crore market where weavers and retailers manage high-value inventory with intricate pattern-based cataloguing. Vishwanath Gali and Godowlia Market are narrow-lane bazaars where space constraints make bulky desktop billing setups impractical — mobile POS is the only viable solution. The city's iconic sweet shops and paan sellers near the ghats serve millions of pilgrims and tourists who expect quick service.",
    famousMarkets: ["Vishwanath Gali", "Godowlia Market", "Dashashwamedh"],
  },
  {
    slug: "agra", name: "Agra", state: "Uttar Pradesh", hubFocus: "footwear, leather and petha retail", searchVolumeHint: "High",
    localMarketInfo: "Agra is India's second-largest footwear manufacturing hub after Kanpur, with the Hing Ki Mandi and Sadar Bazaar areas housing thousands of shoe retailers and wholesalers. The city's famous petha sweet shops around Taj Mahal cater to 7–8 million annual tourists who expect quick, professional billing. Leather goods shops in Artoni manage export-quality inventory with size and colour variant tracking.",
    famousMarkets: ["Sadar Bazaar", "Hing Ki Mandi", "Kinari Bazaar"],
  },
  {
    slug: "meerut", name: "Meerut", state: "Uttar Pradesh", hubFocus: "sports goods, jewelry and scissors", searchVolumeHint: "Medium",
    localMarketInfo: "Meerut is India's leading manufacturer of sports equipment including cricket bats, balls, and protective gear. The Abu Lane and Suraj Kund areas are wholesale hubs where sports goods retailers manage variant-heavy catalogues. The city's jewellery market in Sarrafa Bazaar handles high-value transactions requiring precise weight-based billing with making charge calculations and hallmark documentation.",
    famousMarkets: ["Abu Lane", "Suraj Kund", "Sarrafa Bazaar"],
  },
  {
    slug: "bareilly", name: "Bareilly", state: "Uttar Pradesh", hubFocus: "wooden furniture, zari and retail", searchVolumeHint: "Medium",
    localMarketInfo: "Bareilly is renowned for its zari-zardozi embroidery work and wooden furniture manufacturing. The Bara Bazaar and Kutub Khana retail corridors serve the Rohilkhand region with wholesale textiles, furniture, and household goods. Furniture showrooms manage large-format inventory with custom sizing that requires detailed quotation billing and advance payment tracking.",
    famousMarkets: ["Bara Bazaar", "Kutub Khana", "Civil Lines"],
  },
  {
    slug: "aligarh", name: "Aligarh", state: "Uttar Pradesh", hubFocus: "brass locks, hardware and metal craft", searchVolumeHint: "Medium",
    localMarketInfo: "Aligarh is globally known as the 'Lock City of India,' producing 80% of India's locks and hardware fittings. The Upper Fort and Ramghat Road industrial areas have thousands of lock and hardware retailers managing catalogues with dozens of size variants per product. Metal craft exporters need GST invoicing with proper HSN codes for brass, zinc, and aluminium products to meet compliance requirements.",
    famousMarkets: ["Upper Fort", "Ramghat Road", "Centre Point"],
  },
  {
    slug: "moradabad", name: "Moradabad", state: "Uttar Pradesh", hubFocus: "brassware, handicrafts and exports", searchVolumeHint: "Medium",
    localMarketInfo: "Moradabad is India's 'Brass City,' with its Peetal Nagri producing brass and metal handicrafts worth ₹6,000+ crore annually for export markets. The Mandi Lal Kuan and Chhota Bazaar areas house artisan workshops and export showrooms that require weight-based pricing with international shipping documentation. Retail shops in civil lines serve local household and decorative goods demand.",
    famousMarkets: ["Peetal Nagri", "Mandi Lal Kuan", "Chhota Bazaar"],
  },
  {
    slug: "prayagraj", name: "Prayagraj", state: "Uttar Pradesh", hubFocus: "wholesale trade and general stores", searchVolumeHint: "Medium",
    localMarketInfo: "Prayagraj's Chowk and Katra areas form the commercial heart of this pilgrimage city, serving as wholesale distribution hubs for groceries, textiles, and household goods across eastern UP. During the Maha Kumbh Mela (attracting 200+ million visitors), temporary retail setups need rapid mobile billing that works without reliable internet. The Civil Lines area has modern retail serving the city's student and professional population.",
    famousMarkets: ["Chowk", "Katra", "Civil Lines"],
  },
  {
    slug: "patna", name: "Patna", state: "Bihar", hubFocus: "kirana, grains and wholesale trading", searchVolumeHint: "High",
    localMarketInfo: "Patna's Mithapur wholesale mandi is Bihar's largest grain and commodity trading hub, handling thousands of tonnes of rice, wheat, and pulses daily with complex weight-based billing. The Boring Road and Fraser Road retail corridors serve a fast-growing consumer market where kirana shops are the primary grocery channel. Bihar's lower banking penetration means udhar (credit) management is especially critical — shopkeepers track lakhs in customer balances using paper notebooks.",
    famousMarkets: ["Mithapur Mandi", "Boring Road", "Kankarbagh"],
  },

  // Gujarat & Rajasthan Trade Centers
  {
    slug: "vadodara", name: "Vadodara", state: "Gujarat", hubFocus: "chemicals, textiles and retail", searchVolumeHint: "High",
    localMarketInfo: "Vadodara's Raopura and Mandvi areas are historic commercial centres with wholesale textile and chemical trading operations serving Gujarat's industrial corridor. The city's proximity to GIDC industrial estates creates strong demand for B2B billing with purchase order matching and party-wise credit limits. Alkapuri and Fatehgunj have modern retail zones where shopkeepers need fast POS to compete with organized retail chains.",
    famousMarkets: ["Raopura", "Mandvi", "Alkapuri"],
  },
  {
    slug: "rajkot", name: "Rajkot", state: "Gujarat", hubFocus: "engineering goods, jewelry and retail", searchVolumeHint: "Medium",
    localMarketInfo: "Rajkot is Gujarat's industrial powerhouse for engineering and auto components, with the Aji Industrial Area producing parts for the entire automotive supply chain. The Bangdi Bazaar jewellery market handles high-value gold and diamond transactions requiring precise weight-based billing with making charges and hallmark records. Yagnik Road and Kalawad Road are the city's retail spines for fashion, electronics, and household goods.",
    famousMarkets: ["Bangdi Bazaar", "Yagnik Road", "Aji GIDC"],
  },
  {
    slug: "jodhpur", name: "Jodhpur", state: "Rajasthan", hubFocus: "handicrafts, wooden furniture and spices", searchVolumeHint: "High",
    localMarketInfo: "Jodhpur's Sardar Market near the Clock Tower is Rajasthan's busiest handicraft and spice bazaar, attracting international buyers and domestic tourists year-round. The Sojati Gate area is a wholesale hub for wooden furniture, textiles, and household goods where traders manage seasonal inventory peaks during wedding seasons. Spice merchants in Nai Sarak handle complex weight-based billing with multiple quality grades per item.",
    famousMarkets: ["Sardar Market", "Sojati Gate", "Nai Sarak"],
  },
  {
    slug: "udaipur", name: "Udaipur", state: "Rajasthan", hubFocus: "marble, tourism, jewelry and hotels", searchVolumeHint: "High",
    localMarketInfo: "Udaipur's Hathi Pol and Bada Bazaar serve both the local Mewari population and millions of tourists visiting the Lake City annually. The city's jewellery and miniature painting shops need item-level inventory with photo cataloguing for unique handcrafted pieces. Udaipur's booming hospitality industry — from luxury hotels to street-side cafés — requires fast KOT billing, table management, and digital menu ordering to serve the tourist influx.",
    famousMarkets: ["Hathi Pol", "Bada Bazaar", "Sukhadia Circle"],
  },
  {
    slug: "kota", name: "Kota", state: "Rajasthan", hubFocus: "stationery, grocery, coaching retail and cafes", searchVolumeHint: "Medium",
    localMarketInfo: "Kota's economy revolves around India's largest coaching industry hub, with 2+ lakh students driving massive demand for stationery, grocery, food delivery, and lifestyle retail. The Dadabari and Shopping Centre areas have hundreds of kirana shops, photocopy centres, and cafés where fast billing is essential during peak student hours. Hostels and PG accommodations create a unique bulk-order grocery market where monthly credit billing is common.",
    famousMarkets: ["Dadabari", "Shopping Centre", "Gumanpura"],
  },

  // Central India (MP & Chhattisgarh)
  {
    slug: "indore", name: "Indore", state: "Madhya Pradesh", hubFocus: "namkeen, textiles and confectionery", searchVolumeHint: "High",
    localMarketInfo: "Indore's Sarafa Bazaar transforms from a jewellery market by day into India's most famous street food bazaar by night, with hundreds of food stalls needing fast mobile billing. The Rajwada area and MT Cloth Market are Central India's largest textile wholesale hubs. Indore's namkeen and confectionery industry (brands like Ratlami Sev) requires batch-wise inventory management with production date tracking and weight-based pricing.",
    famousMarkets: ["Sarafa Bazaar", "Rajwada", "MT Cloth Market"],
  },
  {
    slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh", hubFocus: "garments, jewelry and retail shops", searchVolumeHint: "High",
    localMarketInfo: "Bhopal's Chowk Bazaar and New Market are the state capital's primary commercial zones with a mix of traditional retail and modern shopping centres. The Itwara market handles wholesale cloth and household goods for the entire Madhya Pradesh hinterland. Jewellery shops in the old city area manage complex making-charge calculations and hallmark compliance that require precision billing beyond basic paper registers.",
    famousMarkets: ["Chowk Bazaar", "New Market", "Itwara"],
  },
  {
    slug: "gwalior", name: "Gwalior", state: "Madhya Pradesh", hubFocus: "textiles, electronics and general retail", searchVolumeHint: "Medium",
    localMarketInfo: "Gwalior's Sarafa and Patankar Bazaar are historic commercial centres where textile wholesalers distribute across the Chambal region. The Jayendraganj market specialises in electronics and electrical goods. As a major North-Central India trade corridor connecting Delhi to the Deccan, Gwalior's wholesale shops handle large inter-state transactions requiring proper IGST invoicing and e-way bill compliance.",
    famousMarkets: ["Sarafa Bazaar", "Patankar Bazaar", "Jayendraganj"],
  },
  {
    slug: "jabalpur", name: "Jabalpur", state: "Madhya Pradesh", hubFocus: "electricals, hardware and wholesale", searchVolumeHint: "Medium",
    localMarketInfo: "Jabalpur serves as Central India's major wholesale distribution hub for electrical goods, hardware, and building materials. The Sadar Bazaar and Wright Town areas have densely packed shops where dealers manage 3,000–5,000+ SKUs of nuts, bolts, switches, and wiring. The city's Madan Mahal area has a growing modern retail presence serving the garrison town's residential population.",
    famousMarkets: ["Sadar Bazaar", "Wright Town", "Madan Mahal"],
  },
  {
    slug: "raipur", name: "Raipur", state: "Chhattisgarh", hubFocus: "steel, plywood and wholesale kirana", searchVolumeHint: "High",
    localMarketInfo: "Raipur is Chhattisgarh's commercial capital and the gateway for steel, timber, and building material distribution across Central India. The Malviya Road and Sadar Bazaar areas are wholesale kirana hubs supplying to the entire state's retail network. The city's rapid infrastructure growth has created strong demand for plywood, cement, and hardware dealers who need multi-unit billing (per sheet, per bag, per quintal) with party-wise credit management.",
    famousMarkets: ["Malviya Road", "Sadar Bazaar", "Pandri"],
  },

  // Maharashtra Hubs
  {
    slug: "nagpur", name: "Nagpur", state: "Maharashtra", hubFocus: "oranges, logistics and retail trade", searchVolumeHint: "High",
    localMarketInfo: "Nagpur is India's geographic centre and a major logistics hub, with the Kalamna wholesale market handling massive daily volumes of oranges, grains, and agricultural produce. Sitabuldi and Itwari are the city's busiest retail corridors where electronics, garments, and household shops compete for customer attention. The city's strategic location on the Mumbai-Kolkata and Delhi-Chennai highway corridors makes it a natural distribution centre requiring fast wholesale billing.",
    famousMarkets: ["Kalamna Market", "Sitabuldi", "Itwari"],
  },
  {
    slug: "nashik", name: "Nashik", state: "Maharashtra", hubFocus: "auto spare parts and agricultural retail", searchVolumeHint: "Medium",
    localMarketInfo: "Nashik's MIDC Ambad industrial area has a large auto spare parts trading cluster, while the Panchavati and Main Road retail zones serve the city's growing population. As a major wine-producing region and pilgrimage destination (Trimbakeshwar), Nashik has a unique mix of agricultural retail, hospitality, and traditional bazaars where billing needs vary from weight-based produce to item-based electronics.",
    famousMarkets: ["Panchavati", "Main Road", "MIDC Ambad"],
  },
  {
    slug: "aurangabad", name: "Aurangabad", state: "Maharashtra", hubFocus: "auto parts, pharmaceuticals and retail", searchVolumeHint: "Medium",
    localMarketInfo: "Aurangabad (now Chhatrapati Sambhajinagar) is the Marathwada region's commercial capital with a strong auto components and pharmaceutical manufacturing base. The Gulmandi and City Chowk areas handle wholesale distribution for the region. Pharma retailers need batch number and expiry management, while auto parts dealers manage complex part-number inventories with cross-referencing across vehicle models.",
    famousMarkets: ["Gulmandi", "City Chowk", "Mondha Naka"],
  },

  // South India Retail & Industrial Hubs
  {
    slug: "coimbatore", name: "Coimbatore", state: "Tamil Nadu", hubFocus: "textiles, engineering pumps and retail", searchVolumeHint: "High",
    localMarketInfo: "Coimbatore is Tamil Nadu's industrial powerhouse, known as the 'Manchester of South India' for its massive textile and garment industry. The Gandhipuram and Town Hall areas are busy retail zones, while the Sungam wholesale market handles bulk textile distribution. The city's engineering sector (pumps, motors, auto parts) creates a large B2B retail market where dealers need purchase-order matching and party-wise credit limit management.",
    famousMarkets: ["Gandhipuram", "Town Hall", "Sungam"],
  },
  {
    slug: "madurai", name: "Madurai", state: "Tamil Nadu", hubFocus: "textiles, jasmine, groceries and dining", searchVolumeHint: "Medium",
    localMarketInfo: "Madurai's iconic Meenakshi Temple area is surrounded by centuries-old bazaars — Puthu Mandapam for textiles, and the Flower Market for jasmine and temple offerings. The South Masi Street and Town Hall Road corridors handle wholesale distribution of groceries, textiles, and household goods. Madurai's famous South Indian restaurants need fast KOT billing with combo-meal pricing during peak lunch and dinner hours.",
    famousMarkets: ["Puthu Mandapam", "South Masi Street", "Flower Market"],
  },
  {
    slug: "tiruchirappalli", name: "Trichy", state: "Tamil Nadu", hubFocus: "engineering fabrication and jewellery", searchVolumeHint: "Medium",
    localMarketInfo: "Trichy's Big Bazaar Street (Netaji Subhash Chandra Bose Road) is one of South India's longest retail stretches, with gold jewellery shops dominating one end and textile stores the other. The city's engineering fabrication industry (BHEL) creates a sizeable industrial supply retail market. The Chinthamani area near Srirangam temple attracts pilgrims year-round, driving demand for fast billing in sweet shops, flower vendors, and puja item stores.",
    famousMarkets: ["Big Bazaar Street", "Chinthamani", "Thillai Nagar"],
  },
  {
    slug: "salem", name: "Salem", state: "Tamil Nadu", hubFocus: "steel, textiles and sago wholesale", searchVolumeHint: "Medium",
    localMarketInfo: "Salem is Tamil Nadu's steel capital, with the Hasthampatti and Ammapet areas serving as distribution hubs for steel rods, sheets, and building materials. The city is also India's largest sago (sabudana) producing centre. Omalur Road has textile wholesale traders supplying to the southern Tamil Nadu retail network. Steel dealers handle heavy-weight inventory with per-kg and per-tonne pricing that requires precision billing.",
    famousMarkets: ["Hasthampatti", "Ammapet", "Omalur Road"],
  },
  {
    slug: "kochi", name: "Kochi", state: "Kerala", hubFocus: "spices, supermarkets, seafood and tourism", searchVolumeHint: "High",
    localMarketInfo: "Kochi's Jew Town in Mattancherry is India's oldest spice trading centre, where pepper, cardamom, and cinnamon have been traded for centuries. Broadway Market in Ernakulam is Kerala's busiest urban shopping strip with electronics, textiles, and household retailers competing fiercely for walk-in customers. Kerala has India's highest supermarket density — small-format neighbourhood supermarkets need fast barcode scanning and inventory tracking to compete with chains like Lulu and Big Bazaar.",
    famousMarkets: ["Broadway Market", "Jew Town Mattancherry", "MG Road"],
  },
  {
    slug: "thiruvananthapuram", name: "Trivandrum", state: "Kerala", hubFocus: "electronics, boutiques and tourism", searchVolumeHint: "Medium",
    localMarketInfo: "Trivandrum's Chalai Bazaar is one of Kerala's oldest and busiest markets, handling everything from fresh produce and spices to textiles and household goods in narrow, congested lanes. The MG Road and Statue area have modern electronics and fashion retail. As the state capital and gateway to Kovalam Beach tourism, the city has a thriving restaurant and café sector needing multi-language billing (English, Malayalam, Hindi).",
    famousMarkets: ["Chalai Bazaar", "MG Road", "Statue Junction"],
  },
  {
    slug: "kozhikode", name: "Calicut", state: "Kerala", hubFocus: "footwear, bakery sweets and timber retail", searchVolumeHint: "Medium",
    localMarketInfo: "Calicut's SM Street (Sweet Meat Street) is Kerala's most famous food and spice bazaar, with halwa shops and banana chip vendors alongside wholesale spice traders. The Palayam market handles timber and building materials for Malabar region's construction industry. Calicut's legendary bakery culture (Malabar cuisine) means hundreds of bakeries and sweet shops need weight-based billing with production batch tracking.",
    famousMarkets: ["SM Street", "Palayam Market", "Mananchira"],
  },
  {
    slug: "visakhapatnam", name: "Visakhapatnam", state: "Andhra Pradesh", hubFocus: "wholesale trade, electronics and retail", searchVolumeHint: "High",
    localMarketInfo: "Visakhapatnam (Vizag) is Andhra Pradesh's largest city and a major port-driven commercial centre. The Poorna Market and Jagadamba Junction areas are the city's retail nerve centres with dense electronic and garment shops. The steel plant township and naval base create a large consumer market with diverse retail needs. Vizag's fish market is one of India's largest, requiring weight-based billing with real-time price adjustments based on catch freshness.",
    famousMarkets: ["Poorna Market", "Jagadamba Junction", "Daba Gardens"],
  },
  {
    slug: "vijayawada", name: "Vijayawada", state: "Andhra Pradesh", hubFocus: "automobile spare parts and grain trade", searchVolumeHint: "Medium",
    localMarketInfo: "Vijayawada is Andhra Pradesh's commercial and trading capital, with the Besant Road area serving as the largest automobile spare parts hub in South India. The Governorpet grain mandi handles massive rice and pulse trading volumes with weight-based billing and gunny-bag lot tracking. The city's One Town and Benz Circle retail zones serve a fast-growing consumer market with electronics, fashion, and grocery needs.",
    famousMarkets: ["Besant Road", "Governorpet", "One Town"],
  },
  {
    slug: "mysore", name: "Mysore", state: "Karnataka", hubFocus: "silk sarees, sandalwood and cafes", searchVolumeHint: "Medium",
    localMarketInfo: "Mysore's Devaraja Market is a 130-year-old heritage bazaar selling spices, flowers, sandalwood products, and Mysore silk. The Sayyaji Rao Road and Ashoka Road retail corridors cater to both locals and the 3+ million annual tourists visiting Mysore Palace. The city's renowned silk saree industry needs item-level inventory with weave pattern cataloguing and GST invoicing with proper textile HSN codes.",
    famousMarkets: ["Devaraja Market", "Sayyaji Rao Road", "Ashoka Road"],
  },
  {
    slug: "mangalore", name: "Mangalore", state: "Karnataka", hubFocus: "cashew trade, tile and seafood retail", searchVolumeHint: "Medium",
    localMarketInfo: "Mangalore is India's cashew processing capital and one of the largest tile manufacturing hubs. The Hampankatta and Central Market areas handle wholesale and retail trade in cashews, spices, and seafood. The city's tile showrooms along Kankanady manage large-format inventory with variant-based pricing (sizes, patterns, grades). Bunder area's fish market operates on real-time auction-style pricing requiring rapid mobile billing.",
    famousMarkets: ["Hampankatta", "Central Market", "Bunder"],
  },
  {
    slug: "hubli", name: "Hubli", state: "Karnataka", hubFocus: "cotton, machinery and North Karnataka trade", searchVolumeHint: "Medium",
    localMarketInfo: "Hubli-Dharwad is the commercial capital of North Karnataka, with the Durgad Bail area hosting one of India's largest cotton trading markets. The Lamington Road and Station Road retail zones serve the agricultural hinterland with farm machinery, hardware, and household goods. Agricultural input dealers manage seasonal inventory cycles where demand for seeds, fertilizers, and equipment spikes during monsoon planting season.",
    famousMarkets: ["Durgad Bail", "Lamington Road", "Station Road"],
  },

  // East & Northeast India
  {
    slug: "bhubaneswar", name: "Bhubaneswar", state: "Odisha", hubFocus: "handloom textiles and modern retail", searchVolumeHint: "High",
    localMarketInfo: "Bhubaneswar is Odisha's fast-growing capital where traditional handloom textile shops in Unit-I and Rasulgarh coexist with modern retail malls. The Saheed Nagar market area serves as the city's primary commercial zone. Odisha's famous Pattachitra art and Sambalpuri ikat textile retailers need item-level photo-based inventory for unique handcrafted pieces where no two products are identical — making barcode generation essential for catalogue management.",
    famousMarkets: ["Unit-I Market", "Saheed Nagar", "Rasulgarh"],
  },
  {
    slug: "cuttack", name: "Cuttack", state: "Odisha", hubFocus: "silver filigree and wholesale textile", searchVolumeHint: "Medium",
    localMarketInfo: "Cuttack is known as the 'Silver City' of India for its exquisite filigree jewellery craftsmanship. The Naya Sarak and Mangalabag areas are Odisha's largest wholesale textile and general merchandise markets. Silver filigree artisans need weight-based precious metal billing with making charges and design cataloguing. The city's Chandi Bazaar handles high-value silver transactions requiring trust-based credit management with long-standing dealer relationships.",
    famousMarkets: ["Naya Sarak", "Mangalabag", "Chandi Bazaar"],
  },
  {
    slug: "ranchi", name: "Ranchi", state: "Jharkhand", hubFocus: "wholesale, kirana and hardware", searchVolumeHint: "Medium",
    localMarketInfo: "Ranchi is Jharkhand's capital and primary commercial centre, with Upper Bazaar and Main Road serving as the state's wholesale distribution hubs for groceries, hardware, and building materials. The city's kirana shops supply goods to remote tribal villages across the Chhotanagpur Plateau, where advance ordering and credit management are critical. Kanke Road and Harmu areas have growing modern retail catering to the city's expanding middle class.",
    famousMarkets: ["Upper Bazaar", "Main Road", "Lalpur"],
  },
  {
    slug: "jamshedpur", name: "Jamshedpur", state: "Jharkhand", hubFocus: "steel, auto spare parts and retail", searchVolumeHint: "Medium",
    localMarketInfo: "Jamshedpur is India's first planned industrial city, built around the Tata Steel works. The Bistupur and Sakchi markets are the city's primary retail zones, with a strong auto spare parts and industrial supply dealer network serving the steel plant's ancillary ecosystem. Golmuri Market handles wholesale kirana distribution for the greater Jamshedpur region. The city's organised township layout means retail shops face competition from modern supermarkets, requiring efficient billing to retain customers.",
    famousMarkets: ["Bistupur", "Sakchi Market", "Golmuri"],
  },
  {
    slug: "guwahati", name: "Guwahati", state: "Assam", hubFocus: "tea, FMCG wholesale and Northeast retail", searchVolumeHint: "High",
    localMarketInfo: "Guwahati is the commercial gateway to all of Northeast India, with the Fancy Bazaar and Pan Bazaar handling wholesale distribution of FMCG, tea, and household goods for the entire eight-state region. The city's tea auction centre is one of India's largest. Retailers here manage complex logistics of supplying goods to remote hill districts with long credit cycles. The Ganeshguri and Zoo Road areas have modern retail serving Guwahati's fast-growing urban population.",
    famousMarkets: ["Fancy Bazaar", "Pan Bazaar", "Ganeshguri"],
  },
];
