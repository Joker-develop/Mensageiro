"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mainRouters_1 = __importDefault(require("./router/mainRouters"));
const cloudinary_1 = require("cloudinary");
// import { clerkClient, getAuth, requireAuth } from "@clerk/express";
// import { clerkMiddleware, requireAuth } from "@clerk/express";
// import { ClerkExpressRequireAuth, ClerkExpressWithAuth } from '@clerk/clerk-sdk-node'
dotenv_1.default.config();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_APY_KEY,
    api_secret: process.env.CLOUDINARY_APY_SECRET
});
const server = (0, express_1.default)();
const LPORT = process.env.PORT || 8000;
// server.use(clerkMiddleware());
// server.use(requireAuth());
server.use((0, helmet_1.default)());
server.use((0, cors_1.default)());
server.use((0, express_1.urlencoded)({ extended: true }));
server.use(express_1.default.json({ limit: "5mb" }));
server.use((0, cookie_parser_1.default)());
server.use(mainRouters_1.default);
// server.get('/protected', async (req, res) => {
//     // Use `getAuth()` to get the user's `userId`
//     // const { userId } = getAuth(req)
//     // Use Clerk's JavaScript Backend SDK to get the user's User object
//     const user = await clerkClient.users.getUserList()
//     res.json({ user: req })
// });
// // Use the strict middleware that throws when unauthenticated
// server.get('/protected-auth-required', ClerkExpressRequireAuth() as unknown as RequestHandler, (req, res) => {
//     res.json(req.auth)
//   })
//   // Use the lax middleware that returns an empty auth object when unauthenticated
//   server.get('/protected-auth-optional', ClerkExpressWithAuth() as unknown as RequestHandler, (req, res) => {
//     res.json(req.auth)
//   })
//   // Error handling middleware function
//   server.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(401).send('Unauthenticated!')
//   })
server.listen(LPORT, () => {
    console.log(`"Server is running on PORT: ${LPORT}`);
    console.log(process.env.DATABASE_URL);
});
