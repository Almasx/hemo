import { z } from "zod";

export const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
  sex: z.enum(["male", "female"]),
  hemoglobin: z.coerce.number().describe("Гемоглобин, г/л"),
  hemoglobinErythrocyte: z
    .object({
      HGB: z.number().describe("Гемоглобин, г/л"),
      RBC: z.number().describe("Эритроциты, 10^12/л"),
      MCV: z.number().describe("Средний объём эритритроцита, фл"),
      RDW: z.number().describe("Распределение эритроцитов по объёму, %"),
      MCH: z.number().describe("Среднее содержание Hb в эритроците, пг"),
      MCHC: z.number().describe("Средняя концентрация Hb в эритроците, г/л"),
    })
    .describe("эритроциты и гемоглобин"),
  platelets: z
    .object({
      PLT: z.number().describe("Тромбоциты, 10^9/л"),
      MPV: z.number().describe("Средний объём тромбоцита, фл"),
    })
    .describe("тромбоциты"),
  leukocytes: z
    .object({
      WBC: z.number().describe("Лейкоциты, 10^9/л"),
      NEU: z.number().describe("Нейтрофилы, %"),
      EOS: z.number().describe("Эозинофилы, %"),
      BAS: z.number().describe("Базофилы, %"),
      MON: z.number().describe("Моноциты, %"),
      LYM: z.number().describe("Лимфоциты, %"),
      ESR: z.number().describe("СОЭ по Панченкову, мм/час"),
    })
    .describe("лейкоциты"),
});
