"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbListTasks_1 = require("../../../src/dataSources/db/dbListTasks");
const makeTaskListMock = () => [
    {
        id: "123",
        title: "any_title",
        description: "any_description",
        date: "13/08/2001",
    },
];
const makeTaskRepository = () => {
    class TaskRepositoryStub {
        list() {
            return Promise.resolve(makeTaskListMock());
        }
        add(taskData) {
            return Promise.resolve({
                id: "any_id",
                title: "any_title",
                description: "any_description",
                date: "13/08/2001",
            });
        }
        delete(taskId) {
            return Promise.resolve();
        }
        update(updateTask) {
            return Promise.resolve({
                id: "any_id",
                title: "any_title",
                description: "any_description",
                date: "13/08/2001",
            });
        }
    }
    return new TaskRepositoryStub();
};
const makeSut = () => {
    const taskRepositoryStub = makeTaskRepository();
    const sut = new dbListTasks_1.DbListTasks(taskRepositoryStub);
    return {
        dbListTasks: sut,
        taskRepositoryStub,
    };
};
describe("Db List Tasks", () => {
    it("Should call TaskRepository", async () => {
        // Arrange
        const { dbListTasks, taskRepositoryStub } = makeSut();
        const listSpy = jest.spyOn(taskRepositoryStub, "list");
        // Act
        await dbListTasks.list();
        // Assert
        expect(listSpy).toHaveBeenCalled();
    });
    it("Should return a list of tasks on success", async () => {
        // Arrange
        const { dbListTasks, taskRepositoryStub } = makeSut();
        jest
            .spyOn(taskRepositoryStub, "list")
            .mockReturnValueOnce(Promise.resolve(makeTaskListMock()));
        // Act
        const response = await dbListTasks.list();
        // Assert
        expect(response).toEqual(makeTaskListMock());
    });
    it("Should throw an error is TaskRepository fails", async () => {
        // Arrange
        const { dbListTasks, taskRepositoryStub } = makeSut();
        jest
            .spyOn(taskRepositoryStub, "list")
            .mockReturnValueOnce(Promise.reject(new Error()));
        // Act
        const responsePromise = dbListTasks.list();
        // Assert
        await expect(responsePromise).rejects.toThrow();
    });
});
