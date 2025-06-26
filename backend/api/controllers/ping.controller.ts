import { Request, Response } from "express";
import { ExtendedeRequest } from "../types/extended.request";
import { prisma } from "../lib/utils/prisma";
import { findProfileUserByUsername } from "../services/user.action";

import { clerkClient, getAuth } from '@clerk/express'
import { idUserSchema } from "../schemas/idUserSchema.schema";

export const ping = async ( req: ExtendedeRequest, resp: Response) => {
    const { userId } = getAuth(req)

  // Use Clerk's JavaScript Backend SDK to get the user's User object
  const user = await clerkClient.users.getUser(userId!)

  return resp.json({ user })
}

export const privatePing = async ( req: ExtendedeRequest, resp: Response) => {

    try {

        const safeData = idUserSchema.safeParse(req.body);    
        if (!safeData.success) return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
        

        const user = await findProfileUserByUsername(safeData.data.username);
        if ( !user ) return resp.status(404).json({ message: "Usuário não encontrado" })

        resp.status(200).json(user)
    } catch (error) {
        console.error("Erro no Controlador do PrivatePing ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
    
}
