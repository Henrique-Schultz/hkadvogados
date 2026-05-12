import { useEffect, useRef, useState } from "react";

interface UseHeaderVisibilityProps {
  headerInteraction: boolean;
}

export function useHeaderVisibility({
  headerInteraction,
}: UseHeaderVisibilityProps) {
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ignora scrolls da navbar
      if (headerInteraction) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // topo
      if (currentScrollY < 50) {
        setIsVisible(true);
      }

      // subindo
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      // descendo
      else {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerInteraction]);

  return { isVisible };
}
