import { z } from "zod";

export const searchSchema = z.object({
  q: z.string({ message: "Preencha o campo de pesquisa" }).min(3, "Mínimo de 3 caracteres")
});