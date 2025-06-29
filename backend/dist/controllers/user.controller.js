"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSuggestions = exports.updateProfileUser = exports.followUnfollowUser = exports.isFollowingUser = exports.getUserFollowPostByUsername = exports.getUserLikedPostsByUsername = exports.getUserPostsByUsername = exports.getProfileByUsername = void 0;
const user_action_1 = require("../services/user.action");
const userPost_schema_1 = require("../schemas/userPost.schema");
const follow_actions_1 = require("../services/follow.actions");
const user_schama_1 = require("../schemas/user.schama");
const cloudinary_1 = require("cloudinary");
const getProfileByUsername = async (req, resp) => {
    try {
        const { username } = req.params;
        const hasUserName = await (0, user_action_1.findUserByUserName)(username);
        if (!hasUserName)
            return resp.status(404).json({ error: "Usuário não encontrado." });
        const user = await (0, user_action_1.findProfileUserByUsername)(username);
        if (!user)
            return resp.status(404).json({ message: "Usuário não encontrado" });
        resp.status(200).json(user);
    }
    catch (error) {
        console.error("Erro no Controlador do GetProfileByUsername ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.getProfileByUsername = getProfileByUsername;
const getUserPostsByUsername = async (req, resp) => {
    try {
        const { id } = req.params;
        const safeData = userPost_schema_1.userPostSchema.safeParse(req.query);
        if (!safeData.success)
            return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
        const hasUserById = await (0, user_action_1.findUserByPassId)(id);
        if (!hasUserById)
            return resp.status(404).json({ error: "Usuário não encontrado." });
        // const perPage = 2;
        // let currentPage = safeData.data.page ?? 0;
        const userPosts = await (0, user_action_1.getUserPosts)(hasUserById.id);
        if (!userPosts)
            return resp.status(404).json({ message: "Nenhum Post encontrado." });
        resp.status(200).json(userPosts);
    }
    catch (error) {
        console.error("Erro no Controlador do GetUserPosts ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.getUserPostsByUsername = getUserPostsByUsername;
const getUserLikedPostsByUsername = async (req, resp) => {
    try {
        const { id } = req.params;
        const hasUserById = await (0, user_action_1.findUserByPassId)(id);
        if (!hasUserById)
            return resp.status(404).json({ error: "Usuário não encontrado." });
        // const perPage = 2;
        // let currentPage = safeData.data.page ?? 0;
        // const getPostsUsers = await getUserPosts(hasUserById.id);
        const userLikesPost = await (0, user_action_1.getUserLikedPosts)(hasUserById.id);
        if (!userLikesPost)
            return resp.status(404).json({ message: "Postagem curtidas não encontrada." });
        resp.status(200).json(userLikesPost);
    }
    catch (error) {
        console.error("Erro no Controlador do GetUserLikedPostsByUsername ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.getUserLikedPostsByUsername = getUserLikedPostsByUsername;
const getUserFollowPostByUsername = async (req, resp) => {
    const { id } = req.params;
    const safeData = userPost_schema_1.userPostSchema.safeParse(req.query);
    if (!safeData.success)
        return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
    const hasUserById = await (0, user_action_1.findUserByPassId)(id);
    if (!hasUserById)
        return resp.status(404).json({ error: "Usuário não encontrado." });
    const userFollowing = await (0, user_action_1.getUserFollowings)(hasUserById.id);
    const findUserFollowingPost = await (0, user_action_1.getFindUserFollowingPosts)(userFollowing);
    if (findUserFollowingPost) {
        return resp.status(200).json(findUserFollowingPost);
    }
    else {
        return resp.status(200).json({ message: "Nenhum post de quem segues." });
    }
};
exports.getUserFollowPostByUsername = getUserFollowPostByUsername;
const isFollowingUser = async (req, resp) => {
    try {
        const { id } = req.params;
        const { authId } = req.body;
        const userParams = await (0, user_action_1.findUserByPassId)(id);
        const currentUser = await (0, user_action_1.findUserByPassId)(authId);
        if (!userParams || !currentUser)
            return resp.status(404).json({ message: "Usuário não encontrado" });
        // if ( userParams?.id === currentUser?.id ) return resp.status(400).json({ message: true });
        const hasUserToBeFollowed = await (0, user_action_1.isFollowing)(currentUser.id, userParams.id);
        return resp.status(200).json(hasUserToBeFollowed);
    }
    catch (error) {
        console.error("Erro no Controlador do isUserFollowing ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.isFollowingUser = isFollowingUser;
const followUnfollowUser = async (req, resp) => {
    try {
        const { id } = req.params;
        const { getUserId } = req.body;
        const userParams = await (0, user_action_1.findUserByPassId)(id);
        const currentUser = await (0, user_action_1.findUserByPassId)(getUserId);
        if (!userParams || !currentUser)
            return resp.status(404).json({ message: "Usuário não encontrado" });
        if (userParams?.id === currentUser?.id)
            return resp.status(400).json({ error: "you can't follwo/unfoolow yourself" });
        const hasUserToBeFollowed = await (0, user_action_1.isFollowing)(currentUser.id, userParams.id);
        if (hasUserToBeFollowed) {
            await (0, follow_actions_1.unFollowUser)(currentUser.id, userParams.id);
            resp.status(200).json({ message: "Usuário deixou de seguir com sucesso." });
        }
        else {
            await (0, follow_actions_1.follwUser)(currentUser.id, userParams.id);
            resp.status(200).json({ message: "Usuário seguido com sucesso." });
        }
    }
    catch (error) {
        console.error("Erro no Controlador do GetUserPosts ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.followUnfollowUser = followUnfollowUser;
const updateProfileUser = async (req, resp) => {
    try {
        const { id } = req.params;
        const safeData = user_schama_1.userSchema.safeParse(req.body);
        const currentUser = await (0, user_action_1.findUserByPassId)(id);
        if (!safeData.success)
            return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
        if (!currentUser || !currentUser)
            return resp.status(404).json({ message: "Usuário não encontrado" });
        let { profileImg, coverImg } = req.body;
        if (profileImg) {
            if (currentUser.profileImg) {
                const getProfileImg = currentUser.profileImg;
                await cloudinary_1.v2.uploader.destroy(getProfileImg.split("/").pop().split("./")[0]);
            }
            const profileUploadedResponse = await cloudinary_1.v2.uploader.upload(profileImg);
            profileImg = profileUploadedResponse.secure_url;
        }
        if (coverImg) {
            if (currentUser.profileImg) {
                const getCoverImg = currentUser.coverImg;
                await cloudinary_1.v2.uploader.destroy(getCoverImg.split("/").pop().split("./")[0]);
            }
            const coverImgUploadedResponse = await cloudinary_1.v2.uploader.upload(coverImg);
            coverImg = coverImgUploadedResponse.secure_url;
        }
        const user = await (0, user_action_1.updateProfileUserInfo)(id, safeData.data);
        return resp.status(200).json(user);
    }
    catch (error) {
        console.error("Erro no Controlador do UpdateProfileUser ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.updateProfileUser = updateProfileUser;
const userSuggestions = async (req, resp) => {
    try {
        const { getUserId } = req.body;
        const currentUser = await (0, user_action_1.findUserByPassId)(getUserId);
        if (!currentUser || !currentUser)
            return resp.status(404).json({ message: "Usuário não encontrado" });
        const grandomUsers = await (0, user_action_1.getRandomUsers)(currentUser.id);
        return resp.status(200).json(grandomUsers);
    }
    catch (error) {
        console.error("Erro no Controlador do UserSuggestions ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.userSuggestions = userSuggestions;
