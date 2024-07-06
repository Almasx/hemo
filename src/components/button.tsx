import { cn } from "~/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "md" | "sm" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "rounded-xl border border-neutral-200 hover:scale-105 transform transition duration-200 bg-white ",
        size === "sm" && "px-2 py-1",
        size === "md" && "px-3 py-1.5 leading-4",
        size === "lg" && "px-4 py-2",
        variant === "primary" &&
          "font-meduim bg-gradient-to-b from-neutral-50 to-neutral-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
