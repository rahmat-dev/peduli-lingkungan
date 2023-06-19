import type { InputHTMLAttributes } from "react";

import { cn } from "~/utils/ui";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio = ({ label, className, ...props }: RadioProps) => {
  return (
    <div className="form-control">
      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="radio"
          className={cn("radio radio-sm checked:bg-brand-500", className)}
          {...props}
        />
        <span className="label-text">{label}</span>
      </label>
    </div>
  );
};

export default Radio;
