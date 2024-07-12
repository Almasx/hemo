import { useMemo, useReducer } from "react";
import { Chip } from "~/components/chip";

type ToggleFieldsProps<T extends string> = {
  fieldVisibilityMap: Record<T, boolean>;
  showField: (field: T) => void;
};

export const ToggleFields = <T extends string>({
  fieldVisibilityMap,
  showField,
}: ToggleFieldsProps<T>) => {
  const hiddenFields = useMemo(
    () =>
      Object.keys(fieldVisibilityMap).filter(
        (field) => !fieldVisibilityMap[field as T]
      ) as T[],
    [fieldVisibilityMap]
  );

  return (
    <div className="flex gap-3">
      {hiddenFields.map((field) => (
        <Chip onClick={() => showField(field)} key={field}>
          {field}
        </Chip>
      ))}
    </div>
  );
};
