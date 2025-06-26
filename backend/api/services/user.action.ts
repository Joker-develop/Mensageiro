import { Request, Response } from "express";
import {prisma} from "../lib/utils/prisma"
import { getPublicURL } from "../lib/utils/url";
import { Prisma } from "@prisma/client";

export const findUserByEmail = async ( email: string ) => {
    const user = await prisma.user.findFirst({
        where: { email } // onde email igual ao email do parametro
    });

    if ( user ){
        return {
            ...user,
            avatar: getPublicURL(user.profileImg!),
            coberImage: getPublicURL(user.coverImg!),
            }
    }

    return null;
}

export const findUserByUserName = async ( hasUserNameSlug: string ) => {
    const user = await prisma.user.findFirst({
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
    })

    if ( user ){
        return {
            ...user,
            profileImage: getPublicURL(user.profileImg!),
            coverImage: getPublicURL(user.coverImg!),
        }
    }

    return null;
}

export const findUserByPassId = async ( hasUserId: string ) => {
    const user = await prisma.user.findUnique({
        select: {
            id: true, 
            profileImg: true,
            coverImg: true,
        },
        where: {
            id: hasUserId
        }
    });

    if ( user ) return { ...user };

    return null;
}

export const createUser = async ( getData: Prisma.UserCreateInput) => {
    
    const dbUser = await prisma.user.create({ 
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
        profileImage: getPublicURL(dbUser.profileImg!),
        coverImage: getPublicURL(dbUser.coverImg!),
    }
}

export const findProfileUserByUsername = async (username: string) => {
    const user = await prisma.user.findUnique({
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
}

export const getUserPosts = async ( authorId: string ) => {
    const posts = await prisma.post.findMany({
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
    })

    return posts;
}

export const getUserLikedPosts = async ( authorId: string ) => {
    const posts = await prisma.post.findMany({
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
            }
            ,
        },
    })

    return posts;
}

export const getUserFollowings = async ( followerId: string ) => {
    const following = [];
    const reqFollow = await prisma.follows.findMany({
       select: {
        followingId: true
       },
        where: {
            followerId,
        },
    })

    for ( let follwingItems of reqFollow ){
        following.push(follwingItems.followingId);
    }

    return following;
}

export const getFindUserFollowingPosts = async (followingId: string[]) => {
    const userFollowingPosts = await prisma.post.findMany({
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
            authorId : {
                in: followingId
            }
        }
    });

    return userFollowingPosts;
}

export const isFollowing = async (currentUser: string, userId: string) => {
    try {
    
        const follow = await prisma.follows.findFirst({
          where: {
            followerId: currentUser,
            followingId: userId
          },
        });
    
        return !!follow; //mesma coisa que follow ? true:false
      } catch (error) {
        console.error("Error checking follow status:", error);
        return false;
      }
}

export const updateProfileUserInfo = async ( id: string, data: Prisma.UserUpdateInput ) => {
    const updateProfile = await prisma.user.update({
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
    })

    if ( updateProfile ) return updateProfile;
    else null
}

export const getRandomUsers = async (userId: string) => {

    const randomUsers = await prisma.user.findMany({
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

    if ( randomUsers ) return randomUsers;
    else null
}