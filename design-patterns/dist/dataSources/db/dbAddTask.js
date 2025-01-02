"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddTask = void 0;
class DbAddTask {
    constructor(addTaskRepository) {
        this.addTaskRepository = addTaskRepository;
    }
    async add(taskData) {
        const task = await this.addTaskRepository.add(taskData);
        return task;
    }
}
exports.DbAddTask = DbAddTask;
