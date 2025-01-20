"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTaskControllerFactory = void 0;
const db_1 = require("../../dataSources/db");
const repository_1 = require("../../dataSources/db/repository");
const addTask_1 = require("../controllers/task/addTask");
const errorLogControllerDecorator_1 = require("../decorators/errorLogControllerDecorator");
const addTaskValidationCompositeFactory_1 = require("./addTaskValidationCompositeFactory");
const addTaskControllerFactory = () => {
    const taskMongoRepository = new repository_1.TaskMongoRepository();
    const addTaskUseCase = new db_1.DbAddTask(taskMongoRepository);
    const taskController = new addTask_1.AddTaskController(addTaskUseCase, (0, addTaskValidationCompositeFactory_1.addTaskValidationCompositeFactory)());
    const errorLogMongoRepository = new repository_1.ErrorLogMongoRepository();
    return new errorLogControllerDecorator_1.ErrorLogControllerDecorator(taskController, errorLogMongoRepository);
};
exports.addTaskControllerFactory = addTaskControllerFactory;
