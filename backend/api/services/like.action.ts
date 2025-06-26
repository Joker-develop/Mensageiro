import { Prisma } from "@prisma/client";
import { prisma } from "../lib/utils/prisma";

export const findLikes = async ( userId: string, postId: string) => {
    
    const liked = await prisma.like.findFirst({ 
        select: { id: true },
        where: {
            userId,
            postId
        }
     });

    return liked ? ({ liked, verify: true }) : ({ verify: false });
}

export const deleteLikes = async ( id: string, userId: string, postId: string) => {
    const del = await prisma.like.delete({
        where: {
            id,
            userId,
            postId
        }
    })

    if ( del ) return del;

    return null;
}

export const createLikes = async (userId: string, postId: string) => {
    const createLikes = await prisma.like.create({
        data: {
            userId,
            postId
        }
    });

}