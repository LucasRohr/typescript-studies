import { Express, Router } from "express";
import taskRoutes from "../routes/taskRoutes";

export default (app: Express): void => {
  const router = Router();
  taskRoutes(router);
  app.use("/api", router);
};
