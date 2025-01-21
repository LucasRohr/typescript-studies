"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_found_error_1 = require("../../../src/adapters/presentations/api/errors/not-found-error");
const server_error_1 = require("../../../src/adapters/presentations/api/errors/server-error");
const dbUpdateTask_1 = require("../../../src/dataSources/db/dbUpdateTask");
const makeTaskMock = () => ({
    id: "123",
    title: "any_title",
    description: "any_description",
    date: "13/08/2001",
});
const makeUpdateTaskMock = () => ({
    id: "123",
    title: "any_title",
    description: "any_description",
    date: "13/08/2001",
});
const makeTaskRepository = () => {
    class TaskRepositoryStub {
        add(taskData) {
            return Promise.resolve({
                id: "any_id",
                title: "any_title",
                description: "any_description",
                date: "13/08/2001",
            });
        }
        list() {
            return Promise.resolve([]);
        }
        delete(taskId) {
            return Promise.resolve();
        }
        update(updateTask) {
            return Promise.resolve(makeTaskMock());
        }
    }
    return new TaskRepositoryStub();
};
const makeSut = () => {
    const repository = makeTaskRepository();
    const dbUpdateTask = new dbUpdateTask_1.DbUpdateTask(repository);
    return {
        dbUpdateTask,
        repository,
    };
};
describe("DB Update Task", () => {
    it("Should call the repository with the correct update fields", async () => {
        // Arrange
        const { dbUpdateTask, repository } = makeSut();
        const updateTask = makeUpdateTaskMock();
        const repositorySpy = jest.spyOn(repository, "update");
        // Act
        await dbUpdateTask.update(updateTask);
        // Assert
        expect(repositorySpy).toHaveBeenCalledWith(updateTask);
    });
    it("Should return the updated task on success", async () => {
        // Arrange
        const { dbUpdateTask, repository } = makeSut();
        const updateTask = makeUpdateTaskMock();
        const taskMock = makeTaskMock();
        jest
            .spyOn(repository, "update")
            .mockReturnValueOnce(Promise.resolve(taskMock));
        // Act
        const response = await dbUpdateTask.update(updateTask);
        // Assert
        expect(response).toEqual(taskMock);
    });
    it("Should throw a Not Found error with status code 404 if the task to update does not exist", async () => {
        // Arrange
        const { dbUpdateTask, repository } = makeSut();
        const updateTask = makeUpdateTaskMock();
        jest
            .spyOn(repository, "update")
            .mockReturnValueOnce(Promise.reject(new not_found_error_1.NotFoundError()));
        // Act
        const response = dbUpdateTask.update(updateTask);
        // Assert
        await expect(response).rejects.toThrow();
    });
    it("Should throw a Server Error error with status code 500 if an internal error occurs", async () => {
        // Arrange
        const { dbUpdateTask, repository } = makeSut();
        const updateTask = makeUpdateTaskMock();
        jest
            .spyOn(repository, "update")
            .mockReturnValueOnce(Promise.reject(new server_error_1.ServerError()));
        // Act
        const response = dbUpdateTask.update(updateTask);
        // Assert
        await expect(response).rejects.toThrow();
    });
});
