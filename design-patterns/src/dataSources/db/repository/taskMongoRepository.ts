import { ServerError } from "../../../adapters/presentations/api/errors/server-error";
import { Task } from "../../../entities/task";
import { AddTaskModel } from "../../../usecases/addTask";
import { TaskRepository } from "../../../usecases/repository/taskRepository";
import { UpdateTaskModel } from "../../../usecases/updateTask";
import { MongoManager } from "../../config/mongoManager";
import { ObjectId } from "mongodb";

export class TaskMongoRepository implements TaskRepository {
  async add(taskData: AddTaskModel): Promise<Task> {
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

  async delete(taskId: string): Promise<void | Error> {
    const tasksCollection = MongoManager.getInstance().getCollection("tasks");

    const dbTask = await tasksCollection.findOne({ _id: new ObjectId(taskId) });

    if (!dbTask) {
      return new ServerError("Task not found");
    }

    await tasksCollection.deleteOne({ _id: dbTask._id });
  }

  async list(): Promise<Task[]> {
    const tasksCollection = MongoManager.getInstance().getCollection("tasks");

    const dbTasks = await tasksCollection.find().toArray();

    if (!dbTasks) {
      throw new Error("Tasks not found");
    }

    const mappedTasks = dbTasks.map((dbTask) => ({
      id: dbTask._id.toHexString(),
      title: dbTask.title,
      description: dbTask.description,
      date: dbTask.date,
    }));

    return mappedTasks;
  }

  update(updateTask: UpdateTaskModel): Promise<Task> {
    return Promise.resolve({
      id: "any_id",
      title: "any_title",
      description: "any_description",
      date: "13/08/2001",
    });
  }
}
