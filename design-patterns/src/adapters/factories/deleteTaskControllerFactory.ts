import { DbDeleteTask } from "../../dataSources/db/dbDeleteTask";
import {
  ErrorLogMongoRepository,
  TaskMongoRepository,
} from "../../dataSources/db/repository";
import { DeleteTask } from "../../usecases/deleteTask";
import { TaskRepository } from "../../usecases/repository/taskRepository";
import { DeleteTaskController } from "../controllers/task/deleteTask";
import { ErrorLogControllerDecorator } from "../decorators/errorLogControllerDecorator";
import { deleteTaskValidationCompositeFactory } from "./deleteTaskValidationCompositeFactory";

export const deleteTaskControllerFactory = (): ErrorLogControllerDecorator => {
  const taskMongoRepository: TaskRepository = new TaskMongoRepository();
  const deleteTaskUseCase: DeleteTask = new DbDeleteTask(taskMongoRepository);

  const deleteTaskController = new DeleteTaskController(
    deleteTaskUseCase,
    deleteTaskValidationCompositeFactory()
  );

  const errorLogMongoRepository = new ErrorLogMongoRepository();

  return new ErrorLogControllerDecorator(
    deleteTaskController,
    errorLogMongoRepository
  );
};
