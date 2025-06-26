import { z } from "zod";

export const userPostSchema = z.object({
  page: z.coerce.number().min(0).optional() 
});