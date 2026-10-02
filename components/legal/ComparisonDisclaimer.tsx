import React from "react";
import { ShieldCheck, Info } from "lucide-react";

interface ComparisonDisclaimerProps {
  competitorName?: string;
  companyName?: string;
  lastUpdated?: string;
}

export default function ComparisonDisclaimer({
  competitorName,
  companyName,
  lastUpdated = "October 2026",
}: ComparisonDisclaimerProps) {
  return (
    <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-200 text-xs text-gray-500 leading-relaxed font-sans">
      <div className="flex items-center gap-2 font-bold text-gray-700 text-sm mb-3">
        <ShieldCheck className="w-4 h-4 text-gray-600" />
        <span>Legal Disclaimer &amp; Fair Comparison Notice</span>
      </div>

      <p className="mb-2.5">
        <strong>Trademarks &amp; Ownership:</strong> All product names, logos, brands, and registered trademarks mentioned on this page
        {competitorName ? ` (including ${competitorName}${companyName ? ` by ${companyName}` : ""})` : ""} are the property of their respective owners. Their use on this website is strictly for identification, descriptive, and comparative review purposes under the doctrine of nominative fair use as recognized by Section 30(1) of the Indian Trade Marks Act, 1999.
      </p>

      <p className="mb-2.5">
        <strong>No Affiliation or Endorsement:</strong> Vyop is an independent software application. The comparison presented is solely the assessment of Vyop and does not imply any sponsorship, endorsement, partnership, or affiliation with {competitorName || "the third-party brands mentioned"}.
      </p>

      <p className="mb-2.5">
        <strong>Data Accuracy &amp; Verifiability:</strong> Pricing, feature availability, hardware requirements, and service specifications cited above are derived from publicly published data, official websites, marketing documentation, and third-party public reviews as of <strong>{lastUpdated}</strong>. Because commercial software offerings, pricing tiers, and terms change over time, Vyop does not warrant that all specifications are continuously up to the minute. Users are strongly advised to independently verify current pricing and feature availability directly on the respective vendors&apos; official websites prior to making any purchasing or licensing decision.
      </p>

      <p className="text-gray-400">
        <strong>Notice to Rights Holders:</strong> We strive for 100% factual accuracy, fairness, and transparency. If you represent any brand referenced on this page and believe any data point is outdated, inaccurate, or requires correction, please write to us at{" "}
        <a href="mailto:vyop4shop@gmail.com" className="text-gray-700 underline font-semibold hover:text-black">
          vyop4shop@gmail.com
        </a>
        . We review and verify all update requests within 48 business hours.
      </p>
    </div>
  );
}
