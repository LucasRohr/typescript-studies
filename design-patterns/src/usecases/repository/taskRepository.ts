import { Task } from "../../entities/task";
import { AddTaskModel } from "../addTask";
import { UpdateTaskModel } from "../updateTask";

export interface TaskRepository {
  add(taskData: AddTaskModel): Promise<Task>;
  delete(taskId: string): Promise<void | Error>;
  list(): Promise<Task[]>;
  update(updateTask: UpdateTaskModel): Promise<Task>;
}
