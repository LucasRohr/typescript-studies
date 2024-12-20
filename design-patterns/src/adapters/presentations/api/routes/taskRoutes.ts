import { Request, Response, Router } from "express";
import { AddTaskController } from "../../../controllers/task/addTask";

export default (router: Router): void => {
  const addTaskController = new AddTaskController();
  router.post(
    "/tasks",
    async (req: Request, res: Response) =>
      await addTaskController.handle(req, res)
  );
};
