import NextLink, { type LinkProps } from "next/link";

import { cn } from "~/utils/ui";

const Link = ({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps) => (
  <NextLink
    className={cn(
      "link text-brand-500 no-underline hover:text-brand-300",
      className
    )}
    {...props}
  />
);

export default Link;
