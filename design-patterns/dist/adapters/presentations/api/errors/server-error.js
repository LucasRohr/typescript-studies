"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
class ServerError extends Error {
    constructor(stack) {
        super("Internal Server Error");
        this.name = "ServerError";
        this.stack = stack;
    }
}
exports.ServerError = ServerError;
