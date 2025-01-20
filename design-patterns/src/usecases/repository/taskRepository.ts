import { Task } from "../../entities/task";
import { AddTaskModel } from "../addTask";

export interface TaskRepository {
  add(taskData: AddTaskModel): Promise<Task>;
  delete(taskId: string): Promise<void | Error>;
  list(): Promise<Task[]>;
}
