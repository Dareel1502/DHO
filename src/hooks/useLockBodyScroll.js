import { useEffect } from "react";

// Locks page scroll while `locked` is true (i.e. while a modal is open),
// and dispatches a custom "modal-escape" event when the user presses Escape
// so any open modal can listen for it and close itself.
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        window.dispatchEvent(new CustomEvent("modal-escape"));
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [locked]);
}
