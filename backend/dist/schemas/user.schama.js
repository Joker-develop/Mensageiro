"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userImageSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Precisa ter 2 ou mais caracteres < LETRAS >").optional(),
    profileImg: zod_1.z.string().optional(),
    coverImg: zod_1.z.string().optional(),
    bio: zod_1.z.string().optional(),
    location: zod_1.z.string().optional(),
    website: zod_1.z.string().url("Precisa ser uma URL válida").optional(),
});
exports.userImageSchema = zod_1.z.object({
    prifileImg: zod_1.z.string().optional(),
    coverImg: zod_1.z.string().optional(),
});
