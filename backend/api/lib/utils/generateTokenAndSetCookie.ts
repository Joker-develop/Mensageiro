import { Response } from "express";
import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = ( data: { clerkid: string; id: string }, resp: Response ) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET as string, {
    expiresIn: "15d",
  });

  resp.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 100, // MS
    httpOnly: true, // prevent XSS attacks cross-siteb scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
