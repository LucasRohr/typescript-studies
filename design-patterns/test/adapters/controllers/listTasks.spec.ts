import { ListTasksController } from "../../../src/adapters/controllers/task/listTasks";
import { HttpResponse } from "../../../src/adapters/interfaces";
import {
  noContent,
  ok,
  serverError,
} from "../../../src/adapters/presentations/api/httpResponses/httpResponses";
import { Task } from "../../../src/entities/task";
import { ListTasks } from "../../../src/usecases/listTasks";

interface SutTypes {
  controller: ListTasksController;
  listTasksStub: ListTasks;
}

const makeTaskListMock = (): Task[] => [
  {
    id: "123",
    title: "any_title",
    description: "any_description",
    date: "13/08/2001",
  },
];

const makeListTasks = (): ListTasks => {
  class ListTasksStub implements ListTasks {
    async list(): Promise<Task[]> {
      return Promise.resolve(makeTaskListMock());
    }
  }

  return new ListTasksStub();
};

const makeSut = (): SutTypes => {
  const listTasksStub = makeListTasks();
  const listTasksController = new ListTasksController(listTasksStub);

  return {
    controller: listTasksController,
    listTasksStub,
  };
};

describe("List Tasks Controller", () => {
  it("Should return status code 204 if the list is empty", async () => {
    // Arrange
    const { controller, listTasksStub } = makeSut();

    jest.spyOn(listTasksStub, "list").mockReturnValueOnce(Promise.resolve([]));

    // Act
    const response = await controller.handle();

    // Assert
    expect(response).toEqual(noContent());
  });

  it("Should return status code 200 and the tasks list if it is not empty", async () => {
    // Arrange
    const { controller } = makeSut();

    // Act
    const response = await controller.handle();

    // Assert
    expect(response).toEqual(ok(makeTaskListMock()));
  });

  it("Should return status code 500 if a server error occurs", async () => {
    // Arrange
    const { controller, listTasksStub } = makeSut();

    jest
      .spyOn(listTasksStub, "list")
      .mockReturnValueOnce(Promise.reject(new Error()));

    // Act
    const response = await controller.handle();

    // Assert
    expect(response).toEqual(serverError(new Error()));
  });

  it("Should call the task list Use Case correctly", async () => {
    // Arrange
    const { controller, listTasksStub } = makeSut();

    const listSpy = jest.spyOn(listTasksStub, "list");

    // Act
    await controller.handle();

    // Assert
    expect(listSpy).toHaveBeenCalled();
  });
});
