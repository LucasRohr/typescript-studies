import { Task } from "../../entities/task";
import { TaskRepository } from "../../usecases/repository";
import { UpdateTask, UpdateTaskModel } from "../../usecases/updateTask";

export class DbUpdateTask implements UpdateTask {
  constructor(private readonly repository: TaskRepository) {}

  async update(updateTask: UpdateTaskModel): Promise<Task> {
    const task = await this.repository.update(updateTask);

    return task;
  }
}
