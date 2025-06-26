import { z } from "zod";

export const signInSchema = z.object({
  clerkId: z.string(),
  email: z.string().email("E-mail inválido"),
});
