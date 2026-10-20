import Link from "next/link";
import { staticBlogs } from "@/lib/staticBlogs";

interface RelatedPostsProps {
  currentSlug: string;
}

export default function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const otherPosts = staticBlogs
    .filter((b) => b.slug !== currentSlug && b.status === "Published")
    .slice(0, 3);

  const featuredTools = [
    { name: "GST Calculator", href: "/tools/gst-calculator", desc: "Calculate CGST/SGST/IGST instantly" },
    { name: "Barcode Generator", href: "/tools/barcode-generator", desc: "Generate Code 128 barcodes free" },
    { name: "Online Invoice Generator", href: "/tools/invoice-generator", desc: "Create professional GST invoices" },
    { name: "HSN Code Finder", href: "/tools/hsn-code-finder", desc: "Search GST rates for 10,000+ goods" },
  ];

  return (
    <div className="mt-16 pt-12 border-t border-gray-200">
      <h3
        className="text-2xl font-bold text-gray-900 mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Recommended Articles &amp; Free Business Tools
      </h3>

      {otherPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {otherPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-5 rounded-2xl bg-gray-50 hover:bg-amber-50/50 border border-gray-200 hover:border-amber-300 transition-all duration-200"
            >
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                {post.category}
              </span>
              <h4 className="text-base font-bold text-gray-900 group-hover:text-amber-800 transition-colors mt-1 mb-2 line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}

      {/* Quick Tools Grid */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
          Popular Free Tools for Shopkeepers
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {featuredTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="p-3.5 rounded-xl border border-gray-200 hover:border-amber-400 hover:bg-amber-50/30 transition-all group"
            >
              <p className="text-xs font-bold text-gray-900 group-hover:text-amber-800 transition-colors">
                {tool.name}
              </p>
              <p className="text-[11px] text-gray-500 mt-1 line-clamp-1">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
