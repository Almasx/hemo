import { cn } from "~/utils/cn";

interface Button {
  variant?: "primary" | "outline";
  size?: "md" | "sm" | "lg";
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
}: Button) => {
  return (
    <button
      className={cn(
        "rounded-xl border border-neutral-200 hover:scale-105 transform transition duration-200  ",
        size === "sm" && "px-2 py-1",
        size === "md" && "px-3 py-1.5",
        size === "lg" && "px-4 py-2",
        variant === "primary" &&
          "font-meduim bg-gradient-to-b from-neutral-50 to-neutral-100",
        className
      )}
    >
      {children}
    </button>
  );
};
