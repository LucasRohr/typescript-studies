"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressRouteAdapter_1 = require("../../../expressRouteAdapter");
const taskControllerFactory_1 = require("../../../factories/taskControllerFactory");
exports.default = (router) => {
    router.post("/tasks", (0, expressRouteAdapter_1.expressRouteAdapter)((0, taskControllerFactory_1.taskControllerFactory)()));
};
