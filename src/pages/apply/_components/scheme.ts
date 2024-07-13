import { z } from "zod";

export const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.coerce.number(),
  sex: z.enum(["male", "female"]),
  hemoglobin: z.coerce.number().describe("Гемоглобин, г/л"),
  hemoglobinErythrocyte: z
    .object({
      HGB: z.coerce.number().describe("Гемоглобин, г/л").optional(),
      RBC: z.coerce.number().describe("Эритроциты, 10^12/л").optional(),
      MCV: z.coerce
        .number()
        .describe("Средний объём эритритроцита, фл")
        .optional(),
      RDW: z
        .number()
        .describe("Распределение эритроцитов по объёму, %")
        .optional(),
      MCH: z
        .number()
        .describe("Среднее содержание Hb в эритроците, пг")
        .optional(),
      MCHC: z
        .number()
        .describe("Средняя концентрация Hb в эритроците, г/л")
        .optional(),
    })
    .describe("эритроциты и гемоглобин"),
  platelets: z
    .object({
      PLT: z.coerce.number().describe("Тромбоциты, 10^9/л").optional(),
      MPV: z.coerce
        .number()
        .describe("Средний объём тромбоцита, фл")
        .optional(),
    })
    .describe("тромбоциты"),
  leukocytes: z
    .object({
      WBC: z.coerce.number().describe("Лейкоциты, 10^9/л").optional(),
      NEU: z.coerce.number().describe("Нейтрофилы, %").optional(),
      EOS: z.coerce.number().describe("Эозинофилы, %").optional(),
      BAS: z.coerce.number().describe("Базофилы, %").optional(),
      MON: z.coerce.number().describe("Моноциты, %").optional(),
      LYM: z.coerce.number().describe("Лимфоциты, %").optional(),
      ESR: z.coerce.number().describe("СОЭ по Панченкову, мм/час").optional(),
    })
    .describe("лейкоциты"),
});
