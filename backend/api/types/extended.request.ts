import { Request } from "express";

export interface ExtendedeRequest extends Request {
    userId?: string;
}