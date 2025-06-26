import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(2, "Precisa ter 2 ou mais caracteres < LETRAS >").optional(),
    profileImg: z.string().optional(),
    coverImg: z.string().optional(),
    bio: z.string().optional(),
    location: z.string().optional(),
    website: z.string().url("Precisa ser uma URL válida").optional(),
});

export const userImageSchema = z.object({
    prifileImg: z.string().optional(),
    coverImg: z.string().optional(),
});