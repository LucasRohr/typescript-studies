"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskControllerFactory = void 0;
const dbAddTask_1 = require("../../dataSources/db/dbAddTask");
const errorLogMongoRepository_1 = require("../../dataSources/db/repository/errorLogMongoRepository");
const taskMongoRepository_1 = require("../../dataSources/db/repository/taskMongoRepository");
const addTask_1 = require("../controllers/task/addTask");
const errorLogControllerDecorator_1 = require("../decorators/errorLogControllerDecorator");
const addTaskValidationCompositeFactory_1 = require("./addTaskValidationCompositeFactory");
const taskControllerFactory = () => {
    const addTaskMongoRepository = new taskMongoRepository_1.TaskMongoRepository();
    const addTaskUseCase = new dbAddTask_1.DbAddTask(addTaskMongoRepository);
    const taskController = new addTask_1.AddTaskController(addTaskUseCase, (0, addTaskValidationCompositeFactory_1.addTaskValidationCompositeFactory)());
    const errorLogMongoRepository = new errorLogMongoRepository_1.ErrorLogMongoRepository();
    return new errorLogControllerDecorator_1.ErrorLogControllerDecorator(taskController, errorLogMongoRepository);
};
exports.taskControllerFactory = taskControllerFactory;
