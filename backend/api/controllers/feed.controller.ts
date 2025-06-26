import { Response } from "express";
import { ExtendedeRequest } from "../types/extended.request";
import { getPosts } from "../services/post.action";

export const feedPosts = async (req: ExtendedeRequest, resp: Response) => {
    try {
        const pots = await getPosts();
        if ( pots.length > 0 ){
            return resp.status(200).json(pots)
        } else {
            return resp.status(200).json({ message: "not fecth post"});
        }
    } catch (error) {
        
    }
}