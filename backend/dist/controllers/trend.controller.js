"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrends = void 0;
const trend_hashtag_action_1 = require("../services/trend.hashtag.action");
const getTrends = async (req, resp) => {
    try {
        const trends = await (0, trend_hashtag_action_1.getTranding)();
        if (trends.length > 0) {
            return resp.status(200).json(trends);
        }
        else {
            return resp.status(200).json({ message: "not found trends" });
        }
    }
    catch (error) {
    }
};
exports.getTrends = getTrends;
