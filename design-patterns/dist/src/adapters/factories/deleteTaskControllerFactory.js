"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskControllerFactory = void 0;
const dbDeleteTask_1 = require("../../dataSources/db/dbDeleteTask");
const repository_1 = require("../../dataSources/db/repository");
const deleteTask_1 = require("../controllers/task/deleteTask");
const errorLogControllerDecorator_1 = require("../decorators/errorLogControllerDecorator");
const deleteTaskValidationCompositeFactory_1 = require("./deleteTaskValidationCompositeFactory");
const deleteTaskControllerFactory = () => {
    const taskMongoRepository = new repository_1.TaskMongoRepository();
    const deleteTaskUseCase = new dbDeleteTask_1.DbDeleteTask(taskMongoRepository);
    const deleteTaskController = new deleteTask_1.DeleteTaskController(deleteTaskUseCase, (0, deleteTaskValidationCompositeFactory_1.deleteTaskValidationCompositeFactory)());
    const errorLogMongoRepository = new repository_1.ErrorLogMongoRepository();
    return new errorLogControllerDecorator_1.ErrorLogControllerDecorator(deleteTaskController, errorLogMongoRepository);
};
exports.deleteTaskControllerFactory = deleteTaskControllerFactory;
