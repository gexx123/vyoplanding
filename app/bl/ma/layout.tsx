import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Manage Blog Posts | Vyop",
  },
  robots: { index: false, follow: false },
};

export default function BlMaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
