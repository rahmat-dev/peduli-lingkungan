import { ArrowUp } from "lucide-react";

import Button from "~/components/Button";
import { useWindowScroll } from "~/hooks/useWindowScroll";
import { cn } from "~/utils/ui";

const ScrollToTop = () => {
  const [{ y }, scrollTo] = useWindowScroll();

  return (
    <Button
      className={cn(
        // "fixed bottom-4 right-4 z-50 grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-white opacity-0 transition duration-500",
        // {
        //   "opacity-100": y > 80,
        // }
        "btn-square fixed -bottom-10 right-4 z-50 grid place-items-center rounded-full bg-brand-500 text-white opacity-0 transition-all duration-300",
        {
          "bottom-4 opacity-100": y > 80,
        }
      )}
      onClick={() => scrollTo({ x: 0, y: 0 })}
    >
      <ArrowUp />
    </Button>
  );
};

export default ScrollToTop;
