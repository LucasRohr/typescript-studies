"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMongoRepository = void 0;
const mongoManager_1 = require("../../config/mongoManager");
class TaskMongoRepository {
    async add(taskData) {
        const tasksCollection = mongoManager_1.MongoManager.getInstance().getCollection("tasks");
        const { insertedId } = await tasksCollection.insertOne(taskData);
        const dbTask = await tasksCollection.findOne({ _id: insertedId });
        if (!dbTask) {
            throw new Error("Task not found");
        }
        const task = {
            id: dbTask._id.toHexString(),
            title: dbTask.title,
            description: dbTask.description,
            date: dbTask.date,
        };
        return task;
    }
}
exports.TaskMongoRepository = TaskMongoRepository;
