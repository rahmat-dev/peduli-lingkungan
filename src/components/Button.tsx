import { cn } from "~/utils/ui";

interface ButtonProps extends React.ComponentProps<"button"> {
  isLoading?: boolean;
}

const Button = ({ isLoading, className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "btn border-brand-500 bg-brand-500 text-base normal-case text-base-100 hover:border-brand-600 hover:bg-brand-600",
        className
      )}
      {...props}
    >
      {isLoading && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
};

export default Button;
