"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPostSchema = void 0;
const zod_1 = require("zod");
exports.userPostSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().min(0).optional()
});
