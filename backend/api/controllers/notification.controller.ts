import { Response } from "express";
import { ExtendedeRequest } from "../types/extended.request";
import { getNotifications, markNotificationsAsRead } from "../services/notification.action";
import { findUserByUserName } from "../services/user.action";


export const getAllNotifications = async (req: ExtendedeRequest, resp: Response) => {
    try {

        const { username } = req.params;
        const hasUserName = await findUserByUserName(username);
        if ( !hasUserName ) return resp.status(404).json({ error: "Usuário não encontrado." });
        
        const notifications = await getNotifications(hasUserName.id);
        if ( notifications.length > 0 ){
            return resp.status(200).json(notifications)
        } else {
            return resp.status(200).json([]);
        }
    } catch (error) {
        console.error("Erro no Controlador do GetAllNotifications ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}

export const getMarkNotificationsAsRead = async (req: ExtendedeRequest, resp: Response) => {
    const { username } = req.params;
    const hasUserName = await findUserByUserName(username);
    if ( !hasUserName ) return resp.status(404).json({ error: "Usuário não encontrado." });
    
    const notificationsData = await getNotifications(hasUserName.id);
    console.log({notificationsData})
    const unreadIds = notificationsData.filter((n) => !n.read).map((items) => items.id)
    
    const getNotificationsAsRead = await markNotificationsAsRead(unreadIds)
        
    if ( getNotificationsAsRead ){
        return resp.status(200).json(getNotificationsAsRead)
    } else {
        return resp.status(200).json({ message: "not found getNotificationsAsRead"});
    }
}