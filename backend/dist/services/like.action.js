"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLikes = exports.deleteLikes = exports.findLikes = void 0;
const prisma_1 = require("../lib/utils/prisma");
const findLikes = async (userId, postId) => {
    const liked = await prisma_1.prisma.like.findFirst({
        select: { id: true },
        where: {
            userId,
            postId
        }
    });
    return liked ? ({ liked, verify: true }) : ({ verify: false });
};
exports.findLikes = findLikes;
const deleteLikes = async (id, userId, postId) => {
    const del = await prisma_1.prisma.like.delete({
        where: {
            id,
            userId,
            postId
        }
    });
    if (del)
        return del;
    return null;
};
exports.deleteLikes = deleteLikes;
const createLikes = async (userId, postId) => {
    const createLikes = await prisma_1.prisma.like.create({
        data: {
            userId,
            postId
        }
    });
};
exports.createLikes = createLikes;
