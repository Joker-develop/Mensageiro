import { prisma } from "../lib/utils/prisma"

export const addHashtag = async (hashtag: string) => {
    const hs = await prisma.trend.findFirst({
        where: { hashtag: hashtag }
    })

    if ( hs ){
        await prisma.trend.update({
            where: { id: hs.id },
            data: { 
                counter: hs.counter + 1,
                updateAt: new Date() 
            }
        })
    } else {
        await prisma.trend.create({
            data: { hashtag: hashtag }
        })
    }
}

export const subHashtag = async ( hashtag: string ) => {
    const hs = await prisma.trend.findFirst({
        where: { hashtag: hashtag }
    })

    if ( hs ){
        await prisma.trend.update({
            where: { id: hs.id },
            data: { 
                counter: hs.counter <= 0 ? 0 :  hs.counter - 1,
                updateAt: new Date() 
            }
        })
    }
}

export const getTranding = async () => {
    const trends = await prisma.trend.findMany({
        select: {
            hashtag: true,
            counter: true,
        },
        orderBy: { counter: "desc" },
        take: 4
    })

    return trends;
}