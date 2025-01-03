"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTaskController = void 0;
const invalid_param_error_1 = require("../../presentations/api/errors/invalid-param-error");
const missing_param_error_1 = require("../../presentations/api/errors/missing-param-error");
const httpResponses_1 = require("../../presentations/api/httpResponses/httpResponses");
class AddTaskController {
    constructor(addTaskUseCase, dateValidator) {
        this.addTaskUseCase = addTaskUseCase;
        this.dateValidator = dateValidator;
    }
    async handle(httpRequest) {
        const requiredFields = ["title", "description", "date"];
        const requestBody = httpRequest.body;
        for (const field of requiredFields) {
            if (!requestBody[field]) {
                return (0, httpResponses_1.badRequest)(new missing_param_error_1.MissingParamError(field));
            }
        }
        const { title, description, date } = requestBody;
        const isValid = this.dateValidator.isValid(date);
        if (!isValid) {
            return (0, httpResponses_1.badRequest)(new invalid_param_error_1.InvalidParamError("date"));
        }
        const task = await this.addTaskUseCase.add({ title, description, date });
        return (0, httpResponses_1.created)(task);
    }
}
exports.AddTaskController = AddTaskController;
