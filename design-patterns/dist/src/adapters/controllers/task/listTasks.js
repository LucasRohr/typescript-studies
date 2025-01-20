"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksController = void 0;
const httpResponses_1 = require("../../presentations/api/httpResponses/httpResponses");
class ListTasksController {
    constructor(listTasks) {
        this.listTasks = listTasks;
    }
    async handle(httpRequest) {
        try {
            const tasks = await this.listTasks.list();
            if (tasks.length) {
                return (0, httpResponses_1.ok)(tasks);
            }
            return (0, httpResponses_1.noContent)();
        }
        catch (error) {
            return (0, httpResponses_1.serverError)(error);
        }
    }
}
exports.ListTasksController = ListTasksController;
