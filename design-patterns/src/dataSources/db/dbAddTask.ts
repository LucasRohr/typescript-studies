import { Task } from "../../entities/task";
import { AddTaskModel, AddTask } from "../../usecases/addTask";
import { TaskRepository } from "../../usecases/repository/taskRepository";

export class DbAddTask implements AddTask {
  constructor(private readonly taskRepository: TaskRepository) {}

  async add(taskData: AddTaskModel): Promise<Task> {
    const task = await this.taskRepository.add(taskData);
    return task;
  }
}
