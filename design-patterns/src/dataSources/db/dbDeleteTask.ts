import { DeleteTask } from "../../usecases/deleteTask";
import { TaskRepository } from "../../usecases/repository/taskRepository";

export class DbDeleteTask implements DeleteTask {
  constructor(private readonly taskRepository: TaskRepository) {}

  async delete(taskId: string): Promise<void | Error> {
    return await this.taskRepository.delete(taskId);
  }
}
