"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addTask_1 = require("../../../src/adapters/controllers/task/addTask");
const httpResponses_1 = require("../../../src/adapters/presentations/api/httpResponses/httpResponses");
const missing_param_error_1 = require("../../../src/adapters/presentations/api/errors/missing-param-error");
const makeAddTask = () => {
    class AddTaskStub {
        async add(task) {
            return Promise.resolve({
                id: "any_id",
                title: "any_title",
                description: "any_description",
                date: "13/08/2001",
            });
        }
    }
    return new AddTaskStub();
};
const makeValidation = () => {
    class ValidationStub {
        validate(data) {
            return;
        }
    }
    return new ValidationStub();
};
const makeSut = () => {
    const addTaskStub = makeAddTask();
    const validationStub = makeValidation();
    const addTaskController = new addTask_1.AddTaskController(addTaskStub, validationStub);
    return {
        addTaskStub,
        validationStub,
        sut: addTaskController,
    };
};
const makeTaskMock = () => ({
    body: {
        title: "any_title",
        description: "any_description",
        date: "13/08/2001",
    },
});
describe("Add Task Controller", () => {
    it("Should call controller and create task with correct properties", async () => {
        // Arrange
        const mockTask = makeTaskMock();
        const { addTaskStub, sut: controller } = makeSut();
        const addSpy = jest.spyOn(addTaskStub, "add");
        // Act
        const response = await controller.handle(mockTask);
        // Assert
        expect(response.statusCode).toBe(201);
        expect(addSpy).toHaveBeenCalledWith({
            title: "any_title",
            description: "any_description",
            date: "13/08/2001",
        });
    });
    it("Should return 500 if AddTaskController throws a server error", async () => {
        // Arrange
        const { sut: controller, addTaskStub } = makeSut();
        const taskMock = makeTaskMock();
        jest
            .spyOn(addTaskStub, "add")
            .mockImplementationOnce(() => Promise.reject(new Error()));
        // Act
        const response = await controller.handle(taskMock);
        // Assert
        expect(response).toEqual((0, httpResponses_1.serverError)(new Error()));
    });
    it("Should call the validation with the correct values", async () => {
        // Arrange
        const { sut: controller, validationStub } = makeSut();
        const taskMock = makeTaskMock();
        const validationSpy = jest.spyOn(validationStub, "validate");
        // Act
        await controller.handle(taskMock);
        // Assert
        expect(validationSpy).toHaveBeenCalledWith(taskMock.body);
    });
    it("Should return 400 if the validation is called with incorrect values", async () => {
        // Arrange
        const { sut: controller, validationStub } = makeSut();
        const taskMock = makeTaskMock();
        jest
            .spyOn(validationStub, "validate")
            .mockReturnValueOnce(new missing_param_error_1.MissingParamError("title"));
        // Act
        const response = await controller.handle(taskMock);
        // Assert
        expect(response.statusCode).toBe(400);
        expect(response).toEqual((0, httpResponses_1.badRequest)(new missing_param_error_1.MissingParamError("title")));
    });
});
