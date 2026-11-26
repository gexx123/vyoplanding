import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Software, AI & Growth Internships | Vyop",
  },
  description:
    "Apply for engineering, AI, and merchant growth internships at Vyop or verify an official Vyop internship certificate online.",
  alternates: { canonical: "/internship" },
};

export default function InternshipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
