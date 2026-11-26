import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Merchant Community & Feature Requests | Vyop",
  },
  description:
    "Share feedback, discuss billing workflows, and connect with retail store owners and the Vyop product team.",
  alternates: { canonical: "/community" },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
