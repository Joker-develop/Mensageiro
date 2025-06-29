"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.privatePing = exports.ping = void 0;
const user_action_1 = require("../services/user.action");
const express_1 = require("@clerk/express");
const idUserSchema_schema_1 = require("../schemas/idUserSchema.schema");
const ping = async (req, resp) => {
    const { userId } = (0, express_1.getAuth)(req);
    // Use Clerk's JavaScript Backend SDK to get the user's User object
    const user = await express_1.clerkClient.users.getUser(userId);
    return resp.json({ user });
};
exports.ping = ping;
const privatePing = async (req, resp) => {
    try {
        const safeData = idUserSchema_schema_1.idUserSchema.safeParse(req.body);
        if (!safeData.success)
            return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
        const user = await (0, user_action_1.findProfileUserByUsername)(safeData.data.username);
        if (!user)
            return resp.status(404).json({ message: "Usuário não encontrado" });
        resp.status(200).json(user);
    }
    catch (error) {
        console.error("Erro no Controlador do PrivatePing ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.privatePing = privatePing;
