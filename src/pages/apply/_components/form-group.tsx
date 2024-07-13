import type { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "~/components/form";
import { Input } from "~/components/input";
import { useLabels, useSubForm } from "./utils";

type FormGroupProps = {
  form: UseFormReturn<any>;
  subFormScheme: any;
  onHide?: () => void;
};

export const FormGroup = ({ form, subFormScheme, onHide }: FormGroupProps) => {
  const subForm = useSubForm<any>(form);
  const labels = useLabels(subFormScheme);

  return (
    <div className="flex flex-col gap-3 col-span-2 my-3">
      <h3 className="flex justify-between items-center font-mono text-neutral-300 text-sm uppercase">
        {subFormScheme.description}
        <Hide onHide={onHide} />
      </h3>
      {Object.keys(subFormScheme.shape).map((fieldKey) => (
        <FormField
          key={fieldKey}
          control={subForm.control}
          name={`${subFormScheme.description}.${fieldKey}` as any}
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>{labels[fieldKey] as string}</FormLabel>
              <FormControl>
                <Input
                  placeholder={`Введите ${labels[fieldKey] as string}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </div>
  );
};

export const Hide: React.FC<{ onHide?: () => void }> = ({ onHide }) => {
  return (
    <div
      onClick={onHide}
      className="place-items-center grid bg-gradient-to-b from-neutral-50 hover:from-red-50 to-neutral-100 hover:to-red-100 rounded-md text-neutral-400 hover:text-red-400 duration-300 aspect-square size-[18px]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.11279 12.8873L12.8875 7.11262"
          stroke="currentColor"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.11279 7.11267L12.8875 12.8874"
          stroke="currentColor"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
