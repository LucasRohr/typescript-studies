import { Task } from "../../entities/task";
import { AddATaskModel } from "../addTask";

export interface TaskRepository {
  add(taskData: AddATaskModel): Promise<Task>;
  delete(taskId: string): Promise<void | Error>;
}
