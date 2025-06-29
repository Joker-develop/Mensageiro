"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInSchema = void 0;
const zod_1 = require("zod");
exports.signInSchema = zod_1.z.object({
    clerkId: zod_1.z.string(),
    email: zod_1.z.string().email("E-mail inválido"),
});
