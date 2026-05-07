import { useEffect } from "react";

type KeyboardNavigationArgs = {
  onNext: () => void;
  onPrev: () => void;
};

export function useKeyboardNavigation({ onNext, onPrev }: KeyboardNavigationArgs) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        onNext();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrev();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev]);
}
