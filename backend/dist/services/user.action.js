"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomUsers = exports.updateProfileUserInfo = exports.isFollowing = exports.getFindUserFollowingPosts = exports.getUserFollowings = exports.getUserLikedPosts = exports.getUserPosts = exports.findProfileUserByUsername = exports.createUser = exports.findUserByPassId = exports.findUserByUserName = exports.findUserByEmail = void 0;
const prisma_1 = require("../lib/utils/prisma");
const url_1 = require("../lib/utils/url");
const findUserByEmail = async (email) => {
    const user = await prisma_1.prisma.user.findFirst({
        where: { email } // onde email igual ao email do parametro
    });
    if (user) {
        return {
            ...user,
            avatar: (0, url_1.getPublicURL)(user.profileImg),
            coberImage: (0, url_1.getPublicURL)(user.coverImg),
        };
    }
    return null;
};
exports.findUserByEmail = findUserByEmail;
const findUserByUserName = async (hasUserNameSlug) => {
    const user = await prisma_1.prisma.user.findFirst({
        select: {
            id: true,
            profileImg: true,
            coverImg: true,
            bio: true,
            location: true,
            website: true,
            name: true,
            clerkId: true,
        },
        where: {
            username: hasUserNameSlug
        }
    });
    if (user) {
        return {
            ...user,
            profileImage: (0, url_1.getPublicURL)(user.profileImg),
            coverImage: (0, url_1.getPublicURL)(user.coverImg),
        };
    }
    return null;
};
exports.findUserByUserName = findUserByUserName;
const findUserByPassId = async (hasUserId) => {
    const user = await prisma_1.prisma.user.findUnique({
        select: {
            id: true,
            profileImg: true,
            coverImg: true,
        },
        where: {
            id: hasUserId
        }
    });
    if (user)
        return { ...user };
    return null;
};
exports.findUserByPassId = findUserByPassId;
const createUser = async (getData) => {
    const dbUser = await prisma_1.prisma.user.create({
        data: {
            clerkId: getData.clerkId,
            name: getData.name,
            username: getData.username,
            email: getData.email,
            profileImg: getData.profileImg,
            coverImg: getData.coverImg
        }
    });
    return {
        ...dbUser,
        profileImage: (0, url_1.getPublicURL)(dbUser.profileImg),
        coverImage: (0, url_1.getPublicURL)(dbUser.coverImg),
    };
};
exports.createUser = createUser;
const findProfileUserByUsername = async (username) => {
    const user = await prisma_1.prisma.user.findUnique({
        select: {
            id: true,
            name: true,
            username: true,
            bio: true,
            profileImg: true,
            coverImg: true,
            location: true,
            website: true,
            createAt: true,
            _count: {
                select: {
                    followers: true,
                    following: true,
                    posts: true,
                },
            },
        },
        where: { username: username },
    });
    return user;
};
exports.findProfileUserByUsername = findProfileUserByUsername;
const getUserPosts = async (authorId) => {
    const posts = await prisma_1.prisma.post.findMany({
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    username: true,
                    profileImg: true
                }
            },
            comments: {
                include: {
                    author: {
                        select: {
                            id: true,
                            name: true,
                            username: true,
                            profileImg: true
                        }
                    }
                },
                orderBy: { createAt: "asc" }
            },
            likes: {
                select: {
                    userId: true
                }
            },
            _count: {
                select: {
                    likes: true,
                    comments: true
                }
            }
        },
        orderBy: {
            createAt: "desc"
        },
        where: {
            authorId,
        },
    });
    return posts;
};
exports.getUserPosts = getUserPosts;
const getUserLikedPosts = async (authorId) => {
    const posts = await prisma_1.prisma.post.findMany({
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    username: true,
                    profileImg: true
                }
            },
            comments: {
                include: {
                    author: {
                        select: {
                            id: true,
                            name: true,
                            username: true,
                            profileImg: true
                        }
                    }
                },
                orderBy: { createAt: "asc" }
            },
            likes: {
                select: {
                    userId: true
                }
            },
            _count: {
                select: {
                    likes: true,
                    comments: true
                }
            }
        },
        orderBy: {
            createAt: "desc"
        },
        where: {
            likes: {
                some: {
                    userId: authorId
                }
            },
        },
    });
    return posts;
};
exports.getUserLikedPosts = getUserLikedPosts;
const getUserFollowings = async (followerId) => {
    const following = [];
    const reqFollow = await prisma_1.prisma.follows.findMany({
        select: {
            followingId: true
        },
        where: {
            followerId,
        },
    });
    for (let follwingItems of reqFollow) {
        following.push(follwingItems.followingId);
    }
    return following;
};
exports.getUserFollowings = getUserFollowings;
const getFindUserFollowingPosts = async (followingId) => {
    const userFollowingPosts = await prisma_1.prisma.post.findMany({
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    username: true,
                    profileImg: true
                }
            },
            comments: {
                include: {
                    author: {
                        select: {
                            id: true,
                            name: true,
                            username: true,
                            profileImg: true
                        }
                    }
                },
                orderBy: { createAt: "asc" }
            },
            likes: {
                select: {
                    userId: true
                }
            },
            _count: {
                select: {
                    likes: true,
                    comments: true
                }
            }
        },
        orderBy: {
            createAt: "desc"
        },
        where: {
            authorId: {
                in: followingId
            }
        }
    });
    return userFollowingPosts;
};
exports.getFindUserFollowingPosts = getFindUserFollowingPosts;
const isFollowing = async (currentUser, userId) => {
    try {
        const follow = await prisma_1.prisma.follows.findFirst({
            where: {
                followerId: currentUser,
                followingId: userId
            },
        });
        return !!follow; //mesma coisa que follow ? true:false
    }
    catch (error) {
        console.error("Error checking follow status:", error);
        return false;
    }
};
exports.isFollowing = isFollowing;
const updateProfileUserInfo = async (id, data) => {
    const updateProfile = await prisma_1.prisma.user.update({
        select: {
            profileImg: true,
            coverImg: true,
            bio: true,
            location: true,
            website: true,
            name: true,
        },
        where: { id },
        data: {
            profileImg: data.profileImg,
            coverImg: data.coverImg,
            bio: data.bio,
            location: data.location,
            website: data.website,
            name: data.name,
        }
    });
    if (updateProfile)
        return updateProfile;
    else
        null;
};
exports.updateProfileUserInfo = updateProfileUserInfo;
const getRandomUsers = async (userId) => {
    const randomUsers = await prisma_1.prisma.user.findMany({
        where: {
            AND: [
                { NOT: { id: userId } },
                {
                    NOT: {
                        followers: {
                            some: {
                                followerId: userId,
                            },
                        },
                    },
                },
            ],
        },
        select: {
            id: true,
            name: true,
            username: true,
            profileImg: true,
            _count: {
                select: {
                    followers: true,
                },
            },
        },
        take: 3,
    });
    if (randomUsers)
        return randomUsers;
    else
        null;
};
exports.getRandomUsers = getRandomUsers;
