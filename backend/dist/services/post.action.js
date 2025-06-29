"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getfindPostByBodyOrAuthor = exports.commentOnPosts = exports.deleteComments = exports.deletePosts = exports.findComment = exports.findPost = exports.getPosts = exports.createPost = void 0;
const prisma_1 = require("../lib/utils/prisma");
const notification_action_1 = require("./notification.action");
const createPost = async (content, postImage, getUserId) => {
    const postCreate = await prisma_1.prisma.post.create({
        data: {
            content: content,
            postImage: postImage,
            authorId: getUserId,
        }
    });
    return postCreate;
};
exports.createPost = createPost;
const getPosts = async () => {
    try {
        const posts = await prisma_1.prisma.post.findMany({
            orderBy: {
                createAt: "desc",
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        profileImg: true,
                        username: true,
                    },
                },
                comments: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                username: true,
                                profileImg: true,
                                name: true,
                            },
                        },
                    },
                    orderBy: {
                        createAt: "asc",
                    },
                },
                likes: {
                    select: {
                        userId: true,
                    },
                },
                _count: {
                    select: {
                        likes: true,
                        comments: true,
                    },
                },
            },
        });
        return posts;
    }
    catch (error) {
        console.log("Error in getPosts", error);
        throw new Error("Failed to fetch posts");
    }
};
exports.getPosts = getPosts;
const findPost = async (id) => {
    const post = await prisma_1.prisma.post.findUnique({
        //incluir
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    profileImg: true,
                    username: true,
                }
            },
            likes: {
                select: {
                    user: true
                }
            }
        },
        where: { id: id }
    });
    if (post) {
        return post;
    }
    return null;
};
exports.findPost = findPost;
const findComment = async (id) => {
    const comment = await prisma_1.prisma.comment.findUnique({
        //incluir
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    profileImg: true,
                    username: true,
                }
            },
        },
        where: { id: id }
    });
    if (comment) {
        return comment;
    }
    return null;
};
exports.findComment = findComment;
const deletePosts = async (id) => {
    const post = await prisma_1.prisma.post.delete({
        where: { id },
    });
    if (post) {
        return post;
    }
    return null;
};
exports.deletePosts = deletePosts;
const deleteComments = async (id) => {
    const comment = await prisma_1.prisma.comment.delete({
        where: { id },
    });
    if (comment) {
        return comment;
    }
    return null;
};
exports.deleteComments = deleteComments;
const commentOnPosts = async (id, content, authorId, postId) => {
    const post = await (0, exports.findPost)(id);
    if (!post)
        return;
    // Create comment and notification in a transaction
    const [comment] = await prisma_1.prisma.$transaction(async (tx) => {
        const newComment = await tx.comment.create({
            data: {
                content,
                authorId,
                postId,
            }
        });
        if (post.authorId !== authorId) {
            await (0, notification_action_1.createNotifications)({ type: "COMMENT", userId: post.authorId, creatorId: authorId, postId: postId, commentId: newComment.id }, tx);
        }
        return [newComment];
    });
    if (comment) {
        return comment;
    }
    else {
        return null;
    }
};
exports.commentOnPosts = commentOnPosts;
const getfindPostByBodyOrAuthor = async (bodyContains) => {
    try {
        const searchPost = await prisma_1.prisma.post.findMany({
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        profileImg: true,
                        username: true,
                    },
                },
                comments: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                username: true,
                                profileImg: true,
                                name: true,
                            },
                        },
                    },
                    orderBy: {
                        createAt: "asc",
                    },
                },
                likes: {
                    select: {
                        userId: true,
                    },
                },
                _count: {
                    select: {
                        likes: true,
                        comments: true,
                    },
                },
            },
            orderBy: {
                createAt: "desc",
            },
            where: {
                OR: [
                    {
                        content: {
                            contains: bodyContains,
                            mode: "insensitive"
                        }
                    },
                    {
                        author: {
                            name: {
                                contains: bodyContains,
                                mode: "insensitive"
                            }
                        }
                    },
                    {
                        author: {
                            username: {
                                contains: bodyContains,
                                mode: "default"
                            }
                        }
                    },
                ],
            }
        });
        return searchPost;
    }
    catch (error) {
        console.log("Error in getPosts", error);
        throw new Error("Failed to fetch posts");
    }
};
exports.getfindPostByBodyOrAuthor = getfindPostByBodyOrAuthor;
