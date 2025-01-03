"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addTask_1 = require("../../../controllers/task/addTask");
const expressRouteAdapter_1 = require("../../../expressRouteAdapter");
const dateValidatorAdapter_1 = require("../../../dateValidatorAdapter");
const dbAddTask_1 = require("../../../../dataSources/db/dbAddTask");
const taskMongoRepository_1 = require("../../../../dataSources/db/repository/taskMongoRepository");
exports.default = (router) => {
    const dateValidatorAdapter = new dateValidatorAdapter_1.DateValidatorAdapter();
    const addTaskRepository = new taskMongoRepository_1.TaskMongoRepository();
    const addTaskUseCase = new dbAddTask_1.DbAddTask(addTaskRepository);
    const addTaskController = new addTask_1.AddTaskController(addTaskUseCase, dateValidatorAdapter);
    router.post("/tasks", (0, expressRouteAdapter_1.expressRouteAdapter)(addTaskController));
};
