import { prisma } from "../lib/utils/prisma"
import { createNotifications } from "./notification.action"

export const follwUser = async (currentUser: string, userId: string) => {
    const [comment] = await prisma.$transaction( async (tx) => {
        await tx.follows.create({
            data: {
                followerId: currentUser,
                followingId: userId
            }
        });
        await createNotifications({ type: "FOLLOW", creatorId: currentUser, userId});

        return [true];
    })
    
    return comment;
    
}

export const unFollowUser = async ( currentUser: string, userId: string) => {
    await prisma.follows.deleteMany({
        where: {
            followerId: currentUser,
            followingId: userId
        }
    })
}