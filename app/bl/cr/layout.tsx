import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Create Blog Post | Vyop",
  },
  robots: { index: false, follow: false },
};

export default function BlCrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
