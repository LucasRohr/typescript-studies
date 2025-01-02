"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addTask_1 = require("../../../controllers/task/addTask");
const expressRouteAdapter_1 = require("../../../expressRouteAdapter");
const dateValidatorAdapter_1 = require("../../../dateValidatorAdapter");
exports.default = (router) => {
    const dateValidatorAdapter = new dateValidatorAdapter_1.DateValidatorAdapter();
    const addTaskController = new addTask_1.AddTaskController(dateValidatorAdapter);
    router.post("/tasks", (0, expressRouteAdapter_1.expressRouteAdapter)(addTaskController));
};
