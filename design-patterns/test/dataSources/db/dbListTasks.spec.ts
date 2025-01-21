import { DbListTasks } from "../../../src/dataSources/db/dbListTasks";
import { Task } from "../../../src/entities/task";
import { AddTaskModel } from "../../../src/usecases/addTask";
import { TaskRepository } from "../../../src/usecases/repository";
import { UpdateTaskModel } from "../../../src/usecases/updateTask";

interface SutTypes {
  dbListTasks: DbListTasks;
  taskRepositoryStub: TaskRepository;
}

const makeTaskListMock = (): Task[] => [
  {
    id: "123",
    title: "any_title",
    description: "any_description",
    date: "13/08/2001",
  },
];

const makeTaskRepository = (): TaskRepository => {
  class TaskRepositoryStub implements TaskRepository {
    list(): Promise<Task[]> {
      return Promise.resolve(makeTaskListMock());
    }

    add(taskData: AddTaskModel): Promise<Task> {
      return Promise.resolve({
        id: "any_id",
        title: "any_title",
        description: "any_description",
        date: "13/08/2001",
      });
    }

    delete(taskId: string): Promise<void | Error> {
      return Promise.resolve();
    }

    update(updateTask: UpdateTaskModel): Promise<Task> {
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

const makeSut = (): SutTypes => {
  const taskRepositoryStub = makeTaskRepository();
  const sut = new DbListTasks(taskRepositoryStub);

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
