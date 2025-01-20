"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
class NotFoundError extends Error {
    constructor(stack) {
        super("Not Found Error");
        this.name = "NotFoundError";
        this.stack = stack;
    }
}
exports.NotFoundError = NotFoundError;
