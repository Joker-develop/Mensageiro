import { Response } from "express";
import { ExtendedeRequest } from "../types/extended.request";
import { getTranding } from "../services/trend.hashtag.action";

export const getTrends = async (req: ExtendedeRequest, resp: Response) => {
    try {
        const trends = await getTranding();
        if ( trends.length > 0 ){
            return resp.status(200).json(trends)
        } else {
            return resp.status(200).json({ message: "not found trends"});
        }
    } catch (error) {
        
    }
}