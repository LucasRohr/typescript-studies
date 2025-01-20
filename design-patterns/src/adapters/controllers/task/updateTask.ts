import { UpdateTask } from "../../../usecases/updateTask";
import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
} from "../../interfaces";
import { NotFoundError } from "../../presentations/api/errors/not-found-error";
import {
  badRequest,
  notFound,
  ok,
  serverError,
} from "../../presentations/api/httpResponses/httpResponses";

export class UpdateTaskController implements Controller {
  constructor(
    private readonly updateTaskUseCase: UpdateTask,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const validationError = this.validation.validate(httpRequest.body);

      if (validationError) {
        return badRequest(validationError);
      }

      const updatedTask = await this.updateTaskUseCase.update(httpRequest.body);

      return ok(updatedTask);
    } catch (error: any) {
      if (error.name == NotFoundError.name) {
        return notFound(error);
      }

      return serverError(error);
    }
  }
}
