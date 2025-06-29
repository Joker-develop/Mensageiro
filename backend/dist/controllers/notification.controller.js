"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkNotificationsAsRead = exports.getAllNotifications = void 0;
const notification_action_1 = require("../services/notification.action");
const user_action_1 = require("../services/user.action");
const getAllNotifications = async (req, resp) => {
    try {
        const { username } = req.params;
        const hasUserName = await (0, user_action_1.findUserByUserName)(username);
        if (!hasUserName)
            return resp.status(404).json({ error: "Usuário não encontrado." });
        const notifications = await (0, notification_action_1.getNotifications)(hasUserName.id);
        if (notifications.length > 0) {
            return resp.status(200).json(notifications);
        }
        else {
            return resp.status(200).json([]);
        }
    }
    catch (error) {
        console.error("Erro no Controlador do GetAllNotifications ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.getAllNotifications = getAllNotifications;
const getMarkNotificationsAsRead = async (req, resp) => {
    const { username } = req.params;
    const hasUserName = await (0, user_action_1.findUserByUserName)(username);
    if (!hasUserName)
        return resp.status(404).json({ error: "Usuário não encontrado." });
    const notificationsData = await (0, notification_action_1.getNotifications)(hasUserName.id);
    console.log({ notificationsData });
    const unreadIds = notificationsData.filter((n) => !n.read).map((items) => items.id);
    const getNotificationsAsRead = await (0, notification_action_1.markNotificationsAsRead)(unreadIds);
    if (getNotificationsAsRead) {
        return resp.status(200).json(getNotificationsAsRead);
    }
    else {
        return resp.status(200).json({ message: "not found getNotificationsAsRead" });
    }
};
exports.getMarkNotificationsAsRead = getMarkNotificationsAsRead;
