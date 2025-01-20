"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddTask = void 0;
class DbAddTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async add(taskData) {
        const task = await this.taskRepository.add(taskData);
        return task;
    }
}
exports.DbAddTask = DbAddTask;
