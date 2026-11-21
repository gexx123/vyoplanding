"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect if the user is on an iOS device (iPhone, iPad, iPod)
 * or testing iOS via URL parameter (?ios=true or ?platform=ios).
 */
export function useIsIOS() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") return;

    const ua = navigator.userAgent || "";
    const isIosUA = /iPad|iPhone|iPod/.test(ua);
    const isIpadOS =
      navigator.platform === "MacIntel" &&
      typeof navigator.maxTouchPoints === "number" &&
      navigator.maxTouchPoints > 1;

    const isTestMode =
      window.location.search.includes("ios=true") ||
      window.location.search.includes("platform=ios");

    setIsIOS(Boolean(isIosUA || isIpadOS || isTestMode));
  }, []);

  return isIOS;
}
