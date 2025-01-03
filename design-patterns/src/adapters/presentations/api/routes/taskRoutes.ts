import { Router } from "express";
import { expressRouteAdapter } from "../../../expressRouteAdapter";
import { taskControllerFactory } from "../../../factories/taskControllerFactory";

export default (router: Router): void => {
  router.post("/tasks", expressRouteAdapter(taskControllerFactory()));
};
