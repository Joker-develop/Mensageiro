import { NextFunction, Response } from "express"
import jwt from "jsonwebtoken";
import { findUserByPassId } from "../services/user.action";
import { ExtendedeRequest } from "../types/extended.request";


const protectRoute = (req: ExtendedeRequest, resp: Response, nextFunc: NextFunction) => {
    try {
        const token = req.cookies.jwt;
        if ( !token ) return resp.status(401).json({ error: "Não autorizado *** nenhum Token encontrado ***" });

        jwt.verify(
            token,
            process.env.JWT_SECRET as string,
            async ( error: any, decoded: any ) => {
                if ( error ) return resp.status(401).json({ error: "Não autorizado *** Token inválido ***" });
                
                const user = await findUserByPassId( decoded.data.id );
                if ( !user ) return resp.status(404).json({ error: "*** Usuário não encontrado ***" });

                req.userId = user.id;
                nextFunc();
            }
        );

    } catch ( error ){
        console.error("Erro no Protector de Routa do MIddleware ", error);
        return resp.status(500).json({ error: "Error Interno do Servidor" });
    }
}

export default protectRoute