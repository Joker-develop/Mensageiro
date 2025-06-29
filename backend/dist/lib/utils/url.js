"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicURL = void 0;
const getPublicURL = (url) => {
    return `${process.env.BASE_URL}/${url}`;
};
exports.getPublicURL = getPublicURL;
