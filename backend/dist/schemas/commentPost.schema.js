"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentPostSchema = void 0;
const zod_1 = require("zod");
exports.commentPostSchema = zod_1.z.object({
    content: zod_1.z.string({ message: "O Comentário precisa ter conteúdo." }),
});
