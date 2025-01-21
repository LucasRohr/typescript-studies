"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../../../../src/adapters/presentations/api/config/app"));
const mongoManager_1 = require("../../../../../src/dataSources/config/mongoManager");
const supertest_1 = __importDefault(require("supertest"));
const repository_1 = require("../../../../../src/dataSources/db/repository");
const makeRepository = () => {
    const repository = new repository_1.TaskMongoRepository();
    return repository;
};
const makeUpdateTaskMock = () => ({
    id: "123",
    title: "new title",
    description: "any_description",
    date: "13/08/2001",
});
describe("Task Routes", () => {
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
    it("Should return status code 204 if Tasks List returns an empty result", async () => {
        // AAA
        await (0, supertest_1.default)(app_1.default).get("/api/tasks").expect(204);
    });
    it("Should return status code 200 if Tasks List returns a result", async () => {
        // Arrange
        const repository = makeRepository();
        // = Adding task to In Memory DB =
        await repository.add({
            title: "any_title",
            description: "any_description",
            date: "13/08/2001",
        });
        // Act & Assert
        await (0, supertest_1.default)(app_1.default).get("/api/tasks").expect(200);
    });
    it("Should return status code 200 if the Task Update call was sucessful", async () => {
        // Arrange
        const repository = makeRepository();
        const updateTaskMock = makeUpdateTaskMock();
        // = Adding task to In Memory DB =
        const createdTask = await repository.add({
            title: "any_title",
            description: "any_description",
            date: "13/08/2001",
        });
        // Act & Assert
        await (0, supertest_1.default)(app_1.default)
            .patch("/api/tasks")
            .send({
            ...updateTaskMock,
            id: createdTask.id,
        })
            .expect(200);
    });
});
