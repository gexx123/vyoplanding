import Link from "next/link";
import { cities } from "@/lib/cityData";

const TOP_CITIES = ["bangalore", "surat", "mumbai", "delhi", "ahmedabad", "jaipur", "hyderabad", "pune"];

interface CityHubsSectionProps {
  title?: string;
  subtitle?: string;
}

export default function CityHubsSection({
  title = "Free Billing Software in Your City",
  subtitle = "Skip ₹15,000+ dealer fees. Download Vyop directly on your smartphone and start billing in 30 seconds — trusted by shopkeepers in 65+ Indian commercial hubs.",
}: CityHubsSectionProps = {}) {
  const topCities = cities.filter((c) => TOP_CITIES.includes(c.slug));
  const otherCities = cities.filter((c) => !TOP_CITIES.includes(c.slug)).slice(0, 12);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#FAF8F5] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Available Across India
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)]">
            {subtitle}
          </p>
        </div>

        {/* Top Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {topCities.map((city) => (
            <Link
              key={city.slug}
              href={`/billing-software/${city.slug}`}
              className="group bg-white rounded-2xl p-5 border border-gray-200/80 hover:border-amber-400 hover:shadow-lg transition-all"
            >
              <h3
                className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {city.name}
              </h3>
              <p className="text-xs text-gray-500 mb-3 line-clamp-1">
                {city.hubFocus.charAt(0).toUpperCase() + city.hubFocus.slice(1)}
              </p>
              <span className="text-xs font-semibold text-amber-600 group-hover:text-amber-700">
                Free Billing →
              </span>
            </Link>
          ))}
        </div>

        {/* More Cities Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {otherCities.map((city) => (
            <Link
              key={city.slug}
              href={`/billing-software/${city.slug}`}
              className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-600 hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50/50 transition-all"
            >
              {city.name}
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/billing-software"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[var(--brand-primary)] text-white font-bold text-base hover:scale-[1.02] transition-all shadow-md hover:shadow-lg"
          >
            View All 65+ Cities
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
