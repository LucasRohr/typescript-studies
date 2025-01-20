"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbListTasks = void 0;
class DbListTasks {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async list() {
        const tasks = await this.taskRepository.list();
        return tasks;
    }
}
exports.DbListTasks = DbListTasks;
