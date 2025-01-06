import { ErrorLogRepository } from "../../usecases/repository/errorLogRepository";
import { Controller } from "../interfaces/controller";
import { HttpRequest, HttpResponse } from "../interfaces/http";

export class ErrorLogControllerDecorator implements Controller {
  constructor(
    private readonly controller: Controller,
    private readonly errorLogRepository: ErrorLogRepository
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest);

    if (httpResponse.statusCode === 500) {
      await this.errorLogRepository.log(httpResponse.body.stack);
    }

    return httpResponse;
  }
}
