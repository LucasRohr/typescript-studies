import { Task } from "../../../entities/task";
import { AddATaskModel } from "../../../usecases/addTask";
import { AddTaskRepository } from "../../../usecases/repository/addTaskRepository";

export class TaskMongoRepository implements AddTaskRepository {
  add(taskData: AddATaskModel): Promise<Task> {
    throw new Error("Method not implemented.");
  }
}
