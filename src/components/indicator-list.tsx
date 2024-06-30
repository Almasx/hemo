import { cn } from "~/utils/cn";
import { IndicatorChip, type IndicatorChipProps } from "./indicator-card";

type IndicatorListProps = {
  indicators: IndicatorChipProps[];
  className?: string;
};

export const IndicatorList: React.FC<IndicatorListProps> = ({
  indicators,
  className,
}) => {
  return (
    <article
      className={cn(
        "border-neutral-100 bg-white shadow-sm p-3 border rounded-xl",
        className
      )}
    >
      <header>Ваши показатели</header>
      <div className="flex flex-col gap-1.5 mt-3">
        {indicators.map((indicator, index) => (
          <IndicatorChip key={index} {...indicator} />
        ))}
      </div>
    </article>
  );
};
