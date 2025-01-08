import { HttpResponse } from "../../../interfaces/http";
import { ServerError } from "../errors/server-error";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack as string),
});

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
});

export const deleted = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
