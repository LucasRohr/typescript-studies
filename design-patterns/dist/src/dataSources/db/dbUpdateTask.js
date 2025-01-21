"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateTask = void 0;
class DbUpdateTask {
    constructor(repository) {
        this.repository = repository;
    }
    async update(updateTask) {
        const task = await this.repository.update(updateTask);
        return task;
    }
}
exports.DbUpdateTask = DbUpdateTask;
