"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noContent = exports.created = exports.serverError = exports.badRequest = void 0;
const server_error_1 = require("../errors/server-error");
const badRequest = (error) => ({
    statusCode: 400,
    body: error,
});
exports.badRequest = badRequest;
const serverError = (error) => ({
    statusCode: 500,
    body: new server_error_1.ServerError(error.stack),
});
exports.serverError = serverError;
const created = (data) => ({
    statusCode: 201,
    body: data,
});
exports.created = created;
const noContent = () => ({
    statusCode: 204,
});
exports.noContent = noContent;
