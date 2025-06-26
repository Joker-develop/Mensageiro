import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import mainRouter from "./router/mainRouters";
import { v2 as cloudinary } from "cloudinary";
// import { clerkClient, getAuth, requireAuth } from "@clerk/express";
// import { clerkMiddleware, requireAuth } from "@clerk/express";
// import { ClerkExpressRequireAuth, ClerkExpressWithAuth } from '@clerk/clerk-sdk-node'

dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_APY_KEY,
    api_secret: process.env.CLOUDINARY_APY_SECRET
})


const server = express();
const LPORT = process.env.PORT || 8000;

// server.use(clerkMiddleware());
// server.use(requireAuth());
server.use(helmet());
server.use(cors());
server.use(urlencoded({ extended: true }));
server.use(express.json({limit: "5mb"}));
server.use(cookieParser());


server.use(mainRouter);

// server.get('/protected', async (req, res) => {
//     // Use `getAuth()` to get the user's `userId`
//     // const { userId } = getAuth(req)
  
//     // Use Clerk's JavaScript Backend SDK to get the user's User object
//     const user = await clerkClient.users.getUserList()
  
//     res.json({ user: req })
// });

// // Use the strict middleware that throws when unauthenticated
// server.get('/protected-auth-required', ClerkExpressRequireAuth() as unknown as RequestHandler, (req, res) => {
//     res.json(req.auth)
//   })
  
//   // Use the lax middleware that returns an empty auth object when unauthenticated
//   server.get('/protected-auth-optional', ClerkExpressWithAuth() as unknown as RequestHandler, (req, res) => {
//     res.json(req.auth)
//   })
  
//   // Error handling middleware function
//   server.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(401).send('Unauthenticated!')
//   })

server.listen( LPORT, () => {
    console.log(`"Server is running on PORT: ${LPORT}`);
    console.log(process.env.DATABASE_URL)
})