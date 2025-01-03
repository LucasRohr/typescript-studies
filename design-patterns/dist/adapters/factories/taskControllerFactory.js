"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskControllerFactory = void 0;
const dbAddTask_1 = require("../../dataSources/db/dbAddTask");
const taskMongoRepository_1 = require("../../dataSources/db/repository/taskMongoRepository");
const addTask_1 = require("../controllers/task/addTask");
const dateValidatorAdapter_1 = require("../dateValidatorAdapter");
const taskControllerFactory = () => {
    const dateValidatorAdapter = new dateValidatorAdapter_1.DateValidatorAdapter();
    const addTaskRepository = new taskMongoRepository_1.TaskMongoRepository();
    const addTaskUseCase = new dbAddTask_1.DbAddTask(addTaskRepository);
    return new addTask_1.AddTaskController(addTaskUseCase, dateValidatorAdapter);
};
exports.taskControllerFactory = taskControllerFactory;
