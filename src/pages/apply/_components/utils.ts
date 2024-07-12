import { useCallback, useMemo, useReducer, useState } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";

export const useSubForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
>(
  form: any
) => form as unknown as UseFormReturn<TFieldValues, TContext>;

export const useFieldsVisibility = <
  T extends string,
  FieldVisibilityMap extends Record<T, boolean>
>(
  fields: T[]
) => {
  const [fieldVisibilityMap, setComponentVisibility] =
    useState<FieldVisibilityMap>(
      fields.reduce(
        (acc, current) => ({ ...acc, [current]: false }),
        {} as FieldVisibilityMap
      )
    );

  const toggleVisibility = useCallback((field: T, visibility: boolean) => {
    setComponentVisibility({
      ...fieldVisibilityMap,
      [field]: visibility,
    });
  }, []);

  const showField = useCallback(
    (field: T) => toggleVisibility(field, true),
    [toggleVisibility]
  );
  const hideField = useCallback(
    (field: T) => toggleVisibility(field, false),
    [toggleVisibility]
  );

  return { fieldVisibilityMap, showField, hideField };
};
