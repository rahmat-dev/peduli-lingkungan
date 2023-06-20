import type { SelectHTMLAttributes } from "react";

import { cn } from "~/utils/ui";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string | number }[];
  error?: string;
}

const Select = ({
  label,
  className,
  options,
  placeholder,
  error,
  ...props
}: SelectProps) => {
  return (
    <div className="form-control">
      <label className="label mb-2 p-0">
        <span className="label-text">{label}</span>
      </label>
      <select
        className={cn("select border-2 border-slate-400", className)}
        {...props}
      >
        {placeholder && (
          <option disabled value="">
            {placeholder}
          </option>
        )}
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <span className="mt-2 text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Select;
