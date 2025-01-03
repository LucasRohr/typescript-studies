import { Task } from "../../../entities/task";
import { AddATaskModel } from "../../../usecases/addTask";
import { AddTaskRepository } from "../../../usecases/repository/addTaskRepository";
import { MongoManager } from "../../config/mongoManager";

export class TaskMongoRepository implements AddTaskRepository {
  async add(taskData: AddATaskModel): Promise<Task> {
    const tasksCollection = MongoManager.getInstance().getCollection("tasks");

    const { insertedId } = await tasksCollection.insertOne(taskData);

    const dbTask = await tasksCollection.findOne({ _id: insertedId });

    if (!dbTask) {
      throw new Error("Task not found");
    }

    const task: Task = {
      id: dbTask._id.toHexString(),
      title: dbTask.title,
      description: dbTask.description,
      date: dbTask.date,
    };

    return task;
  }
}
