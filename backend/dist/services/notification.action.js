"use strict";
/**
 *
 * @param getData {
 * tipo de notificação, I
 * D do usuário logado,
 * ID do suário que fez o comentário
 * ID do post
 * ID do comentário que gerou a notifcação
 * }
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.markNotificationsAsRead = exports.getNotifications = exports.createNotifications = void 0;
const prisma_1 = require("../lib/utils/prisma");
const createNotifications = async (data, txFunc) => {
    if (txFunc && data.type === "COMMENT") {
        await txFunc.notification.create({
            data: {
                type: data.type,
                comentId: data.commentId,
                creatorId: data.creatorId,
                userId: data.userId,
                postId: data.postId
            }
        });
    }
    else {
        await prisma_1.prisma.notification.create({
            data: {
                type: data.type,
                creatorId: data.creatorId,
                userId: data.userId,
                postId: data.postId
            }
        });
    }
};
exports.createNotifications = createNotifications;
const getNotifications = async (id) => {
    const notifications = await prisma_1.prisma.notification.findMany({
        include: {
            creator: {
                select: {
                    id: true,
                    name: true,
                    username: true,
                    profileImg: true,
                },
            },
            post: {
                select: {
                    id: true,
                    content: true,
                    postImage: true,
                },
            },
            comment: {
                select: {
                    id: true,
                    content: true,
                    createAt: true,
                },
            },
        },
        orderBy: {
            createAt: "desc",
        },
        where: {
            userId: id
        }
    });
    return notifications;
};
exports.getNotifications = getNotifications;
const markNotificationsAsRead = async (notificationIds) => {
    try {
        const NotificationsAsRead = await prisma_1.prisma.notification.updateMany({
            where: {
                id: { in: notificationIds },
            },
            data: { read: true },
        });
        return NotificationsAsRead;
    }
    catch (error) {
        console.error("Error marking notifications as read:", error);
        return { success: false };
    }
};
exports.markNotificationsAsRead = markNotificationsAsRead;
