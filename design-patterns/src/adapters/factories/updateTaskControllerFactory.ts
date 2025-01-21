import { DbUpdateTask } from "../../dataSources/db/dbUpdateTask";
import {
  ErrorLogMongoRepository,
  TaskMongoRepository,
} from "../../dataSources/db/repository";
import { TaskRepository } from "../../usecases/repository";
import { UpdateTaskController } from "../controllers/task/updateTask";
import { ErrorLogControllerDecorator } from "../decorators/errorLogControllerDecorator";
import { Controller } from "../interfaces";
import { RequiredFieldsValidation } from "../validations/requiredFieldsValidation";

export const updateTaskControllerFactory = (): Controller => {
  const repository = new TaskMongoRepository();
  const updateTaskUseCase = new DbUpdateTask(repository);

  const taskController = new UpdateTaskController(
    updateTaskUseCase,
    new RequiredFieldsValidation("id")
  );

  const errorLogMongoRepository = new ErrorLogMongoRepository();

  return new ErrorLogControllerDecorator(
    taskController,
    errorLogMongoRepository
  );
};
