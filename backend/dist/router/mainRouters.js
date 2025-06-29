"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pingController = __importStar(require("../controllers/ping.controller"));
const authController = __importStar(require("../controllers/auth.controller"));
const postController = __importStar(require("../controllers/post.controller"));
const userController = __importStar(require("../controllers/user.controller"));
const feedController = __importStar(require("../controllers/feed.controller"));
const searchController = __importStar(require("../controllers/search.controller"));
const threndController = __importStar(require("../controllers/trend.controller"));
const notificationController = __importStar(require("../controllers/notification.controller"));
const mainRouter = (0, express_1.Router)();
mainRouter.get("/", (res, resp) => {
    resp.send("Banckend rodando");
});
mainRouter.get("/ping", pingController.ping); // testando as rotas
mainRouter.post("/privateping", pingController.privatePing); // testando as rotas privadas
mainRouter.post("/publications/auth/signup", authController.signUp);
mainRouter.post("/publications/auth/signin", authController.signIn);
mainRouter.post("/publications/auth/logOut", authController.logOut);
mainRouter.get("/publications/user/:username/profile", userController.getProfileByUsername); // pegar usuário pelo seu username
mainRouter.get("/publications/user/:id/posts", userController.getUserPostsByUsername); // pegar todos os post de um usuário pelo username
mainRouter.get("/publications/user/:id/likes", userController.getUserLikedPostsByUsername); // pegar todos os post de um usuário pelo username
mainRouter.get("/publications/user/:id/following", userController.getUserFollowPostByUsername); // pegar todos os post de um usuário que eu sigo pelo username
mainRouter.post("/publications/user/:id/isfollowing", userController.isFollowingUser); // verificar se já é seguido ou ainda não
mainRouter.post("/publications/user/:id/follow", userController.followUnfollowUser); // pegar todos User que segue pelo id
mainRouter.post("/publications/user/:id/update", userController.updateProfileUser); // pegar actualizar os dados do usuário  logado
mainRouter.post("/publications/suggestions", userController.userSuggestions); // pegar as sugestºões de quem seguir
// mainRouter.put("/user/avatar-image") // actualizar o a imagem do uzuário logado
// mainRouter.put("/user/cover-image") // actualizar o a imagem do fundo do uzuário logado
mainRouter.get("/publications/user/:username/notifications", notificationController.getAllNotifications); // pegar todos os posts da pagina principal
mainRouter.get("/publications/user/:username/notificationsAsRead", notificationController.getMarkNotificationsAsRead); // pegar todos os posts da pagina principal
mainRouter.post("/publications/post/create", postController.addPost); // pegar os post e colocar no banco de dados
mainRouter.get("/publications/post/:id", postController.getPostById); // pegar um post pelo seu id
mainRouter.delete("/publications/post/:id", postController.deletePost); // apagar um post pelo seu id
mainRouter.post("/publications/post/:id/like", postController.likeUnlikePost); // pegar o like em post e adicionar no banco de dados
mainRouter.post("/publications/post/:id/comment", postController.commentOnPost); // pegar os comentários de um post
mainRouter.delete("/publications/post/:id/comment/:cid", postController.deleteComment); // apagar um commentário pelo seu id
mainRouter.get("/publications/feed", feedController.feedPosts); // pegar todos os posts da pagina principal
// mainRouter.get("/nofifications") // pegar toas as notificações
mainRouter.get("/publications/search", searchController.searchPosts); // pegar as pesquisas feitas
mainRouter.get("/publications/trending", threndController.getTrends); // pegar todas as Restag de um comentário ou publicações
exports.default = mainRouter;
