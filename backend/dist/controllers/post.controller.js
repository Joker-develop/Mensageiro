"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeUnlikePost = exports.deleteComment = exports.commentOnPost = exports.deletePost = exports.getPostById = exports.addPost = void 0;
const user_action_1 = require("../services/user.action");
const post_schema_1 = require("../schemas/post.schema");
const cloudinary_1 = require("cloudinary");
const post_action_1 = require("../services/post.action");
const trend_hashtag_action_1 = require("../services/trend.hashtag.action");
const prisma_1 = require("../lib/utils/prisma");
const commentPost_schema_1 = require("../schemas/commentPost.schema");
const like_action_1 = require("../services/like.action");
const notification_action_1 = require("../services/notification.action");
const addPost = async (req, resp) => {
    try {
        const { content } = req.body;
        let { imageUrl } = req.body;
        // const getUserId = req.userId as string
        const { getUserId } = req.body;
        console.log("\nImagen: " + imageUrl, "\nid: " + getUserId, "\nConteúdo: " + content);
        const safeData = post_schema_1.postSchema.safeParse({ imageUrl, content });
        if (!safeData.success)
            return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
        const user = await (0, user_action_1.findUserByPassId)(getUserId);
        if (!user)
            return resp.status(404).json({ error: "*** Usuário não encontrado ***" });
        if (!imageUrl && !content)
            return resp.status(404).json({ error: "*** Post não não tem Conteúdo ou Imagem. ***" });
        // criar coneção com o cloudinary e enviara foto no servidor do site
        if (imageUrl) {
            const uploadeResponse = await cloudinary_1.v2.uploader.upload(imageUrl);
            imageUrl = uploadeResponse.secure_url;
        }
        const newsPostCreate = await (0, post_action_1.createPost)(content, imageUrl, getUserId);
        const getContent = content;
        const getHashtags = getContent.match(/#[a-zA-Z0-9çáâãéíìóôõúù#!?.,_]+/g);
        if (getHashtags) {
            for (let hashtag of getHashtags) {
                if (hashtag.length >= 2) {
                    await (0, trend_hashtag_action_1.addHashtag)(hashtag);
                }
            }
        }
        resp.status(201).json({ data: newsPostCreate });
    }
    catch (error) {
        console.error("Erro no Controlador do CreatePost ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.addPost = addPost;
const getPostById = async (req, resp) => {
    try {
        const { id } = req.params;
        const post = await (0, post_action_1.findPost)(id);
        if (!post)
            return resp.status(404).json({ error: "Post não existe no <BD>" });
        resp.status(200).json({ post });
    }
    catch (error) {
        console.error("Erro no Controlador do GetPostID ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.getPostById = getPostById;
const deletePost = async (req, resp) => {
    try {
        const { id } = req.params;
        const { authorId } = req.body;
        const post = await (0, post_action_1.findPost)(id);
        if (!post)
            return resp.status(404).json({ error: "Post não existe no <BD>" });
        if (post.author.id !== authorId)
            return resp.status(401).json({ error: "Não estas autorizado *** para apagar este post **" });
        // if ( post.postImage ){
        //     const imgId: string = post.postImage.split("/").pop()?.split(".")[0]!;
        //     await cloudinary.uploader.destroy(imgId);
        // }
        const postdelete = await (0, post_action_1.deletePosts)(id);
        if (post.content) {
            const getContentHashtag = post.content.match(/#[a-zA-Z0-9çáâãéíìóôõúù#!?.,_]+/g);
            if (getContentHashtag) {
                for (let hashtag of getContentHashtag) {
                    if (hashtag.length >= 2) {
                        await (0, trend_hashtag_action_1.subHashtag)(hashtag);
                    }
                }
            }
        }
        if (postdelete) {
            resp.status(200).json({ message: "Post apagado com sucesso" });
        }
        else {
            resp.status(200).json({ message: "Post não foi apagado" });
        }
    }
    catch (error) {
        console.error("Erro no Controlador do DeletePost ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.deletePost = deletePost;
const commentOnPost = async (req, resp) => {
    try {
        const { id } = req.params;
        const { authorId } = req.body;
        const { content } = req.body;
        // const authorId = req.userId as string
        const safeData = commentPost_schema_1.commentPostSchema.safeParse({ content });
        if (!safeData.success)
            return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
        const user = await (0, user_action_1.findUserByPassId)(authorId);
        if (!user)
            return resp.status(404).json({ error: "*** Usuário não encontrado ***" });
        const post = await (0, post_action_1.findPost)(id);
        if (!post)
            return resp.status(404).json({ error: "Post não encontrado" });
        if (!content)
            return resp.status(404).json({ error: "*** Comentário não não tem Conteúdo. ***" });
        const getCommentOnPost = await (0, post_action_1.commentOnPosts)(id, content, authorId, post.id);
        resp.status(201).json({ data: getCommentOnPost });
    }
    catch (error) {
        console.error("Erro no Controlador do CommentOnPost ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.commentOnPost = commentOnPost;
const deleteComment = async (req, resp) => {
    try {
        const { id } = req.params;
        const { cid } = req.params;
        const { authorId } = req.body;
        const post = await (0, post_action_1.findPost)(id);
        if (!post)
            return resp.status(404).json({ error: "Post não existe no <BD>" });
        const comment = await (0, post_action_1.findComment)(cid);
        if (!comment)
            return resp.status(404).json({ error: "Comentário não existe no <BD>" });
        if (comment.author.id !== authorId)
            return resp.status(401).json({ error: "Não estas autorizado *** para apagar este comentário **" });
        const commentDelete = await (0, post_action_1.deleteComments)(cid);
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
        if (commentDelete) {
            resp.status(200).json({ message: "Comentário apagado com sucesso" });
        }
        else {
            resp.status(200).json({ message: "Comentário não foi apagado" });
        }
    }
    catch (error) {
        console.error("Erro no Controlador do DeletePost ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.deleteComment = deleteComment;
const likeUnlikePost = async (req, resp) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        // const userId = req.userId as string;
        const user = await (0, user_action_1.findUserByPassId)(userId);
        if (!user)
            return resp.status(404).json({ error: "*** Usuário não encontrado ***" });
        const post = await (0, post_action_1.findPost)(id);
        if (!post)
            return resp.status(404).json({ error: "Post não encontrado" });
        const existingLike = await (0, like_action_1.findLikes)(userId, post.id);
        if (existingLike.verify) {
            await (0, like_action_1.deleteLikes)(existingLike.liked?.id, userId, post.id);
        }
        else {
            await prisma_1.prisma.$transaction(async (tx) => {
                await (0, like_action_1.createLikes)(userId, post.id);
                if (post.authorId !== userId) {
                    await (0, notification_action_1.createNotifications)({ type: "LIKE", userId: post.authorId, creatorId: userId, postId: id });
                }
            });
        }
        resp.status(201).json({ data: "getCommentOnPost" });
    }
    catch (error) {
        console.error("Erro no Controlador do LikeUnlikeOnPost ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.likeUnlikePost = likeUnlikePost;
