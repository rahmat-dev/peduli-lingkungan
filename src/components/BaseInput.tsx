import { type InputHTMLAttributes, forwardRef } from "react";

import { cn } from "~/utils/ui";

const BaseInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn("input w-full border-2 border-slate-400", className)}
      {...props}
    />
  );
});

BaseInput.displayName = "BaseInput";

export default BaseInput;
