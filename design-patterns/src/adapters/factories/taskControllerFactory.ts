import { DbAddTask } from "../../dataSources/db/dbAddTask";
import { ErrorLogMongoRepository } from "../../dataSources/db/repository/errorLogMongoRepository";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { AddTask } from "../../usecases/addTask";
import { AddTaskRepository } from "../../usecases/repository/addTaskRepository";
import { AddTaskController } from "../controllers/task/addTask";
import { ErrorLogControllerDecorator } from "../decorators/errorLogControllerDecorator";
import { addTaskValidationCompositeFactory } from "./addTaskValidationCompositeFactory";

export const taskControllerFactory = (): ErrorLogControllerDecorator => {
  const addTaskMongoRepository: AddTaskRepository = new TaskMongoRepository();
  const addTaskUseCase: AddTask = new DbAddTask(addTaskMongoRepository);

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
