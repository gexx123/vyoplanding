import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Verify Internship Certificate | Vyop",
  },
  description:
    "Verify the authenticity of an official Vyop internship credential or completion certificate using its unique certificate ID.",
  alternates: { canonical: "/internship/verify" },
};

export default function InternshipVerifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
