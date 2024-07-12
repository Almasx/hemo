import { cn } from "~/utils/cn";
import { Plus } from "lucide-react";
export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Chip({ className, children, ...props }: ChipProps) {
  return (
    <div
      className={cn(
        "whitespace-nowrap bg-gradient-to-b from-neutral-50 to-neutral-100 rounded-lg p-1 pr-2 font-mono text-neutral-400 hover:text-neutral-500 duration-300 group text-sm inline-flex max-w-fit gap-1.5 items-center",
        className
      )}
      {...props}
    >
      <div className="group-hover:text-red-400 place-items-center grid bg-gradient-to-b from-white to-neutral-50 shadow-sm border-red-400 rounded-md duration-150 aspect-square size-[18px]">
        <Plus size={14} />
      </div>
      {children}
    </div>
  );
}
