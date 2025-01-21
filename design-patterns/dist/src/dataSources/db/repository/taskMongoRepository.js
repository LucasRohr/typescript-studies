"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMongoRepository = void 0;
const not_found_error_1 = require("../../../adapters/presentations/api/errors/not-found-error");
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
    async list() {
        const tasksCollection = mongoManager_1.MongoManager.getInstance().getCollection("tasks");
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
    async update(updateTask) {
        const tasksColletion = mongoManager_1.MongoManager.getInstance().getCollection("tasks");
        const { id, ...updateData } = updateTask;
        const task = await tasksColletion.findOne({ _id: new mongodb_1.ObjectId(id) });
        if (!task) {
            throw new not_found_error_1.NotFoundError();
        }
        const result = await tasksColletion.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: updateData });
        if (!result.acknowledged) {
            throw new server_error_1.ServerError();
        }
        const updatedTask = await tasksColletion.findOne({ _id: new mongodb_1.ObjectId(id) });
        return {
            id,
            title: updatedTask === null || updatedTask === void 0 ? void 0 : updatedTask.title,
            description: updatedTask === null || updatedTask === void 0 ? void 0 : updatedTask.description,
            date: updatedTask === null || updatedTask === void 0 ? void 0 : updatedTask.date,
        };
    }
}
exports.TaskMongoRepository = TaskMongoRepository;
