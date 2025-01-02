import { Router } from "express";
import { AddTaskController } from "../../../controllers/task/addTask";
import { expressRouteAdapter } from "../../../expressRouteAdapter";
import { DateValidatorAdapter } from "../../../dateValidatorAdapter";

export default (router: Router): void => {
  const dateValidatorAdapter = new DateValidatorAdapter();
  const addTaskController = new AddTaskController(dateValidatorAdapter);

  router.post("/tasks", expressRouteAdapter(addTaskController));
};
