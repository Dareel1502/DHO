import { useEffect, useRef } from "react";

/**
 * Adds an `is-visible` class once the element scrolls into view.
 * Pair with the `.reveal` class in index.css. No-ops gracefully
 * if IntersectionObserver isn't available.
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
