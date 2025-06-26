import { z } from "zod";

export const idUserSchema = z.object({
    username: z.string(),
});