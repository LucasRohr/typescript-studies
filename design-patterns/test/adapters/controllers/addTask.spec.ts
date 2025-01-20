import { AddTask } from "../../../src/usecases";
import { Task } from "../../../src/entities/task";
import { AddTaskModel } from "../../../src/usecases/addTask";
import { AddTaskController } from "../../../src/adapters/controllers/task/addTask";
import { HttpRequest, Validation } from "../../../src/adapters/interfaces";
import {
  badRequest,
  serverError,
} from "../../../src/adapters/presentations/api/httpResponses/httpResponses";
import { MissingParamError } from "../../../src/adapters/presentations/api/errors/missing-param-error";

interface SutTypes {
  addTaskStub: AddTask;
  validationStub: Validation;
  sut: AddTaskController;
}

const makeAddTask = (): AddTask => {
  class AddTaskStub implements AddTask {
    async add(task: AddTaskModel): Promise<Task> {
      return Promise.resolve({
        id: "any_id",
        title: "any_title",
        description: "any_description",
        date: "13/08/2001",
      });
    }
  }

  return new AddTaskStub();
};

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate(data: any): Error | void {
      return;
    }
  }

  return new ValidationStub();
};

const makeSut = (): SutTypes => {
  const addTaskStub = makeAddTask();
  const validationStub = makeValidation();

  const addTaskController = new AddTaskController(addTaskStub, validationStub);

  return {
    addTaskStub,
    validationStub,
    sut: addTaskController,
  };
};

const makeTaskMock = (): HttpRequest => ({
  body: {
    title: "any_title",
    description: "any_description",
    date: "13/08/2001",
  },
});

describe("Add Task Controller", () => {
  it("Should call controller and create task with correct properties", async () => {
    // Arrange
    const mockTask = makeTaskMock();
    const { addTaskStub, sut: controller } = makeSut();

    const addSpy = jest.spyOn(addTaskStub, "add");

    // Act
    const response = await controller.handle(mockTask);

    // Assert
    expect(response.statusCode).toBe(201);
    expect(addSpy).toHaveBeenCalledWith({
      title: "any_title",
      description: "any_description",
      date: "13/08/2001",
    });
  });

  it("Should return 500 if AddTaskController throws a server error", async () => {
    // Arrange
    const { sut: controller, addTaskStub } = makeSut();
    const taskMock = makeTaskMock();

    jest
      .spyOn(addTaskStub, "add")
      .mockImplementationOnce(() => Promise.reject(new Error()));

    // Act
    const response = await controller.handle(taskMock);

    // Assert
    expect(response).toEqual(serverError(new Error()));
  });

  it("Should call the validation with the correct values", async () => {
    // Arrange
    const { sut: controller, validationStub } = makeSut();
    const taskMock = makeTaskMock();

    const validationSpy = jest.spyOn(validationStub, "validate");

    // Act
    await controller.handle(taskMock);

    // Assert
    expect(validationSpy).toHaveBeenCalledWith(taskMock.body);
  });

  it("Should return 400 if the validation is called with incorrect values", async () => {
    // Arrange
    const { sut: controller, validationStub } = makeSut();
    const taskMock = makeTaskMock();

    jest
      .spyOn(validationStub, "validate")
      .mockReturnValueOnce(new MissingParamError("title"));

    // Act
    const response = await controller.handle(taskMock);

    // Assert
    expect(response.statusCode).toBe(400);
    expect(response).toEqual(badRequest(new MissingParamError("title")));
  });
});
