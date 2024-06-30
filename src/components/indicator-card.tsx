import { useState } from "react";
import { cn } from "~/utils/cn";
import { MedicalIndicator } from "~/utils/indicator";

export interface IndicatorChipProps {
  indicator: MedicalIndicator;
  status: "high" | "low" | "normal";
  minimized?: boolean;
}

type IndicatorCardProps = {
  description: string;
} & IndicatorChipProps;

export const IndicatorChip: React.FC<IndicatorChipProps> = ({
  indicator,
  status,
  minimized = false,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={cn(
          "flex justify-between items-center p-1.5 pl-2 rounded-lg h-8 text-neutral-400 whitespace-nowrap",
          status !== "normal" && "text-red-500"
        )}
        style={{
          background:
            status !== "normal"
              ? "linear-gradient(89.516deg, #FFE9E9 37%, #FFEFE9 96%)"
              : "#F8F8F8",
        }}
      >
        <p className="font-medium font-mono text-sm">
          {indicator.label}
          {!minimized && `, ${indicator.unit}`}
        </p>
        <span className="bg-white/50 p-1 rounded-full text-xs">{status}</span>
      </div>
      {!minimized && status !== "normal" && (
        <div className="gap-2 grid grid-cols-2 text-neutral-400 duration-150">
          <button
            className="rounded-lg h-5 text-xs hover:text-neutral-500 whitespace-nowrap"
            style={{ boxShadow: "inset 0 0 4px #f4f4f4" }}
          >
            Узнать причины
          </button>
          <button
            className="rounded-lg h-5 text-xs hover:text-neutral-500 whitespace-nowrap"
            style={{ boxShadow: "inset 0 0 4px #f4f4f4" }}
          >
            Обратится к доктору
          </button>
        </div>
      )}
    </div>
  );
};

export const IndicatorCard: React.FC<IndicatorCardProps> = ({
  indicator,
  status,
  description,
}) => (
  <article className="flex flex-col gap-3 border-neutral-100 bg-white shadow-sm p-3 border rounded-xl w-[340px]">
    <IndicatorChip indicator={indicator} status={status} minimized />
    <p
      className={cn(
        "font-medium font-sans text-4xl",
        status !== "normal" && "text-red-500"
      )}
    >
      {indicator.value.toFixed(1)}
      <span className="text-sm"> {indicator.unit}</span>
    </p>
    <section className="space-y-4 font-mono text-balance text-neutral-400 text-sm leading-relaxed whitespace-pre">
      {description}
    </section>
  </article>
);
