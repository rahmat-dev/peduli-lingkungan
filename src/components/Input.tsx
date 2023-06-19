import { type InputHTMLAttributes, forwardRef } from "react";

import BaseInput from "~/components/BaseInput";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="form-control w-full">
        {label && (
          <label className="label mb-2 p-0">
            <span className="label-text">{label}</span>
          </label>
        )}
        <BaseInput ref={ref} {...props} />
        {error && <span className="mt-2 text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
