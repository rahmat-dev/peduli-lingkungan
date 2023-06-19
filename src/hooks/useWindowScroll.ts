import { useCallback, useEffect, useLayoutEffect, useState } from "react";

type ScrollPosition = { x: number; y: number };

export function useWindowScroll(): [
  ScrollPosition,
  ({ x, y }: ScrollPosition) => void
] {
  const [state, setState] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  const scrollTo = useCallback(({ x, y }: ScrollPosition) => {
    window.scrollTo({ top: y, left: x, behavior: "smooth" });
  }, []);

  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      setState({ x: window.scrollX, y: window.scrollY });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [state, scrollTo];
}
