import { DbAddTask } from "../../dataSources/db/dbAddTask";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { AddTask } from "../../usecases/addTask";
import { AddTaskRepository } from "../../usecases/repository/addTaskRepository";
import { AddTaskController } from "../controllers/task/addTask";
import { DateValidatorAdapter } from "../dateValidatorAdapter";
import { ErrorLogControllerDecorator } from "../decorators/errorLogControllerDecorator";

export const taskControllerFactory = (): ErrorLogControllerDecorator => {
  const dateValidatorAdapter = new DateValidatorAdapter();

  const addTaskRepository: AddTaskRepository = new TaskMongoRepository();
  const addTaskUseCase: AddTask = new DbAddTask(addTaskRepository);

  const taskController = new AddTaskController(
    addTaskUseCase,
    dateValidatorAdapter
  );

  return new ErrorLogControllerDecorator(taskController);
};
