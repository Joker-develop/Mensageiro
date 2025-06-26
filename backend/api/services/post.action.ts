import { Prisma } from "@prisma/client"
import { prisma } from "../lib/utils/prisma"
import { createNotifications } from "./notification.action";

export const createPost = async ( content: string, postImage: string, getUserId: string ) => {
    const postCreate = await prisma.post.create({
        data: {
            content: content,
            postImage: postImage,
            authorId: getUserId,
            
        }
    })

    return postCreate;
}

export const getPosts = async () => {
    try {
        const posts = await prisma.post.findMany({
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
    } catch (error) {
    console.log("Error in getPosts", error);
    throw new Error("Failed to fetch posts");
    }
}

export const  findPost = async (id: string) => {
    const post = await prisma.post.findUnique({
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
    })

    if ( post ) {
        return post;
    }

    return null;
}

export const  findComment = async (id: string) => {
    const comment = await prisma.comment.findUnique({
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
    })

    if ( comment ) {
        return comment;
    }

    return null;
}

export const deletePosts = async (id: string) => {
    const post = await prisma.post.delete({
        where: { id },
    });
    
    if ( post ) {
        return post;
    }

    return null;
}

export const deleteComments = async (id: string) => {
    const comment = await prisma.comment.delete({
        where: { id },
    });
    
    if ( comment ) {
        return comment;
    }

    return null;
}

export const commentOnPosts = async (id: string, content: string, authorId: string, postId: string) => {
    
    const post = await findPost( id );
    if ( !post ) return;
           
    // Create comment and notification in a transaction
    const [comment] = await prisma.$transaction( async (tx) => {
        const newComment = await tx.comment.create({
            data: {
                content,
                authorId,
                postId,
            }
        });

        if ( post.authorId !== authorId ){
            await createNotifications({ type: "COMMENT", userId: post.authorId, creatorId: authorId, postId: postId, commentId: newComment.id }, tx)
        }

        return [newComment]
    })

    if ( comment ){ 
        return comment;
    } else{ 
        return null;
    }

}

export const getfindPostByBodyOrAuthor = async (bodyContains: string) => {
    try{
        const searchPost = await prisma.post.findMany({
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
                            contains: bodyContains ,
                            mode: "insensitive"
                        }
                    },
                    { 
                        author: { 
                            name : {
                                contains: bodyContains,
                                mode: "insensitive"
                            } 
                        }
                    },
                    { 
                        author: { 
                            username : {
                                contains: bodyContains,
                                mode: "default"
                            } 
                        }
                    },

                ],
            }
        })

        return searchPost;
    } catch (error) {
    console.log("Error in getPosts", error);
    throw new Error("Failed to fetch posts");
    }
}
