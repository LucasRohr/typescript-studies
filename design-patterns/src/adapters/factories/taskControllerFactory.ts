import { DbAddTask } from "../../dataSources/db/dbAddTask";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { AddTask } from "../../usecases/addTask";
import { AddTaskRepository } from "../../usecases/repository/addTaskRepository";
import { AddTaskController } from "../controllers/task/addTask";
import { DateValidatorAdapter } from "../dateValidatorAdapter";

export const taskControllerFactory = (): AddTaskController => {
  const dateValidatorAdapter = new DateValidatorAdapter();

  const addTaskRepository: AddTaskRepository = new TaskMongoRepository();
  const addTaskUseCase: AddTask = new DbAddTask(addTaskRepository);

  return new AddTaskController(addTaskUseCase, dateValidatorAdapter);
};
