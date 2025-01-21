"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoManager_1 = require("../../../../src/dataSources/config/mongoManager");
const repository_1 = require("../../../../src/dataSources/db/repository");
const makeSut = () => {
    const repository = new repository_1.TaskMongoRepository();
    return {
        repository,
    };
};
const makeTasksListMock = () => [
    {
        id: "123",
        title: "any_title",
        description: "any_description",
        date: "13/08/2001",
    },
    {
        id: "456",
        title: "any_title",
        description: "any_description",
        date: "13/08/2001",
    },
];
const makeTaskMock = () => ({
    id: "123",
    title: "new title",
    description: "any_description",
    date: "13/08/2001",
});
const makeUpdateTaskMock = () => ({
    id: "123",
    title: "new title",
    description: "any_description",
    date: "13/08/2001",
});
describe("Task Mongo Repository", () => {
    const mongoClient = mongoManager_1.MongoManager.getInstance();
    beforeAll(async () => {
        await mongoClient.connect(process.env.MONGO_URL);
    });
    afterAll(async () => {
        await mongoClient.disconnect();
    });
    beforeEach(async () => {
        await mongoClient.getCollection("tasks").deleteMany({});
    });
    it("Should return the tasks when the list method call is successful", async () => {
        // Arrange
        const { repository } = makeSut();
        const tasksMock = makeTasksListMock();
        // = Adding tasks to In Memory DB =
        await repository.add({
            title: "any_title",
            description: "any_description",
            date: "13/08/2001",
        });
        await repository.add({
            title: "any_title",
            description: "any_description",
            date: "13/08/2001",
        });
        // Act
        const tasks = await repository.list();
        // Assert
        expect(tasks).toBeTruthy();
        expect(tasks.length).toBe(tasksMock.length);
        tasks.forEach((task, index) => {
            expect(task.id).toBeTruthy();
            expect(task.title).toBe(tasksMock[index].title);
            expect(task.description).toBe(tasksMock[index].description);
            expect(task.date).toBe(tasksMock[index].date);
        });
    });
    it("Should return the updated task when the update method call is successful", async () => {
        // Arrange
        const { repository } = makeSut();
        const updateTaskMock = makeUpdateTaskMock();
        const taskMock = makeTaskMock();
        // = Adding task to In Memory DB =
        const createdTask = await repository.add({
            title: "any_title",
            description: "any_description",
            date: "13/08/2001",
        });
        // Act
        const response = await repository.update({
            ...updateTaskMock,
            id: createdTask.id,
        });
        // Assert
        expect(response).toEqual({
            ...taskMock,
            id: createdTask.id,
        });
    });
});
