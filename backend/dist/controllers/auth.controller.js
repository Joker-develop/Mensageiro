"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.signUp = exports.signIn = void 0;
const signup_schema_1 = require("../schemas/signup.schema");
const user_action_1 = require("../services/user.action");
const slug_1 = require("slugify");
const bcrypt_ts_1 = require("bcrypt");
const generateTokenAndSetCookie_1 = __importDefault(require("../lib/utils/generateTokenAndSetCookie"));
const signin_schema_1 = require("../schemas/signin.schema");
const signIn = async (req, resp) => {
    try {
        const safeData = signin_schema_1.signInSchema.safeParse(req.body);
        if (!safeData.success)
            return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
        //verificando se já não existe este email
        const userEmail = await (0, user_action_1.findUserByEmail)(safeData.data?.email);
        if (!userEmail)
            return resp.status(401).json({ error: "Acesso negado!!!" });
        const verifyPass = await (0, bcrypt_ts_1.compare)(safeData.data.clerkId, userEmail.clerkId);
        if (!verifyPass)
            return resp.status(401).json({ error: "Acesso negado!!!" });
        (0, generateTokenAndSetCookie_1.default)({ clerkid: userEmail.clerkId, id: userEmail.id }, resp);
        resp.status(200).json({
            user: {
                username: userEmail.username,
            },
        });
    }
    catch (error) {
        console.error("Erro no Controlador do SignIn ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.signIn = signIn;
const signUp = async (req, resp) => {
    try {
        // const {clerkId,name,username,email,profileImg,coverImg} = req.body;
        const safeData = signup_schema_1.signUpSchema.safeParse(req.body);
        if (!safeData.success)
            return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
        //verificando se já existe um email
        // const hasEmail = await findUserByEmail(safeData.data?.email!);
        // if (hasEmail) return resp.status(400).json({ error: "E-mail já existe o <Token>" });
        const hasEmail = await (0, user_action_1.findUserByEmail)(safeData.data?.email);
        if (!hasEmail) {
            // Verificando se já existe um username <Slug ou nome de usuário>
            let getSlug = true;
            let userNameSlug = (0, slug_1.default)(safeData.data?.username);
            while (getSlug) {
                const hasUserNameSlug = await (0, user_action_1.findUserByUserName)(userNameSlug);
                if (hasUserNameSlug) {
                    const userNameSlugSuffix = Math.floor(Math.random() * 999999).toString();
                    userNameSlug = (0, slug_1.default)(safeData.data?.username + userNameSlugSuffix);
                }
                else {
                    getSlug = false;
                }
            }
            // gerando hash para esconder informçãoes
            const salt = await (0, bcrypt_ts_1.genSalt)(10);
            const hasGerald = await (0, bcrypt_ts_1.hash)(safeData.data?.clerkId, salt);
            // criar o usuário ou seja inserir o usuário no Banco de Dados
            const newUserCreated = await (0, user_action_1.createUser)({
                profileImg: safeData.data?.profileImg,
                name: safeData.data?.name,
                clerkId: hasGerald,
                username: userNameSlug,
                email: safeData.data?.email,
                coverImg: safeData.data.coverImg ?? safeData.data?.profileImg,
            });
            if (newUserCreated) {
                (0, generateTokenAndSetCookie_1.default)({ clerkid: newUserCreated.clerkId, id: newUserCreated.id }, resp);
                resp.status(200).json({ message: "Usuário cadastrado" });
            }
            else {
                resp.status(400).json({ error: "Falha ao inserir dados do usuário" });
            }
        }
        else {
            return resp.status(200).json({ message: "Já  Existe" });
        }
    }
    catch (error) {
        console.error("Erro no Controlador do Signup ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.signUp = signUp;
const logOut = async (req, resp) => {
    try {
        resp.cookie("jwt", "", { maxAge: 0 });
        resp.status(200).json({ message: "Logged out successfully" });
    }
    catch (error) {
        console.error("Erro no Controlador do LogOut ", error);
        resp.status(500).json({ error: "Error Interno do Servidor" });
    }
};
exports.logOut = logOut;
