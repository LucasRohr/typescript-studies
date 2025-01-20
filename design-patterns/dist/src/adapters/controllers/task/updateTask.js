"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskController = void 0;
const not_found_error_1 = require("../../presentations/api/errors/not-found-error");
const httpResponses_1 = require("../../presentations/api/httpResponses/httpResponses");
class UpdateTaskController {
    constructor(updateTaskUseCase, validation) {
        this.updateTaskUseCase = updateTaskUseCase;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const validationError = this.validation.validate(httpRequest.body);
            if (validationError) {
                return (0, httpResponses_1.badRequest)(validationError);
            }
            const updatedTask = await this.updateTaskUseCase.update(httpRequest.body);
            return (0, httpResponses_1.ok)(updatedTask);
        }
        catch (error) {
            if (error.name == not_found_error_1.NotFoundError.name) {
                return (0, httpResponses_1.notFound)(error);
            }
            return (0, httpResponses_1.serverError)(error);
        }
    }
}
exports.UpdateTaskController = UpdateTaskController;
