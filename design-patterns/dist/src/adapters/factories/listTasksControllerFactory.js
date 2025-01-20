"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTasksControllerFactory = void 0;
const dbListTasks_1 = require("../../dataSources/db/dbListTasks");
const repository_1 = require("../../dataSources/db/repository");
const listTasks_1 = require("../controllers/task/listTasks");
const errorLogControllerDecorator_1 = require("../decorators/errorLogControllerDecorator");
const listTasksControllerFactory = () => {
    const tasksRepository = new repository_1.TaskMongoRepository();
    const listTasksUseCase = new dbListTasks_1.DbListTasks(tasksRepository);
    const controller = new listTasks_1.ListTasksController(listTasksUseCase);
    const logMongoRepository = new repository_1.ErrorLogMongoRepository();
    return new errorLogControllerDecorator_1.ErrorLogControllerDecorator(controller, logMongoRepository);
};
exports.listTasksControllerFactory = listTasksControllerFactory;
