"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSchema = void 0;
const zod_1 = require("zod");
exports.postSchema = zod_1.z.object({
    content: zod_1.z.string({ message: "O Post precisa ter conteúdo." }),
    postImage: zod_1.z.string().optional(),
});
