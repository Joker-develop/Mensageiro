import { z } from "zod";

export const commentPostSchema = z.object({
  content: z.string({ message: "O Comentário precisa ter conteúdo." }),
});