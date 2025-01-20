import { UpdateTaskController } from "../../../src/adapters/controllers/task/updateTask";
import { HttpRequest, Validation } from "../../../src/adapters/interfaces";
import { InvalidParamError } from "../../../src/adapters/presentations/api/errors/invalid-param-error";
import { NotFoundError } from "../../../src/adapters/presentations/api/errors/not-found-error";
import { ServerError } from "../../../src/adapters/presentations/api/errors/server-error";
import {
  badRequest,
  notFound,
  serverError,
} from "../../../src/adapters/presentations/api/httpResponses/httpResponses";
import { Task } from "../../../src/entities/task";
import { UpdateTaskModel, UpdateTask } from "../../../src/usecases/updateTask";

interface SutTypes {
  controller: UpdateTaskController;
  updateTaskStub: UpdateTask;
  validationStub: Validation;
}

const makeTaskMock = (): Task => ({
  id: "any_id",
  title: "any_title",
  description: "any_description",
  date: "13/08/2001",
});

const makeUpdateTaskMock = (): HttpRequest => ({
  body: {
    id: "123",
    title: "any_title",
    description: "any_description",
    date: "13/08/2001",
  },
});

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate(data: any): Error | void {
      return;
    }
  }

  return new ValidationStub();
};

const makeUpdateTask = (): UpdateTask => {
  class UpdateTaskStub implements UpdateTask {
    async update(task: UpdateTaskModel): Promise<Task> {
      return Promise.resolve(makeTaskMock());
    }
  }

  return new UpdateTaskStub();
};

const makeSut = (): SutTypes => {
  const updateTaskStub = makeUpdateTask();
  const validationStub = makeValidation();
  const controller = new UpdateTaskController(updateTaskStub, validationStub);

  return {
    controller,
    updateTaskStub,
    validationStub,
  };
};

describe("Update Task Controller", () => {
  it("Should return status code 404 if the task was not found", async () => {
    // Arrange
    const { controller, updateTaskStub } = makeSut();
    const updateTaskMock = makeUpdateTaskMock();

    jest.spyOn(updateTaskStub, "update").mockImplementationOnce(() => {
      throw new NotFoundError();
    });

    // Act
    const response = await controller.handle(updateTaskMock);

    // Assert
    expect(response).toEqual(notFound(new NotFoundError()));
  });

  it("Should return status code 200 if the task was updated", async () => {
    // Arrange
    const { controller } = makeSut();
    const updateTaskMock = makeUpdateTaskMock();

    // Act
    const response = await controller.handle(updateTaskMock);

    // Assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(makeTaskMock());
  });

  it("Should return status code 400 if the update fields are invalid", async () => {
    // Arrange
    const { controller, validationStub } = makeSut();
    const updateTaskMock = makeUpdateTaskMock();

    jest
      .spyOn(validationStub, "validate")
      .mockReturnValueOnce(new InvalidParamError("date"));

    // Act
    const response = await controller.handle(updateTaskMock);

    // Assert
    expect(response.statusCode).toBe(400);
    expect(response).toEqual(badRequest(new InvalidParamError("date")));
  });

  it("Should return status code 500 if there was a server error", async () => {
    // Arrange
    const { controller, updateTaskStub } = makeSut();
    const updateTaskMock = makeUpdateTaskMock();

    jest.spyOn(updateTaskStub, "update").mockImplementationOnce(() => {
      throw new ServerError();
    });

    // Act
    const response = await controller.handle(updateTaskMock);

    // Assert
    expect(response.statusCode).toBe(500);
    expect(response).toEqual(serverError(new ServerError()));
  });
});
