"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unFollowUser = exports.follwUser = void 0;
const prisma_1 = require("../lib/utils/prisma");
const notification_action_1 = require("./notification.action");
const follwUser = async (currentUser, userId) => {
    const [comment] = await prisma_1.prisma.$transaction(async (tx) => {
        await tx.follows.create({
            data: {
                followerId: currentUser,
                followingId: userId
            }
        });
        await (0, notification_action_1.createNotifications)({ type: "FOLLOW", creatorId: currentUser, userId });
        return [true];
    });
    return comment;
};
exports.follwUser = follwUser;
const unFollowUser = async (currentUser, userId) => {
    await prisma_1.prisma.follows.deleteMany({
        where: {
            followerId: currentUser,
            followingId: userId
        }
    });
};
exports.unFollowUser = unFollowUser;
