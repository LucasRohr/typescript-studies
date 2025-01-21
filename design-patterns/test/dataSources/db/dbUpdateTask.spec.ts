import { HttpRequest } from "../../../src/adapters/interfaces";
import { NotFoundError } from "../../../src/adapters/presentations/api/errors/not-found-error";
import { ServerError } from "../../../src/adapters/presentations/api/errors/server-error";
import { DbUpdateTask } from "../../../src/dataSources/db/dbUpdateTask";
import { TaskMongoRepository } from "../../../src/dataSources/db/repository";
import { Task } from "../../../src/entities/task";
import { AddTaskModel } from "../../../src/usecases/addTask";
import { TaskRepository } from "../../../src/usecases/repository";
import { UpdateTaskModel } from "../../../src/usecases/updateTask";

interface SutTypes {
  dbUpdateTask: DbUpdateTask;
  repository: TaskRepository;
}

const makeTaskMock = (): Task => ({
  id: "123",
  title: "any_title",
  description: "any_description",
  date: "13/08/2001",
});

const makeUpdateTaskMock = (): UpdateTaskModel => ({
  id: "123",
  title: "any_title",
  description: "any_description",
  date: "13/08/2001",
});

const makeTaskRepository = (): TaskRepository => {
  class TaskRepositoryStub implements TaskRepository {
    add(taskData: AddTaskModel): Promise<Task> {
      return Promise.resolve({
        id: "any_id",
        title: "any_title",
        description: "any_description",
        date: "13/08/2001",
      });
    }

    list(): Promise<Task[]> {
      return Promise.resolve([]);
    }

    delete(taskId: string): Promise<void | Error> {
      return Promise.resolve();
    }

    update(updateTask: UpdateTaskModel): Promise<Task> {
      return Promise.resolve(makeTaskMock());
    }
  }

  return new TaskRepositoryStub();
};

const makeSut = (): SutTypes => {
  const repository = makeTaskRepository();
  const dbUpdateTask = new DbUpdateTask(repository);

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
      .mockReturnValueOnce(Promise.reject(new NotFoundError()));

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
      .mockReturnValueOnce(Promise.reject(new ServerError()));

    // Act
    const response = dbUpdateTask.update(updateTask);

    // Assert
    await expect(response).rejects.toThrow();
  });
});
