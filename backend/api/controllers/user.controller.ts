import { Response } from "express";
import { ExtendedeRequest } from "../types/extended.request";
import { findProfileUserByUsername, findUserByPassId, findUserByUserName, getFindUserFollowingPosts, getRandomUsers, getUserFollowings, getUserLikedPosts, getUserPosts, isFollowing, updateProfileUserInfo } from "../services/user.action";
import { userPostSchema } from "../schemas/userPost.schema";
import { follwUser, unFollowUser } from "../services/follow.actions";
import { userSchema } from "../schemas/user.schama";
import { v2 as cloudinary } from "cloudinary";

export const getProfileByUsername = async (req: ExtendedeRequest, resp: Response) => {
    try {
        const { username } = req.params;

        const hasUserName = await findUserByUserName(username);
        if ( !hasUserName ) return resp.status(404).json({ error: "Usuário não encontrado." });

        const user = await findProfileUserByUsername(username);
        if ( !user ) return resp.status(404).json({ message: "Usuário não encontrado" })

        resp.status(200).json(user)
    } catch (error) {
        console.error("Erro no Controlador do GetProfileByUsername ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}

export const getUserPostsByUsername = async (req: ExtendedeRequest, resp: Response) => {
    try {
        const { id } = req.params;
        const safeData = userPostSchema.safeParse(req.query);
        if ( !safeData.success ) return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
        
        const hasUserById = await findUserByPassId(id);
        if ( !hasUserById ) return resp.status(404).json({ error: "Usuário não encontrado." });
        
        // const perPage = 2;
        // let currentPage = safeData.data.page ?? 0;

        const userPosts = await getUserPosts(hasUserById.id)
        if ( !userPosts ) return resp.status(404).json({ message: "Nenhum Post encontrado." })

        resp.status(200).json(userPosts)
        
    } catch (error) {
        console.error("Erro no Controlador do GetUserPosts ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}

export const getUserLikedPostsByUsername = async (req: ExtendedeRequest, resp: Response) => {
    try {
        const { id } = req.params;
        
        const hasUserById = await findUserByPassId(id);
        if ( !hasUserById ) return resp.status(404).json({ error: "Usuário não encontrado." });
        
        // const perPage = 2;
        // let currentPage = safeData.data.page ?? 0;

        // const getPostsUsers = await getUserPosts(hasUserById.id);
        const userLikesPost = await getUserLikedPosts(hasUserById.id)
        if ( !userLikesPost ) return resp.status(404).json({ message: "Postagem curtidas não encontrada." })

        resp.status(200).json(userLikesPost)
        
    } catch (error) {
        console.error("Erro no Controlador do GetUserLikedPostsByUsername ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}

export const getUserFollowPostByUsername = async (req: ExtendedeRequest, resp: Response) => {
    const { id } = req.params;
    const safeData = userPostSchema.safeParse(req.query);
    if ( !safeData.success ) return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
    
    const hasUserById = await findUserByPassId(id);
    if ( !hasUserById ) return resp.status(404).json({ error: "Usuário não encontrado." });
    
    const userFollowing = await getUserFollowings(hasUserById.id)
    const findUserFollowingPost = await getFindUserFollowingPosts(userFollowing);

    if ( findUserFollowingPost ){
        return resp.status(200).json(findUserFollowingPost)
    } else {
        return resp.status(200).json({ message: "Nenhum post de quem segues."});
    }
}

export const isFollowingUser = async (req: ExtendedeRequest, resp: Response) => {
    try {
        const { id } = req.params;
        const { authId } = req.body;
        const userParams = await findUserByPassId(id);
        const currentUser = await findUserByPassId(authId);

        
        if ( !userParams || !currentUser ) return resp.status(404).json({ message: "Usuário não encontrado" })
        // if ( userParams?.id === currentUser?.id ) return resp.status(400).json({ message: true });

        const hasUserToBeFollowed = await isFollowing(currentUser.id,userParams.id);

        return resp.status(200).json(hasUserToBeFollowed );
    } catch (error) {
        console.error("Erro no Controlador do isUserFollowing ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}

export const followUnfollowUser = async (req: ExtendedeRequest, resp: Response) => {
    try {
        const { id } = req.params;
        const { getUserId } = req.body;
        const userParams = await findUserByPassId(id);
        const currentUser = await findUserByPassId(getUserId);

        if ( !userParams || !currentUser ) return resp.status(404).json({ message: "Usuário não encontrado" })

        if ( userParams?.id === currentUser?.id ) return resp.status(400).json({error: "you can't follwo/unfoolow yourself"});

        const hasUserToBeFollowed = await isFollowing(currentUser.id,userParams.id);
        if ( hasUserToBeFollowed ){ 
            await unFollowUser(currentUser.id, userParams.id);
            resp.status(200).json({ message: "Usuário deixou de seguir com sucesso." });
        }  else {
            await follwUser(currentUser.id, userParams.id);
            resp.status(200).json({ message: "Usuário seguido com sucesso." });
        }


    } catch (error) {
        console.error("Erro no Controlador do GetUserPosts ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}


export const updateProfileUser = async (req: ExtendedeRequest, resp: Response) => {
    try {
        
        const { id } = req.params; 
        const safeData = userSchema.safeParse(req.body);
        const currentUser = await findUserByPassId(id);

        if (!safeData.success) return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
        if ( !currentUser || !currentUser ) return resp.status(404).json({ message: "Usuário não encontrado" })

        
        let { profileImg, coverImg } = req.body;
        if ( profileImg ){
            if ( currentUser.profileImg ) {
                const getProfileImg = currentUser.profileImg as string
                await cloudinary.uploader.destroy(getProfileImg.split("/").pop()!.split("./")[0]);
            }

            const profileUploadedResponse = await cloudinary.uploader.upload(profileImg);
            profileImg = profileUploadedResponse.secure_url;
        }

        if ( coverImg ){
            if ( currentUser.profileImg ) {
                const getCoverImg = currentUser.coverImg as string
                await cloudinary.uploader.destroy(getCoverImg.split("/").pop()!.split("./")[0]);
            }

            const coverImgUploadedResponse = await cloudinary.uploader.upload(coverImg);
            coverImg = coverImgUploadedResponse.secure_url;
        }

        const user: any = await updateProfileUserInfo(id, safeData.data);

        return resp.status(200).json(user);
    } catch (error) {
        console.error("Erro no Controlador do UpdateProfileUser ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}

export const userSuggestions = async (req: ExtendedeRequest, resp: Response) => {
    try {
        const { getUserId } = req.body;
        const currentUser = await findUserByPassId(getUserId);
        if ( !currentUser || !currentUser ) return resp.status(404).json({ message: "Usuário não encontrado" });

        const grandomUsers = await getRandomUsers(currentUser.id);
        return resp.status(200).json(grandomUsers);
    } catch (error) {
        console.error("Erro no Controlador do UserSuggestions ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}