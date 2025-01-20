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
const makeTasksMock = () => [
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
describe("Task Mongo Repository", () => {
    const mongoClient = mongoManager_1.MongoManager.getInstance();
    beforeAll(async () => {
        await mongoClient.connect(process.env.MONGO_URL);
    });
    afterAll(async () => {
        await mongoClient.disconnect();
    });
    it("Should return the tasks when the call is successful", async () => {
        // Arrange
        const { repository } = makeSut();
        const tasksMock = makeTasksMock();
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
});
