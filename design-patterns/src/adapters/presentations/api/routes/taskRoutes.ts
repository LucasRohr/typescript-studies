import { Router } from "express";
import { expressRouteAdapter } from "../../../expressRouteAdapter";
import { addTaskControllerFactory } from "../../../factories/addTaskControllerFactory";
import { deleteTaskControllerFactory } from "../../../factories/deleteTaskControllerFactory";
import { listTasksControllerFactory } from "../../../factories/listTasksControllerFactory";

export default (router: Router): void => {
  router.post("/tasks", expressRouteAdapter(addTaskControllerFactory()));
  router.delete("/tasks", expressRouteAdapter(deleteTaskControllerFactory()));
  router.get("/tasks", expressRouteAdapter(listTasksControllerFactory()));
};
