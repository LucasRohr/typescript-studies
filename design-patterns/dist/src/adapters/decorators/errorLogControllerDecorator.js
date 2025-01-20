"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLogControllerDecorator = void 0;
class ErrorLogControllerDecorator {
    constructor(controller, errorLogRepository) {
        this.controller = controller;
        this.errorLogRepository = errorLogRepository;
    }
    async handle(httpRequest) {
        const httpResponse = await this.controller.handle(httpRequest);
        if (httpResponse.statusCode === 500) {
            await this.errorLogRepository.log(httpResponse.body.stack);
        }
        return httpResponse;
    }
}
exports.ErrorLogControllerDecorator = ErrorLogControllerDecorator;
