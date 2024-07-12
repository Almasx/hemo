import type { FieldValues, UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "~/components/form";
import { Input } from "~/components/input";
import { useSubForm } from "./utils";
import { z } from "zod";

const formScheme = z.object({
  HGB: z.number(),
  RBC: z.number(),
  MCV: z.number(),
  MCH: z.number(),
  MCHC: z.number(),
  RDW: z.number(),
});

type FormSchema = z.infer<typeof formScheme>;

type HemoglobinErythrocyteValues = {
  hemoglobinErythrocyte?: FormSchema;
};

const HemoglobinErythrocyte = <T extends FieldValues>({
  parentForm,
}: {
  parentForm: UseFormReturn<T & HemoglobinErythrocyteValues>;
}) => {
  const form = useSubForm<HemoglobinErythrocyteValues>(parentForm);

  return (
    <>
      <FormField
        control={form.control}
        name="hemoglobinErythrocyte.HGB"
        render={({ field }) => (
          <FormItem className="col-span-full">
            <FormLabel>Гемоглобин, HGB, г/л</FormLabel>
            <FormControl>
              <Input placeholder="Введите гемоглобин, HGB, г/л" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

HemoglobinErythrocyte.schema = formScheme;

export { HemoglobinErythrocyte };
