import type { SelectHTMLAttributes } from "react";

import { cn } from "~/utils/ui";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string | number }[];
}

const Select = ({
  label,
  className,
  options,
  placeholder,
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
        <option>{placeholder}</option>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
