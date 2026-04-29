"use client";

import { useEffect } from "react";

export default function BlogViewTracker({ id, slug }: { id?: string; slug?: string }) {
  useEffect(() => {
    const trackView = async () => {
      try {
        const key = `vyop_blog_viewed_${id || slug}`;
        const hasViewed = localStorage.getItem(key);
        
        if (!hasViewed) {
          await fetch("/api/blogs/view", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, slug }),
          });
          localStorage.setItem(key, "true");
        }
      } catch (err) {
        console.error("Failed to track blog view:", err);
      }
    };

    trackView();
  }, [id, slug]);

  return null;
}
