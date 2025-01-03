import { Router } from "express";
import { AddTaskController } from "../../../controllers/task/addTask";
import { expressRouteAdapter } from "../../../expressRouteAdapter";
import { DateValidatorAdapter } from "../../../dateValidatorAdapter";
import { AddTask } from "../../../../usecases/addTask";
import { DbAddTask } from "../../../../dataSources/db/dbAddTask";
import { TaskMongoRepository } from "../../../../dataSources/db/repository/taskMongoRepository";
import { AddTaskRepository } from "../../../../usecases/repository/addTaskRepository";

export default (router: Router): void => {
  const dateValidatorAdapter = new DateValidatorAdapter();

  const addTaskRepository: AddTaskRepository = new TaskMongoRepository();
  const addTaskUseCase: AddTask = new DbAddTask(addTaskRepository);

  const addTaskController = new AddTaskController(
    addTaskUseCase,
    dateValidatorAdapter
  );

  router.post("/tasks", expressRouteAdapter(addTaskController));
};
