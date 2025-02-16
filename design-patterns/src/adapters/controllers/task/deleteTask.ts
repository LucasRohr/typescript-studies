import { DeleteTask } from "../../../usecases/deleteTask";
import {
  HttpRequest,
  HttpResponse,
  Validation,
  Controller,
} from "../../interfaces";
import {
  badRequest,
  deleted,
  serverError,
} from "../../presentations/api/httpResponses/httpResponses";

export class DeleteTaskController implements Controller {
  constructor(
    private readonly deleteTaskUseCase: DeleteTask,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);

      if (error) {
        return badRequest(error);
      }

      const { id } = httpRequest.body;

      const deleteError = await this.deleteTaskUseCase.delete(id);

      if (deleteError) {
        return serverError(deleteError);
      }

      return deleted({ id });
    } catch (error: any) {
      return serverError(error);
    }
  }
}
