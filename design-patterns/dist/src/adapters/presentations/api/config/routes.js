"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskRoutes_1 = __importDefault(require("../routes/taskRoutes"));
exports.default = (app) => {
    const router = (0, express_1.Router)();
    (0, taskRoutes_1.default)(router);
    app.use("/api", router);
};
