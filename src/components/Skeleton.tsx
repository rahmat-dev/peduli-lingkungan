import { cn } from "~/utils/ui";

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("animate-pulse rounded-md bg-slate-700", className)}
    {...props}
  />
);

export default Skeleton;
