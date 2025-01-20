import { Task } from "../entities/task";

export interface UpdateTaskModel {
  id: string;
  title?: string;
  description?: string;
  date?: string;
}

export interface UpdateTask {
  update(task: UpdateTaskModel): Promise<Task>;
}
