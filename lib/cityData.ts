export interface CityData {
  slug: string;
  name: string;
  state: string;
  hubFocus: string;
  searchVolumeHint: string;
}

export const cities: CityData[] = [
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan", hubFocus: "textile and jewellery", searchVolumeHint: "High" },
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", hubFocus: "wholesale and retail", searchVolumeHint: "Very High" },
  { slug: "delhi", name: "Delhi", state: "Delhi", hubFocus: "electronics and garments", searchVolumeHint: "Very High" },
  { slug: "surat", name: "Surat", state: "Gujarat", hubFocus: "diamond and textile", searchVolumeHint: "High" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", hubFocus: "garments and trading", searchVolumeHint: "High" },
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", hubFocus: "chikan and general stores", searchVolumeHint: "Medium" },
  { slug: "patna", name: "Patna", state: "Bihar", hubFocus: "kirana and wholesale", searchVolumeHint: "Medium" },
  { slug: "indore", name: "Indore", state: "Madhya Pradesh", hubFocus: "namkeen and textiles", searchVolumeHint: "High" },
  { slug: "pune", name: "Pune", state: "Maharashtra", hubFocus: "auto parts and retail", searchVolumeHint: "High" },
  { slug: "bangalore", name: "Bangalore", state: "Karnataka", hubFocus: "electronics and fashion", searchVolumeHint: "Very High" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", hubFocus: "pearls and pharma retail", searchVolumeHint: "High" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", hubFocus: "auto and textiles", searchVolumeHint: "High" },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal", hubFocus: "garments and sweets", searchVolumeHint: "High" },
  { slug: "kanpur", name: "Kanpur", state: "Uttar Pradesh", hubFocus: "leather and hardware", searchVolumeHint: "Medium" },
  { slug: "ludhiana", name: "Ludhiana", state: "Punjab", hubFocus: "hosiery and auto parts", searchVolumeHint: "Medium" },
  { slug: "agra", name: "Agra", state: "Uttar Pradesh", hubFocus: "footwear and petha", searchVolumeHint: "Medium" },
  { slug: "nagpur", name: "Nagpur", state: "Maharashtra", hubFocus: "oranges and general retail", searchVolumeHint: "Medium" },
  { slug: "rajkot", name: "Rajkot", state: "Gujarat", hubFocus: "engineering goods and retail", searchVolumeHint: "Medium" },
  { slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh", hubFocus: "silk sarees and handicrafts", searchVolumeHint: "Medium" },
  { slug: "meerut", name: "Meerut", state: "Uttar Pradesh", hubFocus: "sports goods and jewelry", searchVolumeHint: "Medium" },
];
