import { z } from "zod";

export const signUpSchema = z.object({
  clerkId: z.string(),
  name: z.string().min(2, "Precisa ter 2 ou mais caracteres < LETRAS >"),
  username: z.string().min(2, "Precisa ter 2 ou mais caracteres < LETRAS >"),
  email: z.string().email("E-mail inválido"),
  profileImg: z.string(),
  coverImg: z.string().optional(),
});
