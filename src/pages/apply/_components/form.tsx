import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../components/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../../components/form";
import { Input } from "../../../components/input";
import { Tabs, TabsList, TabsTrigger } from "../../../components/tabs";
import { ToggleFields } from "./toggle-fields";
import { HemoglobinErythrocyte } from "./hemo-form";
import { useFieldsVisibility } from "./utils";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
  sex: z.enum(["male", "female"]),
  hemoglobin: z.coerce.number(),
  hemoglobinErythrocyte: HemoglobinErythrocyte.schema,
});

const ApplyForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { sex: "female" },
  });

  const { fieldVisibilityMap, showField } = useFieldsVisibility([
    "эритроциты и гемоглобин",
  ] as const);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <div className="gap-3 grid grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваше Имя</FormLabel>
                <FormControl>
                  <Input placeholder="Введите ваше имя" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваша Почта</FormLabel>
                <FormControl>
                  <Input placeholder="Введите вашу почту" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваш Возраст</FormLabel>
                <FormControl>
                  <Input placeholder="Введите ваш возраст" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sex"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваш Пол</FormLabel>
                <FormControl>
                  <Tabs
                    className="w-full"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <TabsList className="w-full">
                      <TabsTrigger
                        value="male"
                        className="px-1.5 py-0.5 rounded-[10px]"
                      >
                        Мужской
                      </TabsTrigger>
                      <TabsTrigger
                        value="female"
                        className="px-1.5 py-0.5 rounded-[10px]"
                      >
                        Женский
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hemoglobin"
            render={({ field }) => (
              <FormItem className="col-span-full">
                <FormLabel>Гемоглобин, HGB, г/л</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Введите гемоглобин, HGB, г/л"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {fieldVisibilityMap["эритроциты и гемоглобин"] && (
            <HemoglobinErythrocyte parentForm={form} />
          )}

          <ToggleFields
            fieldVisibilityMap={fieldVisibilityMap}
            showField={showField}
          />
        </div>

        <Button type="submit" className="ml-auto">
          Отправить
        </Button>
      </form>
    </Form>
  );
};

export { ApplyForm };
