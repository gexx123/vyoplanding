import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** If true, only render JSON-LD without visible breadcrumbs */
  jsonLdOnly?: boolean;
}

export default function Breadcrumbs({ items, jsonLdOnly = false }: BreadcrumbsProps) {
  // Always include Home
  const fullItems: BreadcrumbItem[] = [
    { label: "Home", href: "https://vyop.in" },
    ...items,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href.startsWith("http") ? item.href : `https://vyop.in${item.href}`,
    })),
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Visible breadcrumb navigation */}
      {!jsonLdOnly && (
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-6 pt-28 pb-2"
        >
          <ol className="flex flex-wrap items-center gap-1.5 text-sm">
            {fullItems.map((item, index) => {
              const isLast = index === fullItems.length - 1;
              return (
                <li key={item.href} className="flex items-center gap-1.5">
                  {index > 0 && (
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                      aria-hidden="true"
                    >
                      ›
                    </span>
                  )}
                  {isLast ? (
                    <span
                      className="font-medium"
                      style={{
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-body)",
                      }}
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="transition-colors duration-200 hover:text-[var(--brand-primary)]"
                      style={{
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </>
  );
}
