"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateTokenAndSetCookie = (data, resp) => {
    const token = jsonwebtoken_1.default.sign({ data }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });
    resp.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 100, // MS
        httpOnly: true, // prevent XSS attacks cross-siteb scripting attacks
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development",
    });
};
exports.default = generateTokenAndSetCookie;
