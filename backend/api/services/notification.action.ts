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

import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { prisma } from "../lib/utils/prisma";

type typeNotification = "LIKE" | "COMMENT" |"FOLLOW";

export const createNotifications = async ( data: {type: typeNotification, userId: string, creatorId: string, postId?: string, commentId?: string}, txFunc?: Omit<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends">) => {
    if ( txFunc && data.type === "COMMENT" ){
        await txFunc.notification.create({
            data: {
                type: data.type,
                comentId: data.commentId!,
                creatorId: data.creatorId,
                userId: data.userId,
                postId: data.postId
            }
        })
    } else {
        await prisma.notification.create({
            data: {
                type: data.type,
                creatorId: data.creatorId,
                userId: data.userId,
                postId: data.postId 
            }
        })
    }
    
}

export const getNotifications = async (id: string) => {
    const notifications = await prisma.notification.findMany({
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
    })

    return notifications;
}

export const markNotificationsAsRead = async (notificationIds: string[]) => {
    try {
        const NotificationsAsRead  = await prisma.notification.updateMany({
            where: {
                id: { in: notificationIds },
            },
            data: { read: true},
        });

        return NotificationsAsRead;
    } catch (error) {
        console.error("Error marking notifications as read:", error);
        return { success: false };
    }
    
}