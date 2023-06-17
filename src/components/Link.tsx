import NextLink, { type LinkProps } from "next/link";

import { cn } from "~/utils/ui";

const Link = ({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps) => (
  <NextLink
    className={cn("link-accent link no-underline", className)}
    {...props}
  />
);

export default Link;
