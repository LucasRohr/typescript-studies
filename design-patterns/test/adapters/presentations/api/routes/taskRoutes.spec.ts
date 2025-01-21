import app from "../../../../../src/adapters/presentations/api/config/app";
import { MongoManager } from "../../../../../src/dataSources/config/mongoManager";
import request from "supertest";
import { TaskMongoRepository } from "../../../../../src/dataSources/db/repository";
import { UpdateTaskModel } from "../../../../../src/usecases/updateTask";

const makeRepository = (): TaskMongoRepository => {
  const repository = new TaskMongoRepository();

  return repository;
};

const makeUpdateTaskMock = (): UpdateTaskModel => ({
  id: "123",
  title: "new title",
  description: "any_description",
  date: "13/08/2001",
});

describe("Task Routes", () => {
  const mongoClient = MongoManager.getInstance();

  beforeAll(async () => {
    await mongoClient.connect(process.env.MONGO_URL as string);
  });

  afterAll(async () => {
    await mongoClient.disconnect();
  });

  beforeEach(async () => {
    await mongoClient.getCollection("tasks").deleteMany({});
  });

  it("Should return status code 204 if Tasks List returns an empty result", async () => {
    // AAA
    await request(app).get("/api/tasks").expect(204);
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
    await request(app).get("/api/tasks").expect(200);
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
    await request(app)
      .patch("/api/tasks")
      .send({
        ...updateTaskMock,
        id: createdTask.id,
      })
      .expect(200);
  });
});
