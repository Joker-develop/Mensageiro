"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_action_1 = require("../services/user.action");
const protectRoute = (req, resp, nextFunc) => {
    try {
        const token = req.cookies.jwt;
        if (!token)
            return resp.status(401).json({ error: "Não autorizado *** nenhum Token encontrado ***" });
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
            if (error)
                return resp.status(401).json({ error: "Não autorizado *** Token inválido ***" });
            const user = await (0, user_action_1.findUserByPassId)(decoded.data.id);
            if (!user)
                return resp.status(404).json({ error: "*** Usuário não encontrado ***" });
            req.userId = user.id;
            nextFunc();
        });
    }
    catch (error) {
        console.error("Erro no Protector de Routa do MIddleware ", error);
        return resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.default = protectRoute;
