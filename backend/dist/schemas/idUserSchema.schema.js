"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idUserSchema = void 0;
const zod_1 = require("zod");
exports.idUserSchema = zod_1.z.object({
    username: zod_1.z.string(),
});
