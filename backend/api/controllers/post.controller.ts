import { Response } from "express";
import { ExtendedeRequest } from "../types/extended.request";
import { findUserByPassId } from "../services/user.action";
import { postSchema } from "../schemas/post.schema";
import { v2 as cloudinary } from "cloudinary";
import { commentOnPosts, createPost, deleteComments, deletePosts, findComment, findPost } from "../services/post.action";
import { addHashtag, subHashtag } from "../services/trend.hashtag.action";
import { prisma } from "../lib/utils/prisma";
import { commentPostSchema } from "../schemas/commentPost.schema";
import { createLikes, deleteLikes, findLikes } from "../services/like.action";
import { createNotifications } from "../services/notification.action";

export const addPost = async  ( req: ExtendedeRequest, resp: Response) => {
    try {
        const { content } = req.body;
        let { imageUrl } = req.body;
        // const getUserId = req.userId as string
        const { getUserId } = req.body;

        console.log("\nImagen: "+imageUrl,"\nid: "+getUserId,"\nConteúdo: "+content,)

        const safeData = postSchema.safeParse({ imageUrl, content });
        if (!safeData.success) return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });

        const user = await findUserByPassId( getUserId );
        if ( !user ) return resp.status(404).json({ error: "*** Usuário não encontrado ***" });
       
        if ( !imageUrl && !content )  return resp.status(404).json({ error: "*** Post não não tem Conteúdo ou Imagem. ***" });

        // criar coneção com o cloudinary e enviara foto no servidor do site
        if ( imageUrl ) {
            const uploadeResponse = await cloudinary.uploader.upload(imageUrl);
            imageUrl = uploadeResponse.secure_url;
        }
         
        const newsPostCreate = await createPost(content, imageUrl, getUserId );

        const getContent = content as string;
        const getHashtags = getContent.match(/#[a-zA-Z0-9çáâãéíìóôõúù#!?.,_]+/g);
        if ( getHashtags ){
            for( let hashtag of getHashtags ){
                if ( hashtag.length >= 2 ){
                    await addHashtag(hashtag);
                }
            }
        }

        resp.status(201).json({data: newsPostCreate});
    } catch (error) {
        console.error("Erro no Controlador do CreatePost ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}

export const getPostById = async  ( req: ExtendedeRequest, resp: Response ) => {
    try {
        const { id } = req.params;
        const post = await findPost( id );
        if ( !post ) return resp.status(404).json({ error: "Post não existe no <BD>" });

        resp.status(200).json({post});

    } catch (error) {
        console.error("Erro no Controlador do GetPostID ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}

export const deletePost = async ( req: ExtendedeRequest, resp: Response ) => {
    try {
        const { id } = req.params;
        const { authorId } = req.body;

        const post = await findPost(id);
        if ( !post ) return resp.status(404).json({ error: "Post não existe no <BD>" });

        if (post.author.id !== authorId ) return resp.status(401).json({ error: "Não estas autorizado *** para apagar este post **" });
        // if ( post.postImage ){
        //     const imgId: string = post.postImage.split("/").pop()?.split(".")[0]!;
        //     await cloudinary.uploader.destroy(imgId);
        // }

        const postdelete = await deletePosts(id);

        if ( post.content ){
            const getContentHashtag = post.content.match(/#[a-zA-Z0-9çáâãéíìóôõúù#!?.,_]+/g);
            if ( getContentHashtag ){
                for ( let hashtag of getContentHashtag ){
                    if ( hashtag.length >= 2 ){
                        await subHashtag(hashtag);
                    }
                }
            }
        }
        if ( postdelete ){
            resp.status(200).json({message: "Post apagado com sucesso"});
        } else {
            resp.status(200).json({message: "Post não foi apagado"});
        }
        
    } catch (error) {
        console.error("Erro no Controlador do DeletePost ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}

export const commentOnPost = async ( req: ExtendedeRequest, resp: Response ) => {
    try {
        const { id } = req.params;
        const { authorId } = req.body;
        const { content } = req.body;

        // const authorId = req.userId as string

        const safeData = commentPostSchema.safeParse({ content });
        if (!safeData.success) return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });

        const user = await findUserByPassId( authorId );
        if ( !user ) return resp.status(404).json({ error: "*** Usuário não encontrado ***" });
       
        const post = await findPost( id );
        if ( !post ) return resp.status(404).json({ error: "Post não encontrado" });
       
        if ( !content )  return resp.status(404).json({ error: "*** Comentário não não tem Conteúdo. ***" });
        
        const getCommentOnPost = await commentOnPosts(id, content, authorId, post.id);

        resp.status(201).json({data: getCommentOnPost});
    } catch (error) {
        console.error("Erro no Controlador do CommentOnPost ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}

export const deleteComment = async ( req: ExtendedeRequest, resp: Response ) => {
    try {
        const { id } = req.params;
        const { cid } = req.params;
        const { authorId } = req.body;

        const post = await findPost(id);
        if ( !post ) return resp.status(404).json({ error: "Post não existe no <BD>" });

        const comment = await findComment(cid);
        if ( !comment ) return resp.status(404).json({ error: "Comentário não existe no <BD>" });

        if (comment.author.id !== authorId ) return resp.status(401).json({ error: "Não estas autorizado *** para apagar este comentário **" });

        const commentDelete = await deleteComments(cid);

        // if ( post.content ){
        //     const getContentHashtag = post.content.match(/#[a-zA-Z0-9çáâãéíìóôõúù#!?.,_]+/g);
        //     if ( getContentHashtag ){
        //         for ( let hashtag of getContentHashtag ){
        //             if ( hashtag.length >= 2 ){
        //                 await subHashtag(hashtag);
        //             }
        //         }
        //     }
        // }
        if ( commentDelete ){
            resp.status(200).json({message: "Comentário apagado com sucesso"});
        } else {
            resp.status(200).json({message: "Comentário não foi apagado"});
        }
        
    } catch (error) {
        console.error("Erro no Controlador do DeletePost ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}

export const likeUnlikePost = async ( req: ExtendedeRequest, resp: Response ) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        // const userId = req.userId as string;

        const user = await findUserByPassId( userId );
        if ( !user ) return resp.status(404).json({ error: "*** Usuário não encontrado ***" });
       
        const post = await findPost( id );
        if ( !post ) return resp.status(404).json({ error: "Post não encontrado" });
       
        const existingLike = await findLikes( userId, post.id );

        if ( existingLike.verify ) {
            await deleteLikes( existingLike.liked?.id!, userId, post.id);
        } else {

           await prisma.$transaction( async (tx) => {
                await createLikes(userId, post.id);
        
                if ( post.authorId !== userId ){
                    await createNotifications({type: "LIKE", userId: post.authorId, creatorId: userId, postId: id })
                }
        
            });
            
        }

        resp.status(201).json({data: "getCommentOnPost"});
    } catch (error) {
        console.error("Erro no Controlador do LikeUnlikeOnPost ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}