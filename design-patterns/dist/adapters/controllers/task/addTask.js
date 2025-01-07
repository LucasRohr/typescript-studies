"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTaskController = void 0;
const httpResponses_1 = require("../../presentations/api/httpResponses/httpResponses");
class AddTaskController {
    constructor(addTaskUseCase, validation) {
        this.addTaskUseCase = addTaskUseCase;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.body);
            if (error) {
                return (0, httpResponses_1.badRequest)(error);
            }
            const requestBody = httpRequest.body;
            const { title, description, date } = requestBody;
            const task = await this.addTaskUseCase.add({ title, description, date });
            return (0, httpResponses_1.created)(task);
        }
        catch (error) {
            return (0, httpResponses_1.serverError)(error);
        }
    }
}
exports.AddTaskController = AddTaskController;
