import { DbListTasks } from "../../dataSources/db/dbListTasks";
import {
  ErrorLogMongoRepository,
  TaskMongoRepository,
} from "../../dataSources/db/repository";
import { ListTasksController } from "../controllers/task/listTasks";
import { ErrorLogControllerDecorator } from "../decorators/errorLogControllerDecorator";
import { Controller } from "../interfaces";

export const listTasksControllerFactory = (): Controller => {
  const tasksRepository = new TaskMongoRepository();
  const listTasksUseCase = new DbListTasks(tasksRepository);
  const controller = new ListTasksController(listTasksUseCase);
  const logMongoRepository = new ErrorLogMongoRepository();

  return new ErrorLogControllerDecorator(controller, logMongoRepository);
};
