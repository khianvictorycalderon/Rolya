import { useEffect } from "react";

export const useOnScrollAt = (
  elementId: string,
  onVisible: () => void,
  onHidden: () => void
) => {
  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();

      const halfWindowHeight = window.innerHeight / 2;
      const isVisible = rect.top < halfWindowHeight && rect.bottom > halfWindowHeight / 2;

      if (isVisible) {
        onVisible();
      } else {
        onHidden();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementId, onVisible, onHidden]);
};


export const slideToID = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
};