import { Task } from "../entities/task";

export interface AddTaskModel {
  title: string;
  description: string;
  date: string;
}

export interface AddTask {
  add(task: AddTaskModel): Promise<Task>;
}
