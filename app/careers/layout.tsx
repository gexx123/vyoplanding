import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Careers & Merchant Growth Roles | Vyop",
  },
  description:
    "Explore sales, merchant onboarding, software, and AI engineering opportunities at Vyop across retail markets in India.",
  alternates: { canonical: "/careers" },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
