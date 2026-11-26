import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Partner & Work With Vyop | Sales & Internships",
  },
  description:
    "Join Vyop as a field sales partner onboarding retail stores or apply for engineering and product internships across India.",
  alternates: { canonical: "/work-with-us" },
};

export default function WorkWithUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
