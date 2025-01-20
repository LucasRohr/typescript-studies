"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listTasks_1 = require("../../../src/adapters/controllers/task/listTasks");
const httpResponses_1 = require("../../../src/adapters/presentations/api/httpResponses/httpResponses");
const makeTaskListMock = () => [
    {
        id: "123",
        title: "any_title",
        description: "any_description",
        date: "13/08/2001",
    },
];
const makeListTasks = () => {
    class ListTasksStub {
        async list() {
            return Promise.resolve(makeTaskListMock());
        }
    }
    return new ListTasksStub();
};
const makeSut = () => {
    const listTasksStub = makeListTasks();
    const listTasksController = new listTasks_1.ListTasksController(listTasksStub);
    return {
        controller: listTasksController,
        listTasksStub,
    };
};
describe("List Tasks Controller", () => {
    it("Should return status code 204 if the list is empty", async () => {
        // Arrange
        const { controller, listTasksStub } = makeSut();
        jest.spyOn(listTasksStub, "list").mockReturnValueOnce(Promise.resolve([]));
        // Act
        const response = await controller.handle();
        // Assert
        expect(response).toEqual((0, httpResponses_1.noContent)());
    });
    it("Should return status code 200 and the tasks list if it is not empty", async () => {
        // Arrange
        const { controller } = makeSut();
        // Act
        const response = await controller.handle();
        // Assert
        expect(response).toEqual((0, httpResponses_1.ok)(makeTaskListMock()));
    });
    it("Should return status code 500 if a server error occurs", async () => {
        // Arrange
        const { controller, listTasksStub } = makeSut();
        jest
            .spyOn(listTasksStub, "list")
            .mockReturnValueOnce(Promise.reject(new Error()));
        // Act
        const response = await controller.handle();
        // Assert
        expect(response).toEqual((0, httpResponses_1.serverError)(new Error()));
    });
    it("Should call the task list Use Case correctly", async () => {
        // Arrange
        const { controller, listTasksStub } = makeSut();
        const listSpy = jest.spyOn(listTasksStub, "list");
        // Act
        await controller.handle();
        // Assert
        expect(listSpy).toHaveBeenCalled();
    });
});
