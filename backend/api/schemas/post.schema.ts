import { z } from "zod";

export const postSchema = z.object({
  content: z.string({ message: "O Post precisa ter conteúdo." }),
  postImage: z.string().optional(),
});