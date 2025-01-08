"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMongoRepository = void 0;
const server_error_1 = require("../../../adapters/presentations/api/errors/server-error");
const mongoManager_1 = require("../../config/mongoManager");
const mongodb_1 = require("mongodb");
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
    async delete(taskId) {
        const tasksCollection = mongoManager_1.MongoManager.getInstance().getCollection("tasks");
        const dbTask = await tasksCollection.findOne({ _id: new mongodb_1.ObjectId(taskId) });
        if (!dbTask) {
            return new server_error_1.ServerError("Task not found");
        }
        await tasksCollection.deleteOne({ _id: dbTask._id });
    }
}
exports.TaskMongoRepository = TaskMongoRepository;
