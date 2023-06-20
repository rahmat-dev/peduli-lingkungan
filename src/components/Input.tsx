import type { Icon } from "lucide-react";
import { type InputHTMLAttributes, forwardRef } from "react";

import BaseInput from "~/components/BaseInput";
import { cn } from "~/utils/ui";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  LeftIcon?: Icon;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, LeftIcon, className, ...props }, ref) => {
    return (
      <div className="form-control w-full">
        {label && (
          <label className="label mb-2 p-0">
            <span className="label-text">{label}</span>
          </label>
        )}
        <div className="relative">
          {LeftIcon && <LeftIcon />}
          <BaseInput
            ref={ref}
            className={cn({ "pl-14": LeftIcon }, className)}
            {...props}
          />
        </div>
        {error && <span className="mt-2 text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
