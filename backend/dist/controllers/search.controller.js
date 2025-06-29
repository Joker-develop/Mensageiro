"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPosts = void 0;
const search_schema_1 = require("../schemas/search.schema");
const post_action_1 = require("../services/post.action");
const searchPosts = async (req, resp) => {
    try {
        const safeData = search_schema_1.searchSchema.safeParse(req.query);
        if (!safeData.success)
            return resp.status(400).json({ error: safeData.error.flatten().fieldErrors });
        const postByBodyOrAuthor = await (0, post_action_1.getfindPostByBodyOrAuthor)(safeData.data.q);
        if (postByBodyOrAuthor.length > 0) {
            return resp.status(200).json(postByBodyOrAuthor);
        }
        else {
            return resp.status(200).json({ message: "not found search post" });
        }
    }
    catch (error) {
    }
};
exports.searchPosts = searchPosts;
