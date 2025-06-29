"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedPosts = void 0;
const post_action_1 = require("../services/post.action");
const feedPosts = async (req, resp) => {
    try {
        const pots = await (0, post_action_1.getPosts)();
        if (pots.length > 0) {
            return resp.status(200).json(pots);
        }
        else {
            return resp.status(200).json({ message: "not fecth post" });
        }
    }
    catch (error) {
    }
};
exports.feedPosts = feedPosts;
