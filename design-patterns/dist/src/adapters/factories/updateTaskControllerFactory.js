"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskControllerFactory = void 0;
const dbUpdateTask_1 = require("../../dataSources/db/dbUpdateTask");
const repository_1 = require("../../dataSources/db/repository");
const updateTask_1 = require("../controllers/task/updateTask");
const errorLogControllerDecorator_1 = require("../decorators/errorLogControllerDecorator");
const requiredFieldsValidation_1 = require("../validations/requiredFieldsValidation");
const updateTaskControllerFactory = () => {
    const repository = new repository_1.TaskMongoRepository();
    const updateTaskUseCase = new dbUpdateTask_1.DbUpdateTask(repository);
    const taskController = new updateTask_1.UpdateTaskController(updateTaskUseCase, new requiredFieldsValidation_1.RequiredFieldsValidation("id"));
    const errorLogMongoRepository = new repository_1.ErrorLogMongoRepository();
    return new errorLogControllerDecorator_1.ErrorLogControllerDecorator(taskController, errorLogMongoRepository);
};
exports.updateTaskControllerFactory = updateTaskControllerFactory;
