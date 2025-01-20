import { MongoManager } from "../../../../src/dataSources/config/mongoManager";
import { TaskMongoRepository } from "../../../../src/dataSources/db/repository";
import { Task } from "../../../../src/entities/task";

interface SutTypes {
  repository: TaskMongoRepository;
}

const makeSut = (): SutTypes => {
  const repository = new TaskMongoRepository();

  return {
    repository,
  };
};

const makeTasksMock = (): Task[] => [
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
  const mongoClient = MongoManager.getInstance();

  beforeAll(async () => {
    await mongoClient.connect(process.env.MONGO_URL as string);
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
