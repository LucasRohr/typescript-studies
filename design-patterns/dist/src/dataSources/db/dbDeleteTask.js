"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteTask = void 0;
class DbDeleteTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async delete(taskId) {
        return await this.taskRepository.delete(taskId);
    }
}
exports.DbDeleteTask = DbDeleteTask;
