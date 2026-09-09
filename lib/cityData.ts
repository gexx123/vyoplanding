export interface CityData {
  slug: string;
  name: string;
  state: string;
  hubFocus: string;
  searchVolumeHint: string;
}

export const cities: CityData[] = [
  // Tier 1 Metros & Major State Capitals
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan", hubFocus: "textile and jewellery", searchVolumeHint: "High" },
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", hubFocus: "wholesale and retail", searchVolumeHint: "Very High" },
  { slug: "delhi", name: "Delhi", state: "Delhi", hubFocus: "electronics and garments", searchVolumeHint: "Very High" },
  { slug: "bangalore", name: "Bangalore", state: "Karnataka", hubFocus: "electronics and fashion", searchVolumeHint: "Very High" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", hubFocus: "pearls and pharma retail", searchVolumeHint: "High" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", hubFocus: "auto and textiles", searchVolumeHint: "High" },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal", hubFocus: "garments and sweets", searchVolumeHint: "High" },
  { slug: "pune", name: "Pune", state: "Maharashtra", hubFocus: "auto parts and retail", searchVolumeHint: "High" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", hubFocus: "garments and trading", searchVolumeHint: "High" },
  { slug: "surat", name: "Surat", state: "Gujarat", hubFocus: "diamond and textile", searchVolumeHint: "High" },

  // NCR & North India Commercial Hubs
  { slug: "gurgaon", name: "Gurgaon", state: "Haryana", hubFocus: "cafes, supermarkets and lifestyle", searchVolumeHint: "Very High" },
  { slug: "noida", name: "Noida", state: "Uttar Pradesh", hubFocus: "electronics and retail outlets", searchVolumeHint: "High" },
  { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh", hubFocus: "hardware, sanitary and retail", searchVolumeHint: "High" },
  { slug: "faridabad", name: "Faridabad", state: "Haryana", hubFocus: "auto components and wholesale", searchVolumeHint: "Medium" },
  { slug: "chandigarh", name: "Chandigarh", state: "Punjab", hubFocus: "retail, boutiques and dining", searchVolumeHint: "High" },
  { slug: "ludhiana", name: "Ludhiana", state: "Punjab", hubFocus: "hosiery, garments and auto parts", searchVolumeHint: "High" },
  { slug: "amritsar", name: "Amritsar", state: "Punjab", hubFocus: "textiles, spices and tourism", searchVolumeHint: "Medium" },
  { slug: "jalandhar", name: "Jalandhar", state: "Punjab", hubFocus: "sports equipment and leather goods", searchVolumeHint: "Medium" },
  { slug: "dehradun", name: "Dehradun", state: "Uttarakhand", hubFocus: "tourism, cafes and lifestyle retail", searchVolumeHint: "Medium" },
  { slug: "haridwar", name: "Haridwar", state: "Uttarakhand", hubFocus: "ayurvedic, hospitality and retail", searchVolumeHint: "Medium" },

  // Uttar Pradesh & Bihar Trade Centers
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", hubFocus: "chikan embroidery and retail stores", searchVolumeHint: "High" },
  { slug: "kanpur", name: "Kanpur", state: "Uttar Pradesh", hubFocus: "leather, footwear and hardware", searchVolumeHint: "High" },
  { slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh", hubFocus: "silk sarees, sweets and handicrafts", searchVolumeHint: "High" },
  { slug: "agra", name: "Agra", state: "Uttar Pradesh", hubFocus: "footwear, leather and petha retail", searchVolumeHint: "High" },
  { slug: "meerut", name: "Meerut", state: "Uttar Pradesh", hubFocus: "sports goods, jewelry and scissors", searchVolumeHint: "Medium" },
  { slug: "bareilly", name: "Bareilly", state: "Uttar Pradesh", hubFocus: "wooden furniture, zari and retail", searchVolumeHint: "Medium" },
  { slug: "aligarh", name: "Aligarh", state: "Uttar Pradesh", hubFocus: "brass locks, hardware and metal craft", searchVolumeHint: "Medium" },
  { slug: "moradabad", name: "Moradabad", state: "Uttar Pradesh", hubFocus: "brassware, handicrafts and exports", searchVolumeHint: "Medium" },
  { slug: "prayagraj", name: "Prayagraj", state: "Uttar Pradesh", hubFocus: "wholesale trade and general stores", searchVolumeHint: "Medium" },
  { slug: "patna", name: "Patna", state: "Bihar", hubFocus: "kirana, grains and wholesale trading", searchVolumeHint: "High" },

  // Gujarat & Rajasthan Trade Centers
  { slug: "vadodara", name: "Vadodara", state: "Gujarat", hubFocus: "chemicals, textiles and retail", searchVolumeHint: "High" },
  { slug: "rajkot", name: "Rajkot", state: "Gujarat", hubFocus: "engineering goods, jewelry and retail", searchVolumeHint: "Medium" },
  { slug: "jodhpur", name: "Jodhpur", state: "Rajasthan", hubFocus: "handicrafts, wooden furniture and spices", searchVolumeHint: "High" },
  { slug: "udaipur", name: "Udaipur", state: "Rajasthan", hubFocus: "marble, tourism, jewelry and hotels", searchVolumeHint: "High" },
  { slug: "kota", name: "Kota", state: "Rajasthan", hubFocus: "stationery, grocery, coaching retail and cafes", searchVolumeHint: "Medium" },

  // Central India (MP & Chhattisgarh)
  { slug: "indore", name: "Indore", state: "Madhya Pradesh", hubFocus: "namkeen, textiles and confectionery", searchVolumeHint: "High" },
  { slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh", hubFocus: "garments, jewelry and retail shops", searchVolumeHint: "High" },
  { slug: "gwalior", name: "Gwalior", state: "Madhya Pradesh", hubFocus: "textiles, electronics and general retail", searchVolumeHint: "Medium" },
  { slug: "jabalpur", name: "Jabalpur", state: "Madhya Pradesh", hubFocus: "electricals, hardware and wholesale", searchVolumeHint: "Medium" },
  { slug: "raipur", name: "Raipur", state: "Chhattisgarh", hubFocus: "steel, plywood and wholesale kirana", searchVolumeHint: "High" },

  // Maharashtra Hubs
  { slug: "nagpur", name: "Nagpur", state: "Maharashtra", hubFocus: "oranges, logistics and retail trade", searchVolumeHint: "High" },
  { slug: "nashik", name: "Nashik", state: "Maharashtra", hubFocus: "auto spare parts and agricultural retail", searchVolumeHint: "Medium" },
  { slug: "aurangabad", name: "Aurangabad", state: "Maharashtra", hubFocus: "auto parts, pharmaceuticals and retail", searchVolumeHint: "Medium" },

  // South India Retail & Industrial Hubs
  { slug: "coimbatore", name: "Coimbatore", state: "Tamil Nadu", hubFocus: "textiles, engineering pumps and retail", searchVolumeHint: "High" },
  { slug: "madurai", name: "Madurai", state: "Tamil Nadu", hubFocus: "textiles, jasmine, groceries and dining", searchVolumeHint: "Medium" },
  { slug: "tiruchirappalli", name: "Trichy", state: "Tamil Nadu", hubFocus: "engineering fabrication and jewellery", searchVolumeHint: "Medium" },
  { slug: "salem", name: "Salem", state: "Tamil Nadu", hubFocus: "steel, textiles and sago wholesale", searchVolumeHint: "Medium" },
  { slug: "kochi", name: "Kochi", state: "Kerala", hubFocus: "spices, supermarkets, seafood and tourism", searchVolumeHint: "High" },
  { slug: "thiruvananthapuram", name: "Trivandrum", state: "Kerala", hubFocus: "electronics, boutiques and tourism", searchVolumeHint: "Medium" },
  { slug: "kozhikode", name: "Calicut", state: "Kerala", hubFocus: "footwear, bakery sweets and timber retail", searchVolumeHint: "Medium" },
  { slug: "visakhapatnam", name: "Visakhapatnam", state: "Andhra Pradesh", hubFocus: "wholesale trade, electronics and retail", searchVolumeHint: "High" },
  { slug: "vijayawada", name: "Vijayawada", state: "Andhra Pradesh", hubFocus: "automobile spare parts and grain trade", searchVolumeHint: "Medium" },
  { slug: "mysore", name: "Mysore", state: "Karnataka", hubFocus: "silk sarees, sandalwood and cafes", searchVolumeHint: "Medium" },
  { slug: "mangalore", name: "Mangalore", state: "Karnataka", hubFocus: "cashew trade, tile and seafood retail", searchVolumeHint: "Medium" },
  { slug: "hubli", name: "Hubli", state: "Karnataka", hubFocus: "cotton, machinery and North Karnataka trade", searchVolumeHint: "Medium" },

  // East & Northeast India
  { slug: "bhubaneswar", name: "Bhubaneswar", state: "Odisha", hubFocus: "handloom textiles and modern retail", searchVolumeHint: "High" },
  { slug: "cuttack", name: "Cuttack", state: "Odisha", hubFocus: "silver filigree and wholesale textile", searchVolumeHint: "Medium" },
  { slug: "ranchi", name: "Ranchi", state: "Jharkhand", hubFocus: "wholesale, kirana and hardware", searchVolumeHint: "Medium" },
  { slug: "jamshedpur", name: "Jamshedpur", state: "Jharkhand", hubFocus: "steel, auto spare parts and retail", searchVolumeHint: "Medium" },
  { slug: "guwahati", name: "Guwahati", state: "Assam", hubFocus: "tea, FMCG wholesale and Northeast retail", searchVolumeHint: "High" },
];
