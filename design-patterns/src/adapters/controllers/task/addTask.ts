import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { InvalidParamError } from "../../presentations/api/errors/invalid-param-error";
import { MissingParamError } from "../../presentations/api/errors/missing-param-error";
import {
  badRequest,
  created,
} from "../../presentations/api/httpResponses/httpResponses";
import { Controller } from "../../interfaces/controller";
import { DateValidator } from "../../interfaces/dateValidator";
import { AddTask } from "../../../usecases/addTask";

export class AddTaskController implements Controller {
  constructor(
    private readonly addTaskUseCase: AddTask,
    private readonly dateValidator: DateValidator
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ["title", "description", "date"];
    const requestBody = httpRequest.body;

    for (const field of requiredFields) {
      if (!requestBody[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { title, description, date } = requestBody;

    const isValid = this.dateValidator.isValid(date);

    if (!isValid) {
      return badRequest(new InvalidParamError("date"));
    }

    const task = await this.addTaskUseCase.add({ title, description, date });

    return created(task);
  }
}
