import { AddTask } from "../../../src/usecases";
import { Task } from "../../../src/entities/task";
import { AddATaskModel } from "../../../src/usecases/addTask";
import { AddTaskController } from "../../../src/adapters/controllers/task/addTask";
import { Validation } from "../../../src/adapters/interfaces";

class AddTaskStub implements AddTask {
  async add(task: AddATaskModel): Promise<Task> {
    return Promise.resolve({
      id: "any_id",
      title: "any_title",
      description: "any_description",
      date: "13/08/2001",
    });
  }
}

class ValidationStub implements Validation {
  validate(data: any): Error | void {
    return;
  }
}

describe("Add Task Controller", () => {
  it("Should call controller and create task with correct properties", async () => {
    // Arrange
    const mockTask = {
      title: "any_title",
      description: "any_description",
      date: "13/08/2001",
    };

    const addTaskStub = new AddTaskStub();
    const controller = new AddTaskController(addTaskStub, new ValidationStub());

    const addSpy = jest.spyOn(addTaskStub, "add");

    // Act
    const response = await controller.handle({ body: mockTask });

    // Assert
    expect(response.statusCode).toBe(201);
    expect(addSpy).toHaveBeenCalledWith({
      title: "any_title",
      description: "any_description",
      date: "13/08/2001",
    });
  });
});
