import { Response } from "express";
import { ExtendedeRequest } from "../types/extended.request";
import { searchSchema } from "../schemas/search.schema";
import { getfindPostByBodyOrAuthor } from "../services/post.action";

export const searchPosts = async (req: ExtendedeRequest, resp: Response) => {
    try {
        const safeData = searchSchema.safeParse(req.query);
        if ( !safeData.success ) return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
        
        const postByBodyOrAuthor = await getfindPostByBodyOrAuthor(safeData.data.q)

        if ( postByBodyOrAuthor.length > 0 ){
            return resp.status(200).json(postByBodyOrAuthor)
        } else {
            return resp.status(200).json({ message: "not found search post"});
        }
    } catch (error) {
        
    }
}