"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressRouteAdapter_1 = require("../../../expressRouteAdapter");
const addTaskControllerFactory_1 = require("../../../factories/addTaskControllerFactory");
const deleteTaskControllerFactory_1 = require("../../../factories/deleteTaskControllerFactory");
exports.default = (router) => {
    router.post("/tasks", (0, expressRouteAdapter_1.expressRouteAdapter)((0, addTaskControllerFactory_1.addTaskControllerFactory)()));
    router.delete("/tasks", (0, expressRouteAdapter_1.expressRouteAdapter)((0, deleteTaskControllerFactory_1.deleteTaskControllerFactory)()));
};
