import { Request, RequestHandler, Response, Router } from "express";
import * as pingController from "../controllers/ping.controller";
import * as authController from "../controllers/auth.controller";
import * as postController from "../controllers/post.controller";
import * as userController from "../controllers/user.controller";
import * as feedController from "../controllers/feed.controller";
import * as searchController from "../controllers/search.controller";
import * as threndController from "../controllers/trend.controller";
import * as notificationController from "../controllers/notification.controller";
import protectRoute from "../middleware/protectRoute.middleware";


const mainRouter = Router(); 

mainRouter.get("/", (res, resp) => {
    resp.send("Banckend rodando");
})

mainRouter.get("/ping", pingController.ping as unknown as RequestHandler) // testando as rotas
mainRouter.post("/privateping",  pingController.privatePing as unknown as RequestHandler) // testando as rotas privadas


mainRouter.post("/publications/auth/signup", authController.signUp as unknown as RequestHandler);
mainRouter.post("/publications/auth/signin", authController.signIn as unknown as RequestHandler);
mainRouter.post("/publications/auth/logOut", authController.logOut as unknown as RequestHandler);

mainRouter.get("/publications/user/:username/profile",  userController.getProfileByUsername as unknown as RequestHandler) // pegar usuário pelo seu username
mainRouter.get("/publications/user/:id/posts",  userController.getUserPostsByUsername as unknown as RequestHandler) // pegar todos os post de um usuário pelo username
mainRouter.get("/publications/user/:id/likes",  userController.getUserLikedPostsByUsername as unknown as RequestHandler) // pegar todos os post de um usuário pelo username
mainRouter.get("/publications/user/:id/following",  userController.getUserFollowPostByUsername as unknown as RequestHandler) // pegar todos os post de um usuário que eu sigo pelo username
mainRouter.post("/publications/user/:id/isfollowing",  userController.isFollowingUser as unknown as RequestHandler) // verificar se já é seguido ou ainda não
mainRouter.post("/publications/user/:id/follow",  userController.followUnfollowUser as unknown as RequestHandler) // pegar todos User que segue pelo id
mainRouter.post("/publications/user/:id/update",  userController.updateProfileUser as unknown as RequestHandler) // pegar actualizar os dados do usuário  logado
mainRouter.post("/publications/suggestions",  userController.userSuggestions as unknown as RequestHandler) // pegar as sugestºões de quem seguir
// mainRouter.put("/user/avatar-image") // actualizar o a imagem do uzuário logado
// mainRouter.put("/user/cover-image") // actualizar o a imagem do fundo do uzuário logado

mainRouter.get("/publications/user/:username/notifications",  notificationController.getAllNotifications as unknown as RequestHandler) // pegar todos os posts da pagina principal
mainRouter.get("/publications/user/:username/notificationsAsRead",  notificationController.getMarkNotificationsAsRead as unknown as RequestHandler) // pegar todos os posts da pagina principal


mainRouter.post("/publications/post/create",  postController.addPost as unknown as RequestHandler) // pegar os post e colocar no banco de dados
mainRouter.get("/publications/post/:id",  postController.getPostById as unknown as RequestHandler) // pegar um post pelo seu id
mainRouter.delete("/publications/post/:id",  postController.deletePost as unknown as RequestHandler) // apagar um post pelo seu id
mainRouter.post("/publications/post/:id/like",  postController.likeUnlikePost as unknown as RequestHandler) // pegar o like em post e adicionar no banco de dados
mainRouter.post("/publications/post/:id/comment",  postController.commentOnPost as unknown as RequestHandler) // pegar os comentários de um post
mainRouter.delete("/publications/post/:id/comment/:cid",  postController.deleteComment as unknown as RequestHandler) // apagar um commentário pelo seu id

mainRouter.get("/publications/feed", feedController.feedPosts as unknown as RequestHandler) // pegar todos os posts da pagina principal
// mainRouter.get("/nofifications") // pegar toas as notificações
mainRouter.get("/publications/search",  searchController.searchPosts as unknown as RequestHandler) // pegar as pesquisas feitas
mainRouter.get("/publications/trending",  threndController.getTrends as unknown as RequestHandler) // pegar todas as Restag de um comentário ou publicações

export default mainRouter;
