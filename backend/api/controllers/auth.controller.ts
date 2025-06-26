import { Request, Response } from "express";
import { signUpSchema } from "../schemas/signup.schema";
import {
  createUser,
  findUserByEmail,
  findUserByUserName,
} from "../services/user.action";
import slug from "slug";
import { hash, genSalt, compare } from "bcrypt-ts";
import generateTokenAndSetCookie from "../lib/utils/generateTokenAndSetCookie";
import { signInSchema } from "../schemas/signin.schema";

export const signIn = async (req: Request, resp: Response) => {
  try {
    const safeData = signInSchema.safeParse(req.body);
    if (!safeData.success) return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });

    //verificando se já não existe este email
    const userEmail = await findUserByEmail(safeData.data?.email!);
    if (!userEmail) return resp.status(401).json({ error: "Acesso negado!!!" });

    const verifyPass = await compare(safeData.data.clerkId, userEmail.clerkId);
    if (!verifyPass) return resp.status(401).json({ error: "Acesso negado!!!" });

    generateTokenAndSetCookie({ clerkid: userEmail.clerkId, id: userEmail.id }, resp );

    resp.status(200).json({
      user: {
        username: userEmail.username,
      },
    });
    
  } catch (error) {
    console.error("Erro no Controlador do SignIn ", error);
    resp.status(500).json({ error: "Error Interno do Servidor" });
  }
};

export const signUp = async (req: Request, resp: Response) => {
  try {
    // const {clerkId,name,username,email,profileImg,coverImg} = req.body;
    const safeData = signUpSchema.safeParse(req.body);
    if (!safeData.success) return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });

    //verificando se já existe um email
    // const hasEmail = await findUserByEmail(safeData.data?.email!);
    // if (hasEmail) return resp.status(400).json({ error: "E-mail já existe o <Token>" });

    const hasEmail = await findUserByEmail(safeData.data?.email!);
    if (!hasEmail){
      // Verificando se já existe um username <Slug ou nome de usuário>
      let getSlug = true;
      let userNameSlug = slug(safeData.data?.username!);

      while (getSlug) {
        const hasUserNameSlug = await findUserByUserName(userNameSlug);

        if (hasUserNameSlug) {

          const userNameSlugSuffix = Math.floor( Math.random() * 999999 ).toString();
          userNameSlug = slug(safeData.data?.username + userNameSlugSuffix);

        } else {
          getSlug = false;
        }
      }

      // gerando hash para esconder informçãoes
      const salt = await genSalt(10);
      const hasGerald = await hash(safeData.data?.clerkId!, salt);

      // criar o usuário ou seja inserir o usuário no Banco de Dados
      const newUserCreated = await createUser({
        profileImg: safeData.data?.profileImg,
        name: safeData.data?.name,
        clerkId: hasGerald,
        username: userNameSlug,
        email: safeData.data?.email!,
        coverImg: safeData.data.coverImg ?? safeData.data?.profileImg,
      });

      if (newUserCreated) {
        generateTokenAndSetCookie({ clerkid: newUserCreated.clerkId, id: newUserCreated.id }, resp );

        resp.status(200).json({message: "Usuário cadastrado"});

      } else {
        resp.status(400).json({ error: "Falha ao inserir dados do usuário" });
      }

    } else{ 
      return resp.status(200).json({ message: "Já  Existe" });
    }

    
  } catch (error) {
    console.error("Erro no Controlador do Signup ", error);
    resp.status(500).json({ error: "Error Interno do Servidor" });
  }
};

export const logOut = async (req: Request, resp: Response) => {
  try {

    resp.cookie("jwt", "", { maxAge: 0 });
    resp.status(200).json({ message: "Logged out successfully" });

  } catch (error) {
    console.error("Erro no Controlador do LogOut ", error);
    resp.status(500).json({ error: "Error Interno do Servidor" });
  }
};
