import { DbAddTask } from "../../dataSources/db/dbAddTask";
import { ErrorLogMongoRepository } from "../../dataSources/db/repository/errorLogMongoRepository";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { AddTask } from "../../usecases/addTask";
import { TaskRepository } from "../../usecases/repository/taskRepository";
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
