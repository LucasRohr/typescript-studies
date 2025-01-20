"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateTask_1 = require("../../../src/adapters/controllers/task/updateTask");
const invalid_param_error_1 = require("../../../src/adapters/presentations/api/errors/invalid-param-error");
const not_found_error_1 = require("../../../src/adapters/presentations/api/errors/not-found-error");
const server_error_1 = require("../../../src/adapters/presentations/api/errors/server-error");
const httpResponses_1 = require("../../../src/adapters/presentations/api/httpResponses/httpResponses");
const makeTaskMock = () => ({
    id: "any_id",
    title: "any_title",
    description: "any_description",
    date: "13/08/2001",
});
const makeUpdateTaskMock = () => ({
    body: {
        id: "123",
        title: "any_title",
        description: "any_description",
        date: "13/08/2001",
    },
});
const makeValidation = () => {
    class ValidationStub {
        validate(data) {
            return;
        }
    }
    return new ValidationStub();
};
const makeUpdateTask = () => {
    class UpdateTaskStub {
        async update(task) {
            return Promise.resolve(makeTaskMock());
        }
    }
    return new UpdateTaskStub();
};
const makeSut = () => {
    const updateTaskStub = makeUpdateTask();
    const validationStub = makeValidation();
    const controller = new updateTask_1.UpdateTaskController(updateTaskStub, validationStub);
    return {
        controller,
        updateTaskStub,
        validationStub,
    };
};
describe("Update Task Controller", () => {
    it("Should return status code 404 if the task was not found", async () => {
        // Arrange
        const { controller, updateTaskStub } = makeSut();
        const updateTaskMock = makeUpdateTaskMock();
        jest.spyOn(updateTaskStub, "update").mockImplementationOnce(() => {
            throw new not_found_error_1.NotFoundError();
        });
        // Act
        const response = await controller.handle(updateTaskMock);
        // Assert
        expect(response).toEqual((0, httpResponses_1.notFound)(new not_found_error_1.NotFoundError()));
    });
    it("Should return status code 200 if the task was updated", async () => {
        // Arrange
        const { controller } = makeSut();
        const updateTaskMock = makeUpdateTaskMock();
        // Act
        const response = await controller.handle(updateTaskMock);
        // Assert
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual(makeTaskMock());
    });
    it("Should return status code 400 if the update fields are invalid", async () => {
        // Arrange
        const { controller, validationStub } = makeSut();
        const updateTaskMock = makeUpdateTaskMock();
        jest
            .spyOn(validationStub, "validate")
            .mockReturnValueOnce(new invalid_param_error_1.InvalidParamError("date"));
        // Act
        const response = await controller.handle(updateTaskMock);
        // Assert
        expect(response.statusCode).toBe(400);
        expect(response).toEqual((0, httpResponses_1.badRequest)(new invalid_param_error_1.InvalidParamError("date")));
    });
    it("Should return status code 500 if there was a server error", async () => {
        // Arrange
        const { controller, updateTaskStub } = makeSut();
        const updateTaskMock = makeUpdateTaskMock();
        jest.spyOn(updateTaskStub, "update").mockImplementationOnce(() => {
            throw new server_error_1.ServerError();
        });
        // Act
        const response = await controller.handle(updateTaskMock);
        // Assert
        expect(response.statusCode).toBe(500);
        expect(response).toEqual((0, httpResponses_1.serverError)(new server_error_1.ServerError()));
    });
});
