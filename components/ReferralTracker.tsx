"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ReferralTracker() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref) {
      // Store the referral code in localStorage for attribution during signup
      localStorage.setItem("vyop_referral_code", ref);
      console.log("Referral captured:", ref);
      
      // Optional: Set a cookie for server-side access if needed
      document.cookie = `vyop_ref=${ref}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
    }
  }, [searchParams]);

  return null;
}
