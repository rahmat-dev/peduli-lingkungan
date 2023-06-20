import type { InputHTMLAttributes } from "react";

import { cn } from "~/utils/ui";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = ({ label, className, ...props }: CheckboxProps) => {
  return (
    <div className="form-control">
      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          className={cn("checkbox checked:checkbox-success", className)}
          {...props}
        />
        <span className="label-text text-base">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
