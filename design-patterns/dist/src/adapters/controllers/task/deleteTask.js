"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskController = void 0;
const httpResponses_1 = require("../../presentations/api/httpResponses/httpResponses");
class DeleteTaskController {
    constructor(deleteTaskUseCase, validation) {
        this.deleteTaskUseCase = deleteTaskUseCase;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = this.validation.validate(httpRequest.body);
            if (error) {
                return (0, httpResponses_1.badRequest)(error);
            }
            const { id } = httpRequest.body;
            const deleteError = await this.deleteTaskUseCase.delete(id);
            if (deleteError) {
                return (0, httpResponses_1.serverError)(deleteError);
            }
            return (0, httpResponses_1.deleted)({ id });
        }
        catch (error) {
            return (0, httpResponses_1.serverError)(error);
        }
    }
}
exports.DeleteTaskController = DeleteTaskController;
