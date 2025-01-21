import { MongoManager } from "../../../../src/dataSources/config/mongoManager";
import { TaskMongoRepository } from "../../../../src/dataSources/db/repository";
import { Task } from "../../../../src/entities/task";
import { UpdateTaskModel } from "../../../../src/usecases/updateTask";

interface SutTypes {
  repository: TaskMongoRepository;
}

const makeSut = (): SutTypes => {
  const repository = new TaskMongoRepository();

  return {
    repository,
  };
};

const makeTasksListMock = (): Task[] => [
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

const makeTaskMock = (): Task => ({
  id: "123",
  title: "new title",
  description: "any_description",
  date: "13/08/2001",
});

const makeUpdateTaskMock = (): UpdateTaskModel => ({
  id: "123",
  title: "new title",
  description: "any_description",
  date: "13/08/2001",
});

describe("Task Mongo Repository", () => {
  const mongoClient = MongoManager.getInstance();

  beforeAll(async () => {
    await mongoClient.connect(process.env.MONGO_URL as string);
  });

  afterAll(async () => {
    await mongoClient.disconnect();
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
