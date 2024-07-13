import { useMemo, useReducer } from "react";
import { Chip } from "~/components/chip";

type ToggleFieldsProps<T extends string> = {
  fieldVisibilityMap: Record<T, boolean>;
  labels: Record<T, string>;
  showField: (field: T) => void;
};

export const ToggleFields = <T extends string>({
  fieldVisibilityMap,
  showField,
  labels,
}: ToggleFieldsProps<T>) => {
  const hiddenFields = useMemo(
    () =>
      Object.keys(fieldVisibilityMap).filter(
        (field) => !fieldVisibilityMap[field as T]
      ) as T[],
    [fieldVisibilityMap]
  );

  return (
    <div className="flex flex-wrap gap-2 col-span-full">
      {hiddenFields.map((field) => (
        <Chip onClick={() => showField(field)} key={field}>
          {labels[field]}
        </Chip>
      ))}
    </div>
  );
};
