"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpSchema = void 0;
const zod_1 = require("zod");
exports.signUpSchema = zod_1.z.object({
    clerkId: zod_1.z.string(),
    name: zod_1.z.string().min(2, "Precisa ter 2 ou mais caracteres < LETRAS >"),
    username: zod_1.z.string().min(2, "Precisa ter 2 ou mais caracteres < LETRAS >"),
    email: zod_1.z.string().email("E-mail inválido"),
    profileImg: zod_1.z.string(),
    coverImg: zod_1.z.string().optional(),
});
