import { Task } from "../../entities/task";
import { ListTasks } from "../../usecases/listTasks";
import { TaskRepository } from "../../usecases/repository";

export class DbListTasks implements ListTasks {
  constructor(private readonly taskRepository: TaskRepository) {}

  async list(): Promise<Task[]> {
    await this.taskRepository.list();

    return [];
  }
}
