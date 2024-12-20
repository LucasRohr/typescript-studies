import { Task } from "../entities/task";

export interface AddATaskModel {
  title: string;
  description: string;
  date: string;
}

export interface AddTask {
  add(task: AddATaskModel): Promise<Task>;
}
