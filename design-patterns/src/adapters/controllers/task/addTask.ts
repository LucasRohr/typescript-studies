import {
  badRequest,
  created,
  serverError,
} from "../../presentations/api/httpResponses/httpResponses";
import {
  Controller,
  Validation,
  HttpRequest,
  HttpResponse,
} from "../../interfaces";
import { AddTask } from "../../../usecases";

export class AddTaskController implements Controller {
  constructor(
    private readonly addTaskUseCase: AddTask,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);

      if (error) {
        return badRequest(error);
      }

      const requestBody = httpRequest.body;
      const { title, description, date } = requestBody;

      const task = await this.addTaskUseCase.add({ title, description, date });

      return created(task);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
