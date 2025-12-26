"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollHandler() {
  const pathname = usePathname();
  const hasScrolledRef = useRef<string | null>(null);

  useEffect(() => {
    // Only handle scrolling on home page
    if (pathname !== "/") {
      hasScrolledRef.current = null;
      return;
    }

    const scrollToSection = (id: string) => {
      // Prevent scrolling to the same section multiple times
      if (hasScrolledRef.current === id) return;
      
      const element = document.getElementById(id);
      if (element) {
        hasScrolledRef.current = id;
        const offset = 80; // Account for sticky header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Clear hash from URL immediately to prevent re-triggering
        if (window.location.hash) {
          window.history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
          );
        }
      }
    };

    // Small delay to ensure page is fully rendered
    const timeoutId = setTimeout(() => {
      // Check for scrollTo in sessionStorage first (from navigation from other pages)
      const scrollTo = sessionStorage.getItem("scrollTo");
      if (scrollTo) {
        sessionStorage.removeItem("scrollTo");
        scrollToSection(scrollTo);
        return;
      }

      // Check for hash in URL (fallback)
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        scrollToSection(hash);
      }
    }, 100);

    // Cleanup timeout on unmount or pathname change
    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}

