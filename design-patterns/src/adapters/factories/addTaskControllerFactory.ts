import { DbAddTask } from "../../dataSources/db";
import {
  ErrorLogMongoRepository,
  TaskMongoRepository,
} from "../../dataSources/db/repository";
import { AddTask } from "../../usecases";
import { TaskRepository } from "../../usecases/repository";
import { AddTaskController } from "../controllers/task/addTask";
import { ErrorLogControllerDecorator } from "../decorators/errorLogControllerDecorator";
import { addTaskValidationCompositeFactory } from "./addTaskValidationCompositeFactory";

export const addTaskControllerFactory = (): ErrorLogControllerDecorator => {
  const taskMongoRepository: TaskRepository = new TaskMongoRepository();
  const addTaskUseCase: AddTask = new DbAddTask(taskMongoRepository);

  const taskController = new AddTaskController(
    addTaskUseCase,
    addTaskValidationCompositeFactory()
  );

  const errorLogMongoRepository = new ErrorLogMongoRepository();

  return new ErrorLogControllerDecorator(
    taskController,
    errorLogMongoRepository
  );
};
