"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTranding = exports.subHashtag = exports.addHashtag = void 0;
const prisma_1 = require("../lib/utils/prisma");
const addHashtag = async (hashtag) => {
    const hs = await prisma_1.prisma.trend.findFirst({
        where: { hashtag: hashtag }
    });
    if (hs) {
        await prisma_1.prisma.trend.update({
            where: { id: hs.id },
            data: {
                counter: hs.counter + 1,
                updateAt: new Date()
            }
        });
    }
    else {
        await prisma_1.prisma.trend.create({
            data: { hashtag: hashtag }
        });
    }
};
exports.addHashtag = addHashtag;
const subHashtag = async (hashtag) => {
    const hs = await prisma_1.prisma.trend.findFirst({
        where: { hashtag: hashtag }
    });
    if (hs) {
        await prisma_1.prisma.trend.update({
            where: { id: hs.id },
            data: {
                counter: hs.counter <= 0 ? 0 : hs.counter - 1,
                updateAt: new Date()
            }
        });
    }
};
exports.subHashtag = subHashtag;
const getTranding = async () => {
    const trends = await prisma_1.prisma.trend.findMany({
        select: {
            hashtag: true,
            counter: true,
        },
        orderBy: { counter: "desc" },
        take: 4
    });
    return trends;
};
exports.getTranding = getTranding;
